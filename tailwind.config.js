/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#40A578'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    },
  },
  plugins: [],
}