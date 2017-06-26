module.exports = {
    extends: 'airbnb-base',
    parser: 'babel-eslint',
    rules: {
        'class-methods-use-this': 'off',
        indent: ['error', 4, {
            SwitchCase: 1,
        }]
    },
};
