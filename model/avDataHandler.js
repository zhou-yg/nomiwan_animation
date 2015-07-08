/**
 * Created by zyg on 15/7/7.
 */
var path = require('path');
var fs = require('fs');
var Im = require('immutable');
//--------------------
var jsonPath;

var dirName; //工程目录

var allModelArr;

var cache = {
    isUpdate:false,
    animation:null,
    episode:{}
};

var utils = {
    log:function(){
        //console.log.apply(console,arguments);
    },
    checkEmbed:function(str){
        if(str.indexOf('embed') !== -1 || str.indexOf('object') !== -1){
            return str;
        }else{
            return false;
        }
    }
};

var read = function(allJsonFullName){

    var result = null;

    if(fs.existsSync(allJsonFullName)){
        result = JSON.parse(fs.readFileSync(allJsonFullName,{
            encode:'utf-8'
        }));
    }else{
        console.log('"',allJsonFullName,'"not exist');
    }

    return result;
};

var initAllJson = function(){
    var allObjArr = read(path.join(dirName,jsonPath.all));

    allObjArr = Im.fromJS(allObjArr);

    return allObjArr;
};

module.exports = function(__dirname) {
    dirName = __dirname;
    jsonPath = require(path.join(dirName,'config/jsonPath'));

    //初始化所有的动漫数据
    allModelArr = initAllJson();

    return {
        getAnimation:function(){
            var result = [];
            if(!cache.animation || !cache.isUpdate){
                cache.animation = [];
                allModelArr.forEach(function(map){
                    var obj = {
                        name:map.get('name'),
                        image:map.get('images').get(0)
                    };
                    cache.animation.push(obj);
                });
            }
            result = cache.animation;
            return result;
        },
        getSources:function(animation){
            var result = [];
        },
        getEpisodes:function(targetAnimationName,targetSource){
            var key =targetAnimationName+'_'+targetSource;
            var result = [];

            if(!cache.episode[key] || !cache.isUpdate){
                var allModelArrCopy = allModelArr.toArray();

                for(var ani= 0,allAniLen=allModelArrCopy.length;ani<allAniLen;ani++){
                    var map = allModelArr[ani];
                    var aniName = map.get('name');
                    console.log(aniName,targetAnimationName,aniName === targetAnimationName);

                    if(aniName === targetAnimationName){
                        console.log(map.get('sources'));

                        var sources = map.get('sources').toArray();

                        for(var i= 0,len=sources.length;i<len;i++){
                            var sourceMap = sources[i];
                            console.log(sourceMap);

                            if(sourceMap.get('sourceName') === targetSource){
                                var videos = sourceMap.get('videos');
                                videos = videos.map(function(videoSrcObj){
                                    var srcArr = videoSrcObj.get('videoSrcArr').filter(function(src){
                                        console.log('src:',src);
                                        return utils.checkEmbed(src);
                                    });
                                });
                                cache.episode[key] = videos;
                                break;
                            }
                        }
                        break;
                    }
                }
            }
            result = cache.episode[key];
            return result;
        }
    }
};