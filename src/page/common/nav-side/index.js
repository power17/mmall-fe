/*
* @Author: ASUS
* @Date:   2018-01-07 11:34:12
* @Last Modified by:   ASUS
* @Last Modified time: 2018-01-08 21:24:13
*/

'use strict';
require('./index.css');
var _mm           = require('util/mm.js');
var templateIndex = require('./index.string');
 //侧边导航
 var navSide = {
    option : {
        name: '',
        navList : [
        {name : 'user-center',  desc : '个人中心',  href: './user-center.html'},
        {name : 'order-list' ,  desc : '我的订单',  href: './user-center.html'},
        {name : 'pass-update',  desc : '修改密码',  href: './user-center.html'},
        {name : 'about'      ,  desc : '关于MMall', href: './user-center.html'}
        ]
    },
    init: function(option) {
        $.extend(this.option, option);
        this.renderNav();
    },
    // 渲染导航菜单
    renderNav : function() {
        //计算active数据
        for(var i = 0, iLength = this.option.navList.length; i < iLength; i ++) {
            if(this.option.navList[i].name === this.option.name) {
                this.option.navList[i].isActive = true;
            }
        }
        //渲染list数据
        var navHtml = _mm.renderHtml(templateIndex, {
            navList: this.option.navList
        });
        //把html放入容器
        $('.nav-side').html(navHtml);
    }
 };

 module.exports = navSide;