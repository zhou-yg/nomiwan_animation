var components, express, getLoginComponent, getNavBarComponent, getViewsData, router;

express = require('express');

router = express.Router();

components = require('../../components/');

getLoginComponent = function (formType) {
    return components.rs(components.functions.LoginComponent({
        formType: formType
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

getViewsData = function (formType) {
    var loginHTML, navbarHTML;
    navbarHTML = getNavBarComponent();
    loginHTML = getLoginComponent(formType);

    return {
        navbar: navbarHTML,
        login: loginHTML
    };
};

router.get('/signup', function (req, res, next) {
    var viewObj = viewObj = getViewsData(req.path.replace('/',''));
    return res.render('user/signInUp', viewObj);
});
router.get('/signin', function (req, res, next) {
    var viewObj = viewObj = getViewsData(req.path.replace('/',''));
    return res.render('user/signInUp', viewObj);
});

module.exports = router;

