module.exports = {
    env: {
        browser: true,
        node: true
    },
    rules: {
        // NO_RULE 'init-declarations': 2,
        // 'no-catch-shadow': 2,
        // 'no-delete-var': 2,
        // 'no-label-var': 2,
        // 'no-restricted-globals': ['error', 'event', 'fdescribe'],
        // 'no-shadow-restricted-names': 2,
        // 'no-shadow': 2,
        // 'no-undef-init': 2,
        'no-undef': 2,
        'no-undefined': 2,
        'no-unused-vars': 2,
        'no-use-before-define': ['error', { functions: false, classes: true }]
    }
};
