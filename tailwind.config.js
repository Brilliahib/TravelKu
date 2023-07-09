/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["index.html"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "16px",
      },
      extend: {
        colors: {
          h1color: "#3d535f",
          maincolor: "hsl(250, 69%, 61%)",
          bgcolor: "#fff",
          main: "#083358",
        },
        screens: {
          "2xl": "1320px",
        },
      },
    },
  },
  plugins: [],
};
