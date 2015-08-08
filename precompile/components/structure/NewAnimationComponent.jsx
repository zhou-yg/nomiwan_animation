(function() {
  var AnimationOne, React, T, cc, ce, cf, helper;

  React = require('react');

  helper = require('./helper');

  cf = React.createFactory;

  cc = React.createClass;

  ce = React.createElement;

  T = React.PropTypes;

  AnimationOne = cf(cc({
    displayName: '新番列表',
    mixins: [helper],
    getInitialState: function() {
      return {
        liType: 'large'
      };
    },
    render: function() {
      var animations, liArr, liTypes;
      animations = this.props.animations;
      liTypes = this.state.liType;
      liArr = animations.map((function(_this) {
        return function(animationObj, i) {
          var current, finalClassName, updateTo;
          finalClassName = liTypes + ' ' + _this.getRainbowColor(i);
          current = animationObj.len;
          if (current > 0) {
            updateTo = ce('p', {}, '更新 第', ce('span', {
              className: 'episode'
            }, animationObj.len), '话');
          } else {
            updateTo = ce('p', {}, '暂无');
          }
          return ce('li', {
            key: 'newAnimationLi' + i,
            className: finalClassName
          }, ce('a', {
            href: '/episodes?name=' + animationObj.name,
            'target': '_blank'
          }, ce('img', {
            style: {
              backgroundImage: 'url(' + animationObj.image + ')'
            }
          }), ce('div', {
            className: 'message'
          }, ce('h3', {}, animationObj.name), updateTo)));
        };
      })(this));
      return ce('div', {
        className: 'animation-list'
      }, ce('ul', {}, liArr));
    }
  }));

  module.exports = cf(cc({
    displayName: 'AV',
    propTypes: {
      title: T.string.isRequired,
      animations: T.array.isRequired
    },
    render: function() {
      return ce('section', {
        className: 'new-animation'
      }, ce('h2', {}, this.props.title), ce('div', {
        className: 'transparent-bg'
      }), AnimationOne({
        animations: this.props.animations
      }));
    }
  }));

}).call(this);
