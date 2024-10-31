import { JSX, onMount } from "solid-js"

import { A } from "@solidjs/router"
import { dataSaver } from "../stores/dataSaver"

/**
 * Wrapper around internal links that prefetches the route during the next
 * available idle frame.
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
            class="border-b-2 border-b-[var(--highlight)] hover:text-[var(--highlight)] transition"
        >
            {children}
        </A>
    )
}

export default PrefetchLink
