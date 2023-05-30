/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    // eslint recommended
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    //typescript 
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:@typescript-eslint/strict",
    // solid/astro
    "plugin:solid/typescript",
    "plugin:astro/recommended",
    // a11y
    "plugin:astro/jsx-a11y-strict",
    "plugin:jsx-a11y/strict",
  ],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "error",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "2021",
    sourceType: "module",
    jsx: true,
    project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint", "solid", "astro", "jsx-a11y", "only-warn"],
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
  ignorePatterns: ["dist/**/*", ".eslintrc.*"],
};
