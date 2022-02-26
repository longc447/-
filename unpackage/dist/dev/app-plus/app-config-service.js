
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index/index","pages/login/login/login","pages/login/register/register","pages/goods/cart/cart","pages/goods/category/category","pages/goods/detail/detail","pages/goods/list/list","pages/member/index/index","pages/member/info/info","pages/order/payment/payment","pages/order/list/list","pages/order/detail/detail","pages/order/detail_local_delivery/detail_local_delivery","pages/order/detail_pickup/detail_pickup","pages/order/detail_virtual/detail_virtual","pages/order/logistics/logistics","pages/order/activist/activist","pages/order/complain/complain","pages/pay/result/result","pages/login/register/wholesale/wholesale","pages/photo/photo","promotionpages/combo/detail/detail","promotionpages/combo/payment/payment","promotionpages/topics/list/list","promotionpages/topics/detail/detail","promotionpages/topics/goods_detail/goods_detail","promotionpages/topics/payment/payment","promotionpages/seckill/list/list","promotionpages/seckill/detail/detail","promotionpages/seckill/payment/payment","promotionpages/pintuan/list/list","promotionpages/pintuan/detail/detail","promotionpages/pintuan/my_spell/my_spell","promotionpages/pintuan/share/share","promotionpages/pintuan/payment/payment","promotionpages/bargain/list/list","promotionpages/bargain/detail/detail","promotionpages/bargain/launch/launch","promotionpages/bargain/my_bargain/my_bargain","promotionpages/bargain/payment/payment","promotionpages/groupbuy/list/list","promotionpages/groupbuy/detail/detail","promotionpages/groupbuy/payment/payment","promotionpages/point/list/list","promotionpages/point/detail/detail","promotionpages/point/payment/payment","promotionpages/point/order_list/order_list","promotionpages/point/result/result","promotionpages/wholesale/list/list","promotionpages/wholesale/detail/detail","promotionpages/wholesale/payment/payment","promotionpages/wholesale/cartList/cartList","promotionpages/game/cards/cards","promotionpages/game/turntable/turntable","promotionpages/game/smash_eggs/smash_eggs","promotionpages/game/record/record","otherpages/order/refund/refund","otherpages/order/refund_detail/refund_detail","otherpages/order/evaluate/evaluate","otherpages/index/city/city","otherpages/store_notes/note_list/note_list","otherpages/store_notes/note_detail/note_detail","otherpages/diy/diy/diy","otherpages/member/modify_face/modify_face","otherpages/member/account/account","otherpages/member/account_edit/account_edit","otherpages/member/apply_withdrawal/apply_withdrawal","otherpages/member/balance/balance","otherpages/member/balance_detail/balance_detail","otherpages/member/collection/collection","otherpages/member/coupon/coupon","otherpages/member/footprint/footprint","otherpages/member/level/level","otherpages/member/level/level_growth_rules","otherpages/member/point/point","otherpages/member/point_detail/point_detail","otherpages/member/signin/signin","otherpages/member/gift/gift","otherpages/member/gift_detail/gift_detail","otherpages/member/withdrawal/withdrawal","otherpages/member/withdrawal_detail/withdrawal_detail","otherpages/member/address/address","otherpages/member/address_edit/address_edit","otherpages/member/cancellation/cancellation","otherpages/member/assets/assets","otherpages/member/cancelstatus/cancelstatus","otherpages/member/cancelsuccess/cancelsuccess","otherpages/member/cancelrefuse/cancelrefuse","otherpages/login/find/find","otherpages/goods/preview-video","otherpages/goods/brand/brand","otherpages/goods/coupon/coupon","otherpages/goods/coupon_receive/coupon_receive","otherpages/goods/evaluate/evaluate","otherpages/goods/search/search","otherpages/help/list/list","otherpages/help/detail/detail","otherpages/notice/list/list","otherpages/notice/detail/detail","otherpages/shop/index/index","otherpages/shop/introduce/introduce","otherpages/shop/search/search","otherpages/shop/street/street","otherpages/shop/category/category","otherpages/shop/list/list","otherpages/shop/store_detail/store_detail","otherpages/verification/index/index","otherpages/verification/list/list","otherpages/verification/detail/detail","otherpages/recharge/list/list","otherpages/recharge/order_list/order_list","otherpages/fenxiao/index/index","otherpages/fenxiao/apply/apply","otherpages/fenxiao/order/order","otherpages/fenxiao/order_detail/order_detail","otherpages/fenxiao/team/team","otherpages/fenxiao/withdraw_apply/withdraw_apply","otherpages/fenxiao/withdraw_list/withdraw_list","otherpages/fenxiao/promote_code/promote_code","otherpages/fenxiao/level/level","otherpages/fenxiao/goods_list/goods_list","otherpages/fenxiao/follow/follow","otherpages/fenxiao/bill/bill","otherpages/live/list/list","otherpages/chat/room/room","otherpages/webview/webview"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"","navigationBarBackgroundColor":"#ffffff","backgroundColor":"#F7f7f7","backgroundColorTop":"#f7f7f7","backgroundColorBottom":"#f7f7f7","softinputMode":"nothing"},"tabBar":{"color":"#333","selectedColor":"#FF0036","backgroundColor":"#fff","borderStyle":"white","list":[{"pagePath":"pages/index/index/index","text":"首页"},{"pagePath":"pages/goods/category/category","text":"分类"},{"pagePath":"pages/goods/cart/cart","text":"购物车"},{"pagePath":"pages/member/index/index","text":"个人中心"}]},"preloadRule":{"pages/index/index/index":{"network":"all","packages":["promotionpages","otherpages"]}},"nvueCompiler":"uni-app","nvueStyleCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"镜片一站式采购平台","compilerVersion":"3.3.11","entryPagePath":"pages/index/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom","enablePullDownRefresh":true}},{"path":"/pages/login/login/login","meta":{},"window":{"navigationBarTitleText":"登录"}},{"path":"/pages/login/register/register","meta":{},"window":{"navigationBarTitleText":"注册"}},{"path":"/pages/goods/cart/cart","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"购物车"}},{"path":"/pages/goods/category/category","meta":{"isQuit":true,"isTabBar":true},"window":{"disableScroll":true,"navigationBarTitleText":"商品分类"}},{"path":"/pages/goods/detail/detail","meta":{},"window":{"navigationBarTitleText":"","softinputMode":"nothing"}},{"path":"/pages/goods/list/list","meta":{},"window":{"navigationBarTitleText":"商品列表"}},{"path":"/pages/member/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"enablePullDownRefresh":true,"navigationBarTitleText":"会员中心"}},{"path":"/pages/member/info/info","meta":{},"window":{"navigationBarTitleText":"个人资料"}},{"path":"/pages/order/payment/payment","meta":{},"window":{}},{"path":"/pages/order/list/list","meta":{},"window":{}},{"path":"/pages/order/detail/detail","meta":{},"window":{"enablePullDownRefresh":true}},{"path":"/pages/order/detail_local_delivery/detail_local_delivery","meta":{},"window":{}},{"path":"/pages/order/detail_pickup/detail_pickup","meta":{},"window":{}},{"path":"/pages/order/detail_virtual/detail_virtual","meta":{},"window":{}},{"path":"/pages/order/logistics/logistics","meta":{},"window":{}},{"path":"/pages/order/activist/activist","meta":{},"window":{"navigationBarTitleText":"退款"}},{"path":"/pages/order/complain/complain","meta":{},"window":{}},{"path":"/pages/pay/result/result","meta":{},"window":{}},{"path":"/pages/login/register/wholesale/wholesale","meta":{},"window":{"navigationBarTitleText":"批发商申请","enablePullDownRefresh":false}},{"path":"/pages/photo/photo","meta":{},"window":{"navigationBarTitleText":"拍照下单","enablePullDownRefresh":false}},{"path":"/promotionpages/combo/detail/detail","meta":{},"window":{}},{"path":"/promotionpages/combo/payment/payment","meta":{},"window":{}},{"path":"/promotionpages/topics/list/list","meta":{},"window":{}},{"path":"/promotionpages/topics/detail/detail","meta":{},"window":{}},{"path":"/promotionpages/topics/goods_detail/goods_detail","meta":{},"window":{}},{"path":"/promotionpages/topics/payment/payment","meta":{},"window":{}},{"path":"/promotionpages/seckill/list/list","meta":{},"window":{}},{"path":"/promotionpages/seckill/detail/detail","meta":{},"window":{}},{"path":"/promotionpages/seckill/payment/payment","meta":{},"window":{}},{"path":"/promotionpages/pintuan/list/list","meta":{},"window":{}},{"path":"/promotionpages/pintuan/detail/detail","meta":{},"window":{}},{"path":"/promotionpages/pintuan/my_spell/my_spell","meta":{},"window":{}},{"path":"/promotionpages/pintuan/share/share","meta":{},"window":{}},{"path":"/promotionpages/pintuan/payment/payment","meta":{},"window":{}},{"path":"/promotionpages/bargain/list/list","meta":{},"window":{}},{"path":"/promotionpages/bargain/detail/detail","meta":{},"window":{}},{"path":"/promotionpages/bargain/launch/launch","meta":{},"window":{}},{"path":"/promotionpages/bargain/my_bargain/my_bargain","meta":{},"window":{}},{"path":"/promotionpages/bargain/payment/payment","meta":{},"window":{}},{"path":"/promotionpages/groupbuy/list/list","meta":{},"window":{}},{"path":"/promotionpages/groupbuy/detail/detail","meta":{},"window":{}},{"path":"/promotionpages/groupbuy/payment/payment","meta":{},"window":{}},{"path":"/promotionpages/point/list/list","meta":{},"window":{}},{"path":"/promotionpages/point/detail/detail","meta":{},"window":{}},{"path":"/promotionpages/point/payment/payment","meta":{},"window":{}},{"path":"/promotionpages/point/order_list/order_list","meta":{},"window":{}},{"path":"/promotionpages/point/result/result","meta":{},"window":{}},{"path":"/promotionpages/wholesale/list/list","meta":{},"window":{}},{"path":"/promotionpages/wholesale/detail/detail","meta":{},"window":{}},{"path":"/promotionpages/wholesale/payment/payment","meta":{},"window":{}},{"path":"/promotionpages/wholesale/cartList/cartList","meta":{},"window":{}},{"path":"/promotionpages/game/cards/cards","meta":{},"window":{}},{"path":"/promotionpages/game/turntable/turntable","meta":{},"window":{}},{"path":"/promotionpages/game/smash_eggs/smash_eggs","meta":{},"window":{}},{"path":"/promotionpages/game/record/record","meta":{},"window":{}},{"path":"/otherpages/order/refund/refund","meta":{},"window":{}},{"path":"/otherpages/order/refund_detail/refund_detail","meta":{},"window":{}},{"path":"/otherpages/order/evaluate/evaluate","meta":{},"window":{}},{"path":"/otherpages/index/city/city","meta":{},"window":{"disableScroll":true}},{"path":"/otherpages/store_notes/note_list/note_list","meta":{},"window":{"navigationBarTitleText":"门店列表"}},{"path":"/otherpages/store_notes/note_detail/note_detail","meta":{},"window":{}},{"path":"/otherpages/diy/diy/diy","meta":{},"window":{"navigationStyle":"custom","enablePullDownRefresh":true}},{"path":"/otherpages/member/modify_face/modify_face","meta":{},"window":{}},{"path":"/otherpages/member/account/account","meta":{},"window":{}},{"path":"/otherpages/member/account_edit/account_edit","meta":{},"window":{}},{"path":"/otherpages/member/apply_withdrawal/apply_withdrawal","meta":{},"window":{}},{"path":"/otherpages/member/balance/balance","meta":{},"window":{}},{"path":"/otherpages/member/balance_detail/balance_detail","meta":{},"window":{}},{"path":"/otherpages/member/collection/collection","meta":{},"window":{}},{"path":"/otherpages/member/coupon/coupon","meta":{},"window":{"disableScroll":true}},{"path":"/otherpages/member/footprint/footprint","meta":{},"window":{}},{"path":"/otherpages/member/level/level","meta":{},"window":{}},{"path":"/otherpages/member/level/level_growth_rules","meta":{},"window":{}},{"path":"/otherpages/member/point/point","meta":{},"window":{}},{"path":"/otherpages/member/point_detail/point_detail","meta":{},"window":{}},{"path":"/otherpages/member/signin/signin","meta":{},"window":{}},{"path":"/otherpages/member/gift/gift","meta":{},"window":{}},{"path":"/otherpages/member/gift_detail/gift_detail","meta":{},"window":{}},{"path":"/otherpages/member/withdrawal/withdrawal","meta":{},"window":{}},{"path":"/otherpages/member/withdrawal_detail/withdrawal_detail","meta":{},"window":{}},{"path":"/otherpages/member/address/address","meta":{},"window":{}},{"path":"/otherpages/member/address_edit/address_edit","meta":{},"window":{}},{"path":"/otherpages/member/cancellation/cancellation","meta":{},"window":{}},{"path":"/otherpages/member/assets/assets","meta":{},"window":{}},{"path":"/otherpages/member/cancelstatus/cancelstatus","meta":{},"window":{}},{"path":"/otherpages/member/cancelsuccess/cancelsuccess","meta":{},"window":{}},{"path":"/otherpages/member/cancelrefuse/cancelrefuse","meta":{},"window":{}},{"path":"/otherpages/login/find/find","meta":{},"window":{"navigationStyle":"custom","navigationBarTitleText":""}},{"path":"/otherpages/goods/preview-video","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/otherpages/goods/brand/brand","meta":{},"window":{}},{"path":"/otherpages/goods/coupon/coupon","meta":{},"window":{}},{"path":"/otherpages/goods/coupon_receive/coupon_receive","meta":{},"window":{}},{"path":"/otherpages/goods/evaluate/evaluate","meta":{},"window":{}},{"path":"/otherpages/goods/search/search","meta":{},"window":{}},{"path":"/otherpages/help/list/list","meta":{},"window":{}},{"path":"/otherpages/help/detail/detail","meta":{},"window":{}},{"path":"/otherpages/notice/list/list","meta":{},"window":{}},{"path":"/otherpages/notice/detail/detail","meta":{},"window":{}},{"path":"/otherpages/shop/index/index","meta":{},"window":{"navigationStyle":"custom","enablePullDownRefresh":true}},{"path":"/otherpages/shop/introduce/introduce","meta":{},"window":{}},{"path":"/otherpages/shop/search/search","meta":{},"window":{}},{"path":"/otherpages/shop/street/street","meta":{},"window":{}},{"path":"/otherpages/shop/category/category","meta":{},"window":{"disableScroll":true,"navigationStyle":"custom"}},{"path":"/otherpages/shop/list/list","meta":{},"window":{}},{"path":"/otherpages/shop/store_detail/store_detail","meta":{},"window":{}},{"path":"/otherpages/verification/index/index","meta":{},"window":{}},{"path":"/otherpages/verification/list/list","meta":{},"window":{}},{"path":"/otherpages/verification/detail/detail","meta":{},"window":{}},{"path":"/otherpages/recharge/list/list","meta":{},"window":{}},{"path":"/otherpages/recharge/order_list/order_list","meta":{},"window":{}},{"path":"/otherpages/fenxiao/index/index","meta":{},"window":{}},{"path":"/otherpages/fenxiao/apply/apply","meta":{},"window":{}},{"path":"/otherpages/fenxiao/order/order","meta":{},"window":{}},{"path":"/otherpages/fenxiao/order_detail/order_detail","meta":{},"window":{}},{"path":"/otherpages/fenxiao/team/team","meta":{},"window":{}},{"path":"/otherpages/fenxiao/withdraw_apply/withdraw_apply","meta":{},"window":{}},{"path":"/otherpages/fenxiao/withdraw_list/withdraw_list","meta":{},"window":{}},{"path":"/otherpages/fenxiao/promote_code/promote_code","meta":{},"window":{}},{"path":"/otherpages/fenxiao/level/level","meta":{},"window":{}},{"path":"/otherpages/fenxiao/goods_list/goods_list","meta":{},"window":{}},{"path":"/otherpages/fenxiao/follow/follow","meta":{},"window":{}},{"path":"/otherpages/fenxiao/bill/bill","meta":{},"window":{}},{"path":"/otherpages/live/list/list","meta":{},"window":{}},{"path":"/otherpages/chat/room/room","meta":{},"window":{"softinputMode":"adjustResize"}},{"path":"/otherpages/webview/webview","meta":{},"window":{}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
