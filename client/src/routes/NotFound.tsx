import PrefetchLink from "../components/PrefetchLink"

const NotFound = () => {
    return (
        <div class="flex w-full flex-col items-center justify-center">
            <h2 class="mb-6 text-3xl font-bold">Page Not Found</h2>

            <PrefetchLink to="/" file="Home">
                Return to Home
            </PrefetchLink>
        </div>
    )
}

export default NotFound
