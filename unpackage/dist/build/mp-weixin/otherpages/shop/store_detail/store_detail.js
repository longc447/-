(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["otherpages/shop/store_detail/store_detail"],{6535:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{storeDetail:[],siteId:0,storeId:0}},computed:{markers:function(){var t=[];return this.storeDetail&&this.storeDetail.latitude&&this.storeDetail.longitude?t.push({id:0,latitude:this.storeDetail.latitude,longitude:this.storeDetail.longitude,iconPath:this.$util.img("upload/uniapp/location.png"),width:25,height:25}):t=[],t}},onLoad:function(t){t.store_id&&t.site_id?(this.storeId=t.store_id,this.siteId=t.site_id,this.getData()):this.$util.redirectTo("/otherpages/shop/index/index",{},"redirectTo")},onShow:function(){this.$langConfig.refresh()},methods:{getData:function(){var t=this;this.$api.sendRequest({url:"/api/store/info",data:{site_id:this.siteId,store_id:this.storeId},success:function(e){0==e.code&&e.data?t.storeDetail=e.data:t.$util.showToast({title:e.message}),t.$refs.loadingCover&&t.$refs.loadingCover.hide()},fail:function(e){t.$refs.loadingCover&&t.$refs.loadingCover.hide()}})},call:function(){t.makePhoneCall({phoneNumber:this.storeDetail.telphone})}}};e.default=i}).call(this,i("543d")["default"])},"7a47":function(t,e,i){},c6fa:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return o}));var o={loadingCover:function(){return i.e("components/loading-cover/loading-cover").then(i.bind(null,"f410"))},diyBottomNav:function(){return i.e("components/diy-bottom-nav/diy-bottom-nav").then(i.bind(null,"7ed3"))}},n=function(){var t=this,e=t.$createElement,i=(t._self._c,t.storeDetail.store_image?t.$util.img(t.storeDetail.store_image):null),o=t.storeDetail.latitude&&t.storeDetail.longitude?Number(t.storeDetail.latitude):null,n=t.storeDetail.latitude&&t.storeDetail.longitude?Number(t.storeDetail.longitude):null;t.$mp.data=Object.assign({},{$root:{g0:i,m0:o,m1:n}})},a=[]},d6fb:function(t,e,i){"use strict";var o=i("7a47"),n=i.n(o);n.a},daa0:function(t,e,i){"use strict";i.r(e);var o=i("6535"),n=i.n(o);for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);e["default"]=n.a},e111:function(t,e,i){"use strict";(function(t){i("c5b8");o(i("66fd"));var e=o(i("f9fe"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("543d")["createPage"])},f9fe:function(t,e,i){"use strict";i.r(e);var o=i("c6fa"),n=i("daa0");for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("d6fb");var r,s=i("f0c5"),u=Object(s["a"])(n["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);e["default"]=u.exports}},[["e111","common/runtime","common/vendor"]]]);