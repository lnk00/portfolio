// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#05D7E7",
        secondary: "#FD296D",
        dark: "#151525",
        somber: "#025579",
        clear: "#D1F8FF",
      },
    },
    fontFamily: {
      sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      display: ["Permanent Marker"],
    },
  },
  plugins: [],
};