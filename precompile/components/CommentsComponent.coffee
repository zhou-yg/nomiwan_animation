React = require 'react'
helper = require './helper'

cf = React.createFactory
cc = React.createClass
ce = React.createElement

T = React.PropTypes

#一条评论
CommentOne = cf cc {

  propTypes:
    commentObj:T.object.isRequired

  render:->
    commentOjb = @props.commentObj

    ce 'li',{key:@props.key},
      ce 'a',{ href:'http://nma:1400',target:'_blank' },
        ce 'div',{ className:'avatar' },
          ce 'img',{ src:commentOjb.avatar }
      ce 'div',{ className:'comment-header' },
        ce 'a',{ href:'http://nma:1400',target:'_blank' },commentOjb.username
        ce 'span',{ className:'time' },commentOjb.time
      ce 'div',{ className:'content'},commentOjb.content
}

#评论列表
module.exports = cf cc {
  displayName:'commentList'

  propTypes:
    title:T.string.isRequired
    comments:T.array.isRequired

  render:->

    ce 'ul', {className: 'comments'},
      @props.comments.map (commentObj,i)->
        CommentOne key:'commentLi'+i,commentObj:commentObj
}