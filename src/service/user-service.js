/*
* @Author: ASUS
* @Date:   2018-01-07 07:47:01
* @Last Modified by:   ASUS
* @Last Modified time: 2018-01-14 11:54:09
*/
'use strict';
var _mm = require('util/mm.js');

var _user = {
    //用户登录
    login: function(userInfo,resolve, reject) {
        _mm.request({
            url     : _mm.getServerUrl('/user/login.do'),
            data    : userInfo,
            method  : 'POST',
            success : resolve,
            error   : reject 
        });
    },
    //检查用户名
    checkUsername: function(username,resolve, reject) {
        _mm.request({
            url     : _mm.getServerUrl('/user/check_valid.do'),
            data    : {
                type    : 'username',
                str     : username
            },
            method  : 'POST',
            success : resolve,
            error   : reject 
        });
    },
    register: function(userInfo,resolve, reject) {
        _mm.request({
            url     : _mm.getServerUrl('/user/register.do'),
            data    : userInfo,
            method  : 'POST',
            success : resolve,
            error   : reject 
        });
    },
    checkLogin: function(resolve, reject) {
        _mm.request({
            url     : _mm.getServerUrl('/user/get_user_info.do'),
            method  : 'POST',
            success : resolve,
            error   : reject 
        });
    },
    //获取用户密码提示问题
    getQuestion: function(username,resolve, reject) {
        _mm.request({
            url     : _mm.getServerUrl('/user/forget_get_question.do'),
            data    : {
                username : username
            },
            method  : 'POST',
            success : resolve,
            error   : reject 
        });
    },
    //检查密码问题提示答案
    checkAnswer: function(userInfo,resolve, reject) {
        _mm.request({
            url     : _mm.getServerUrl('/user/forget_check_answer.do'),
            data    : userInfo,
            method  : 'POST',
            success : resolve,
            error   : reject 
        });
    },
      //重置密码
    resetPassword: function(userInfo,resolve, reject) {
        _mm.request({
            url     : _mm.getServerUrl('/user/forget_reset_password.do'),
            data    : userInfo,
            method  : 'POST',
            success : resolve,
            error   : reject 
        });
    },
    getUserInfo: function(resolve, reject) {
        _mm.request({
            url     : _mm.getServerUrl('/user/get_information.do'),
            method  : 'POST',
            success : resolve,
            error   : reject 
        });
    },
       //更新个人信息
    updateUserInfo: function(userInfo,resolve, reject) {
        _mm.request({
            url     : _mm.getServerUrl('/user/update_information.do'),
            data    : userInfo,
            method  : 'POST',
            success : resolve,
            error   : reject 
        });
    },
     // 登录状态下更新密码
    updatePassword : function(userInfo, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/user/reset_password.do'),
            data    : userInfo,
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    },
    //登出
    logout: function(resolve, reject) {
        _mm.request({
            url     : _mm.getServerUrl('/user/logout.do'),
            method  : 'POST',
            success : resolve,
            error   : reject 
        });
    }
};

module.exports = _user;