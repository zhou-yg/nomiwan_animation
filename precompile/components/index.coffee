React = require 'react'

cc = React.createClass
ce = React.createElement
rs = React.renderToString

#界面
#主界面
NewAnimationComponent = require './structure/NewAnimationComponent'
SysRecommendComponent = require './structure/SysRecommendComponent'
MsgBoardComponent = require './structure/MsgBoardComponent'

#剧集界面
CommentsComponent = require './structure/CommentsComponent'
NavBarComponent = require './structure/NavBarComponent'

#功能组件
LoginComponent = require './functions/LoginComponent'

exports = {
  structure:
    NewAnimationComponent:(props)->
      return NewAnimationComponent props

    SysRecommendComponent:(props)->
      return SysRecommendComponent props

    MsgBoardComponent:(props)->
      return MsgBoardComponent props

    #------
    CommentsComponent:(props)->
      return CommentsComponent props

    NavBarComponent:(props)->
      return NavBarComponent props

  functions:
    LoginComponent:(props)->
      return LoginComponent props


  rs:(component)->
    return rs component
}

module.exports = exports