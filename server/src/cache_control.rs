use axum::{
    http::{
        header::{CACHE_CONTROL, CONTENT_TYPE},
        HeaderValue,
    },
    middleware::Next,
    response::Response,
};

/// Set a Cache-Control header for defined static files.
pub async fn set_cache_header<B>(req: axum::http::Request<B>, next: Next<B>) -> Response {
    let cache_types = vec![
        "text/css",
        "application/javascript",
        "image/svg+xml",
        "image/webp",
        "font/woff2",
    ];

    let mut response = next.run(req).await;

    if let Some(content_type) = response.headers().get(CONTENT_TYPE) {
        let Ok(content_type) = content_type.to_str() else {
            return response;
        };

        // As the only HTML file we serve is index.html, we can check for the
        // content type and set the Cache-Control header accordingly.
        if content_type == "text/html" {
            response
                .headers_mut()
                .insert(CACHE_CONTROL, HeaderValue::from_static("no-cache"));

            return response;
        }

        if cache_types.contains(&content_type) {
            response
                .headers_mut()
                .insert(CACHE_CONTROL, HeaderValue::from_static("max-age=31536000"));
        }
    }

    response
}
