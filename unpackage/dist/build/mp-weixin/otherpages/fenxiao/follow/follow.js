(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["otherpages/fenxiao/follow/follow"],{"036e":function(e,t,i){"use strict";(function(e){i("c5b8");o(i("66fd"));var t=o(i("feab"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,i("543d")["createPage"])},"0ada":function(e,t,i){"use strict";var o=i("d663"),a=i.n(o);a.a},3213:function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return n})),i.d(t,"a",(function(){return o}));var o={nsEmpty:function(){return i.e("components/ns-empty/ns-empty").then(i.bind(null,"467b"))}},a=function(){var e=this,t=e.$createElement,i=(e._self._c,e.addonIsExit.fenxiao?e.$util.img("upload/uniapp/fenxiao/fx_adv.png"):null),o=e.addonIsExit.fenxiao?e.__map(e.goodsList,(function(t,i){var o=e.__get_orig(t),a=0!=e.goodsList.length&&t.sku_image?e.$util.img(t.sku_image,{size:"mid"}):null,n=0==e.goodsList.length||t.sku_image?null:e.$util.getDefaultImage();return{$orig:o,g1:a,g2:n}})):null;e.$mp.data=Object.assign({},{$root:{g0:i,l0:o}})},n=[]},"712f":function(e,t,i){"use strict";i.r(t);var o=i("c03a"),a=i.n(o);for(var n in o)"default"!==n&&function(e){i.d(t,e,(function(){return o[e]}))}(n);t["default"]=a.a},c03a:function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(i("fce9")),a=s(i("ef1d")),n=s(i("faec"));function s(e){return e&&e.__esModule?e:{default:e}}var u={data:function(){return{goodsList:[],emptyShow:!1,searchText:"",account:0,memberImg:"",memberName:""}},mixins:[o.default,a.default,n.default],onShow:function(){var t=this;this.$langConfig.refresh(),this.addonIsExit.fenxiao?(this.getFenxiaoWrods(),e.setNavigationBarTitle({title:this.fenxiaoWords.concept+"商品"}),e.getStorageSync("token")?this.getMemberInfo():this.$util.redirectTo("/pages/login/login/login",{back:"/otherpages/fenxiao/goods/goods"},"redirectTo")):(this.$util.showToast({title:"分销未开启",mask:!0}),setTimeout((function(){t.$util.redirectTo("/pages/index/index/index",{},"redirectTo")}),1e3))},methods:{getData:function(e){var t=this;this.emptyShow=!1,1==e.num&&(this.withdrawList=[]),this.$api.sendRequest({url:"/fenxiao/api/goodscollect/page",data:{page_size:e.size,page:e.num,keyword:this.searchText.trim()},success:function(i){t.emptyShow=!0;var o=[],a=i.message;0==i.code&&i.data&&i.data.list?o=i.data.list:t.$util.showToast({title:a}),e.endSuccess(o.length),1==e.num&&(t.goodsList=[]),t.goodsList=t.goodsList.concat(o),t.$refs.loadingCover&&t.$refs.loadingCover.hide()},fail:function(i){e.endErr(),t.$refs.loadingCover&&t.$refs.loadingCover.hide()}})},search:function(){this.$refs.mescroll.refresh()},getMemberInfo:function(){var e=this;this.$api.sendRequest({url:"/fenxiao/api/fenxiao/detail",data:{},success:function(t){0==t.code&&t.data&&(e.account=t.data.account,t.data.headimg?e.memberImg=t.data.headimg:e.memberImg=e.$util.getDefaultImage().default_headimg,e.memberName=t.data.fenxiao_name)}})},imgError:function(e){this.goodsList[e].sku_image=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()},goTixian:function(){this.$util.redirectTo("/otherpages/fenxiao/withdraw_apply/withdraw_apply")},toGoodsDetail:function(e){this.$util.redirectTo("/pages/goods/detail/detail",{sku_id:e})},delFollowTip:function(t,i){var o=this;e.showActionSheet({itemList:["取消关注"],success:function(e){0==e.tapIndex&&o.delFollow(t,i)},fail:function(e){}})},delFollow:function(e,t){var i=this;this.$api.sendRequest({url:"/fenxiao/api/goodscollect/delete",data:{collect_id:e},success:function(e){var o="";o=0==e.code?"取消成功":e.message,i.$util.showToast({title:o});var a=i.goodsList;a.splice(t,1),i.goodsList=a}})}}};t.default=u}).call(this,i("543d")["default"])},d663:function(e,t,i){},feab:function(e,t,i){"use strict";i.r(t);var o=i("3213"),a=i("712f");for(var n in a)"default"!==n&&function(e){i.d(t,e,(function(){return a[e]}))}(n);i("0ada");var s,u=i("f0c5"),d=Object(u["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],s);t["default"]=d.exports}},[["036e","common/runtime","common/vendor"]]]);