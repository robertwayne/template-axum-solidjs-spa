#![forbid(unsafe_code)]

use std::{net::SocketAddr, sync::Arc, time::Duration};

use axum::{
    http::{
        header::{ACCEPT, CONTENT_TYPE},
        HeaderValue, Method, StatusCode,
    },
    middleware,
    routing::get,
    Router,
};
use axum_cc::CacheControlLayer;
use sqlx::PgPool;
use tower_http::{
    compression::{predicate::SizeAbove, CompressionLayer},
    cors::CorsLayer,
    services::{ServeDir, ServeFile},
    trace::TraceLayer,
    CompressionLevel,
};
use tracing_subscriber::EnvFilter;

type Result<T> = std::result::Result<T, Box<dyn std::error::Error>>;

pub type SharedState = Arc<AppState>;

#[derive(Clone)]
pub struct AppState {
    db: PgPool,
}

#[tokio::main]
async fn main() -> Result<()> {
    dotenvy::dotenv().ok();

    tracing_subscriber::fmt()
        .compact()
        .with_env_filter(EnvFilter::from_default_env())
        .init();

    let db =
        PgPool::connect(&std::env::var("DATABASE_URL").unwrap_or_else(|_| {
            "postgres://postgres:postgres@localhost:5432/postgres".to_string()
        }))
        .await?;

    let state = Arc::new(AppState { db });
    let addr = SocketAddr::from(([127, 0, 0, 1], 3000));

    let router = Router::new()
        .nest("/api", api_handler(Arc::clone(&state)))
        .merge(static_file_handler());

    tracing::debug!("listening on {}", addr);

    axum::Server::bind(&addr)
        .serve(
            router
                .layer(
                    CorsLayer::new()
                        .allow_headers([ACCEPT, CONTENT_TYPE])
                        .max_age(Duration::from_secs(86400))
                        .allow_origin(
                            std::env::var("CORS_ORIGIN")
                                .unwrap_or_else(|_| "*".to_string())
                                .parse::<HeaderValue>()?,
                        )
                        .allow_methods(vec![
                            Method::GET,
                            Method::POST,
                            Method::PUT,
                            Method::DELETE,
                            Method::OPTIONS,
                            Method::HEAD,
                            Method::PATCH,
                        ]),
                )
                .layer(
                    CompressionLayer::new()
                        .quality(CompressionLevel::Precise(4))
                        .compress_when(SizeAbove::new(512)),
                )
                .layer(TraceLayer::new_for_http())
                .into_make_service(),
        )
        .await?;

    Ok(())
}

fn static_file_handler() -> Router {
    Router::new()
        .nest_service(
            "/",
            ServeDir::new("../client/dist")
                .not_found_service(ServeFile::new("../client/dist/index.html")),
        )
        .layer(CacheControlLayer::new())
}

fn api_handler(state: SharedState) -> Router {
    Router::new()
        .route("/health", get(|| async { (StatusCode::OK, "OK") }))
        .with_state(state)
}
