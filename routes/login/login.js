var components, express, getLoginComponent, getNavBarComponent, getViewsData, router;

express = require('express');

router = express.Router();

components = require('../../components/');

var env = express().get('env'),
    webpackConfig = require('../../webpack.config');

getLoginComponent = function () {
    return components.rs(components.functions.LoginComponent({
        formType: 'signin'
    }));
};

getNavBarComponent = function () {
    var navbarStr;
    navbarStr = components.rs(components.structure.NavBarComponent({
        userMsg: {
            username: 'zhouyg from server'
        }
    }));
    return navbarStr;
};

getViewsData = function () {
    var loginHTML, navbarHTML;
    navbarHTML = getNavBarComponent();
    loginHTML = getLoginComponent();

    return {
        navbar: navbarHTML,
        login: loginHTML
    };
};

router.get('/login', function (req, res, next) {
    var viewObj;
    console.log('login---in:',env);
    viewObj = getViewsData();

    if(env === 'development'){
        viewObj.isProduction = false;
        viewObj.webpackDevPort = webpackConfig.webpackDevPort
    }
    if(env === 'production'){
        viewObj.isProduction = true;
    }

    return res.render('user/signInUp', viewObj);
});

module.exports = router;

