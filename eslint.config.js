// eslint.config.js
import antfu from '@antfu/eslint-config';

export default antfu({
  typescript: {
    tsconfigPath: './tsconfig.json',
    overrides: {
      'vue/prop-name-casing': ['error', 'camelCase'],
      'vue/require-name-property': 'error',
      'camelcase': ['error', {
        ignoreDestructuring: false,
        ignoreImports: false,
        ignoreGlobals: false,
        properties: 'always',
      }],
      'vue/camelcase': ['error', {
        ignoreDestructuring: false,
        ignoreImports: false,
        ignoreGlobals: false,
      }],
      'vue/component-api-style': ['error', ['script-setup']],
      'vue/block-order': ['error', {
        order: ['script[setup]', 'template', 'style'],
      }],
      'vue/block-lang': ['error', {
        script: { lang: 'ts' },
      }],
      'ts/naming-convention': ['error', {
        selector: ['interface', 'typeAlias', 'typeLike', 'enum'],
        format: ['PascalCase'],
      }],
      'vue/component-definition-name-casing': ['error', 'PascalCase'],

    },
  },
  formatters: {
    css: false,
    html: true,
  },
  stylistic: {
    semi: true,
    singleQuote: true,
    indent: 2,
  },
  extends: [
    'plugin:filenames-simple/recommended-vue',
  ],
  rules: {
    // "filenames-simple/naming-convention": ["error",{"rule": 'camalCase'}]
  },
},
);
