var express = require('express');
var router = express.Router();
var avDataHandler = require('../../model/avDataHandler.js')();

var components = require('../../components/');


var titles = {
  newAnimationTitle:'AV'
};

//获取新番板块的HTML
var getNewAnimationComponent = function(animations){

  var newAnimationEleStr = components.structure.NewAnimationComponent({
    title:'AV',
    animations:animations
  });

  return newAnimationEleStr
};

//获取导航板块的HTML
var getNavBarComponent = function(){

  var navbarStr = components.structure.NavBarComponent({

  });

  return navbarStr;
};

var getViewsData = function(){
  var navbarHTML = getNavBarComponent();

  var animations = avDataHandler.getAnimation(0,10);
  var newAnimationHTML = getNewAnimationComponent(animations);


  return {
    navbar:navbarHTML,
    newAnimation:newAnimationHTML
  }
};

/* GET main.ejs page. */
router.get('/', function(req, res, next) {

  var viewObj = getViewsData();

  viewObj.title = titles.newAnimationTitle;

  res.render('index/main', viewObj );
});

module.exports = router;