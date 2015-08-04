(function() {
  var avDataHandler, components, express, getMsgBoardComponent, getNavBarComponent, getNewAnimationComponent, getSysRecommendComponent, getViewsData, router, titles;

  express = require('express');

  router = express.Router();

  avDataHandler = require('../../model/avDataHandler.js')();

  components = require('../../components/');

  titles = {
    newAnimationTitle: 'AV'
  };

  getMsgBoardComponent = function(recommends) {
    return components.rs(components.structure.MsgBoardComponent({
      title: 'M'
    }));
  };

  getSysRecommendComponent = function(recommends) {
    return components.rs(components.structure.SysRecommendComponent({
      title: 'R'
    }));
  };

  getNewAnimationComponent = function(animations) {
    return components.rs(components.structure.NewAnimationComponent({
      title: 'AV',
      animations: animations
    }));
  };

  getNavBarComponent = function() {
    var navbarStr;
    navbarStr = components.rs(components.structure.NavBarComponent({
      userMsg: {
        username: 'zhouyg from server'
      }
    }));
    return navbarStr;
  };

  getViewsData = function() {
    var animations, msgBoardHTML, navbarHTML, newAnimationHTML, sysRecommendHTML;
    navbarHTML = getNavBarComponent();
    animations = avDataHandler.getAnimation(0, 10);
    newAnimationHTML = getNewAnimationComponent(animations);
    sysRecommendHTML = getSysRecommendComponent();
    msgBoardHTML = getMsgBoardComponent();
    return {
      navbar: navbarHTML,
      newAnimation: newAnimationHTML,
      sysRecommend: sysRecommendHTML,
      msgBoard: msgBoardHTML
    };
  };

  router.get('/', function(req, res, next) {
    var viewObj;
    console.log('main---in');
    viewObj = getViewsData();
    viewObj.title = titles.newAnimationTitle;
    return res.render('index/main', viewObj);
  });

  module.exports = router;

}).call(this);
