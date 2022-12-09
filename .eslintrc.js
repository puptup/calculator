module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier", "eslint:recommended"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["prettier", "react", "react-hooks", "jsx-a11y"],
  rules: {
    "react/react-in-jsx-scope": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/state-in-constructor": 0,
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/prop-types": 0,
    "no-unused-vars": "warn",
    "jsx-a11y/click-events-have-key-events": 0,
    "react/function-component-definition": [2, { namedComponents: "arrow-function" }],
    "prettier/prettier": [
      "error",
      {
        trailingComma: "es5",
        singleQuote: false,
        printWidth: 100,
        tabWidth: 2,
        semi: true,
        endOfLine: "auto",
      },
    ],
  },
};
