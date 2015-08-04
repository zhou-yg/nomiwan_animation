express = require('express')
router = express.Router()
avDataHandler = require('../../model/avDataHandler.js')()

components = require('../../components/')


titles = {
    newAnimationTitle:'AV'
}

getCommentsComponent = ->

    commentsEleStr = components.rs(components.structure.CommentsComponent({
        title:'AV',
        comments:[{
            avatar:'http://i0.hdslb.com/52_52/user/46160/4616089/myface.jpg',
            username:'Zero丶one',
            time:'10秒前',
            content:'看评论看评论看评论看评论论'
        },{
            avatar:'http://i0.hdslb.com/52_52/user/46160/4616089/myface.jpg',
            username:'Zero丶one',
            time:'10秒前',
            content:'看评论看评论看评论看评论论评论看评论论评论看评论论评论看评论论评论看评论论'
        }]
    }))

    return commentsEleStr

#获取导航板块的HTML
getNavBarComponent = ->

    navbarStr = components.rs(components.structure.NavBarComponent({
        userMsg:{}
    }))

    return navbarStr

getViewsData = ->
    navbarHTML = getNavBarComponent()

    commentsHTML = getCommentsComponent()

    return {
        navbar:navbarHTML,
        commentList:commentsHTML
    }

#GET episodes.ejs page.
router.get '/episodes', (req, res, next)->
    console.log('aniEpisodes---in')

    viewObj = getViewsData()
    console.log(viewObj)

    viewObj.title = titles.newAnimationTitle

    res.render('episodes/aniEpisodes', viewObj )

module.exports = router