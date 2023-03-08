/**
 * Wrapper around an <a> tag leading to an external site. Always opens in a new
 * tab.
 */
const ExternalLink = ({
    to,
    underline,
    children,
}: {
    to: string
    underline?: boolean
    children: string
}) => {
    return (
        <a
            class={
                "font-bold hover:text-light-highlight dark:hover:text-dark-highlight" +
                (underline
                    ? " border-b-2 border-b-light-highlight dark:border-b-dark-highlight"
                    : "")
            }
            href={to}
            rel="noopener noreferrer"
            target="_blank"
        >
            {children}
        </a>
    )
}

export default ExternalLink
