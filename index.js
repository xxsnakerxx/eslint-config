module.exports = {
  extends: ['airbnb', 'airbnb/hooks'],

  env: {
    es6: true,
    jest: true,
    node: true,
    browser: true,
  },

  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6,
  },

  parser: 'babel-eslint',

  globals: {
    __DEV__: true,
  },

  settings: {
    'import/ignore': [
      '\\.(coffee|scss|css|less|hbs|svg|json)$',
    ],
  },

  rules: {
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'no-use-before-define': 0,
    'no-param-reassign': [2, { 'props': false }],
    'no-underscore-dangle': 0,
    'prefer-promise-reject-errors': 0,
    'object-curly-newline': [2, { consistent: true }],
    'function-paren-newline': 0,

    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx'] }],
    'react/forbid-prop-types': 0,
    'react/sort-comp': [2, {
      order: [
        'displayName',
        'propTypes',
        'defaultProps',
        'static-methods',
        'instance-variables',
        'getters',
        'setters',
        'lifecycle',
        'everything-else',
        'render',
      ]
    }],
  },
}
