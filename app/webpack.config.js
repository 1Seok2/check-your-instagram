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
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|jp2|webp)$/,
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]'
                },
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