import stylistic from '@stylistic/eslint-plugin';

export default {
    plugins: {
        '@stylistic': stylistic,
    },

    rules: {
        // Two spaces are not enough; switch statements should have indentation
        '@stylistic/indent': ['error', 4, {
            SwitchCase: 1,
        }],

        // If using multi-line operators, require a linebreak after for readability
        '@stylistic/operator-linebreak': ['error', 'after'],
    },
};
