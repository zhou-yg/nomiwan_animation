(function() {
  var LoginAction, Reflux;

  Reflux = require('reflux');

  LoginAction = Reflux.createActions({
    login: {
      children: ['success', 'fail']
    },
    register: {
      children: ['success', 'fail']
    }
  });

  module.exports = LoginAction;

}).call(this);
