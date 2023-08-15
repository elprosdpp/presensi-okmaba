/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    screens: {
      sm: "0", // Mengatur mode mobile
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      textQuote: ["Bricolage Grotesque"],
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
