module.exports = {
    extends: [
        '../configurations/es6'
    ],
    env: {
        mocha: true,
        phantomjs: true
    },
    rules: {
        'max-nested-callbacks': 0,
        'no-magic-numbers': 0
    }
};
