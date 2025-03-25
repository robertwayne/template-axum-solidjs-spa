import { ParentProps } from "solid-js"
import { Footer } from "./components/Footer"
import NavHeader from "./components/NavHeader"

export const App = (props: ParentProps) => {
    return (
        <div class="flex w-full h-full flex-col bg-[var(--primary)] text-[var(--secondary)] text-secondary transition max-w-[1200px] justify-center mx-auto">
            <NavHeader />

            <main class="flex w-full grow flex-col items-center">
                {props.children}
            </main>

            <Footer />
        </div>
    )
}
