(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/ns-chat/ns-chat-goods"],{"51a3":function(n,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var s={name:"ns-chat-goods",props:{skuId:{type:[Number,String]},isCanSend:Boolean},data:function(){return{goodsInfo:{}}},mounted:function(){this.getGoodsInfo()},methods:{getGoodsInfo:function(){var n=this;this.$api.sendRequest({url:"/api/goodssku/detail",data:{sku_id:this.skuId},success:function(o){o.code>=0&&(n.goodsInfo=o.data.goods_sku_detail,n.goodsInfo.goods_image=n.goodsInfo.goods_image.split(",")[0])}})},sendMsg:function(){this.$emit("sendMsg","goods")}}};o.default=s},"7f7e":function(n,o,t){"use strict";t.r(o);var s=t("d5cc"),e=t("d066");for(var d in e)"default"!==d&&function(n){t.d(o,n,(function(){return e[n]}))}(d);t("9bdd");var u,a=t("f0c5"),i=Object(a["a"])(e["default"],s["b"],s["c"],!1,null,null,null,!1,s["a"],u);o["default"]=i.exports},"9bdd":function(n,o,t){"use strict";var s=t("bd4b"),e=t.n(s);e.a},bd4b:function(n,o,t){},d066:function(n,o,t){"use strict";t.r(o);var s=t("51a3"),e=t.n(s);for(var d in s)"default"!==d&&function(n){t.d(o,n,(function(){return s[n]}))}(d);o["default"]=e.a},d5cc:function(n,o,t){"use strict";var s;t.d(o,"b",(function(){return e})),t.d(o,"c",(function(){return d})),t.d(o,"a",(function(){return s}));var e=function(){var n=this,o=n.$createElement,t=(n._self._c,n.goodsInfo.goods_name?n.$util.img(n.goodsInfo.sku_image):null);n.$mp.data=Object.assign({},{$root:{g0:t}})},d=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/ns-chat/ns-chat-goods-create-component',
    {
        'components/ns-chat/ns-chat-goods-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("7f7e"))
        })
    },
    [['components/ns-chat/ns-chat-goods-create-component']]
]);
