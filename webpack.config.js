const webpack = require('webpack'),
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    extractSass = new ExtractTextPlugin({
        filename: "[name].[contenthash].css",
        disable: process.env.NODE_ENV === "development"
    }),
    WebpackCleanupPlugin = require('webpack-cleanup-plugin'),
    HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    plugins = [
        new webpack.ProvidePlugin({$: "jquery", jQuery: "jquery"}),
        new HtmlWebpackPlugin({filename: '../index.html', template: 'assets/index.ejs', alwaysWriteToDisk: true}),
        new HtmlWebpackPlugin({filename: '../404.html', template: 'assets/404.ejs', alwaysWriteToDisk: true}),
        new HtmlWebpackHarddiskPlugin(),
        new WebpackCleanupPlugin(),
        new CopyWebpackPlugin([
            // Copy directory contents to {output}/
            {
                from: 'assets'
            },

            // Copy glob results, relative to context
            //    {
            //        context: 'assets',
            //        from: '**/*'
            //    }
        ], {
            ignore: [
                // Doesn't copy any files with a txt extension
                '*.scss',
                '*.css',
                '*.png',
                '*.ejs'
            ],

            // By default, we only copy modified files during
            // a watch or webpack-dev-server build. Setting this
            // to `true` copies all files.
            copyUnmodified: true
        }),
        extractSass
    ];

module.exports = {
    entry: `${__dirname}/src/index.js`,
    output: {
        path: `${__dirname}/build`,
        publicPath: '/build/',
        filename: 'bundle.[hash].js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }, {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [
                        {
                            loader: "css-loader"
                        }, {
                            loader: "sass-loader"
                        }
                    ],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            },{
                test: /\.css$/,
                use: extractSass.extract({
                    use: [
                        {
                            loader: "css-loader"
                        }
                    ],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            }, {
                test: /\.svg$/,
                loader: 'url-loader?limit=65000&mimetype=image/svg+xml&name=fonts/[name].[ext]'
            }, {
                test: /\.woff$/,
                loader: 'url-loader?limit=65000&mimetype=application/font-woff&name=fonts/[name].[ext]'
            }, {
                test: /\.woff2$/,
                loader: 'url-loader?limit=65000&mimetype=application/font-woff2&name=fonts/[name].[ext]'
            }, {
                test: /\.[ot]tf$/,
                loader: 'url-loader?limit=65000&mimetype=application/octet-stream&name=fonts/[name].[ext]'
            }, {
                test: /\.eot$/,
                loader: 'url-loader?limit=65000&mimetype=application/vnd.ms-fontobject&name=fonts/[name].[ext]'
            }

        ]
    },
    resolve: {
        modules: [path.resolve('./src'), path.resolve('./assets'), path.resolve('./node_modules')]
    },

    plugins: process.argv.indexOf('-p') === -1
        ? plugins
        : [
            new webpack.optimize.UglifyJsPlugin({
                output: {
                    comments: false
                }
            }),
            ...plugins
        ]
};
