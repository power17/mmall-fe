/*
* @Author: ASUS
* @Date:   2018-01-13 10:30:03
* @Last Modified by:   ASUS
* @Last Modified time: 2018-01-13 11:43:11
*/
/*
* @Author: ASUS
* @Date:   2018-01-08 21:40:50
* @Last Modified by:   ASUS
* @Last Modified time: 2018-01-10 23:12:13
*/
'use strict';
require('./index.css');
require('page/common/nav-simple/index.js');
var _user = require('service/user-service.js');
var _mm = require('util/mm.js');
//表单的错误提示
var formError = {
    show : function(errMsg) {
        $('.error-item').show().find('.err-msg').text(errMsg);
    },
    hide : function() {
        $('.error-item').hide().find('.err-msg').text('errMsg');
    }
};

var page = {
    data : {
        username : '',
        question : '',
        password : '',
        token    : ''
    },
    init: function() {
        this.onload();
        this.bindEvent();
    },
    onload : function() {
        this.loadStepUsername();
    },
    bindEvent: function() {
        var _this = this;
        //输入用户名下一步的点击
        $('#submit-username').click(function() {
            var username = $.trim($('#username').val());
            //用户名存在
            if(username) {
                _user.getQuestion(username, function(res) {
                    _this.data.username = username;
                    _this.data.question = res;
                    _this.loadStepQuestion();
                },function(errMsg) {
                    formError.show(errMsg);
                });
            }
            //用户名不存在
            else{
                formError.show('请输入用户名');
            }
        });
         //输入密码提示问题中按钮点击
        $('#submit-question').click(function() {
            var answer = $.trim($('#answer').val());
            //密码提示问题答案存在
            if(answer) {
                //检查密码提示问题答案
                _user.checkAnswer({
                    username : _this.data.username,
                    question : _this.data.question,
                    answer   : answer
                }, function(res) {
                    _this.data.answer = answer;
                    _this.data.token  = res;
                    _this.loadStepPassword();
                },function(errMsg) {
                    formError.show(errMsg);
                });
            }
            //密码提示问题答案不存在
            else{
                formError.show('请输入用户名');
            }
        });
            //输入新密码按钮点击
        $('#submit-password').click(function() {
            var password = $.trim($('#password').val());
            //新存在
            if(password && password.length >=6) {
                //检查新密码答案
                _user.resetPassword({
                    username : _this.data.username,
                    passwordNew : password,
                    forgetToken   : _this.data.token
                }, function(res) {
                   window.location.href = './result.html?type=pass-reset'
                },function(errMsg) {
                    formError.show(errMsg);
                });
            }
            //密码为空
            else{
                formError.show('请输入不少于6位的新密码');
            }
        });
       
    },
    //加载输入用户名第一步
    loadStepUsername : function() {
        $('.step-username').show();
    },
     //加载输入用户名第一步
    loadStepQuestion : function() {
        //清除错误提示
        formError.hide();
        $('.step-username').hide()
            .siblings('.step-question').show()
                .find('.question').text(this.data.question);
    },
     //加载输入用户名第一步
    loadStepPassword : function() {
        //清除错误提示
        formError.hide();
        //做容器切换
        $('.step-question').hide()
            .siblings('.step-password').show();
        
    },
    

   
 
};

$(function() {
    page.init();
});
