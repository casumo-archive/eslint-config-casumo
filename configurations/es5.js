module.exports = {
    extends: [
        '../rules/eslint/best-practices/on.js',
        '../rules/eslint/errors/on.js',
        '../rules/eslint/es6/off.js',
        '../rules/eslint/node/off.js',
        '../rules/eslint/strict/on.js',
        '../rules/eslint/style/on.js',
        '../rules/eslint/variables/on.js'
    ],
    parserOptions: {
        ecmaVersion: 5,
        sourceType: 'script',
        ecmaFeatures: {}
    },
    env: {
        amd: true
    },
    globals: {
        module: false,
        process: false
    },
    rules: {}
};
