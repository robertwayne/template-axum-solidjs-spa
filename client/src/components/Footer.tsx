import ExternalLink from "./ExternalLink"
import { JSX } from "solid-js"

export const Footer = (): JSX.Element => {
    return (
        <footer class="flex w-full flex-col items-center gap-1 p-2">
            <span>
                <ExternalLink to="https://github.com/robertwayne/template-axum-solidjs-spa">
                    GitHub
                </ExternalLink>
            </span>
            <span>&copy; {new Date().getFullYear()} Name / Company</span>
        </footer>
    )
}
