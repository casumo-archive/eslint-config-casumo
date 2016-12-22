module.exports = {
    extends: './no-rules-config.js',
    rules: {
        'one-var': [2, {
            var: 'always',
            let: 'never',
            const: 'never'
        }]
    }
};
