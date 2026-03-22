const js = require("@eslint/js");

module.exports = [
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        module: "readonly",
        require: "readonly",
        describe: "readonly",
        test: "readonly",
        expect: "readonly",
      },
    },
    rules: {
      "no-unused-vars": "warn",
    },
  },
];
