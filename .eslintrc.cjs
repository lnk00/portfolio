module.exports = {
  extends: ["eslint:recommended", "plugin:import/recommended"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  env: {
    browser: true,
    node: true,
    es2022: true,
  },
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      extends: [
        "plugin:astro/recommended",
        "plugin:astro/jsx-a11y-recommended",
      ],
      rules: {},
    },
    {
      files: ["*.ts", "*.tsx"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:import/typescript",
        "plugin:react-hooks/recommended",
      ],
    },
    {
      files: ["*.tsx"],
      extends: ["plugin:react/recommended", "plugin:jsx-a11y/recommended"],
    },
  ],
};
