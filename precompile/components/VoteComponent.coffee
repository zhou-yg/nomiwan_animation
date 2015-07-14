React = require 'react'

cf = React.createFactory
cc = React.createClass
ce = React.createElement

T = React.PropTypes


CommentList = cf cc {

  propTypes:
    comments:T.array.isRequired

  render:->
    comments = @props.comments

    
}



module.exports = cf cc {
  componentName:'vote'

  propTypes:
    title:T.string.isRequired
    comments:T.array.isRequired

  render:->

    ce 'section',{ className:'vote-board' },
      ce 'h2',{},@props.title
      ce 'div',{ className:'transparent-bg' },
      CommentList { comments:@props.comments }
}