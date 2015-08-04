(function() {
  var avDataHandler, components, express, getCommentsComponent, getNavBarComponent, getViewsData, router, titles;

  express = require('express');

  router = express.Router();

  avDataHandler = require('../../model/avDataHandler.js')();

  components = require('../../components/');

  titles = {
    newAnimationTitle: 'AV'
  };

  getCommentsComponent = function() {
    var commentsEleStr;
    commentsEleStr = components.rs(components.structure.CommentsComponent({
      title: 'AV',
      comments: [
        {
          avatar: 'http://i0.hdslb.com/52_52/user/46160/4616089/myface.jpg',
          username: 'Zero丶one',
          time: '10秒前',
          content: '看评论看评论看评论看评论论'
        }, {
          avatar: 'http://i0.hdslb.com/52_52/user/46160/4616089/myface.jpg',
          username: 'Zero丶one',
          time: '10秒前',
          content: '看评论看评论看评论看评论论评论看评论论评论看评论论评论看评论论评论看评论论'
        }
      ]
    }));
    return commentsEleStr;
  };

  getNavBarComponent = function() {
    var navbarStr;
    navbarStr = components.rs(components.structure.NavBarComponent({
      userMsg: {}
    }));
    return navbarStr;
  };

  getViewsData = function() {
    var commentsHTML, navbarHTML;
    navbarHTML = getNavBarComponent();
    commentsHTML = getCommentsComponent();
    return {
      navbar: navbarHTML,
      commentList: commentsHTML
    };
  };

  router.get('/episodes', function(req, res, next) {
    var viewObj;
    console.log('aniEpisodes---in');
    viewObj = getViewsData();
    console.log(viewObj);
    viewObj.title = titles.newAnimationTitle;
    return res.render('episodes/aniEpisodes', viewObj);
  });

  module.exports = router;

}).call(this);
