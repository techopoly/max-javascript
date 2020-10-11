/* eslint-disable no-undef */
const path = require('path')// eslint-disable-next-line no-undef
module.exports = {
    mode: 'production',
    entry: './src/myApp.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'assets/', 'scripts'), // constructs a new absolute path as output needs an absolute path not a relative one
        publicPath: 'assets/scripts/'
    },
    devServer: {
        contentBase: './' // where the html file is located.
    },
    devtool: 'cheap-source-map'

    
}