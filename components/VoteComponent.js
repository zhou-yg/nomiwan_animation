(function() {
  var CommentList, React, T, cc, ce, cf;

  React = require('react');

  cf = React.createFactory;

  cc = React.createClass;

  ce = React.createElement;

  T = React.PropTypes;

  CommentList = cf(cc({
    propTypes: {
      comments: T.array.isRequired
    },
    render: function() {
      var comments;
      return comments = this.props.comments;
    }
  }));

  module.exports = cf(cc({
    componentName: 'vote',
    propTypes: {
      title: T.string.isRequired,
      comments: T.array.isRequired
    },
    render: function() {
      return ce('section', {
        className: 'vote-board'
      }, ce('h2', {}, this.props.title), ce('div', {
        className: 'transparent-bg'
      }, CommentList({
        comments: this.props.comments
      })));
    }
  }));

}).call(this);
