use std::sync::Arc;

use sqlx::PgPool;

#[derive(Clone)]
pub struct AppState {
    pub db: PgPool,
}

pub type SharedState = Arc<AppState>;

impl AppState {
    pub fn new(db: PgPool) -> Self {
        Self { db }
    }
}
