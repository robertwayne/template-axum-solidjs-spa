module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                light: {
                    primary: "#f8f9fa",
                    secondary: "#272727",
                    highlight: "#3f5ab1",
                },
                dark: {
                    primary: "#222831",
                    secondary: "#dddbd8",
                    highlight: "#ffc857",
                },
            },
        },
        plugins: [],
    },
    darkMode: "class",
}
