module.exports = {
    env: {
      browser: true,
      es6: true,
    },
    parser: 'babel-eslint',
    extends: [
      'plugin:react/recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
      'standard',
      'standard-react',
      'prettier',
    ],
    globals: {
      React: 'writable',
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 6,
      sourceType: 'module',
    },
    plugins: ['react', 'react-hooks', 'prettier', 'eslint-plugin-import-helpers'],
    rules: {
      'import-helpers/order-imports': [
        'warn',
        {
          newlinesBetween: 'always',
          groups: [
            'module',
            '/^(constants|hooks|utils)/',
            '/^components/',
            '/^images/',
            '/^styles/',
          ],
          alphabetize: { order: 'asc', ignoreCase: false },
        },
      ],
      'no-console': 0,
      'no-unused-vars': 2,
      'prefer-const': [
        2,
        {
          destructuring: 'any',
          ignoreReadBeforeAssign: false,
        },
      ],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/react-in-jsx-scope': 'off',
      'import/no-unresolved': 'off',
      'react/prop-types': 'off',
      'react/display-name': 'off',
      'no-trailing-spaces': 'error',
    },
  };