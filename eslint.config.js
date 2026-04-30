import js from '@eslint/js';
import { defineConfig } from 'eslint/config';

import base from './rules/base.js';
import imports from './rules/imports.js';
import styles from './rules/styles.js';

export default defineConfig([
    js.configs.recommended,

    // Report unused disable directives
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

        ...base,
        ...imports,
        ...styles,
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
