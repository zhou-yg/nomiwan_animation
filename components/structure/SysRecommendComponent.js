'use strict';

(function () {
  var React, T, cc, ce, cf;

  React = require('react');

  cf = React.createFactory;

  cc = React.createClass;

  ce = React.createElement;

  T = React.PropTypes;

  module.exports = cf(cc({
    componentName: 'sys',
    propTypes: {
      title: T.string.isRequired
    },
    render: function render() {
      return ce('section', {
        className: 'sys-recommend'
      }, ce('h2', {}, this.props.title), ce('div', {
        className: 'transparent-bg'
      }));
    }
  }));
}).call(undefined);