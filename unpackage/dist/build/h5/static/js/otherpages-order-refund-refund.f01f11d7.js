(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["otherpages-order-refund-refund"],{"2b5c":function(e,t,i){"use strict";var o=i("bcb5"),a=i.n(o);a.a},4054:function(e,t,i){var o=i("4e2f");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var a=i("4f06").default;a("2c7472e0",o,!0,{sourceMap:!1,shadowMode:!1})},"4e2f":function(e,t,i){var o=i("24fb");t=o(!1),t.push([e.i,"[data-v-550ef9e4] .uni-popup__wrapper.uni-custom .uni-popup__wrapper-box{background:none;max-height:unset!important;overflow-y:hidden!important}",""]),e.exports=t},"5fff":function(e,t,i){"use strict";i.r(t);var o=i("766d"),a=i.n(o);for(var n in o)"default"!==n&&function(e){i.d(t,e,(function(){return o[e]}))}(n);t["default"]=a.a},"766d":function(e,t,i){"use strict";var o=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(i("fa04")),n=o(i("a5a8")),r={components:{uniPopup:a.default},mixins:[n.default],data:function(){return{order_goods_id:"",refund_type:"",refund_reason:"",refund_remark:"",isIphoneX:!1,refund_data:{refund_type:[],order_goods_info:{sku_image:""}},isSub:!1,showText:!1}},onLoad:function(e){e.order_goods_id&&(this.order_goods_id=e.order_goods_id)},onShow:function(){this.$langConfig.refresh(),this.isIphoneX=this.$util.uniappIsIPhoneX(),uni.getStorageSync("token")?this.getRefundData():this.$util.redirectTo("/pages/login/login/login",{back:"/otherpages/order/refund/refund?order_goods_id="+this.order_goods_id})},methods:{openPopup:function(e){this.$refs[e].open()},closePopup:function(e){this.$refs[e].close()},textBlur:function(){uni.pageScrollTo({scrollTop:0,duration:0})},selectRefundType:function(e){this.refund_type=e},getRefundData:function(){var e=this;this.$api.sendRequest({url:"/api/orderrefund/refundData",data:{order_goods_id:this.order_goods_id},success:function(t){t.code>=0?(e.refund_data=t.data,e.$refs.loadingCover&&e.$refs.loadingCover.hide()):(e.$util.showToast({title:"未获取到该订单项退款信息"}),setTimeout((function(){e.$util.redirectTo("/pages/order/list/list")}),1e3))},fail:function(t){e.$refs.loadingCover&&e.$refs.loadingCover.hide()}})},submit:function(){var e=this;if(this.verify()){if(this.isSub)return;this.isSub=!0,this.$api.sendRequest({url:"/api/orderrefund/refund",data:{order_goods_id:this.order_goods_id,refund_type:this.refund_type,refund_reason:this.refund_reason,refund_remark:this.refund_remark},success:function(t){e.$util.showToast({title:t.message}),t.code>=0?e.$util.redirectTo("/pages/order/activist/activist"):e.isSub=!1},fail:function(t){e.isSub=!1}})}},verify:function(){return""!=this.refund_reason||(this.$util.showToast({title:"请选择退款原因"}),!1)},changeReason:function(e){this.refund_reason=e},change:function(e){e&&(this.showText=e.show)}}};t.default=r},b79f:function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return n})),i.d(t,"a",(function(){return o}));var o={uniPopup:i("fa04").default,loadingCover:i("a197").default},a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{attrs:{"data-theme":e.themeStyle}},[i("v-uni-scroll-view",{staticClass:"refund-container",attrs:{"scroll-y":"true"}},[i("v-uni-view",{staticClass:"goods-wrap"},[i("v-uni-view",{staticClass:"goods-img"},[i("v-uni-image",{attrs:{src:e.$util.img(e.refund_data.order_goods_info.sku_image,{size:"mid"}),mode:"aspectFill","lazy-load":!0},on:{error:function(t){arguments[0]=t=e.$handleEvent(t),e.refund_data.order_goods_info.sku_image=e.$util.getDefaultImage().default_goods_img}}})],1),i("v-uni-view",{staticClass:"goods-info"},[i("v-uni-view",{staticClass:"goods-name"},[e._v(e._s(e.refund_data.order_goods_info.sku_name))])],1)],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!e.refund_type,expression:"!refund_type"}],staticClass:"refund-option"},[i("v-uni-view",{staticClass:"option-item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.selectRefundType(1)}}},[i("v-uni-view",[i("v-uni-text",[e._v("退款无需退货")]),i("v-uni-text",{staticClass:"font-size-tag color-title"},[e._v("没收到货，或与卖家协商同意无需退货只退款")])],1),i("v-uni-text",{staticClass:"iconfont iconright"})],1),2==e.refund_data.refund_type.length?i("v-uni-view",{staticClass:"option-item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.selectRefundType(2)}}},[i("v-uni-view",[i("v-uni-text",[e._v("退货退款")]),i("v-uni-text",{staticClass:"font-size-tag color-title"},[e._v("已收到货，需退还收到的货物")])],1),i("v-uni-text",{staticClass:"iconfont iconright"})],1):e._e()],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.refund_type,expression:"refund_type"}]},[i("v-uni-view",{staticClass:"refund-form"},[i("v-uni-view",{staticClass:"item-wrap",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.openPopup("refundReasonPopup")}}},[i("v-uni-view",{staticClass:"label"},[e._v("退款原因：")]),i("v-uni-view",{staticClass:"cont"},[e.refund_reason.length?i("v-uni-text",{staticClass:"color-title"},[e._v(e._s(e.refund_reason))]):i("v-uni-text",{staticClass:"color-title"},[e._v("请选择")])],1),i("v-uni-text",{staticClass:"iconfont iconright"})],1),i("v-uni-view",{staticClass:"item-wrap"},[i("v-uni-view",{staticClass:"label"},[e._v("退款金额：")]),i("v-uni-view",{staticClass:"cont color-base-text"},[e._v(e._s(e.$lang("common.currencySymbol"))+e._s(e.refund_data.refund_money)),e.refund_data.refund_delivery_money>0?i("v-uni-text",{staticClass:"font-size-activity-tag margin-left"},[e._v("（含运费￥"+e._s(e.refund_data.refund_delivery_money)+")")]):e._e()],1)],1),i("v-uni-view",{staticClass:"item-wrap"},[i("v-uni-view",{staticClass:"label active"},[e._v("退款说明")])],1),i("v-uni-textarea",{staticClass:"newText",attrs:{value:"",placeholder:"请输入退款说明(选填)","placeholder-class":"color-title font-size-base","auto-height":!0},on:{blur:function(t){arguments[0]=t=e.$handleEvent(t),e.textBlur()}},model:{value:e.refund_remark,callback:function(t){e.refund_remark=t},expression:"refund_remark"}})],1),i("v-uni-view",{staticClass:"sub-btn",class:{"safe-area":e.isIphoneX},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submit.apply(void 0,arguments)}}},[i("v-uni-button",{attrs:{type:"primary"}},[e._v(e._s(e.$lang("common.submit")))])],1)],1),i("uni-popup",{ref:"refundReasonPopup",attrs:{type:"bottom"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.change()}}},[i("v-uni-view",{staticClass:"refund-reason-popup popup"},[i("v-uni-view",{staticClass:"popup-header"},[i("v-uni-view",[i("v-uni-text",{staticClass:"tit"},[e._v("退款原因")])],1),i("v-uni-view",{staticClass:"align-right",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.closePopup("refundReasonPopup")}}},[i("v-uni-text",{staticClass:"iconfont iconguanbi color-title"})],1)],1),i("v-uni-scroll-view",{staticClass:"popup-body",class:{"safe-area":e.isIphoneX},attrs:{"scroll-y":"true"}},[i("v-uni-view",{staticClass:"reason-list"},e._l(e.refund_data.refund_reason_type,(function(t,o){return i("v-uni-view",{key:o,staticClass:"item",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.changeReason(t)}}},[i("v-uni-view",{staticClass:"reason"},[e._v(e._s(t))]),i("v-uni-view",{staticClass:"iconfont",class:e.refund_reason==t?"iconyuan_checked color-base-text":"iconyuan_checkbox"})],1)})),1)],1),i("v-uni-view",{staticClass:"popup-footer",class:{"bottom-safe-area":e.isIphoneX}},[i("v-uni-view",{staticClass:"confirm-btn color-base-bg",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.closePopup("refundReasonPopup")}}},[e._v("确定")])],1)],1)],1)],1),i("loading-cover",{ref:"loadingCover"})],1)},n=[]},bcb5:function(e,t,i){var o=i("d970");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var a=i("4f06").default;a("0f036c50",o,!0,{sourceMap:!1,shadowMode:!1})},d970:function(e,t,i){var o=i("24fb");t=o(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n */.refund-container[data-v-550ef9e4]{width:100vw;height:100vh}.align-right[data-v-550ef9e4]{text-align:right}.goods-wrap[data-v-550ef9e4]{margin:%?20?% %?30?%;padding:%?20?%;border-radius:%?10?%;background:#fff;display:flex;position:relative}.goods-wrap .goods-img[data-v-550ef9e4]{width:%?170?%;height:%?170?%;margin-right:%?20?%}.goods-wrap .goods-img uni-image[data-v-550ef9e4]{width:100%;height:100%}.goods-wrap .goods-info[data-v-550ef9e4]{flex:1;position:relative;max-width:calc(100% - %?200?%)}.goods-wrap .goods-info .goods-name[data-v-550ef9e4]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;line-height:1.5;font-size:%?28?%}.refund-option[data-v-550ef9e4]{margin:%?20?% %?30?%;border-radius:%?10?%;background:#fff}.refund-option .option-item[data-v-550ef9e4]{padding:%?20?%;display:flex;position:relative}.refund-option .option-item uni-view[data-v-550ef9e4]{flex:1}.refund-option .option-item uni-view uni-text[data-v-550ef9e4]{display:block}.refund-option .option-item .iconright[data-v-550ef9e4]{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);color:#ddd;right:%?20?%}.refund-option .option-item[data-v-550ef9e4]:last-of-type{border-top:1px solid #f2f2f2}.refund-form[data-v-550ef9e4]{margin:%?20?% %?30?%;padding:%?20?%;border-radius:%?10?%;background:#fff}.refund-form .item-wrap[data-v-550ef9e4]{display:flex;position:relative;line-height:%?80?%}.refund-form .item-wrap .label[data-v-550ef9e4]{width:%?142?%;padding-right:%?5?%;line-height:%?80?%}.refund-form .item-wrap .cont[data-v-550ef9e4]{flex:1;line-height:%?80?%}.refund-form .item-wrap .cont .refund-desc[data-v-550ef9e4]{font-size:%?28?%;width:100%;line-height:1;min-height:%?80?%}.refund-form .item-wrap .label.active[data-v-550ef9e4]{width:100%}.refund-form .item-wrap .iconright[data-v-550ef9e4]{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);color:#ddd;right:0}.textarea-box[data-v-550ef9e4]{position:relative}.textarea-box .mark[data-v-550ef9e4]{width:100%;height:100%;position:absolute;left:0;bottom:0;background:red}.newText[data-v-550ef9e4]{width:100%;min-height:130px;border-radius:%?10?%;border:%?1?% solid #eee;padding:%?10?%;box-sizing:border-box;margin-top:%?10?%}.sub-btn[data-v-550ef9e4]{position:fixed;width:100%;height:%?120?%;line-height:%?120?%;text-align:center;color:#fff;bottom:0}.sub-btn.safe-area[data-v-550ef9e4]{margin-bottom:%?68?%!important}.popup[data-v-550ef9e4]{width:100vw;background:#fff;border-top-left-radius:%?24?%;border-top-right-radius:%?24?%}.popup .popup-header[data-v-550ef9e4]{height:%?90?%;display:flex;align-items:center;padding:0 %?30?%}.popup .popup-header > uni-view[data-v-550ef9e4]{flex:1;line-height:1}.popup .popup-header .tit[data-v-550ef9e4]{font-size:%?32?%;font-weight:600}.popup .popup-header .vice-tit[data-v-550ef9e4]{margin-right:%?20?%}.popup .popup-body[data-v-550ef9e4]{height:calc(100% - %?210?%)}.popup .popup-body.safe-area[data-v-550ef9e4]{height:calc(100% - %?278?%)}.popup .popup-footer[data-v-550ef9e4]{height:%?120?%}.popup .popup-footer .confirm-btn[data-v-550ef9e4]{height:%?80?%;line-height:%?80?%;color:#fff;text-align:center;margin:%?20?%;border-radius:%?40?%}.popup .popup-footer.bottom-safe-area[data-v-550ef9e4]{padding-bottom:%?68?%!important}.refund-reason-popup[data-v-550ef9e4]{height:65vh}.refund-reason-popup .popup-body .item[data-v-550ef9e4]{display:flex;padding:0 %?30?%;position:relative;height:%?70?%;line-height:%?70?%}.refund-reason-popup .popup-body .item .reason[data-v-550ef9e4]{flex:1;height:%?70?%;line-height:%?70?%}.refund-reason-popup .popup-body .item > .iconfont[data-v-550ef9e4]{font-size:%?40?%;position:absolute;top:50%;right:%?30?%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.refund-reason-popup .popup-body .item > .iconyuan_checkbox[data-v-550ef9e4]{color:#909399}',""]),e.exports=t},e379:function(e,t,i){"use strict";var o=i("4054"),a=i.n(o);a.a},e5d9:function(e,t,i){"use strict";i.r(t);var o=i("b79f"),a=i("5fff");for(var n in a)"default"!==n&&function(e){i.d(t,e,(function(){return a[e]}))}(n);i("2b5c"),i("e379");var r,s=i("f0c5"),d=Object(s["a"])(a["default"],o["b"],o["c"],!1,null,"550ef9e4",null,!1,o["a"],r);t["default"]=d.exports}}]);