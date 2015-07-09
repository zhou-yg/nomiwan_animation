React = require 'react'

cc = React.createClass
ce = React.createElement

T = React.PropTypes

helper =
  rainbowColor:->
    i = 0
    colors = ['red','orange','yellow','green','blue','cyan','purple']
    colorsLen = colors.length;
    return ->
      if i>=7
        i = 0
      return colors[i++/colorsLen]

AnimationOne = React.createFactory ce {
  displayName:'新番单元'

  propTypes:
    animations:T.array

  mixins:[helper]

  render:->
    animationLiArr = []

    ce 'ul',{},
      ce 'li',{ }
}


module.exports = React.createFactory ce {

  
}