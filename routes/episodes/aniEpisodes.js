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

var getNewAnimationComponent = function(animations){

    newAnimationEleStr = components.NewAnimationComponents({
        title:'AV',
        animations:animations
    });

    return newAnimationEleStr
};

var getViewsData = function(){
    var animations = avDataHandler.getAnimation(0,10);

    var newAnimationHTML = getNewAnimationComponent(animations);

    return {
        newAnimation:newAnimationHTML
    }
};

/* GET episodes.ejs page. */
router.get('/episodes', function(req, res, next) {
    var viewObj = {};

    viewObj.title = titles.newAnimationTitle;

    res.render('episodes/aniEpisodes', viewObj );
});

module.exports = router;