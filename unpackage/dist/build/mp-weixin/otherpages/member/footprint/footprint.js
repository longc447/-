(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["otherpages/member/footprint/footprint"],{"0044":function(t,e,i){"use strict";var n=i("80f6"),r=i.n(n);r.a},"5cdc":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(i("faec"));function r(t){return t&&t.__esModule?t:{default:t}}var o=[],s={data:function(){return{goodsList:[],current:-1,manage:!1,idArr:[],mescroll:null,isSub:!1}},mixins:[n.default],onShow:function(){this.$langConfig.refresh()},computed:{selected:function(){return 0==this.idArr.length},isAll:function(){return this.idArr.length==this.goodsList.length}},methods:{getListData:function(t){var e=this;this.mescroll=t,this.$api.sendRequest({url:"/api/goodsbrowse/page",data:{page:t.num,page_size:t.size},success:function(i){var n=[],r=i.message;0==i.code&&i.data?n=i.data.list:e.$util.showToast({title:r}),t.endSuccess(n.length),1==t.num&&(e.goodsList=[]),e.goodsList=e.goodsList.concat(n),e.$refs.loadingCover&&e.$refs.loadingCover.hide()},fail:function(i){t.endErr(),e.$refs.loadingCover&&e.$refs.loadingCover.hide()}})},longpress:function(t){this.current=t},deleteFootprint:function(t){var e=this;0!=this.idArr.length?this.isSub||(this.isSub=!0,this.$api.sendRequest({url:"/api/goodsbrowse/delete",data:{id:this.idArr.toString()},success:function(t){e.isSub=!1,t.code>=0?(e.idArr=[],e.mescroll.resetUpScroll()):e.$util.showToast({title:t.message})}})):this.$util.showToast({title:"请选择要删除的数据！"})},manageFootprint:function(){this.manage=!this.manage,o=[]},goodsImg:function(t){var e=t.split(",");return e[0]?this.$util.img(e[0],{size:"mid"}):this.$util.getDefaultImage().default_goods_img},imgError:function(t){o=[],this.goodsList[t].goods_image=this.$util.getDefaultImage().default_goods_img},showPrice:function(t){var e=t.discount_price;return t.member_price&&parseFloat(t.member_price)<parseFloat(e)&&(e=t.member_price),e},goodsTag:function(t){switch(t.recommend_way){case 1:return"新品";case 2:return"精品";case 3:return"推荐";default:return""}},datetime:function(t){var e=new Date;e.setTime(1e3*t.browse_time);var i=e.getFullYear(),n=e.getMonth()+1;n=n<10?"0"+n:n;var r=e.getDate();r=r<10?"0"+r:r;var s=i+"/"+n+"/"+r;if(-1==this.$util.inArray(s,o))return o.push(s),s},singleElection:function(t){-1==this.$util.inArray(t.id,this.idArr)?this.idArr.push(t.id):this.idArr.splice(this.$util.inArray(t.id,this.idArr),1),o=[]},allElection:function(){if(this.idArr.length!=this.goodsList.length){this.idArr=[];var t=[];this.goodsList.forEach((function(e){t.push(e.id)})),this.idArr=t}else this.idArr=[];o=[]},toDetail:function(t){this.$util.redirectTo("/pages/goods/detail/detail",{sku_id:t.sku_id})}}};e.default=s},6030:function(t,e,i){"use strict";i.r(e);var n=i("5cdc"),r=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=r.a},"7e9e":function(t,e,i){"use strict";(function(t){i("c5b8");n(i("66fd"));var e=n(i("8bcc"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("543d")["createPage"])},"80f6":function(t,e,i){},"8bcc":function(t,e,i){"use strict";i.r(e);var n=i("fd72"),r=i("6030");for(var o in r)"default"!==o&&function(t){i.d(e,t,(function(){return r[t]}))}(o);i("0044");var s,u=i("f0c5"),a=Object(u["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],s);e["default"]=a.exports},fd72:function(t,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={nsEmpty:function(){return i.e("components/ns-empty/ns-empty").then(i.bind(null,"467b"))},loadingCover:function(){return i.e("components/loading-cover/loading-cover").then(i.bind(null,"f410"))}},r=function(){var t=this,e=t.$createElement,i=(t._self._c,t.$lang("common.currencySymbol")),n=t.$lang("common.currencySymbol"),r=t.goodsList.length?t.__map(t.goodsList,(function(e,i){var n=t.__get_orig(e),r=t.datetime(e),o=t.manage?t.$util.inArray(e.id,t.idArr):null,s=t.goodsImg(e.goods_image),u=t.goodsTag(e),a=""!=u?t.goodsTag(e):null,l=t.showPrice(e),c=1==e.promotion_type?t.$util.img("upload/uniapp/index/discount.png"):null;return{$orig:n,m0:r,g0:o,m1:s,m2:u,m3:a,m6:l,g1:c}})):null;t.$mp.data=Object.assign({},{$root:{m4:i,m5:n,l0:r}})},o=[]}},[["7e9e","common/runtime","common/vendor"]]]);