(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/detail/detail"],{"2ea7":function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(o("faec")),a=i(o("dc9a")),n=i(o("148b"));function i(e){return e&&e.__esModule?e:{default:e}}var d=function(){o.e("components/payment/payment").then(function(){return resolve(o("c351"))}.bind(null,o)).catch(o.oe)},u={data:function(){return{isIphoneX:!1,orderId:0,orderData:{action:[]},action:{icon:""},kefuConfig:{weapp:"",system:"",open:"",open_url:""},evaluateConfig:{evaluate_audit:1,evaluate_show:0,evaluate_status:1}}},mixins:[r.default,a.default,n.default],components:{nsPayment:d},onLoad:function(e){e.order_id&&(this.orderId=e.order_id)},onShow:function(){this.$langConfig.refresh(),this.isIphoneX=this.$util.uniappIsIPhoneX(),e.getStorageSync("token")?(this.getEvaluateConfig(),this.getOrderData()):this.$util.redirectTo("/pages/login/login/login",{back:"/pages/order/detail/detail?order_id="+this.orderId}),this.getKekuConfig()},methods:{goConnect:function(){if(e.getStorageSync("token")){var t={order_id:this.orderId,site_id:this.orderData.site_id};return this.$util.redirectTo("/otherpages/chat/room/room",t),!1}this.$refs.login.open("/pages/goods/detail/detail?sku_id="+this.orderData.sku_id)},getKekuConfig:function(){var e=this;this.$api.sendRequest({url:"/api/config/servicer",success:function(t){0==t.code&&(e.kefuConfig=t.data,e.kefuConfig.system&&!e.addonIsExit.servicer&&(e.kefuConfig.system=0))}})},goDetail:function(e){this.$util.redirectTo("/pages/goods/detail/detail",{sku_id:e})},goRefund:function(e){this.$util.redirectTo("/otherpages/order/refund/refund",{order_goods_id:e})},goRefundDetail:function(e){this.$util.redirectTo("/otherpages/order/refund_detail/refund_detail",{order_goods_id:e})},getOrderData:function(){var t=this;this.$api.sendRequest({url:"/api/order/detail",data:{order_id:this.orderId},success:function(o){e.stopPullDownRefresh(),o.code>=0?(t.orderData=o.data,t.orderData.order_goods.forEach((function(e){e.sku_spec_format?e.sku_spec_format=JSON.parse(e.sku_spec_format):e.sku_spec_format=[]})),3==o.data.order_status&&(o.data.take_delivery_execute_time=t.$util.countDown(o.data.take_delivery_execute_time-o.timestamp)),t.action=JSON.parse(o.data.order_status_action),t.$refs.loadingCover&&t.$refs.loadingCover.hide()):(t.$util.showToast({title:"未获取到订单信息！"}),setTimeout((function(){t.$util.redirectTo("/pages/order/list/list")}),1e3))},fail:function(o){e.stopPullDownRefresh(),t.$refs.loadingCover&&t.$refs.loadingCover.hide()}})},onPullDownRefresh:function(){this.getOrderData()},operation:function(e){var t=this;switch(e){case"orderPay":this.orderPay(this.orderData);break;case"orderClose":this.orderClose(this.orderData.order_id,(function(){t.getOrderData()}));break;case"memberTakeDelivery":this.orderDelivery(this.orderData.order_id,(function(){t.getOrderData()}));break;case"trace":this.$util.redirectTo("/pages/order/logistics/logistics",{order_id:this.orderData.order_id});break;case"memberOrderEvaluation":this.$util.redirectTo("/otherpages/order/evaluate/evaluate",{order_id:this.orderData.order_id});break;case"extendTakeDelivery":this.orderExtendTakeDelivery(this.orderData.order_id,(function(){t.getOrderData()}));break}},imgError:function(e){this.orderData.order_goods[e].sku_image=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()},getEvaluateConfig:function(){var e=this;this.$api.sendRequest({url:"/api/goodsevaluate/config",success:function(t){if(0==t.code){var o=t.data;e.evaluateConfig=o}}})},openChoosePayment:function(){this.$refs.choosePaymentPopup.open()},toShopDetail:function(e){this.$util.redirectTo("/otherpages/shop/index/index",{site_id:e})}},filters:{abs:function(e){return Math.abs(parseFloat(e)).toFixed(2)}}};t.default=u}).call(this,o("543d")["default"])},"367a":function(e,t,o){"use strict";(function(e){o("c5b8");r(o("66fd"));var t=r(o("7661"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("543d")["createPage"])},"74db":function(e,t,o){"use strict";var r=o("ef80"),a=o.n(r);a.a},7661:function(e,t,o){"use strict";o.r(t);var r=o("f4e0"),a=o("9914");for(var n in a)"default"!==n&&function(e){o.d(t,e,(function(){return a[e]}))}(n);o("74db");var i,d=o("f0c5"),u=Object(d["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],i);t["default"]=u.exports},9914:function(e,t,o){"use strict";o.r(t);var r=o("2ea7"),a=o.n(r);for(var n in r)"default"!==n&&function(e){o.d(t,e,(function(){return r[e]}))}(n);t["default"]=a.a},ef80:function(e,t,o){},f4e0:function(e,t,o){"use strict";o.d(t,"b",(function(){return a})),o.d(t,"c",(function(){return n})),o.d(t,"a",(function(){return r}));var r={loadingCover:function(){return o.e("components/loading-cover/loading-cover").then(o.bind(null,"f410"))}},a=function(){var e=this,t=e.$createElement,o=(e._self._c,e.$util.img("upload/uniapp/order/status-wrap-bg.png")),r=e.$util.img(e.action.icon),a=e.$lang("common.currencySymbol"),n=e.__map(e.orderData.order_goods,(function(t,o){var r=e.__get_orig(t),a=e.$util.img(t.sku_image,{size:"mid"}),n=t.sku_spec_format&&t.eye?e._f("doller")(t.ball_mirror):null,i=t.sku_spec_format&&t.eye?e._f("doller")(t.cylinder_mirror):null;return{$orig:r,g2:a,f0:n,f1:i}})),i=e.$util.timeStampTurnTime(e.orderData.create_time),d=e.orderData.close_time>0?e.$util.timeStampTurnTime(e.orderData.close_time):null,u=e.orderData.pay_status>0?e.$util.timeStampTurnTime(e.orderData.pay_time):null,s=e.$lang("common.currencySymbol"),l=e.$lang("common.currencySymbol"),c=e.orderData.invoice_money>0?e.$lang("common.currencySymbol"):null,f=e.orderData.invoice_delivery_money>0?e.$lang("common.currencySymbol"):null,m=0!=e.orderData.adjust_money?e.$lang("common.currencySymbol"):null,g=0!=e.orderData.adjust_money?e._f("abs")(e.orderData.adjust_money):null,_=e.orderData.promotion_money>0?e.$lang("common.currencySymbol"):null,h=e.orderData.coupon_money>0?e.$lang("common.currencySymbol"):null,p=e.orderData.platform_coupon_total_money>0?e.$lang("common.currencySymbol"):null,y=e.orderData.balance_money>0?e.$lang("common.currencySymbol"):null,v=e.$lang("common.currencySymbol");e._isMounted||(e.e0=function(t){return e.$util.copy(e.orderData.order_no)}),e.$mp.data=Object.assign({},{$root:{g0:o,g1:r,m0:a,l0:n,g3:i,g4:d,g5:u,m1:s,m2:l,m3:c,m4:f,m5:m,f2:g,m6:_,m7:h,m8:p,m9:y,m10:v}})},n=[]}},[["367a","common/runtime","common/vendor"]]]);