import { fixupPluginRules } from '@eslint/compat';
import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import _import from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

export default [
  {
    ignores: [
      '**/node_modules',
      '**/dist',
      '**/coverage',
      '**/build',
      '**/.idea',
      'android/**',
      'ios/**',
      'eslint.config.mjs',
      'babel.config.js',
      'metro.config.js',
      'jest.config.js',
      'index.js',
      '.prettierrc.js',
    ],
  },
  js.configs.recommended,
  {
    plugins: {
      import: fixupPluginRules(_import),
      prettier,
      react,
      'react-hooks': fixupPluginRules(reactHooks),
      '@typescript-eslint': typescriptEslint,
    },

    languageOptions: {
      globals: {
        ...globals.jest,
        ...globals.node,
      },

      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },

      'import/resolver': {
        typescript: {
          project: ['tsconfig.json'],
          alwaysTryTypes: true,
        },
      },
    },

    rules: {
      'no-unused-vars': 0,
      semi: [2, 'always'],
      '@typescript-eslint/no-unused-vars': 2,
      '@typescript-eslint/no-use-before-define': 0,
      '@typescript-eslint/naming-convention': 0,
      '@typescript-eslint/no-empty-interface': 0,
      '@typescript-eslint/no-var-requires': 0,
      '@typescript-eslint/no-empty-function': 0,
      '@typescript-eslint/ban-ts-comment': 1,
      '@typescript-eslint/indent': 0,
      '@typescript-eslint/camelcase': 0,
      '@typescript-eslint/no-implied-eval': 0,
      '@typescript-eslint/no-throw-literal': 0,
      '@typescript-eslint/dot-notation': 0,
      '@typescript-eslint/return-await': 0,
      '@typescript-eslint/lines-between-class-members': 0,
      '@typescript-eslint/no-shadow': 0,
      '@typescript-eslint/no-unused-expressions': [2, { allowTernary: true }],

      'prettier/prettier': [
        'error',
        {
          printWidth: 100,
          tabWidth: 2,
          useTabs: false,
          semi: true,
          singleQuote: true,
          trailingComma: 'all',
          arrowParens: 'avoid',
        },
      ],

      'arrow-body-style': [2, 'as-needed'],
      'class-methods-use-this': 0,
      'import/no-anonymous-default-export': 2,

      'import/order': [
        'error',
        {
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },

          pathGroups: [
            {
              pattern: 'react',
              group: 'builtin',
              position: 'before',
            },
            {
              pattern: 'react-native',
              group: 'builtin',
              position: 'before',
            },
            {
              pattern: '@/**',
              group: 'internal',
              position: 'after',
            },
          ],

          pathGroupsExcludedImportTypes: ['react', 'react-native'],

          groups: [
            'builtin',
            'external',
            'internal',
            'sibling',
            'parent',
            'index',
            'object',
            'type',
          ],

          'newlines-between': 'always',
        },
      ],

      'import/imports-first': 2,
      'import/newline-after-import': 0,
      'import/no-dynamic-require': 0,
      'import/no-extraneous-dependencies': 0,
      'import/no-named-as-default': 0,
      'import/no-unresolved': [2, { caseSensitive: false }],
      'import/no-webpack-loader-syntax': 0,
      'import/no-default-export': 2,
      'import/no-cycle': 0,
      'import/named': 0,
      'import/no-named-as-default-member': 0,
      'import/extensions': [2, { ts: 'never', tsx: 'never', json: 'always' }],

      'no-param-reassign': 1,
      'max-len': 0,
      'no-console': 1,
      'no-use-before-define': 0,
      'prefer-template': 2,
      'no-restricted-syntax': 0,
      'no-continue': 0,
      'no-shadow': 0,
      'no-case-declarations': 1,
      'no-labels': [2, { allowLoop: true }],
      'no-confusing-arrow': 0,
      indent: 0,
      curly: 2,
      'object-shorthand': [0, 'never'],
      'max-classes-per-file': 0,

      'react/jsx-curly-brace-presence': 2,
      'react/button-has-type': 2,
      'react/destructuring-assignment': 0,
      'react-hooks/rules-of-hooks': 'error',
      'react/jsx-closing-tag-location': 0,
      'react/forbid-prop-types': 0,
      'react/jsx-first-prop-new-line': [2, 'multiline'],
      'react/jsx-filename-extension': 0,
      'react/jsx-no-target-blank': 0,
      'react/jsx-props-no-spreading': 0,
      'react/jsx-uses-vars': 2,
      'react/prop-types': 0,
      'react/require-default-props': 0,
      'react/self-closing-comp': ['error', { component: true, html: true }],
      'react/sort-comp': 0,
      'react/no-unescaped-entities': 0,
      'react/prefer-stateless-function': 0,
      'react/jsx-fragments': 0,
      'react/state-in-constructor': 0,
      'react/static-property-placement': 0,
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],

    rules: {
      '@typescript-eslint/explicit-function-return-type': [
        2,
        {
          allowExpressions: true,
        },
      ],
    },
  },
];
