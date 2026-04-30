import { importX } from 'eslint-plugin-import-x';

export default {
    plugins: {
        'import-x': importX,
    },

    rules: {
        // --- import-x ---
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
};
