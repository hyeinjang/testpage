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
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("li", {
    className: 'inline-block',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(children[0].props.label),
      activeTab = _useState[0],
      setActiveTab = _useState[1];

  var onClickTabList = function onClickTabList(tab) {
    setActiveTab(tab);
    console.log(activeTab);
  };

  return __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, children.map(function (list) {
    var label = list.props.label;
    return __jsx(_TabContents__WEBPACK_IMPORTED_MODULE_1__["default"], {
      label: label,
      key: label,
      onClick: onClickTabList,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Tablists);

/***/ })

})
//# sourceMappingURL=tabs.js.fd3ef3fb1c00c4a941bf.hot-update.js.map