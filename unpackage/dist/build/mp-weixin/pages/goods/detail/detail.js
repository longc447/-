(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods/detail/detail"],{"0741":function(n,o,e){"use strict";var t=e("0ecd"),i=e.n(t);i.a},"0ecd":function(n,o,e){},"15af":function(n,o,e){},"496c":function(n,o,e){"use strict";e.r(o);var t=e("5bb4"),i=e.n(t);for(var u in t)"default"!==u&&function(n){e.d(o,n,(function(){return t[n]}))}(u);o["default"]=i.a},"5bb4":function(n,o,e){"use strict";(function(n){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var t=s(e("a34a")),i=s(e("4210")),u=s(e("46da")),l=s(e("a5a8")),a=s(e("2009"));function s(n){return n&&n.__esModule?n:{default:n}}function r(n,o,e,t,i,u,l){try{var a=n[u](l),s=a.value}catch(r){return void e(r)}a.done?o(s):Promise.resolve(s).then(t,i)}function c(n){return function(){var o=this,e=arguments;return new Promise((function(t,i){var u=n.apply(o,e);function l(n){r(u,t,i,l,a,"next",n)}function a(n){r(u,t,i,l,a,"throw",n)}l(void 0)}))}}var d=function(){e.e("components/ns-goods-action/ns-goods-action").then(function(){return resolve(e("e021"))}.bind(null,e)).catch(e.oe)},g=function(){e.e("components/ns-goods-action-icon/ns-goods-action-icon").then(function(){return resolve(e("4fd2"))}.bind(null,e)).catch(e.oe)},m=function(){e.e("components/ns-goods-action-button/ns-goods-action-button").then(function(){return resolve(e("cb13"))}.bind(null,e)).catch(e.oe)},p=function(){e.e("components/uni-popup/uni-popup").then(function(){return resolve(e("fa04"))}.bind(null,e)).catch(e.oe)},f=function(){e.e("components/ns-goods-sku/ns-goods-sku").then(function(){return resolve(e("e60b"))}.bind(null,e)).catch(e.oe)},_=function(){Promise.all([e.e("common/vendor"),e.e("components/ns-goods-recommend/ns-goods-recommend")]).then(function(){return resolve(e("2ce6"))}.bind(null,e)).catch(e.oe)},b=function(){e.e("components/uni-count-down/uni-count-down").then(function(){return resolve(e("1043"))}.bind(null,e)).catch(e.oe)},v=function(){e.e("components/ns-fenxiao-goods-detail/ns-fenxiao-goods-detail").then(function(){return resolve(e("44cb"))}.bind(null,e)).catch(e.oe)},h=function(){e.e("components/ns-goods-promotion/ns-goods-promotion").then(function(){return resolve(e("873a"))}.bind(null,e)).catch(e.oe)},$=function(){e.e("components/toTop/toTop").then(function(){return resolve(e("9b08"))}.bind(null,e)).catch(e.oe)},k=function(){Promise.all([e.e("common/vendor"),e.e("components/u-parse/u-parse")]).then(function(){return resolve(e("1e01"))}.bind(null,e)).catch(e.oe)},w={components:{nsGoodsAction:d,nsGoodsActionIcon:g,nsGoodsActionButton:m,uniPopup:p,nsGoodsSku:f,nsGoodsRecommend:_,uniCountDown:b,nsFenxiaoGoodsDetail:v,nsGoodsPromotion:h,toTop:$,uParse:k},data:function(){return{kefuConfig:{weapp:"",system:"",open:"",open_url:""},is_wholesaler:a.default.is_wholesaler,isiPhone12:!1}},onLoad:function(){var o=this;return c(t.default.mark((function e(){var i,u;return t.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i=o,n.getSystemInfo({success:function(n){console.log(n,"机型信息"),"iPhone 12"==n.model.substring(0,9)&&(i.isiPhone12=!0,console.log(n.model,"是iPhone12",i.isiPhone12))}}),!n.getStorageSync("token")){e.next=7;break}return e.next=5,o.$api.sendRequest({url:"/api/member/detail",async:!1});case 5:u=e.sent,0==u.code&&(console.log(u),0===a.default.is_wholesaler&&(o.is_wholesaler=u.is_wholesaler));case 7:console.log(u);case 8:case"end":return e.stop()}}),e)})))()},mixins:[i.default,u.default,l.default],onShareAppMessage:function(n){var o="/pages/goods/detail/detail?sku_id="+this.skuId;return this.memberId&&(o+="&source_member="+this.memberId),{title:this.goodsSkuDetail.sku_name,imageUrl:this.$util.img(this.goodsSkuDetail.sku_image,{size:"big"}),path:o,success:function(n){},fail:function(n){}}},onShareTimeline:function(){var n="sku_id="+this.skuId;return this.memberId&&(n+="&source_member="+this.memberId),{title:this.goodsSkuDetail.sku_name,query:n,imageUrl:this.$util.img(this.goodsSkuDetail.sku_image,{size:"big"})}}};o.default=w}).call(this,e("543d")["default"])},"887e":function(n,o,e){"use strict";e.r(o);var t=e("a5bf"),i=e("496c");for(var u in i)"default"!==u&&function(n){e.d(o,n,(function(){return i[n]}))}(u);e("0741"),e("a465");var l,a=e("f0c5"),s=Object(a["a"])(i["default"],t["b"],t["c"],!1,null,"002f9c68",null,!1,t["a"],l);o["default"]=s.exports},a465:function(n,o,e){"use strict";var t=e("15af"),i=e.n(t);i.a},a5bf:function(n,o,e){"use strict";e.d(o,"b",(function(){return i})),e.d(o,"c",(function(){return u})),e.d(o,"a",(function(){return t}));var t={uniPopup:function(){return e.e("components/uni-popup/uni-popup").then(e.bind(null,"fa04"))},uniCountDown:function(){return e.e("components/uni-count-down/uni-count-down").then(e.bind(null,"1043"))},nsGoodsPromotion:function(){return e.e("components/ns-goods-promotion/ns-goods-promotion").then(e.bind(null,"873a"))},nsFenxiaoGoodsDetail:function(){return e.e("components/ns-fenxiao-goods-detail/ns-fenxiao-goods-detail").then(e.bind(null,"44cb"))},uParse:function(){return Promise.all([e.e("common/vendor"),e.e("components/u-parse/u-parse")]).then(e.bind(null,"1e01"))},nsGoodsSku:function(){return e.e("components/ns-goods-sku/ns-goods-sku").then(e.bind(null,"e60b"))},loadingCover:function(){return e.e("components/loading-cover/loading-cover").then(e.bind(null,"a197"))},nsLogin:function(){return Promise.all([e.e("common/vendor"),e.e("components/ns-login/ns-login")]).then(e.bind(null,"b96a"))},nsGoodsAction:function(){return e.e("components/ns-goods-action/ns-goods-action").then(e.bind(null,"e021"))},nsGoodsActionIcon:function(){return e.e("components/ns-goods-action-icon/ns-goods-action-icon").then(e.bind(null,"4fd2"))},nsGoodsActionButton:function(){return e.e("components/ns-goods-action-button/ns-goods-action-button").then(e.bind(null,"cb13"))}},i=function(){var n=this,o=n.$createElement,e=(n._self._c,n.__map(n.goodsSkuDetail.sku_images,(function(o,e){var t=n.__get_orig(o),i=n.$util.img(o,{size:"big"});return{$orig:t,g0:i}}))),t=n.$util.img(n.goodsSkuDetail.video_url),i=n.$util.img(n.goodsSkuDetail.sku_image,{size:"big"}),u=""!=n.goodsSkuDetail.video_url?n.$lang("video"):null,l=""!=n.goodsSkuDetail.video_url?n.$lang("image"):null,a=n.$util.img(n.goodsSkuDetail.video_url),s=n.$util.img(n.goodsSkuDetail.sku_image,{size:"big"}),r=n.showDiscount&&n.goodsSkuDetail.discountTimeMachine?n.$util.img("upload/uniapp/goods/detail_promotion_left_bg.png"):null,c=n.showDiscount&&n.goodsSkuDetail.discountTimeMachine?n.$util.img("upload/uniapp/goods/detail_discount_tag.png"):null,d=n.showDiscount&&n.goodsSkuDetail.discountTimeMachine?n.$util.img("upload/uniapp/goods/detail_promotion_right_bg.png"):null,g=n.$lang("common.currencySymbol"),m=n.showDiscount&&n.goodsSkuDetail.price>0||n.goodsSkuDetail.market_price>0?n.$lang("common.currencySymbol"):null,p=0==n.preview&&n.couponList.length?n.__map(n.couponList,(function(o,e){var t=n.__get_orig(o),i=o.money>0?n.$util.numberFixed(o.at_least):null,u=o.money>0?n.$util.numberFixed(o.money):null,l=o.discount>0?n.$util.numberFixed(o.at_least):null,a=o.discount>0?n.$util.numberFixed(o.discount,1):null;return{$orig:t,g8:i,g9:u,g10:l,g11:a}})):null,f=0==n.preview&&n.couponList.length?n.__map(n.couponList,(function(o,e){var t=n.__get_orig(o),i=void 0!=o.is_lingqu?n.$util.img("/upload/uniapp/coupon/bg_lingqu_gary.png"):null,u=void 0==o.is_lingqu?n.$util.img("/upload/uniapp/coupon/bg_lingqu.png"):null,l="reward"==o.type?n.$lang("common.currencySymbol"):null,a="reward"==o.type?parseFloat(o.money):null,s="reward"!=o.type&&"discount"==o.type?parseFloat(o.discount):null,r=0==o.validity_type?n.$util.timeStampTurnTime(o.end_time):null;return{$orig:t,g12:i,g13:u,m4:l,m5:a,m6:s,g14:r}})):null,_=0==n.preview?n.$lang("service"):null,b=0==n.preview&&n.bundling.length&&n.bundling[0].bl_name&&n.addonIsExit.bundling?n.$util.img(n.goodsSkuDetail.sku_image,{size:"mid"}):null,v=0==n.preview&&n.bundling.length&&n.bundling[0].bl_name&&n.addonIsExit.bundling?n.$lang("common.currencySymbol"):null,h=0==n.preview&&n.bundling.length&&n.bundling[0].bl_name&&n.addonIsExit.bundling?n.__map(n.bundling[0].bundling_goods,(function(o,e){var t=n.__get_orig(o),i=e<3?n.$util.img(o.sku_image,{size:"mid"}):null,u=e<3?n.$lang("common.currencySymbol"):null;return{$orig:t,g16:i,m9:u}})):null,$=n.$util.img(n.goodsSkuDetail.sku_image,{size:"mid"}),k=n.$lang("common.currencySymbol"),w=n.$lang("common.currencySymbol"),y=0==n.preview&&n.bundling.length&&n.bundling[0].bl_name&&n.addonIsExit.bundling?n.__map(n.bundling,(function(o,e){var t=n.__get_orig(o),i=n.__map(o.bundling_goods,(function(o,e){var t=n.__get_orig(o),i=e<3?n.$util.img(o.sku_image,{size:"mid"}):null,u=e<3?n.$lang("common.currencySymbol"):null;return{$orig:t,g18:i,m11:u}}));return{$orig:t,l4:i}})):null,S=n.Development&&0==n.preview&&n.shopInfo.avatar?n.$util.img(n.shopInfo.avatar):null,D=n.Development&&0==n.preview&&!n.shopInfo.avatar?n.$util.getDefaultImage():null,I=0==n.preview&&1==n.evaluateConfig.evaluate_show&&n.goodsEvaluate.content&&n.goodsEvaluate.member_headimg?n.$util.img(n.goodsEvaluate.member_headimg):null,x=0==n.preview&&1==n.evaluateConfig.evaluate_show&&n.goodsEvaluate.content&&!n.goodsEvaluate.member_headimg?n.$util.getDefaultImage():null,P=0==n.preview&&1==n.evaluateConfig.evaluate_show&&n.goodsEvaluate.content?n.$util.timeStampTurnTime(n.goodsEvaluate.create_time):null,E=0==n.preview&&1==n.evaluateConfig.evaluate_show&&n.goodsEvaluate.content&&n.goodsEvaluate.images?n.__map(n.goodsEvaluate.images,(function(o,e){var t=n.__get_orig(o),i=n.$util.img(o);return{$orig:t,g24:i}})):null,G="-1"!=n.poster?n.$util.img(n.poster):null;n._isMounted||(n.e0=function(o){n.switchMedia="video"},n.e1=function(o){n.switchMedia="img"},n.e2=function(o){n.shopInfo.avatar=n.$util.getDefaultImage().default_shop_img},n.e3=function(o){n.goodsEvaluate.member_headimg=n.$util.getDefaultImage().default_headimg},n.e4=function(o){n.detailTab=0}),n.$mp.data=Object.assign({},{$root:{l0:e,g1:t,g2:i,m0:u,m1:l,g3:a,g4:s,g5:r,g6:c,g7:d,m2:g,m3:m,l1:p,l2:f,m7:_,g15:b,m8:v,l3:h,g17:$,m10:k,m12:w,l5:y,g19:S,g20:D,g21:I,g22:x,g23:P,l6:E,g25:G}})},u=[]},ec82:function(n,o,e){"use strict";(function(n){e("f871");t(e("66fd"));var o=t(e("887e"));function t(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=e,n(o.default)}).call(this,e("543d")["createPage"])}},[["ec82","common/runtime","common/vendor"]]]);