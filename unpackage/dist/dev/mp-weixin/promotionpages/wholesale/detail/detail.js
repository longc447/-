(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["promotionpages/wholesale/detail/detail"],{

/***/ 638:
/*!****************************************************************************************************!*\
  !*** /Users/longchu/Documents/镜惠购/main.js?{"page":"promotionpages%2Fwholesale%2Fdetail%2Fdetail"} ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _detail = _interopRequireDefault(__webpack_require__(/*! ./promotionpages/wholesale/detail/detail.vue */ 639));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_detail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 639:
/*!*******************************************************************************!*\
  !*** /Users/longchu/Documents/镜惠购/promotionpages/wholesale/detail/detail.vue ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _detail_vue_vue_type_template_id_02f2adfe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail.vue?vue&type=template&id=02f2adfe&scoped=true& */ 640);
/* harmony import */ var _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail.vue?vue&type=script&lang=js& */ 642);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail.vue?vue&type=style&index=0&lang=scss& */ 654);
/* harmony import */ var _detail_vue_vue_type_style_index_1_id_02f2adfe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail.vue?vue&type=style&index=1&id=02f2adfe&scoped=true&lang=css& */ 656);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);

var renderjs






/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _detail_vue_vue_type_template_id_02f2adfe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _detail_vue_vue_type_template_id_02f2adfe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "02f2adfe",
  null,
  false,
  _detail_vue_vue_type_template_id_02f2adfe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "promotionpages/wholesale/detail/detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 640:
/*!**************************************************************************************************************************!*\
  !*** /Users/longchu/Documents/镜惠购/promotionpages/wholesale/detail/detail.vue?vue&type=template&id=02f2adfe&scoped=true& ***!
  \**************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_02f2adfe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./detail.vue?vue&type=template&id=02f2adfe&scoped=true& */ 641);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_02f2adfe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_02f2adfe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_02f2adfe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_02f2adfe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 641:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/longchu/Documents/镜惠购/promotionpages/wholesale/detail/detail.vue?vue&type=template&id=02f2adfe&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniPopup: function() {
      return __webpack_require__.e(/*! import() | components/uni-popup/uni-popup */ "components/uni-popup/uni-popup").then(__webpack_require__.bind(null, /*! @/components/uni-popup/uni-popup.vue */ 1211))
    },
    uParse: function() {
      return Promise.all(/*! import() | components/u-parse/u-parse */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/u-parse/u-parse")]).then(__webpack_require__.bind(null, /*! @/components/u-parse/u-parse.vue */ 1449))
    },
    nsGoodsSku: function() {
      return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/ns-goods-sku/ns-goods-sku.vue */ 644))
    },
    loadingCover: function() {
      return __webpack_require__.e(/*! import() | components/loading-cover/loading-cover */ "components/loading-cover/loading-cover").then(__webpack_require__.bind(null, /*! @/components/loading-cover/loading-cover.vue */ 1328))
    },
    nsLogin: function() {
      return Promise.all(/*! import() | components/ns-login/ns-login */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/ns-login/ns-login")]).then(__webpack_require__.bind(null, /*! @/components/ns-login/ns-login.vue */ 1356))
    },
    nsGoodsAction: function() {
      return __webpack_require__.e(/*! import() | components/ns-goods-action/ns-goods-action */ "components/ns-goods-action/ns-goods-action").then(__webpack_require__.bind(null, /*! @/components/ns-goods-action/ns-goods-action.vue */ 1457))
    },
    nsGoodsActionIcon: function() {
      return __webpack_require__.e(/*! import() | components/ns-goods-action-icon/ns-goods-action-icon */ "components/ns-goods-action-icon/ns-goods-action-icon").then(__webpack_require__.bind(null, /*! @/components/ns-goods-action-icon/ns-goods-action-icon.vue */ 1464))
    },
    nsGoodsActionButton: function() {
      return __webpack_require__.e(/*! import() | components/ns-goods-action-button/ns-goods-action-button */ "components/ns-goods-action-button/ns-goods-action-button").then(__webpack_require__.bind(null, /*! @/components/ns-goods-action-button/ns-goods-action-button.vue */ 1471))
    }
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var l0 = _vm.__map(_vm.goodsSkuDetail.sku_images, function(item, index) {
    var $orig = _vm.__get_orig(item)

    var g0 = _vm.$util.img(item, {
      size: "big"
    })
    return {
      $orig: $orig,
      g0: g0
    }
  })

  var g1 = _vm.$util.img(_vm.goodsSkuDetail.video_url)
  var g2 = _vm.$util.img(_vm.goodsSkuDetail.sku_image, {
    size: "big"
  })
  var m0 = _vm.goodsSkuDetail.video_url != "" ? _vm.$lang("video") : null
  var m1 = _vm.goodsSkuDetail.video_url != "" ? _vm.$lang("image") : null
  var g3 = _vm.$util.img(_vm.goodsSkuDetail.video_url)
  var g4 = _vm.$util.img(_vm.goodsSkuDetail.sku_image, {
    size: "big"
  })
  var m2 = _vm.$lang("common.currencySymbol")
  var m3 =
    _vm.goodsSkuDetail.price > 0 ? _vm.$lang("common.currencySymbol") : null
  var m4 = _vm.$lang("common.currencySymbol")
  var m5 = _vm.$lang("service")
  var g5 =
    _vm.Development && _vm.shopInfo.avatar
      ? _vm.$util.img(_vm.shopInfo.avatar)
      : null
  var g6 =
    _vm.Development && !_vm.shopInfo.avatar ? _vm.$util.getDefaultImage() : null
  var g7 =
    _vm.evaluateConfig.evaluate_show == 1 &&
    _vm.goodsEvaluate.content &&
    _vm.goodsEvaluate.member_headimg
      ? _vm.$util.img(_vm.goodsEvaluate.member_headimg)
      : null
  var g8 =
    _vm.evaluateConfig.evaluate_show == 1 &&
    _vm.goodsEvaluate.content &&
    !_vm.goodsEvaluate.member_headimg
      ? _vm.$util.getDefaultImage()
      : null
  var g9 =
    _vm.evaluateConfig.evaluate_show == 1 && _vm.goodsEvaluate.content
      ? _vm.$util.timeStampTurnTime(_vm.goodsEvaluate.create_time)
      : null
  var l1 =
    _vm.evaluateConfig.evaluate_show == 1 &&
    _vm.goodsEvaluate.content &&
    _vm.goodsEvaluate.images
      ? _vm.__map(_vm.goodsEvaluate.images, function(item, index) {
          var $orig = _vm.__get_orig(item)

          var g10 = _vm.$util.img(item)
          return {
            $orig: $orig,
            g10: g10
          }
        })
      : null
  var g11 = _vm.poster != "-1" ? _vm.$util.img(_vm.poster) : null

  if (!_vm._isMounted) {
    _vm.e0 = function($event) {
      _vm.switchMedia = "video"
    }

    _vm.e1 = function($event) {
      _vm.switchMedia = "img"
    }

    _vm.e2 = function($event) {
      _vm.shopInfo.avatar = _vm.$util.getDefaultImage().default_shop_img
    }

    _vm.e3 = function($event) {
      _vm.goodsEvaluate.member_headimg = _vm.$util.getDefaultImage().default_headimg
    }

    _vm.e4 = function($event) {
      _vm.detailTab = 0
    }
  }

  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l0: l0,
        g1: g1,
        g2: g2,
        m0: m0,
        m1: m1,
        g3: g3,
        g4: g4,
        m2: m2,
        m3: m3,
        m4: m4,
        m5: m5,
        g5: g5,
        g6: g6,
        g7: g7,
        g8: g8,
        g9: g9,
        l1: l1,
        g11: g11
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 642:
/*!********************************************************************************************************!*\
  !*** /Users/longchu/Documents/镜惠购/promotionpages/wholesale/detail/detail.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./detail.vue?vue&type=script&lang=js& */ 643);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 643:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/longchu/Documents/镜惠购/promotionpages/wholesale/detail/detail.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;









































































































































































































































































































































































var _nsGoodsSku = _interopRequireDefault(__webpack_require__(/*! @/components/ns-goods-sku/ns-goods-sku.vue */ 644));


