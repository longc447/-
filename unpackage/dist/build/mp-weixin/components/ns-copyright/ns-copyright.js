(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/ns-copyright/ns-copyright"],{4953:function(t,n,o){"use strict";o.r(n);var e=o("7af8"),i=o("b355");for(var u in i)"default"!==u&&function(t){o.d(n,t,(function(){return i[t]}))}(u);o("eeff");var c,f=o("f0c5"),a=Object(f["a"])(i["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],c);n["default"]=a.exports},"7af8":function(t,n,o){"use strict";var e;o.d(n,"b",(function(){return i})),o.d(n,"c",(function(){return u})),o.d(n,"a",(function(){return e}));var i=function(){var t=this,n=t.$createElement,o=(t._self._c,t.bottom_info&&t.bottom_info.logo?t.$util.img(t.bottom_info.logo):null),e=t.bottom_info?null:t.$util.img("upload/uniapp/logo_copy.png");t.$mp.data=Object.assign({},{$root:{g0:o,g1:e}})},u=[]},ac6f:function(t,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{bottom_info:{}}},created:function(){this.getAdvList()},methods:{getAdvList:function(){var t=this;this.$api.sendRequest({url:"/api/config/copyright",success:function(n){0==n.code&&n.data&&(t.bottom_info=n.data)}})},link:function(t){t&&this.$util.redirectTo("/otherpages/webview/webview",{link:encodeURIComponent(t)})}}};n.default=e},b355:function(t,n,o){"use strict";o.r(n);var e=o("ac6f"),i=o.n(e);for(var u in e)"default"!==u&&function(t){o.d(n,t,(function(){return e[t]}))}(u);n["default"]=i.a},eeff:function(t,n,o){"use strict";var e=o("ffc5"),i=o.n(e);i.a},ffc5:function(t,n,o){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/ns-copyright/ns-copyright-create-component',
    {
        'components/ns-copyright/ns-copyright-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("4953"))
        })
    },
    [['components/ns-copyright/ns-copyright-create-component']]
]);
