(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["otherpages/member/address/address"],{"0b05":function(e,t,s){"use strict";s.r(t);var r=s("434d"),a=s.n(r);for(var n in r)"default"!==n&&function(e){s.d(t,e,(function(){return r[e]}))}(n);t["default"]=a.a},"1b5c":function(e,t,s){"use strict";s.d(t,"b",(function(){return a})),s.d(t,"c",(function(){return n})),s.d(t,"a",(function(){return r}));var r={nsEmpty:function(){return s.e("components/ns-empty/ns-empty").then(s.bind(null,"467b"))},loadingCover:function(){return s.e("components/loading-cover/loading-cover").then(s.bind(null,"f410"))}},a=function(){var e=this,t=e.$createElement,s=(e._self._c,e.$lang("defaultAddress")),r=e.$lang("modify"),a=0!==e.addressList.length?e.__map(e.addressList,(function(t,s){var r=e.__get_orig(t),a=1!=t.is_default?e.$lang("del"):null;return{$orig:r,m2:a}})):null,n=0!==e.addressList.length&&1!=e.local?e.$lang("getAddress"):null,i=0!==e.addressList.length?e.$lang("newAddAddress"):null,d=0==e.addressList.length&&e.showEmpty&&1!=e.local?e.$lang("getAddress"):null,o=0==e.addressList.length&&e.showEmpty?e.$lang("newAddAddress"):null;e.$mp.data=Object.assign({},{$root:{m0:s,m1:r,l0:a,m3:n,m4:i,m5:d,m6:o}})},n=[]},"2e6f":function(e,t,s){"use strict";var r=s("e79c"),a=s.n(r);a.a},"434d":function(e,t,s){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(s("faec"));s("8cbc");function a(e){return e&&e.__esModule?e:{default:e}}var n={data:function(){return{addressList:[],back:"",redirect:"redirectTo",isIndex:!1,showEmpty:!1,local:0}},mixins:[r.default],onLoad:function(t){t.back&&(this.back=t.back,e.setStorageSync("addressBack",t.back)),t.redirect&&(this.redirect=t.redirect),t.local&&(this.local=t.local),e.getStorageSync("addressBack")&&(this.back=e.getStorageSync("addressBack"))},onShow:function(){this.$langConfig.refresh(),this.$refs.mescroll&&this.$refs.mescroll.refresh(),e.removeStorageSync("addressInfo")},methods:{getListData:function(e){var t=this;this.showEmpty=!1,this.$api.sendRequest({url:"/api/memberaddress/page",data:{page:e.num,page_size:e.size},success:function(s){t.showEmpty=!0;var r=[],a=s.message;0==s.code&&s.data?r=s.data.list:t.$util.showToast({title:a}),e.endSuccess(r.length),1==e.num&&(t.addressList=[]),t.addressList=t.addressList.concat(r),t.$refs.loadingCover&&t.$refs.loadingCover.hide()},fail:function(s){e.endErr(),t.$refs.loadingCover&&t.$refs.loadingCover.hide()}})},addAddress:function(e,t){var s={};"edit"==e&&(s.id=t),this.back&&(s.back=this.back),this.$util.redirectTo("/otherpages/member/address_edit/address_edit",s)},deleteAddress:function(t,s){var r=this;e.showModal({title:"操作提示",content:"确定要删除该地址吗？",success:function(e){if(e.confirm){if(1==s)return void r.$util.showToast({title:"默认地址，不能删除"});r.$api.sendRequest({url:"/api/memberaddress/delete",data:{id:t},success:function(e){0==e.code?r.$util.showToast({title:"删除成功"}):r.$util.showToast({title:"删除失败"}),r.$refs.mescroll.refresh()},fail:function(e){mescroll.endErr()}})}}})},setDefault:function(t){var s=this;this.$api.sendRequest({url:"/api/memberaddress/setdefault",data:{id:t},success:function(t){if(t.data>0)if(s.$refs.mescroll.refresh(),""!=s.back){for(var r=!0,a=getCurrentPages().reverse(),n=0;n<a.length;n++)if(-1!=s.back.indexOf(a[n].route)){r=!1,e.navigateBack({delta:n});break}r&&s.$util.redirectTo(s.back,{},"redirectTo")}else s.$refs.mescroll.refresh(),s.$util.showToast({title:"修改默认地址成功"});else s.$util.showToast({title:t.message})}})},getChooseAddress:function(){var t=this;e.chooseAddress({success:function(e){"chooseAddress:ok"==e.errMsg?t.saveAddress({name:e.userName,mobile:e.telNumber,province:e.provinceName,city:e.cityName,district:e.countyName,address:e.detailInfo,full_address:e.provinceName+"-"+e.cityName+"-"+e.countyName}):t.$util.showToast({title:e.errMsg})}})},saveAddress:function(e){var t=this;this.$api.sendRequest({url:"/api/memberaddress/addthreeparties",data:e,success:function(e){e.code>=0?t.$refs.mescroll.refresh():t.$util.showToast({title:e.message})}})}}};t.default=n}).call(this,s("543d")["default"])},"989c":function(e,t,s){"use strict";s.r(t);var r=s("1b5c"),a=s("0b05");for(var n in a)"default"!==n&&function(e){s.d(t,e,(function(){return a[e]}))}(n);s("2e6f");var i,d=s("f0c5"),o=Object(d["a"])(a["default"],r["b"],r["c"],!1,null,"2af461f5",null,!1,r["a"],i);t["default"]=o.exports},a138:function(e,t,s){"use strict";(function(e){s("c5b8");r(s("66fd"));var t=r(s("989c"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,s("543d")["createPage"])},e79c:function(e,t,s){}},[["a138","common/runtime","common/vendor"]]]);