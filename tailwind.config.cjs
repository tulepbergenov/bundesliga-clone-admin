/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "25px",
    },
    extend: {
      fontFamily: {
        nunito: "Nunito, sans-serif",
      },
    },
  },
  plugins: [],
};
