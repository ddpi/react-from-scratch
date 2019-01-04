module.exports = {
    "env": {
        "browser": true
    },
    "extends": [
        "standard",
        "plugin:react/recommended"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module",
    },
    "plugins": [
        "react"
    ],
    "settings": {
        "react": {
            "version": "detect"
        }
    }
};