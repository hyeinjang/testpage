webpackHotUpdate("static/development/pages/tabs.js",{

/***/ "./components/view/TabContents.js":
/*!****************************************!*\
  !*** ./components/view/TabContents.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/hi/project/test/components/view/TabContents.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var TabContents = function TabContents(props) {
  var onClick = function onClick() {
    var label = props.label,
        onClick = props.onClick;
    onClick(label);
    console.log(props);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("li", {
    className: 'inline-block mr-5',
    onClick: onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, props.label));
};

/* harmony default export */ __webpack_exports__["default"] = (TabContents);

/***/ })

})
//# sourceMappingURL=tabs.js.56038a7c9d59e605bb3d.hot-update.js.map