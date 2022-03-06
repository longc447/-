(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/ns-chat/ns-chat-order"],{"1ada":function(n,t,e){"use strict";var o;e.d(t,"b",(function(){return r})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return o}));var r=function(){var n=this,t=n.$createElement,e=(n._self._c,n.orderInfo.order_goods?n.$util.img(n.orderInfo.order_goods?n.orderInfo.order_goods[0].sku_image:""):null);n.$mp.data=Object.assign({},{$root:{g0:e}})},a=[]},"44c4":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={name:"ns-chat-order",props:{orderId:{type:[Number,String]},isCanSend:Boolean},data:function(){return{orderInfo:{}}},mounted:function(){this.getGoodsInfo()},methods:{getGoodsInfo:function(){var n=this;this.$api.sendRequest({url:"/api/order/detail",data:{order_id:this.orderId},success:function(t){t.code>=0&&(n.orderInfo=t.data)}})},sendMsg:function(){this.$emit("sendMsg","order")}}};t.default=o},4911:function(n,t,e){"use strict";e.r(t);var o=e("44c4"),r=e.n(o);for(var a in o)"default"!==a&&function(n){e.d(t,n,(function(){return o[n]}))}(a);t["default"]=r.a},9056:function(n,t,e){"use strict";var o=e("bb5b"),r=e.n(o);r.a},"9be5":function(n,t,e){"use strict";e.r(t);var o=e("1ada"),r=e("4911");for(var a in r)"default"!==a&&function(n){e.d(t,n,(function(){return r[n]}))}(a);e("9056");var d,u=e("f0c5"),s=Object(u["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],d);t["default"]=s.exports},bb5b:function(n,t,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/ns-chat/ns-chat-order-create-component',
    {
        'components/ns-chat/ns-chat-order-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("9be5"))
        })
    },
    [['components/ns-chat/ns-chat-order-create-component']]
]);
