/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 1s infinite;",
        closeDrawer: "closeDrawer 1s ease-in-out forwards",
        openDrawer: "openDrawer 1s ease-in-out forwards",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": {
            transform: "translateX(0)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateX(15%)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        closeDrawer: {
          "100%": {
            transform: "translateX(-225px)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
        },
        openDrawer: {
          "0%": {
            transform: "translateX(-225px)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "100%": {
            transform: "translateX(0)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
        },
      },
    },
  },
  plugins: [],
};
