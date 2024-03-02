import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat();

export default [
    ...compat.extends('eslint-config-airbnb-base'),
    {
        files: [
            '**/*.{js,cjs,mjs,jsx}',
        ],
        ignores: ['./node_modules/**/*'],
        languageOptions: {
            // https://github.com/import-js/eslint-plugin-import/issues/2556
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
        },
        rules: {
            // Do not coerce methods into static state simply because they lack `this`
            'class-methods-use-this': 'off',

            // Allow multiline arguments, but require newlines between each one in that case
            'function-paren-newline': ['error', 'multiline-arguments'],

            // ESM requires extension, so should we
            'import/extensions': ['error', 'ignorePackages', {
                js: 'always',
                cjs: 'never',
                mjs: 'always',
                jsx: 'always',
            }],

            // Do not scream about dev dependencies for build and test scripts
            'import/no-extraneous-dependencies': ['error', {
                devDependencies: [
                    'examples/**',
                    'test/**',
                    '*.{js,cjs,mjs}',
                ],
                optionalDependencies: false,
            }],

            // Two spaces are not enough; switch statements should have indentation
            indent: ['error', 4, {
                SwitchCase: 1,
            }],

            // If using multi-line operators, require a linebreak after for readability
            'operator-linebreak': ['error', 'after']
        },

        settings: {
            // https://github.com/import-js/eslint-plugin-import/issues/2556
            'import/parsers': {
                espree: ['.js', '.cjs', '.mjs', '.jsx'],
            },
        },
    },
];
