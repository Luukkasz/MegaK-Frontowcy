const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
        ],
    },
    plugins: [
      new HtmlWebpackPlugin({
          template: path.resolve(__dirname, 'public/index.html'),
          filename: 'index.html'
      })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        },
        port: 3000,
        hot: true
    },
};