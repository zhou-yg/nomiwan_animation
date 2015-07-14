(function() {
  var NewAnimationComponent, React, cc, ce, rs;

  React = require('react');

  cc = React.createClass;

  ce = React.createElement;

  rs = React.renderToString;

  NewAnimationComponent = require('./NewAnimationComponent');

  module.exports = {
    NewAnimationComponent: function(props) {
      return rs(NewAnimationComponent(props));
    }
  };

}).call(this);
