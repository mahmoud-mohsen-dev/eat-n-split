/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                myFont: `sans-serif`,
                openSans: `"Open Sans", sans-serif`,
            },
            colors: {
                "color-lightest": "#fff4e6",
                "color-light": "#ffe8cc",
                "color-medium": "#ffa94d",
                "color-dark": "#ff922b",
                "color-black": "#495057",
                "color-lighter-black": "#343a40",
                "color-red": "#e03131;",
                "color-green": "#66a80f",
            },
            backgroundColor: {
                "color-lightest": "#fff4e6",
                "color-light": "#ffe8cc",
                "color-medium": "#ffa94d",
                "color-dark": "#ff922b",
                "color-black": "#495057",
                "color-lighter-black": "#343a40",
                "color-red": "#e03131;",
                "color-green": "#66a80f",
            },
        },
    },
    plugins: [],
};
