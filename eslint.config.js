import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import { importX } from 'eslint-plugin-import-x';

export default defineConfig([
    js.configs.recommended,

    // Report unused disable directives (was linterOptions in resolved config)
    {
        linterOptions: {
            reportUnusedDisableDirectives: 'warn',
        },
    },

    // Shared rules
    {
        files: [
            '**/*.{js,cjs,mjs,jsx}',
        ],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
        plugins: {
            'import-x': importX,
        },
        rules: {
            // Allow multiline arguments, but require newlines between each one in that case
            'function-paren-newline': ['error', 'multiline-arguments'],

            // Two spaces are not enough; switch statements should have indentation
            indent: ['error', 4, {
                SwitchCase: 1,
            }],

            // If using multi-line operators, require a linebreak after for readability
            'operator-linebreak': ['error', 'after'],

            // ESM requires extensions, so should we
            'import-x/extensions': ['error', 'ignorePackages', {
                js: 'always',
                cjs: 'never',
                mjs: 'always',
                jsx: 'always',
            }],

            // Do not scream about dev dependencies for build and test scripts
            'import-x/no-extraneous-dependencies': ['error', {
                devDependencies: [
                    'examples/**',
                    'test/**',
                    '*.{js,cjs,mjs}',
                ],
                optionalDependencies: false,
            }],
        },

        settings: {
            // https://github.com/import-js/eslint-plugin-import/issues/2556
            'import-x/parsers': {
                espree: ['.js', '.cjs', '.mjs', '.jsx'],
            },
        },
    },

    // ESM-specific: sourceType and JSX parsing
    {
        files: ['**/*.{js,mjs,jsx}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            parserOptions: {
                ecmaFeatures: { jsx: true },
            },
        },
    },

    // CJS-specific: sourceType only
    {
        files: ['**/*.cjs'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'commonjs',
        },
    },
]);
