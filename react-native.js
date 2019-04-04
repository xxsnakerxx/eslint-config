module.exports = {
  extends: '@xxsnakerxx/eslint-config',

  env: {
    browser: false,
    'react-native/react-native': true,
  },

  plugins: [
    'react-native',
  ],

  rules: {
    'react-native/no-unused-styles': 2,
    'react-native/no-inline-styles': 2,
  },
};
