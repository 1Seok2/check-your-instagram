const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode : 'development',
    entry : {
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
                    name: 'images/[name].[ext]',
                    publicPath: 'public/'
                },
            }
        ]
    },
    resolve : {
        extensions: [".tsx", ".ts", ".js"],
    },
    output : {
        publicPath: '/public/',
        path: path.resolve('./public/'),
        filename: '[name].js',
    },
    devServer : {
        port : 3000,
        hot: true,
        contentBase: __dirname + '/public/',
        inline: true,
        watchOptions: {
            poll: true
        }
    },
    plugins : [
        // new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template : './src/index.html'
        })
    ]
}