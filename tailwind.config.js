/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-green": "#40A578",
        "button-bg": " #9DDE8B",
        "button-hover-bg": "#40A578",
        "div-hover-bg": "#EFFFEB",
        "line": "#9DDE8A"
      },
      borderRadius: {
        "4xl": "2rem",
      },
      screens: {
        xs: '300px', // Adjust the size as per your needs
      },
    },
  },
  plugins: [],
};
