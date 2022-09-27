module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "parser": "@typescript-eslint/parser",
  "plugins": ["solid"],
  "extends": ["eslint:recommended", "plugin:solid/typescript"],
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "rules": {
    ...require('./rules/js'),
    ...require('./rules/ts'),
    ...require('./rules/solid'),
  },
};