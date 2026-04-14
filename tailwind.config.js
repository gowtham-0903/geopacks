/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#0A2540',
                    dark: '#081D32',
                    light: '#1C3F63',
                },
                accent: {
                    DEFAULT: '#5a9b9e',
                    dark: '#4d8689',
                },
                secondary: '#FFFFFF',
            },
            fontFamily: {
                sans: ['Manrope', 'Segoe UI', 'system-ui', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
