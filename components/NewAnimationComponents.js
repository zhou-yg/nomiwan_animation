(function() {
  var AnimationOne, React, T, cc, ce, helper;

  React = require('react');

  cc = React.createClass;

  ce = React.createElement;

  T = React.PropTypes;

  helper = {
    rainbowColor: function() {
      var colors, colorsLen, i;
      i = 0;
      colors = ['red', 'orange', 'yellow', 'green', 'blue', 'cyan', 'purple'];
      colorsLen = colors.length;
      return function() {
        if (i >= 7) {
          i = 0;
        }
        return colors[i++ / colorsLen];
      };
    }
  };

  AnimationOne = React.createFactory(ce({
    displayName: '新番单元',
    propTypes: {
      animations: T.array
    },
    mixins: [helper],
    getInitialState: function() {
      return {
        liType: 'large',
        rainbowColors: ['red', 'orange', 'yellow', 'blue', 'cyan', 'purple']
      };
    },
    render: function() {
      var animations, liArr, liTypes, rainbowColors;
      animations = this.props.animations;
      liTypes = this.state.liType;
      rainbowColors = this.state.rainbowColors;
      liArr = animations.map(function(animationObj, i) {
        var finalClassName;
        finalClassName = liTypes + ' ' + rainbowColors[i % 7];
        return ce('li', {
          className: finalClassName
        }, ce('img', {
          style: {
            backgroundImage: 'url(' + animationObj.image + ')'
          }
        }), ce('div', {
          className: 'message'
        }, ce('h3', {}, animationObj.name), ce('p', {}, '更新&nbsp第', ce('span', {
          className: 'episode'
        }, animationObj.len), '话')));
      });
      return ce('ul', {}, liArr);
    }
  }));

  module.exports = React.createFactory(ce({
    displayName: 'AV',
    render: function() {
      return ce('section', {
        className: 'new-animation'
      }, ce('h2', {}, this.displayName), ce('div', {
        className: 'transparent-bg'
      }, NewAnimationList({
        animations: this.props.animations
      })));
    }
  }));

}).call(this);
