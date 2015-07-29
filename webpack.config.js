/**
 * Created by zyg on 15/7/28.
 */
// webpack.config.js
var webpack = require('webpack');
var componentsPlugin = new webpack.optimize.CommonsChunkPlugin('/common/components.js');


module.exports = {

    entry:{
        episodeIndex:'./assets/index/episodes/index.js',
        mainIndex:'./assets/index/main/index.js'
    },
    output:{
        path:'./public/js/',
        publicPath:'http://localhost:8080/public/js/',
        filename:'[name].js'
    },
    resolve: {
        // 现在可以写 require('file') 代替 require('file.coffee')
        //extensions: ['.js','.coffee']
    },
    module:{
        loaders:[
            { test: /\.coffee$/, loader: 'coffee-loader' },
            { test: /\.css$/, loader: 'style!css' }
        ]
    },
    plugins:[componentsPlugin]
};