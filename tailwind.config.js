// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.zinc.500"),

            h1: {
              color: theme("colors.zinc.800"),
            },

            img: {
              width: theme("width.full"),
              "border-radius": theme("borderRadius.lg"),
              "box-shadow": theme("boxShadow.lg"),
              "object-fit": "cover",
            },
          },
        },
      }),
    },
    fontFamily: {
      sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      display: ["Permanent Marker"],
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};