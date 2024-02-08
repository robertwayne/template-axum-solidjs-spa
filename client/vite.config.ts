import * as dotenv from "dotenv"

import { defineConfig } from "vite"
import solidPlugin from "vite-plugin-solid"

dotenv.config({ path: "../.env" })

export default defineConfig({
    plugins: [solidPlugin()],
    build: {
        target: "esnext",
        outDir: "dist",
        assetsDir: "assets",
        emptyOutDir: true,
        // Disables asset inlining.
        assetsInlineLimit: 0,
    },
    server: {
        host: "127.0.0.1",
        port: 8000,
    }
})
