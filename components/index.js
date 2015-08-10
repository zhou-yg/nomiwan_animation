'use strict';

(function () {
  var _CommentsComponent, _LoginComponent, _MsgBoardComponent, _NavBarComponent, _NewAnimationComponent, React, _SysRecommendComponent, cc, ce, exports, _rs;

  React = require('react');

  cc = React.createClass;

  ce = React.createElement;

  _rs = React.renderToString;

  _NewAnimationComponent = require('./structure/NewAnimationComponent');

  _SysRecommendComponent = require('./structure/SysRecommendComponent');

  _MsgBoardComponent = require('./structure/MsgBoardComponent');

  _CommentsComponent = require('./structure/CommentsComponent');

  _NavBarComponent = require('./structure/NavBarComponent');

  _LoginComponent = require('./functions/LoginComponent');

  exports = {
    structure: {
      NewAnimationComponent: function NewAnimationComponent(props) {
        return _NewAnimationComponent(props);
      },
      SysRecommendComponent: function SysRecommendComponent(props) {
        return _SysRecommendComponent(props);
      },
      MsgBoardComponent: function MsgBoardComponent(props) {
        return _MsgBoardComponent(props);
      },
      CommentsComponent: function CommentsComponent(props) {
        return _CommentsComponent(props);
      },
      NavBarComponent: function NavBarComponent(props) {
        return _NavBarComponent(props);
      }
    },
    functions: {
      LoginComponent: function LoginComponent(props) {
        return _LoginComponent(props);
      }
    },
    rs: function rs(component) {
      return _rs(component);
    }
  };

  module.exports = exports;
}).call(undefined);
