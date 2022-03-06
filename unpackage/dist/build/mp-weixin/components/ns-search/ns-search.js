(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/ns-search/ns-search"],{"26df1":function(t,e,n){"use strict";n.r(e);var r=n("8862"),u=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e["default"]=u.a},"60db":function(t,e,n){"use strict";n.r(e);var r=n("a7e9"),u=n("26df1");for(var c in u)"default"!==c&&function(t){n.d(e,t,(function(){return u[t]}))}(c);n("cff5");var a,f=n("f0c5"),s=Object(f["a"])(u["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);e["default"]=s.exports},8862:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"ns-search",props:{value:{type:Object,default:function(){return{}}},siteId:{type:[Number,String],default:function(){return 0}}},data:function(){return{searchText:""}},methods:{search:function(){this.$util.redirectTo("/otherpages/goods/search/search",{siteId:this.siteId})}}};e.default=r},a7e9:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return r}));var u=function(){var t=this,e=t.$createElement;t._self._c},c=[]},ce0b:function(t,e,n){},cff5:function(t,e,n){"use strict";var r=n("ce0b"),u=n.n(r);u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/ns-search/ns-search-create-component',
    {
        'components/ns-search/ns-search-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("60db"))
        })
    },
    [['components/ns-search/ns-search-create-component']]
]);
