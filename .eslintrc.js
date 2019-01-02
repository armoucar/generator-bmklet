module.exports = {
    "extends": "airbnb-base",

    "rules": {
        "padded-blocks": ["error", { "classes": "always" }],
        "indent": ["error", 4],
        "max-len": ["off"],
        "no-underscore-dangle": ["off"],
        "import/no-dynamic-require": ["off"],
        "no-return-assign": ["off"],
        "no-multiple-empty-lines": ["error", { "max": 2, "maxEOF": 1 }],
        "no-param-reassign": [2, { "props": false }],
    },

    "env": {
        "node": true,
        "mocha": true,
        "jest": true
    }
};
