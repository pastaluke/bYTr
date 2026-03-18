export default [
  {
    files: ['src/**/*.js'],
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'error',
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        document: 'readonly',
        window: 'readonly',
        console: 'readonly',
        fetch: 'readonly',
      },
    },
  },
];
