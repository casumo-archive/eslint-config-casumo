module.exports = {
    extends: [
        './es5.js',
        '../rules/eslint/node-js-and-common-js/on.js'
    ],
    env: {
        node: true
    },
    rules: {
        strict: [2, 'global']
    }
};
