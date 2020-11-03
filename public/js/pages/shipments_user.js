(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/pages/shipments_user"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/ShipmentsUserPage.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/ShipmentsUserPage.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShipmentsView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ShipmentsView */ "./resources/js/components/ShipmentsView.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ShipmentsUserPage",
  components: {
    ShipmentsView: _ShipmentsView__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      shipments: [],
      selectedUser: null,
      users: [],
      render: false
    };
  },
  methods: {},
  created: function created() {
    var _this = this;

    axios.get('/app/users').then(function (response) {
      if (response.status === 200) {
        _this.users = response.data;
      }
    });
  },
  watch: {
    selectedUser: function selectedUser() {
      var _this2 = this;

      this.render = false;
      this.$nextTick(function () {
        return _this2.render = true;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/ShipmentsUserPage.vue?vue&type=template&id=7d7a300d&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/ShipmentsUserPage.vue?vue&type=template&id=7d7a300d&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container-fluid" }, [
    _c("div", { staticClass: "row page-title" }, [
      _c(
        "div",
        { staticClass: "col-md-12" },
        [
          _c("h4", { staticClass: "mb-1 mt-0" }, [
            _vm._v("Выберите сотрудника")
          ]),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.selectedUser,
                  expression: "selectedUser"
                }
              ],
              staticClass: "custom-select mb-2",
              on: {
                change: function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.selectedUser = $event.target.multiple
                    ? $$selectedVal
                    : $$selectedVal[0]
                }
              }
            },
            _vm._l(_vm.users, function(user) {
              return _c(
                "option",
                { key: user.id, domProps: { value: user.id } },
                [
                  _vm._v(
                    "\n                    " +
                      _vm._s(user.last_name + " " + user.first_name) +
                      "\n                "
                  )
                ]
              )
            }),
            0
          ),
          _vm._v(" "),
          _vm.render
            ? _c("shipments-view", {
                attrs: { request: _vm.selectedUser, with_delete: "true" }
              })
            : _vm._e()
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pages/ShipmentsUserPage.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/pages/ShipmentsUserPage.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShipmentsUserPage_vue_vue_type_template_id_7d7a300d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShipmentsUserPage.vue?vue&type=template&id=7d7a300d&scoped=true& */ "./resources/js/components/pages/ShipmentsUserPage.vue?vue&type=template&id=7d7a300d&scoped=true&");
/* harmony import */ var _ShipmentsUserPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShipmentsUserPage.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/ShipmentsUserPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ShipmentsUserPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShipmentsUserPage_vue_vue_type_template_id_7d7a300d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ShipmentsUserPage_vue_vue_type_template_id_7d7a300d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7d7a300d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/ShipmentsUserPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/ShipmentsUserPage.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/pages/ShipmentsUserPage.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShipmentsUserPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ShipmentsUserPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/ShipmentsUserPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShipmentsUserPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/ShipmentsUserPage.vue?vue&type=template&id=7d7a300d&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/pages/ShipmentsUserPage.vue?vue&type=template&id=7d7a300d&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShipmentsUserPage_vue_vue_type_template_id_7d7a300d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ShipmentsUserPage.vue?vue&type=template&id=7d7a300d&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/ShipmentsUserPage.vue?vue&type=template&id=7d7a300d&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShipmentsUserPage_vue_vue_type_template_id_7d7a300d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShipmentsUserPage_vue_vue_type_template_id_7d7a300d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);