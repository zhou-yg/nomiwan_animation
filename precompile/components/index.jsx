(function() {
  var CommentsComponent, LoginComponent, MsgBoardComponent, NavBarComponent, NewAnimationComponent, React, SysRecommendComponent, cc, ce, exports, rs;

  React = require('react');

  cc = React.createClass;

  ce = React.createElement;

  rs = React.renderToString;

  NewAnimationComponent = require('./structure/NewAnimationComponent');

  SysRecommendComponent = require('./structure/SysRecommendComponent');

  MsgBoardComponent = require('./structure/MsgBoardComponent');

  CommentsComponent = require('./structure/CommentsComponent');

  NavBarComponent = require('./structure/NavBarComponent');

  LoginComponent = require('./functions/LoginComponent');

  exports = {
    structure: {
      NewAnimationComponent: function(props) {
        return NewAnimationComponent(props);
      },
      SysRecommendComponent: function(props) {
        return SysRecommendComponent(props);
      },
      MsgBoardComponent: function(props) {
        return MsgBoardComponent(props);
      },
      CommentsComponent: function(props) {
        return CommentsComponent(props);
      },
      NavBarComponent: function(props) {
        return NavBarComponent(props);
      }
    },
    functions: {
      LoginComponent: function(props) {
        return LoginComponent(props);
      }
    },
    rs: function(component) {
      return rs(component);
    }
  };

  module.exports = exports;

}).call(this);
