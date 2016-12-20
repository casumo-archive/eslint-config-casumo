module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true
    },
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
    },
    rules: {
        'no-bitwise': 2,
        'camelcase': 2,
        'curly': [
            2,
            'all'
        ],
        'eqeqeq': 2,
        'no-eval': 2,
        'no-unused-expressions': 2,
        'guard-for-in': 2,
        'wrap-iife': 2,
        'indent': [
            2,
            4,
            {
                SwitchCase: 1
            }
        ],
        'no-use-before-define': [
            'error',
            {
                functions: false,
                classes: true
            }
        ],
        'func-style': [
            'error',
            'declaration',
            {
                allowArrowFunctions: true
            }
        ],
        'new-cap': 2,
        'no-caller': 2,
        'no-empty': 2,
        'no-new': 2,
        'quotes': [
            2,
            'single'
        ],
        'strict': 0,
        'no-undef': 2,
        'no-unused-vars': 2,
        'keyword-spacing': [
            2,
            {}
        ],
        'space-before-blocks': [
            2,
            'always'
        ],
        'space-before-function-paren': [
            2,
            'always'
        ],
        'one-var': [
            2,
            'always'
        ],
        'vars-on-top': 2,
        'array-bracket-spacing': [
            2,
            'never'
        ],
        'space-in-parens': [
            2,
            'never'
        ],
        'no-underscore-dangle': 2,
        'comma-style': [
            2,
            'last'
        ],
        'space-unary-ops': [
            2,
            {
                words: false,
                nonwords: false
            }
        ],
        'space-infix-ops': 2,
        'no-with': 2,
        'no-mixed-spaces-and-tabs': 2,
        'no-trailing-spaces': 2,
        'comma-dangle': [
            2,
            'never'
        ],
        'brace-style': 2,
        'eol-last': 2,
        'dot-notation': 2,
        'no-multi-str': 2,
        'key-spacing': [
            2,
            {
                afterColon: true
            }
        ],
        'no-multiple-empty-lines': [
            2,
            {
                max: 1,
                maxEOF: 1
            }
        ],
        'max-len': [
            2,
            110
        ],
        'newline-after-var': [
            2,
            'always'
        ],
        'max-nested-callbacks': [
            'error',
            3
        ],
        'max-depth': [
            'error',
            2
        ],
        'max-statements': [
            'error',
            20
        ],
        'max-params': [
            'error',
            10
        ],
        'no-extend-native': 2,
        'no-return-assign': 2,
        'no-undefined': 2,
        'radix': 2,
        'semi': 2,
        'no-extra-semi': 2,
        'no-unreachable': 2
    }
};