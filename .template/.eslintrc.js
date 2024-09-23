module.exports = {
  root: true,
  plugins: ["@typescript-eslint/eslint-plugin", "boundaries"],
  extends: ["plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  ignorePatterns: [".eslintrc.js"],
  env: {
    node: true,
  },
  rules: {
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        varsIgnorePattern: "^_",
        argsIgnorePattern: "^_",
      },
    ],
    "boundaries/element-types": [
      2,
      {
        default: "disallow",
        rules: [
          {
            from: "core/domain/*",
            allow: ["core/domain/{entity}/entity", "core/domain/{entity}/repository"],
          },
          {
            from: "core/domain/*",
            disallow: ["core/domain/client"],
          },
        ],
      },
    ],
    "boundaries/no-imports": [
      2,
      {
        default: "disallow",
        rules: [
          {
            from: "core/domain/user",
            disallow: ["core/domain/client"],
          },
        ],
      },
    ],
  },
  settings: {
    "boundaries/elements": [
      {
        type: "domain",
        pattern: "core/domain/*",
      },
      {
        type: "common",
        pattern: "core/common/*",
      },
      {
        type: "service",
        pattern: "core/service/*",
      },
    ],
  },
};
