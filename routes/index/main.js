var express = require('express');
var router = express.Router();
var avDataHandler = require('../../model/avDataHandler.js')();

var components = require('../../components/');


var titles = {
  newAnimationTitle:'AV'
};

//获取消息HTML
var getMsgBoardComponent = function(recommends){

  return components.rs(components.structure.MsgBoardComponent({
    title:'M'
  }))
};

//获取推荐HTML
var getSysRecommendComponent = function(recommends){

  return components.rs(components.structure.SysRecommendComponent({
    title:'R'
  }))
};

//获取新番板块的HTML
var getNewAnimationComponent = function(animations){

  return components.rs(components.structure.NewAnimationComponent({
    title:'AV',
    animations:animations
  }));
};

//获取导航板块的HTML
var getNavBarComponent = function(){

  var navbarStr = components.rs(components.structure.NavBarComponent({
    userMsg:{
      username:'zhouyg from server'
    }
  }));

  return navbarStr;
};

var getViewsData = function(){
  var navbarHTML = getNavBarComponent();

  var animations = avDataHandler.getAnimation(0,10);
  var newAnimationHTML = getNewAnimationComponent(animations);

  var sysRecommendHTML = getSysRecommendComponent();

  var msgBoardHTML = getMsgBoardComponent();

  return {
    navbar:navbarHTML,
    newAnimation:newAnimationHTML,
    sysRecommend:sysRecommendHTML,
    msgBoard:msgBoardHTML
  }
};

/* GET main.ejs page. */
router.get('/', function(req, res, next) {

  var viewObj = getViewsData();

  viewObj.title = titles.newAnimationTitle;

  res.render('index/main', viewObj );
});

module.exports = router;