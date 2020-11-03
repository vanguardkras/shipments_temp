(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/pages/types"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/TypesPage.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/TypesPage.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppDataLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AppDataLoader */ "./resources/js/components/AppDataLoader.vue");
/* harmony import */ var _mixins_asyncDataStatus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mixins/asyncDataStatus */ "./resources/js/mixins/asyncDataStatus.js");
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
  name: "TypesPage",
  components: {
    AppDataLoader: _AppDataLoader__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mixins: [_mixins_asyncDataStatus__WEBPACK_IMPORTED_MODULE_1__["default"]],
  data: function data() {
    return {
      dependencies: [{
        name: 'Продавец',
        link: 'seller'
      }, {
        name: 'Подрядчик',
        link: 'contractor'
      }, {
        name: 'Тип машины',
        link: 'car'
      }, {
        name: 'Тип контейнера',
        link: 'container'
      }, {
        name: 'Порт',
        link: 'port'
      }, {
        name: 'Аэропорт',
        link: 'airport'
      }, {
        name: 'Станция',
        link: 'station'
      }, {
        name: 'Параметры',
        link: 'parameter'
      }],
      types: []
    };
  },
  created: function created() {
    var _this = this;

    axios.get('/app/types').then(function (response) {
      _this.types = response.data;

      _this.asyncDataStatus_fetched();
    });
  },
  methods: {
    update: function update(type) {
      var _this2 = this;

      if (!confirm('Вы уверены, что хотите переименовать этот тип перевозки?')) {
        return;
      }

      axios.patch('app/types/' + type.id, type).then(function (response) {
        if (response.data === 'Success') {
          _this2.$set(type, 'updated', true);

          setTimeout(function () {
            return _this2.$set(type, 'updated', false);
          }, 3000);
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/TypesPage.vue?vue&type=template&id=5f8f3802&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/TypesPage.vue?vue&type=template&id=5f8f3802&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12" }, [
        _c("div", { staticClass: "card" }, [
          _c(
            "div",
            { staticClass: "card-body" },
            [
              _vm.asyncDataStatus_ready
                ? _c(
                    "table",
                    { staticClass: "table col-xl-8 col-lg-10 col-md-12" },
                    [
                      _vm._m(1),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        _vm._l(_vm.types, function(type) {
                          return _c("tr", { key: type.id }, [
                            _c(
                              "th",
                              {
                                staticClass: "align-middle",
                                attrs: { scope: "row" }
                              },
                              [_vm._v(_vm._s(type.id))]
                            ),
                            _vm._v(" "),
                            _c("td", { staticClass: "align-middle" }, [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: type.name,
                                    expression: "type.name"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text" },
                                domProps: { value: type.name },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(type, "name", $event.target.value)
                                  }
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "align-middle" }, [
                              _c("div", { staticClass: "btn-group" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "btn btn-sm btn-soft-primary dropdown-toggle",
                                    attrs: {
                                      type: "button",
                                      "data-toggle": "dropdown"
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                        Зависимости\n                                    "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "dropdown-menu" },
                                  _vm._l(_vm.dependencies, function(
                                    dependency
                                  ) {
                                    return _c(
                                      "div",
                                      { key: dependency.link },
                                      [
                                        dependency.link === "parameter"
                                          ? _c("div", {
                                              staticClass: "dropdown-divider"
                                            })
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _c(
                                          "router-link",
                                          {
                                            staticClass: "dropdown-item",
                                            attrs: {
                                              to:
                                                "/dependencies/" +
                                                dependency.link +
                                                "/type/" +
                                                type.id
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                                " +
                                                _vm._s(dependency.name) +
                                                "\n                                            "
                                            )
                                          ]
                                        )
                                      ],
                                      1
                                    )
                                  }),
                                  0
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "align-middle" }, [
                              _c(
                                "button",
                                {
                                  staticClass: "dangerous-rename btn btn-sm",
                                  class: type.updated
                                    ? "btn-success"
                                    : "btn-warning",
                                  attrs: { type: "button" },
                                  on: {
                                    click: function($event) {
                                      return _vm.update(type)
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(
                                        type.updated
                                          ? "Изменено"
                                          : "Переименовать"
                                      ) +
                                      "\n                                "
                                  )
                                ]
                              )
                            ])
                          ])
                        }),
                        0
                      )
                    ]
                  )
                : _c("app-data-loader")
            ],
            1
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row page-title" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("h4", { staticClass: "mb-1 mt-0" }, [_vm._v("Типы перевозки")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "thead-light" }, [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Название")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Настройки")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-danger", attrs: { scope: "col" } }, [
          _vm._v("Действия")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pages/TypesPage.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/pages/TypesPage.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TypesPage_vue_vue_type_template_id_5f8f3802_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TypesPage.vue?vue&type=template&id=5f8f3802&scoped=true& */ "./resources/js/components/pages/TypesPage.vue?vue&type=template&id=5f8f3802&scoped=true&");
/* harmony import */ var _TypesPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TypesPage.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/TypesPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TypesPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TypesPage_vue_vue_type_template_id_5f8f3802_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TypesPage_vue_vue_type_template_id_5f8f3802_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5f8f3802",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/TypesPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/TypesPage.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/pages/TypesPage.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TypesPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TypesPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/TypesPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TypesPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/TypesPage.vue?vue&type=template&id=5f8f3802&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/pages/TypesPage.vue?vue&type=template&id=5f8f3802&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TypesPage_vue_vue_type_template_id_5f8f3802_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TypesPage.vue?vue&type=template&id=5f8f3802&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/TypesPage.vue?vue&type=template&id=5f8f3802&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TypesPage_vue_vue_type_template_id_5f8f3802_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TypesPage_vue_vue_type_template_id_5f8f3802_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);