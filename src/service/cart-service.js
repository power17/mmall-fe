/*
* @Author: ASUS
* @Date:   2018-01-07 08:04:09
* @Last Modified by:   ASUS
* @Last Modified time: 2018-01-07 08:06:31
*/
/*
* @Author: ASUS
* @Date:   2018-01-07 07:47:01
* @Last Modified by:   ASUS
* @Last Modified time: 2018-01-07 08:00:51
*/
'use strict';
var _mm = require('util/mm.js');

var _cart = {
    //获取购物车数量
    getCartCount: function(resolve, reject) {
        _mm.request({
            url     : _mm.getServerUrl('/cart/get_cart_product_count.do'),
            success : resolve,
            error   : reject 
        });
    }
};

module.exports = _cart;