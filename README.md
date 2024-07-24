# Template: Axum / SolidJS SPA

## Backend

- **[Axum](https://github.com/tokio-rs/axum)**
- **[PostgreSQL](https://www.postgresql.org)**
- **[Mimalloc](https://github.com/purpleprotocol/mimalloc_rust)**

## Frontend

- **[SolidJS](https://github.com/solidjs/solid)** + **[Solid Router](https://github.com/solidjs/solid-router)**
- **[TypeScript](https://www.typescriptlang.org)**
- **[Tailwind CSS v4](https://tailwindcss.com)**
- **[Bun](https://bun.sh/)**
- **[Vite](https://vitejs.dev/)**

  ## Getting Started

- Clone the repository: `git clone https://github.com/robertwayne/template-axum-solidjs-spa`

- Change `.env.TEMPLATE` to `.env` and set your Postgres credentials _(if not using defaults)_.

- Install your dependencies with `bun i`.

- Build the client with `bun run build` from inside the `/client` directory. _Alternatively, you can use `bun run dev` to run the client with the vite dev server._

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

Command     | Action
----------- | ----------------------------------------------------------------
./update.sh | Updates the dependencies of both the client and server projects.
