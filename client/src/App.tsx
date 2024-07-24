import { ParentProps } from "solid-js"
import { Footer } from "./components/Footer"
import NavHeader from "./components/NavHeader"

export const App = (props: ParentProps) => {
    return (
        <div class="flex w-full h-full max-w-screen-2xl flex-col bg-[var(--primary)] text-[var(--secondary)] text-secondary transition">
            <NavHeader />

            <main class="flex h-full w-full grow flex-col items-center p-4">
                {props.children}
            </main>

            <Footer />
        </div>
    )
}
