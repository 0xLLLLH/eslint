import { type Linter } from 'eslint';

const defaultConfig: Linter.Config = {
  extends: ['plugin:wc/recommended', 'plugin:lit/recommended', '@styled-link/typescript/recommended'],
};

export default defaultConfig;
