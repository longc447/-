(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["otherpages/member/cancellation/cancellation"],{3317:function(e,t,n){"use strict";var c;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return c}));var a=function(){var e=this,t=e.$createElement;e._self._c},i=[]},"620d":function(e,t,n){"use strict";(function(e){n("c5b8");c(n("66fd"));var t=c(n("ca22"));function c(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},7028:function(e,t,n){"use strict";var c=n("83f8"),a=n.n(c);a.a},"83f8":function(e,t,n){},"9ff3":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=a(n("faec"));function a(e){return e&&e.__esModule?e:{default:e}}var i={components:{},data:function(){return{agreement:{},isSelect:!1}},mixins:[c.default],onLoad:function(t){this.$langConfig.refresh(),t.back&&(this.back=t.back),e.getStorageSync("token")?this.getCancelAgreement():this.$util.redirectTo("/pages/login/login/login")},methods:{getCancelAgreement:function(){var e=this;this.$api.sendRequest({url:"/membercancel/api/membercancel/agreement",success:function(t){t.code>=0&&(e.agreement=t.data)}})},changeSelect:function(){this.isSelect=1!=this.isSelect},next:function(){this.isSelect?this.$util.redirectTo("/otherpages/member/assets/assets"):this.$util.showToast({title:"请先勾选同意协议"})}}};t.default=i}).call(this,n("543d")["default"])},ca22:function(e,t,n){"use strict";n.r(t);var c=n("3317"),a=n("efe1");for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);n("7028");var r,u=n("f0c5"),o=Object(u["a"])(a["default"],c["b"],c["c"],!1,null,"3df9799d",null,!1,c["a"],r);t["default"]=o.exports},efe1:function(e,t,n){"use strict";n.r(t);var c=n("9ff3"),a=n.n(c);for(var i in c)"default"!==i&&function(e){n.d(t,e,(function(){return c[e]}))}(i);t["default"]=a.a}},[["620d","common/runtime","common/vendor"]]]);