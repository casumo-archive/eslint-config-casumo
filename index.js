module.exports = {
    env: {
        browser: true,
        node: true
    },
    extends: [
        './rules/possible-errors.js',
        './rules/best-practices.js',
        './rules/strict-mode.js',
        './rules/variables.js',
        './rules/node-js-and-common-js.js',
        './rules/stylistic-issues.js',
        './rules/ecma-script-6.js'
    ],
    rules: {},
    globals: {
        ActiveXObject: true,
        define: true,
        require: true,
        describe: true,
        it: true,
        beforeEach: true,
        afterEach: true,
        before: true,
        after: true,
        should: true,
        module: true
    }
};
