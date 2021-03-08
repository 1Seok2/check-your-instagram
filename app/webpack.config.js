const path = require('path')

module.exports = {
    mode : 'development',
    entry : {
        main : './build/src/index.js'
    },
    output : {
        publicPath: '/app/build/dist',
        path: path.resolve('./build/dist'),
        filename: '[name].js',
    },
    devServer : {
        port : 3000,
        hot: true,
        contentBase: ['./build','./src'],
        inline: true,
        watchOptions: {
            poll: true
        }
    }
}