/**
 * Created by zyg on 15/7/28.
 */
// webpack.config.js
var webpack = require('webpack');
var componentsPlugin = new webpack.optimize.CommonsChunkPlugin('/common/components.js');


module.exports = {

    externals: {
        'react': "React",
        'reflux': "Reflux",
        'jquery':'$'
    },
    entry: {
        episodeIndex: './precompile/assets/index/episodes/index',
        mainIndex: './precompile/assets/index/main/index',
        signInUp: './precompile/assets/index/user/signInUp'
    },
    output: {
        path: './public/js/',
        publicPath: 'http://localhost:8080/public/js/',
        filename: '[name].js'
    },
    resolve: {
        // 现在可以写 require('file') 代替 require('file.coffee')
        extensions: ['', '.js', '.jsx', '.coffee   ', '.less']
    },
    module: {
        loaders: [{
                test: /\.coffee$/,
                exclude: /node_modules|bower_components/,
                loader: 'coffee-loader'
            },
            {
                test: /\.jsx$|\.js/,
                exclude: /node_modules|bower_components/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                exclude: /node_modules|bower_components/,
                loader: 'style!css'
            },
            {
                test: /\.less$/,
                exclude: /node_modules|bower_components/,
                loader: 'style-loader!css-loader!less-loader'
        }]
    },
    plugins: [componentsPlugin]
};