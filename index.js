module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json"
  },
  extends: ['airbnb', 'airbnb-typescript'],
  rules: {
    'react/jsx-max-props-per-line': [1, { "maximum": 3 }],
    'import/extensions': 'off',
    'no-underscore-dangle': 'off',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: true
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false
        }
      }
    ],
  },
};