module.exports = {
    env: {
        browser: true,
        node: true
    },
    extends: [
        './possible-errors.js',
        './best-practices.js',
        './strict-mode.js',
        './variables.js',
        './node-js-and-common-js.js',
        './stylistic-issues.js',
        './ecma-script-6.js'
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
