/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gotham: ["Gotham", "sans-serif"],
      },
      colors: {
        "liberet-primary-orange": "#FCAB3F",
        "liberet-primary-yellow": "#FDC963",
        "liberet-primary-gray": "#4D4D4D",
        "liberet-secondary-blue": "#A1D2CE",
        "liberet-secondary-pink": "#F49897",
        "liberet-secondary-gray": "#E4E4E4",
        "liberet-secondary-bone": "#FEF2F1",
      },
    },
  },
  plugins: [],
};
