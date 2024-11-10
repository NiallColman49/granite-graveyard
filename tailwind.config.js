/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./*.html'],
    theme: {
        container: {
            center: true,
            padding: '1rem',
        },
        fontFamily: {
            primary: ['Work Sans', 'serif'],
            secondary: ['BN Brick House Heavy Alt', 'serif'],
        },
        extend: {},
        colors: {
            'neon-green': '#E0E995',
            'dark-green': '#204848',
            'dark-purple': '#461952',
            'dark-blue': '#121343',
            white: '#FFFFFF',
        },
    },
    plugins: [],
};
