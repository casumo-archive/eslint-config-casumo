module.exports = {
    rules: {
        'init-declarations': 0,
        'no-delete-var': 0,
        'no-label-var': 0,
        'no-restricted-globals': 0,
        'no-shadow-restricted-names': 0,
        'no-shadow': 0,
        'no-undef-init': 0,
        'no-undef': 2,
        'no-undefined': 2,
        'no-unused-vars': 2,
        'no-use-before-define': ['error', { functions: false, classes: true }]
    }
};
