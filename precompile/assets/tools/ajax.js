/**
 * Created by zyg on 15/8/11.
 */
let path = require('path');

import env from '../common/env'
import $ from 'jquery'

let servers = {
  host:function(type = 'test'){
      //根据参数获取主机地址
      console.log(type);
      let server = this[type],
          host = '';
      if(type){
          host = server.host;
      }
      return host;
  },
  test:{
      host:'http://localhost:1337'
  },
  online:{
      host:''
  }
};

/**
 * 发送ajax请求
 * @param api
 * @param data
 * @param callback
 */
let request = function(api,data,callback){

    api = apis[api];
    let url = path.resolve(servers.host(),api);

    $.get(url,data,callback);
};
//发送动作集合
let apiActions = {
    fn(data,callback){
        request.apply(null,arguments);
    }
};
//请求的名字以及地址
let apis = {
    userRegister:'/user/register',
    userLogin:'/user/login'
};

//根据请求名，往集合中添加动作
for(let key in apis){
    apiActions[key] = function(data,callback){
        this.fn(key,data,callback);
    }
}

export default apiActions