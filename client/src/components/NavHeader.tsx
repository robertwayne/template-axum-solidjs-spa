import { JSX, createSignal, onMount } from "solid-js"
import { isDark, setIsDark } from "../stores/isDark"

import { A } from "@solidjs/router"
import PrefetchLink from "./PrefetchLink"
import closeMenuIcon from "../../assets/close.svg"
import darkModeIcon from "../../assets/moon.svg"
import lightModeIcon from "../../assets/sun.svg"
import menuIcon from "../../assets/menu.svg"

const NavHeader = (): JSX.Element => {
    const [menuIsOpen, setMenuIsOpen] = createSignal(false)
    let hamburgerButton: HTMLButtonElement | undefined
    let hamburgerMenu: HTMLDivElement | undefined

    const links = [
        {
            to: "/",
            name: "Home",
        },
        {
            to: "/about",
            name: "About",
        },
    ]

    onMount(() => {
        if (isDark()) {
            document.documentElement.classList.add("dark")
        }
    })

    /**
     * Swap between light and dark theme, saving the choice to local storage.
     */
    const toggleTheme = (): void => {
        document.documentElement.classList.toggle("dark")
        localStorage.setItem("theme", isDark() ? "light" : "dark")

        setIsDark(!isDark())
    }

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
                <div class="absolute top-0 right-0 z-10 flex h-full w-full flex-col justify-center bg-light-primary bg-opacity-60 p-2 text-4xl font-bold backdrop-blur-xl dark:bg-dark-primary dark:bg-opacity-60">
                    <div class="flex items-center self-end">
                        <button
                            onClick={toggleTheme}
                            class="ml-4 flex h-[48px] w-[48px] self-end border-none bg-transparent"
                        >
                            <img
                                src={isDark() ? lightModeIcon : darkModeIcon}
                                alt="change theme icon"
                                width="36"
                                height="36"
                                class="flex self-center"
                            />
                        </button>

                        <button
                            onClick={toggleHamburgerMenu}
                            class="ml-4 flex self-end border-none bg-transparent"
                        >
                            <img
                                src={closeMenuIcon}
                                alt="close menu button"
                                width="48"
                                height="48"
                                class={isDark() ? "invert" : ""}
                            />
                        </button>
                    </div>

                    <ul class="flex grow flex-col justify-center gap-8">
                        {links.map((link) => {
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
                {links.map((link) => {
                    return (
                        <li class="ml-4 flex">
                            <PrefetchLink to={link.to} file={link.name}>
                                {link.name}
                            </PrefetchLink>
                        </li>
                    )
                })}

                <li>
                    <button onClick={toggleTheme} class="ml-4 flex border-none">
                        <img
                            src={isDark() ? lightModeIcon : darkModeIcon}
                            alt="change theme icon"
                            width="24"
                            height="24"
                        />
                    </button>
                </li>
            </ul>
        )
    }

    return (
        <header class="flex w-full items-center justify-between p-4 ">
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
                        width="48"
                        height="48"
                        alt="open menu button"
                        class={isDark() ? "invert" : "invert-0"}
                    />
                </button>

                <HamburgerMenu />
                <StandardMenu />
            </nav>
        </header>
    )
}

export default NavHeader
