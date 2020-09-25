module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    mocha: true
  },
  extends: ["airbnb-base", "plugin:mocha/recommended"],
  plugins: ["mocha"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "no-underscore-dangle": "off",
    "func-names": "off",
    "consistent-return": "off",
    "mocha/no-mocha-arrows": "off",
    "mocha/no-setup-in-describe": "off",
  },
};
