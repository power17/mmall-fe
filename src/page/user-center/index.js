/*
* @Author: ASUS
* @Date:   2018-01-13 12:03:09
* @Last Modified by:   ASUS
* @Last Modified time: 2018-01-14 10:23:15
*/
'use strict';
require('page/common/nav/index.js');
require('page/common/header/index.js');
var navSide = require('page/common/nav-side/index.js');
var _mm = require('util/mm.js');

/*
* @Author: ASUS
* @Date:   2018-01-08 21:40:50
* @Last Modified by:   ASUS
* @Last Modified time: 2018-01-10 23:12:13
*/
'use strict';
require('./index.css');
require('page/common/header/index.js');
require('page/common/header/index.js');
var navSide         = require('page/common/nav-side/index.js');
var _mm             = require('util/mm.js');
var _user           = require('service/user-service.js');
var templateIndex   = require('./index.string');

var page = {
    init: function() {
        this.onload();
    },
    onload: function() {
        //初始化左侧菜单
        navSide.init({
            name : 'user-center'
        });
        //加载用户信息
        this.loadUserInfo();
    },
    loadUserInfo : function() {
        _user.getUserInfo(function(res) {
            var userHtml = _mm.renderHtml(templateIndex, res);
            $('.panel-body').html(userHtml);
        },function(errMsg) {
            _mm.errorTips(errMsg);
        });
    }
   
};

$(function() {
    page.init();
});
