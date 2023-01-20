const keyframes = {
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
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        prim: {
          light: "#444242",
          DEFAULT: "#363636",
          dark: "#262424",
        },
        sec: "#CDE8EA",
        terc: "#F8FAC7",
      },
      animation: {
        wiggle: "wiggle 1s infinite;",
        closeDrawer: "closeDrawer 1s ease-in-out forwards",
        openDrawer: "openDrawer 1s ease-in-out forwards",
      },
      keyframes,
    },
  },
  plugins: [],
};
