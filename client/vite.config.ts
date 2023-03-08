import * as dotenv from "dotenv"

import { defineConfig } from "vitest/config"
import solidPlugin from "vite-plugin-solid"

dotenv.config({ path: "../.env" })

export default defineConfig({
    plugins: [solidPlugin()],
    build: {
        target: "esnext",
        outDir: "dist",
        assetsDir: "assets",
        emptyOutDir: true,
    },
    server: {
        host: "127.0.0.1",
        port: 8000,
    },
    define: {
        "import.meta.vitest": false,
    },
    test: {
        includeSource: ["tests/**/*.{ts,tsx}"],
        globals: true,
        environment: "happy-dom",
    },
})
