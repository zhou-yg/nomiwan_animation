webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	(function() {
	  var all;

	  all = __webpack_require__(158);

	}).call(this);


/***/ },

/***/ 158:
/***/ function(module, exports, __webpack_require__) {

	(function() {
	  var CommentsComponent, LoginComponent, NavBarComponent, NewAnimationComponent, React, cc, ce, exports, rs;

	  React = __webpack_require__(2);

	  cc = React.createClass;

	  ce = React.createElement;

	  rs = React.renderToString;

	  NewAnimationComponent = __webpack_require__(159);

	  CommentsComponent = __webpack_require__(161);

	  NavBarComponent = __webpack_require__(162);

	  LoginComponent = __webpack_require__(1);

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


/***/ },

/***/ 159:
/***/ function(module, exports, __webpack_require__) {

	(function() {
	  var AnimationOne, React, T, cc, ce, cf, helper;

	  React = __webpack_require__(2);

	  helper = __webpack_require__(160);

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


/***/ },

/***/ 160:
/***/ function(module, exports) {

	(function() {
	  module.exports = {
	    getRainbowColor: function(i) {
	      var colors, colorsLen;
	      colors = ['red', 'orange', 'blue', 'cyan', 'purple'];
	      colorsLen = colors.length;
	      if (i !== void 0) {
	        return colors[i % colorsLen];
	      } else {
	        this.i = 0;
	        return function() {
	          if (i >= 5) {
	            i = 0;
	          }
	          return colors[i++ % colorsLen];
	        };
	      }
	    }
	  };

	}).call(this);


/***/ },

/***/ 161:
/***/ function(module, exports, __webpack_require__) {

	(function() {
	  var CommentOne, React, T, cc, ce, cf, helper;

	  React = __webpack_require__(2);

	  helper = __webpack_require__(160);

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


/***/ },

/***/ 162:
/***/ function(module, exports, __webpack_require__) {

	(function() {
	  var NavUserProfile, React, T, cc, ce, cf;

	  React = __webpack_require__(2);

	  NavUserProfile = __webpack_require__(163);

	  cf = React.createFactory;

	  cc = React.createClass;

	  ce = React.createElement;

	  T = React.PropTypes;

	  module.exports = cf(cc({
	    getInitialState: function() {
	      return {
	        title: {
	          name: '茵蒂克丝',
	          logo: 'images/index2.jpg'
	        }
	      };
	    },
	    render: function() {
	      var title;
	      title = this.state.title;
	      return ce('header', {
	        id: 'topNavbar'
	      }, ce('h1', {}, ce('img', {
	        src: title.logo,
	        alt: 'logo',
	        height: '100%'
	      }), title.name), NavUserProfile({
	        userMsg: {}
	      }));
	    }
	  }));

	}).call(this);


/***/ },

/***/ 163:
/***/ function(module, exports, __webpack_require__) {

	(function() {
	  var React, T, UserGuide, cc, ce, cf;

	  React = __webpack_require__(2);

	  cf = React.createFactory;

	  cc = React.createClass;

	  ce = React.createElement;

	  T = React.PropTypes;

	  React = __webpack_require__(2);

	  cf = React.createFactory;

	  cc = React.createClass;

	  ce = React.createElement;

	  T = React.PropTypes;

	  UserGuide = cc({
	    getInitialState: function() {
	      return {
	        liArr: [
	          {
	            name: '消息',
	            type: 'message'
	          }, {
	            name: '历史',
	            type: 'history'
	          }
	        ],
	        username: 'zhouyg'
	      };
	    },
	    clickOnGuide: function(type) {
	      return console.log(type);
	    },
	    render: function() {
	      return ce('ul', {
	        className: 'user-guide'
	      }, this.state.liArr.map((function(_this) {
	        return function(guideObj, i) {
	          return ce('li', {
	            onClick: function() {
	              return _this.clickOnGuide(guideObj.type);
	            },
	            key: 'guideLi' + i
	          }, guideObj.name);
	        };
	      })(this)));
	    }
	  });

	  module.exports = cf(cc({
	    propTypes: {
	      userMsg: T.object.isRequired
	    },
	    getInitialState: function() {
	      var userMsg;
	      userMsg = this.props.userMsg || {};
	      return {
	        userMsg: userMsg
	      };
	    },
	    login: function(e) {
	      return console.log(e);
	    },
	    render: function() {
	      var userBoard, userMsg, username;
	      userMsg = this.state.userMsg;
	      username = userMsg.username;
	      if (username) {
	        userBoard = ce('div', {
	          className: 'user-msg'
	        }, ce('span', {
	          className: 'title'
	        }, username), ce(UserGuide, {}));
	      } else {
	        userBoard = ce('div', {
	          className: 'user-msg'
	        }, ce('span', {
	          className: 'title',
	          type: 'login',
	          onClick: this.login
	        }, '登录'), ce('span', {
	          className: 'title',
	          type: 'register',
	          onClick: this.login
	        }, '注册'));
	      }
	      return ce('div', {
	        className: 'user-profile'
	      }, userBoard, ce('div', {
	        className: 'avatar'
	      }));
	    }
	  }));

	}).call(this);


/***/ }

});