import "./index.css"

import { App } from "./App"
import { Route, Router } from "@solidjs/router"
import { render } from "solid-js/web"
import { lazy } from "solid-js"

declare global {
    interface Navigator {
        connection?: {
            // Currently this feature is only available Chrome/Opera/Edge
            // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Save-Data
            saveData?: boolean
        }
    }
}

const Home = lazy(() => import("./routes/Home"))
const About = lazy(() => import("./routes/About"))
const NotFound = lazy(() => import("./routes/NotFound"))

const app = document.getElementById("app")
if (app) {
    render(
        () => (
            <Router root={App}>
                <Route path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="*" component={NotFound} />
            </Router>
        ),
        app
    )
}
