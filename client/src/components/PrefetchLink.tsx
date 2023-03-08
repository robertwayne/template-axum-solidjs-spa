import { JSX, onMount } from "solid-js"

import { A } from "@solidjs/router"
import { dataSaver } from "../stores/dataSaver"

/**
 * Wrapper around links that prefetches the route during the next available idle
 * frame.
 */
const PrefetchLink = ({
    to,
    file,
    onClick: handleClick,
    children,
}: {
    to: string
    file: string
    onClick?: () => void
    children: JSX.Element
}): JSX.Element => {
    onMount(() => {
        // Only prefetch if the user is not using the Save-Data header.
        if (!dataSaver) {
            requestIdleCallback(() => {
                import(`../routes/${file}.tsx`)
            })
        }
    })

    return (
        <A
            href={to}
            onClick={handleClick}
            class="border-b-2 border-b-light-highlight hover:text-light-highlight dark:border-b-dark-highlight  dark:hover:text-dark-highlight"
        >
            {children}
        </A>
    )
}

export default PrefetchLink
