module.exports = {
    extends: [
        '../configurations/es5.js',
        '../rules/eslint/es6/on.js'
    ],
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            impliedStrict: true
        }
    },
    env: {
        es6: true
    },
    globals: {},
    rules: {}
};
