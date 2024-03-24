module.exports = {
  extends: [
    './eslintrc.base.js',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  plugins: ['jsx-a11y', 'react', 'react-hooks'],

  rules: { 'react/react-in-jsx-scope': 'off' },
};
