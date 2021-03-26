module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    '@trbl/eslint-config/configs/base',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'no-use-before-define': 'off',
    'import/extensions': 'off',
    'react/prop-types': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        overrides: [
          {
            files: ['*.ts', '*.tsx'],
            parser: '@typescript-eslint/parser',
            extends: [
              'plugin:@typescript-eslint/recommended',
            ],
          },
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
