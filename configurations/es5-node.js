module.exports = {
    extends: [
        '../configurations/es5.js',
        '../rules/eslint/node/on.js'
    ],
    env: {
        node: true
    },
    rules: {
        strict: [2, 'global']
    }
};
