'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _actionsLoginAction = require('../../actions/LoginAction');

var _actionsLoginAction2 = _interopRequireDefault(_actionsLoginAction);

var _componentsStructureNavBarComponent = require('../../../components/structure/NavBarComponent');

var _componentsStructureNavBarComponent2 = _interopRequireDefault(_componentsStructureNavBarComponent);

var NavBarBoxDom = (0, _jquery2['default'])('.navbar-box')[0];

_react2['default'].render((0, _componentsStructureNavBarComponent2['default'])({
    userMsg: {}
}), NavBarBoxDom);

_actionsLoginAction2['default'].login.listen(function () {
    return console.log('click on login');
});