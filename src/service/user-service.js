/*
* @Author: ASUS
* @Date:   2018-01-07 07:47:01
* @Last Modified by:   ASUS
* @Last Modified time: 2018-01-07 08:00:51
*/
'use strict';
var _mm = require('util/mm.js');

var _user = {
       checkLogin: function(resolve, reject) {
        _mm.request({
            url     : _mm.getServerUrl('/user/get_user_info.do'),
            method  : 'POST',
            success : resolve,
            error   : reject 
        });
    },
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