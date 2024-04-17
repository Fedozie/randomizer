/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': 'hsl(204, 100%, 50%)',
        'primary-green': 'hsl(145, 56%, 52%)',
        'primary-grey': 'hsl(0, 0%, 90%)',
        'primary-text-color': 'hsl(0, 0%, 96%)',
        'box-shadow': 'hsl(0, 0%, 31%)'
      }
    },
  },
  plugins: [],
}

