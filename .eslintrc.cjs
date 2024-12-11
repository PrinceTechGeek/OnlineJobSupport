/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  extends: ['@react-ddd'],
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    quotes: ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-double'],
    'no-trailing-spaces': 'error',
    'max-len': ['warn', { code: 100 }],
    indent: ['error', 2],
    'no-unused-vars': 'warn',
    semi: ['error', 'always'],
    'react/jsx-no-useless-fragment': 'error',
    'react/self-closing-comp': 'error',
    'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
    'react/jsx-indent-props': ['error', 2],
    'jsx-a11y/alt-text': ['error', { elements: ['img'], required: true }],
    'react/no-unknown-property': ['off'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: ['node_modules/', 'dist/'],
};
