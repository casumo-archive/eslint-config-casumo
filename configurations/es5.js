module.exports = {
    extends: [
        '../rules/eslint/best-practices/on.js',
        '../rules/eslint/possible-errors/on.js',
        '../rules/eslint/ecma-script-6/off.js',
        '../rules/eslint/node-js-and-common-js/off.js',
        '../rules/eslint/strict-mode/on.js',
        '../rules/eslint/stylistic-issues/on.js',
        '../rules/eslint/variables/on.js',
        // The following line is needed since `eslint-find-rules -u` does not skip deprecated rules.
        // This can be removed once https://github.com/sarbbottam/eslint-find-rules/issues/172 is resolved.
        '../rules/eslint/deprecated/off.js'
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
