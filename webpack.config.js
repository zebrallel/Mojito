const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'src/app.js'),
        vendors: ['react', 'react-dom', 'redux', 'react-redux', 'react-router-dom']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            // {
            //     test: /\.js$/,
            //     use: ["source-map-loader"],
            //     enforce: "pre"
            // },
            {
                test: /\.jsx?$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader',
                options: {
                    presets: ['react', 'stage-0'],
                    plugins: [
                        [
                            'transform-runtime',
                            {
                                helpers: false,
                                polyfill: false,
                                regenerator: true
                            }
                        ]
                    ]
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 8192
                }
            }
        ]
    },
    resolve: {
        alias: {
            pages: path.resolve(__dirname, 'src/pages/'),
            styles: path.resolve(__dirname, 'src/styles/')
        },
        extensions: ['.ts', '.tsx', '.js']
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"develop"'
        }),
        new ExtractTextPlugin('style.css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors'
        }),
        new HtmlWebpackPlugin({
            title: 'Mojito Center',
            template: 'dist/index.ejs'
        }),
        new webpack.HotModuleReplacementPlugin()
        // new UglifyJSPlugin({
        //     sourceMap: true
        // })
    ],
    devServer: {
        hot: true,
        contentBase: path.resolve(__dirname, 'dist'),
        port: 8888
    },
    devtool: 'cheap-module-eval-source-map'
};
