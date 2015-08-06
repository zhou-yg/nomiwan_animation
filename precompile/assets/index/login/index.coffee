React = require 'react'
$ = require 'jquery'

utils = require '../../common/utils'

LoginAction = require '../../actions/LoginAction'

LoginComponent = require '../../../components/functions/LoginComponent'

do ->

  loginType = utils.getValueFromUrl('type')

  #渲染登录 
  mainWindow = $('#login-frame')[0]

  React.render(
    LoginComponent { formType:loginType }
    mainWindow
  )
