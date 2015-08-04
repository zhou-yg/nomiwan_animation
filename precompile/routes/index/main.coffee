express = require('express')
router = express.Router()
avDataHandler = require('../../model/avDataHandler.js')()

components = require('../../components/')


titles =
  newAnimationTitle:'AV'


#获取消息HTML
getMsgBoardComponent = (recommends)->

  return components.rs(components.structure.MsgBoardComponent({
    title:'M'
  }))

#获取推荐HTML
getSysRecommendComponent = (recommends)->

  return components.rs(components.structure.SysRecommendComponent({
    title:'R'
  }))


#获取新番板块的HTML
getNewAnimationComponent = (animations)->

  return components.rs(components.structure.NewAnimationComponent({
    title:'AV',
    animations:animations
  }))


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

  animations = avDataHandler.getAnimation(0,10)
  newAnimationHTML = getNewAnimationComponent(animations)

  sysRecommendHTML = getSysRecommendComponent()

  msgBoardHTML = getMsgBoardComponent()

  return {
    navbar:navbarHTML,
    newAnimation:newAnimationHTML,
    sysRecommend:sysRecommendHTML,
    msgBoard:msgBoardHTML
  }


# GET main.ejs page.
router.get '/', (req, res, next)->
  console.log('main---in')

  viewObj = getViewsData()

  viewObj.title = titles.newAnimationTitle

  res.render('index/main', viewObj )

module.exports = router