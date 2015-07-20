(function() {
  var React, T, VoteOne, VoteOneDescription, VoteOneHeader, VoteOneSelect, cc, ce, cf;

  React = require('react');

  cf = React.createFactory;

  cc = React.createClass;

  ce = React.createElement;

  T = React.PropTypes;

  VoteOneHeader = cc({
    propTypes: {
      userMsg: T.object.isRequired
    },
    getInitialState: function() {
      var userMsg;
      return userMsg = this.props.userMsg;
    },
    render: function() {
      var avatar, ref, time, username;
      ref = this.state.userMsg, avatar = ref.avatar, username = ref.username, time = ref.time;
      return ce('header', {
        className: 'msg'
      }, ce('img', {
        src: avatar
      }), ce('div', {}, ce('span', {
        className: 'username'
      }, username), ce('span', {
        className: 'time'
      }, time)));
    }
  });

  VoteOneDescription = cc({
    propTypes: {
      descMsg: T.object.isRequired
    },
    getInitialState: function() {
      var descMsg;
      return descMsg = this.props.descMsg;
    },
    render: function() {
      var description;
      description = this.state.descMsg.description;
      return ce('p', {
        className: 'description'
      }, description);
    }
  });

  VoteOneSelect = cc({
    propTypes: T.array.isRequired,
    getInitialState: function() {}
  });

  VoteOne = cf(cc({
    propTypes: {
      voteOneObj: T.object.isRequired
    },
    getInitialState: function() {
      var voteOneObj;
      return voteOneObj = this.props.voteOneObj;
    },
    render: function() {
      var avatar, description, ref, selectOption, time, username;
      ref = this.state.voteOneObj, avatar = ref.avatar, username = ref.username, time = ref.time, description = ref.description, selectOption = ref.selectOption;
      return ce('li', {}, ce(VoteOneHeader, {
        userMsg: {
          avatar: avatar,
          username: username,
          time: time
        }
      }), ce(VoteOneDescription, {
        descMsg: {
          description: description
        }
      }), ce(VoteOneSelect, {
        selectOption: selectOption
      }));
    }
  }));

  module.exports = cf(cc({
    componentName: 'vote',
    propTypes: {
      title: T.string.isRequired,
      comments: T.array.isRequired
    },
    render: function() {
      var comments;
      comments = this.props.comments;
      return ce('section', {
        className: 'vote-board'
      }, ce('h2', {}, this.props.title), ce('div', {
        className: 'transparent-bg'
      }, comments.map(function(voteOneObj, i) {
        return VoteOne({
          key: 'voteKeyLi' + i,
          voteOneObj: voteOneObj
        });
      })));
    }
  }));

}).call(this);
