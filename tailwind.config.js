/* eslint-env node */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./views/**/*.{ht;l,js,ejs}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      display: ["Permanent Marker"],
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
