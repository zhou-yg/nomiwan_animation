express = require('express')
router = express.Router()

components = require('../../components/')

#获取登录
getLoginComponent = ->
    return components.rs components.functions.LoginComponent {
        formType:'register'
    }

#获取导航板块的HTML
getNavBarComponent = ->

    navbarStr = components.rs(components.structure.NavBarComponent({
        userMsg:{
            username:'zhouyg from server'
        }
    }))

    return navbarStr
#
getViewsData = ->
    navbarHTML = getNavBarComponent()

    loginHTML = getLoginComponent()

    return {
        navbar:navbarHTML
        login:loginHTML
    }
# GET login.ejs page.
router.get '/login', (req, res, next)->
    console.log('login---in')

    viewObj = getViewsData()

    res.render('login/login', viewObj )

module.exports = router