var express = require('express');
var router = express.Router();
var avDataHandler = require('../../model/avDataHandler.js')();

console.log(avDataHandler);

var getNewAnimationComponent = function(animations){


};

var getViewsData = function(){

  var animations = avDataHandler.getAnimation(0,10);
  console.log(animations);

  var newAnimationComponent = getNewAnimationComponent(animations);

};

/* GET home page. */
router.get('/', function(req, res, next) {

  var viewObj = getViewsData();

  res.render('index/main', { title: '糯米丸' });
});

module.exports = router;