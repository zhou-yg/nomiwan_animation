'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

var LoginAction = _reflux2['default'].createActions({
    login: {
        children: ['success', 'fail']
    },
    register: {
        children: ['success', 'fail']
    }
});

exports['default'] = LoginAction;
module.exports = exports['default'];
