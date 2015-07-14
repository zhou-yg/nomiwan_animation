React = require 'react'

cc = React.createClass
ce = React.createElement
rs = React.renderToString

NewAnimationComponent = require './NewAnimationComponent'

module.exports = {
  NewAnimationComponent:(props)->

    return rs NewAnimationComponent props
}