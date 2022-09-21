module.exports = {
    extends: 'airbnb-base',
    parser: '@babel/eslint-parser',
    rules: {
        // Do not coerce methods into static state simply because they lack `this`
        'class-methods-use-this': 'off',

        // Allow multiline arguments, but require newlines between each one in that case
        'function-paren-newline': ['error', 'multiline-arguments'],

        // Two spaces are not enough; switch statements should have indentation
        indent: ['error', 4, {
            SwitchCase: 1,
        }],

        // If using multi-line operators, require a linebreak after for readability
        'operator-linebreak': ['error', 'after']
    },
};
