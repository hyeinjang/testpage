module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/view/TabContent1.js":
/*!****************************************!*\
  !*** ./components/view/TabContent1.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/hi/project/test/components/view/TabContent1.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const TabContent1 = () => {
  return __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/hi/project/test/components/view/TabContent2.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const TabContent2 = () => {
  return __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/hi/project/test/components/view/TabContent3.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const TabContent3 = () => {
  return __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/hi/project/test/components/view/TabContents.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const TabContents = props => {
  const onClick = () => {
    const {
      label,
      onClick
    } = props;
    onClick(label);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("li", {
    className: 'inline-block mr-5',
    onClick: onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TabContents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TabContents */ "./components/view/TabContents.js");
var _jsxFileName = "/Users/hi/project/test/components/view/Tablists.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Tablists = props => {
  const {
    children
  } = props;
  const {
    0: activeTab,
    1: setActiveTab
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(children[0].props.label);

  const onClickTabList = tab => {
    setActiveTab(tab);
    console.log(activeTab);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, children.map(list => {
    const {
      label
    } = list.props;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_TabContents__WEBPACK_IMPORTED_MODULE_1__["default"], {
      label: label,
      key: label,
      onClick: onClickTabList,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: undefined
    }));
  })), __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }), __jsx("div", {
    className: "tab-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, children.map(tab => {
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Tablists__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tablists */ "./components/view/Tablists.js");
/* harmony import */ var _TabContent1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TabContent1 */ "./components/view/TabContent1.js");
/* harmony import */ var _TabContent2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TabContent2 */ "./components/view/TabContent2.js");
/* harmony import */ var _TabContent3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TabContent3 */ "./components/view/TabContent3.js");
var _jsxFileName = "/Users/hi/project/test/components/view/Tabs.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Tabs = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "Tabs"), __jsx("container", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx(_Tablists__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("div", {
    label: "tab1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx(_TabContent1__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  })), __jsx("div", {
    label: "tab2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx(_TabContent2__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  })), __jsx("div", {
    label: "tab3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx(_TabContent3__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Tabs);

/***/ }),

/***/ "./pages/tabs.js":
/*!***********************!*\
  !*** ./pages/tabs.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_view_Tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/view/Tabs */ "./components/view/Tabs.js");
var _jsxFileName = "/Users/hi/project/test/pages/tabs.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



/* harmony default export */ __webpack_exports__["default"] = (props => __jsx(_components_view_Tabs__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
})));

/***/ }),

/***/ 4:
/*!*****************************!*\
  !*** multi ./pages/tabs.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/hi/project/test/pages/tabs.js */"./pages/tabs.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=tabs.js.map