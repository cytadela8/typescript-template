module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "filename-rules", "import"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:prettier/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  settings: {
    "import/resolver": {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
    },
  },
  ignorePatterns: [".eslintrc.js"],
  rules: {
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-module-boundary-types": ["warn"],
    "@typescript-eslint/strict-boolean-expressions": ["error"],
    "@typescript-eslint/no-floating-promises": ["error"],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      { args: "after-used", argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
    "import/order": [
      "warn",
      {
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        "newlines-between": "always",
      },
    ],
    "no-undefined": ["error"],
    "prefer-arrow-callback": ["error"],
    eqeqeq: ["error", "smart"],
    camelcase: [
      "warn",
      {
        properties: "always",
      },
    ],
    "no-console": ["warn"],
    "import/no-relative-packages": "error",
    "no-restricted-syntax": [
      "warn",
      {
        selector:
          "BinaryExpression[operator=/^(==|===|!=|!==)$/][left.raw=/^(true|false)$/], BinaryExpression[operator=/^(==|===|!=|!==)$/][right.raw=/^(true|false)$/]",
        message:
          "Don't compare for equality against boolean literals. If strict-boolean-expressions told you to do it, reload your editor. The warning should disappear.",
      },
      "warn",
      {
        selector: "TSEnumDeclaration",
        message:
          "Don't use enums - please rely on valueof",
      },
    ],
    "spaced-comment": ["error", "always"],
    "no-unused-vars": ["error", { "varsIgnorePattern": "^_", "argsIgnorePattern": "^_", "caughtErrorsIgnorePattern": "^_" }],
  },
};
