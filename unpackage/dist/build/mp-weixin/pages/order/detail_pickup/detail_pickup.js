(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/detail_pickup/detail_pickup"],{"35d8":function(e,t,o){"use strict";(function(e){o("c5b8");r(o("66fd"));var t=r(o("3ab1"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("543d")["createPage"])},"3ab1":function(e,t,o){"use strict";o.r(t);var r=o("519d"),a=o("aa5b");for(var i in a)"default"!==i&&function(e){o.d(t,e,(function(){return a[e]}))}(i);o("743f");var n,d=o("f0c5"),u=Object(d["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],n);t["default"]=u.exports},"41de":function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(o("faec")),a=i(o("dc9a"));function i(e){return e&&e.__esModule?e:{default:e}}var n=function(){o.e("components/payment/payment").then(function(){return resolve(o("c351"))}.bind(null,o)).catch(o.oe)},d={data:function(){return{isIphoneX:!1,orderId:0,orderData:{delivery_store_info:{store_image:""},action:[]},action:{icon:""},kefuConfig:{weapp:"",system:"",open:"",open_url:""},evaluateConfig:{evaluate_audit:1,evaluate_show:0,evaluate_status:1}}},mixins:[r.default,a.default],components:{nsPayment:n},onLoad:function(e){e.order_id&&(this.orderId=e.order_id)},onShow:function(){this.$langConfig.refresh(),this.isIphoneX=this.$util.uniappIsIPhoneX(),e.getStorageSync("token")?(this.getEvaluateConfig(),this.getOrderData()):this.$util.redirectTo("/pages/login/login/login",{back:"/pages/order/detail_pickup/detail_pickup?order_id="+this.orderId}),this.getKekuConfig()},methods:{goConnect:function(){if(e.getStorageSync("token")){var t={order_id:this.orderId,site_id:this.orderData.site_id};return this.$util.redirectTo("/otherpages/chat/room/room",t),!1}this.$refs.login.open("/pages/goods/detail_pickup/detail_pickup?sku_id="+this.orderData.sku_id)},getKekuConfig:function(){var e=this;this.$api.sendRequest({url:"/api/config/servicer",success:function(t){0==t.code&&(e.kefuConfig=t.data,e.kefuConfig.system&&!e.addonIsExit.servicer&&(e.kefuConfig.system=0))}})},goDetail:function(e){this.$util.redirectTo("/pages/goods/detail/detail",{sku_id:e})},goRefund:function(e){this.$util.redirectTo("/otherpages/order/refund/refund",{order_goods_id:e})},goRefundDetail:function(e){this.$util.redirectTo("/otherpages/order/refund_detail/refund_detail",{order_goods_id:e})},getOrderData:function(){var t=this;this.$api.sendRequest({url:"/api/order/detail",data:{order_id:this.orderId},success:function(o){e.stopPullDownRefresh(),o.code>=0?(t.orderData=o.data,t.orderData.order_goods.forEach((function(e){e.sku_spec_format?e.sku_spec_format=JSON.parse(e.sku_spec_format):e.sku_spec_format=[]})),t.action=JSON.parse(o.data.order_status_action),""!=t.orderData.delivery_store_info&&(t.orderData.delivery_store_info=JSON.parse(t.orderData.delivery_store_info)),t.$refs.loadingCover&&t.$refs.loadingCover.hide()):(t.$util.showToast({title:"未获取到订单信息！"}),setTimeout((function(){t.$util.redirectTo("/pages/order/list/list")}),1e3))},fail:function(o){e.stopPullDownRefresh(),t.$refs.loadingCover&&t.$refs.loadingCover.hide()}})},onPullDownRefresh:function(){this.getOrderData()},operation:function(e){var t=this;switch(e){case"orderPay":this.orderPay(this.orderData);break;case"orderClose":this.orderClose(this.orderData.order_id,(function(){t.getOrderData()}));break;case"memberTakeDelivery":this.orderDelivery(this.orderData.order_id,(function(){t.getOrderData()}));break;case"trace":this.$util.redirectTo("/pages/order/logistics/logistics",{order_id:this.orderData.order_id});break;case"memberOrderEvaluation":this.$util.redirectTo("/otherpages/order/evaluate/evaluate",{order_id:this.orderData.order_id});break}},imgError:function(e){this.orderData.order_goods[e].sku_image=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()},getEvaluateConfig:function(){var e=this;this.$api.sendRequest({url:"/api/goodsevaluate/config",success:function(t){if(0==t.code){var o=t.data;e.evaluateConfig=o}}})},openChoosePayment:function(){this.$refs.choosePaymentPopup.open()},toShopDetail:function(e){this.$util.redirectTo("/otherpages/shop/index/index",{site_id:e})}},filters:{abs:function(e){return Math.abs(parseFloat(e)).toFixed(2)}}};t.default=d}).call(this,o("543d")["default"])},"519d":function(e,t,o){"use strict";o.d(t,"b",(function(){return a})),o.d(t,"c",(function(){return i})),o.d(t,"a",(function(){return r}));var r={loadingCover:function(){return o.e("components/loading-cover/loading-cover").then(o.bind(null,"f410"))}},a=function(){var e=this,t=e.$createElement,o=(e._self._c,e.$util.img("upload/uniapp/order/status-wrap-bg.png")),r=e.$util.img(e.action.icon),a=e.orderData.pay_status?e.$util.img(e.orderData.pickup):null,i=e.$lang("common.currencySymbol"),n=e.__map(e.orderData.order_goods,(function(t,o){var r=e.__get_orig(t),a=e.$util.img(t.sku_image,{size:"mid"});return{$orig:r,g3:a}})),d=e.$util.timeStampTurnTime(e.orderData.create_time),u=e.orderData.close_time>0?e.$util.timeStampTurnTime(e.orderData.close_time):null,s=e.orderData.pay_status>0?e.$util.timeStampTurnTime(e.orderData.pay_time):null,c=e.$lang("common.currencySymbol"),l=e.$lang("common.currencySymbol"),f=e.orderData.invoice_money>0?e.$lang("common.currencySymbol"):null,m=e.orderData.invoice_delivery_money>0?e.$lang("common.currencySymbol"):null,g=0!=e.orderData.adjust_money?e.$lang("common.currencySymbol"):null,_=0!=e.orderData.adjust_money?e._f("abs")(e.orderData.adjust_money):null,p=e.orderData.promotion_money>0?e.$lang("common.currencySymbol"):null,h=e.orderData.coupon_money>0?e.$lang("common.currencySymbol"):null,y=e.orderData.platform_coupon_total_money>0?e.$lang("common.currencySymbol"):null,v=e.orderData.balance_money>0?e.$lang("common.currencySymbol"):null,D=e.$lang("common.currencySymbol");e._isMounted||(e.e0=function(t){return e.$util.redirectTo("/otherpages/index/storedetail/storedetail",{store_id:e.orderData.delivery_store_id})},e.e1=function(t){return e.$util.copy(e.orderData.delivery_code)},e.e2=function(t){return e.$util.copy(e.orderData.order_no)}),e.$mp.data=Object.assign({},{$root:{g0:o,g1:r,g2:a,m0:i,l0:n,g4:d,g5:u,g6:s,m1:c,m2:l,m3:f,m4:m,m5:g,f0:_,m6:p,m7:h,m8:y,m9:v,m10:D}})},i=[]},"743f":function(e,t,o){"use strict";var r=o("dfa1"),a=o.n(r);a.a},aa5b:function(e,t,o){"use strict";o.r(t);var r=o("41de"),a=o.n(r);for(var i in r)"default"!==i&&function(e){o.d(t,e,(function(){return r[e]}))}(i);t["default"]=a.a},dfa1:function(e,t,o){}},[["35d8","common/runtime","common/vendor"]]]);