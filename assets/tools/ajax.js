/**
 * Created by zyg on 15/8/11.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

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
        console.log(type);
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

/**
 * 发送ajax请求
 * @param api
 * @param data
 * @param callback
 */
var request = function request(api, data, callback) {

    api = apis[api];
    var url = servers.host() + api;

    _jquery2['default'].get(url, data, callback);
};
//发送动作集合
var apiActions = {
    fn: function fn(data, callback) {
        request.apply(null, arguments);
    }
};
//请求的名字以及地址
var apis = {
    userSignup: '/user/signup',
    userSignin: '/user/signin'
};

//根据请求名，往集合中添加动作

var _loop = function (key) {
    apiActions[key] = function (data, callback) {
        this.fn(key, data, callback);
    };
};

for (var key in apis) {
    _loop(key);
}

exports['default'] = apiActions;
module.exports = exports['default'];
