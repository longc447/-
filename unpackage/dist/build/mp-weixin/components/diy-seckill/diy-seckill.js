(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/diy-seckill/diy-seckill"],{"1d9f":function(t,e,i){"use strict";var l=i("85e8"),s=i.n(l);s.a},"228c":function(t,e,i){"use strict";i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return l}));var l={nsEmpty:function(){return i.e("components/ns-empty/ns-empty").then(i.bind(null,"467b"))}},s=function(){var t=this,e=t.$createElement,i=(t._self._c,t.timeList.length>1||1==t.timeList.length&&t.dataList.length?t.$util.img("/upload/uniapp/bargain/"+t.value.bgSelect+".png"):null),l=(t.timeList.length>1||1==t.timeList.length&&t.dataList.length)&&t.value.list.imageUrl?t.$util.img(t.value.list.imageUrl):null,s=t.timeList.length>1||1==t.timeList.length&&t.dataList.length?t.__map(t.timeList,(function(e,i){var l=t.__get_orig(e),s=t.transformSeckillTime(e.seckill_start_time);return{$orig:l,m0:s}})):null,n=(t.timeList.length>1||1==t.timeList.length&&t.dataList.length)&&1==t.value.changeType&&t.dataList.length?t.__map(t.dataList,(function(e,i){var l=t.__get_orig(e),s=t.goodsImg(e.goods_image);return{$orig:l,m1:s}})):null,a=(t.timeList.length>1||1==t.timeList.length&&t.dataList.length)&&2==t.value.changeType&&t.dataList.length?t.__map(Math.ceil(t.dataList.length/3),(function(e,i){var l=t.__get_orig(e),s=t.__map(t.dataList,(function(i,l){var s=t.__get_orig(i),n=l<3*(e+1)&&l>=3*e?t.goodsImg(i.goods_image):null;return{$orig:s,m2:n}}));return{$orig:l,l2:s}})):null;t._isMounted||(t.e0=function(e,i,l){var s=arguments[arguments.length-1].currentTarget.dataset,n=s.eventParams||s["event-params"];i=n.dataItem,l=n.dataIndex;return t.toDetail(i.id,l)},t.e1=function(e,i){var l=arguments[arguments.length-1].currentTarget.dataset,s=l.eventParams||l["event-params"];i=s.dataIndex;return t.imgError(i)}),t.$mp.data=Object.assign({},{$root:{g0:i,g1:l,l0:s,l1:n,l3:a}})},n=[]},"85e8":function(t,e,i){},a4e3:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=s(i("faec"));function s(t){return t&&t.__esModule?t:{default:t}}var n={name:"diy-seckill",props:{value:{type:Object},siteId:{type:[Number,String],default:0},name:{type:String,default:function(){return""}}},mixins:[l.default],data:function(){return{seckillId:0,seckillIndex:null,index:null,timeList:[],dataList:[],isNow:!1,seckillH:"",seckillI:"",seckillS:"",seckillName:"",current:0,seckillInterval:null}},created:function(){this.getTimeList(),this.$store.commit("setDiySeckillInterval",1)},watch:{diySeckillInterval:function(t,e){0==t?clearInterval(this.seckillInterval):1==t&&this.getTimeList()}},methods:{changeCurrent:function(t){this.current=t.detail.current},transformSeckillTime:function(t){t=parseFloat(t);var e=parseInt(t/3600),i=parseInt(t%3600/60),l=parseInt(t%60);return e<10&&(e="0"+e),i<10&&(i="0"+i),l<10&&(l="0"+l),e+":"+i},goodsImg:function(t){var e=t.split(",");return e[0]?this.$util.img(e[0],{size:"mid"}):this.$util.getDefaultImage().default_goods_img},isEnd:function(t){t&&this.$util.showToast({title:"限时秒杀活动已结束"})},getTimeList:function(){var t=this;clearInterval(this.seckillInterval),this.seckillId=0,this.isNow=!1,this.seckillH="",this.seckillI="",this.seckillS="",this.$api.sendRequest({url:"/seckill/api/seckill/lists",data:{site_id:this.siteId},success:function(e){var i=e.data,l=new Date(1e3*e.timestamp),s=60*l.getHours()*60+60*l.getMinutes()+l.getSeconds();if(i.list instanceof Array)n=i.list;else var n=Object.values(i.list);if(n.forEach((function(e,i){e.seckill_start_time<=s&&s<e.seckill_end_time?(t.seckillId=e.id,t.index=i,t.seckillIndex=i,t.isNow=!0,e.isNow=!0):e.isNow=!1})),!t.seckillId)for(var a=0;a<n.length;a++)(s<n[a].seckill_start_time&&0==a||s<n[a].seckill_start_time&&s>n[a-1].seckill_end_time&&0!=a||a==n.length-1&&s>n[a].seckill_end_time)&&(t.seckillId=n[a].id,t.index=a,t.seckillIndex=a);if(t.isNow&&n.length){var r=t;t.seckillInterval=setInterval((function(){var t=new Date,e=60*t.getHours()*60+60*t.getMinutes()+t.getSeconds(),i=r.$util.countDown(n[r.index].seckill_end_time-e);if(r.seckillH=i.h,r.seckillI=i.i,r.seckillS=i.s,"00"==r.seckillH&&"00"==r.seckillI&&"00"==r.seckillS)var l=setTimeout((function(){r.$store.commit("setDiySeckillInterval",0),r.isNow=!1,r.seckillH="",r.seckillI="",r.seckillS="",r.index=1,clearTimeout(l)}),2e3)}),1e3)}t.timeList=n,t.seckillId&&t.getDataList(t.seckillId)}})},getDataList:function(t){var e=this,i={seckill_id:t};"DIY_VIEW_CITY_INDEX"==this.name&&this.siteId?i.website_id=this.siteId:i.site_id=this.siteId,this.$api.sendRequest({url:"/seckill/api/seckillgoods/page",data:i,success:function(t){var i=t.data;i.list&&(e.dataList=i.list)}})},ontabtap:function(t,e){this.seckillId=t,this.seckillIndex=e,this.current=0,this.getDataList(this.seckillId)},toMore:function(){this.$util.redirectTo("/promotionpages/seckill/list/list",{site_id:this.siteId})},toDetail:function(t,e){this.seckillIndex<this.index?this.$util.showToast({title:"秒杀活动已结束！"}):this.seckillIndex>this.index?this.$util.showToast({title:"秒杀活动还未开启，敬请期待！"}):this.isNow?this.$util.redirectTo("/promotionpages/seckill/detail/detail",{seckill_id:t}):this.$util.showToast({title:"活动还未开始，敬请期待"})},imgError:function(t){this.dataList[t].goods_image=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()}}};e.default=n},b73a:function(t,e,i){"use strict";i.r(e);var l=i("a4e3"),s=i.n(l);for(var n in l)"default"!==n&&function(t){i.d(e,t,(function(){return l[t]}))}(n);e["default"]=s.a},c7bb:function(t,e,i){"use strict";i.r(e);var l=i("228c"),s=i("b73a");for(var n in s)"default"!==n&&function(t){i.d(e,t,(function(){return s[t]}))}(n);i("1d9f");var a,r=i("f0c5"),c=Object(r["a"])(s["default"],l["b"],l["c"],!1,null,null,null,!1,l["a"],a);e["default"]=c.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/diy-seckill/diy-seckill-create-component',
    {
        'components/diy-seckill/diy-seckill-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("c7bb"))
        })
    },
    [['components/diy-seckill/diy-seckill-create-component']]
]);
