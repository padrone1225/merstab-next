/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "main-gradient":
          "linear-gradient(112.42deg, #2723E2 7.74%, #AF09D9 90.58%)",
      },
    },
  },
  plugins: [],
};
