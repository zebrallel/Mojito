const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry : {
        main : path.resolve(__dirname, 'src/app.js'),
        vendors : ['react', 'react-dom'],
    },
    output : {
        path : path.resolve(__dirname, 'dist'),
        filename : '[name].js'
    },
    module : {
        rules : [
            {
                test : /\.jsx?$/,
                include : path.resolve(__dirname, 'src'),
                loader : 'babel-loader',
                options : {
                    presets : ['es2015', 'react', 'stage-0']
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                            localIdentName: '[path][name]__[local]--[hash:base64:5]'
                        },
                    },
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors'
        }),
        new HtmlWebpackPlugin({
            title : 'Mojito Center',
            template : 'dist/index.ejs'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer : {
        hot: true,
        contentBase : path.resolve(__dirname, 'dist'),
        port : 8888
    }
};