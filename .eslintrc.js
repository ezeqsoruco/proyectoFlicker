module.exports = {
    env: {
        es6: true,
        node: true
    },
    extends: [
        'plugin:react/recommended',
        'standard'
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 11,
        sourceType: 'module'
    },
    plugins: [
        'react',
        'react-native'
    ],
    rules: { indent: [2, 'tab'] }
}