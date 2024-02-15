module.exports = {
  root: true,
  extends: [
    '@react-native',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier', '@typescript-eslint', 'jest'],
  parser: '@typescript-eslint/parser',
  /* rules: {
    'prettier/prettier': 0,
  }, */
  rules: {
    'prettier/prettier': 0,
    'react/jsx-uses-react': 1,
  },
};