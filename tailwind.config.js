module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                light: {
                    primary: "#854D8E",
                    background: "#FFF9F0",
                    text: "#2B2B2B",
                },
                dark: {
                    primary: "#FBCD5C",
                    background: "#1A1A1A",
                    text: "#E0E0E0",
                },
            },
        },
    },
    plugins: [require("daisyui")],
}

