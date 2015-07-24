React = require 'react'

cf = React.createFactory
cc = React.createClass
ce = React.createElement

T = React.PropTypes

#投票的头部
VoteOneHeader = cc {
  propTypes:
    userMsg:T.object.isRequired

  getInitialState:->
    userMsg = @props.userMsg

  render:->
    { avatar,username,time } = @state.userMsg

    ce 'header',{ className:'msg'},
      ce 'img',{ src:avatar }
      ce 'div',{},
        ce 'span',{ className:'username' },username
        ce 'span',{ className:'time' },time
}

#投票的描述
VoteOneDescription = cc {
  propTypes:
    descMsg:T.object.isRequired

  getInitialState:->
    descMsg = @props.descMsg

  render:->
    { description } = @state.descMsg

    ce 'p',{ className:'description' },description
}

#投票的选项
VoteOneSelect = cc {
  propTypes:T.array.isRequired

  getInitialState:->

}

VoteOne = cf cc {

  propTypes:
    voteOneObj:T.object.isRequired

  getInitialState:->
    voteOneObj = @props.voteOneObj

  render:->
    { avatar,username,time,description,selectOption } = @state.voteOneObj

    ce 'li',{ },
      ce VoteOneHeader,{ userMsg:{
        avatar:avatar
        username:username
        time:time
      }}
      ce VoteOneDescription, { descMsg:{
        description:description
      }}
      ce VoteOneSelect,{ selectOption:selectOption }

}



module.exports = cf cc {
  componentName:'vote'

  propTypes:
    title:T.string.isRequired
    comments:T.array.isRequired

  render:->
    comments = @props.comments

    ce 'section',{ className:'vote-board' },
      ce 'h2',{},@props.title
      ce 'div',{ className:'transparent-bg' },
        comments.map (voteOneObj,i)->
          VoteOne key:'voteKeyLi'+i,voteOneObj:voteOneObj
}