const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./common');

module.exports = merge(common, {
    mode: 'development',
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
        contentBase: './build',
        hot: true
    }
    // devtool: 'cheap-module-eval-source-map'
});

