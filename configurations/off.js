module.exports = {
    extends: [
        '../rules/eslint/best-practices/off.js',
        '../rules/eslint/possible-errors/off.js',
        '../rules/eslint/ecma-script-6/off.js',
        '../rules/eslint/node-js-and-common-js/off.js',
        '../rules/eslint/strict-mode/off.js',
        '../rules/eslint/stylistic-issues/off.js',
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
