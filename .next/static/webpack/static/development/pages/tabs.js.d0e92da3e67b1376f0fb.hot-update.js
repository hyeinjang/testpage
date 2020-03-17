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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, props.label));
};

/* harmony default export */ __webpack_exports__["default"] = (TabContents);

/***/ }),

/***/ "./components/view/Tablists.js":
/*!*************************************!*\
  !*** ./components/view/Tablists.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TabContents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TabContents */ "./components/view/TabContents.js");
var _jsxFileName = "/Users/hi/project/test/components/view/Tablists.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Tablists = function Tablists(props) {
  var children = props.children;
  return __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, children.map(function (list) {
    var label = list.props.label;
    return __jsx(_TabContents__WEBPACK_IMPORTED_MODULE_1__["default"], {
      label: label,
      key: label,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Tablists);

/***/ })

})
//# sourceMappingURL=tabs.js.d0e92da3e67b1376f0fb.hot-update.js.map