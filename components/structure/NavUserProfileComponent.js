'use strict';

(function () {
  var LoginAction, React, T, UserGuide, cc, ce, cf;

  React = require('react');

  LoginAction = require('../../assets/actions/LoginAction');

  cf = React.createFactory;

  cc = React.createClass;

  ce = React.createElement;

  T = React.PropTypes;

  UserGuide = cc({
    getInitialState: function getInitialState() {
      return {
        liArr: [{
          name: '消息',
          type: 'message'
        }, {
          name: '历史',
          type: 'history'
        }],
        username: 'zhouyg'
      };
    },
    clickOnGuide: function clickOnGuide(type) {
      return console.log(type);
    },
    render: function render() {
      return ce('ul', {
        className: 'user-guide'
      }, this.state.liArr.map((function (_this) {
        return function (guideObj, i) {
          return ce('li', {
            onClick: function onClick() {
              return _this.clickOnGuide(guideObj.type);
            },
            key: 'guideLi' + i
          }, guideObj.name);
        };
      })(this)));
    }
  });

  module.exports = cf(cc({
    propTypes: {
      userMsg: T.object.isRequired
    },
    getInitialState: function getInitialState() {
      var userMsg;
      userMsg = this.props.userMsg || {};
      return {
        userMsg: userMsg
      };
    },
    clickOnUsername: function clickOnUsername(e) {},
    login: function login(e) {
      return LoginAction.login();
    },
    register: function register(e) {
      return LoginAction.register();
    },
    render: function render() {
      var userBoard, userMsg, username;
      userMsg = this.state.userMsg;
      username = userMsg.username;
      if (username) {
        userBoard = ce('div', {
          className: 'user-msg'
        }, ce('span', {
          className: 'title',
          onClick: this.clickOnUsername
        }, username), ce(UserGuide, {}));
      } else {
        userBoard = ce('div', {
          className: 'user-msg'
        }, ce('span', {
          className: 'title',
          type: 'login',
          onClick: this.login
        }, '登录'), ce('span', {
          className: 'title',
          type: 'register',
          onClick: this.register
        }, '注册'));
      }
      return ce('div', {
        className: 'user-profile'
      }, userBoard, ce('div', {
        className: 'avatar'
      }));
    }
  }));
}).call(undefined);
