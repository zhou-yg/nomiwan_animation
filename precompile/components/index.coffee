React = require 'react'

cc = React.createClass
ce = React.createElement
rs = React.renderToString

NavBarComponent = require './structure/NavBarComponent'

NewAnimationComponent = require './structure/NewAnimationComponent'
CommentsComponent = require './structure/CommentsComponent'

module.exports = {
  structure:{
    NewAnimationComponent:(props)->
      return rs NewAnimationComponent props

    CommentsComponent:(props)->
      return rs CommentsComponent props

    NavBarComponent:(props)->
      return rs NavBarComponent props
  }
}