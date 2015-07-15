React = require 'react'

cc = React.createClass
ce = React.createElement
rs = React.renderToString

NewAnimationComponent = require './NewAnimationComponent'
CommentsComponent = require './CommentsComponent'

module.exports = {
  NewAnimationComponent:(props)->
    return rs NewAnimationComponent props

  CommentsComponent:(props)->
    return rs CommentsComponent props
}