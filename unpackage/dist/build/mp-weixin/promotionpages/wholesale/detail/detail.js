(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["promotionpages/wholesale/detail/detail","components/ns-goods-sku/ns-goods-sku"],{"09c1":function(t,i,e){"use strict";var o=e("d863"),s=e.n(o);s.a},"1c9b":function(t,i,e){},3261:function(t,i,e){"use strict";e.d(i,"b",(function(){return s})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){return o}));var o={uniPopup:function(){return e.e("components/uni-popup/uni-popup").then(e.bind(null,"fa04"))},uParse:function(){return Promise.all([e.e("common/vendor"),e.e("components/u-parse/u-parse")]).then(e.bind(null,"1e01"))},nsGoodsSku:function(){return Promise.resolve().then(e.bind(null,"e60b"))},loadingCover:function(){return e.e("components/loading-cover/loading-cover").then(e.bind(null,"a197"))},nsLogin:function(){return Promise.all([e.e("common/vendor"),e.e("components/ns-login/ns-login")]).then(e.bind(null,"b96a"))},nsGoodsAction:function(){return e.e("components/ns-goods-action/ns-goods-action").then(e.bind(null,"e021"))},nsGoodsActionIcon:function(){return e.e("components/ns-goods-action-icon/ns-goods-action-icon").then(e.bind(null,"4fd2"))},nsGoodsActionButton:function(){return e.e("components/ns-goods-action-button/ns-goods-action-button").then(e.bind(null,"cb13"))}},s=function(){var t=this,i=t.$createElement,e=(t._self._c,t.__map(t.goodsSkuDetail.sku_images,(function(i,e){var o=t.__get_orig(i),s=t.$util.img(i,{size:"big"});return{$orig:o,g0:s}}))),o=t.$util.img(t.goodsSkuDetail.video_url),s=t.$util.img(t.goodsSkuDetail.sku_image,{size:"big"}),n=""!=t.goodsSkuDetail.video_url?t.$lang("video"):null,a=""!=t.goodsSkuDetail.video_url?t.$lang("image"):null,r=t.$util.img(t.goodsSkuDetail.video_url),u=t.$util.img(t.goodsSkuDetail.sku_image,{size:"big"}),l=t.$lang("common.currencySymbol"),d=t.goodsSkuDetail.price>0?t.$lang("common.currencySymbol"):null,c=t.$lang("common.currencySymbol"),m=t.$lang("service"),h=t.Development&&t.shopInfo.avatar?t.$util.img(t.shopInfo.avatar):null,g=t.Development&&!t.shopInfo.avatar?t.$util.getDefaultImage():null,p=1==t.evaluateConfig.evaluate_show&&t.goodsEvaluate.content&&t.goodsEvaluate.member_headimg?t.$util.img(t.goodsEvaluate.member_headimg):null,_=1==t.evaluateConfig.evaluate_show&&t.goodsEvaluate.content&&!t.goodsEvaluate.member_headimg?t.$util.getDefaultImage():null,f=1==t.evaluateConfig.evaluate_show&&t.goodsEvaluate.content?t.$util.timeStampTurnTime(t.goodsEvaluate.create_time):null,b=1==t.evaluateConfig.evaluate_show&&t.goodsEvaluate.content&&t.goodsEvaluate.images?t.__map(t.goodsEvaluate.images,(function(i,e){var o=t.__get_orig(i),s=t.$util.img(i);return{$orig:o,g10:s}})):null,y="-1"!=t.poster?t.$util.img(t.poster):null;t._isMounted||(t.e0=function(i){t.switchMedia="video"},t.e1=function(i){t.switchMedia="img"},t.e2=function(i){t.shopInfo.avatar=t.$util.getDefaultImage().default_shop_img},t.e3=function(i){t.goodsEvaluate.member_headimg=t.$util.getDefaultImage().default_headimg},t.e4=function(i){t.detailTab=0}),t.$mp.data=Object.assign({},{$root:{l0:e,g1:o,g2:s,m0:n,m1:a,g3:r,g4:u,m2:l,m3:d,m4:c,m5:m,g5:h,g6:g,g7:p,g8:_,g9:f,l1:b,g11:y}})},n=[]},3769:function(t,i,e){"use strict";var o=e("1c9b"),s=e.n(o);s.a},"62b0":function(t,i,e){"use strict";e.r(i);var o=e("8a42"),s=e.n(o);for(var n in o)"default"!==n&&function(t){e.d(i,t,(function(){return o[t]}))}(n);i["default"]=s.a},"714a":function(t,i,e){"use strict";var o=e("e6ad"),s=e.n(o);s.a},"8a42":function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=n(e("a34a")),s=(n(e("c086")),n(e("2009")));function n(t){return t&&t.__esModule?t:{default:t}}function a(t,i,e,o,s,n,a){try{var r=t[n](a),u=r.value}catch(l){return void e(l)}r.done?i(u):Promise.resolve(u).then(o,s)}function r(t){return function(){var i=this,e=arguments;return new Promise((function(o,s){var n=t.apply(i,e);function r(t){a(n,o,s,r,u,"next",t)}function u(t){a(n,o,s,r,u,"throw",t)}r(void 0)}))}}var u=function(){e.e("components/uni-popup/uni-popup-sku").then(function(){return resolve(e("9f36"))}.bind(null,e)).catch(e.oe)},l={name:"ns-goods-sku",components:{uniPopup:u},props:{goodsDetail:{type:Object,default:null},disabled:{type:Boolean,default:!1},pointLimit:{type:[Number,String]},maxBuy:{type:Number,default:0},minBuy:{type:Number,default:0}},data:function(){return{rimless:"",scrollto:"addbtn0",isIphoneX:!1,systemInfo:{},number:1,btnSwitch:!1,type:"",callback:null,skuId:0,pintuanId:0,limitNumber:0,minNumber:0,preview:0,cartNumber:0,leftIndex:0,ball_mirrorIndex:0,cylinder_mirrorIndex:0,axisIndex:0,sumIndex:0,objIndex:0,leftArray:["R","L"],ball_mirrorArray:[],cylinder_mirrorArray:[],ball_mirrorArray_bk:[],cylinder_mirrorArray_bk:[],axisArray:[],sumArray:[],objArray:[],photometric:0,is_wholesaler:s.default.is_wholesaler,myValue:[],nowIndex:0,lastIndex:0,quantity:0,mirrolist:[],sumPrice:0,newballlist:[],buyer_message:""}},mounted:function(){this.isIphoneX=this.$util.uniappIsIPhoneX(),this.systemInfo=t.getSystemInfoSync(),this.getWholesale(this.goodsDetail),0==this.goodsDetail.goods_id&&this.$emit("error")},watch:{pointLimit:function(t,i){this.limitNumber=Number(t)},goodsDetail:function(t,i){this.goodsDetailChange(t),console.error(this.goodsDetail,"更新了一次"),1==this.goodsDetail.rimless&&(this.rimless=this.goodsDetail.rimless,this.getClickGoodsAdd({},1))},minBuy:function(t,i){this.minBuy>1&&(this.number=Number(this.minBuy))}},methods:{goodsDetailChange:function(t,i){if(this.skuId=t.sku_id,console.error(this.goodsDetail.luminosity_status,"luminosity_status"),1!=this.goodsDetail.luminosity_status&&this.setBalllist(),0!=t.photometric||1==t.luminosity_status){for(var e=[],o=.25,s=t.ball_min;s<=t.ball_max;s+=o)o=s<this.goodsDetail.step&&0!=this.goodsDetail.step?.5:.25,e.push((s.toFixed(2)>0?"+":"")+s.toFixed(2));for(var n=[],a=.25,r=t.cylinder_min;r<=t.cylinder_max;r+=a)a=r<this.goodsDetail.step&&0!=this.goodsDetail.step?.5:.25,n.push((r.toFixed(2)>0?"+":"")+r.toFixed(2));for(var u=[],l=0;l<=180;l+=1)u.push(l);var d=[];if(1==this.goodsDetail.a_dd)d=this.goodsDetail.a_dd_data;else for(var c=0;c<=180;c+=1)d.push(c);var m=[];if(1==this.goodsDetail.passage)m=this.goodsDetail.passage_data;else for(var h=0;h<=180;h+=1)m.push(h);this.photometric=t.photometric,this.ball_mirrorArray=e,this.cylinder_mirrorArray=n,this.ball_mirrorArray_bk=e,this.cylinder_mirrorArray_bk=n,this.myValue=[],this.getClickGoodsAdd(),this.axisArray=u,this.sumArray=d,this.objArray=m}},setBalllist:function(){var t=this,i=0,e=0,o=[],s=this.goodsDetail,n=s.ball_min,a=s.ball_max;0==this.mirrolist.length&&(o=this.getList(n,a)),this.mirrolist.forEach((function(s){e=s.ball_min,i=s.ball_max;var n=t.getList(e,i);o=o.concat(n)})),o=Array.from(new Set(o)),o.sort((function(t,i){return t-i})),this.newballlist=o},getSumPrice:function(){var t=0;this.myValue.forEach((function(i){t+=parseFloat(i.discount_price||0)*i.product_num})),this.sumPrice=t},nomove:function(t){},getList:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=[],o=.25,s=t;s<=i;s+=o){o=s<this.goodsDetail.step&&0!=this.goodsDetail.step?.5:.25;var n=s>0?"+"+s:s;n=parseFloat(n).toFixed(2),n>0&&(n="+".concat(n)),e.push(n)}return 0==e.length&&e.push(0),e},setMyPopup:function(t,i,e){var o=this,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;this.doIndex(t),s=this.myValue[this.nowIndex];var n=s;if(console.error(this.goodsDetail.luminosity_status,"不等于1没法选球镜柱镜"),1==this.goodsDetail.luminosity_status){if(!(n.ball_mirrorIndex>=0)&&"cylinder"===i)return this.$util.showToast({title:"先选球镜"});if("ball"==i&&(e=this.newballlist),"cylinder"==i&&null!=s){var a=s.ball_mirrorArray[s.ball_mirrorIndex],r=0,u=0,l=[];return this.mirrolist.forEach((function(t){if(u=t.cylinder_min,r=t.cylinder_max,parseFloat(a)>=parseFloat(t.ball_min)&&parseFloat(a)<=parseFloat(t.ball_max)){n.sku_id=t.sku_id;var i=o.getList(u,r);l=l.concat(i)}})),l=Array.from(new Set(l)),l.sort((function(t,i){return t-i})),s.cylinder_mirrorArray=l,console.log(l,i,"0----------"),this.$refs[i].list=l,void this.$refs[i].open()}}console.log(e,i,"1----------"),this.$refs[i].list=e,"ball"==i&&0===this.$refs[i].list.length&&(this.$refs[i].list=this.ball_mirrorArray_bk),"cylinder"==i&&0===this.$refs[i].list.length&&(this.$refs[i].list=this.cylinder_mirrorArray_bk),this.$refs[i].open()},doIndex:function(t){this.nowIndex=t},getWholesale:function(t){var i=this;return r(o.default.mark((function t(){var e,s;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i.$api.sendRequest({url:"/api/member/detail",async:!1});case 2:return e=t.sent,0==e.code&&(i.is_wholesaler=e.is_wholesaler),t.next=6,i.$api.sendRequest({url:"/api/goodssku/luminosity_sku",data:{goods_id:i.goodsDetail.goods_id},async:!1});case 6:s=t.sent,delete s.timestamp,i.mirrolist=Object.values(s),i.setBalllist();case 10:case"end":return t.stop()}}),t)})))()},reset:function(){this.ball_mirrorIndex=null,this.cylinder_mirrorIndex=null,this.ball_mirrorArray=this.ball_mirrorArray_bk,this.cylinder_mirrorArray=this.cylinder_mirrorArray_bk},bindPickerChangeF:function(t){this.myValue[this.nowIndex].leftIndex=t.target.value},bindPickerChangeA:function(t){var i=this,e=this.myValue[this.nowIndex];if(e.ball_mirrorIndex=t.target.value,1==this.goodsDetail.luminosity_status)return e.ball_mirrorArray=this.newballlist,e.cylinder_mirrorIndex=null,void this.getSumPrice();var o=e.ball_mirrorArray[e.ball_mirrorIndex],s=[];if(this.cylinder_mirrorArray_bk.forEach((function(t){parseFloat(t)+parseFloat(o)>=parseFloat(i.photometric)&&s.push(t)})),null!=e.cylinder_mirrorIndex){var n=e.cylinder_mirrorArray[e.cylinder_mirrorIndex],a=s.indexOf(n);e.cylinder_mirrorIndex=-1==a?0:a}e.cylinder_mirrorArray=s},bindPickerChangeB:function(t){var i=this,e=this.myValue[this.nowIndex],o=e.cylinder_mirrorArray[t.target.value],s=this.myValue[this.nowIndex].ball_mirrorArray[this.myValue[this.nowIndex].ball_mirrorIndex];if(1==this.goodsDetail.luminosity_status)return this.mirrolist.forEach((function(t,i){t.cylinder_max>=o&&o>=t.cylinder_min&&s>=t.ball_min&&s<=t.ball_max&&(e.discount_price=t.discount_price,e.sku_id=t.sku_id)})),this.myValue[this.nowIndex].cylinder_mirrorIndex=t.target.value,e.cylinder_mirrorIndex=t.target.value,void this.getSumPrice();this.myValue[this.nowIndex].cylinder_mirrorIndex=t.target.value,e.cylinder_mirrorIndex=t.target.value;var n=e.cylinder_mirrorArray[e.cylinder_mirrorIndex],a=[];if(this.ball_mirrorArray_bk.forEach((function(t){parseFloat(t)+parseFloat(n)>=parseFloat(i.photometric)&&a.push(t)})),e.ball_mirrorIndex){var r=e.ball_mirrorArray[e.ball_mirrorIndex],u=a.indexOf(r);e.ball_mirrorIndex=-1==u?0:u}e.ball_mirrorArray=a},bindPickerChangeC:function(t){this.myValue[this.nowIndex].axisIndex=t.target.value,this.axisIndex=t.target.value},bindPickerChangeD:function(t){this.myValue[this.nowIndex].sumIndex=t.target.value,this.sumIndex=t.target.value},bindPickerChangeE:function(t){this.myValue[this.nowIndex].objIndex=t.target.value,this.objIndex=t.target.value},show:function(t,i){this.callback=i,this.$refs.skuPopup.open(i),this.type=t,this.skuId=this.goodsDetail.sku_id,this.preview=this.goodsDetail.preview||0,"pintuan"==this.type&&this.goodsDetail.pintuan_id?this.limitNumber=this.goodsDetail.buy_num:"groupbuy"==this.type&&this.goodsDetail.groupbuy_id?(this.number=this.goodsDetail.buy_num,this.minNumber=this.goodsDetail.buy_num):"bargain"==this.type&&this.goodsDetail.bargain_id?(this.number=1,this.minNumber=1):"wholesale_join_cart"!=this.type&&"wholesale_buy_now"!=this.type||!this.goodsDetail.wholesale_sku_id||(this.number=this.goodsDetail.min_num,this.minNumber=this.goodsDetail.min_num),"join_cart"==this.type&&(this.getCartData(),this.$forceUpdate())},hide:function(){this.$refs.skuPopup.close()},change:function(t,i){if(!this.disabled){this.btnSwitch=!1,this.skuId=t;for(var e=0;e<this.goodsDetail.goods_spec_format.length;e++)for(var o=this.goodsDetail.goods_spec_format[e],s=0;s<o.value.length;s++)i==this.goodsDetail.goods_spec_format[e].value[s].spec_id&&(this.goodsDetail.goods_spec_format[e].value[s].selected=!1);this.goodsDetail.pintuan_id?this.getPintuanGoodsSkuInfo():this.goodsDetail.groupbuy_id?this.getGroupbuyGoodsSkuInfo():this.goodsDetail.bargain_id?this.getBargainGoodsSkuInfo():this.goodsDetail.seckill_id?this.getSeckillGoodsSkuInfo():this.goodsDetail.topic_id?this.getTopicsGoodsSkuInfo():this.goodsDetail.exchange_id?this.getPointGoodsSkuInfo():this.goodsDetail.wholesale_sku_id?this.getWholeSaleGoodsSkuInfo():this.getGoodsSkuInfo()}},getGoodsSkuInfo:function(){var t=this,i=this;this.$api.sendRequest({url:"/api/goodssku/info",data:{sku_id:this.skuId},success:function(e){console.log(e.sku_images,"goodsSkuDetail.sku_images图片");var o=e.data;if(null!=o){o.unit=o.unit||"件";var s=o;s.sku_spec_format&&(s.sku_spec_format=JSON.parse(o.sku_spec_format)),1==s.promotion_type&&(s.discountTimeMachine=i.$util.countDown(s.end_time-e.timestamp)),1==s.promotion_type&&s.discountTimeMachine?s.show_price=s.discount_price:s.show_price=s.price,s.goods_spec_format&&(s.goods_spec_format=JSON.parse(s.goods_spec_format)),i.btnSwitch=!1,i.$emit("refresh",s)}else t.$util.redirectTo("/pages/index/index/index",{},"reLaunch")},fail:function(i){t.btnSwitch=!1,t.$util.redirectTo("/pages/index/index/index",{},"reLaunch")}})},getPintuanGoodsSkuInfo:function(){var t=this;this.$api.sendRequest({url:"/pintuan/api/goods/info",data:{sku_id:this.skuId,pintuan_id:this.goodsDetail.pintuan_id},success:function(i){var e=i.data;if(null!=e){if("again"==e.type)return t.skuId=e.sku_id,void t.getPintuanGoodsSkuInfo();e.unit=e.unit||"件",t.goodsSkuDetail=e,t.dealData(),t.goodsSkuDetail.show_price=0==t.goodsDetail.group_id?t.goodsSkuDetail.promotion_price:t.goodsSkuDetail.pintuan_price,t.goodsSkuDetail.save_price=t.goodsSkuDetail.price-t.goodsSkuDetail.show_price>0?(t.goodsSkuDetail.price-t.goodsSkuDetail.show_price).toFixed(2):0,t.goodsSkuDetail.end_time-i.timestamp>0?t.goodsSkuDetail.timeMachine=t.$util.countDown(t.goodsSkuDetail.end_time-i.timestamp):(t.$util.showToast({title:"活动已结束"}),setTimeout((function(){t.$util.redirectTo("/pages/goods/detail/detail",{sku_id:t.goodsSkuDetail.sku_id},"redirectTo")}),1e3)),t.btnSwitch=!1,t.$emit("refresh",t.goodsSkuDetail)}else t.$util.redirectTo("/pages/index/index/index",{},"reLaunch")},fail:function(i){t.btnSwitch=!1,t.$util.redirectTo("/pages/index/index/index",{},"reLaunch")}})},getBargainGoodsSkuInfo:function(){var t=this;this.$api.sendRequest({url:"/bargain/api/goods/info",data:{sku_id:this.skuId,bargain_id:this.goodsDetail.bargain_id},success:function(i){var e=i.data;if(null!=e){if("again"==e.type)return t.skuId=e.sku_id,void t.getBargainGoodsSkuInfo();e.unit=e.unit||"件",t.goodsSkuDetail=e,t.dealData(),t.goodsSkuDetail.show_price=t.goodsDetail.bargain_id>0?t.goodsSkuDetail.floor_price:t.goodsSkuDetail.price,t.goodsSkuDetail.stock=t.goodsSkuDetail.bargain_stock,t.goodsSkuDetail.save_price=t.goodsSkuDetail.price-t.goodsSkuDetail.show_price>0?(t.goodsSkuDetail.price-t.goodsSkuDetail.show_price).toFixed(2):0,t.goodsSkuDetail.end_time-i.timestamp>0?t.goodsSkuDetail.timeMachine=t.$util.countDown(t.goodsSkuDetail.end_time-i.timestamp):(t.$util.showToast({title:"活动已结束"}),setTimeout((function(){t.$util.redirectTo("/pages/goods/detail/detail",{sku_id:t.goodsSkuDetail.sku_id},"redirectTo")}),1e3)),t.btnSwitch=!1,t.$emit("refresh",t.goodsSkuDetail)}else t.$util.redirectTo("/pages/index/index/index",{},"reLaunch")},fail:function(i){t.btnSwitch=!1,t.$util.redirectTo("/pages/index/index/index",{},"reLaunch")}})},getTopicsGoodsSkuInfo:function(){var t=this;this.$api.sendRequest({url:"/topic/api/topicgoods/info",data:{sku_id:this.skuId,topic_id:this.goodsDetail.topic_id},success:function(i){var e=i.data;if(null!=e){if("again"==e.type)return t.skuId=e.sku_id,void t.getTopicsGoodsSkuInfo();e.unit=e.unit||"件",t.goodsSkuDetail=e.goods_sku_detail,t.dealData(),t.goodsSkuDetail.show_price=t.goodsDetail.topic_id>0?t.goodsSkuDetail.topic_price:t.goodsSkuDetail.price,t.goodsSkuDetail.save_price=t.goodsSkuDetail.price-t.goodsSkuDetail.show_price>0?(t.goodsSkuDetail.price-t.goodsSkuDetail.show_price).toFixed(2):0,t.goodsSkuDetail.end_time-i.timestamp>0?t.goodsSkuDetail.timeMachine=t.$util.countDown(t.goodsSkuDetail.end_time-i.timestamp):(t.$util.showToast({title:"活动已结束"}),setTimeout((function(){t.$util.redirectTo("/pages/goods/detail/detail",{sku_id:t.goodsSkuDetail.sku_id},"redirectTo")}),1e3)),t.btnSwitch=!1,t.$emit("refresh",t.goodsSkuDetail)}else t.$util.redirectTo("/pages/index/index/index",{},"reLaunch")},fail:function(i){t.btnSwitch=!1,t.$util.redirectTo("/pages/index/index/index",{},"reLaunch")}})},getGroupbuyGoodsSkuInfo:function(){var t=this;this.$api.sendRequest({url:"/groupbuy/api/goods/info",data:{sku_id:this.skuId,groupbuy_id:this.goodsDetail.groupbuy_id},success:function(i){var e=i.data;null!=e?(e.unit=e.unit||"件",t.goodsSkuDetail=e,t.dealData(),t.goodsSkuDetail.show_price=t.goodsDetail.groupbuy_price,t.goodsSkuDetail.save_price=t.goodsSkuDetail.price-t.goodsSkuDetail.show_price>0?(t.goodsSkuDetail.price-t.goodsSkuDetail.show_price).toFixed(2):0,t.goodsSkuDetail.end_time-i.timestamp>0?t.goodsSkuDetail.timeMachine=t.$util.countDown(t.goodsSkuDetail.end_time-i.timestamp):(t.$util.showToast({title:"活动已结束"}),setTimeout((function(){t.$util.redirectTo("/pages/goods/detail/detail",{sku_id:t.goodsSkuDetail.sku_id},"redirectTo")}),1e3)),t.btnSwitch=!1,t.$emit("refresh",t.goodsSkuDetail)):t.$util.redirectTo("/pages/index/index/index",{},"reLaunch")},fail:function(i){t.btnSwitch=!1,t.$util.redirectTo("/pages/index/index/index",{},"reLaunch")}})},getSeckillGoodsSkuInfo:function(){var t=this;this.$api.sendRequest({url:"/seckill/api/seckillgoods/info",data:{sku_id:this.skuId,seckill_id:this.goodsDetail.seckill_id},success:function(i){var e=i.data;if(null!=e){if("again"==e.type)return t.skuId=e.sku_id,void t.getSeckillGoodsSkuInfo();e.unit=e.unit||"件",t.goodsSkuDetail=e.goods_sku_detail,t.dealData(),t.goodsSkuDetail.show_price=t.goodsSkuDetail.seckill_price,t.goodsSkuDetail.price-t.goodsSkuDetail.show_price>0&&(t.goodsSkuDetail.price-t.goodsSkuDetail.show_price).toFixed(2),t.goodsSkuDetail.end_time-i.timestamp>0?t.goodsSkuDetail.timeMachine=t.$util.countDown(t.goodsSkuDetail.end_time-i.timestamp):(t.$util.showToast({title:"活动已结束"}),setTimeout((function(){t.$util.redirectTo("/pages/goods/detail/detail",{sku_id:t.goodsSkuDetail.sku_id},"redirectTo")}),1e3)),t.btnSwitch=!1,t.$emit("refresh",t.goodsSkuDetail)}else t.$util.redirectTo("/pages/index/index/index",{},"reLaunch")},fail:function(i){t.btnSwitch=!1,t.$util.redirectTo("/pages/index/index/index",{},"reLaunch")}})},getPointGoodsSkuInfo:function(){var t=this;this.$api.sendRequest({url:"/pointexchange/api/goods/info",data:{sku_id:this.skuId,exchange_id:this.goodsDetail.exchange_id},success:function(i){var e=i.data;if(null!=e){if("again"==e.type)return t.skuId=e.sku_id,void t.getPointGoodsSkuInfo();e.unit=e.unit||"件",t.goodsSkuDetail=e,t.dealData(),t.btnSwitch=!1,t.$emit("refresh",t.goodsSkuDetail)}else t.$util.redirectTo("/promotionpages/point/list/list",{},"redirectTo")},fail:function(i){t.btnSwitch=!1,t.$util.redirectTo("/pages/index/index/index",{},"reLaunch")}})},getWholeSaleGoodsSkuInfo:function(){var t=this;this.$api.sendRequest({url:"/wholesale/api/goods/info",data:{sku_id:this.skuId},success:function(i){var e=i.data;null!=e?(e.unit=e.unit||"件",t.goodsSkuDetail=e,t.number=t.goodsSkuDetail.min_num,t.minNumber=t.goodsSkuDetail.min_num,t.dealData(),t.btnSwitch=!1,t.$emit("refresh",t.goodsSkuDetail)):t.$util.redirectTo("/pages/index/index/index",{},"reLaunch")},fail:function(i){t.btnSwitch=!1,t.$util.redirectTo("/pages/index/index/index",{},"reLaunch")}})},getClickGoodsAdd:function(t,i){this.myValue.push({objIndex:void 0,product_num:1,sumIndex:void 0,axisIndex:void 0,cylinder_mirrorIndex:void 0,ball_mirrorIndex:void 0,leftIndex:i||0,axisValue:0,cylinder_mirrorArray:this.cylinder_mirrorArray_bk,ball_mirrorArray:this.ball_mirrorArray_bk}),this.scrollto="addbtn".concat(this.myValue.length)},removeTap:function(t){this.myValue.splice(t,1)},dealData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.goodsSkuDetail;if(t.sku_images?t.sku_images=t.sku_images.split(","):t.sku_images=[],t.goods_spec_format&&t.goods_image&&(t.goods_image=t.goods_image.split(","),t.sku_images=t.sku_images.concat(t.goods_image)),t.sku_spec_format&&(t.sku_spec_format=JSON.parse(t.sku_spec_format)),t.goods_attr_format){var i=JSON.parse(t.goods_attr_format);t.goods_attr_format=this.$util.unique(i,"attr_id");for(var e=0;e<t.goods_attr_format.length;e++)for(var o=0;o<i.length;o++)t.goods_attr_format[e].attr_id==i[o].attr_id&&t.goods_attr_format[e].attr_value_id!=i[o].attr_value_id&&(t.goods_attr_format[e].attr_value_name+="、"+i[o].attr_value_name)}t.goods_spec_format&&(t.goods_spec_format=JSON.parse(t.goods_spec_format)),this.goodsDetail.unit=this.goodsDetail.unit||"件",this.keyInput(!0),this.$langConfig.title(t.goods_name)},changeNum:function(t){if(0!=this.goodsDetail.stock){var i=this.goodsDetail.stock,e=1;if(this.maxBuy>0&&this.maxBuy<i&&(i=this.maxBuy),this.maxBuy>0&&this.goodsDetail.purchased_num>0&&(i=this.maxBuy-this.goodsDetail.purchased_num),this.minBuy>1&&(e=this.minBuy),"pintuan"==this.type&&this.goodsDetail.pintuan_id?i=this.goodsDetail.buy_num>this.goodsDetail.stock?this.goodsDetail.stock:this.goodsDetail.buy_num:"groupbuy"==this.type&&this.goodsDetail.groupbuy_id?(i=(this.goodsDetail.buy_num,this.goodsDetail.stock,this.goodsDetail.stock),e=this.goodsDetail.buy_num):"seckill"==this.type&&this.goodsDetail.seckill_id&&this.goodsDetail.num>0&&this.goodsDetail.num<this.goodsDetail.stock?i=this.goodsDetail.num:"bargain"==this.type&&this.goodsDetail.bargain_id&&(i=1),"+"==t)if(this.number<i)this.number++;else{if(this.maxBuy>0&&this.goodsDetail.purchased_num>0)return void this.$util.showToast({title:"该商品每人限购"+this.maxBuy+this.goodsDetail.unit+"，您已购买了"+this.goodsDetail.purchased_num+this.goodsDetail.unit});if(this.maxBuy>0&&this.cartNumber>0&&this.cartNumber+this.number>this.maxBuy){var o=this.maxBuy-this.cartNumber;return void(o>0?this.$util.showToast({title:"该商品每人限购"+this.maxBuy+this.goodsDetail.unit+"，购物车已加入了"+this.cartNumber+this.goodsDetail.unit+"，还能购买"+o+this.goodsDetail.unit}):this.$util.showToast({title:"该商品每人限购"+this.maxBuy+this.goodsDetail.unit}))}if("seckill"==this.type&&this.goodsDetail.seckill_id&&this.goodsDetail.num>0)return void this.$util.showToast({title:"该商品每人限购"+this.goodsDetail.num+this.goodsDetail.unit})}else if("-"==t){if(!(this.number>e))return void(this.minBuy>1&&this.$util.showToast({title:"该商品"+this.minBuy+this.goodsDetail.unit+"起售"}));this.number-=1}this.number>this.limitNumber&&this.limitNumber&&(this.number=this.limitNumber)}},blur:function(){var t=this;if(this.number||(this.number=0),this.number>this.limitNumber&&this.limitNumber&&(this.number=this.limitNumber),this.number<this.minNumber&&this.minNumber&&(this.number=this.minNumber),this.maxBuy>0&&this.number>this.maxBuy&&(this.number=this.maxBuy),this.maxBuy>0&&this.goodsDetail.purchased_num>0){var i=this.maxBuy-this.goodsDetail.purchased_num;this.number>i&&(this.number=i)}this.number<this.minBuy&&this.minBuy>0&&(this.number=this.minBuy);var e=parseInt(this.number);this.number=0,setTimeout((function(){t.number=e}),0)},keyInput:function(t,i){var e=this;setTimeout((function(){var o=e.goodsDetail.stock;0!=e.goodsDetail.stock?(t&&0==e.number.length&&(e.number=1),t&&(e.number<=0||isNaN(e.number))&&(e.number=1),"pintuan"==e.type&&e.goodsDetail.pintuan_id&&e.number>e.goodsDetail.buy_num||"groupbuy"==e.type&&e.goodsDetail.groupbuy_id&&e.number<e.goodsDetail.buy_num?e.number=e.goodsDetail.buy_num:"seckill"==e.type&&e.goodsDetail.seckill_id&&e.goodsDetail.max_buy>0&&e.number>e.goodsDetail.max_buy?e.number=e.goodsDetail.max_buy:"bargain"==e.type&&e.goodsDetail.bargain_id?e.number=1:e.number>o&&(e.number=o),e.minBuy>1&&e.number<e.minBuy&&(e.number=e.minBuy),t&&(e.number=parseInt(e.number)),i&&i()):e.number=0}),0)},confirm:function(){var i=this;t.removeStorageSync("delivery"),this.preview?this.$util.showToast({title:"预览商品无法购买"}):this.checkParam()&&(t.getStorageSync("token")?this.keyInput(!0,(function(){if(0!=i.goodsDetail.stock)if(0!=i.number.length&&0!=i.number){if(i.number>i.goodsDetail.stock)i.$util.showToast({title:"库存不足"});else if(i.maxBuy>0&&i.goodsDetail.purchased_num>0&&i.number>i.maxBuy-i.goodsDetail.purchased_num)i.$util.showToast({title:"该商品每人限购"+i.maxBuy+i.goodsDetail.unit+"，您已购买了"+i.goodsDetail.purchased_num+i.goodsDetail.unit});else if(i.maxBuy>0&&i.cartNumber>0&&i.cartNumber+i.number>i.maxBuy){var t=i.maxBuy-i.cartNumber;t>0?i.$util.showToast({title:"该商品每人限购"+i.maxBuy+i.goodsDetail.unit+"，购物车已加入了"+i.cartNumber+i.goodsDetail.unit+"，还能购买"+t+i.goodsDetail.unit}):i.$util.showToast({title:"该商品每人限购"+i.maxBuy+i.goodsDetail.unit})}else if(!i.btnSwitch){i.btnSwitch=!0;i.myValue.forEach((function(t){t.leftIndex,t.cylinder_mirrorIndex,t.ball_mirrorIndex,t.axisIndex,t.objIndex,t.sumIndex,t.product_num,t.sku_id}));var e=[];i.myValue.map((function(t){e.push({eye:0==t.leftIndex?"右眼":"左眼",passage:i.objArray[t.objIndex],a_dd:i.sumArray[t.sumIndex],num:t.product_num,ball_mirror:t.ball_mirrorArray[t.ball_mirrorIndex],cylinder_mirror:t.cylinder_mirrorArray[t.cylinder_mirrorIndex],axis:t.axisValue,sku_id:t.sku_id})})),"join_cart"==i.type&&i.postJoinCart(e),"buy_now"==i.type&&i.postBuyNow(),"seckill"==i.type&&i.postSeckill(),"pintuan"==i.type&&i.postPintuan(),"topic"==i.type&&i.postTopic(),"groupbuy"==i.type&&i.postGroupBuy(),"presale"==i.type&&i.postPresale(),"bargain"==i.type&&i.postBargain(),"point"==i.type&&i.postPoint(),"wholesale_join_cart"==i.type&&i.postPfJoin(),"wholesale_buy_now"==i.type&&i.postPfBuy(),i.myValue=[],i.getClickGoodsAdd(),console.error(i.goodsDetail.rimless,"rimless"),1==i.goodsDetail.rimless&&(i.rimless=i.goodsDetail.rimless,i.getClickGoodsAdd({},1))}}else i.$util.showToast({title:"购买数量不能为0"});else i.$util.showToast({title:"商品已售罄"})})):this.$refs.login.open())},checkParam:function(){var t=this,i=!0;return 0==this.goodsDetail.photometric&&1!=this.goodsDetail.luminosity_status||this.myValue.forEach((function(e){return void 0==e.ball_mirrorArray[e.ball_mirrorIndex]?(t.$util.showToast({title:"请选择球镜"}),void(i=!1)):void 0==e.cylinder_mirrorArray[e.cylinder_mirrorIndex]?(t.$util.showToast({title:"请选择柱镜"}),void(i=!1)):void 0==e.sumIndex&&1==t.goodsDetail.a_dd?(t.$util.showToast({title:"请选择ADD"}),void(i=!1)):void 0==e.objIndex&&1==t.goodsDetail.passage?(t.$util.showToast({title:"请选择通道"}),void(i=!1)):(t.quantity+=e.product_num,t.goodsDetail.stock<=e.product_num?(t.$util.showToast({title:"请不要大于库存数量"}),void(i=!1)):void 0)})),i},postJoinCart:function(t){var i=this,e=this.number,o=0!=this.goodsDetail.photometric||1==this.goodsDetail.luminosity_status?{sku_id:this.skuId,site_id:this.goodsDetail.site_id,list:JSON.stringify(t),buyer_message:this.buyer_message,rimless:this.rimless}:{site_id:this.goodsDetail.site_id,sku_id:this.skuId,ball_mirror:null!=this.ball_mirrorIndex?this.ball_mirrorArray[this.ball_mirrorIndex]:0,cylinder_mirror:null!=this.cylinder_mirrorIndex?this.cylinder_mirrorArray[this.cylinder_mirrorIndex]:0,axis:this.axisValue,a_dd_data:null!=this.sumIndex?this.sumIndex[this.sumIndex]:0,passage_data:null!=this.objIndex?this.objIndex[this.objIndex]:0,num:e,buyer_message:this.buyer_message,rimless:this.rimless};this.$api.sendRequest({url:"/api/cart/add",data:o,success:function(t){var e=t.data;e>0&&(i.$util.showToast({title:"加入购物车成功"}),i.callback&&i.callback()),i.$refs.skuPopup.close(),i.btnSwitch=!1},fail:function(t){i.$refs.skuPopup.close(),i.btnSwitch=!1}})},postBuyNow:function(){var i=this,e={sku_id:this.skuId,num:this.number,ball_mirror:null!=this.ball_mirrorIndex?this.ball_mirrorArray[this.ball_mirrorIndex]:0,cylinder_mirror:null!=this.cylinder_mirrorIndex?this.cylinder_mirrorArray[this.cylinder_mirrorIndex]:0,axis:null!=this.axisIndex?this.axisArray[this.axisIndex]:0};t.setStorage({key:"orderCreateData",data:e,success:function(){i.$util.redirectTo("/pages/order/payment/payment"),i.btnSwitch=!1}})},postSeckill:function(){var i=this,e={seckill_id:this.goodsDetail.seckill_id,num:this.number,sku_id:this.skuId};t.setStorage({key:"seckillOrderCreateData",data:e,success:function(){i.$util.redirectTo("/promotionpages/seckill/payment/payment"),i.btnSwitch=!1}})},postPintuan:function(){var i=this,e={pintuan_goods_id:this.goodsDetail.id,group_id:this.goodsDetail.group_id,num:this.number};t.setStorage({key:"pintuanOrderCreateData",data:e,success:function(){i.$util.redirectTo("/promotionpages/pintuan/payment/payment"),i.btnSwitch=!1}})},postTopic:function(){var i=this,e={topic_goods_id:this.goodsDetail.id,num:this.number};t.setStorage({key:"topicOrderCreateData",data:e,success:function(){i.$util.redirectTo("/promotionpages/topics/payment/payment"),i.btnSwitch=!1}})},postGroupBuy:function(){var i=this,e={groupbuy_id:this.goodsDetail.groupbuy_id,sku_id:this.skuId,num:this.number};t.setStorage({key:"groupbuyOrderCreateData",data:e,success:function(){i.$util.redirectTo("/promotionpages/groupbuy/payment/payment"),i.btnSwitch=!1}})},postPresale:function(){var i=this,e={presale_id:this.goodsDetail.presale_id,sku_id:this.skuId,num:this.number};t.setStorage({key:"presaleOrderCreateData",data:e,success:function(){i.$util.redirectTo("/promotionpages/presale/payment/payment"),i.btnSwitch=!1}})},postBargain:function(){var t=this;this.$api.sendRequest({url:"/bargain/api/bargain/launch",data:{id:this.goodsDetail.id},success:function(i){t.btnSwitch=!1,0==i.code?t.$util.redirectTo("/promotionpages/bargain/launch/launch",{id:i.data},"redirectTo"):t.$util.showToast({title:i.message})}})},postPoint:function(){var i=this,e={id:this.goodsDetail.exchange_id,sku_id:this.skuId,num:this.number};t.setStorage({key:"exchangeOrderCreateData",data:e,success:function(){i.$util.redirectTo("/promotionpages/point/payment/payment"),i.btnSwitch=!1}})},postPfJoin:function(){var t=this;this.$api.sendRequest({url:"/wholesale/api/cart/add",data:{site_id:this.goodsDetail.site_id,sku_id:this.skuId,num:this.number},success:function(i){var e=i.data;e>0&&(t.$util.showToast({title:"加入进货单成功"}),t.callback&&t.callback(),t.$store.dispatch("getWholeSaleNumber")),t.$refs.skuPopup.close(),t.btnSwitch=!1},fail:function(i){t.$refs.skuPopup.close(),t.btnSwitch=!1}})},postPfBuy:function(){var i=this,e={sku_id:this.skuId,num:this.number};t.setStorage({key:"wholesaleOrderCreateData",data:e,success:function(){i.$util.redirectTo("/promotionpages/wholesale/payment/payment"),i.btnSwitch=!1}})},closeSkuPopup:function(){this.$refs.skuPopup.close()},imgError:function(){this.goodsDetail.sku_image=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()},valueImgError:function(t,i){this.goodsDetail.goods_spec_format[t].value[i].image=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()},getCartData:function(){var t=this;this.$api.sendRequest({url:"/api/cart/goodslists",success:function(i){if(i.code>=0)for(var e=i.data,o=0;o<e.length;o++)if(e[o].sku_id==t.goodsDetail.sku_id){t.cartNumber=e[o].num;break}}})}}};i.default=l}).call(this,e("543d")["default"])},"924b":function(t,i,e){"use strict";e.d(i,"b",(function(){return s})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){return o}));var o={uniPopup:function(){return e.e("components/uni-popup/uni-popup").then(e.bind(null,"fa04"))},nsLogin:function(){return Promise.all([e.e("common/vendor"),e.e("components/ns-login/ns-login")]).then(e.bind(null,"b96a"))},myPopupSelect:function(){return e.e("components/my-popup-select/my-popup-select").then(e.bind(null,"4aa2"))}},s=function(){var t=this,i=t.$createElement,e=(t._self._c,"point"==t.type&&t.goodsDetail.type&&1!=t.goodsDetail.type&&2==t.goodsDetail.type&&t.goodsDetail.image?t.$util.img(t.goodsDetail.image):null),o="point"==t.type&&t.goodsDetail.type&&1!=t.goodsDetail.type&&2==t.goodsDetail.type&&!t.goodsDetail.image?t.$util.img("upload/uniapp/point/coupon.png"):null,s="point"==t.type&&t.goodsDetail.type&&1!=t.goodsDetail.type&&3==t.goodsDetail.type&&t.goodsDetail.image?t.$util.img(t.goodsDetail.image):null,n="point"==t.type&&t.goodsDetail.type&&1!=t.goodsDetail.type&&3==t.goodsDetail.type&&!t.goodsDetail.image?t.$util.img("upload/uniapp/point/hongbao.png"):null,a="point"==t.type&&t.goodsDetail.type&&1!=t.goodsDetail.type?null:t.$util.img(t.goodsDetail.sku_image,{size:"mid"}),r="point"==t.type&&1==t.goodsDetail.type&&"0.00"!=t.goodsDetail.exchange_price&&t.goodsDetail.pay_type>0?t.$lang("common.currencySymbol"):null,u=t.__map(t.goodsDetail.goods_spec_format,(function(i,e){var o=t.__get_orig(i),s=1!=t.goodsDetail.luminosity_status?t.__map(i.value,(function(i,e){var o=t.__get_orig(i),s=i.image?t.$util.img(i.image,{size:"small"}):null;return{$orig:o,g5:s}})):null;return{$orig:o,l0:s}}));t.$mp.data=Object.assign({},{$root:{g0:e,g1:o,g2:s,g3:n,g4:a,m0:r,l1:u}})},n=[]},"94ce":function(t,i,e){"use strict";e.r(i);var o=e("adfc"),s=e.n(o);for(var n in o)"default"!==n&&function(t){e.d(i,t,(function(){return o[t]}))}(n);i["default"]=s.a},adfc:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;a(e("e60b"));var o=a(e("13ce")),s=a(e("46da")),n=a(e("a5a8"));function a(t){return t&&t.__esModule?t:{default:t}}var r=function(){e.e("components/ns-goods-action/ns-goods-action").then(function(){return resolve(e("e021"))}.bind(null,e)).catch(e.oe)},u=function(){e.e("components/ns-goods-action-icon/ns-goods-action-icon").then(function(){return resolve(e("4fd2"))}.bind(null,e)).catch(e.oe)},l=function(){e.e("components/ns-goods-action-button/ns-goods-action-button").then(function(){return resolve(e("cb13"))}.bind(null,e)).catch(e.oe)},d=function(){e.e("components/uni-popup/uni-popup").then(function(){return resolve(e("fa04"))}.bind(null,e)).catch(e.oe)},c=function(){Promise.all([e.e("common/vendor"),e.e("components/ns-goods-recommend/ns-goods-recommend")]).then(function(){return resolve(e("2ce6"))}.bind(null,e)).catch(e.oe)},m=function(){e.e("components/uni-count-down/uni-count-down").then(function(){return resolve(e("1043"))}.bind(null,e)).catch(e.oe)},h=function(){e.e("components/toTop/toTop").then(function(){return resolve(e("9b08"))}.bind(null,e)).catch(e.oe)},g=function(){Promise.all([e.e("common/vendor"),e.e("components/u-parse/u-parse")]).then(function(){return resolve(e("1e01"))}.bind(null,e)).catch(e.oe)},p={components:{nsGoodsAction:r,nsGoodsActionIcon:u,nsGoodsActionButton:l,uniPopup:d,nsGoodsRecommend:c,uniCountDown:m,toTop:h,uParse:g},data:function(){return{kefuConfig:{weapp:"",system:"",open:"",open_url:""}}},mixins:[o.default,s.default,n.default],onShareAppMessage:function(t){var i="/promotionpages/wholesale/detail/detail?goods_id="+this.goodsId;return this.memberId&&(i+="&source_member="+this.memberId),{title:this.goodsSkuDetail.sku_name,imageUrl:this.$util.img(this.goodsSkuDetail.sku_image,{size:"big"}),path:i,success:function(t){},fail:function(t){}}},onShareTimeline:function(){var t="goods_id="+this.goodsId;return this.memberId&&(t+="&source_member="+this.memberId),{title:this.goodsSkuDetail.sku_name,query:t,imageUrl:this.$util.img(this.goodsSkuDetail.sku_image,{size:"big"})}}};i.default=p},c00a:function(t,i,e){"use strict";(function(t){e("f871");o(e("66fd"));var i=o(e("f9c3"));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(i.default)}).call(this,e("543d")["createPage"])},d863:function(t,i,e){},da65:function(t,i,e){"use strict";var o=e("e2ff"),s=e.n(o);s.a},e2ff:function(t,i,e){},e60b:function(t,i,e){"use strict";e.r(i);var o=e("924b"),s=e("62b0");for(var n in s)"default"!==n&&function(t){e.d(i,t,(function(){return s[t]}))}(n);e("714a"),e("3769");var a,r=e("f0c5"),u=Object(r["a"])(s["default"],o["b"],o["c"],!1,null,"689e99f6",null,!1,o["a"],a);i["default"]=u.exports},e6ad:function(t,i,e){},f9c3:function(t,i,e){"use strict";e.r(i);var o=e("3261"),s=e("94ce");for(var n in s)"default"!==n&&function(t){e.d(i,t,(function(){return s[t]}))}(n);e("da65"),e("09c1");var a,r=e("f0c5"),u=Object(r["a"])(s["default"],o["b"],o["c"],!1,null,"38d47284",null,!1,o["a"],a);i["default"]=u.exports}},[["c00a","common/runtime","common/vendor"]]]);