/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        cyellow: "#f4d04e",
        cgrey: "#808080",
        cblack: "#121212",
      },
      fontFamily: {
        body: "Figtree",
      },
    },
  },
  plugins: [],
};
