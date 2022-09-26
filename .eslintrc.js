module.exports = {
    "extends": [
        "eslint:recommended",
        "plugin:import/errors",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "react/prop-types": 0,
        "semi": [
            "error",
            "never"
        ],
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1
            }
        ],
        "linebreak-style": 0,
        "quotes": [
            "error",
            "single"
        ]
    },
    "parserOptions": {
        "ecmaVersion": 2021,
        "sourceType": "module"
    },
    "env": {
        "es6": true,
        "browser": true,
        "node": true
    },
    "settings": {
        "node": {
            "version": "detect"
        }
    }
}