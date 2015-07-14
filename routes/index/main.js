var express = require('express');
var router = express.Router();
var avDataHandler = require('../../model/avDataHandler.js')();

var components = require('../../components/');


var titles = {
  newAnimationTitle:'AV'
};

var getNewAnimationComponent = function(animations){

  newAnimationEleStr = components.NewAnimationComponent({
    title:'AV',
    animations:animations
  });

  return newAnimationEleStr
};

var getViewsData = function(){
  var animations = avDataHandler.getAnimation(0,10);

  var newAnimationHTML = getNewAnimationComponent(animations);

  return {
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