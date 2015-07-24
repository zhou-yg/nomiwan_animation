(function() {
  var CommentsComponent, NavBarComponent, NewAnimationComponent, React, cc, ce, rs;

  React = require('react');

  cc = React.createClass;

  ce = React.createElement;

  rs = React.renderToString;

  NavBarComponent = require('./structure/NavBarComponent');

  NewAnimationComponent = require('./structure/NewAnimationComponent');

  CommentsComponent = require('./structure/CommentsComponent');

  module.exports = {
    structure: {
      NewAnimationComponent: function(props) {
        return rs(NewAnimationComponent(props));
      },
      CommentsComponent: function(props) {
        return rs(CommentsComponent(props));
      },
      NavBarComponent: function(props) {
        return rs(NavBarComponent(props));
      }
    }
  };

}).call(this);
