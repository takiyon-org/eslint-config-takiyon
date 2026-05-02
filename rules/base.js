import confusingBrowserGlobals from 'confusing-browser-globals';

export default {
    name: 'takiyon/base',

    // Originally adapted from eslint-config-airbnb-base
    // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules
    rules: {
        // Enforces getter/setter pairs in objects
        // https://eslint.org/docs/rules/accessor-pairs
        'accessor-pairs': 'off',

        // Enforces return statements in callbacks of array's methods
        // https://eslint.org/docs/rules/array-callback-return
        'array-callback-return': ['error', { allowImplicit: true }],

        // Treat var statements as if they were block scoped
        // https://eslint.org/docs/rules/block-scoped-var
        'block-scoped-var': 'error',

        // Specify the maximum cyclomatic complexity allowed in a program
        // https://eslint.org/docs/rules/complexity
        complexity: ['off', 20],

        // Do not enforce that class methods use "this"
        // https://eslint.org/docs/rules/class-methods-use-this
        'class-methods-use-this': ['off', {
            exceptMethods: [],
        }],

        // Require return statements to either always or never specify values
        // https://eslint.org/docs/rules/consistent-return
        'consistent-return': 'error',

        // Verify super() callings in constructors
        // https://eslint.org/docs/latest/rules/constructor-super
        'constructor-super': 'error',

        // Require default case in switch statements
        // https://eslint.org/docs/rules/default-case
        'default-case': ['error', { commentPattern: '^no default$' }],

        // Enforce default clauses in switch statements to be last
        // https://eslint.org/docs/rules/default-case-last
        'default-case-last': 'error',

        // Enforce default parameters to be last
        // https://eslint.org/docs/rules/default-param-last
        'default-param-last': 'error',

        // Encourages use of dot notation whenever possible
        // https://eslint.org/docs/rules/dot-notation
        'dot-notation': ['error', { allowKeywords: true }],

        // Require the use of === and !==
        // https://eslint.org/docs/rules/eqeqeq
        eqeqeq: ['error', 'always', { null: 'ignore' }],

        // Enforce "for" loop update clause moving the counter in the right direction
        // https://eslint.org/docs/rules/for-direction
        'for-direction': 'error',

        // Enforces that a return statement is present in property getters
        // https://eslint.org/docs/rules/getter-return
        'getter-return': ['error', { allowImplicit: true }],

        // Require grouped accessor pairs in object literals and classes
        // https://eslint.org/docs/rules/grouped-accessor-pairs
        'grouped-accessor-pairs': 'error',

        // Make sure for-in loops have an if statement
        // https://eslint.org/docs/rules/guard-for-in
        'guard-for-in': 'error',

        // Enforce or disallow variable initializations at definition
        // https://eslint.org/docs/latest/rules/init-declarations
        'init-declarations': 'off',

        // Enforce a maximum number of classes per file
        // https://eslint.org/docs/rules/max-classes-per-file
        'max-classes-per-file': ['error', 1],

        // Disallow the use of alert, confirm, and prompt
        // https://eslint.org/docs/rules/no-alert
        'no-alert': 'warn',

        // Disallow using an async function as a Promise executor
        // https://eslint.org/docs/rules/no-async-promise-executor
        'no-async-promise-executor': 'error',

        // Disallow await inside of loops
        // https://eslint.org/docs/rules/no-await-in-loop
        'no-await-in-loop': 'error',

        // Disallow use of arguments.caller or arguments.callee
        // https://eslint.org/docs/rules/no-caller
        'no-caller': 'error',

        // Disallow lexical declarations in case/default clauses
        // https://eslint.org/docs/rules/no-case-declarations
        'no-case-declarations': 'error',

        // Disallow modifying variables of class declarations
        // https://eslint.org/docs/rules/no-class-assign
        'no-class-assign': 'error',

        // Disallow comparisons to negative zero
        // https://eslint.org/docs/rules/no-compare-neg-zero
        'no-compare-neg-zero': 'error',

        // Disallow assignment in conditional expressions
        'no-cond-assign': ['error', 'always'],

        // Disallow use of console
        'no-console': 'warn',

        // Disallow modifying variables that are declared using const
        // https://eslint.org/docs/latest/rules/no-const-assign
        'no-const-assign': 'error',

        // Disallows expressions where the operation doesn't affect the value
        // https://eslint.org/docs/rules/no-constant-binary-expression
        'no-constant-binary-expression': 'error',

        // Disallow use of constant expressions in conditions
        'no-constant-condition': 'warn',

        // Disallow returning value in constructor
        // https://eslint.org/docs/rules/no-constructor-return
        'no-constructor-return': 'error',

        // Disallow control characters in regular expressions
        'no-control-regex': 'error',

        // Disallow use of debugger
        'no-debugger': 'error',

        // Disallow deletion of variables
        // https://eslint.org/docs/latest/rules/no-delete-var
        'no-delete-var': 'error',

        // Disallow division operators explicitly at beginning of regular expression
        // https://eslint.org/docs/rules/no-div-regex
        'no-div-regex': 'error',

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

        // Disallow else after a return in an if
        // https://eslint.org/docs/rules/no-else-return
        'no-else-return': ['error', { allowElseIf: false }],

        // Disallow empty statements
        'no-empty': 'error',

        // Disallow the use of empty character classes in regular expressions
        'no-empty-character-class': 'error',

        // Disallow empty functions, except for standalone funcs/arrows
        // https://eslint.org/docs/rules/no-empty-function
        'no-empty-function': ['error', {
            allow: [
                'arrowFunctions',
                'functions',
                'methods',
            ],
        }],

        // Disallow empty destructuring patterns
        // https://eslint.org/docs/rules/no-empty-pattern
        'no-empty-pattern': 'error',

        // Disallow empty static blocks
        // https://eslint.org/docs/latest/rules/no-empty-static-block
        'no-empty-static-block': 'error',

        // Disallow assigning to the exception in a catch block
        'no-ex-assign': 'error',

        // Disallow double-negation boolean casts in a boolean context
        // https://eslint.org/docs/rules/no-extra-boolean-cast
        'no-extra-boolean-cast': 'error',

        // Disallow comparisons to null without a type-checking operator
        // https://eslint.org/docs/rules/no-eq-null
        'no-eq-null': 'off',

        // Disallow use of eval()
        // https://eslint.org/docs/rules/no-eval
        'no-eval': 'error',

        // Disallow adding to native types
        // https://eslint.org/docs/rules/no-extend-native
        'no-extend-native': 'error',

        // Disallow unnecessary function binding
        // https://eslint.org/docs/rules/no-extra-bind
        'no-extra-bind': 'error',

        // Disallow Unnecessary Labels
        // https://eslint.org/docs/rules/no-extra-label
        'no-extra-label': 'error',

        // Disallow fallthrough of case statements
        // https://eslint.org/docs/rules/no-fallthrough
        'no-fallthrough': 'error',

        // Disallow overwriting functions written as function declarations
        'no-func-assign': 'error',

        // Disallow reassignments of native objects or read-only globals
        // https://eslint.org/docs/rules/no-global-assign
        'no-global-assign': ['error', { exceptions: [] }],

        // Disallow implicit type conversions
        // https://eslint.org/docs/rules/no-implicit-coercion
        'no-implicit-coercion': ['off', {
            boolean: false,
            number: true,
            string: true,
            allow: [],
        }],

        // Disallow var and named functions in global scope
        // https://eslint.org/docs/rules/no-implicit-globals
        'no-implicit-globals': 'off',

        // Disallow use of eval()-like methods
        // https://eslint.org/docs/rules/no-implied-eval
        'no-implied-eval': 'error',

        // https://eslint.org/docs/rules/no-import-assign
        'no-import-assign': 'error',

        // Disallow function or variable declarations in nested blocks
        'no-inner-declarations': 'error',

        // Disallow invalid regular expression strings in the RegExp constructor
        'no-invalid-regexp': 'error',

        // Disallow this keywords outside of classes or class-like objects
        // https://eslint.org/docs/rules/no-invalid-this
        'no-invalid-this': 'error',

        // Disallow irregular whitespace outside of strings and comments
        'no-irregular-whitespace': 'error',

        // Disallow usage of __iterator__ property
        // https://eslint.org/docs/rules/no-iterator
        'no-iterator': 'error',

        // Disallow labels that share a name with a variable
        // https://eslint.org/docs/rules/no-label-var
        'no-label-var': 'error',

        // Disallow use of labels for anything other than loops and switches
        // https://eslint.org/docs/rules/no-labels
        'no-labels': ['error', { allowLoop: false, allowSwitch: false }],

        // Disallow unnecessary nested blocks
        // https://eslint.org/docs/rules/no-lone-blocks
        'no-lone-blocks': 'error',

        // Disallow creation of functions within loops
        // https://eslint.org/docs/rules/no-loop-func
        'no-loop-func': 'error',

        // Disallow Number Literals That Lose Precision
        // https://eslint.org/docs/rules/no-loss-of-precision
        'no-loss-of-precision': 'error',

        // Disallow magic numbers
        // https://eslint.org/docs/rules/no-magic-numbers
        'no-magic-numbers': ['off', {
            ignore: [],
            ignoreArrayIndexes: true,
            enforceConst: true,
            detectObjects: false,
        }],

        // Disallow characters which are made with multiple code points in character class syntax
        // https://eslint.org/docs/rules/no-misleading-character-class
        'no-misleading-character-class': 'error',

        // Disallow use of multiline strings
        // https://eslint.org/docs/rules/no-multi-str
        'no-multi-str': 'error',

        // Disallow use of new operator when not part of the assignment or comparison
        // https://eslint.org/docs/rules/no-new
        'no-new': 'error',

        // Disallow use of new operator for Function object
        // https://eslint.org/docs/rules/no-new-func
        'no-new-func': 'error',

        // Disallow new operators with global non-constructor functions
        // https://eslint.org/docs/latest/rules/no-new-native-nonconstructor
        'no-new-native-nonconstructor': 'error',

        // Disallows creating new instances of String, Number, and Boolean
        // https://eslint.org/docs/rules/no-new-wrappers
        'no-new-wrappers': 'error',

        // Disallow \8 and \9 escape sequences in string literals
        // https://eslint.org/docs/rules/no-nonoctal-decimal-escape
        'no-nonoctal-decimal-escape': 'error',

        // Disallow the use of object properties of the global object (Math and JSON) as functions
        'no-obj-calls': 'error',

        // Disallow calls to the Object constructor without an argument
        // https://eslint.org/docs/latest/rules/no-object-constructor
        'no-object-constructor': 'error',

        // Disallow use of (old style) octal literals
        // https://eslint.org/docs/rules/no-octal
        'no-octal': 'error',

        // Disallow use of octal escape sequences in string literals, such as
        // var foo = 'Copyright \251';
        // https://eslint.org/docs/rules/no-octal-escape
        'no-octal-escape': 'error',

        // Disallow reassignment of function parameters
        // Disallow parameter object manipulation except for specific exclusions
        // https://eslint.org/docs/rules/no-param-reassign.html
        'no-param-reassign': ['error', {
            props: true,
            ignorePropertyModificationsFor: [
                'acc', // for reduce accumulators
                'accumulator', // for reduce accumulators
                'e', // for e.returnvalue
                'ctx', // for Koa routing
                'context', // for Koa routing
                'req', // for Express requests
                'request', // for Express requests
                'res', // for Express responses
                'response', // for Express responses
                '$scope', // for Angular 1 scopes
                'staticContext', // for ReactRouter context
            ],
        }],

        // Disallow returning values from Promise executor functions
        // https://eslint.org/docs/rules/no-promise-executor-return
        'no-promise-executor-return': 'error',

        // Disallow usage of __proto__ property
        // https://eslint.org/docs/rules/no-proto
        'no-proto': 'error',

        // Disallow use of Object.prototypes builtins directly
        // https://eslint.org/docs/rules/no-prototype-builtins
        'no-prototype-builtins': 'error',

        // Disallow declaring the same variable more than once
        // https://eslint.org/docs/rules/no-redeclare
        'no-redeclare': 'error',

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
        ].concat(
            confusingBrowserGlobals.map(
                (g) => ({
                    name: g,
                    message: `Use window.${g} instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md`,
                }),
            ),
        ),

        // Disallow specific imports
        // https://eslint.org/docs/rules/no-restricted-imports
        'no-restricted-imports': ['off', {
            paths: [],
            patterns: [],
        }],

        // Disallow certain object properties
        // https://eslint.org/docs/rules/no-restricted-properties
        'no-restricted-properties': ['error', {
            object: 'arguments',
            property: 'callee',
            message: 'arguments.callee is deprecated',
        }, {
            object: 'global',
            property: 'isFinite',
            message: 'Please use Number.isFinite instead',
        }, {
            object: 'self',
            property: 'isFinite',
            message: 'Please use Number.isFinite instead',
        }, {
            object: 'window',
            property: 'isFinite',
            message: 'Please use Number.isFinite instead',
        }, {
            object: 'global',
            property: 'isNaN',
            message: 'Please use Number.isNaN instead',
        }, {
            object: 'self',
            property: 'isNaN',
            message: 'Please use Number.isNaN instead',
        }, {
            object: 'window',
            property: 'isNaN',
            message: 'Please use Number.isNaN instead',
        }, {
            property: '__defineGetter__',
            message: 'Please use Object.defineProperty instead.',
        }, {
            property: '__defineSetter__',
            message: 'Please use Object.defineProperty instead.',
        }, {
            object: 'Math',
            property: 'pow',
            message: 'Use the exponentiation operator (**) instead.',
        }],

        // Disallow use of assignment in return statement
        // https://eslint.org/docs/rules/no-return-assign
        'no-return-assign': ['error', 'always'],

        // Disallow use of `javascript:` URLs
        // https://eslint.org/docs/rules/no-script-url
        'no-script-url': 'error',

        // Disallow self assignment
        // https://eslint.org/docs/rules/no-self-assign
        'no-self-assign': ['error', {
            props: true,
        }],

        // Disallow comparisons where both sides are exactly the same
        // https://eslint.org/docs/rules/no-self-compare
        'no-self-compare': 'error',

        // Disallow use of comma operator
        // https://eslint.org/docs/rules/no-sequences
        'no-sequences': 'error',

        // Disallow returning values from setters
        // https://eslint.org/docs/rules/no-setter-return
        'no-setter-return': 'error',

        // Disallow declaration of variables already declared in the outer scope
        // https://eslint.org/docs/latest/rules/no-shadow
        'no-shadow': 'error',

        // Disallow shadowing of names such as arguments
        // https://eslint.org/docs/latest/rules/no-shadow-restricted-names
        'no-shadow-restricted-names': 'error',

        // Disallow sparse arrays
        'no-sparse-arrays': 'error',

        // Disallow template literal placeholder syntax in regular strings
        // https://eslint.org/docs/rules/no-template-curly-in-string
        'no-template-curly-in-string': 'error',

        // Disallow to use this/super before super() calling in constructors.
        // https://eslint.org/docs/rules/no-this-before-super
        'no-this-before-super': 'error',

        // Restrict what can be thrown as an exception
        // https://eslint.org/docs/rules/no-throw-literal
        'no-throw-literal': 'error',

        // Disallow use of undeclared variables unless mentioned in a /*global */ block
        // https://eslint.org/docs/latest/rules/no-undef#rule-details
        'no-undef': 'error',

        // Disallow use of undefined when initializing variables
        // https://eslint.org/docs/latest/rules/no-undef-init
        'no-undef-init': 'error',

        // Disallow use of undefined variable
        // https://eslint.org/docs/rules/no-undefined
        'no-undefined': 'off',

        // Avoid code that looks like two expressions but is actually one
        // https://eslint.org/docs/rules/no-unexpected-multiline
        'no-unexpected-multiline': 'error',

        // Disallow unmodified conditions of loops
        // https://eslint.org/docs/rules/no-unmodified-loop-condition
        'no-unmodified-loop-condition': 'error',

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

        // Disallow usage of expressions in statement position
        // https://eslint.org/docs/rules/no-unused-expressions
        'no-unused-expressions': ['error', {
            allowShortCircuit: false,
            allowTernary: false,
            allowTaggedTemplates: false,
        }],

        // Disallow unused labels
        // https://eslint.org/docs/rules/no-unused-labels
        'no-unused-labels': 'error',

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

        // Disallow unnecessary .call() and .apply()
        // https://eslint.org/docs/rules/no-useless-call
        'no-useless-call': 'error',

        // Disallow unnecessary catch clauses
        // https://eslint.org/docs/rules/no-useless-catch
        'no-useless-catch': 'error',

        // Disallow useless computed property keys
        // https://eslint.org/docs/rules/no-useless-computed-key
        'no-useless-computed-key': 'error',

        // Disallow useless string concatenation
        // https://eslint.org/docs/rules/no-useless-concat
        'no-useless-concat': 'error',

        // Disallow unnecessary constructor
        // https://eslint.org/docs/rules/no-useless-constructor
        'no-useless-constructor': 'error',

        // Disallow unnecessary string escaping
        // https://eslint.org/docs/rules/no-useless-escape
        'no-useless-escape': 'error',

        // Disallow renaming import, export, and destructured assignments to the same name
        // https://eslint.org/docs/rules/no-useless-rename
        'no-useless-rename': ['error', {
            ignoreDestructuring: false,
            ignoreImport: false,
            ignoreExport: false,
        }],

        // Disallow redundant `return;` keywords
        // https://eslint.org/docs/rules/no-useless-return
        'no-useless-return': 'error',

        // Require let or const instead of var
        // https://eslint.org/docs/latest/rules/no-va
        'no-var': 'error',

        // Disallow use of void operator
        // https://eslint.org/docs/rules/no-void
        'no-void': 'error',

        // Disallow usage of configurable warning terms in comments: e.g. todo
        // https://eslint.org/docs/rules/no-warning-comments
        'no-warning-comments': ['off', { terms: ['todo', 'fixme', 'xxx'], location: 'start' }],

        // Disallow use of the with statement
        // https://eslint.org/docs/rules/no-with
        'no-with': 'error',

        // Require using Error objects as Promise rejection reasons
        // https://eslint.org/docs/rules/prefer-promise-reject-errors
        'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

        // Suggest using named capture group in regular expression
        // https://eslint.org/docs/rules/prefer-named-capture-group
        'prefer-named-capture-group': 'off',

        // Prefer Object.hasOwn() over Object.prototype.hasOwnProperty.call()
        // https://eslint.org/docs/rules/prefer-object-has-own
        'prefer-object-has-own': 'error',

        // Disallow use of the RegExp constructor in favor of regular expression literals
        // https://eslint.org/docs/rules/prefer-regex-literals
        'prefer-regex-literals': ['error', {
            disallowRedundantWrapping: true,
        }],

        // Require use of the second argument for parseInt()
        // https://eslint.org/docs/rules/radix
        radix: 'error',

        // Disallow assignments that can lead to race conditions due to usage of await or yield
        // https://eslint.org/docs/rules/require-atomic-updates
        'require-atomic-updates': 'error',

        // Require `await` in `async function`
        // https://eslint.org/docs/rules/require-await
        'require-await': 'off',

        // Enforce the use of u flag on RegExp
        // https://eslint.org/docs/rules/require-unicode-regexp
        'require-unicode-regexp': 'off',

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

        // Requires to declare all vars on top of their containing scope
        // https://eslint.org/docs/rules/vars-on-top
        'vars-on-top': 'error',

        // Require or disallow Yoda conditions
        // https://eslint.org/docs/rules/yoda
        yoda: 'error',
    },
};
