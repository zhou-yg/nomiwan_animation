express = require('express')
router = express.Router()

components = require('../../components/')

#获取导航板块的HTML
getNavBarComponent = ->

    navbarStr = components.rs(components.structure.NavBarComponent({
        userMsg:{
            username:'zhouyg from server'
        }
    }))

    return navbarStr


getViewsData = ->
    navbarHTML = getNavBarComponent()

    return {
        navbar:navbarHTML
    }
# GET login.ejs page.
router.get '/login', (req, res, next)->
    console.log('login---in')

    viewObj = getViewsData()

    res.render('login/login', viewObj )

module.exports = router