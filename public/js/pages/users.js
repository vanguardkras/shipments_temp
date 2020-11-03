(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/pages/users"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/UsersEditPage.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/UsersEditPage.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "UsersEditPage",
  components: {
    AppDataLoader: _AppDataLoader__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mixins: [_mixins_asyncDataStatus__WEBPACK_IMPORTED_MODULE_1__["default"]],
  data: function data() {
    return {
      users: [],
      new_user: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        role: 3
      },
      created: false
    };
  },
  methods: {
    createUser: function createUser() {
      var _this = this;

      axios.post('/app/users', this.new_user).then(function (response) {
        if (response.status === 200) {
          _this.users.push(response.data);

          _this.created = true;
          setTimeout(function () {
            return _this.created = false;
          }, 3000);
        }
      });
    },
    editUser: function editUser(user) {
      var _this2 = this;

      axios.patch('/app/users/' + user.id, user).then(function (response) {
        _this2.$set(user, 'changed', true);

        setTimeout(function () {
          return _this2.$set(user, 'changed', false);
        }, 3000);
      });
    },
    deleteUser: function deleteUser(user) {
      var _this3 = this;

      if (!confirm('Вы уверены, что хотите удалить этого сотрудника?')) {
        return;
      }

      axios["delete"]('/app/users/' + user.id).then(function (response) {
        if (response.data === 'Success') {
          _this3.users.splice(_this3.users.indexOf(user), 1);
        }
      });
    }
  },
  created: function created() {
    var _this4 = this;

    axios.get('/app/users').then(function (response) {
      _this4.users = response.data;

      _this4.asyncDataStatus_fetched();
    });
  },
  updated: function updated() {
    $('[data-toggle="tooltip"]').tooltip();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/UsersEditPage.vue?vue&type=template&id=183d11bb&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/UsersEditPage.vue?vue&type=template&id=183d11bb&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
          _c("div", { staticClass: "card-body" }, [
            _c("h4", [_vm._v("Добавить Сотрудника")]),
            _vm._v(" "),
            _c(
              "table",
              { staticClass: "table table-sm dt-responsive nowrap mb-4" },
              [
                _vm._m(1),
                _vm._v(" "),
                _c("tbody", [
                  _c("tr", [
                    _c("td", { staticClass: "align-middle" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.new_user.last_name,
                            expression: "new_user.last_name"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.new_user.last_name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.new_user,
                              "last_name",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "align-middle" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.new_user.first_name,
                            expression: "new_user.first_name"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.new_user.first_name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.new_user,
                              "first_name",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "align-middle" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.new_user.email,
                            expression: "new_user.email"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "email" },
                        domProps: { value: _vm.new_user.email },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.new_user, "email", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "align-middle" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.new_user.password,
                            expression: "new_user.password"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "password" },
                        domProps: { value: _vm.new_user.password },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.new_user,
                              "password",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticClass: "align-middle",
                        model: {
                          value: _vm.new_user.role,
                          callback: function($$v) {
                            _vm.$set(_vm.new_user, "role", $$v)
                          },
                          expression: "new_user.role"
                        }
                      },
                      [_vm._m(2)]
                    ),
                    _vm._v(" "),
                    _c("td", { staticClass: "align-middle" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn",
                          class: _vm.created
                            ? "btn-soft-success"
                            : "btn-success",
                          on: { click: _vm.createUser }
                        },
                        [
                          _vm._v(
                            "\n                                    Добавить\n                                "
                          )
                        ]
                      )
                    ])
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c("h4", [_vm._v("Список сотрудников")]),
            _vm._v(" "),
            _c(
              "div",
              [
                _vm.asyncDataStatus_ready
                  ? _c(
                      "table",
                      {
                        staticClass: "table table-sm dt-responsive nowrap",
                        attrs: { id: "users-datatable" }
                      },
                      [
                        _vm._m(3),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          _vm._l(_vm.users, function(user) {
                            return _c("tr", { key: user.id }, [
                              _c("td", { staticClass: "align-middle" }, [
                                _c("span", { staticClass: "d-none" }, [
                                  _vm._v(_vm._s(user.last_name))
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: user.last_name,
                                      expression: "user.last_name"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text", name: "last_name" },
                                  domProps: { value: user.last_name },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        user,
                                        "last_name",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "align-middle" }, [
                                _c("span", { staticClass: "d-none" }, [
                                  _vm._v(_vm._s(user.first_name))
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: user.first_name,
                                      expression: "user.first_name"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "text", name: "first_name" },
                                  domProps: { value: user.first_name },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        user,
                                        "first_name",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "align-middle" }, [
                                _c("span", { staticClass: "d-none" }, [
                                  _vm._v(_vm._s(user.email))
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: user.email,
                                      expression: "user.email"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "email", name: "email" },
                                  domProps: { value: user.email },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        user,
                                        "email",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "align-middle" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: user.password,
                                      expression: "user.password"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "password", name: "password" },
                                  domProps: { value: user.password },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        user,
                                        "password",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "align-middle" }, [
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: user.role,
                                        expression: "user.role"
                                      }
                                    ],
                                    staticClass: "custom-select",
                                    on: {
                                      change: function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
                                            return val
                                          })
                                        _vm.$set(
                                          user,
                                          "role",
                                          $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _c("option", { attrs: { value: "1" } }, [
                                      _vm._v("Администратор")
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "2" } }, [
                                      _vm._v("Модератор")
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "3", selected: "" } },
                                      [_vm._v("Сотрудник")]
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _vm._m(4, true),
                              _vm._v(" "),
                              _c("td", { staticClass: "align-middle" }, [
                                _c(
                                  "div",
                                  { staticClass: "btn-group btn-group-sm" },
                                  [
                                    _c(
                                      "button",
                                      {
                                        staticClass: "btn btn-sm",
                                        class: user.changed
                                          ? "btn-success"
                                          : "btn-primary",
                                        attrs: {
                                          "data-toggle": "tooltip",
                                          "data-placement": "left",
                                          "data-original-title": "Изменить"
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.editUser(user)
                                          }
                                        }
                                      },
                                      [_c("i", { staticClass: "uil uil-edit" })]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "button",
                                      {
                                        staticClass: "btn btn-sm btn-danger",
                                        attrs: {
                                          "data-toggle": "tooltip",
                                          "data-placement": "left",
                                          "data-original-title": "Удалить"
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.deleteUser(user)
                                          }
                                        }
                                      },
                                      [
                                        _c("i", {
                                          staticClass: "uil uil-minus-circle"
                                        })
                                      ]
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
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row page-title" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("h4", { staticClass: "mb-1 mt-0" }, [_vm._v("Сотрудники")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "thead-light" }, [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Фамилия")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Имя")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Email")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Пароль")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Права")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("select", { staticClass: "custom-select" }, [
      _c("option", { attrs: { value: "1" } }, [_vm._v("Администратор")]),
      _vm._v(" "),
      _c("option", { attrs: { value: "2" } }, [_vm._v("Модератор")]),
      _vm._v(" "),
      _c("option", { attrs: { value: "3", selected: "" } }, [
        _vm._v("Сотрудник")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "thead-light" }, [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Фамилия")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Имя")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Email")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Пароль")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Права")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Действия")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Ссылки")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "align-middle" }, [
      _c(
        "a",
        {
          staticClass: "btn btn-info btn-sm",
          attrs: { href: "shipments_user.html" }
        },
        [_vm._v("Перевозки")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pages/UsersEditPage.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/pages/UsersEditPage.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UsersEditPage_vue_vue_type_template_id_183d11bb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UsersEditPage.vue?vue&type=template&id=183d11bb&scoped=true& */ "./resources/js/components/pages/UsersEditPage.vue?vue&type=template&id=183d11bb&scoped=true&");
/* harmony import */ var _UsersEditPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UsersEditPage.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/UsersEditPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UsersEditPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UsersEditPage_vue_vue_type_template_id_183d11bb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UsersEditPage_vue_vue_type_template_id_183d11bb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "183d11bb",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/UsersEditPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/UsersEditPage.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/pages/UsersEditPage.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersEditPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UsersEditPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/UsersEditPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersEditPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/UsersEditPage.vue?vue&type=template&id=183d11bb&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/pages/UsersEditPage.vue?vue&type=template&id=183d11bb&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersEditPage_vue_vue_type_template_id_183d11bb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UsersEditPage.vue?vue&type=template&id=183d11bb&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/UsersEditPage.vue?vue&type=template&id=183d11bb&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersEditPage_vue_vue_type_template_id_183d11bb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersEditPage_vue_vue_type_template_id_183d11bb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);