(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./client/actions.js":
/*!***************************!*\
  !*** ./client/actions.js ***!
  \***************************/
/*! exports provided: setWhoIAm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setWhoIAm\", function() { return setWhoIAm; });\nvar names = ['Groot', 'Rocket Racoon', 'Starlord', 'Nebula', 'Drax', 'Gamora', 'Mantis'];\nvar nameIndex = 1;\nfunction setWhoIAm() {\n  return {\n    type: 'IAM',\n    payload: names[++nameIndex % names.length]\n  };\n}\n\n//# sourceURL=webpack:///./client/actions.js?");

/***/ }),

/***/ "./client/components/App.jsx":
/*!***********************************!*\
  !*** ./client/components/App.jsx ***!
  \***********************************/
/*! exports provided: App, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"App\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Separate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Separate */ \"./client/components/Separate.jsx\");\n/* harmony import */ var _connectors_withApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../connectors/withApp */ \"./client/connectors/withApp.js\");\n\n\n\n\nfunction App(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Separate__WEBPACK_IMPORTED_MODULE_1__[\"default\"], props));\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_connectors_withApp__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(App));\n\n//# sourceURL=webpack:///./client/components/App.jsx?");

/***/ }),

/***/ "./client/components/Separate.jsx":
/*!****************************************!*\
  !*** ./client/components/Separate.jsx ***!
  \****************************************/
/*! exports provided: Separate, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Separate\", function() { return Separate; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/Button/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/Grid/index.js\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/Typography/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles/withStyles */ \"./node_modules/@material-ui/core/styles/withStyles.js\");\n/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nvar styles = function styles(theme) {\n  return {\n    grid: {\n      padding: theme.spacing.unit * 3\n    },\n    heading: {\n      marginBottom: theme.spacing.unit\n    },\n    button: {\n      marginBottom: theme.spacing.unit\n    }\n  };\n};\n\nfunction Separate(props) {\n  var classes = props.classes,\n      setWhoIAm = props.setWhoIAm,\n      whoAmI = props.whoAmI;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    alignItems: \"center\",\n    className: classes.grid,\n    container: true,\n    direction: \"column\",\n    justify: \"center\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    className: classes.heading,\n    variant: \"h6\"\n  }, \"Separate\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    className: classes.button,\n    color: \"primary\",\n    onClick: setWhoIAm,\n    variant: \"outlined\"\n  }, \"Who am I?\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    variant: \"body1\"\n  }, \"I am \", whoAmI, \"!\"));\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_4___default()(styles)(Separate));\n\n//# sourceURL=webpack:///./client/components/Separate.jsx?");

/***/ }),

/***/ "./client/connectors/withApp.js":
/*!**************************************!*\
  !*** ./client/connectors/withApp.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ \"./client/actions.js\");\n\n\nvar withRedux = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(function (state) {\n  return state;\n}, {\n  setWhoIAm: _actions__WEBPACK_IMPORTED_MODULE_1__[\"setWhoIAm\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (withRedux);\n\n//# sourceURL=webpack:///./client/connectors/withApp.js?");

/***/ }),

/***/ "./client/index.js":
/*!*************************!*\
  !*** ./client/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main */ \"./client/main.jsx\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store */ \"./client/store.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_store__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar store = Object(_store__WEBPACK_IMPORTED_MODULE_3__[\"createStore\"])();\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_main__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n  store: store\n}), document.getElementById('main'));\n\n//# sourceURL=webpack:///./client/index.js?");

/***/ }),

/***/ "./client/main.jsx":
/*!*************************!*\
  !*** ./client/main.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/App */ \"./client/components/App.jsx\");\n\n\n\n\nfunction Main(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"Provider\"], {\n    store: props.store\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\n\n//# sourceURL=webpack:///./client/main.jsx?");

/***/ }),

/***/ "./client/store.js":
/*!*************************!*\
  !*** ./client/store.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _require = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\"),\n    createReduxStore = _require.createStore;\n\nvar initialState = {\n  loading: false,\n  whoAmI: 'Groot'\n};\n\nfunction reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  var type = action.type,\n      payload = action.payload;\n\n  switch (type) {\n    case 'IAM':\n      return Object.assign({}, state, {\n        loading: false,\n        whoAmI: payload\n      });\n\n    default:\n      return state;\n  }\n}\n\nfunction createStore() {\n  return createReduxStore(reducer);\n}\n\nmodule.exports = {\n  createStore: createStore\n};\n\n//# sourceURL=webpack:///./client/store.js?");

/***/ })

},[["./client/index.js","runtime~main","vendors"]]]);