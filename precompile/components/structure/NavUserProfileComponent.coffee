React = require 'react'

LoginComponent = require '../functions/LoginComponent'

cf = React.createFactory
cc = React.createClass
ce = React.createElement

T = React.PropTypes

UserGuide = cc {
  getInitialState:->
    {
    liArr:[{
      name:'消息'
      type:'message'
    },{
      name:'历史'
      type:'history'
    }]
    username:'zhouyg'
    }

  clickOnGuide:(type)->
    console.log type

  render: ->
    ce 'ul', {className: 'user-guide'},
      @state.liArr.map (guideObj, i)=>
        ce 'li', {
          onClick: =>
            @clickOnGuide(guideObj.type)

          key: 'guideLi' + i
        }, guideObj.name
}

module.exports = cf cc {

  propTypes:
    userMsg:T.object.isRequired

  getInitialState:->
    userMsg = @props.userMsg or {}

    {
      userMsg:userMsg,
    }

  clickOnUsername:(e)->
    console.log 'click on username'
  login:(e)->
    console.log e

  render:->
    userMsg = @state.userMsg
    username = userMsg.username

    if username
      userBoard = ce 'div',{ className:'user-msg' },
                    ce 'span',{ className:'title',onClick:@clickOnUsername },username
                    ce UserGuide, {}
    else
      userBoard = ce 'div',{ className:'user-msg' },
                    ce 'span',{ className:'title',type:'login',onClick:@login },'登录'
                    ce 'span',{ className:'title',type:'register',onClick:@login },'注册'

    ce 'div',{ className:'user-profile' },
      userBoard
      ce 'div',{ className:'avatar' }
}
