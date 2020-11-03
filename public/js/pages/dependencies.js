(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/pages/dependencies"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/DependencyPage.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/DependencyPage.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "DependencyPage",
  components: {
    AppDataLoader: _AppDataLoader__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mixins: [_mixins_asyncDataStatus__WEBPACK_IMPORTED_MODULE_1__["default"]],
  data: function data() {
    return {
      sourceName: '',
      sourceValue: '',
      dependencyName: '',
      dependencies: [],
      saved: false
    };
  },
  computed: {
    dependency: function dependency() {
      return this.$route.params.dependency;
    },
    source: function source() {
      return this.$route.params.source;
    },
    id: function id() {
      return this.$route.params.id;
    },
    request: function request() {
      var words = [this.dependency, this.source];
      words.sort();
      return words[0] + '_' + words[1];
    }
  },
  created: function created() {
    this.initialize();
  },
  beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
    this.initialize();
    next();
  },
  methods: {
    initialize: function initialize() {
      var _this = this;

      // Set initial data
      if (this.source === 'type') {
        this.sourceName = 'Тип перевозки';
      } else {
        axios.get('/app/parameters/' + this.source).then(function (response) {
          return _this.sourceName = response.data.singular_name;
        });
      }

      axios.get("/app/".concat(this.source, "s/").concat(this.id)).then(function (response) {
        return _this.sourceValue = response.data.name;
      });
      axios.get('/app/parameters/' + this.dependency).then(function (response) {
        return _this.dependencyName = response.data.singular_name;
      });
      axios.get("/app/".concat(this.request, "/").concat(this.id)).then(function (response) {
        _this.dependencies = response.data;

        _this.asyncDataStatus_fetched();
      });
    },
    save: function save() {
      var _this2 = this;

      var data = this.dependencies.filter(function (value) {
        return value.checked;
      }).map(function (value) {
        return value.id;
      });
      axios.patch("/app/".concat(this.request, "/").concat(this.id), {
        data: data
      }).then(function (response) {
        if (response.data === 'Success') {
          _this2.saved = true;
          setTimeout(function () {
            return _this2.saved = false;
          }, 3000);
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/DependencyPage.vue?vue&type=template&id=6b490c90&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/DependencyPage.vue?vue&type=template&id=6b490c90&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "col-md-12" }, [
        _c("nav", { staticClass: "float-right mt-1" }, [
          _c("ol", { staticClass: "breadcrumb" }, [
            _c(
              "li",
              { staticClass: "breadcrumb-item" },
              [
                _c("router-link", { attrs: { to: "/" + _vm.source + "s" } }, [
                  _vm._v(_vm._s(_vm.sourceName))
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c("li", { staticClass: "breadcrumb-item" }, [
              _vm._v(_vm._s(_vm.sourceValue))
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "breadcrumb-item" }, [
              _vm._v(_vm._s(_vm.dependencyName))
            ])
          ])
        ]),
        _vm._v(" "),
        _c("h3", { staticClass: "mb-1 mt-0" }, [
          _vm._v(
            'Зависимости "' +
              _vm._s(_vm.dependencyName) +
              '" от "' +
              _vm._s(_vm.sourceName) +
              ": "
          ),
          _c("span", { staticClass: "text-primary" }, [
            _vm._v(_vm._s(_vm.sourceValue))
          ]),
          _vm._v('"')
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12" }, [
        _c("div", { staticClass: "card" }, [
          _c(
            "div",
            { staticClass: "card-body" },
            [
              _vm.asyncDataStatus_ready
                ? _c("div", [
                    _c(
                      "div",
                      _vm._l(_vm.dependencies, function(element) {
                        return _c(
                          "div",
                          {
                            key: _vm.dependency.id,
                            staticClass: "custom-control custom-checkbox mb-2",
                            attrs: { id: _vm.dependency.id }
                          },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: element.checked,
                                  expression: "element.checked"
                                }
                              ],
                              staticClass: "custom-control-input",
                              attrs: {
                                type: "checkbox",
                                id: _vm.dependency + "_" + element.id
                              },
                              domProps: {
                                checked: Array.isArray(element.checked)
                                  ? _vm._i(element.checked, null) > -1
                                  : element.checked
                              },
                              on: {
                                change: function($event) {
                                  var $$a = element.checked,
                                    $$el = $event.target,
                                    $$c = $$el.checked ? true : false
                                  if (Array.isArray($$a)) {
                                    var $$v = null,
                                      $$i = _vm._i($$a, $$v)
                                    if ($$el.checked) {
                                      $$i < 0 &&
                                        _vm.$set(
                                          element,
                                          "checked",
                                          $$a.concat([$$v])
                                        )
                                    } else {
                                      $$i > -1 &&
                                        _vm.$set(
                                          element,
                                          "checked",
                                          $$a
                                            .slice(0, $$i)
                                            .concat($$a.slice($$i + 1))
                                        )
                                    }
                                  } else {
                                    _vm.$set(element, "checked", $$c)
                                  }
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "label",
                              {
                                staticClass: "custom-control-label",
                                attrs: {
                                  for: _vm.dependency + "_" + element.id
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                    " +
                                    _vm._s(element.name) +
                                    "\n                                "
                                )
                              ]
                            )
                          ]
                        )
                      }),
                      0
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "mt-3" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          class: _vm.saved ? "btn-soft-primary" : "btn-primary",
                          on: { click: _vm.save }
                        },
                        [
                          _vm._v(
                            "\n                                " +
                              _vm._s(_vm.saved ? "Сохранено" : "Изменить") +
                              "\n                            "
                          )
                        ]
                      )
                    ])
                  ])
                : _c("app-data-loader")
            ],
            1
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pages/DependencyPage.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/pages/DependencyPage.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DependencyPage_vue_vue_type_template_id_6b490c90_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DependencyPage.vue?vue&type=template&id=6b490c90&scoped=true& */ "./resources/js/components/pages/DependencyPage.vue?vue&type=template&id=6b490c90&scoped=true&");
/* harmony import */ var _DependencyPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DependencyPage.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/DependencyPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DependencyPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DependencyPage_vue_vue_type_template_id_6b490c90_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DependencyPage_vue_vue_type_template_id_6b490c90_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6b490c90",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/DependencyPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/DependencyPage.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/pages/DependencyPage.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DependencyPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DependencyPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/DependencyPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DependencyPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/DependencyPage.vue?vue&type=template&id=6b490c90&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/pages/DependencyPage.vue?vue&type=template&id=6b490c90&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DependencyPage_vue_vue_type_template_id_6b490c90_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DependencyPage.vue?vue&type=template&id=6b490c90&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/DependencyPage.vue?vue&type=template&id=6b490c90&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DependencyPage_vue_vue_type_template_id_6b490c90_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DependencyPage_vue_vue_type_template_id_6b490c90_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);