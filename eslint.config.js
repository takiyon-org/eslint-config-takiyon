import js from '@eslint/js';
import { defineConfig } from 'eslint/config';

import base from './rules/base.js';
import imports from './rules/imports.js';
import styles from './rules/styles.js';

export default defineConfig([
    js.configs.recommended,

    {
        name: 'takiyon/linter',

        linterOptions: {
            // Report unused disable directives
            reportUnusedDisableDirectives: 'warn',
        },
    },

    // Shared rule layers (core linting)
    base,
    imports,
    styles,

    // ESM-specific: sourceType and JSX parsing
    {
        name: 'takiyon/esm/language',
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
        name: 'takiyon/cjs/language',
        files: ['**/*.cjs'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'commonjs',
        },
    },
]);
