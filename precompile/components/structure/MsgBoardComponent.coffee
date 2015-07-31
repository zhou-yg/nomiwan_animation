React = require 'react'

cf = React.createFactory
cc = React.createClass
ce = React.createElement

T = React.PropTypes


module.exports =  cf cc {
  componentName:'msgBoard'

  propTypes:
    title:T.string.isRequired

  render:->
    ce 'section',{ className:'msg-board' },
      ce 'h2',{},@props.title
      ce 'div',{ className:'transparent-bg' }
}