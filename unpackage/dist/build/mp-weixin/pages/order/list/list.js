(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/list/list"],{2216:function(e,t,r){"use strict";var i=r("6189"),s=r.n(i);s.a},4825:function(e,t,r){"use strict";(function(e){r("f871");i(r("66fd"));var t=i(r("ede2"));function i(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=r,e(t.default)}).call(this,r("543d")["createPage"])},6189:function(e,t,r){},"7c36":function(e,t,r){},ae1b:function(e,t,r){"use strict";r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return a})),r.d(t,"a",(function(){return i}));var i={skuList:function(){return r.e("components/sku-list/sku-list").then(r.bind(null,"5b4d"))},nsEmpty:function(){return r.e("components/ns-empty/ns-empty").then(r.bind(null,"431c"))},loadingCover:function(){return r.e("components/loading-cover/loading-cover").then(r.bind(null,"a197"))}},s=function(){var e=this,t=e.$createElement,r=(e._self._c,e.orderList.length>0?e.__map(e.orderList,(function(t,r){var i=e.__get_orig(t),s="waitpay"==e.orderStatus&&0==t.order_status?e.$util.inArray(t.order_id,e.mergePayOrder):null,a=e.__map(t.order_goods,(function(t,r){var i=e.__get_orig(t),s=t.price>0&&1==t.is_photograph||1!=t.is_photograph?e.$lang("common.currencySymbol"):null;return{$orig:i,m0:s}})),o=1!=t.is_photograph?e.$lang("common.currencySymbol"):null;return{$orig:i,g0:s,l0:a,m1:o}})):null),i=e.orderList.length>0?null:e.$lang("emptyTips");e.$mp.data=Object.assign({},{$root:{l1:r,m2:i}})},a=[]},c242:function(e,t,r){"use strict";r.r(t);var i=r("e829"),s=r.n(i);for(var a in i)"default"!==a&&function(e){r.d(t,e,(function(){return i[e]}))}(a);t["default"]=s.a},d30c:function(e,t,r){"use strict";var i=r("7c36"),s=r.n(i);s.a},e829:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(r("c4d9")),s=o(r("1b8f")),a=o(r("a5a8"));function o(e){return e&&e.__esModule?e:{default:e}}var n=function(){r.e("components/payment/payment").then(function(){return resolve(r("cc59"))}.bind(null,r)).catch(r.oe)},u={data:function(){return{luminosity_status:1,scrollInto:"",orderStatus:"all",statusList:[],orderList:[],contentText:{},mergePayOrder:[],isIphoneX:!1,evaluateConfig:{evaluate_audit:1,evaluate_show:0,evaluate_status:1},orderData:{},payMoney:0,payMoneyMerge:0}},components:{nsPayment:n},filters:{moneyFormat:function(e){return console.log(e,"=======>",parseFloat(e).toFixed(2)),parseFloat(e).toFixed(2)}},mixins:[i.default,a.default,s.default],onLoad:function(e){e.status&&(this.orderStatus=e.status)},onShow:function(){this.$langConfig.refresh(),this.isIphoneX=this.$util.uniappIsIPhoneX(),this.getEvaluateConfig(),this.getOrderStatus(),e.getStorageSync("token")?this.$refs.mescroll&&this.$refs.mescroll.refresh():this.$util.redirectTo("/pages/login/login/login",{back:"/pages/order/list/list?status="+this.orderStatus})},methods:{ontabtap:function(e){var t=e.target.dataset.current||e.currentTarget.dataset.current;this.orderStatus=this.statusList[t].status,""==this.orderStatus&&(this.mergePayOrder=[]),this.$refs.loadingCover.show(),this.$refs.mescroll.refresh()},getListData:function(e){var t=this;this.$api.sendRequest({url:"/api/order/lists",data:{page:e.num,page_size:e.size,order_status:this.orderStatus},success:function(r){var i=[],s=r.message;0==r.code&&r.data?i=r.data.list:t.$util.showToast({title:s}),e.endSuccess(i.length),1==e.num&&(t.orderList=[]),t.orderList=t.orderList.concat(i),t.orderList.forEach((function(e){console.log(e.images,"vooooooooooo"),e.images&&(e.images=JSON.parse(e.images))})),t.$refs.loadingCover&&t.$refs.loadingCover.hide()},fail:function(r){e.endErr(),t.$refs.loadingCover&&t.$refs.loadingCover.hide()}})},getOrderStatus:function(){this.statusList=[{status:"all",name:this.$lang("all"),id:"status_0"},{status:"waitpay",name:this.$lang("waitPay"),id:"status_1"},{status:"waitsend",name:this.$lang("readyDelivery"),id:"status_2"},{status:"waitconfirm",name:this.$lang("waitDelivery"),id:"status_3"},{status:"waitrate",name:this.$lang("waitEvaluate"),id:"status_4"}]},operation:function(e,t){var r=this;this.status;switch(e){case"orderPay":this.orderData=t,this.payMoney=parseFloat(t.pay_money),this.orderPay(t);break;case"orderClose":this.orderClose(t.order_id,(function(){r.$refs.mescroll.refresh()}));break;case"memberTakeDelivery":this.orderDelivery(t.order_id,(function(){r.$refs.mescroll.refresh()}));break;case"trace":this.$util.redirectTo("/pages/order/logistics/logistics",{order_id:t.order_id});break;case"memberOrderEvaluation":this.$util.redirectTo("/otherpages/order/evaluate/evaluate",{order_id:t.order_id});break;case"extendTakeDelivery":this.orderExtendTakeDelivery(t.order_id,(function(){r.$refs.mescroll.refresh()}));break}},orderDetail:function(e){switch(parseInt(e.order_type)){case 2:this.$util.redirectTo("/pages/order/detail_pickup/detail_pickup",{order_id:e.order_id});break;case 3:this.$util.redirectTo("/pages/order/detail_local_delivery/detail_local_delivery",{order_id:e.order_id});break;case 4:this.$util.redirectTo("/pages/order/detail_virtual/detail_virtual",{order_id:e.order_id});break;default:this.$util.redirectTo("/pages/order/detail/detail",{order_id:e.order_id});break}},selectOrder:function(e,t){-1!=this.$util.inArray(e,this.mergePayOrder)?(this.mergePayOrder.splice(this.$util.inArray(e,this.mergePayOrder),1),this.payMoneyMerge-=parseFloat(t)):(this.payMoneyMerge+=parseFloat(t),this.mergePayOrder.push(e))},mergePay:function(){var e=this;this.mergePayOrder.length&&this.$api.sendRequest({url:"/api/order/pay",data:{order_ids:this.mergePayOrder.toString()},success:function(t){t.code>=0?e.$refs.choosePaymentMergePopup.getPayInfo(t.data):e.$util.showToast({title:t.message})}})},toShopDetail:function(e){this.$util.redirectTo("/otherpages/shop/index/index",{site_id:e})},imgError:function(e,t){this.orderList[e].order_goods[t].sku_image=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()},getEvaluateConfig:function(){var e=this;this.$api.sendRequest({url:"/api/goodsevaluate/config",success:function(t){if(0==t.code){var r=t.data;e.evaluateConfig=r}}})},openChoosePayment:function(){this.$refs.choosePaymentPopup.open()},openChoosePaymentMerge:function(){this.$refs.choosePaymentMergePopup.open()}},computed:{mpOrderList:function(){if(this.orderList[this.status])return this.orderList[this.status].list||[]}}};t.default=u}).call(this,r("543d")["default"])},ede2:function(e,t,r){"use strict";r.r(t);var i=r("ae1b"),s=r("c242");for(var a in s)"default"!==a&&function(e){r.d(t,e,(function(){return s[e]}))}(a);r("d30c"),r("2216");var o,n=r("f0c5"),u=Object(n["a"])(s["default"],i["b"],i["c"],!1,null,"ddd56834",null,!1,i["a"],o);t["default"]=u.exports}},[["4825","common/runtime","common/vendor"]]]);