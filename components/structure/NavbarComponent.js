(function() {
  var React, T, UserGuide, cc, ce, cf;

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
      return ce('div', {
        className: 'user-msg'
      }, ce('span', {
        className: 'username'
      }, this.state.username), ce('ul', {
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
      })(this))));
    }
  });

  module.exports = cf(cc({
    getInitialState: function() {
      return {
        title: {
          name: '茵蒂克丝',
          logo: 'images/index2.jpg'
        }
      };
    },
    render: function() {
      var title;
      title = this.state.title;
      return ce('header', {
        id: 'topNavbar'
      }, ce('h1', {}, ce('img', {
        src: title.logo,
        alt: 'logo',
        height: '100%'
      }), title.name), ce('div', {
        className: 'user-profile'
      }, ce(UserGuide), ce('div', {
        className: 'avatar'
      })));
    }
  }));

}).call(this);
