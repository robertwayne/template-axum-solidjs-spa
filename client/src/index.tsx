import "./index.css"

import { App } from "./App"
import { Router } from "@solidjs/router"
import { render } from "solid-js/web"

declare global {
    interface Navigator {
        connection?: {
            // Currently this feature is only available Chrome/Opera/Edge
            // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Save-Data
            saveData?: boolean
        }
    }
}

const app = document.getElementById("app")
if (app) {
    render(
        () => (
            <Router>
                <App />
            </Router>
        ),
        app
    )
}
