(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/detail/detail"],{"1d89":function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return n})),r.d(t,"a",(function(){return o}));var o={loadingCover:function(){return r.e("components/loading-cover/loading-cover").then(r.bind(null,"a197"))}},a=function(){var e=this,t=e.$createElement,r=(e._self._c,e.$util.img("upload/uniapp/order/status-wrap-bg.png")),o=e.$util.img(e.action.icon),a=1!=e.orderData.is_photograph?e.$lang("common.currencySymbol"):null,n=e.__map(e.orderData.order_goods,(function(t,r){var o=e.__get_orig(t),a=t.sku_spec_format&&1!=e.orderData.is_photograph&&0!=t.photometric&&0==t.rimless?e._f("doller")(t.ball_mirror):null,n=t.sku_spec_format&&1!=e.orderData.is_photograph&&0!=t.photometric&&0==t.rimless?e._f("doller")(t.cylinder_mirror):null;return{$orig:o,f0:a,f1:n}})),i=e.$util.timeStampTurnTime(e.orderData.create_time),d=e.orderData.close_time>0?e.$util.timeStampTurnTime(e.orderData.close_time):null,u=e.orderData.pay_status>0?e.$util.timeStampTurnTime(e.orderData.pay_time):null,s=e.$lang("common.currencySymbol"),l=e.$lang("common.currencySymbol"),c=e.orderData.invoice_money>0?e.$lang("common.currencySymbol"):null,f=e.orderData.invoice_delivery_money>0?e.$lang("common.currencySymbol"):null,m=0!=e.orderData.adjust_money?e.$lang("common.currencySymbol"):null,g=0!=e.orderData.adjust_money?e._f("abs")(e.orderData.adjust_money):null,_=e.orderData.promotion_money>0?e.$lang("common.currencySymbol"):null,h=e.orderData.coupon_money>0?e.$lang("common.currencySymbol"):null,p=e.orderData.platform_coupon_total_money>0?e.$lang("common.currencySymbol"):null,v=e.orderData.balance_money>0?e.$lang("common.currencySymbol"):null,y=e.$lang("common.currencySymbol");e._isMounted||(e.e0=function(t,r){var o=arguments[arguments.length-1].currentTarget.dataset,a=o.eventParams||o["event-params"];r=a.item;return e.$refs.imageBox.show(r)},e.e1=function(t){return e.$util.copy(e.orderData.order_no)}),e.$mp.data=Object.assign({},{$root:{g0:r,g1:o,m0:a,l0:n,g2:i,g3:d,g4:u,m1:s,m2:l,m3:c,m4:f,m5:m,f2:g,m6:_,m7:h,m8:p,m9:v,m10:y}})},n=[]},3818:function(e,t,r){"use strict";r.r(t);var o=r("1d89"),a=r("416d");for(var n in a)"default"!==n&&function(e){r.d(t,e,(function(){return a[e]}))}(n);r("f5f2");var i,d=r("f0c5"),u=Object(d["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],i);t["default"]=u.exports},"416d":function(e,t,r){"use strict";r.r(t);var o=r("f311"),a=r.n(o);for(var n in o)"default"!==n&&function(e){r.d(t,e,(function(){return o[e]}))}(n);t["default"]=a.a},e2c2:function(e,t,r){},f311:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(r("a5a8")),a=i(r("c4d9")),n=i(r("1b8f"));function i(e){return e&&e.__esModule?e:{default:e}}var d=function(){r.e("components/payment/payment").then(function(){return resolve(r("cc59"))}.bind(null,r)).catch(r.oe)},u=function(){r.e("components/imageloader/imageloader").then(function(){return resolve(r("1d2e"))}.bind(null,r)).catch(r.oe)},s={components:{nsPayment:d,ImageBox:u},data:function(){return{isIphoneX:!1,orderId:0,orderData:{action:[]},action:{icon:""},kefuConfig:{weapp:"",system:"",open:"",open_url:""},evaluateConfig:{evaluate_audit:1,evaluate_show:0,evaluate_status:1}}},mixins:[o.default,a.default,n.default],onLoad:function(e){e.order_id&&(this.orderId=e.order_id)},onShow:function(){this.$langConfig.refresh(),this.isIphoneX=this.$util.uniappIsIPhoneX(),e.getStorageSync("token")?(this.getEvaluateConfig(),this.getOrderData()):this.$util.redirectTo("/pages/login/login/login",{back:"/pages/order/detail/detail?order_id="+this.orderId}),this.getKekuConfig()},methods:{goConnect:function(){if(e.getStorageSync("token")){var t={order_id:this.orderId,site_id:this.orderData.site_id};return this.$util.redirectTo("/otherpages/chat/room/room",t),!1}this.$refs.login.open("/pages/goods/detail/detail?sku_id="+this.orderData.sku_id)},getKekuConfig:function(){var e=this;this.$api.sendRequest({url:"/api/config/servicer",success:function(t){0==t.code&&(e.kefuConfig=t.data,e.kefuConfig.system&&!e.addonIsExit.servicer&&(e.kefuConfig.system=0))}})},goDetail:function(e){this.$util.redirectTo("/pages/goods/detail/detail",{sku_id:e})},goRefund:function(e){this.$util.redirectTo("/otherpages/order/refund/refund",{order_goods_id:e})},goRefundDetail:function(e){this.$util.redirectTo("/otherpages/order/refund_detail/refund_detail",{order_goods_id:e})},getOrderData:function(){var t=this;this.$api.sendRequest({url:"/api/order/detail",data:{order_id:this.orderId},success:function(r){e.stopPullDownRefresh(),r.code>=0?(t.orderData=r.data,""!==t.orderData.images&&(t.orderData.images=JSON.parse(t.orderData.images)),t.orderData&&t.orderData.order_goods&&t.orderData.order_goods.forEach((function(e){})),3==r.data.order_status&&(r.data.take_delivery_execute_time=t.$util.countDown(r.data.take_delivery_execute_time-r.timestamp)),t.action=JSON.parse(r.data.order_status_action),t.$refs.loadingCover&&t.$refs.loadingCover.hide()):(t.$util.showToast({title:"未获取到订单信息！"}),setTimeout((function(){t.$util.redirectTo("/pages/order/list/list")}),1e3))},fail:function(r){e.stopPullDownRefresh(),t.$refs.loadingCover&&t.$refs.loadingCover.hide()}})},onPullDownRefresh:function(){this.getOrderData()},operation:function(e){var t=this;switch(e){case"orderPay":this.orderPay(this.orderData);break;case"orderClose":this.orderClose(this.orderData.order_id,(function(){t.getOrderData()}));break;case"memberTakeDelivery":this.orderDelivery(this.orderData.order_id,(function(){t.getOrderData()}));break;case"trace":this.$util.redirectTo("/pages/order/logistics/logistics",{order_id:this.orderData.order_id});break;case"memberOrderEvaluation":this.$util.redirectTo("/otherpages/order/evaluate/evaluate",{order_id:this.orderData.order_id});break;case"extendTakeDelivery":this.orderExtendTakeDelivery(this.orderData.order_id,(function(){t.getOrderData()}));break}},imgError:function(e){this.orderData.order_goods[e].sku_image=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()},getEvaluateConfig:function(){var e=this;this.$api.sendRequest({url:"/api/goodsevaluate/config",success:function(t){if(0==t.code){var r=t.data;e.evaluateConfig=r}}})},openChoosePayment:function(){this.$refs.choosePaymentPopup.open()},toShopDetail:function(e){this.$util.redirectTo("/otherpages/shop/index/index",{site_id:e})}},filters:{abs:function(e){return Math.abs(parseFloat(e)).toFixed(2)}}};t.default=s}).call(this,r("543d")["default"])},f5f2:function(e,t,r){"use strict";var o=r("e2c2"),a=r.n(o);a.a},f6a6:function(e,t,r){"use strict";(function(e){r("f871");o(r("66fd"));var t=o(r("3818"));function o(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=r,e(t.default)}).call(this,r("543d")["createPage"])}},[["f6a6","common/runtime","common/vendor"]]]);