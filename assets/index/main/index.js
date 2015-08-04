(function() {
  var $, LoginAction, NavBarComponent, React;

  React = require('react');

  $ = require('jquery');

  LoginAction = require('../../actions/LoginAction');

  NavBarComponent = require('../../../components/structure/NavBarComponent');

  (function() {
    var NavBarBoxDom;
    NavBarBoxDom = $('.navbar-box')[0];
    return React.render(NavBarComponent({
      userMsg: {}
    }), NavBarBoxDom);
  })();

  LoginAction.login.listen(function() {
    return console.log('click on login');
  });

}).call(this);
