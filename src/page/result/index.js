/*
* @Author: ASUS
* @Date:   2018-01-08 21:33:29
* @Last Modified by:   ASUS
* @Last Modified time: 2018-01-08 22:10:54
*/
'use strict';
require('./index.css');
require('page/common/nav-simple/index.js');
var _mm = require('util/mm.js');

$(function() {
    var type = _mm.getUrlParam('type') || 'default';
    $element = $('.' + type + '-success');
    //显示对应的提示元素
    $element.show();
    
})