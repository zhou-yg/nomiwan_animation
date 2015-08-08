import React from 'react';

import $ from 'jquery';

import LoginAction from '../../actions/LoginAction';

import NavBarComponent from '../../../components/structure/NavBarComponent';

var NavBarBoxDom = $('.navbar-box')[0];

React.render(NavBarComponent({
    userMsg: {}
}), NavBarBoxDom);

LoginAction.login.listen(function () {
    return console.log('click on login');
});