use std::sync::Arc;

use sqlx::PgPool;

#[derive(Clone)]
pub struct AppState {
    pub _db: PgPool,
}

pub type SharedState = Arc<AppState>;

impl AppState {
    pub fn new(db: PgPool) -> Self {
        Self { _db: db }
    }
}
