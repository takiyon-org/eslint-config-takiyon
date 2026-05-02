import { importX } from 'eslint-plugin-import-x';

// Originally adapted from eslint-config-airbnb-base
// https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/imports.js
export default {
    name: 'takiyon/imports',

    plugins: {
        'import-x': importX,
    },

    rules: {
        // ---
        // Helpful warnings
        // ---

        // Disallow invalid exports, e.g. multiple defaults
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/export.md
        'import-x/export': 'error',

        // Forbid mutable exports
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-mutable-exports.md
        'import-x/no-mutable-exports': 'error',

        // Disallow use of jsdoc-marked-deprecated imports
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-deprecated.md
        'import-x/no-deprecated': 'off',

        // Do not scream about dev dependencies for build and test scripts
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-extraneous-dependencies.md
        'import-x/no-extraneous-dependencies': ['error', {
            devDependencies: [
                'examples/**',
                'test/**',
                '*.{js,cjs,mjs}',
            ],
            optionalDependencies: false,
        }],

        // Do not allow a default import name to match a named export
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-named-as-default.md
        'import-x/no-named-as-default': 'error',

        // Warn on accessing default export property names that are also named exports
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-named-as-default-member.md
        'import-x/no-named-as-default-member': 'error',

        // ---
        // Static analysis
        // ---

        // Forbid cyclical dependencies between modules
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-cycle.md
        'import-x/no-cycle': ['error', { maxDepth: '∞' }],

        // Ensure default import coupled with default export
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/default.md#when-not-to-use-it
        'import-x/default': 'off',

        // Ensure named imports coupled with named exports
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/named.md#when-not-to-use-it
        'import-x/named': 'error',

        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/namespace.md
        'import-x/namespace': 'error',

        // Ensure imports point to files/modules that can be resolved
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-unresolved.md
        'import-x/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],

        // ---
        // Module systems
        // ---

        // Disallow AMD require/define
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-amd.md
        'import-x/no-amd': 'error',

        // Disallow require()
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-commonjs.md
        'import-x/no-commonjs': 'off',

        // No Node.js builtin modules
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-nodejs-modules.md
        'import-x/no-nodejs-modules': 'off',

        // Warn if a module could be mistakenly parsed as a script by a consumer leveraging
        // Unambiguous JavaScript Grammar
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/unambiguous.md
        'import-x/unambiguous': 'off',

        // ---
        // Style guide
        // ---

        // Enforce a consistent style for type specifiers (inline or top-level)
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/consistent-type-specifier-style.md
        'import-x/consistent-type-specifier-style': ['off', 'prefer-inline'],

        // Dynamic imports require a leading comment with a webpackChunkName
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/dynamic-import-chunkname.md
        'import-x/dynamic-import-chunkname': ['off', {
            importFunctions: [],
            webpackChunknameFormat: '[0-9a-zA-Z-_/.]+',
        }],

        // This rule enforces that all exports are declared at the bottom of the file.
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/exports-last.md
        'import-x/exports-last': 'error',

        // Ensure consistent use of file extension within the import path
        // ESM requires extensions, so should we
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/extensions.md
        'import-x/extensions': ['error', 'ignorePackages', {
            js: 'always',
            cjs: 'never',
            mjs: 'always',
            jsx: 'always',
        }],

        // Disallow non-import statements appearing before import statements
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/first.md
        'import-x/first': 'error',

        // Reports when named exports are not grouped together in a single export declaration
        // or when multiple assignments to CommonJS module.exports or exports object are present
        // in a single file.
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/group-exports.md
        'import-x/group-exports': 'off',

        // Forbid modules to have too many dependencies
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/max-dependencies.md
        'import-x/max-dependencies': ['off', { max: 10 }],

        // Require a newline after the last import-x/require in a group
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/newline-after-import.md
        'import-x/newline-after-import': 'error',

        // Forbid import of modules using absolute paths
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-absolute-path.md
        'import-x/no-absolute-path': 'error',

        // Reports if a module's default export is unnamed
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-anonymous-default-export.md
        'import-x/no-anonymous-default-export': ['off', {
            allowArray: false,
            allowArrowFunction: false,
            allowAnonymousClass: false,
            allowAnonymousFunction: false,
            allowLiteral: false,
            allowObject: false,
        }],

        // forbid default exports. this is a terrible rule, do not use it.
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-default-export.md
        'import-x/no-default-export': 'off',

        // Forbid require() calls with expressions
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-dynamic-require.md
        'import-x/no-dynamic-require': 'error',

        // Disallow duplicate imports
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-duplicates.md
        'import-x/no-duplicates': 'error',

        // Reports the use of empty named import blocks.
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-empty-named-blocks.md
        'import-x/no-empty-named-blocks': 'error',

        // Reports the use of import declarations with CommonJS exports in any module except for
        // the main module.
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-import-module-exports.md
        'import-x/no-import-module-exports': ['error', {
            exceptions: [],
        }],

        // Prevent importing the submodules of other modules
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-internal-modules.md
        'import-x/no-internal-modules': ['off', {
            allow: [],
        }],

        // Prevent importing the default as if it were named
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-named-default.md
        'import-x/no-named-default': 'error',

        // Use this rule to prevent importing packages through relative paths.
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-relative-packages.md
        'import-x/no-relative-packages': 'error',

        // Use this rule to prevent imports to folders in relative parent paths.
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-relative-parent-imports.md
        'import-x/no-relative-parent-imports': 'off',

        // Restrict which files can be imported in a given folder
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-restricted-paths.md
        'import-x/no-restricted-paths': 'off',

        // Forbid a module from importing itself
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-self-import.md
        'import-x/no-self-import': 'error',

        // Forbid Webpack loader syntax in imports
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-webpack-loader-syntax.md
        'import-x/no-webpack-loader-syntax': 'error',

        // Prevent unassigned imports
        // Importing for side effects is perfectly acceptable, if you need side effects.
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-unassigned-import.md
        'import-x/no-unassigned-import': 'off',

        // Ensures that there are no useless path segments
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-useless-path-segments.md
        'import-x/no-useless-path-segments': ['error', { commonjs: true }],

        // Ensure absolute imports are above relative imports and that unassigned imports are
        // ignored.
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/order.md
        'import-x/order': ['error', { groups: [['builtin', 'external', 'internal']] }],

        // Require modules with a single export to use a default export
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/prefer-default-export.md
        'import-x/prefer-default-export': 'error',
    },
};
