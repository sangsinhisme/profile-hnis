module.exports = {
    content: [
        './layouts/**/*.html',             // Hugo layouts
        './content/**/*.{html,md}',        // Hugo content
        './assets/**/*.{js,ts,jsx,tsx}',   // JS/TS assets
        './static/**/*.html',              // Static files
        './themes/**/layouts/**/*.html',   // Themes
        './style.css',                     // Tailwind style file (with @layer)
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
