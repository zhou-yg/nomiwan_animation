/**
 * Created by zyg on 15/7/11.
 */
var express = require('express');
var router = express.Router();
var avDataHandler = require('../../model/avDataHandler.js')();

var components = require('../../components/');


var titles = {
    newAnimationTitle:'AV'
};

var getCommentsComponent = function(){


    var commentsEleStr = components.rs(components.struct.CommentsComponent({
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
    }));

    return commentsEleStr
};

var getViewsData = function(){

    var commentsHTML = getCommentsComponent();

    return {
        commentList:commentsHTML
    }
};

/* GET episodes.ejs page. */
router.get('/episodes', function(req, res, next) {
    var viewObj = getViewsData();
    console.log(viewObj);

    viewObj.title = titles.newAnimationTitle;

    res.render('episodes/aniEpisodes', viewObj );
});

module.exports = router;