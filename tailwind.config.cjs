/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Poppins"],
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar-hide"),
    plugin(function ({ addVariant, matchUtilities }) {
      addVariant("not-last", "&:not(:last-child)");
      matchUtilities({
        bgimg: (value) => ({
          backgroundImage: value,
        }),
      });
    }),
  ],
};
