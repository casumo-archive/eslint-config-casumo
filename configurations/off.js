module.exports = {
    extends: [
        '../rules/eslint/best-practices/off.js',
        '../rules/eslint/errors/off.js',
        '../rules/eslint/es6/off.js',
        '../rules/eslint/node/off.js',
        '../rules/eslint/strict/off.js',
        '../rules/eslint/style/off.js',
        '../rules/eslint/variables/off.js'
    ],
    parserOptions: {
        ecmaVersion: 5,
        sourceType: 'script',
        ecmaFeatures: {}
    },
    env: {},
    globals: {},
    rules: {}
};
