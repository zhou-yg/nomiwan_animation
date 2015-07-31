React = require 'react'

cf = React.createFactory
cc = React.createClass
ce = React.createElement

T = React.PropTypes

module.exports = cf cc {
  componentName:'sys'

  propTypes:
    title:T.string.isRequired

  render:->
    ce 'section',{ className:'sys-recommend' },
      ce 'h2',{},@props.title
      ce 'div',{ className:'transparent-bg' }
}