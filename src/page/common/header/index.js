/*
* @Author: ASUS
* @Date:   2018-01-07 08:25:17
* @Last Modified by:   ASUS
* @Last Modified time: 2018-01-07 08:59:36
*/
'use strict';
require('./index.css');
var _mm     = require('util/mm.js');

//通用页面头部
var header = {
    init: function() {
        this.bindEvent();    
    },
    onload: function() {
        var keyword = _mm.getUrlParam('keyword');
        //keyword存在，则回填输入框
        if(keyword){
            $('#search-input').val(keyword);
        }
    },
    bindEvent: function() {
        var _this = this;
        //点击搜索按钮以后，做搜索提交
        $('#search-btn').click(function() {
            
            _this.searchSubmit();

        });
        //输入回车后，做搜索提交
        $('#search-input').keyup(function(e) {
            //13为回车键
            if(e.keyCode ===13){
                _this.searchSubmit();
            }
        });
    },
    //搜索提交
    searchSubmit: function() {
        var keyword = $.trim($('#search-input').val());
        //如果提交的时候有keyword，正常跳转到list页
        if(keyword) {
            window.location.href = './list.html?keyword=' + keyword;
        } else{
           //如果keyword为空，直接返回首页
            _mm.goHome();  
        }
    
    }

};


header.init();