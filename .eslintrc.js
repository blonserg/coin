module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "@babel/eslint-parser",
    ecmaVersion: 6,
    requireConfigFile: false
  },
  extends: [
    "@nuxtjs"
  ],
  plugins: [],
  // add your custom rules here
  rules: {}
};
