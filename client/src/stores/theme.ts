import { createSignal, createEffect } from "solid-js"

export type Theme = "light" | "dark"

const getPreferredTheme = (): Theme => {
    const storedTheme = localStorage.getItem("theme")
    if (storedTheme === "light" || storedTheme === "dark") {
        return storedTheme as Theme
    }
    return window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark"
}

export const [theme, setTheme] = createSignal<Theme>(getPreferredTheme())

createEffect(() => {
    const currentTheme = theme()
    document.documentElement.setAttribute("data-theme", currentTheme)
    localStorage.setItem("theme", currentTheme)
})

export const toggleTheme = (): void => {
    setTheme(theme() === "light" ? "dark" : "light")
}
