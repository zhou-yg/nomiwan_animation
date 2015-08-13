'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _commonUtils = require('../../common/utils');

var _commonUtils2 = _interopRequireDefault(_commonUtils);

var _actionsLoginAction = require('../../actions/LoginAction');

var _actionsLoginAction2 = _interopRequireDefault(_actionsLoginAction);

var _componentsFunctionsLoginComponent = require('../../../components/functions/LoginComponent');

var _componentsFunctionsLoginComponent2 = _interopRequireDefault(_componentsFunctionsLoginComponent);

var loginType = location.href.indexOf('signin') === -1 ? 'signup' : 'signin';

var mainWindow = (0, _jquery2['default'])('#login-frame')[0];

_react2['default'].render((0, _componentsFunctionsLoginComponent2['default'])({
    formType: loginType
}), mainWindow);
