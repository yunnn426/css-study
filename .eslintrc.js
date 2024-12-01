module.exports = {
    rules: {
        'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0, maxBOF: 0 }],
        'padding-line-between-statements': [
            'error',
            { blankLine: 'never', prev: '*', next: 'return' }
        ]
    }
}