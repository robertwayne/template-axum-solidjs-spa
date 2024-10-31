use sqlx::PgPool;

#[derive(Clone)]
pub struct AppState {
    pub db: PgPool,
}

pub type SharedState = &'static AppState;

impl AppState {
    pub fn new(db: PgPool) -> Self {
        Self { db }
    }
}
