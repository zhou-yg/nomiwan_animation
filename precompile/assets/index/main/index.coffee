React = require 'react'

NavBarComponent = require '../../../precompile/components/structure/NavBarComponent'

NewAnimationComponent= require '../../../precompile/components/structure/NewAnimationComponent'

SysRecommendComponent = require '../../../precompile/components/structure/SysRecommendComponent'

MsgBoardComponent = require '../../../precompile/components/structure/MsgBoardComponent'


NavBarBoxDom = document.querySelector('.navbar-box')

console.log 'a'

React.render(
  NavBarComponent { userMsg:{} }
  NavBarBoxDom
)