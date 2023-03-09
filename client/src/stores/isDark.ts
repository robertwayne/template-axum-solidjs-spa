import { createSignal } from "solid-js"

let theme = localStorage.getItem("theme")

if (!theme) {
    // If we don't have a theme in localStorage, check the user's preference.
    // This is janky, because Chrome doesn't work with this in Linux (at least
    // not in Arch or Ubuntu, from my testing). It does work in Firefox.
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)")
    theme = prefersDark.matches ? "dark" : "light"
    localStorage.setItem("theme", theme)
}

export const [isDark, setIsDark] = createSignal(theme === "dark")
