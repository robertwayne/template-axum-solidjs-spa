import { createSignal } from "solid-js"

export const [isDark, setIsDark] = createSignal(
    localStorage.getItem("theme") === "dark"
        ? true
        : false || matchMedia("(prefers-color-scheme: dark)").matches
)
