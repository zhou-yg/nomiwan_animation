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

  getInitialState:->
    {
      liType:'large'
      rainbowColors:['red','orange','yellow','blue','cyan','purple']
    }

  render:->
    animations = @props.animations
    liTypes = @state.liType
    rainbowColors = @state.rainbowColors

    liArr = animations.map (animationObj,i)->
      finalClassName = liTypes + ' ' + rainbowColors[i%7]

      ce 'li',{ className:finalClassName },
        ce 'img',{ style:{
          backgroundImage:'url('+animationObj.image+')'
        }}
        ce 'div',{ className:'message' },
          ce 'h3',{},animationObj.name
          ce 'p',{},'更新&nbsp第',
            ce 'span',{ className:'episode' },animationObj.len
            '话'

    ce 'ul',{},
      liArr
}


module.exports = React.createFactory ce {
  displayName:'AV'

  render:->
    ce 'section',{ className:'new-animation' },
      ce 'h2',{},@displayName
      ce 'div',{ className:'transparent-bg' },
        NewAnimationList { animations:@props.animations }
}