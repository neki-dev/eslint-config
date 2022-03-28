module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb'],
  rules: {
    'react/jsx-max-props-per-line': [1, { "maximum": 3 }],
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/anchor-has-content': 'off',
    'import/extensions': 'off',
    'no-underscore-dangle': 'off',
    'no-restricted-syntax': 'off',
  },
};