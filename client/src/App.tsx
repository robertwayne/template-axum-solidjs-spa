import { Route, Routes } from "@solidjs/router"

import { Footer } from "./components/Footer"
import NavHeader from "./components/NavHeader"
import { lazy } from "solid-js"

export const App = () => {
    const Home = lazy(() => import("./routes/Home"))
    const About = lazy(() => import("./routes/About"))
    const NotFound = lazy(() => import("./routes/NotFound"))

    return (
        <div class="flex w-full h-full max-w-screen-2xl flex-col bg-light-primary text-light-secondary transition dark:bg-dark-primary dark:text-dark-secondary">
            <NavHeader />

            <main class="flex h-full w-full grow flex-col items-center p-4">
                <Routes>
                    <Route path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="*" component={NotFound} />
                </Routes>
            </main>

            <Footer />
        </div>
    )
}
