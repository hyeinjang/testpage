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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/view/Style.js":
/*!**********************************!*\
  !*** ./components/view/Style.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/hi/project/test/components/view/Style.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const layout = {
  wrapperCol: {
    span: 16
  }
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16
  }
};
const FlexChild = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div`
    border: 1px solid #000;
    width: 300px;
    height: 200px;
    
    &:nth-of-type(1){
    width: 350px;
        background-color: gold;
    }
    &:nth-of-type(2){
        width: 200px;
        height: 100px;
    }
`;
const inputStyle = {
  border: '1px solid #000',
  width: '200px'
};

const StyleView = () => {
  const {
    0: username,
    1: setUsername
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: password,
    1: setPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');

  const handleInputChange = e => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log(username, password);
    setUsername('');
    setPassword('');
  };

  const onFinish = values => {
    console.log('Success:', values);

    const error = () => {
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error('회원가입이 완료되었습니다.', 1);
    };

    error();
  };

  const onFinishFailed = errorInfo => {// console.log('Failed:', errorInfo);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, "Css Testboard!"), __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }), __jsx("form", {
    onSubmit: onSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, __jsx("input", {
    type: "text",
    onChange: handleInputChange,
    style: inputStyle,
    name: "username",
    placeholder: "username",
    value: username,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }), __jsx("input", {
    type: "text",
    style: inputStyle,
    name: "password",
    placeholder: "password",
    onChange: handlePasswordChange,
    value: password,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }), __jsx("button", {
    type: "submit",
    onSubmit: onSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, "submit")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    style: {
      marginLeft: 8
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }, "Primary Button"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    size: 64,
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["UserOutlined"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], _extends({
    style: {
      maxWidth: 300
    }
  }, layout, {
    name: "basic",
    onFinish: onFinish,
    onFinishFailed: onFinishFailed,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "email",
    rules: [{
      required: true,
      message: 'Please input your username!'
    }, {
      type: 'email',
      message: 'e-mail 형식으로 작성해주세요.'
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: "username",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "password",
    rules: [{
      required: true,
      message: 'Please input your password!'
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Password, {
    placeholder: "password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: undefined
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "passwordComfirm",
    dependencies: ['password'],
    hasFeedback: true,
    rules: [{
      required: true,
      message: 'Please confirm your password!'
    }, ({
      getFieldValue
    }) => ({
      validator(rule, value) {
        if (!value || getFieldValue('password') === value) {
          return Promise.resolve();
        }

        return Promise.reject('The two passwords that you entered do not match!');
      }

    })],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Password, {
    placeholder: "password again",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: undefined
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, _extends({}, tailLayout, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: undefined
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    htmlType: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: undefined
  }, "Submit"))), __jsx("div", {
    className: "flex justify-between bg-yellow-200 pd-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: undefined
  }, "left"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: undefined
  }, "right")), __jsx("div", {
    className: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: undefined
  }, __jsx(FlexChild, {
    className: "flex-none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: undefined
  }), __jsx(FlexChild, {
    className: "flex-initial",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: undefined
  }), __jsx(FlexChild, {
    className: "bg-gray-300 flex-initial",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (StyleView);

/***/ }),

/***/ "./pages/style.js":
/*!************************!*\
  !*** ./pages/style.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_view_Style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/view/Style */ "./components/view/Style.js");
var _jsxFileName = "/Users/hi/project/test/pages/style.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



/* harmony default export */ __webpack_exports__["default"] = (props => __jsx(_components_view_Style__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
})));

/***/ }),

/***/ 8:
/*!******************************!*\
  !*** multi ./pages/style.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/hi/project/test/pages/style.js */"./pages/style.js");


/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=style.js.map