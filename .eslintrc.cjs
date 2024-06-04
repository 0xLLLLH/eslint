/** @type {import('@types/eslint').Linter.Config} */
module.exports = {
  env: { browser: true, es2020: true },
  extends: ['@styled.link/typescript/recommended'],
  parserOptions: {
    project: ['./tsconfig.eslint.json', './packages/*/tsconfig.json'],
    tsconfigRootDir: __dirname,
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['.eslintrc.cjs'],
      env: {
        node: true,
      },
    },
  ],
};
