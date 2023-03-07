/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "25px",
    },
    extend: {
      fontFamily: {
        nunito: "Nunito, sans-serif",
      },
      backgroundImage: {
        404: "url('./src/assets/imgs/404.png')",
      },
    },
  },
  plugins: [],
};
