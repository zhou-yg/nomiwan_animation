(function() {
  var CommentsComponent, NewAnimationComponent, React, cc, ce, rs;

  React = require('react');

  cc = React.createClass;

  ce = React.createElement;

  rs = React.renderToString;

  NewAnimationComponent = require('./NewAnimationComponent');

  CommentsComponent = require('./CommentsComponent');

  module.exports = {
    NewAnimationComponent: function(props) {
      return rs(NewAnimationComponent(props));
    },
    CommentsComponent: function(props) {
      return rs(CommentsComponent(props));
    }
  };

}).call(this);
