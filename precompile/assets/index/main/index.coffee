React = require 'react'
$ = require 'jquery'

LoginAction = require '../../actions/LoginAction'

NavBarComponent = require '../../../components/structure/NavBarComponent'

do ->
  #渲染头部栏
  NavBarBoxDom = $('.navbar-box')[0]

  React.render(
    NavBarComponent { userMsg:{} }
    NavBarBoxDom
  )

LoginAction.login.listen ->
  console.log 'click on login'