module.exports = {
    extends: [
        '../configurations/es5.js',
        '../rules/mocha/on.js'
    ],
    env: {
        mocha: true
    },
    rules: {
        'max-nested-callbacks': 0,
        'no-magic-numbers': 0
    }
};