var _detail = _interopRequireDefault(__webpack_require__(/*! ../public/js/detail.js */ 653));
var _scrollView = _interopRequireDefault(__webpack_require__(/*! @/common/js/scroll-view.js */ 188));
var _golbalConfig = _interopRequireDefault(__webpack_require__(/*! @/common/js/golbalConfig.js */ 156));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var nsGoodsAction = function nsGoodsAction() {__webpack_require__.e(/*! require.ensure | components/ns-goods-action/ns-goods-action */ "components/ns-goods-action/ns-goods-action").then((function () {return resolve(__webpack_require__(/*! @/components/ns-goods-action/ns-goods-action.vue */ 1457));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var nsGoodsActionIcon = function nsGoodsActionIcon() {__webpack_require__.e(/*! require.ensure | components/ns-goods-action-icon/ns-goods-action-icon */ "components/ns-goods-action-icon/ns-goods-action-icon").then((function () {return resolve(__webpack_require__(/*! @/components/ns-goods-action-icon/ns-goods-action-icon.vue */ 1464));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var nsGoodsActionButton = function nsGoodsActionButton() {__webpack_require__.e(/*! require.ensure | components/ns-goods-action-button/ns-goods-action-button */ "components/ns-goods-action-button/ns-goods-action-button").then((function () {return resolve(__webpack_require__(/*! @/components/ns-goods-action-button/ns-goods-action-button.vue */ 1471));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var uniPopup = function uniPopup() {__webpack_require__.e(/*! require.ensure | components/uni-popup/uni-popup */ "components/uni-popup/uni-popup").then((function () {return resolve(__webpack_require__(/*! @/components/uni-popup/uni-popup.vue */ 1211));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var nsGoodsRecommend = function nsGoodsRecommend() {Promise.all(/*! require.ensure | components/ns-goods-recommend/ns-goods-recommend */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/ns-goods-recommend/ns-goods-recommend")]).then((function () {return resolve(__webpack_require__(/*! @/components/ns-goods-recommend/ns-goods-recommend.vue */ 1421));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var uniCountDown = function uniCountDown() {__webpack_require__.e(/*! require.ensure | components/uni-count-down/uni-count-down */ "components/uni-count-down/uni-count-down").then((function () {return resolve(__webpack_require__(/*! @/components/uni-count-down/uni-count-down.vue */ 1435));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var toTop = function toTop() {__webpack_require__.e(/*! require.ensure | components/toTop/toTop */ "components/toTop/toTop").then((function () {return resolve(__webpack_require__(/*! @/components/toTop/toTop.vue */ 1428));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var uParse = function uParse() {Promise.all(/*! require.ensure | components/u-parse/u-parse */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/u-parse/u-parse")]).then((function () {return resolve(__webpack_require__(/*! @/components/u-parse/u-parse.vue */ 1449));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =



{
  components: {
    nsGoodsAction: nsGoodsAction,
    nsGoodsActionIcon: nsGoodsActionIcon,
    nsGoodsActionButton: nsGoodsActionButton,
    uniPopup: uniPopup,
    nsGoodsRecommend: nsGoodsRecommend,
    uniCountDown: uniCountDown,
    toTop: toTop,
    uParse: uParse },

  data: function data() {
    return {
      kefuConfig: {
        weapp: '',
        system: '',
        open: '',
        open_url: '' } };


  },
  mixins: [_detail.default, _scrollView.default, _golbalConfig.default],
  /**
                                                                          * 自定义分享内容
                                                                          * @param {Object} res
                                                                          */
  onShareAppMessage: function onShareAppMessage(res) {
    var path = '/promotionpages/wholesale/detail/detail?goods_id=' + this.goodsId;
    if (this.memberId) path += '&source_member=' + this.memberId;
    return {
      title: this.goodsSkuDetail.sku_name,
      imageUrl: this.$util.img(this.goodsSkuDetail.sku_image, {
        size: 'big' }),

      path: path,
      success: function success(res) {},
      fail: function fail(res) {} };

  },

  // 分享到微信朋友圈
  onShareTimeline: function onShareTimeline() {
    var query = 'goods_id=' + this.goodsId;
    if (this.memberId) query += '&source_member=' + this.memberId;
    return {
      title: this.goodsSkuDetail.sku_name,
      query: query,
      imageUrl: this.$util.img(this.goodsSkuDetail.sku_image, {
        size: 'big' }) };


  } };exports.default = _default;

/***/ }),

/***/ 644:
/*!*****************************************************************************!*\
  !*** /Users/longchu/Documents/镜惠购/components/ns-goods-sku/ns-goods-sku.vue ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ns_goods_sku_vue_vue_type_template_id_407fe378_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ns-goods-sku.vue?vue&type=template&id=407fe378&scoped=true& */ 645);
/* harmony import */ var _ns_goods_sku_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ns-goods-sku.vue?vue&type=script&lang=js& */ 647);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ns_goods_sku_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ns_goods_sku_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _ns_goods_sku_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ns-goods-sku.vue?vue&type=style&index=0&lang=scss& */ 649);
/* harmony import */ var _ns_goods_sku_vue_vue_type_style_index_1_id_407fe378_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ns-goods-sku.vue?vue&type=style&index=1&id=407fe378&scoped=true&lang=css& */ 651);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);

var renderjs






/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _ns_goods_sku_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ns_goods_sku_vue_vue_type_template_id_407fe378_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ns_goods_sku_vue_vue_type_template_id_407fe378_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "407fe378",
  null,
  false,
  _ns_goods_sku_vue_vue_type_template_id_407fe378_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "components/ns-goods-sku/ns-goods-sku.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 645:
/*!************************************************************************************************************************!*\
  !*** /Users/longchu/Documents/镜惠购/components/ns-goods-sku/ns-goods-sku.vue?vue&type=template&id=407fe378&scoped=true& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ns_goods_sku_vue_vue_type_template_id_407fe378_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./ns-goods-sku.vue?vue&type=template&id=407fe378&scoped=true& */ 646);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ns_goods_sku_vue_vue_type_template_id_407fe378_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ns_goods_sku_vue_vue_type_template_id_407fe378_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ns_goods_sku_vue_vue_type_template_id_407fe378_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ns_goods_sku_vue_vue_type_template_id_407fe378_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 646:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/longchu/Documents/镜惠购/components/ns-goods-sku/ns-goods-sku.vue?vue&type=template&id=407fe378&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniPopup: function() {
      return __webpack_require__.e(/*! import() | components/uni-popup/uni-popup */ "components/uni-popup/uni-popup").then(__webpack_require__.bind(null, /*! @/components/uni-popup/uni-popup.vue */ 1211))
    },
    nsLogin: function() {
      return Promise.all(/*! import() | components/ns-login/ns-login */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/ns-login/ns-login")]).then(__webpack_require__.bind(null, /*! @/components/ns-login/ns-login.vue */ 1356))
    },
    myPopupSelect: function() {
      return __webpack_require__.e(/*! import() | components/my-popup-select/my-popup-select */ "components/my-popup-select/my-popup-select").then(__webpack_require__.bind(null, /*! @/components/my-popup-select/my-popup-select.vue */ 1553))
    }
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var g0 =
    _vm.type == "point" &&
    _vm.goodsDetail.type &&
    _vm.goodsDetail.type != 1 &&
    _vm.goodsDetail.type == 2 &&
    _vm.goodsDetail.image
      ? _vm.$util.img(_vm.goodsDetail.image)
      : null
  var g1 =
    _vm.type == "point" &&
    _vm.goodsDetail.type &&
    _vm.goodsDetail.type != 1 &&
    _vm.goodsDetail.type == 2 &&
    !_vm.goodsDetail.image
      ? _vm.$util.img("upload/uniapp/point/coupon.png")
      : null
  var g2 =
    _vm.type == "point" &&
    _vm.goodsDetail.type &&
    _vm.goodsDetail.type != 1 &&
    _vm.goodsDetail.type == 3 &&
    _vm.goodsDetail.image
      ? _vm.$util.img(_vm.goodsDetail.image)
      : null
  var g3 =
    _vm.type == "point" &&
    _vm.goodsDetail.type &&
    _vm.goodsDetail.type != 1 &&
    _vm.goodsDetail.type == 3 &&
    !_vm.goodsDetail.image
      ? _vm.$util.img("upload/uniapp/point/hongbao.png")
      : null
  var g4 = !(
    _vm.type == "point" &&
    _vm.goodsDetail.type &&
    _vm.goodsDetail.type != 1
  )
    ? _vm.$util.img(_vm.goodsDetail.sku_image, {
        size: "mid"
      })
    : null
  var m0 =
    _vm.type == "point" &&
    _vm.goodsDetail.type == 1 &&
    _vm.goodsDetail.exchange_price != "0.00" &&
    _vm.goodsDetail.pay_type > 0
      ? _vm.$lang("common.currencySymbol")
      : null

  var l1 = _vm.__map(_vm.goodsDetail.goods_spec_format, function(item, index) {
    var $orig = _vm.__get_orig(item)

    var l0 =
      _vm.goodsDetail.luminosity_status != 1
        ? _vm.__map(item.value, function(item_value, index_value) {
            var $orig = _vm.__get_orig(item_value)

            var g5 = item_value.image
              ? _vm.$util.img(item_value.image, {
                  size: "small"
                })
              : null
            return {
              $orig: $orig,
              g5: g5
            }
          })
        : null
    return {
      $orig: $orig,
      l0: l0
    }
  })

  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
        g1: g1,
        g2: g2,
        g3: g3,
        g4: g4,
        m0: m0,
        l1: l1
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 647:
/*!******************************************************************************************************!*\
  !*** /Users/longchu/Documents/镜惠购/components/ns-goods-sku/ns-goods-sku.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ns_goods_sku_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./ns-goods-sku.vue?vue&type=script&lang=js& */ 648);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ns_goods_sku_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ns_goods_sku_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ns_goods_sku_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ns_goods_sku_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ns_goods_sku_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 648:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/longchu/Documents/镜惠购/components/ns-goods-sku/ns-goods-sku.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 18));




















































































































































































































































































































var _htmlParser = _interopRequireDefault(__webpack_require__(/*! @/common/js/html-parser */ 208));
var _config = _interopRequireDefault(__webpack_require__(/*! ../../common/js/config.js */ 10));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var uniPopup = function uniPopup() {__webpack_require__.e(/*! require.ensure | components/uni-popup/uni-popup-sku */ "components/uni-popup/uni-popup-sku").then((function () {return resolve(__webpack_require__(/*! @/components/uni-popup/uni-popup-sku.vue */ 1560));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};
// 商品SKU
var _default = {
  name: 'ns-goods-sku',
  components: {
    uniPopup: uniPopup },

  props: {
    goodsDetail: {
      type: Object,
      default: null },

    disabled: {
      type: Boolean,
      default: false },

    pointLimit: {
      type: [Number, String] },

    maxBuy: {
      type: Number,
      default: 0 },

    minBuy: {
      type: Number,
      default: 0 } },


  data: function data() {
    return {
      rimless: '',
      scrollto: 'addbtn0',
      isIphoneX: false,
      systemInfo: {}, //系统信息
      number: 1,
      btnSwitch: false, //提交按钮防止重复提交
      type: '', //join_cart：加入购物车，buy_now：立即购买
      callback: null, //回调
      skuId: 0,
      pintuanId: 0, // 拼团id
      limitNumber: 0, // 限购
      minNumber: 0,
      //是否开启预览，0：不开启，1：开启
      preview: 0,
      cartNumber: 0, // 购物车中商品存在的数量,

      leftIndex: 0, //眼球index
      ball_mirrorIndex: 0, //球镜index
      cylinder_mirrorIndex: 0, //柱镜index
      axisIndex: 0, //轴位index
      sumIndex: 0, //ADDindex
      objIndex: 0, //通道index

      leftArray: ['R', 'L'], //眼球数组
      ball_mirrorArray: [], //球镜数组
      cylinder_mirrorArray: [], //柱镜数组
      ball_mirrorArray_bk: [],
      cylinder_mirrorArray_bk: [],
      axisArray: [], //轴位数组

      sumArray: [], //add数组
      objArray: [], //通道数组

      photometric: 0, //联合光度
      is_wholesaler: _config.default.is_wholesaler, //3 批发商
      //商品数量变量
      myValue: [], //循环总存放数组
      nowIndex: 0, //正在操作的总数组下标
      lastIndex: 0, //当前数组下标
      quantity: 0,
      mirrolist: [],
      sumPrice: 0,
      newballlist: [],
      buyer_message: '' };

  },
  mounted: function mounted() {
    //console.error(this.goodsDetail,
    // "111111111111this.goodsDetail.rimless!=1this.goodsDetail.rimless!=1this.goodsDetail.rimless!=1");
    this.isIphoneX = this.$util.uniappIsIPhoneX();
    this.systemInfo = uni.getSystemInfoSync();
    this.getWholesale(this.goodsDetail);
    if (this.goodsDetail.goods_id == 0) this.$emit("error");
    // let t = setInterval(() => {
    // 	if (this.cylinder_mirrorArray_bk.length > 0) {
    // 		clearInterval(t);
    // 		this.getClickGoodsAdd();
    // 	}
    // }, 100)
  },
  watch: {
    // rimless(nval,oval){
    // 	//console.error(nval,oval,"rimless")
    // },
    pointLimit: function pointLimit(newNum, oldNum) {
      this.limitNumber = Number(newNum);
    },
    goodsDetail: function goodsDetail(newData, oldData) {
      // this.getWholesale(newData);
      this.goodsDetailChange(newData);
      // if (newData.rimless == 1) {
      console.error(this.goodsDetail, "更新了一次");
      // }

      if (this.goodsDetail.rimless == 1) {
        this.rimless = this.goodsDetail.rimless;
        this.getClickGoodsAdd({}, 1);
      }
    },
    minBuy: function minBuy(newData, oldData) {
      if (this.minBuy > 1) {
        this.number = Number(this.minBuy);
      }
    } },

  methods: {
    goodsDetailChange: function goodsDetailChange(newData, oldData) {
      //console.log(this.goodsDetail, "goodsDetailgoodsDetailgoodsDetailgoodsDetail");
      //console.log(newData.photometric)
      this.skuId = newData.sku_id;
      console.error(this.goodsDetail.luminosity_status, "luminosity_status");
      if (this.goodsDetail.luminosity_status != 1) this.setBalllist();
      if (newData.photometric != 0 || newData.luminosity_status == 1) {//联合光度
        //球镜范围
        var ball_mirrorArray = [],
        bstep = 0.25;
        for (var i = newData.ball_min; i <= newData.ball_max; i += bstep) {
          bstep = i < this.goodsDetail.step && this.goodsDetail.step != 0 ? 0.5 : 0.25;
          ball_mirrorArray.push((i.toFixed(2) > 0 ? "+" : "") + i.toFixed(2));
        }
        //柱镜范围
        var cylinder_mirrorArray = [],
        cstep = 0.25;
        for (var _i = newData.cylinder_min; _i <= newData.cylinder_max; _i += cstep) {
          cstep = _i < this.goodsDetail.step && this.goodsDetail.step != 0 ? 0.5 : 0.25;
          cylinder_mirrorArray.push((_i.toFixed(2) > 0 ? "+" : "") + _i.toFixed(2));
        }
        //轴位
        var axisArray = [];
        for (var _i2 = 0; _i2 <= 180; _i2 += 1) {
          axisArray.push(_i2);
        }
        //ADD
        var sumArray = [];
        if (this.goodsDetail.a_dd == 1) {
          sumArray = this.goodsDetail.a_dd_data;
        } else {
          for (var _i3 = 0; _i3 <= 180; _i3 += 1) {
            sumArray.push(_i3);
          }
        }
        //通道
        var objArray = [];
        if (this.goodsDetail.passage == 1) {
          objArray = this.goodsDetail.passage_data;
        } else {
          for (var _i4 = 0; _i4 <= 180; _i4 += 1) {
            objArray.push(_i4);
          }
        }
        this.photometric = newData.photometric;
        this.ball_mirrorArray = ball_mirrorArray;
        this.cylinder_mirrorArray = cylinder_mirrorArray;
        this.ball_mirrorArray_bk = ball_mirrorArray;
        this.cylinder_mirrorArray_bk = cylinder_mirrorArray;
        this.myValue = [];
        this.getClickGoodsAdd();
        // //console.log("柱镜", this.cylinder_mirrorArray_bk, "球镜", this.ball_mirrorArray_bk);
        this.axisArray = axisArray;
        this.sumArray = sumArray;
        this.objArray = objArray;
      }
    },
    setBalllist: function setBalllist() {var _this2 = this;
      var max = 0,
      min = 0,
      arr = [];var _this$goodsDetail =
      this.goodsDetail,ball_min = _this$goodsDetail.ball_min,ball_max = _this$goodsDetail.ball_max;
      if (this.mirrolist.length == 0) {
        arr = this.getList(ball_min, ball_max);
      }
      this.mirrolist.forEach(function (v) {
        min = v.ball_min;
        max = v.ball_max;
        var a = _this2.getList(min, max);
        arr = arr.concat(a);
      });
      arr = Array.from(new Set(arr));
      arr.sort(function (a, b) {
        return a - b;
      });

      this.newballlist = arr;
      // //console.log(this.newballlist, "球镜数据")
    },
    getSumPrice: function getSumPrice() {
      var sum = 0;
      // //console.log(this.myValue,
      // 	"this.goodsDetail.goods_spec_formatthis.goodsDetail.goods_spec_formatthis.goodsDetail.goods_spec_format"
      // )
      this.myValue.forEach(function (e) {
        sum += parseFloat(e.discount_price || 0) * e.product_num;
      });
      this.sumPrice = sum;
    },
    nomove: function nomove(e) {
      // //console.log(e);
    },
    /**
        * @param {min}
        * @param {max}    
        */
    getList: function getList() {var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var arr = [],
      s = 0.25;
      for (var i = min; i <= max; i += s) {
        s = i < this.goodsDetail.step && this.goodsDetail.step != 0 ? 0.5 : 0.25;
        //console.log(`min=${min},max=${max},s=${s},step=${this.goodsDetail.step},i=${i}`)
        var num = i > 0 ? '+' + i : i < 0 ? i : i;
        num = parseFloat(num).toFixed(2);
        if (num > 0) num = "+".concat(num);
        arr.push(num);
      }
      if (arr.length == 0) arr.push(0);
      return arr;
    },
    setMyPopup: function setMyPopup(i, name, list) {var _this3 = this;var dataitem = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;var index = arguments.length > 4 ? arguments[4] : undefined;

      this.doIndex(i);
      dataitem = this.myValue[this.nowIndex];
      var item = dataitem;
      debugger;
      console.error(this.goodsDetail.luminosity_status, "不等于1没法选球镜柱镜");
      if (this.goodsDetail.luminosity_status == 1) {

        // if (name == 'ball') item.cylinder_mirrorIndex = -1
        if (!(item.ball_mirrorIndex >= 0) && name === 'cylinder') return this.$util.showToast({
          title: '先选球镜' });


        if (name == 'ball') list = this.newballlist;

        if (name == 'cylinder' && dataitem != null) {
          var val = dataitem.ball_mirrorArray[dataitem.ball_mirrorIndex],
          max = 0,
          min = 0,
          arr = [];
          this.mirrolist.forEach(function (v) {
            min = v.cylinder_min;
            max = v.cylinder_max;

            if (parseFloat(val) >= parseFloat(v.ball_min) && parseFloat(val) <= parseFloat(v.
            ball_max)) {
              // dataitem.discount_price = v.discount_price
              item.sku_id = v.sku_id;
              var a = _this3.getList(min, max);
              arr = arr.concat(a);
            }
          });
          arr = Array.from(new Set(arr));
          arr.sort(function (a, b) {
            return a - b;
          });
          dataitem.cylinder_mirrorArray = arr;
          this.$refs[name].list = arr;
          this.$refs[name].open();
          return;
        }
      }
      this.$refs[name].list = list;
      this.$refs[name].open();

    },
    doIndex: function doIndex(index) {
      // //切换数组操作下标
      // if(this.nowIndex != index){
      // 	//修改球镜柱镜
      // 	this.ball_mirrorArray = this.ball_mirrorArray_bk;
      // 	this.cylinder_mirrorArray = this.cylinder_mirrorArray_bk;
      // }

      this.nowIndex = index;
    },
    getWholesale: function getWholesale(newData) {var _this4 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var res, mirro;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (
                  _this4.$api.sendRequest({
                    url: '/api/member/detail',
                    async: false }));case 2:res = _context.sent;


                if (res.code == 0) {
                  ////console.log(res)
                  _this4.is_wholesaler = res.is_wholesaler;
                }
                ////console.log(this.goodsDetail.luminosity_status, "状态码新产品", this.goodsDetail);
                // if (this.goodsDetail.luminosity_status != 1) return
                ////console.log("开始插球镜柱镜");
                _context.next = 6;return _this4.$api.sendRequest({
                  url: '/api/goodssku/luminosity_sku',
                  data: {
                    goods_id: _this4.goodsDetail.goods_id },

                  async: false });case 6:mirro = _context.sent;

                delete mirro.timestamp;
                _this4.mirrolist = Object.values(mirro);
                // if (this.mirrolist.length == 0) uni.showToast({
                // 	title: "没有拉取到柱镜信息,让管理员检查goodssku/luminosity_sku接口",
                // 	icon: "none"
                // })
                _this4.setBalllist();case 10:case "end":return _context.stop();}}}, _callee);}))();
    },
    reset: function reset() {
      this.ball_mirrorIndex = null;
      this.cylinder_mirrorIndex = null;
      this.ball_mirrorArray = this.ball_mirrorArray_bk;
      this.cylinder_mirrorArray = this.cylinder_mirrorArray_bk;
    },
    bindPickerChangeF: function bindPickerChangeF(e) {
      ////console.log('picker发送选择改变，左右眼球携带值为', e.target.value)
      this.myValue[this.nowIndex].leftIndex = e.target.value;
      //this.myValue[this.lastIndex].leftIndex = e.target.value
      //修改球镜选择范围
      //const cylinderValue = this.leftArray[this.leftIndex]
      //if(this.ball_mirrorIndex!=null) return;//判定首次选择才删改互补镜值，以免造成重复删改导致数据缺失		
    },
    //球镜的值+柱镜的值 <= this.photometric
    bindPickerChangeA: function bindPickerChangeA(e) {var _this5 = this;
      var item = this.myValue[this.nowIndex];
      ////console.log('picker发送选择改变，球镜携带值为', e.target.value)
      item.ball_mirrorIndex = e.target.value;
      if (this.goodsDetail.luminosity_status == 1) {
        item.ball_mirrorArray = this.newballlist;
        item.cylinder_mirrorIndex = null;
        this.getSumPrice();
        return;
      }

      //this.myValue[this.lastIndex].ball_mirrorIndex = e.target.value
      //修改柱镜选择范围
      var ballValue = item.ball_mirrorArray[item.ball_mirrorIndex];
      //if(this.cylinder_mirrorIndex!=null) return;//判定首次选择才删改互补镜值，以免造成重复删改导致数据缺失。
      var arr = [];
      ////console.log(this.ball_mirrorArray)
      this.cylinder_mirrorArray_bk.forEach(function (num) {
        if (parseFloat(num) + parseFloat(ballValue) >= parseFloat(_this5.photometric)) {
          arr.push(num);
        }
      });
      //如果有值的时候
      ////console.log(item.cylinder_mirrorIndex, "cylinder")
      if (item.cylinder_mirrorIndex != null) {
        //目前的值
        ////console.log('目前的值' + item.cylinder_mirrorIndex)
        var cylinderValue = item.cylinder_mirrorArray[item.cylinder_mirrorIndex];
        var cylinderindex = arr.indexOf(cylinderValue);
        ////console.log(cylinderindex)
        if (cylinderindex == -1) {
          item.cylinder_mirrorIndex = 0;
        } else {
          item.cylinder_mirrorIndex = cylinderindex;
        }
      }
      item.cylinder_mirrorArray = arr;
      ////console.log(item.cylinder_mirrorArray); //柱镜
    },
    bindPickerChangeB: function bindPickerChangeB(e) {var _this6 = this;
      var item = this.myValue[this.nowIndex];
      var val = item.cylinder_mirrorArray[e.target.value];
      var v1 = this.myValue[this.nowIndex].ball_mirrorArray[this.myValue[this.nowIndex].ball_mirrorIndex];
      ////console.log(this.goodsDetail.luminosity_status, "this.goodsDetail.luminosity_status")
      if (this.goodsDetail.luminosity_status == 1) {
        this.mirrolist.forEach(function (ei, index) {
          if (ei.cylinder_max >= val && val >= ei.cylinder_min && v1 >= ei.ball_min && v1 <= ei.
          ball_max) {
            item.discount_price = ei.discount_price;
            item.sku_id = ei.sku_id;
          }
          ////console.log(ei, ei.cylinder_max >= val && val >= ei.cylinder_min,
          // '222222222222222222222222222222222222222', ei.cylinder_max >= val && val >= ei
          // .cylinder_min ? "1" : "2", ei.sku_id)
        });
        this.myValue[this.nowIndex].cylinder_mirrorIndex = e.target.value;
        item.cylinder_mirrorIndex = e.target.value;
        this.getSumPrice();
        return;
      }
      //console.log('picker发送选择改变，柱镜携带值为', e.target.value)
      this.myValue[this.nowIndex].cylinder_mirrorIndex = e.target.value;
      item.cylinder_mirrorIndex = e.target.value;
      //修改球镜选择范围
      var cylinderValue = item.cylinder_mirrorArray[item.cylinder_mirrorIndex];
      //if(this.ball_mirrorIndex!=null) return;//判定首次选择才删改互补镜值，以免造成重复删改导致数据缺失。
      var arr = [];
      this.ball_mirrorArray_bk.forEach(function (num) {//-10
        ////console.log(num)
        if (parseFloat(num) + parseFloat(cylinderValue) >= parseFloat(_this6.photometric)) {
          arr.push(num);
        }
      });
      if (item.ball_mirrorIndex) {
        //目前的值
        var ballValue = item.ball_mirrorArray[item.ball_mirrorIndex];
        var ballindex = arr.indexOf(ballValue);
        if (ballindex == -1) {
          item.ball_mirrorIndex = 0;
        } else {
          item.ball_mirrorIndex = ballindex;
        }
      }
      item.ball_mirrorArray = arr;
      //console.log(item.ball_mirrorIndex)
      //console.log(item.ball_mirroCrArray); //球镜
    },
    bindPickerChangeC: function bindPickerChangeC(e) {
      //console.log('picker发送选择改变，轴位携带值为', e.target.value)
      this.myValue[this.nowIndex].axisIndex = e.target.value;
      this.axisIndex = e.target.value;
    },
    bindPickerChangeD: function bindPickerChangeD(e) {
      //console.log('picker发送选择改变，ADD携带值为', e.target.value)
      this.myValue[this.nowIndex].sumIndex = e.target.value;
      this.sumIndex = e.target.value;
    },
    bindPickerChangeE: function bindPickerChangeE(e) {
      //console.log('picker发送选择改变，通道携带值为', e.target.value)
      this.myValue[this.nowIndex].objIndex = e.target.value;
      this.objIndex = e.target.value;
    },
    show: function show(type, callback) {
      this.callback = callback;
      this.$refs.skuPopup.open(callback);
      this.type = type;
      this.skuId = this.goodsDetail.sku_id;
      this.preview = this.goodsDetail.preview || 0;
      if (this.type == 'pintuan' && this.goodsDetail.pintuan_id) {
        this.limitNumber = this.goodsDetail.buy_num;
      } else if (this.type == 'groupbuy' && this.goodsDetail.groupbuy_id) {
        this.number = this.goodsDetail.buy_num;
        this.minNumber = this.goodsDetail.buy_num;
      } else if (this.type == 'bargain' && this.goodsDetail.bargain_id) {
        this.number = 1;
        this.minNumber = 1;
      } else if ((this.type == 'wholesale_join_cart' || this.type == 'wholesale_buy_now') && this.goodsDetail.
      wholesale_sku_id) {
        this.number = this.goodsDetail.min_num;
        this.minNumber = this.goodsDetail.min_num;
      }
      if (this.type == 'join_cart') {
        this.getCartData();
        this.$forceUpdate();
      }
    },
    hide: function hide() {
      this.$refs.skuPopup.close();
    },
    change: function change(skuId, spec_id) {
      //console.log("选择膜层", skuId, spec_id, this.goodsDetail)
      if (this.disabled) return;
      this.btnSwitch = false;
      this.skuId = skuId;
      // 清空选择
      for (var i = 0; i < this.goodsDetail.goods_spec_format.length; i++) {
        var sku = this.goodsDetail.goods_spec_format[i];
        for (var j = 0; j < sku.value.length; j++) {
          // 排除当前点击的规格值
          if (spec_id == this.goodsDetail.goods_spec_format[i].value[j].spec_id) {
            this.goodsDetail.goods_spec_format[i].value[j].selected = false;
          }
        }
      }
      if (this.goodsDetail.pintuan_id) {
        this.getPintuanGoodsSkuInfo();
      } else if (this.goodsDetail.groupbuy_id) {
        this.getGroupbuyGoodsSkuInfo();
      } else if (this.goodsDetail.bargain_id) {
        this.getBargainGoodsSkuInfo();
      } else if (this.goodsDetail.seckill_id) {
        this.getSeckillGoodsSkuInfo();
      } else if (this.goodsDetail.topic_id) {
        this.getTopicsGoodsSkuInfo();
      } else if (this.goodsDetail.exchange_id) {
        this.getPointGoodsSkuInfo();
      } else if (this.goodsDetail.wholesale_sku_id) {
        this.getWholeSaleGoodsSkuInfo();
      } else {
        this.getGoodsSkuInfo();
      }
    },
    // 获取普通商品详情
    getGoodsSkuInfo: function getGoodsSkuInfo() {var _this7 = this;
      var _this = this;
      var res = this.$api.sendRequest({
        url: '/api/goodssku/info',
        data: {
          sku_id: this.skuId },

        success: function success(res) {
          console.log(res.sku_images, "goodsSkuDetail.sku_images图片");
          var data = res.data;
          if (data != null) {
            data.unit = data.unit || '件';
            var goodsSkuDetail = data;
            // this.dealData();

            if (goodsSkuDetail.sku_spec_format) goodsSkuDetail.sku_spec_format = JSON.parse(
            data.sku_spec_format);
            // 限时折扣
            if (goodsSkuDetail.promotion_type == 1) {
              goodsSkuDetail.discountTimeMachine = _this.$util.countDown(
              goodsSkuDetail.end_time - res.timestamp);
            }

            if (goodsSkuDetail.promotion_type == 1 && goodsSkuDetail.
            discountTimeMachine) {
              goodsSkuDetail.show_price = goodsSkuDetail.discount_price;
            } else {
              goodsSkuDetail.show_price = goodsSkuDetail.price;
            }
            if (goodsSkuDetail.goods_spec_format) goodsSkuDetail.goods_spec_format = JSON.
            parse(goodsSkuDetail.goods_spec_format);
            _this.btnSwitch = false;
            _this.$emit('refresh', goodsSkuDetail);
          } else {
            _this7.$util.redirectTo('/pages/index/index/index', {}, 'reLaunch');
          }
        },
        fail: function fail(res) {
          _this7.btnSwitch = false;
          _this7.$util.redirectTo('/pages/index/index/index', {}, 'reLaunch');
        } });

    },
    // 获取拼团商品详情
    getPintuanGoodsSkuInfo: function getPintuanGoodsSkuInfo() {var _this8 = this;
      var res = this.$api.sendRequest({
        url: '/pintuan/api/goods/info',
        data: {
          sku_id: this.skuId,
          pintuan_id: this.goodsDetail.pintuan_id },

        success: function success(res) {
          var data = res.data;
          if (data != null) {
            if (data.type == 'again') {
              _this8.skuId = data.sku_id;
              _this8.getPintuanGoodsSkuInfo();
              return;
            }
            data.unit = data.unit || '件';
            _this8.goodsSkuDetail = data;
            _this8.dealData();
            //每次请求重新渲染sku
            // this.goodsDetail.goods_spec_format = this.goodsSkuDetail.sku_spec_format;

            _this8.goodsSkuDetail.show_price = _this8.goodsDetail.group_id == 0 ? _this8.
            goodsSkuDetail.promotion_price : _this8.goodsSkuDetail.pintuan_price;
            _this8.goodsSkuDetail.save_price =
            _this8.goodsSkuDetail.price - _this8.goodsSkuDetail.show_price > 0 ? (_this8.
            goodsSkuDetail.price - _this8.goodsSkuDetail.show_price).toFixed(2) : 0;

            //拼团倒计时
            if (_this8.goodsSkuDetail.end_time - res.timestamp > 0) {
              _this8.goodsSkuDetail.timeMachine = _this8.$util.countDown(_this8.goodsSkuDetail.
              end_time - res.timestamp);
            } else {
              _this8.$util.showToast({
                title: '活动已结束' });

              setTimeout(function () {
                _this8.$util.redirectTo(
                '/pages/goods/detail/detail', {
                  sku_id: _this8.goodsSkuDetail.sku_id },

                'redirectTo');

              }, 1000);
            }
            _this8.btnSwitch = false;
            _this8.$emit('refresh', _this8.goodsSkuDetail);
          } else {
            _this8.$util.redirectTo('/pages/index/index/index', {}, 'reLaunch');
          }
        },
        fail: function fail(res) {
          _this8.btnSwitch = false;
          _this8.$util.redirectTo('/pages/index/index/index', {}, 'reLaunch');
        } });

    },
    // 获取砍价商品详情
    getBargainGoodsSkuInfo: function getBargainGoodsSkuInfo() {var _this9 = this;
      var res = this.$api.sendRequest({
        url: '/bargain/api/goods/info',
        data: {
          sku_id: this.skuId,
          bargain_id: this.goodsDetail.bargain_id },

        success: function success(res) {
          var data = res.data;
          if (data != null) {
            if (data.type == 'again') {
              _this9.skuId = data.sku_id;
              _this9.getBargainGoodsSkuInfo();
              return;
            }
            data.unit = data.unit || '件';
            _this9.goodsSkuDetail = data;
            _this9.dealData();
            _this9.goodsSkuDetail.show_price = _this9.goodsDetail.bargain_id > 0 ? _this9.
            goodsSkuDetail.floor_price : _this9.goodsSkuDetail.price;
            _this9.goodsSkuDetail.stock = _this9.goodsSkuDetail.bargain_stock; //砍价库存
            _this9.goodsSkuDetail.save_price =
            _this9.goodsSkuDetail.price - _this9.goodsSkuDetail.show_price > 0 ? (_this9.
            goodsSkuDetail.price - _this9.goodsSkuDetail.show_price).toFixed(2) : 0;

            //团购倒计时
            if (_this9.goodsSkuDetail.end_time - res.timestamp > 0) {
              _this9.goodsSkuDetail.timeMachine = _this9.$util.countDown(_this9.goodsSkuDetail.
              end_time - res.timestamp);
            } else {
              _this9.$util.showToast({
                title: '活动已结束' });

              setTimeout(function () {
                _this9.$util.redirectTo(
                '/pages/goods/detail/detail', {
                  sku_id: _this9.goodsSkuDetail.sku_id },

                'redirectTo');

              }, 1000);
            }
            _this9.btnSwitch = false;
            _this9.$emit('refresh', _this9.goodsSkuDetail);
          } else {
            _this9.$util.redirectTo('/pages/index/index/index', {}, 'reLaunch');
          }
        },
        fail: function fail(res) {
          _this9.btnSwitch = false;
          _this9.$util.redirectTo('/pages/index/index/index', {}, 'reLaunch');
        } });

    },
    // 获取专题商品详情
    getTopicsGoodsSkuInfo: function getTopicsGoodsSkuInfo() {var _this10 = this;
      var res = this.$api.sendRequest({
        url: '/topic/api/topicgoods/info',
        data: {
          sku_id: this.skuId,
          topic_id: this.goodsDetail.topic_id },

        success: function success(res) {
          var data = res.data;
          if (data != null) {
            if (data.type == 'again') {
              _this10.skuId = data.sku_id;
              _this10.getTopicsGoodsSkuInfo();
              return;
            }
            data.unit = data.unit || '件';
            _this10.goodsSkuDetail = data.goods_sku_detail;
            _this10.dealData();
            _this10.goodsSkuDetail.show_price = _this10.goodsDetail.topic_id > 0 ? _this10.
            goodsSkuDetail.topic_price : _this10.goodsSkuDetail.price;
            _this10.goodsSkuDetail.save_price =
            _this10.goodsSkuDetail.price - _this10.goodsSkuDetail.show_price > 0 ? (_this10.
            goodsSkuDetail.price - _this10.goodsSkuDetail.show_price).toFixed(2) : 0;

            //团购倒计时
            if (_this10.goodsSkuDetail.end_time - res.timestamp > 0) {
              _this10.goodsSkuDetail.timeMachine = _this10.$util.countDown(_this10.goodsSkuDetail.
              end_time - res.timestamp);
            } else {
              _this10.$util.showToast({
                title: '活动已结束' });

              setTimeout(function () {
                _this10.$util.redirectTo(
                '/pages/goods/detail/detail', {
                  sku_id: _this10.goodsSkuDetail.sku_id },

                'redirectTo');

              }, 1000);
            }
            _this10.btnSwitch = false;
            _this10.$emit('refresh', _this10.goodsSkuDetail);
          } else {
            _this10.$util.redirectTo('/pages/index/index/index', {}, 'reLaunch');
          }
        },
        fail: function fail(res) {
          _this10.btnSwitch = false;
          _this10.$util.redirectTo('/pages/index/index/index', {}, 'reLaunch');
        } });

    },
    // 获取团购商品详情
    getGroupbuyGoodsSkuInfo: function getGroupbuyGoodsSkuInfo() {var _this11 = this;
      var res = this.$api.sendRequest({
        url: '/groupbuy/api/goods/info',
        data: {
          sku_id: this.skuId,
          groupbuy_id: this.goodsDetail.groupbuy_id },

        success: function success(res) {
          var data = res.data;
          if (data != null) {
            data.unit = data.unit || '件';
            _this11.goodsSkuDetail = data;
            _this11.dealData();
            _this11.goodsSkuDetail.show_price = _this11.goodsDetail.groupbuy_price;
            _this11.goodsSkuDetail.save_price =
            _this11.goodsSkuDetail.price - _this11.goodsSkuDetail.show_price > 0 ? (_this11.
            goodsSkuDetail.price - _this11.goodsSkuDetail.show_price).toFixed(2) : 0;

            //团购倒计时
            if (_this11.goodsSkuDetail.end_time - res.timestamp > 0) {
              _this11.goodsSkuDetail.timeMachine = _this11.$util.countDown(_this11.goodsSkuDetail.
              end_time - res.timestamp);
            } else {
              _this11.$util.showToast({
                title: '活动已结束' });

              setTimeout(function () {
                _this11.$util.redirectTo(
                '/pages/goods/detail/detail', {
                  sku_id: _this11.goodsSkuDetail.sku_id },

                'redirectTo');

              }, 1000);
            }

            _this11.btnSwitch = false;
            _this11.$emit('refresh', _this11.goodsSkuDetail);
          } else {
            _this11.$util.redirectTo('/pages/index/index/index', {}, 'reLaunch');
          }
        },
        fail: function fail(res) {
          _this11.btnSwitch = false;
          _this11.$util.redirectTo('/pages/index/index/index', {}, 'reLaunch');
        } });

    },
    // 获取秒杀商品详情
    getSeckillGoodsSkuInfo: function getSeckillGoodsSkuInfo() {var _this12 = this;
      var res = this.$api.sendRequest({
        url: '/seckill/api/seckillgoods/info',
        data: {
          sku_id: this.skuId,
          seckill_id: this.goodsDetail.seckill_id },

        success: function success(res) {
          var data = res.data;
          if (data != null) {
            if (data.type == 'again') {
              _this12.skuId = data.sku_id;
              _this12.getSeckillGoodsSkuInfo();
              return;
            }
            data.unit = data.unit || '件';
            _this12.goodsSkuDetail = data.goods_sku_detail;
            _this12.dealData();

            _this12.goodsSkuDetail.show_price = _this12.goodsSkuDetail.seckill_price;

            _this12.goodsSkuDetail.price - _this12.goodsSkuDetail.show_price > 0 ? (_this12.
            goodsSkuDetail.price - _this12.goodsSkuDetail.show_price).toFixed(2) : 0;

            //秒杀倒计时
            if (_this12.goodsSkuDetail.end_time - res.timestamp > 0) {
              _this12.goodsSkuDetail.timeMachine = _this12.$util.countDown(_this12.goodsSkuDetail.
              end_time - res.timestamp);
            } else {
              _this12.$util.showToast({
                title: '活动已结束' });

              setTimeout(function () {
                _this12.$util.redirectTo(
                '/pages/goods/detail/detail', {
                  sku_id: _this12.goodsSkuDetail.sku_id },

                'redirectTo');

              }, 1000);
            }

            _this12.btnSwitch = false;
            _this12.$emit('refresh', _this12.goodsSkuDetail);
          } else {
            _this12.$util.redirectTo('/pages/index/index/index', {}, 'reLaunch');
          }
        },
        fail: function fail(res) {
          _this12.btnSwitch = false;
          _this12.$util.redirectTo('/pages/index/index/index', {}, 'reLaunch');
        } });

    },
    // 获取积分商城详情
    getPointGoodsSkuInfo: function getPointGoodsSkuInfo() {var _this13 = this;
      var res = this.$api.sendRequest({
        url: '/pointexchange/api/goods/info',
        data: {
          sku_id: this.skuId,
          exchange_id: this.goodsDetail.exchange_id },

        success: function success(res) {
          var data = res.data;
          if (data != null) {
            if (data.type == 'again') {
              _this13.skuId = data.sku_id;
              _this13.getPointGoodsSkuInfo();
              return;
            }
            data.unit = data.unit || '件';
            _this13.goodsSkuDetail = data;
            _this13.dealData();
            _this13.btnSwitch = false;
            _this13.$emit('refresh', _this13.goodsSkuDetail);
          } else {
            _this13.$util.redirectTo('/promotionpages/point/list/list', {}, 'redirectTo');
          }
        },
        fail: function fail(res) {
          _this13.btnSwitch = false;
          _this13.$util.redirectTo('/pages/index/index/index', {}, 'reLaunch');
        } });

    },
    // 获取批发商品详情
    getWholeSaleGoodsSkuInfo: function getWholeSaleGoodsSkuInfo() {var _this14 = this;
      var res = this.$api.sendRequest({
        url: '/wholesale/api/goods/info',
        data: {
          sku_id: this.skuId },

        success: function success(res) {
          var data = res.data;
          if (data != null) {
            data.unit = data.unit || '件';
            _this14.goodsSkuDetail = data;
            _this14.number = _this14.goodsSkuDetail.min_num;
            _this14.minNumber = _this14.goodsSkuDetail.min_num;
            _this14.dealData();
            _this14.btnSwitch = false;
            _this14.$emit('refresh', _this14.goodsSkuDetail);
          } else {
            _this14.$util.redirectTo('/pages/index/index/index', {}, 'reLaunch');
          }
        },
        fail: function fail(res) {
          _this14.btnSwitch = false;
          _this14.$util.redirectTo('/pages/index/index/index', {}, 'reLaunch');
        } });

    },
    //点击增加单笔数量
    getClickGoodsAdd: function getClickGoodsAdd(obj, eyeIndex) {
      //console.log(this.cylinder_mirrorArray_bk, "sssssssssss");
      this.myValue.push({
        objIndex: undefined,
        product_num: 1,
        sumIndex: undefined,
        axisIndex: undefined,
        cylinder_mirrorIndex: undefined,
        ball_mirrorIndex: undefined,
        leftIndex: eyeIndex || 0,
        axisValue: 0,
        cylinder_mirrorArray: this.cylinder_mirrorArray_bk,
        ball_mirrorArray: this.ball_mirrorArray_bk });

      //console.log(this.photometric, "myvalue", this.myValue);
      // //console.log(this.myValue)
      // let gets = this.myValue.slice()
      this.scrollto = "addbtn".concat(this.myValue.length);
      //console.log(this.scrollto, "到哪去")
    },
    //删除选中订单
    removeTap: function removeTap(index) {
      this.myValue.splice(index, 1);
    },
    dealData: function dealData() {var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.goodsSkuDetail;
      if (item.sku_images) item.sku_images = item.sku_images.split(',');else
      item.sku_images = [];

      // 多规格时合并主图
      if (item.goods_spec_format && item.goods_image) {
        item.goods_image = item.goods_image.split(',');
        item.sku_images = item.sku_images.concat(item.goods_image);
      }

      // 当前商品SKU规格
      if (item.sku_spec_format) item.sku_spec_format = JSON.parse(item.sku_spec_format);

      // 商品属性
      if (item.goods_attr_format) {
        var goods_attr_format = JSON.parse(item.goods_attr_format);
        item.goods_attr_format = this.$util.unique(goods_attr_format, 'attr_id');
        for (var i = 0; i < item.goods_attr_format.length; i++) {
          for (var j = 0; j < goods_attr_format.length; j++) {
            if (item.goods_attr_format[i].attr_id == goods_attr_format[j].attr_id && item.
            goods_attr_format[i].attr_value_id != goods_attr_format[j].attr_value_id) {
              item.goods_attr_format[i].attr_value_name += '、' + goods_attr_format[j].attr_value_name;
            }
          }
        }
      }

      // 商品SKU格式
      if (item.goods_spec_format) item.goods_spec_format = JSON.parse(item.goods_spec_format);

      // 商品详情
      // if (item.goods_content && this.type != 'point') item.goods_content = htmlParser(item.goods_content);

      // if (item.content && this.type == 'point') item.content = htmlParser(item.content);

      this.goodsDetail.unit = this.goodsDetail.unit || '件';

      this.keyInput(true);

      this.$langConfig.title(item.goods_name);
    },
    changeNum: function changeNum(tag) {
      if (this.goodsDetail.stock == 0) return;

      var stock = this.goodsDetail.stock;
      var min = 1;

      if (this.maxBuy > 0 && this.maxBuy < stock) stock = this.maxBuy;

      if (this.maxBuy > 0 && this.goodsDetail.purchased_num > 0) {
        stock = this.maxBuy - this.goodsDetail.purchased_num;
      }

      if (this.minBuy > 1) {
        min = this.minBuy;
      }

      if (this.type == 'pintuan' && this.goodsDetail.pintuan_id) {
        //限购数量大于库存总数取库存
        if (this.goodsDetail.buy_num > this.goodsDetail.stock) {
          stock = this.goodsDetail.stock;
        } else {
          stock = this.goodsDetail.buy_num;
        }
        // min = stock;
      } else if (this.type == 'groupbuy' && this.goodsDetail.groupbuy_id) {
        //限购数量大于库存总数取库存
        if (this.goodsDetail.buy_num > this.goodsDetail.stock) {
          stock = this.goodsDetail.stock;
        } else {
          stock = this.goodsDetail.stock;
        }
        //最低购买数量
        min = this.goodsDetail.buy_num;
      } else if (this.type == 'seckill' && this.goodsDetail.seckill_id && this.goodsDetail.num > 0 && this.
      goodsDetail.num < this.goodsDetail.stock) {
        //限购数量小于库存总数取库存
        stock = this.goodsDetail.num;
      } else if (this.type == 'bargain' && this.goodsDetail.bargain_id) {
        stock = 1;
      }
      if (tag == '+') {
        // 加
        if (this.number < stock) {
          this.number++;
        } else {
          if (this.maxBuy > 0 && this.goodsDetail.purchased_num > 0) {
            this.$util.showToast({
              title: '该商品每人限购' + this.maxBuy + this.goodsDetail.unit + '，您已购买了' + this.
              goodsDetail.purchased_num + this.goodsDetail.unit });

            return;
          }
          if (this.maxBuy > 0 && this.cartNumber > 0 && this.cartNumber + this.number > this.maxBuy) {
            var diff = this.maxBuy - this.cartNumber;
            if (diff > 0) {
              this.$util.showToast({
                title: '该商品每人限购' +
                this.maxBuy +
                this.goodsDetail.unit +
                '，购物车已加入了' +
                this.cartNumber +
                this.goodsDetail.unit +
                '，还能购买' +
                diff +
                this.goodsDetail.unit });

            } else {
              this.$util.showToast({
                title: '该商品每人限购' + this.maxBuy + this.goodsDetail.unit });

            }
            return;
          }
          if (this.type == 'seckill' && this.goodsDetail.seckill_id && this.goodsDetail.num > 0) {
            this.$util.showToast({
              title: '该商品每人限购' + this.goodsDetail.num + this.goodsDetail.unit });

            return;
          }
        }
      } else if (tag == '-') {
        // 减
        if (this.number > min) {
          this.number -= 1;
        } else {
          if (this.minBuy > 1) {
            this.$util.showToast({
              title: '该商品' + this.minBuy + this.goodsDetail.unit + '起售' });

          }
          return;
        }
      }
      if (this.number > this.limitNumber && this.limitNumber) {
        this.number = this.limitNumber;
      }
    },
    blur: function blur() {var _this15 = this;
      if (!this.number) {
        this.number = 0;
      }
      if (this.number > this.limitNumber && this.limitNumber) {
        this.number = this.limitNumber;
      }
      if (this.number < this.minNumber && this.minNumber) {
        this.number = this.minNumber;
      }

      if (this.maxBuy > 0 && this.number > this.maxBuy) {
        this.number = this.maxBuy;
      }

      if (this.maxBuy > 0 && this.goodsDetail.purchased_num > 0) {
        var maxBuy = this.maxBuy - this.goodsDetail.purchased_num;
        if (this.number > maxBuy) this.number = maxBuy;
      }
      if (this.number < this.minBuy && this.minBuy > 0) {
        this.number = this.minBuy;
      }

      var newNumber = parseInt(this.number);
      this.number = 0;
      setTimeout(function () {
        _this15.number = newNumber;
      }, 0);
    },
    //输入数量
    keyInput: function keyInput(flag, callback) {var _this16 = this;
      setTimeout(function () {
        var stock = _this16.goodsDetail.stock;

        // 库存为0
        if (_this16.goodsDetail.stock == 0) {
          _this16.number = 0;
          return;
        }

        // 防止空
        if (flag && _this16.number.length == 0) _this16.number = 1;

        // 防止输入0和负数、非法输入
        if (flag && (_this16.number <= 0 || isNaN(_this16.number))) _this16.number = 1;

        if (_this16.type == 'pintuan' && _this16.goodsDetail.pintuan_id && _this16.number > _this16.goodsDetail.
        buy_num) {
          //限购数量大于库存总数取库存
          _this16.number = _this16.goodsDetail.buy_num;
        } else if (_this16.type == 'groupbuy' && _this16.goodsDetail.groupbuy_id && _this16.number < _this16.
        goodsDetail.buy_num) {
          //最低购买数量
          _this16.number = _this16.goodsDetail.buy_num;
        } else if (_this16.type == 'seckill' && _this16.goodsDetail.seckill_id && _this16.goodsDetail.max_buy >
        0 && _this16.number > _this16.goodsDetail.max_buy) {
          //限购数量大于库存总数取库存
          _this16.number = _this16.goodsDetail.max_buy;
        } else if (_this16.type == 'bargain' && _this16.goodsDetail.bargain_id) {
          // 砍价
          _this16.number = 1;
        } else if (_this16.number > stock) {
          _this16.number = stock;
        }
        // 商品起售数
        if (_this16.minBuy > 1 && _this16.number < _this16.minBuy) {
          _this16.number = _this16.minBuy;
        }

        if (flag) _this16.number = parseInt(_this16.number);
        if (callback) callback();
      }, 0);
    },

    //提交
    confirm: function confirm() {var _this17 = this;
      //console.log(this.number);
      // 删除待付款物流方式缓存
      uni.removeStorageSync('delivery');
      if (this.preview) {
        this.$util.showToast({
          title: '预览商品无法购买' });

        return;
      }
      //判断
      // this.photometric =photometric
      // ball_mirrorIndex:null,
      // cylinder_mirrorIndex:null,
      // axisIndex:null,
      // ball_mirrorArray:[],
      // cylinder_mirrorArray:[],
      // axisArray:[],

      //检查数据是否填完
      if (!this.checkParam()) return;

      if (!uni.getStorageSync('token')) {
        this.$refs.login.open();
        return;
      }

      //纠正数量
      this.keyInput(true, function () {
        if (_this17.goodsDetail.stock == 0) {
          _this17.$util.showToast({
            title: '商品已售罄' });

          return;
        }

        if (_this17.number.length == 0 || _this17.number == 0) {
          _this17.$util.showToast({
            title: '购买数量不能为0' });

          return;
        }

        if (_this17.number > _this17.goodsDetail.stock) {
          _this17.$util.showToast({
            title: '库存不足' });

          return;
        }

        if (_this17.maxBuy > 0 && _this17.goodsDetail.purchased_num > 0 && _this17.number > _this17.maxBuy - _this17.
        goodsDetail.purchased_num) {
          _this17.$util.showToast({
            title: '该商品每人限购' + _this17.maxBuy + _this17.goodsDetail.unit + '，您已购买了' + _this17.
            goodsDetail.purchased_num + _this17.goodsDetail.unit });

          return;
        }
        if (_this17.maxBuy > 0 && _this17.cartNumber > 0 && _this17.cartNumber + _this17.number > _this17.maxBuy) {
          var diff = _this17.maxBuy - _this17.cartNumber;
          if (diff > 0) {
            _this17.$util.showToast({
              title: '该商品每人限购' +
              _this17.maxBuy +
              _this17.goodsDetail.unit +
              '，购物车已加入了' +
              _this17.cartNumber +
              _this17.goodsDetail.unit +
              '，还能购买' +
              diff +
              _this17.goodsDetail.unit });

          } else {
            _this17.$util.showToast({
              title: '该商品每人限购' + _this17.maxBuy + _this17.goodsDetail.unit });

          }
          return;
        }

        if (_this17.btnSwitch) return;
        _this17.btnSwitch = true;

        var leftIndex = 0;
        var cylinder_mirrorIndex = 0;
        var ball_mirrorIndex = 0;
        var axisIndex = 0;
        var objIndex = 0;
        var sumIndex = 0;
        var number = 0;
        var sku_id = 0;
        _this17.myValue.forEach(function (item) {
          leftIndex = item.leftIndex;
          cylinder_mirrorIndex = item.cylinder_mirrorIndex;
          ball_mirrorIndex = item.ball_mirrorIndex;
          axisIndex = item.axisIndex;
          objIndex = item.objIndex;
          sumIndex = item.sumIndex;
          number = item.product_num;
          sku_id = item.sku_id;
        });
        var LensParam = [];
        _this17.myValue.map(function (e) {
          LensParam.push({
            eye: e.leftIndex == 0 ? '右眼' : '左眼', //左右眼
            passage: _this17.objArray[e.objIndex], //通道
            a_dd: _this17.sumArray[e.sumIndex], //ADD
            num: e.product_num, //数量
            ball_mirror: e.ball_mirrorArray[e.ball_mirrorIndex], //球镜
            cylinder_mirror: e.cylinder_mirrorArray[e.cylinder_mirrorIndex], //柱镜
            axis: e.axisValue, // e.axisIndex, //轴位
            sku_id: e.sku_id });

        });
        //console.log(LensParam, "111")
        // 加入购物车
        if (_this17.type == 'join_cart') _this17.postJoinCart(LensParam);
        //立即购买
        if (_this17.type == 'buy_now') _this17.postBuyNow();
        //秒杀
        if (_this17.type == 'seckill') _this17.postSeckill();
        // 拼团
        if (_this17.type == 'pintuan') _this17.postPintuan();
        // 专题
        if (_this17.type == 'topic') _this17.postTopic();
        // 团购
        if (_this17.type == 'groupbuy') _this17.postGroupBuy();
        // 预售
        if (_this17.type == 'presale') _this17.postPresale();
        // 砍价
        if (_this17.type == 'bargain') _this17.postBargain();
        // 积分兑换
        if (_this17.type == 'point') _this17.postPoint();
        // 批发·加入进货单
        if (_this17.type == 'wholesale_join_cart') _this17.postPfJoin();
        // 批发·立即购买
        if (_this17.type == 'wholesale_buy_now') _this17.postPfBuy();
        //清空状态
        _this17.myValue = [];
        _this17.getClickGoodsAdd();
        console.error(_this17.goodsDetail.rimless, "rimless");
        if (_this17.goodsDetail.rimless == 1) {
          _this17.rimless = _this17.goodsDetail.rimless;
          _this17.getClickGoodsAdd({}, 1);
        }
      });
    },
    /** 
        * @return true 通过 false不通过
        * */
    checkParam: function checkParam() {var _this18 = this;
      var ispost = true;

      if (this.goodsDetail.photometric != 0 || this.goodsDetail.luminosity_status == 1) {//this.photometric != 0
        this.myValue.forEach(function (e) {
          if (e.ball_mirrorArray[e.ball_mirrorIndex] == undefined) {
            _this18.$util.showToast({
              title: '请选择球镜' });

            ispost = false;
            return;
          }
          if (e.cylinder_mirrorArray[e.cylinder_mirrorIndex] == undefined) {
            _this18.$util.showToast({
              title: '请选择柱镜' });

            ispost = false;
            return;
          }

          // 						if ( !e.axisValue) {//e.axisIndex == undefined ||
          // 							this.$util.showToast({
          // 								title: '请输入轴位'
          // 							});
          // 							ispost = false;
          // 							return;
          // 						}
          if (e.sumIndex == undefined && _this18.goodsDetail.a_dd == 1) {
            _this18.$util.showToast({
              title: '请选择ADD' });

            ispost = false;
            return;
          }
          if (e.objIndex == undefined && _this18.goodsDetail.passage == 1) {
            _this18.$util.showToast({
              title: '请选择通道' });

            ispost = false;
            return;
          }
          _this18.quantity += e.product_num;
          if (_this18.goodsDetail.stock <= e.product_num) {
            _this18.$util.showToast({
              title: '请不要大于库存数量' });

            ispost = false;
            return;
          }

        });
      }
      return ispost;
    },
    postJoinCart: function postJoinCart(LensParam) {var _this19 = this;
      var number = this.number;
      var param = this.goodsDetail.photometric != 0 || this.goodsDetail.luminosity_status == 1 ? { //镜片
        sku_id: this.skuId,
        site_id: this.goodsDetail.site_id,
        list: JSON.stringify(LensParam),
        buyer_message: this.buyer_message,
        rimless: this.rimless } :
      { //默认参数,未做修改
        site_id: this.goodsDetail.site_id,
        sku_id: this.skuId,
        ball_mirror: this.ball_mirrorIndex != null ? this.ball_mirrorArray[this.
        ball_mirrorIndex] : 0,
        cylinder_mirror: this.cylinder_mirrorIndex != null ? this.
        cylinder_mirrorArray[this.cylinder_mirrorIndex] : 0,
        axis: this.axisValue, //手动输入的值
        //选择 this.axisIndex != null ? this.axisArray[this.axisIndex] : 0,
        //add和通道数据
        a_dd_data: this.sumIndex != null ? this.sumIndex[this.sumIndex] : 0,
        passage_data: this.objIndex != null ? this.objIndex[this.objIndex] : 0,
        num: number,
        buyer_message: this.buyer_message,
        rimless: this.rimless };

      //console.log(param, "parammmmmmmmmmm");
      this.$api.sendRequest({
        url: '/api/cart/add',
        data: param,
        success: function success(res) {
          //console.log(res);
          var data = res.data;
          if (data > 0) {
            _this19.$util.showToast({
              title: '加入购物车成功' });

            if (_this19.callback) _this19.callback();
          }
          _this19.$refs.skuPopup.close();
          _this19.btnSwitch = false;
        },
        fail: function fail(res) {
          _this19.$refs.skuPopup.close();
          _this19.btnSwitch = false;
        } });

    },
    postBuyNow: function postBuyNow() {var _this20 = this;
      var data = {
        sku_id: this.skuId,
        num: this.number,
        ball_mirror: this.ball_mirrorIndex != null ? this.ball_mirrorArray[this.
        ball_mirrorIndex] : 0,
        cylinder_mirror: this.cylinder_mirrorIndex != null ? this.cylinder_mirrorArray[this.
        cylinder_mirrorIndex] : 0,
        axis: this.axisIndex != null ? this.axisArray[this.axisIndex] : 0
        // add和通道数据
        // a_dd_data:this.AarrySum != null ? this.AarrySum[this.AarrySum] : 0,
        // passage_data:this.AarryObj != null ? this.AarryObj[this.AarryObj] : 0,
      };


      uni.setStorage({
        key: 'orderCreateData',
        data: data,
        success: function success() {
          _this20.$util.redirectTo('/pages/order/payment/payment');
          _this20.btnSwitch = false;
        } });

    },
    postSeckill: function postSeckill() {var _this21 = this;

      // 秒杀
      var data = {
        seckill_id: this.goodsDetail.seckill_id,
        num: this.number,
        sku_id: this.skuId };


      uni.setStorage({
        key: 'seckillOrderCreateData',
        data: data,
        success: function success() {
          _this21.$util.redirectTo('/promotionpages/seckill/payment/payment');
          _this21.btnSwitch = false;
        } });

    },
    postPintuan: function postPintuan() {var _this22 = this;

      // 拼团
      var data = {
        pintuan_goods_id: this.goodsDetail.id,
        group_id: this.goodsDetail.group_id,
        num: this.number };


      uni.setStorage({
        key: 'pintuanOrderCreateData',
        data: data,
        success: function success() {
          _this22.$util.redirectTo('/promotionpages/pintuan/payment/payment');
          _this22.btnSwitch = false;
        } });

    },
    postTopic: function postTopic() {var _this23 = this;
      // 专题
      var data = {
        topic_goods_id: this.goodsDetail.id,
        num: this.number };


      uni.setStorage({
        key: 'topicOrderCreateData',
        data: data,
        success: function success() {
          _this23.$util.redirectTo('/promotionpages/topics/payment/payment');
          _this23.btnSwitch = false;
        } });

    },
    postGroupBuy: function postGroupBuy() {var _this24 = this;
      // 团购
      var data = {
        groupbuy_id: this.goodsDetail.groupbuy_id,
        sku_id: this.skuId,
        num: this.number };


      uni.setStorage({
        key: 'groupbuyOrderCreateData',
        data: data,
        success: function success() {
          _this24.$util.redirectTo('/promotionpages/groupbuy/payment/payment');
          _this24.btnSwitch = false;
        } });

    },
    postPresale: function postPresale() {var _this25 = this;
      // 预售
      var data = {
        presale_id: this.goodsDetail.presale_id,
        sku_id: this.skuId,
        num: this.number };

      uni.setStorage({
        key: 'presaleOrderCreateData',
        data: data,
        success: function success() {
          _this25.$util.redirectTo('/promotionpages/presale/payment/payment');
          _this25.btnSwitch = false;
        } });

    },
    postBargain: function postBargain() {var _this26 = this;
      // 砍价
      this.$api.sendRequest({
        url: '/bargain/api/bargain/launch',
        data: {
          id: this.goodsDetail.id },

        success: function success(res) {
          _this26.btnSwitch = false;
          if (res.code == 0) {
            _this26.$util.redirectTo(
            '/promotionpages/bargain/launch/launch', {
              id: res.data },

            'redirectTo');

          } else {
            _this26.$util.showToast({
              title: res.message });

          }
        } });

    },
    postPoint: function postPoint() {var _this27 = this;

      // 积分兑换
      var data = {
        id: this.goodsDetail.exchange_id,
        sku_id: this.skuId,
        num: this.number };

      uni.setStorage({
        key: 'exchangeOrderCreateData',
        data: data,
        success: function success() {
          _this27.$util.redirectTo('/promotionpages/point/payment/payment');
          _this27.btnSwitch = false;
        } });

    },
    postPfJoin: function postPfJoin() {var _this28 = this;
      // 批发·加入进货单
      this.$api.sendRequest({
        url: '/wholesale/api/cart/add',
        data: {
          site_id: this.goodsDetail.site_id,
          sku_id: this.skuId,
          num: this.number },

        success: function success(res) {
          var data = res.data;
          if (data > 0) {
            _this28.$util.showToast({
              title: '加入进货单成功' });

            if (_this28.callback) _this28.callback();
            _this28.$store.dispatch('getWholeSaleNumber');
          }
          _this28.$refs.skuPopup.close();
          _this28.btnSwitch = false;
        },
        fail: function fail(res) {
          _this28.$refs.skuPopup.close();
          _this28.btnSwitch = false;
        } });

    },
    postPfBuy: function postPfBuy() {var _this29 = this;
      // 批发·立即购买
      var data = {
        sku_id: this.skuId,
        num: this.number };


      uni.setStorage({
        key: 'wholesaleOrderCreateData',
        data: data,
        success: function success() {
          _this29.$util.redirectTo('/promotionpages/wholesale/payment/payment');
          _this29.btnSwitch = false;
        } });

    },
    closeSkuPopup: function closeSkuPopup() {
      this.$refs.skuPopup.close();
    },
    imgError: function imgError() {
      this.goodsDetail.sku_image = this.$util.getDefaultImage().default_goods_img;
      this.$forceUpdate();
    },
    valueImgError: function valueImgError(index, index_value) {
      this.goodsDetail.goods_spec_format[index].value[index_value].image = this.$util.getDefaultImage().
      default_goods_img;
      this.$forceUpdate();
    },
    // 获取购物车数据
    getCartData: function getCartData() {var _this30 = this;
      this.$api.sendRequest({
        url: '/api/cart/goodslists',
        success: function success(res) {
          if (res.code >= 0) {
            var data = res.data;
            for (var i = 0; i < data.length; i++) {
              if (data[i].sku_id == _this30.goodsDetail.sku_id) {
                _this30.cartNumber = data[i].num;
                break;
              }
            }
          }
        } });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 649:
/*!***************************************************************************************************************!*\
  !*** /Users/longchu/Documents/镜惠购/components/ns-goods-sku/ns-goods-sku.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ns_goods_sku_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./ns-goods-sku.vue?vue&type=style&index=0&lang=scss& */ 650);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ns_goods_sku_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ns_goods_sku_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ns_goods_sku_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ns_goods_sku_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ns_goods_sku_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 650:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/longchu/Documents/镜惠购/components/ns-goods-sku/ns-goods-sku.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 651:
/*!**************************************************************************************************************************************!*\
  !*** /Users/longchu/Documents/镜惠购/components/ns-goods-sku/ns-goods-sku.vue?vue&type=style&index=1&id=407fe378&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ns_goods_sku_vue_vue_type_style_index_1_id_407fe378_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./ns-goods-sku.vue?vue&type=style&index=1&id=407fe378&scoped=true&lang=css& */ 652);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ns_goods_sku_vue_vue_type_style_index_1_id_407fe378_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ns_goods_sku_vue_vue_type_style_index_1_id_407fe378_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ns_goods_sku_vue_vue_type_style_index_1_id_407fe378_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ns_goods_sku_vue_vue_type_style_index_1_id_407fe378_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ns_goods_sku_vue_vue_type_style_index_1_id_407fe378_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 652:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/longchu/Documents/镜惠购/components/ns-goods-sku/ns-goods-sku.vue?vue&type=style&index=1&id=407fe378&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 654:
/*!*****************************************************************************************************************!*\
  !*** /Users/longchu/Documents/镜惠购/promotionpages/wholesale/detail/detail.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./detail.vue?vue&type=style&index=0&lang=scss& */ 655);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 655:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/longchu/Documents/镜惠购/promotionpages/wholesale/detail/detail.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 656:
/*!****************************************************************************************************************************************!*\
  !*** /Users/longchu/Documents/镜惠购/promotionpages/wholesale/detail/detail.vue?vue&type=style&index=1&id=02f2adfe&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_1_id_02f2adfe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./detail.vue?vue&type=style&index=1&id=02f2adfe&scoped=true&lang=css& */ 657);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_1_id_02f2adfe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_1_id_02f2adfe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_1_id_02f2adfe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_1_id_02f2adfe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_1_id_02f2adfe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 657:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/longchu/Documents/镜惠购/promotionpages/wholesale/detail/detail.vue?vue&type=style&index=1&id=02f2adfe&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[638,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/promotionpages/wholesale/detail/detail.js.map