(function() {
  var CommentsComponent, LoginComponent, NavBarComponent, NewAnimationComponent, React, cc, ce, exports, rs;

  React = require('react');

  cc = React.createClass;

  ce = React.createElement;

  rs = React.renderToString;

  NewAnimationComponent = require('./structure/NewAnimationComponent');

  CommentsComponent = require('./structure/CommentsComponent');

  NavBarComponent = require('./structure/NavBarComponent');

  LoginComponent = require('./functions/LoginComponent');

  exports = {
    structure: {
      NewAnimationComponent: function(props) {
        return NewAnimationComponent(props);
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
