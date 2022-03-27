module.exports = {
    env: {
      browser: true,
      es6: true,
      node: true,
    },
    parser: "@typescript-eslint/parser",
    extends: ['airbnb', 'airbnb-typescript'],
    rules: {
      '@typescript-eslint/no-throw-literal': 'off',
      'consistent-return': 'off',
      'no-restricted-syntax': 'off',
      'no-underscore-dangle': 'off',
      'import/extensions': 'off',
      'import/no-extraneous-dependencies': 'off',
      'react/jsx-max-props-per-line': [1, { "maximum": 3 }],
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