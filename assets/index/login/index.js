(function() {
  var $, LoginAction, LoginComponent, React, utils;

  React = require('react');

  $ = require('jquery');

  utils = require('../../common/utils');

  LoginAction = require('../../actions/LoginAction');

  LoginComponent = require('../../../components/functions/LoginComponent');

  (function() {
    var loginType, mainWindow;
    loginType = utils.getValueFromUrl('type');
    mainWindow = $('#main-window')[0];
    return React.render(LoginComponent({
      formType: loginType
    }), mainWindow);
  })();

}).call(this);
