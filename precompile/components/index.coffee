React = require 'react'

cc = React.createClass
ce = React.createElement
rs = React.renderToString

#界面
NewAnimationComponent = require './structure/NewAnimationComponent'
CommentsComponent = require './structure/CommentsComponent'
NavBarComponent = require './structure/NavBarComponent'

#功能组件
LoginComponent = require './functions/LoginComponent'

exports = {
  structure:
    NewAnimationComponent:(props)->
      return NewAnimationComponent props

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