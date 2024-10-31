import { defineConfig } from "vite"
import solidPlugin from "vite-plugin-solid"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
    plugins: [solidPlugin(), tailwindcss()],
    build: {
        target: "esnext",
        outDir: "dist",
        assetsDir: "assets",
        emptyOutDir: true,
    },
    css: {
        transformer: "lightningcss",
    },
    server: {
        host: "127.0.0.1",
        port: 8000,
    },
})
