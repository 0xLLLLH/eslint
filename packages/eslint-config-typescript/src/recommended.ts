import typescriptConfig from './typescript';

export default {
  ...typescriptConfig,
  extends: [...typescriptConfig.extends, 'plugin:prettier/recommended'],
};
