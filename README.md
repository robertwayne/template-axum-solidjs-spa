# Template: Axum / SolidJS SPA

## Backend

- __[Axum](https://github.com/tokio-rs/axum)__
- __[PostgreSQL](https://www.postgresql.org)__

## Frontend

- __[SolidJS](https://github.com/solidjs/solid)__
- __[Solid Router](https://github.com/solidjs/solid-router)__
- __[TypeScript](https://www.typescriptlang.org)__
- __[Tailwind CSS](https://tailwindcss.com)__
- __[Bun](https://bun.sh/) & [Vite](https://vitejs.dev/)__
## Getting Started

- Clone the repository: `git clone
   https://github.com/robertwayne/template-axum-solidjs-spa`
- Change `.env.TEMPLATE` to `.env` and set your Postgres credentials _(if not
   using defaults)_.
- Build the client with `pnpm run build` from inside the `/client` directory.
   _Alternatively, you can use `pnpm run dev` to run the client with vite dev
   server._
- Run the server with `cargo run` from inside the `/server` directory.
  - If you're serving from axum, visit `http://127.0.0.1:3000`.
  - If you're serving from vite, visit `http://127.0.0.1:8000`.

## Client Notes

- Async, naive prefetching for route links.
- Light/Dark mode themes built-in.
- Responsive navigation menu built-in.

## Server Notes

- Sets default Cache-Control headers via a middleware function.
- Uses tower-http CORS and Compression _(brotli)_ middleware.

## Additional Scripts

| Command | Action |
|---------|--------|
| ./update.sh | Updates the dependencies of both the client and server projects. |
