/**
 * Created by zyg on 15/8/11.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.request = request;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _commonEnv = require('../common/env');

var _commonEnv2 = _interopRequireDefault(_commonEnv);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var path = require('path');

var servers = {
    host: function host() {
        var type = arguments.length <= 0 || arguments[0] === undefined ? 'test' : arguments[0];

        //根据参数获取主机地址
        var server = this[type],
            host = '';
        if (type) {
            host = server.host;
        }
        return host;
    },
    test: {
        host: 'http://localhost:1337'
    },
    online: {
        host: ''
    }
};

var apis = {
    userRegister: '/user/register',
    userLogin: '/user/login'
};

function request(api, data, callback) {

    api = apis[api];
    var url = path.resolve(servers.host(), api);

    _jquery2['default'].get(url, data, callback);
}
