/*
* @Author: ASUS
* @Date:   2018-01-13 11:57:15
* @Last Modified by:   ASUS
* @Last Modified time: 2018-01-14 11:44:16
*/
/*
* @Author: ASUS
* @Date:   2018-01-13 12:03:09
* @Last Modified by:   ASUS
* @Last Modified time: 2018-01-14 10:23:15
*/
'use strict';
require('page/common/nav/index.js');
require('page/common/header/index.js');
require('./index.css');


var navSide         = require('page/common/nav-side/index.js');
var _mm             = require('util/mm.js');
var _user           = require('service/user-service.js');
var templateIndex   = require('./index.string');

var page = {
    init: function() {
        this.onload();
        this.bindEvent();
    },
    onload: function() {
        //初始化左侧菜单
        navSide.init({
            name : 'user-center'
        });
        //加载用户信息
        this.loadUserInfo();
    },
    bindEvent: function() {
        var _this = this;
        //点击提交按钮后的动作
        $(document).on('click', '.btn-submit', function() {
            var userInfo = {
                phone : $.trim($('#phone').val()),
                email : $.trim($('#email').val()),
                question : $.trim($('#question').val()),
                answer : $.trim($('#answer').val())
            },
            validateResult = _this.validateForm(userInfo);
             if(validateResult.status) {
            //更改用户信息
            _user.updateUserInfo(userInfo, function(res,msg) {
                _mm.successTips(msg);
                window.location.href = './user-center.html';
            },function(errMsg) {
               _mm.errorTips(errMsg); 
            });
        }
        else{
            _mm.errorTips(validateResult.msg);
        }
        });
        
       
    },
    loadUserInfo : function() {
        _user.getUserInfo(function(res) {
            var userHtml = _mm.renderHtml(templateIndex, res);
            $('.panel-body').html(userHtml);
        },function(errMsg) {
            _mm.errorTips(errMsg);
        });
    },
    //验证字段信息
    validateForm : function(formData) {
        var result = {
            satus : false,
            msg   : ''
        };
         //验证手机号
         if(!_mm.validate(formData.phone, 'phone')) {
            result.msg = '手机号格式不正确';
            return result;
        }
         //验证邮箱格式是否正确
         if(!_mm.validate(formData.email, 'email')) {
            result.msg = '邮箱格式不正确';
            return result;
        }
          //验证问题
         if(!_mm.validate(formData.question, 'require')) {
            console.log(formData.question);
            result.msg = '密码提示问题不能为空';
            return result;
        }
          //验证手密码提示答案
         if(!_mm.validate(formData.answer, 'require')) {
            result.msg = '密码提示问题问题答案不能为空';
            return result;
        }
        
        result.status = true;
        result.msg = '通过验证';
        return result;

    }
    };
   

$(function() {
    page.init();
});
