const path = require('path');

module.exports = {
    entry: './getCat.js',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'getCat.js',
      libraryTarget: 'commonjs'
    },
    target: 'node',
    mode: 'production'
}