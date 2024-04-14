/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    colors: {
      text: "#252323",
      background1: "#F3F4F6",
      primary1: "#cf4a47",
      secondary1: "#86dfcf",
      accent1: "#678ed7",
      white: "#ffffff",
    },

    boxShadow: {
      "3xl": "0 35px 60px -15px rgba(rgb(207, 74, 71, 0.3)",
    },
  },
};
