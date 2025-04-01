import { JSX, createSignal } from "solid-js"

import { A } from "@solidjs/router"
import PrefetchLink from "./PrefetchLink"
import closeMenuIcon from "../../assets/close.svg"
import darkModeIcon from "../../assets/moon.svg"
import lightModeIcon from "../../assets/sun.svg"
import menuIcon from "../../assets/menu.svg"
import { theme, toggleTheme } from "../stores/theme"

const NavHeader = (): JSX.Element => {
    const [menuIsOpen, setMenuIsOpen] = createSignal(false)
    let hamburgerButton: HTMLButtonElement | undefined
    let hamburgerMenu: HTMLDivElement | undefined

    const routes: Array<{
        name: string
        to: string
        file?: string
    }> = [
        {
            name: "Home",
            to: "/",
        },
        {
            name: "About",
            to: "/about",
        },
    ]

    /**
     * Opens or closes the hamburger menu.
     */
    const toggleHamburgerMenu = (): void => {
        hamburgerButton?.classList.toggle("hidden")
        hamburgerMenu?.classList.toggle("hidden")

        setMenuIsOpen(!menuIsOpen)
    }

    const HamburgerMenu = (): JSX.Element => {
        return (
            <div ref={hamburgerMenu} class={menuIsOpen() ? "" : "hidden"}>
                <div class="bg-primary bg-opacity-60 dark:bg-primary dark:bg-opacity-60 absolute top-0 right-0 z-10 flex h-full w-full flex-col justify-center p-2 text-4xl font-bold backdrop-blur-xl">
                    <div class="flex items-center justify-between">
                        <button
                            onClick={toggleTheme}
                            class="flex h-[48px] w-[48px] border-none bg-transparent"
                        >
                            <img
                                src={
                                    theme() === "light"
                                        ? darkModeIcon
                                        : lightModeIcon
                                }
                                alt="change theme"
                                width="40px"
                                height="40px"
                                class="flex self-center"
                            />
                        </button>

                        <button
                            onClick={toggleHamburgerMenu}
                            class="flex self-end border-none bg-transparent"
                        >
                            <img
                                src={closeMenuIcon}
                                alt="close menu"
                                width="44px"
                                height="44px"
                                class={
                                    theme() === "light" ? "invert" : "invert-0"
                                }
                            />
                        </button>
                    </div>

                    <ul class="flex grow flex-col justify-center gap-8">
                        {routes.map((link) => {
                            return (
                                <li class="ml-4 flex h-fit w-fit">
                                    <PrefetchLink
                                        to={link.to}
                                        file={link.name}
                                        onClick={toggleHamburgerMenu}
                                    >
                                        {link.name}
                                    </PrefetchLink>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }

    const StandardMenu = (): JSX.Element => {
        return (
            <ul class="hidden h-fit text-xl font-bold lg:flex">
                {routes.map((route) => {
                    return (
                        <li class="ml-4 flex">
                            <PrefetchLink
                                to={route.to}
                                file={route.file ?? route.name}
                            >
                                {route.name}
                            </PrefetchLink>
                        </li>
                    )
                })}

                <li class="flex items-center justify-center">
                    <button onClick={toggleTheme} class="ml-4 flex border-none">
                        <img
                            src={
                                theme() === "light"
                                    ? darkModeIcon
                                    : lightModeIcon
                            }
                            alt="change theme"
                            width="32px"
                            height="32px"
                        />
                    </button>
                </li>
            </ul>
        )
    }

    return (
        <header class="flex w-full items-center justify-between p-4">
            <h1 class="text-3xl font-bold">
                <A href="/">Template</A>
            </h1>

            <nav>
                <button
                    ref={hamburgerButton}
                    onClick={toggleHamburgerMenu}
                    class="lg:hidden"
                >
                    <img
                        src={menuIcon}
                        width="44px"
                        height="44px"
                        alt="open menu"
                        class={theme() === "light" ? "invert" : "invert-0"}
                    />
                </button>

                <HamburgerMenu />
                <StandardMenu />
            </nav>
        </header>
    )
}

export default NavHeader
