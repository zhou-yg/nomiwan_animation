/**
 * Created by zyg on 15/7/7.
 */
var path = require('path');
var fs = require('fs');
//--------------------
var jsonPath = require(path.join(dirname,'config/jsonPath'));

var dirName; //工程目录

var allModelObj;

var read = function(allJsonFullName){

    var result = null;

    if(fs.exists(allJsonFullName)){
        result = JSON.parse(fs.readFileSync(allJsonFullName,{
            encode:'utf-8'
        }));
    }

    return result;
};


var initAllJson = function(){
    var allObj = read(path.join(dirName,jsonPath.all));
    return allObj;
};

module.exports = function(__dirname) {
    dirName = __dirname;

    //初始化所有的动漫数据
    allModelObj = initAllJson();

    return {
        getAnimation:function(){
        },
        getEpisodes:function(){

        }
    }
};