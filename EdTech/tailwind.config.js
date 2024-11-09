/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        darkGreen: '#152509',
        brightGreen: '#69bf23'
      },
      height: {
        line: '2px'
      },
      screens: {
        xs: '0px',
        smd: '540px'
      }
    },
  },
  plugins: [],
} 