const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#202225',
        secondary: '#5865f2',
        tertiary: '#6867AC',
        moonColor: '#93FFD8',
        gray: {
        900: '#202225',
        800: '#2f3136',
        700: '#36393f',
        600: '#4f545c',
        400: '#d4d7dc',
        300: '#e3e5e8',
        200: '#ebedef',
        100: '#f2f3f5'
        }
      }
    },
  },
  plugins: [],
}
