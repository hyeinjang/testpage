(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/tabs.js"],{

/***/ "./components/view/TabContent1.js":
/*!****************************************!*\
  !*** ./components/view/TabContent1.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/hi/project/test/components/view/TabContent1.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var TabContent1 = function TabContent1() {
  return __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "tab content 1!");
};

/* harmony default export */ __webpack_exports__["default"] = (TabContent1);

/***/ }),

/***/ "./components/view/TabContent2.js":
/*!****************************************!*\
  !*** ./components/view/TabContent2.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/hi/project/test/components/view/TabContent2.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var TabContent2 = function TabContent2() {
  return __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "tab content 2!");
};

/* harmony default export */ __webpack_exports__["default"] = (TabContent2);

/***/ }),

/***/ "./components/view/TabContent3.js":
/*!****************************************!*\
  !*** ./components/view/TabContent3.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/hi/project/test/components/view/TabContent3.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var TabContent3 = function TabContent3() {
  return __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "tab content 3!");
};

/* harmony default export */ __webpack_exports__["default"] = (TabContent3);

/***/ }),

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
    className: 'inline-block mr-5',
    onClick: onClick,
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

/***/ }),

/***/ "./components/view/Tabs.js":
/*!*********************************!*\
  !*** ./components/view/Tabs.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Tablists__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tablists */ "./components/view/Tablists.js");
/* harmony import */ var _TabContent1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TabContent1 */ "./components/view/TabContent1.js");
/* harmony import */ var _TabContent2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TabContent2 */ "./components/view/TabContent2.js");
/* harmony import */ var _TabContent3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TabContent3 */ "./components/view/TabContent3.js");
var _jsxFileName = "/Users/hi/project/test/components/view/Tabs.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Tabs = function Tabs() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Tabs"), __jsx("container", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(_Tablists__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("div", {
    label: "tab1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(_TabContent1__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })), __jsx("div", {
    label: "tab2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(_TabContent2__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })), __jsx("div", {
    label: "tab3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx(_TabContent3__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Tabs);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Ftabs&absolutePagePath=%2FUsers%2Fhi%2Fproject%2Ftest%2Fpages%2Ftabs.js!./":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Ftabs&absolutePagePath=%2FUsers%2Fhi%2Fproject%2Ftest%2Fpages%2Ftabs.js ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/tabs", function() {
      var mod = __webpack_require__(/*! ./pages/tabs.js */ "./pages/tabs.js")
      if(true) {
        module.hot.accept(/*! ./pages/tabs.js */ "./pages/tabs.js", function() {
          if(!next.router.components["/tabs"]) return
          var updatedPage = __webpack_require__(/*! ./pages/tabs.js */ "./pages/tabs.js")
          next.router.update("/tabs", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_82519ec661270f7f484f ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_82519ec661270f7f484f */ "dll-reference dll_82519ec661270f7f484f"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/tabs.js":
/*!***********************!*\
  !*** ./pages/tabs.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_view_Tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/view/Tabs */ "./components/view/Tabs.js");

var _jsxFileName = "/Users/hi/project/test/pages/tabs.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return __jsx(_components_view_Tabs__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }));
});

/***/ }),

/***/ 5:
/*!*********************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Ftabs&absolutePagePath=%2FUsers%2Fhi%2Fproject%2Ftest%2Fpages%2Ftabs.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Ftabs&absolutePagePath=%2FUsers%2Fhi%2Fproject%2Ftest%2Fpages%2Ftabs.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Ftabs&absolutePagePath=%2FUsers%2Fhi%2Fproject%2Ftest%2Fpages%2Ftabs.js!./");


/***/ }),

/***/ "dll-reference dll_82519ec661270f7f484f":
/*!*******************************************!*\
  !*** external "dll_82519ec661270f7f484f" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_82519ec661270f7f484f;

/***/ })

},[[5,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=tabs.js.map