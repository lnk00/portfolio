module.exports = {
  plugins: ["jsx-a11y"],
  extends: ["plugin:astro/recommended", "plugin:jsx-a11y/recommended"],
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {},
    },
  ],
};
