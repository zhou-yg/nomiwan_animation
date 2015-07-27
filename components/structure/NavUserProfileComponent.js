(function() {
  var React, T, UserGuide, cc, ce, cf;

  React = require('react');

  cf = React.createFactory;

  cc = React.createClass;

  ce = React.createElement;

  T = React.PropTypes;

  React = require('react');

  cf = React.createFactory;

  cc = React.createClass;

  ce = React.createElement;

  T = React.PropTypes;

  UserGuide = cc({
    getInitialState: function() {
      return {
        liArr: [
          {
            name: '消息',
            type: 'message'
          }, {
            name: '历史',
            type: 'history'
          }
        ],
        username: 'zhouyg'
      };
    },
    clickOnGuide: function(type) {
      return console.log(type);
    },
    render: function() {
      return ce('ul', {
        className: 'user-guide'
      }, this.state.liArr.map((function(_this) {
        return function(guideObj, i) {
          return ce('li', {
            onClick: function() {
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
    getInitialState: function() {
      var userMsg;
      userMsg = this.props.userMsg || {};
      return {
        userMsg: userMsg
      };
    },
    login: function(e) {
      return console.log(e);
    },
    render: function() {
      var userBoard, userMsg, username;
      userMsg = this.state.userMsg;
      username = userMsg.username;
      if (username) {
        userBoard = ce('div', {
          className: 'user-msg'
        }, ce('span', {
          className: 'title'
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
          onClick: this.login
        }, '注册'));
      }
      return ce('div', {
        className: 'user-profile'
      }, userBoard, ce('div', {
        className: 'avatar'
      }));
    }
  }));

}).call(this);
