(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["otherpages/fenxiao/order/order"],{3715:function(e,t,n){},"39cd":function(e,t,n){"use strict";n.r(t);var i=n("bf32"),o=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=o.a},a521:function(e,t,n){"use strict";(function(e){n("c5b8");i(n("66fd"));var t=i(n("a983"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},a983:function(e,t,n){"use strict";n.r(t);var i=n("aedb"),o=n("39cd");for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);n("eb2c");var a,s=n("f0c5"),u=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],a);t["default"]=u.exports},aedb:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}));var i={nsEmpty:function(){return n.e("components/ns-empty/ns-empty").then(n.bind(null,"467b"))},loadingCover:function(){return n.e("components/loading-cover/loading-cover").then(n.bind(null,"f410"))}},o=function(){var e=this,t=e.$createElement,n=(e._self._c,e.$lang("common.currencySymbol")),i=e.$lang("common.currencySymbol"),o=e.$lang("common.currencySymbol"),r=e.addonIsExit.fenxiao?e.__map(e.orderList,(function(t,n){var i=e.__get_orig(t),o=e.$util.img(t.sku_image,{size:"mid"}),r=e.$util.timeStampTurnTime(t.create_time);return{$orig:i,g0:o,g1:r}})):null;e.$mp.data=Object.assign({},{$root:{m0:n,m1:i,m2:o,l0:r}})},r=[]},bf32:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n("fce9")),o=r(n("faec"));function r(e){return e&&e.__esModule?e:{default:e}}var a={data:function(){return{category:[{id:0,name:"全部",number:2},{id:1,name:"待结算",number:0},{id:2,name:"已结算",number:0},{id:3,name:"已退款",number:0}],selectId:0,orderList:[],emptyShow:!1}},components:{},mixins:[i.default,o.default],onShow:function(){var t=this;this.$langConfig.refresh(),this.addonIsExit.fenxiao?(this.getFenxiaoWrods(),this.$langConfig.title(this.fenxiaoWords.concept+"订单"),e.getStorageSync("token")||this.$util.redirectTo("/pages/login/login/login",{back:"/otherpages/fenxiao/order/order"},"redirectTo")):(this.$util.showToast({title:"分销未开启",mask:!0}),setTimeout((function(){t.$util.redirectTo("/pages/index/index/index",{},"redirectTo")}),1e3))},methods:{getData:function(e){var t=this;this.emptyShow=!1,1==e.num&&(this.orderList=[]),this.$api.sendRequest({url:"/fenxiao/api/order/page",data:{page:e.num,page_size:e.size,is_settlement:this.selectId},success:function(n){t.emptyShow=!0;var i=[],o=n.message;0==n.code&&n.data&&n.data.list?i=n.data.list:t.$util.showToast({title:o}),e.endSuccess(i.length),1==e.num&&(t.orderList=[]),t.orderList=t.orderList.concat(i),t.$refs.loadingCover&&t.$refs.loadingCover.hide()},fail:function(n){e.endErr(),t.$refs.loadingCover&&t.$refs.loadingCover.hide()}})},selectCate:function(e){this.selectId=e,this.$refs.mescroll.refresh()},toDetail:function(e){this.$util.redirectTo("/otherpages/fenxiao/order_detail/order_detail",{id:e})},imgError:function(e){this.orderList[e].sku_image=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()}}};t.default=a}).call(this,n("543d")["default"])},eb2c:function(e,t,n){"use strict";var i=n("3715"),o=n.n(i);o.a}},[["a521","common/runtime","common/vendor"]]]);