module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/prefer-stateless-function": [0, { "ignorePureComponents": 'Component' }],
    "import/no-extraneous-dependencies": [0],
    "import/prefer-default-export": [0],
    "react/no-danger": [0],
    "react/jsx-props-no-spreading": [0],
    "react/forbid-prop-types": [0],
    "react/destructuring-assignment": [0],
    "import/extensions": [0],
    "import/no-unresolved": [0],
    "jsx-a11y/anchor-is-valid": [ "off", {
      "components": [ "Link" ],
      "specialLink": [ "hrefLeft", "hrefRight" ],
      "aspects": [ "noHref", "invalidHref", "preferButton" ]
    }],
    "jsx-a11y/no-static-element-interactions": ["off"],
    "no-param-reassign": [0],
  },
};
