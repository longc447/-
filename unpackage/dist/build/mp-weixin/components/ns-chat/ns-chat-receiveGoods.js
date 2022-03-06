(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/ns-chat/ns-chat-receiveGoods"],{3427:function(t,o,n){"use strict";var e;n.d(o,"b",(function(){return s})),n.d(o,"c",(function(){return u})),n.d(o,"a",(function(){return e}));var s=function(){var t=this,o=t.$createElement,n=(t._self._c,t.$util.img(t.goodsINfo.goods_image));t.$mp.data=Object.assign({},{$root:{g0:n}})},u=[]},"6df8":function(t,o,n){"use strict";n.r(o);var e=n("3427"),s=n("8e9a");for(var u in s)"default"!==u&&function(t){n.d(o,t,(function(){return s[t]}))}(u);n("acdb");var a,i=n("f0c5"),c=Object(i["a"])(s["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],a);o["default"]=c.exports},"8e9a":function(t,o,n){"use strict";n.r(o);var e=n("c723"),s=n.n(e);for(var u in e)"default"!==u&&function(t){n.d(o,t,(function(){return e[t]}))}(u);o["default"]=s.a},acdb:function(t,o,n){"use strict";var e=n("d6c3"),s=n.n(e);s.a},c723:function(t,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e={name:"ns-chat-receiveGoods",props:{skuId:{type:[Number,String]}},data:function(){return{goodsINfo:{}}},mounted:function(){this.getInfo()},methods:{getInfo:function(){var t=this;console.log(this.skuId,"this.orderId"),this.$api.sendRequest({url:"/api/goodssku/detail",data:{sku_id:this.skuId},success:function(o){console.log(o,"res"),o.code>=0&&(t.goodsINfo=o.data.goods_sku_detail)}})},go_shop:function(){this.$util.redirectTo("/pages/goods/detail/detail?sku_id="+this.skuId)}}};o.default=e},d6c3:function(t,o,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/ns-chat/ns-chat-receiveGoods-create-component',
    {
        'components/ns-chat/ns-chat-receiveGoods-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("6df8"))
        })
    },
    [['components/ns-chat/ns-chat-receiveGoods-create-component']]
]);
