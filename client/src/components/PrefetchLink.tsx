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
                import(`../routes/${file}.tsx`).catch((err) =>
                    console.warn(`Failed to prefetch ${file}:`, err),
                )
            })
        }
    })

    return (
        <A
            href={to}
            onClick={handleClick}
            class="border-b-2 border-b-[var(--highlight)] transition hover:text-[var(--highlight)]"
        >
            {children}
        </A>
    )
}

export default PrefetchLink
