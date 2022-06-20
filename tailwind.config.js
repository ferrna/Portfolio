/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./src/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter", "serif"],
      },
      /* Wave Hand animation keyframes */
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(18.0deg)" },
          "20%": { transform: "rotate(-6.0deg)" },
          "30%": { transform: "rotate(16.0deg)" },
          "40%": { transform: "rotate(-7.0deg)" },
          "50%": { transform: "rotate(11.0deg)" },
          "60%": { transform: "rotate(-2.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
      },
      animation: {
        wave: "wave 2.5s infinite",
      },
    },
  },
  plugins: [],
};
