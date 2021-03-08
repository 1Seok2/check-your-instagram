const path = require('path')

module.exports = {
    mode : 'development',
    entry : {
        // main : './build/src/index.js'
        main  : './src/index.ts'
    },
    module : {
        rules : [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test : /\.css$/,
                use: ['css-loader']
            }
        ]
    },
    resolve : {
        extensions: [".tsx", ".ts", ".js"],
    },
    output : {
        publicPath: '/app',
        path: path.resolve('./public'),
        filename: '[name].js',
    },
    devServer : {
        port : 3000,
        hot: true,
        contentBase: __dirname,
        inline: true,
        watchOptions: {
            poll: true
        }
    }
}