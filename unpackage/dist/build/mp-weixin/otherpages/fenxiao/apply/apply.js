(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["otherpages/fenxiao/apply/apply","components/uni-popup/uni-popup"],{"0063":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var i={uniPopup:function(){return Promise.resolve().then(n.bind(null,"b9d3"))},loadingCover:function(){return n.e("components/loading-cover/loading-cover").then(n.bind(null,"f410"))}},a=function(){var e=this,t=e.$createElement,n=(e._self._c,e.addonIsExit.fenxiao&&""===e.status&&e.fenXiaoAgreement.agreement.img?e.$util.img(e.fenXiaoAgreement.agreement.img):null),i=e.addonIsExit.fenxiao&&""===e.status&&!e.fenXiaoAgreement.agreement.img?e.$util.img("upload/uniapp/fenxiao/apply/edit.png"):null,a=e.addonIsExit.fenxiao&&""!==e.status?e.$util.img("upload/uniapp/fenxiao/index/no-fenxiao.png"):null;e.$mp.data=Object.assign({},{$root:{g0:n,g1:i,g2:a}})},o=[]},"0f0c":function(e,t,n){"use strict";var i=n("f9c5"),a=n.n(i);a.a},1363:function(e,t,n){"use strict";n.r(t);var i=n("966b"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},3245:function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var a=function(){var e=this,t=e.$createElement;e._self._c},o=[]},4583:function(e,t,n){"use strict";n.r(t);var i=n("0063"),a=n("1363");for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("0f0c"),n("f7a9");var s,u=n("f0c5"),c=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);t["default"]=c.exports},"494c":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={name:"UniPopup",props:{animation:{type:Boolean,default:!0},type:{type:String,default:"center"},custom:{type:Boolean,default:!1},maskClick:{type:Boolean,default:!0},show:{type:Boolean,default:!0}},data:function(){return{ani:"",showPopup:!1,callback:null,isIphoneX:!1}},watch:{show:function(e){e?this.open():this.close()}},created:function(){this.isIphoneX=this.$util.uniappIsIPhoneX()},methods:{clear:function(){},open:function(e){var t=this;e&&(this.callback=e),this.$emit("change",{show:!0}),this.showPopup=!0,this.$nextTick((function(){setTimeout((function(){t.ani="uni-"+t.type}),30)}))},close:function(e,t){var n=this;!this.maskClick&&e||(this.$emit("change",{show:!1}),this.ani="",this.$nextTick((function(){setTimeout((function(){n.showPopup=!1}),300)})),t&&t(),this.callback&&this.callback.call(this))}}};t.default=i},"5a90":function(e,t,n){"use strict";(function(e){n("c5b8");i(n("66fd"));var t=i(n("4583"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"71ea":function(e,t,n){},7788:function(e,t,n){"use strict";var i=n("71ea"),a=n.n(i);a.a},"893f":function(e,t,n){},"966b":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s(n("f48f")),a=(s(n("b9d3")),s(n("fce9"))),o=s(n("faec"));function s(e){return e&&e.__esModule?e:{default:e}}var u={data:function(){return{isChecked:!1,isShow:!0,isIphoneX:!1,sourceMemberInfo:{fenxiao_name:"无"},formData:{fenXiaoName:"",mobile:""},fenXiaoAgreement:{agreement:{},document:{}},isAgreement:!1,back:"",isAbled:!1,status:"",isSub:!1,fenxiaoConfig:{fenxiao_condition:0},basicsConfig:{}}},mixins:[a.default,o.default],onLoad:function(e){e.back&&(this.back=e.back)},onShow:function(){var t=this;this.isIphoneX=this.$util.uniappIsIPhoneX(),this.$langConfig.refresh(),this.addonIsExit.fenxiao?(this.getFenxiaoConfig(),this.getFenxiaoBasicsConfig(),this.getFenxiaoWrods(),this.getAgreement(),this.$langConfig.title(this.fenxiaoWords.fenxiao_name+"申请"),e.getStorageSync("token")?(this.applyStatus(),this.getSourceMemberInfo()):this.$util.redirectTo("/pages/login/login/login",{back:"/otherpages/fenxiao/apply/apply"},"redirectTo")):(this.$util.showToast({title:"分销未开启",mask:!0}),setTimeout((function(){t.$util.redirectTo("/pages/index/index/index",{},"redirectTo")}),1e3))},methods:{toClose:function(){this.$refs.applyPopup.close()},ckeckedRuler:function(){this.isChecked=!this.isChecked},applyStatus:function(){var e=this;this.$api.sendRequest({url:"/fenxiao/api/apply/status",data:{},success:function(t){t.code>=0&&t.data&&(e.status=t.data.status,e.isSub=!1,2==e.status&&e.$util.redirectTo("/otherpages/fenxiao/index/index",{},"redirectTo")),e.$refs.loadingCover.hide()}})},navigateBack:function(){this.$util.goBack()},applyFenXiao:function(){var e=this;this.fenXiaoValidata()&&(!this.isAgreement||this.isChecked?this.isSub||(this.isSub=!0,this.$api.sendRequest({url:"/fenxiao/api/apply/applyfenxiao",data:{fenxiao_name:this.formData.fenXiaoName,mobile:this.formData.mobile},success:function(t){t.code>=0&&t.data?1==e.basicsConfig.is_examine?e.applyStatus():e.$util.redirectTo("/otherpages/fenxiao/index/index",{},"redirectTo"):(e.isSub=!1,e.$util.showToast({title:t.message}))}})):this.$util.showToast({title:"请仔细阅读协议，并勾选"}))},getAgreement:function(){var e=this;this.$api.sendRequest({url:"/fenxiao/api/config/agreement",success:function(t){0===t.code&&(e.fenXiaoAgreement=t.data,"1"===e.fenXiaoAgreement.agreement.is_agreement&&(e.isAgreement=!0))}})},openPopup:function(){this.isAgreement&&this.$refs.applyPopup.open()},closePopup:function(){this.$refs.applyPopup.close()},fenXiaoValidata:function(){var e=[{name:"fenXiaoName",checkType:"required",errorMsg:"请输入"+this.fenxiaoWords.fenxiao_name+"名称"},{name:"mobile",checkType:"required",errorMsg:"请输入手机号"},{name:"mobile",checkType:"phoneno",errorMsg:"请输入正确的手机号"}],t=i.default.check(this.formData,e);return!!t||(this.$util.showToast({title:i.default.error}),!1)},getSourceMemberInfo:function(){var e=this;this.$api.sendRequest({url:"/fenxiao/api/fenxiao/sourceinfo",success:function(t){0==t.code&&t.data&&(e.sourceMemberInfo=t.data)}})},againApply:function(){this.status=""},getFenxiaoConfig:function(){var e=this;this.$api.sendRequest({url:"/fenxiao/api/config/fenxiao",data:{},success:function(t){t.code>=0&&t.data&&(e.fenxiaoConfig=t.data)}})},getFenxiaoBasicsConfig:function(){var e=this;this.$api.sendRequest({url:"/fenxiao/api/config/basics",data:{},success:function(t){t.code>=0&&t.data&&(e.basicsConfig=t.data)}})}},onBackPress:function(e){return"navigateBack"!==e.from&&(this.$util.redirectTo("/pages/member/index/index",{},"reLaunch"),!0)}};t.default=u}).call(this,n("543d")["default"])},b9d3:function(e,t,n){"use strict";n.r(t);var i=n("3245"),a=n("d3dd");for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("7788");var s,u=n("f0c5"),c=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);t["default"]=c.exports},d3dd:function(e,t,n){"use strict";n.r(t);var i=n("494c"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},f7a9:function(e,t,n){"use strict";var i=n("893f"),a=n.n(i);a.a},f9c5:function(e,t,n){}},[["5a90","common/runtime","common/vendor"]]]);