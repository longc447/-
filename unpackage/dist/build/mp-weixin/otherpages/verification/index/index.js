(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["otherpages/verification/index/index"],{"3d5b":function(e,t,i){"use strict";i.r(t);var n=i("6fd3"),o=i("906f");for(var r in o)"default"!==r&&function(e){i.d(t,e,(function(){return o[e]}))}(r);i("6832");var c,s=i("f0c5"),u=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],c);t["default"]=u.exports},6832:function(e,t,i){"use strict";var n=i("a885"),o=i.n(n);o.a},"6fd3":function(e,t,i){"use strict";var n;i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return n}));var o=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){return e.$util.redirectTo("/otherpages/verification/list/list")})},r=[]},"7bae":function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(i("faec"));o(i("8cbc"));function o(e){return e&&e.__esModule?e:{default:e}}var r={data:function(){return{operationType:"sweepCode",verify_code:"",isFocus:!1}},mixins:[n.default],onShow:function(){this.$langConfig.refresh(),e.getStorageSync("token")?this.checkIsVerifier():this.$util.redirectTo("/pages/member/index/index",{},"reLaunch")},methods:{focus:function(){this.isFocus=!this.isFocus},scanCode:function(){var t=this;e.scanCode({onlyFromCamera:!0,success:function(e){if("WX_CODE"==e.scanType&&"scanCode:ok"==e.errMsg)try{t.$util.redirectTo("/"+e.path)}catch(i){t.$util.showToast({title:i.message})}else t.$util.showToast({title:e.errorMsg?e.message:"请扫小程序的二维码"})}})},changeOperationType:function(e){this.operationType=e},checkIsVerifier:function(){var e=this;this.$api.sendRequest({url:"/api/verify/checkisverifier",success:function(t){if(-1==t.code&&"TOKEN_ERROR"==t.error_code){e.$util.showToast({title:"登录失败"});var i=getCurrentPages(),n=i[i.length-1].options,o=i[i.length-1].route;return n.back=o,void setTimeout((function(){e.$util.redirectTo("/pages/login/login/login",n)}),1e3)}t.data||(e.$util.showToast({title:"非核销员无此权限"}),setTimeout((function(){e.$util.redirectTo("/pages/member/index/index",{},"reLaunch")}),1e3))}})},confirm:function(){var e=this,t=/[\S]+/;if(!t.test(this.verify_code))return this.$util.showToast({title:"请输入核销码"}),!1;this.$api.sendRequest({url:"/api/verify/verifyInfo",data:{verify_code:this.verify_code},success:function(t){t.code>=0?e.$util.redirectTo("/otherpages/verification/detail/detail",{code:e.verify_code}):e.$util.showToast({title:t.message})}})}}};t.default=r}).call(this,i("543d")["default"])},"906f":function(e,t,i){"use strict";i.r(t);var n=i("7bae"),o=i.n(n);for(var r in n)"default"!==r&&function(e){i.d(t,e,(function(){return n[e]}))}(r);t["default"]=o.a},a885:function(e,t,i){},c537:function(e,t,i){"use strict";(function(e){i("c5b8");n(i("66fd"));var t=n(i("3d5b"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,i("543d")["createPage"])}},[["c537","common/runtime","common/vendor"]]]);