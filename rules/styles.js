import stylistic from '@stylistic/eslint-plugin';

// Originally adapted from eslint-config-airbnb-base
// https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/style.js
export default {
    plugins: {
        '@stylistic': stylistic,
    },

    rules: {
        // Enforces no braces where they can be omitted
        // https://eslint.org/docs/rules/arrow-body-style
        'arrow-body-style': ['error', 'as-needed', {
            requireReturnForObjectLiteral: true,
        }],

        // Require camel case names
        // https://eslint.org/docs/latest/rules/camelcase
        camelcase: ['error', { properties: 'never', ignoreDestructuring: false }],

        // Enforce or disallow capitalization of the first letter of a comment
        // https://eslint.org/docs/latest/rules/capitalized-comments
        'capitalized-comments': ['error', 'always', {
            line: {
                ignorePattern: '.*',
                ignoreInlineComments: true,
                ignoreConsecutiveComments: true,
            },
            block: {
                ignorePattern: '.*',
                ignoreInlineComments: true,
                ignoreConsecutiveComments: true,
            },
        }],

        // Require function expressions to have a name
        // https://eslint.org/docs/latest/rules/func-names
        'func-names': ['error', 'as-needed'],

        // Import sorting
        // https://eslint.org/docs/rules/sort-imports
        'sort-imports': ['off', {
            ignoreCase: false,
            ignoreDeclarationSort: false,
            ignoreMemberSort: false,
            memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        }],

        // Require a capital letter for constructors
        // https://eslint.org/docs/latest/rules/new-cap
        'new-cap': ['error', {
            newIsCap: true,
            newIsCapExceptions: [],
            capIsNew: false,
            capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
        }],

        // Disallow use of the Array constructor
        // https://eslint.org/docs/latest/rules/no-array-constructor#rule-details
        'no-array-constructor': 'error',

        // Disallow use of bitwise operators
        // https://eslint.org/docs/latest/rules/no-bitwise#rule-details
        'no-bitwise': 'error',

        // Disallow use of the continue statement
        // https://eslint.org/docs/latest/rules/no-continue
        'no-continue': 'error',

        // Disallow if as the only statement in an else block
        // https://eslint.org/docs/latest/rules/no-lonely-if
        'no-lonely-if': 'error',

        // Disallow use of chained assignment expressions
        // https://eslint.org/docs/latest/rules/no-multi-assign
        'no-multi-assign': ['error'],

        // Disallow nested ternary expressions
        // https://eslint.org/docs/latest/rules/no-nested-ternary
        'no-nested-ternary': 'error',

        // Disallow use of the Object constructor
        // https://eslint.org/docs/latest/rules/no-object-constructor
        'no-object-constructor': 'error',

        // Disallow use of unary operators, ++ and --
        // https://eslint.org/docs/latest/rules/no-plusplus
        'no-plusplus': 'error',

        // Disallow certain syntax forms
        // https://eslint.org/docs/latest/rules/no-restricted-syntax
        'no-restricted-syntax': [
            'error',
            {
                selector: 'ForInStatement',
                message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
            },
            {
                selector: 'LabeledStatement',
                message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
            },
            {
                selector: 'WithStatement',
                message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
            },
        ],

        // Disallow dangling underscores in identifiers
        // https://eslint.org/docs/latest/rules/no-underscore-dangle
        'no-underscore-dangle': ['error', {
            allow: [],
            allowAfterThis: false,
            allowAfterSuper: false,
            enforceInMethodNames: true,
        }],

        // Disallow the use of Boolean literals in conditional expressions.
        // Also, prefer `a || b` over `a ? a : b`.
        // https://eslint.org/docs/latest/rules/no-unneeded-ternary
        'no-unneeded-ternary': ['error', { defaultAssignment: false }],

        // Require method and property shorthand syntax for object literals
        // https://eslint.org/docs/rules/object-shorthand
        'object-shorthand': ['error', 'always', {
            ignoreConstructors: false,
            avoidQuotes: true,
        }],

        // Allow just one var statement per function
        // https://eslint.org/docs/latest/rules/one-var
        'one-var': ['error', 'never'],

        // Require assignment operator shorthand where possible or prohibit it entirely
        // https://eslint.org/docs/latest/rules/operator-assignment
        'operator-assignment': ['error', 'always'],

        // Disallow the use of Math.pow in favor of the ** operator
        // https://eslint.org/docs/latest/rules/prefer-exponentiation-operator
        'prefer-exponentiation-operator': 'error',

        // Prefer use of an object spread over Object.assign
        // https://eslint.org/docs/latest/rules/prefer-object-spread
        'prefer-object-spread': 'error',

        // Requires object keys to be sorted
        // https://eslint.org/docs/latest/rules/sort-keys
        'sort-keys': ['off', 'asc', { caseSensitive: false, natural: true }],

        // Require or disallow the Unicode Byte Order Mark
        // https://eslint.org/docs/latest/rules/unicode-bom
        'unicode-bom': ['error', 'never'],

        // --- @stylistic rules ---
        // Enforce line breaks after opening and before closing array brackets
        // https://eslint.style/rules/array-bracket-newline
        '@stylistic/array-bracket-newline': ['error', 'consistent'], // object option alternative: { multiline: true, minItems: 3 }

        // Enforce spacing inside array brackets
        '@stylistic/array-bracket-spacing': ['error', 'never'],

        // Require parens in arrow function arguments
        // https://eslint.style/rules/arrow-parens
        '@stylistic/arrow-parens': ['error', 'always'],

        // Require space before/after arrow function's arrow
        // https://eslint.style/rules/arrow-spacing
        '@stylistic/arrow-spacing': ['error', { before: true, after: true }],

        // Enforce spacing inside single-line blocks
        // https://eslint.style/rules/block-spacing
        '@stylistic/block-spacing': ['error', 'always'],

        // Enforce one true brace style
        '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],

        // Require trailing commas in multiline object literals
        '@stylistic/comma-dangle': ['error', {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'always-multiline',
        }],

        // Enforce spacing before and after comma
        '@stylistic/comma-spacing': ['error', { before: false, after: true }],

        // Enforce one true comma style
        '@stylistic/comma-style': ['error', 'last', {
            exceptions: {
                ArrayExpression: false,
                ArrayPattern: false,
                ArrowFunctionExpression: false,
                CallExpression: false,
                FunctionDeclaration: false,
                FunctionExpression: false,
                ImportDeclaration: false,
                ObjectExpression: false,
                ObjectPattern: false,
                VariableDeclaration: false,
                NewExpression: false,
            },
        }],

        // Disallow padding inside computed properties
        '@stylistic/computed-property-spacing': ['error', 'never'],

        // Enforce newline at the end of file, with no multiple empty lines
        '@stylistic/eol-last': ['error', 'always'],

        // https://eslint.style/rules/function-call-argument-newline
        '@stylistic/function-call-argument-newline': ['error', 'consistent'],

        // Enforce spacing between functions and their invocations
        // https://eslint.style/rules/function-call-spacing
        '@stylistic/function-call-spacing': ['error', 'never'],

        // Allow multiline arguments, but require newlines between each one in that case
        // https://eslint.style/rules/function-paren-newline
        '@stylistic/function-paren-newline': ['error', 'multiline-arguments'],

        // Enforce the spacing around the * in generator functions
        // https://eslint.style/rules/generator-star-spacing
        '@stylistic/generator-star-spacing': ['error', { before: false, after: true }],

        // Enforce the location of arrow function bodies with implicit returns
        // https://eslint.style/rules/implicit-arrow-linebreak
        '@stylistic/implicit-arrow-linebreak': ['error', 'beside'],

        // Two spaces are not enough; switch statements should have indentation
        // https://eslint.style/rules/indent
        '@stylistic/indent': ['error', 4, {
            SwitchCase: 1,
        }],

        // Enforces spacing between keys and values in object literal properties
        '@stylistic/key-spacing': ['error', { beforeColon: false, afterColon: true }],

        // Require a space before & after certain keywords
        '@stylistic/keyword-spacing': ['error', {
            before: true,
            after: true,
            overrides: {
                return: { after: true },
                throw: { after: true },
                case: { after: true },
            },
        }],

        // Disallow mixed 'LF' and 'CRLF' as linebreaks
        // https://eslint.style/rules/linebreak-style
        '@stylistic/linebreak-style': ['error', 'unix'],

        // Require or disallow an empty line between class members
        // https://eslint.style/rules/lines-between-class-members
        '@stylistic/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: false }],

        // Specify the maximum length of a line in your program
        // https://eslint.style/rules/max-len
        '@stylistic/max-len': ['error', 100, 2, {
            ignoreUrls: true,
            ignoreComments: false,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
        }],

        // Disallow the omission of parentheses when invoking a constructor with no arguments
        // https://eslint.style/rules/new-parens
        '@stylistic/new-parens': 'error',

        // Enforces a new line after each method call in the chain to make it
        // more readable and easy to maintain.
        // https://eslint.style/rules/newline-per-chained-call
        '@stylistic/newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],

        // Disallow arrow functions where they could be confused with comparisons
        // https://eslint.style/rules/no-confusing-arrow
        '@stylistic/no-confusing-arrow': ['error', {
            allowParens: true,
        }],

        // Require parentheses for mixed operators
        // https://eslint.style/rules/no-mixed-operators
        '@stylistic/no-mixed-operators': ['error', {
            // The list of arithmetic groups disallows mixing `%` and `**`
            // with other arithmetic operators.
            groups: [
                ['%', '**'],
                ['%', '+'],
                ['%', '-'],
                ['%', '*'],
                ['%', '/'],
                ['/', '*'],
                ['&', '|', '<<', '>>', '>>>'],
                ['==', '!=', '===', '!=='],
                ['&&', '||'],
            ],
            allowSamePrecedence: false,
        }],

        // Disallow mixed spaces and tabs for indentation
        // https://eslint.style/rules/no-mixed-spaces-and-tabs#no-mixed-spaces-and-tabs
        '@stylistic/no-mixed-spaces-and-tabs': 'error',

        // Disallow multiple empty lines, only one newline at the end, and no new lines at the
        // beginning.
        // https://eslint.style/rules/no-multiple-empty-lines
        '@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],

        // Disallow tab characters entirely
        // https://eslint.style/rules/no-tabs
        '@stylistic/no-tabs': 'error',

        // Disallow trailing whitespace at the end of lines
        // https://eslint.style/rules/no-trailing-spaces#no-trailing-spaces
        '@stylistic/no-trailing-spaces': ['error', {
            skipBlankLines: false,
            ignoreComments: false,
        }],

        // Disallow whitespace before properties
        // https://eslint.style/rules/no-whitespace-before-property
        '@stylistic/no-whitespace-before-property': 'error',

        // Enforce the location of single-line statements
        // https://eslint.style/rules/nonblock-statement-body-position
        '@stylistic/nonblock-statement-body-position': ['error', 'beside', { overrides: {} }],

        // Require padding inside curly braces
        // https://eslint.style/rules/object-curly-spacing#object-curly-spacing
        '@stylistic/object-curly-spacing': ['error', 'always'],

        // Enforce line breaks between braces
        // https://eslint.style/rules/object-curly-newline
        '@stylistic/object-curly-newline': ['error', {
            ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
            ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
            ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
            ExportDeclaration: { minProperties: 4, multiline: true, consistent: true },
        }],

        // Enforce "same line" or "multiple line" on object properties
        // https://eslint.style/rules/object-property-newline
        '@stylistic/object-property-newline': ['error', {
            allowAllPropertiesOnSameLine: true,
        }],

        // Require a newline around variable declaration
        // https://eslint.style/rules/one-var-declaration-per-line
        '@stylistic/one-var-declaration-per-line': ['error', 'always'],

        // If using multi-line operators, require a linebreak after for readability
        // https://eslint.style/rules/operator-linebreak
        '@stylistic/operator-linebreak': ['error', 'after'],

        // Disallow padding within blocks
        // https://eslint.style/rules/padded-blocks#padded-blocks
        '@stylistic/padded-blocks': ['error', {
            blocks: 'never',
            classes: 'never',
            switches: 'never',
        }, {
            allowSingleLineBlocks: true,
        }],

        // Require newlines after directives and before return statements
        // https://eslint.style/rules/padding-line-between-statements
        '@stylistic/padding-line-between-statements': [
            'error',
            { blankLine: 'always', prev: 'directive', next: '*' },
            { blankLine: 'always', prev: '*', next: 'return' },
        ],

        // Require quotes around object literal property names
        // https://eslint.style/rules/quote-props.html
        '@stylistic/quote-props': ['error', 'as-needed', { keywords: false, unnecessary: true, numbers: false }],

        // Specify whether double or single quotes should be used
        // https://eslint.style/rules/quotes#quotes
        '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],

        // Enforce spacing between object rest-spread
        // https://eslint.style/rules/rest-spread-spacing
        '@stylistic/rest-spread-spacing': ['error', 'never'],

        // Require or disallow use of semicolons instead of ASI
        // https://eslint.style/rules/semi#semi
        '@stylistic/semi': ['error', 'always'],

        // Enforce spacing before and after semicolons
        '@stylistic/semi-spacing': ['error', { before: false, after: true }],

        // Enforce location of semicolons
        // https://eslint.style/rules/semi-style
        '@stylistic/semi-style': ['error', 'last'],

        // Require or disallow space before blocks
        // https://eslint.style/rules/space-before-blocks#space-before-blocks
        '@stylistic/space-before-blocks': 'error',

        // Require or disallow space before function opening parenthesis
        // https://eslint.style/rules/space-before-function-paren
        '@stylistic/space-before-function-paren': ['error', {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always',
        }],

        // Require or disallow spaces inside parentheses
        '@stylistic/space-in-parens': ['error', 'never'],

        // Require spaces around operators
        '@stylistic/space-infix-ops': 'error',

        // Require or disallow spaces before/after unary operators
        // https://eslint.style/rules/space-unary-ops
        '@stylistic/space-unary-ops': ['error', {
            words: true,
            nonwords: false,
            overrides: {
            },
        }],

        // Require or disallow a space immediately following the // or /* in a comment
        // https://eslint.style/rules/spaced-comment
        '@stylistic/spaced-comment': ['error', 'always', {
            line: {
                exceptions: ['-', '+'],
                markers: ['=', '!', '/'], // space here to support sprockets directives, slash for TS /// comments
            },
            block: {
                exceptions: ['-', '+', '*'],
                markers: ['=', '!', ':', '::'], // space here to support sprockets directives and flow comment types
                balanced: true,
            },
        }],

        // Enforce spacing around colons of switch statements
        // https://eslint.style/rules/switch-colon-spacing
        '@stylistic/switch-colon-spacing': ['error', { after: true, before: false }],

        // Enforce usage of spacing in template strings
        // https://eslint.style/rules/template-curly-spacing
        '@stylistic/template-curly-spacing': 'error',

        // Require or disallow spacing between template tags and their literals
        // https://eslint.style/rules/template-tag-spacing
        '@stylistic/template-tag-spacing': ['error', 'never'],

        // Enforce spacing around the * in yield* expressions
        // https://eslint.style/rules/yield-star-spacing
        '@stylistic/yield-star-spacing': ['error', 'after'],
    },
};
