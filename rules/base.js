import confusingBrowserGlobals from 'confusing-browser-globals';

export default {
    // Originally adapted from eslint-config-airbnb-base
    // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/errors.js
    // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/es6.js
    rules: {
        // Verify super() callings in constructors
        // https://eslint.org/docs/latest/rules/constructor-super
        'constructor-super': 'error',

        // Enforce “for” loop update clause moving the counter in the right direction
        // https://eslint.org/docs/rules/for-direction
        'for-direction': 'error',

        // Enforces that a return statement is present in property getters
        // https://eslint.org/docs/rules/getter-return
        'getter-return': ['error', { allowImplicit: true }],

        // Enforce or disallow variable initializations at definition
        // https://eslint.org/docs/latest/rules/init-declarations
        'init-declarations': 'off',

        // Disallow using an async function as a Promise executor
        // https://eslint.org/docs/rules/no-async-promise-executor
        'no-async-promise-executor': 'error',

        // Disallow await inside of loops
        // https://eslint.org/docs/rules/no-await-in-loop
        'no-await-in-loop': 'error',

        // Disallow modifying variables of class declarations
        // https://eslint.org/docs/rules/no-class-assign
        'no-class-assign': 'error',

        // Disallow modifying variables that are declared using const
        // https://eslint.org/docs/latest/rules/no-const-assign
        'no-const-assign': 'error',

        // Disallow comparisons to negative zero
        // https://eslint.org/docs/rules/no-compare-neg-zero
        'no-compare-neg-zero': 'error',

        // Disallow assignment in conditional expressions
        'no-cond-assign': ['error', 'always'],

        // Disallow use of console
        'no-console': 'warn',

        // Disallows expressions where the operation doesn't affect the value
        // https://eslint.org/docs/rules/no-constant-binary-expression
        'no-constant-binary-expression': 'error',

        // Disallow use of constant expressions in conditions
        'no-constant-condition': 'warn',

        // Disallow control characters in regular expressions
        'no-control-regex': 'error',

        // Disallow use of debugger
        'no-debugger': 'error',

        // Disallow deletion of variables
        // https://eslint.org/docs/latest/rules/no-delete-var
        'no-delete-var': 'error',

        // Disallow duplicate arguments in functions
        'no-dupe-args': 'error',

        // Disallow duplicate class members
        // https://eslint.org/docs/rules/no-dupe-class-members
        'no-dupe-class-members': 'error',

        // Disallow duplicate conditions in if-else-if chains
        // https://eslint.org/docs/rules/no-dupe-else-if
        'no-dupe-else-if': 'error',

        // Disallow duplicate keys when creating object literals
        'no-dupe-keys': 'error',

        // Disallow a duplicate case label
        'no-duplicate-case': 'error',

        // Disallow importing from the same path more than once
        // https://eslint.org/docs/rules/no-duplicate-imports
        'no-duplicate-imports': 'error',

        // Disallow empty statements
        'no-empty': 'error',

        // Disallow the use of empty character classes in regular expressions
        'no-empty-character-class': 'error',

        // Disallow assigning to the exception in a catch block
        'no-ex-assign': 'error',

        // Disallow double-negation boolean casts in a boolean context
        // https://eslint.org/docs/rules/no-extra-boolean-cast
        'no-extra-boolean-cast': 'error',

        // Disallow unnecessary parentheses
        // https://eslint.org/docs/rules/no-extra-parens
        'no-extra-parens': ['off', 'all', {
            conditionalAssign: true,
            nestedBinaryExpressions: false,
            returnAssign: false,
            ignoreJSX: 'all', // delegate to eslint-plugin-react
            enforceForArrowConditionals: false,
        }],

        // Disallow unnecessary semicolons
        'no-extra-semi': 'error',

        // Disallow overwriting functions written as function declarations
        'no-func-assign': 'error',

        // https://eslint.org/docs/rules/no-import-assign
        'no-import-assign': 'error',

        // Disallow function or variable declarations in nested blocks
        'no-inner-declarations': 'error',

        // Disallow invalid regular expression strings in the RegExp constructor
        'no-invalid-regexp': 'error',

        // Disallow irregular whitespace outside of strings and comments
        'no-irregular-whitespace': 'error',

        // Disallow labels that share a name with a variable
        // https://eslint.org/docs/rules/no-label-var
        'no-label-var': 'error',

        // Disallow Number Literals That Lose Precision
        // https://eslint.org/docs/rules/no-loss-of-precision
        'no-loss-of-precision': 'error',

        // Disallow characters which are made with multiple code points in character class syntax
        // https://eslint.org/docs/rules/no-misleading-character-class
        'no-misleading-character-class': 'error',

        // Disallow the use of object properties of the global object (Math and JSON) as functions
        'no-obj-calls': 'error',

        // Disallow new operators with global non-constructor functions
        // https://eslint.org/docs/latest/rules/no-new-native-nonconstructor
        'no-new-native-nonconstructor': 'error',

        // Disallow returning values from Promise executor functions
        // https://eslint.org/docs/rules/no-promise-executor-return
        'no-promise-executor-return': 'error',

        // Disallow use of Object.prototypes builtins directly
        // https://eslint.org/docs/rules/no-prototype-builtins
        'no-prototype-builtins': 'error',

        // Disallow multiple spaces in a regular expression literal
        'no-regex-spaces': 'error',

        // Disallow specified names in exports
        // https://eslint.org/docs/rules/no-restricted-exports
        'no-restricted-exports': ['error', {
            restrictedNamedExports: [
                'default', // Use `export default` to provide a default export
                'then', // This will cause tons of confusion when your module is dynamically `import()`ed, and will break in most node ESM versions
            ],
        }],

        // Disallow specific globals
        // https://eslint.org/docs/latest/rules/no-restricted-globals#rule-details
        'no-restricted-globals': [
            'error',
            {
                name: 'isFinite',
                message:
                    'Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite',
            },
            {
                name: 'isNaN',
                message:
                    'Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan',
            },
        ].concat(confusingBrowserGlobals.map((g) => ({
            name: g,
            message: `Use window.${g} instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md`,
        }))),

        // Disallow specific imports
        // https://eslint.org/docs/rules/no-restricted-imports
        'no-restricted-imports': ['off', {
            paths: [],
            patterns: [],
        }],

        // Disallow returning values from setters
        // https://eslint.org/docs/rules/no-setter-return
        'no-setter-return': 'error',

        // Disallow sparse arrays
        'no-sparse-arrays': 'error',

        // Disallow declaration of variables already declared in the outer scope
        // https://eslint.org/docs/latest/rules/no-shadow
        'no-shadow': 'error',

        // Disallow shadowing of names such as arguments
        // https://eslint.org/docs/latest/rules/no-shadow-restricted-names
        'no-shadow-restricted-names': 'error',

        // Disallow template literal placeholder syntax in regular strings
        // https://eslint.org/docs/rules/no-template-curly-in-string
        'no-template-curly-in-string': 'error',

        // Disallow to use this/super before super() calling in constructors.
        // https://eslint.org/docs/rules/no-this-before-super
        'no-this-before-super': 'error',

        // Disallow use of undeclared variables unless mentioned in a /*global */ block
        // https://eslint.org/docs/latest/rules/no-undef#rule-details
        'no-undef': 'error',

        // Disallow use of undefined when initializing variables
        // https://eslint.org/docs/latest/rules/no-undef-init
        'no-undef-init': 'error',

        // Disallow use of undefined variable
        // https://eslint.org/docs/rules/no-undefined
        'no-undefined': 'error',

        // Avoid code that looks like two expressions but is actually one
        // https://eslint.org/docs/rules/no-unexpected-multiline
        'no-unexpected-multiline': 'error',

        // Disallow unreachable statements after a return, throw, continue, or break statement
        'no-unreachable': 'error',

        // Disallow loops with a body that allows only one iteration
        // https://eslint.org/docs/rules/no-unreachable-loop
        'no-unreachable-loop': ['error', {
            ignore: [],
        }],

        // Disallow return/throw/break/continue inside finally blocks
        // https://eslint.org/docs/rules/no-unsafe-finally
        'no-unsafe-finally': 'error',

        // Disallow negating the left operand of relational operators
        // https://eslint.org/docs/rules/no-unsafe-negation
        'no-unsafe-negation': 'error',

        // Disallow use of optional chaining in contexts where the undefined value is not allowed
        // https://eslint.org/docs/rules/no-unsafe-optional-chaining
        'no-unsafe-optional-chaining': ['error', { disallowArithmeticOperators: true }],

        // Disallow Unused Private Class Members
        // https://eslint.org/docs/rules/no-unused-private-class-members
        'no-unused-private-class-members': 'error',

        // Disallow declaration of variables that are not used in the code
        // https://eslint.org/docs/latest/rules/no-unused-vars
        'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],

        // Disallow use of variables before they are defined
        // https://eslint.org/docs/latest/rules/no-use-before-define
        'no-use-before-define': ['error', { functions: true, classes: true, variables: true }],

        // Disallow useless backreferences in regular expressions
        // https://eslint.org/docs/rules/no-useless-backreference
        'no-useless-backreference': 'error',

        // Disallow useless computed property keys
        // https://eslint.org/docs/rules/no-useless-computed-key
        'no-useless-computed-key': 'error',

        // Disallow unnecessary constructor
        // https://eslint.org/docs/rules/no-useless-constructor
        'no-useless-constructor': 'error',

        // Disallow renaming import, export, and destructured assignments to the same name
        // https://eslint.org/docs/rules/no-useless-rename
        'no-useless-rename': ['error', {
            ignoreDestructuring: false,
            ignoreImport: false,
            ignoreExport: false,
        }],

        // Disallow negation of the left operand of an in expression
        // Deprecated in favor of no-unsafe-negation
        'no-negated-in-lhs': 'off',

        // Require let or const instead of var
        // https://eslint.org/docs/latest/rules/no-va
        'no-var': 'error',

        // Disallow assignments that can lead to race conditions due to usage of await or yield
        // https://eslint.org/docs/rules/require-atomic-updates
        'require-atomic-updates': 'error',

        // Disallow generator functions that do not have yield
        // https://eslint.org/docs/rules/require-yield
        'require-yield': 'error',

        // Strict mode directives are unnecessary in modern code
        // https://eslint.org/docs/latest/rules/strict
        strict: ['error', 'never'],

        // Require a Symbol description
        // https://eslint.org/docs/rules/symbol-description
        'symbol-description': 'error',

        // Disallow comparisons with the value NaN
        'use-isnan': 'error',

        // Ensure JSDoc comments are valid
        // https://eslint.org/docs/rules/valid-jsdoc
        'valid-jsdoc': 'off',

        // Ensure that the results of typeof are compared against a valid string
        // https://eslint.org/docs/rules/valid-typeof
        'valid-typeof': ['error', { requireStringLiterals: true }],
    },
};
