(function() {
  var CommentOne, React, T, cc, ce, cf, helper;

  React = require('react');

  helper = require('./helper');

  cf = React.createFactory;

  cc = React.createClass;

  ce = React.createElement;

  T = React.PropTypes;

  CommentOne = cf(cc({
    propTypes: {
      commentObj: T.object.isRequired
    },
    render: function() {
      var commentOjb;
      commentOjb = this.props.commentObj;
      return ce('li', {
        key: this.props.key
      }, ce('a', {
        href: 'http://nma:1400',
        target: '_blank'
      }, ce('div', {
        className: 'avatar'
      }, ce('img', {
        src: commentOjb.avatar
      }))), ce('div', {
        className: 'comment-header'
      }, ce('a', {
        href: 'http://nma:1400',
        target: '_blank'
      }, commentOjb.username), ce('span', {
        className: 'time'
      }, commentOjb.time)), ce('div', {
        className: 'content'
      }, commentOjb.content));
    }
  }));

  module.exports = cf(cc({
    displayName: 'commentList',
    propTypes: {
      title: T.string.isRequired,
      comments: T.array.isRequired
    },
    render: function() {
      return ce('ul', {
        className: 'comments'
      }, this.props.comments.map(function(commentObj, i) {
        return CommentOne({
          key: 'commentLi' + i,
          commentObj: commentObj
        });
      }));
    }
  }));

}).call(this);
