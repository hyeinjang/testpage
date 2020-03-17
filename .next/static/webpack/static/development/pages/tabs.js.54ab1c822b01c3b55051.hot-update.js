webpackHotUpdate("static/development/pages/tabs.js",{

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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, children.map(function (list) {
    var label = list.props.label;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_TabContents__WEBPACK_IMPORTED_MODULE_1__["default"], {
      label: label,
      key: label,
      onClick: onClickTabList,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }));
  })), __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx("div", {
    className: "tab-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, children.map(function (tab) {
    if (tab.props.label !== activeTab) {
      return undefined;
    }

    return tab.props.children;
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Tablists);

/***/ })

})
//# sourceMappingURL=tabs.js.54ab1c822b01c3b55051.hot-update.js.map