(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["otherpages/member/level/level"],{"07f8":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=u(t("faec")),o=u(t("6756"));function u(e){return e&&e.__esModule?e:{default:e}}var l=function(){t.e("otherpages/components/ns-progress/ns-progress").then(function(){return resolve(t("a00f"))}.bind(null,t)).catch(t.oe)},r=function(){t.e("components/toTop/toTop").then(function(){return resolve(t("fe2d"))}.bind(null,t)).catch(t.oe)},s=function(){t.e("components/uni-popup/uni-popup").then(function(){return resolve(t("b9d3"))}.bind(null,t)).catch(t.oe)},c={components:{nsProgress:l,toTop:r,uniPopup:s},mixins:[o.default,i.default],data:function(){return{couponPopList:[],curIndex:0,descIndex:0,isDescAnimating:!1,scaleX:(634/540).toFixed(4),scaleY:(378/330).toFixed(4),swiperConfig:{indicatorDots:!1,indicatorColor:"rgba(255, 255, 255, .4)",indicatorActiveColor:"rgba(255, 255, 255, 1)",interval:3e3,duration:300,circular:!1,previousMargin:"58rpx",nextMargin:"58rpx"},levelList:[{needGrowth:0,growth:0}],levelId:0,growth:0,nowIndex:0,userInfo:{},rule:[]}},computed:{listLen:function(){return this.levelList.length},remark:function(){if(this.levelList[this.curIndex])return this.levelList[this.curIndex].remark},baseColor:function(){return this.$store.state.baseColor},nextIndex:function(){return this.curIndex==this.levelList.length-1?this.curIndex:this.curIndex+1}},onLoad:function(){this.getLevelList(),this.getLevelRule()},onShow:function(){this.$langConfig.refresh()},filters:{rate:function(e,n,t){var i=Number(t),o=Number(n[e].growth);if(e==n.length-1)return i>o?100:0;var u=Number(n[e+1].growth),l=i-o,r=u-o,s=Math.floor(l/r*100);return s>100?100:s}},methods:{swiperChange:function(e){var n=this;this.curIndex=e.detail.current,this.isDescAnimating=!0;var t=setTimeout((function(){n.descIndex=e.detail.current,clearTimeout(t)}),150)},animationfinish:function(e){this.isDescAnimating=!1},getBannerDetail:function(n){e.showLoading({title:"将前往详情页面",duration:2e3,mask:!0})},getLevelList:function(){var e=this;this.$api.sendRequest({url:"/api/memberlevel/lists",success:function(n){if(n.data&&0==n.code){e.levelList=n.data;for(var t=0;t<e.levelList.length;t++)e.levelList[t].send_coupon&&(e.levelList[t].coupon_length=e.levelList[t].send_coupon.split(",").length);e.getMemberInfo()}else e.$util.showToast({title:n.message}),e.$refs.loadingCover&&e.$refs.loadingCover.hide()}})},getLevelRule:function(){var e=this;this.$api.sendRequest({url:"/api/member/accountrule",success:function(n){0==n.code&&n.data&&n.data.growth&&(e.rule=n.data.growth)}})},getMemberInfo:function(){var e=this;this.$api.sendRequest({url:"/api/member/info",success:function(n){n.data&&0==n.code?(e.levelId=n.data.member_level,e.growth=n.data.growth,e.userInfo=n.data,e.levelList.forEach((function(t,i){if(t.level_id==n.data.member_level)return e.curIndex=i,e.descIndex=i,void(e.nowIndex=i)})),e.levelList.forEach((function(n,t){parseFloat(n.growth)<parseFloat(e.growth)?(n.needGrowth=0,n.rate=100):(n.needGrowth=(parseFloat(n.growth)-parseFloat(e.growth)).toFixed(2),n.rate=100*(e.growth/n.growth).toFixed(2))})),e.levelList.forEach((function(e){e.consume_discount&&(e.consume_discount=(e.consume_discount/10).toFixed(2))}))):e.$util.showToast({title:n.message}),e.$refs.loadingCover&&e.$refs.loadingCover.hide()},fail:function(n){e.$refs.loadingCover&&e.$refs.loadingCover.hide()}})},growthRules:function(){this.$util.redirectTo("/otherpages/member/level/level_growth_rules")},openCoupon:function(e){var n=this;this.couponPopList=[],this.$api.sendRequest({url:"/coupon/api/coupon/couponbyid",data:{id:e},success:function(e){e.code>=0&&(n.couponPopList=e.data)}}),this.$refs.couponPopup.open()},closeCoupon:function(){this.$refs.couponPopup.close()}},onBackPress:function(e){return"navigateBack"!==e.from&&(this.$util.redirectTo("/pages/member/index/index",{},"reLaunch"),!0)}};n.default=c}).call(this,t("543d")["default"])},"2b6a":function(e,n,t){"use strict";var i=t("4fbb"),o=t.n(i);o.a},"4fbb":function(e,n,t){},b43e:function(e,n,t){"use strict";(function(e){t("c5b8");i(t("66fd"));var n=i(t("ff9e"));function i(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},c2ca:function(e,n,t){"use strict";t.r(n);var i=t("07f8"),o=t.n(i);for(var u in i)"default"!==u&&function(e){t.d(n,e,(function(){return i[e]}))}(u);n["default"]=o.a},f2e8:function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return u})),t.d(n,"a",(function(){return i}));var i={uniPopup:function(){return t.e("components/uni-popup/uni-popup").then(t.bind(null,"b9d3"))},loadingCover:function(){return t.e("components/loading-cover/loading-cover").then(t.bind(null,"f410"))}},o=function(){var e=this,n=e.$createElement,t=(e._self._c,e.$util.img("/upload/uniapp/level/level-top-bg.png")),i=e.userInfo.headimg?e.$util.img(e.userInfo.headimg):null,o=e.userInfo.headimg?null:e.$util.getDefaultImage(),u=e.__map(e.levelList,(function(n,t){var i=e.__get_orig(n),o=e.$util.img("upload/uniapp/level/level_"+(Number(t%5)+1)+".png");return{$orig:i,g3:o}})),l=(e.levelList[e.curIndex].is_free_shipping>0||e.levelList[e.curIndex].consume_discount>0||e.levelList[e.curIndex].point_feedback>0)&&e.levelList[e.curIndex].is_free_shipping>0?e.$util.img("upload/uniapp/level/exemption_postage.png"):null,r=(e.levelList[e.curIndex].is_free_shipping>0||e.levelList[e.curIndex].consume_discount>0||e.levelList[e.curIndex].point_feedback>0)&&e.levelList[e.curIndex].consume_discount>0?e.$util.img("upload/uniapp/level/consumption_discount.png"):null,s=(e.levelList[e.curIndex].is_free_shipping>0||e.levelList[e.curIndex].consume_discount>0||e.levelList[e.curIndex].point_feedback>0)&&e.levelList[e.curIndex].point_feedback>0?e.$util.img("upload/uniapp/level/integral_feedback.png"):null,c=(e.levelList[e.curIndex].send_balance>0||e.levelList[e.curIndex].send_balance>0||e.levelList[e.curIndex].send_coupon)&&e.levelList[e.curIndex].send_point>0?e.$util.img("upload/uniapp/level/integral.png"):null,a=(e.levelList[e.curIndex].send_balance>0||e.levelList[e.curIndex].send_balance>0||e.levelList[e.curIndex].send_coupon)&&e.levelList[e.curIndex].send_balance>0?e.$util.img("upload/uniapp/level/red_packet.png"):null,d=(e.levelList[e.curIndex].send_balance>0||e.levelList[e.curIndex].send_balance>0||e.levelList[e.curIndex].send_coupon)&&e.levelList[e.curIndex].send_coupon?e.$util.img("upload/uniapp/level/coupon.png"):null,p=e.__map(e.couponPopList,(function(n,t){var i=e.__get_orig(n),o="discount"==n.type?e.$util.numberFixed(n.discount,1):null;return{$orig:i,g10:o}}));e._isMounted||(e.e0=function(n){e.userInfo.headimg=e.$util.getDefaultImage().default_headimg}),e.$mp.data=Object.assign({},{$root:{g0:t,g1:i,g2:o,l0:u,g4:l,g5:r,g6:s,g7:c,g8:a,g9:d,l1:p}})},u=[]},ff9e:function(e,n,t){"use strict";t.r(n);var i=t("f2e8"),o=t("c2ca");for(var u in o)"default"!==u&&function(e){t.d(n,e,(function(){return o[e]}))}(u);t("2b6a");var l,r=t("f0c5"),s=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],l);n["default"]=s.exports}},[["b43e","common/runtime","common/vendor"]]]);