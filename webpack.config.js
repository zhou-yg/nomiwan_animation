/**
 * Created by zyg on 15/7/28.
 */
// webpack.config.js
var webpack = require('webpack');
var componentsPlugin = new webpack.optimize.CommonsChunkPlugin('/common/components.js');


module.exports = {

    entry:{
        episodeIndex:'./assets/js/index/episodes/index.js',
        mainIndex:'./assets/js/index/main/index.js'
    },
    output:{
        path:'./public/js/',
        filename:'[name].js'
    },
    resolve: {
        // 现在可以写 require('file') 代替 require('file.coffee')
        //extensions: ['.js','.coffee']
    },
    module:{
        loaders:[
            { test: /\.coffee$/, loader: 'coffee-loader' }
        ]
    },
    plugins:[componentsPlugin]
};