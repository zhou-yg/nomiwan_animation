React = require 'react'
helper = require './helper'

cf = React.createFactory
cc = React.createClass
ce = React.createElement

T = React.PropTypes


AnimationOne = cf cc {
  displayName:'新番列表'

  mixins:[helper]

  getInitialState:->
    {
      liType:'large'
    }

  render:->
    animations = @props.animations
    liTypes = @state.liType

    liArr = animations.map (animationObj,i)=>
      finalClassName = liTypes + ' ' + @getRainbowColor i

      current = animationObj.len

      if current > 0
        updateTo = ce 'p',{},'更新 第',
                          ce 'span',{ className:'episode' },animationObj.len
                          '话'
      else
        updateTo = ce 'p',{},'暂无',

      ce 'li',{ key:'newAnimationLi'+i,className:finalClassName },
        ce 'a',{ href:'/episodes?name='+animationObj.name },
          ce 'img',{ style:{
            backgroundImage:'url('+animationObj.image+')'
          }}
          ce 'div',{ className:'message' },
            ce 'h3',{},animationObj.name
              updateTo

    ce 'div',{ className:'animation-list' },
      ce 'ul',{},
        liArr
}

module.exports = cf cc {
  displayName:'AV'

  propTypes:
    title:T.string.isRequired
    animations:T.array.isRequired

  render:->
    ce 'section',{ className:'new-animation' },
      ce 'h2',{},@props.title
      ce 'div',{ className:'transparent-bg' }
      AnimationOne { animations:@props.animations }
}