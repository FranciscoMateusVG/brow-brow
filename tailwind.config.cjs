/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary_text: "#FDFDFD",
        secundary_text: "#DADADA",
        black: "#060606",
        primary: {
          100: "#0DB760",
          200: "#088846",
          300: "#066032",
        },
        secundary: {
          100: "#09FF80",
          200: "#18F684",
          300: "#16E37A",
          400: "#13D06F",
        },
      },
    },
  },
  plugins: [],
};
