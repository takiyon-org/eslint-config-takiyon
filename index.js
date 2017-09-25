module.exports = {
    extends: 'airbnb-base',
    parser: 'babel-eslint',
    rules: {
        'class-methods-use-this': 'off',
        indent: ['error', 4, {
            SwitchCase: 1,
        }],
        // Temporarily switch to consistent until an option exists to support multiline with
        // single arguments
        // https://github.com/eslint/eslint/issues/9286
        'function-paren-newline': ['error', 'consistent'],
    },
};
