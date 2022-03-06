(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/ns-chat/ns-chat-goods"],{"17ac":function(n,o,t){},3446:function(n,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var s={name:"ns-chat-goods",props:{skuId:{type:[Number,String]},isCanSend:Boolean},data:function(){return{goodsInfo:{}}},mounted:function(){this.getGoodsInfo()},methods:{getGoodsInfo:function(){var n=this;this.$api.sendRequest({url:"/api/goodssku/detail",data:{sku_id:this.skuId},success:function(o){o.code>=0&&(n.goodsInfo=o.data.goods_sku_detail,n.goodsInfo.goods_image=n.goodsInfo.goods_image.split(",")[0])}})},sendMsg:function(){this.$emit("sendMsg","goods")}}};o.default=s},7575:function(n,o,t){"use strict";t.r(o);var s=t("ce82"),e=t("9831");for(var u in e)"default"!==u&&function(n){t.d(o,n,(function(){return e[n]}))}(u);t("d051");var a,d=t("f0c5"),i=Object(d["a"])(e["default"],s["b"],s["c"],!1,null,null,null,!1,s["a"],a);o["default"]=i.exports},9831:function(n,o,t){"use strict";t.r(o);var s=t("3446"),e=t.n(s);for(var u in s)"default"!==u&&function(n){t.d(o,n,(function(){return s[n]}))}(u);o["default"]=e.a},ce82:function(n,o,t){"use strict";var s;t.d(o,"b",(function(){return e})),t.d(o,"c",(function(){return u})),t.d(o,"a",(function(){return s}));var e=function(){var n=this,o=n.$createElement,t=(n._self._c,n.goodsInfo.goods_name?n.$util.img(n.goodsInfo.sku_image):null);n.$mp.data=Object.assign({},{$root:{g0:t}})},u=[]},d051:function(n,o,t){"use strict";var s=t("17ac"),e=t.n(s);e.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/ns-chat/ns-chat-goods-create-component',
    {
        'components/ns-chat/ns-chat-goods-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("7575"))
        })
    },
    [['components/ns-chat/ns-chat-goods-create-component']]
]);
