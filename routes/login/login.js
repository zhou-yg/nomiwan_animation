(function() {
  var components, express, getNavBarComponent, getViewsData, router;

  express = require('express');

  router = express.Router();

  components = require('../../components/');

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
    var navbarHTML;
    navbarHTML = getNavBarComponent();
    return {
      navbar: navbarHTML
    };
  };

  router.get('/login', function(req, res, next) {
    var viewObj;
    console.log('login---in');
    viewObj = getViewsData();
    return res.render('login/login', viewObj);
  });

  module.exports = router;

}).call(this);
