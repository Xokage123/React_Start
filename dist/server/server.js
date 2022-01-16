/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = exports.EColors = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const text_scss_1 = __importDefault(__webpack_require__(36));
const classnames_1 = __importDefault(__webpack_require__(2));
var EColors;
(function (EColors) {
    EColors["black"] = "black";
    EColors["orange"] = "orange";
    EColors["green"] = "green";
    EColors["white"] = "white";
    EColors["grayF4"] = "grayF4";
    EColors["grayF3"] = "grayF3";
    EColors["grayD9"] = "grayD9";
    EColors["grayC4"] = "grayC4";
    EColors["gray99"] = "gray99";
    EColors["gray66"] = "gray66";
})(EColors = exports.EColors || (exports.EColors = {}));
function Text(props) {
    const { As = 'span', color = EColors.black, children, size, mobileSize, tabletSize, desktopSize } = props;
    const classes = (0, classnames_1.default)(text_scss_1.default[`s${size}`], { [text_scss_1.default[`m${mobileSize}`]]: mobileSize }, { [text_scss_1.default[`t${tabletSize}`]]: tabletSize }, { [text_scss_1.default[`d${desktopSize}`]]: desktopSize }, text_scss_1.default[color]);
    return (react_1.default.createElement(As, { className: classes }, children));
}
exports.Text = Text;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenRequestSync = exports.tokenRequestError = exports.SAVING_TOKEN_ERROR = exports.tokenRequestSuccess = exports.SAVING_TOKEN_SUCCES = exports.tokenRequest = exports.SAVING_TOKEN = void 0;
exports.SAVING_TOKEN = 'SAVING_TOKEN';
const tokenRequest = () => ({
    type: exports.SAVING_TOKEN,
});
exports.tokenRequest = tokenRequest;
exports.SAVING_TOKEN_SUCCES = 'SAVING_TOKEN_SUCCES';
const tokenRequestSuccess = (token) => ({
    type: exports.SAVING_TOKEN_SUCCES,
    token,
});
exports.tokenRequestSuccess = tokenRequestSuccess;
exports.SAVING_TOKEN_ERROR = 'SAVING_TOKEN_ERROR';
const tokenRequestError = (error) => ({
    type: exports.SAVING_TOKEN_ERROR,
    error,
});
exports.tokenRequestError = tokenRequestError;
const tokenRequestSync = (token) => (dispatch, _getState) => {
    if (token == 'undefined')
        return;
    dispatch((0, exports.tokenRequest)());
    if (token) {
        dispatch((0, exports.tokenRequestSuccess)(token));
    }
    else {
        dispatch((0, exports.tokenRequestError)(String(token)));
    }
};
exports.tokenRequestSync = tokenRequestSync;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.meRequestAsync = exports.meRequestError = exports.SAVING_ME_ERROR = exports.meRequestSuccess = exports.SAVING_ME_SUCCES = exports.meRequest = exports.SAVING_ME = void 0;
const axios_1 = __importDefault(__webpack_require__(6));
exports.SAVING_ME = 'SAVING_ME';
const meRequest = () => ({
    type: exports.SAVING_ME,
});
exports.meRequest = meRequest;
exports.SAVING_ME_SUCCES = 'SAVING_ME_SUCCES';
const meRequestSuccess = (data) => ({
    type: exports.SAVING_ME_SUCCES,
    data,
});
exports.meRequestSuccess = meRequestSuccess;
exports.SAVING_ME_ERROR = 'SAVING_ME_ERROR';
const meRequestError = (error) => ({
    type: exports.SAVING_ME_ERROR,
    error,
});
exports.meRequestError = meRequestError;
const meRequestAsync = () => (dispatch, getState) => {
    dispatch((0, exports.meRequest)());
    axios_1.default.get('https://oauth.reddit.com/api/v1/me', {
        headers: { Authorization: `bearer ${getState().setToken.token}` }
    })
        .then((resp) => {
        let userData = resp.data;
        dispatch((0, exports.meRequestSuccess)({ name: userData.name, iconImg: userData.icon_img }));
    })
        .catch((error) => {
        console.log(error);
        dispatch((0, exports.meRequestError)(String(error)));
    });
};
exports.meRequestAsync = meRequestAsync;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postsRequestAsync = exports.afterRequestError = exports.SAVING_AFTER_ERROR = exports.afterRequestSuccess = exports.SAVING_AFTER_SUCCES = exports.afterRequest = exports.SAVING_AFTER = exports.postsRequestError = exports.SAVING_POSTS_ERROR = exports.postsRequestSuccess = exports.SAVING_POSTS_SUCCES = exports.postsRequest = exports.SAVING_POSTS = void 0;
const axios_1 = __importDefault(__webpack_require__(6));
exports.SAVING_POSTS = 'SAVING_POSTS';
const postsRequest = () => ({
    type: exports.SAVING_POSTS,
});
exports.postsRequest = postsRequest;
exports.SAVING_POSTS_SUCCES = 'SAVING_POSTS_SUCCES';
const postsRequestSuccess = (posts) => ({
    type: exports.SAVING_POSTS_SUCCES,
    posts,
});
exports.postsRequestSuccess = postsRequestSuccess;
exports.SAVING_POSTS_ERROR = 'SAVING_POSTS_ERROR';
const postsRequestError = (error) => ({
    type: exports.SAVING_POSTS_ERROR,
    error,
});
exports.postsRequestError = postsRequestError;
exports.SAVING_AFTER = 'SAVING_AFTER';
const afterRequest = () => ({
    type: exports.SAVING_AFTER,
});
exports.afterRequest = afterRequest;
exports.SAVING_AFTER_SUCCES = 'SAVING_AFTER_SUCCES';
const afterRequestSuccess = (after) => ({
    type: exports.SAVING_AFTER_SUCCES,
    after: after
});
exports.afterRequestSuccess = afterRequestSuccess;
exports.SAVING_AFTER_ERROR = 'SAVING_AFTER_ERROR';
const afterRequestError = (error) => ({
    type: exports.SAVING_AFTER_ERROR,
    error,
});
exports.afterRequestError = afterRequestError;
const postsRequestAsync = () => (dispatch, getState) => {
    dispatch((0, exports.postsRequest)());
    dispatch((0, exports.afterRequest)());
    axios_1.default.get('https://oauth.reddit.com/best', {
        headers: { Authorization: `bearer ${getState().setToken.token}` },
        params: {
            limit: 10,
            after: getState().afterData.after
        }
    })
        .then((resp) => {
        const data = resp.data.data.children.map((item) => item.data);
        const nextAfter = resp.data.data.after;
        const postsData = data.map((item) => ({
            title: item.title,
            username: item.author,
            score: item.score,
            num_comments: item.num_comments,
            id: item.id,
            created: item.created,
            thumbnail: item.thumbnail,
            selftext: item.selftext
        }));
        dispatch((0, exports.postsRequestSuccess)(postsData));
        dispatch((0, exports.afterRequestSuccess)(nextAfter));
        console.log(getState().afterData.after);
    })
        .catch((error) => {
        console.log(error);
        dispatch((0, exports.postsRequestError)(String(error)));
        dispatch((0, exports.afterRequestError)(String(error)));
    });
};
exports.postsRequestAsync = postsRequestAsync;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(43), exports);


/***/ }),
/* 10 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"sortBlock": "sortblock__sortBlock--1otXh",
	"dropList": "sortblock__dropList--kyols",
	"dropItem": "sortblock__dropItem--OVHQy",
	"icon-premium": "sortblock__icon-premium--hx64k",
	"icon-powerup": "sortblock__icon-powerup--3zIzF",
	"icon-help": "sortblock__icon-help--2dyGx",
	"list": "sortblock__list--3KJrQ"
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(58), exports);


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(60), exports);


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(68), exports);


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(80), exports);


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextContent = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const textcontent_scss_1 = __importDefault(__webpack_require__(83));
function TextContent(props) {
    const { username, date, children, className = 'textContent' } = props;
    return (react_1.default.createElement("div", { className: textcontent_scss_1.default[className] },
        react_1.default.createElement("div", { className: textcontent_scss_1.default.metaData },
            react_1.default.createElement("div", { className: textcontent_scss_1.default.userLink },
                react_1.default.createElement("img", { className: textcontent_scss_1.default.avatar, src: "https://i.redd.it/snk96iikvra51.png", alt: "avatar" }),
                react_1.default.createElement("a", { href: "#user-url", className: textcontent_scss_1.default.username }, username)),
            react_1.default.createElement("span", { className: textcontent_scss_1.default.createdAt },
                react_1.default.createElement("span", { className: textcontent_scss_1.default.publishedLabel }, "\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u043E"),
                " ",
                date)),
        children));
}
exports.TextContent = TextContent;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(84), exports);


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(0));
const express_1 = __importDefault(__webpack_require__(18));
const server_1 = __importDefault(__webpack_require__(19));
const App_1 = __webpack_require__(20);
const indexTemplate_1 = __webpack_require__(103);
const axios_1 = __importDefault(__webpack_require__(6));
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use('/static', express_1.default.static('./dist/client'));
app.get('/auth', (req, res) => {
    axios_1.default.post('https://www.reddit.com/api/v1/access_token', `grant_type=authorization_code&code=${req.query.code}&redirect_uri=http://localhost:3000/auth`, {
        auth: { username: 'undefined', password: 'EmuC04f1ckYXf7OLCPwGUTL89dl4bw' },
        headers: { 'Content-type': 'application/x-www-form-urlencoded' }
    })
        .then(({ data }) => {
        res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString(react_1.default.createElement(App_1.App, null)), data['access_token']));
    })
        .catch(console.log);
});
app.get('*', (req, res) => {
    res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString(react_1.default.createElement(App_1.App, null))));
});
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const React = __importStar(__webpack_require__(0));
const Layout_1 = __webpack_require__(21);
__webpack_require__(23);
const Header_1 = __webpack_require__(25);
const Content_1 = __webpack_require__(53);
const CardList_1 = __webpack_require__(56);
const redux_1 = __webpack_require__(87);
const redux_devtools_extension_1 = __webpack_require__(88);
const react_redux_1 = __webpack_require__(1);
const rootReducer_1 = __webpack_require__(89);
const redux_thunk_1 = __importDefault(__webpack_require__(93));
const react_router_dom_1 = __webpack_require__(7);
const useIsMuonted_1 = __webpack_require__(94);
const Post_1 = __webpack_require__(95);
const store = (0, redux_1.createStore)(rootReducer_1.rootReducer, (0, redux_devtools_extension_1.composeWithDevTools)((0, redux_1.applyMiddleware)(redux_thunk_1.default)));
function App() {
    const [isMounted] = (0, useIsMuonted_1.useIsMounted)();
    return (React.createElement(react_redux_1.Provider, { store: store }, isMounted && (React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement(Layout_1.Layout, null,
            React.createElement(Header_1.Header, null),
            React.createElement(react_router_dom_1.Routes, null,
                React.createElement(react_router_dom_1.Route, { path: '/auth', element: React.createElement(react_router_dom_1.Navigate, { to: '/posts/' }) }),
                React.createElement(react_router_dom_1.Route, { path: '/', element: React.createElement(react_router_dom_1.Navigate, { to: '/posts/' }) }),
                React.createElement(react_router_dom_1.Route, { path: '/posts/', element: React.createElement(Content_1.Content, null,
                        React.createElement(CardList_1.CardList, null),
                        " ") }),
                React.createElement(react_router_dom_1.Route, { path: '/posts/:id', element: React.createElement(Content_1.Content, null,
                        React.createElement(CardList_1.CardList, null),
                        " ",
                        React.createElement(Post_1.Post, null)) }),
                React.createElement(react_router_dom_1.Route, { path: '*', element: React.createElement("h2", { style: { textAlign: 'center', color: 'red' } }, "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430 \u041E\u0448\u0438\u0431\u043A\u0430 404") })))))));
}
exports.App = App;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const Layout_scss_1 = __importDefault(__webpack_require__(22));
function Layout({ children }) {
    return (react_1.default.createElement("div", { className: Layout_scss_1.default.layout }, children));
}
exports.Layout = Layout;


/***/ }),
/* 22 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"layout": "Layout__layout--2Fw78"
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(24);
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;700&family=Roboto:wght@400;500;700&display=swap);"]);
// Module
exports.push([module.i, "body{padding:0;margin:0;background-color:#f4f4f4;font-size:14px;line-height:16px;font-family:\"Roboto\",\"serif\"}*{color:#333;box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}ul{padding:0;margin:0;list-style:none}a{text-decoration:none}button{padding:0;border:0;background-color:transparent;cursor:pointer}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(26), exports);


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const header_scss_1 = __importDefault(__webpack_require__(27));
const SearchBlock_1 = __webpack_require__(28);
const SortBlock_1 = __webpack_require__(41);
const ThreadTitle_1 = __webpack_require__(50);
function Header() {
    return (react_1.default.createElement("header", { className: header_scss_1.default.header },
        react_1.default.createElement(SearchBlock_1.SearchBlock, null),
        react_1.default.createElement(ThreadTitle_1.ThreadTitle, null),
        react_1.default.createElement(SortBlock_1.SortBlock, null)));
}
exports.Header = Header;


/***/ }),
/* 27 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"header": "header__header--4oGEs"
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(29), exports);


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchBlock = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const searchblock_scss_1 = __importDefault(__webpack_require__(30));
const UserBlock_1 = __webpack_require__(31);
const useUserData_1 = __webpack_require__(39);
const react_redux_1 = __webpack_require__(1);
function SearchBlock() {
    (0, useUserData_1.useUserData)();
    const { iconImg, name } = (0, react_redux_1.useSelector)(state => state.me.data);
    const loading = (0, react_redux_1.useSelector)(state => state.me.loading);
    return (react_1.default.createElement("div", { className: searchblock_scss_1.default.searchBlock },
        react_1.default.createElement(UserBlock_1.UserBlock, { avatarSrc: iconImg, userName: name, loading: loading })));
}
exports.SearchBlock = SearchBlock;


/***/ }),
/* 30 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"searchBlock": "searchblock__searchBlock--3Rcx1"
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(32), exports);


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBlock = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const Break_1 = __webpack_require__(33);
const Text_1 = __webpack_require__(3);
const IconAnon_1 = __webpack_require__(37);
const userblock_scss_1 = __importDefault(__webpack_require__(38));
function UserBlock({ avatarSrc, userName, loading }) {
    return (react_1.default.createElement("a", { href: "https://www.reddit.com/api/v1/authorize?client_id=wPuZkCZI9S4RJ87ZKWwc0w&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity", className: userblock_scss_1.default.userBox },
        react_1.default.createElement("div", { className: userblock_scss_1.default.avatarBox }, avatarSrc
            ? react_1.default.createElement("img", { src: avatarSrc, alt: "user avatar", className: userblock_scss_1.default.avatarImage })
            : react_1.default.createElement(IconAnon_1.IconAnon, null)),
        react_1.default.createElement("div", { className: userblock_scss_1.default.username },
            react_1.default.createElement(Break_1.Break, { size: 12 }),
            loading ? (react_1.default.createElement(Text_1.Text, { size: 20, color: userName ? Text_1.EColors.black : Text_1.EColors.gray99 }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...")) : (react_1.default.createElement(Text_1.Text, { size: 20, color: userName ? Text_1.EColors.black : Text_1.EColors.gray99 }, userName || 'Аноним')))));
}
exports.UserBlock = UserBlock;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(34), exports);


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Break = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const break_scss_1 = __importDefault(__webpack_require__(35));
const classnames_1 = __importDefault(__webpack_require__(2));
function Break(props) {
    const { inline = false, top = false, size, mobileSize, tabletSize, desktopSize, } = props;
    return (react_1.default.createElement("div", { className: (0, classnames_1.default)(break_scss_1.default[`s${size}`], { [break_scss_1.default[`mobile_s${mobileSize}`]]: mobileSize }, { [break_scss_1.default[`tablet_s${tabletSize}`]]: tabletSize }, { [break_scss_1.default[`desktop_s${desktopSize}`]]: desktopSize }, { [break_scss_1.default.inline]: inline }, { [break_scss_1.default.top]: top }) }));
}
exports.Break = Break;


/***/ }),
/* 35 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"s4": "break__s4--3kctv",
	"s8": "break__s8--psbgx",
	"s12": "break__s12--hyZ-e",
	"s16": "break__s16--3GLW7",
	"s20": "break__s20--2znbf",
	"inline": "break__inline--1-WLz",
	"top": "break__top--2QE-5",
	"mobile_s4": "break__mobile_s4--HSL_1",
	"mobile_s8": "break__mobile_s8--1hWLe",
	"mobile_s12": "break__mobile_s12--3Sggf",
	"mobile_s16": "break__mobile_s16--3zAL1",
	"mobile_s20": "break__mobile_s20--3WdEu",
	"tablet_s4": "break__tablet_s4--3_TIi",
	"tablet_s8": "break__tablet_s8--2fJ0_",
	"tablet_s12": "break__tablet_s12--20Xnc",
	"tablet_s16": "break__tablet_s16--167Fu",
	"tablet_s20": "break__tablet_s20--16SRw",
	"desktop_s4": "break__desktop_s4--3Ahl5",
	"desktop_s8": "break__desktop_s8--1hZOk",
	"desktop_s12": "break__desktop_s12--3tEJg",
	"desktop_s16": "break__desktop_s16--3bDgP",
	"desktop_s20": "break__desktop_s20--28y3I"
};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"s28": "text__s28--NMm7b",
	"s20": "text__s20--1rvNx",
	"s16": "text__s16--hE9c4",
	"s14": "text__s14--3gJUG",
	"s12": "text__s12--33ZEp",
	"s10": "text__s10--cdfW2",
	"black": "text__black--2W7Vd",
	"orange": "text__orange--168U_",
	"green": "text__green--20DPX",
	"white": "text__white--3v6Pb",
	"greyF4": "text__greyF4--3M269",
	"greyF3": "text__greyF3--AU_5I",
	"greyD9": "text__greyD9--v9wD6",
	"greyC4": "text__greyC4--3f3uL",
	"grey99": "text__grey99--CH_Mt",
	"grey66": "text__grey66--3Sprr",
	"m28": "text__m28--2I4i7",
	"m20": "text__m20--1aNj1",
	"m16": "text__m16--1_b0d",
	"m14": "text__m14--35Y-X",
	"m12": "text__m12--oPjc_",
	"m10": "text__m10--1lq28",
	"t28": "text__t28--dEFgN",
	"t20": "text__t20--2OiUl",
	"t16": "text__t16--1mXaU",
	"t14": "text__t14---S9NA",
	"t12": "text__t12--1U2aL",
	"t10": "text__t10--1HUWH",
	"d28": "text__d28--3YkIr",
	"d20": "text__d20--1z4RJ",
	"d16": "text__d16--3A4IZ",
	"d14": "text__d14--3lkFJ",
	"d12": "text__d12--2dPIl",
	"d10": "text__d10--3M5vD"
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconAnon = void 0;
const React = __importStar(__webpack_require__(0));
function IconAnon() {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "50", height: "50", viewBox: "0 0 50 50", fill: "none" },
        React.createElement("path", { d: "M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 7.5C29.15 7.5 32.5 10.85 32.5 15C32.5 19.15 29.15 22.5 25 22.5C20.85 22.5 17.5 19.15 17.5 15C17.5 10.85 20.85 7.5 25 7.5ZM25 43C18.75 43 13.225 39.8 10 34.95C10.075 29.975 20 27.25 25 27.25C29.975 27.25 39.925 29.975 40 34.95C36.775 39.8 31.25 43 25 43Z", fill: "#D9D9D9" })));
}
exports.IconAnon = IconAnon;


/***/ }),
/* 38 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"userBox": "userblock__userBox--1fubG",
	"avatarBox": "userblock__avatarBox--zfE9Z",
	"avatarImage": "userblock__avatarImage--CXX_4",
	"username": "userblock__username--8sDRn"
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUserData = void 0;
const React = __importStar(__webpack_require__(0));
const useToken_1 = __webpack_require__(40);
const react_redux_1 = __webpack_require__(1);
const actions_1 = __webpack_require__(5);
function useUserData() {
    const data = (0, react_redux_1.useSelector)(state => state.me.data);
    const dispatch = (0, react_redux_1.useDispatch)();
    const [token] = (0, useToken_1.useToken)();
    React.useEffect(() => {
        if (!token)
            return;
        dispatch((0, actions_1.meRequestAsync)());
    }, [token]);
    return data;
}
exports.useUserData = useUserData;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useToken = void 0;
const React = __importStar(__webpack_require__(0));
const react_redux_1 = __webpack_require__(1);
const actions_1 = __webpack_require__(4);
function useToken() {
    const dispatch = (0, react_redux_1.useDispatch)();
    React.useEffect(() => {
        if (window.__token__ === "undefined") {
            const localToken = localStorage.getItem('token');
            if (localToken && !(localToken == "undefined")) {
                dispatch((0, actions_1.tokenRequestSuccess)(localToken));
            }
        }
        if (!(window.__token__ === "undefined")) {
            const windowToken = window.__token__;
            localStorage.setItem('token', windowToken);
            dispatch((0, actions_1.tokenRequestSuccess)(windowToken));
        }
    }, []);
    const token = (0, react_redux_1.useSelector)(state => state.setToken.token);
    return [token];
}
exports.useToken = useToken;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(42), exports);


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortBlock = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const Dropdown_1 = __webpack_require__(9);
const List_1 = __webpack_require__(45);
const generateRandomIndex_1 = __webpack_require__(47);
const sortblock_scss_1 = __importDefault(__webpack_require__(10));
const merge_1 = __webpack_require__(49);
let LIST = [
    { title: 'Everywhere', class: 'dropItem' },
    { title: 'United Kingdom', class: 'dropItem' },
    { title: 'United States', class: 'dropItem' },
    { title: 'Argentina', class: 'dropItem' },
    { title: 'Australia', class: 'dropItem' },
    { title: 'Canada', class: 'dropItem' },
    { title: 'Japan', class: 'dropItem' },
    { title: 'Colombia', class: 'dropItem' },
    { title: 'Brazilia', class: 'dropItem' },
    { title: 'Finland', class: 'dropItem' },
].map(generateRandomIndex_1.generateId);
function SortBlock() {
    const [mainButton, setMainButton] = react_1.default.useState('Everywhere');
    const handleClick = (id) => {
        const newList = LIST.filter((item) => item.id == id);
        const [newItem] = newList;
        setMainButton(newItem.title);
    };
    return (react_1.default.createElement(Dropdown_1.Dropdown, { button: react_1.default.createElement("button", { className: sortblock_scss_1.default.sortBlock }, mainButton) },
        react_1.default.createElement(List_1.Feed, { blocks: LIST.map((0, merge_1.merge)({ onClick: handleClick })) })));
}
exports.SortBlock = SortBlock;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dropdown = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const dropdown_scss_1 = __importDefault(__webpack_require__(44));
const NOOP = () => { };
function Dropdown({ button, children, isOpen = false, onOpen = NOOP, onClose = NOOP }) {
    const [isDropdownOpen, setIsDropdownOpen] = react_1.default.useState(isOpen);
    react_1.default.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
    react_1.default.useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen]);
    return (react_1.default.createElement("div", { className: dropdown_scss_1.default.container },
        react_1.default.createElement("div", { onClick: () => setIsDropdownOpen(!isDropdownOpen) }, button),
        isDropdownOpen && (react_1.default.createElement("div", { className: dropdown_scss_1.default.listContainer },
            react_1.default.createElement("div", { className: dropdown_scss_1.default.list, onClick: () => setIsDropdownOpen(false) }, children)))));
}
exports.Dropdown = Dropdown;


/***/ }),
/* 44 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "dropdown__container--o1mMR",
	"listContainer": "dropdown__listContainer--3nCwY",
	"list": "dropdown__list--1nfRv"
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Block = exports.Feed = void 0;
const React = __importStar(__webpack_require__(0));
const withKey_1 = __webpack_require__(46);
const sortblock_scss_1 = __importDefault(__webpack_require__(10));
function Feed(props) {
    return (React.createElement("ul", { className: sortblock_scss_1.default.dropList }, props.blocks.map((0, withKey_1.withIdKey)(Block))));
}
exports.Feed = Feed;
function Block(props) {
    return (React.createElement("li", { className: sortblock_scss_1.default[props.class], onClick: () => props.onClick(props.id) }, props.title));
}
exports.Block = Block;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.withKey = exports.withIdKey = void 0;
const react_1 = __importDefault(__webpack_require__(0));
exports.withIdKey = withKey('id');
function withKey(key) {
    return (component) => (props, index) => react_1.default.createElement(component, Object.assign(Object.assign({}, props), { key: key ? props[key] : index }), []);
}
exports.withKey = withKey;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.generateId = exports.assignId = exports.generateRandomString = void 0;
const assoc_1 = __webpack_require__(48);
const generateRandomString = () => Math.random().toString(36).substring(2, 15);
exports.generateRandomString = generateRandomString;
exports.assignId = (0, assoc_1.assoc)('id', (0, exports.generateRandomString)());
const generateId = (obj) => (0, assoc_1.assoc)('id', (0, exports.generateRandomString)())(obj);
exports.generateId = generateId;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.assoc = void 0;
function assoc(key, value) {
    return (obj) => (Object.assign(Object.assign({}, obj), { [key]: value }));
}
exports.assoc = assoc;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = void 0;
function merge(obj) {
    return (obj2) => (Object.assign(Object.assign({}, obj), obj2));
}
exports.merge = merge;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(51), exports);


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadTitle = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const threadtitle_scss_1 = __importDefault(__webpack_require__(52));
function ThreadTitle() {
    return (react_1.default.createElement("h1", { className: threadtitle_scss_1.default.threadTitle }, "Reddit"));
}
exports.ThreadTitle = ThreadTitle;


/***/ }),
/* 52 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"threadTitle": "threadtitle__threadTitle--1fvoP"
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(54), exports);


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const content_scss_1 = __importDefault(__webpack_require__(55));
function Content({ children }) {
    return (react_1.default.createElement("main", { className: content_scss_1.default.content }, children));
}
exports.Content = Content;


/***/ }),
/* 55 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"content": "content__content--61-H9"
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(57), exports);


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardList = void 0;
const react_1 = __importStar(__webpack_require__(0));
const Card_1 = __webpack_require__(11);
const cardlist_scss_1 = __importDefault(__webpack_require__(86));
const react_redux_1 = __webpack_require__(1);
const actions_1 = __webpack_require__(8);
let cycle = 0;
function CardList() {
    const [isButtonVisible, setIsButtonVisible] = (0, react_1.useState)(false);
    const bottomOfList = (0, react_1.useRef)(null);
    const dispatch = (0, react_redux_1.useDispatch)();
    const token = (0, react_redux_1.useSelector)(state => state.setToken.token);
    const after = (0, react_redux_1.useSelector)(state => state.afterData.after);
    const postsData = (0, react_redux_1.useSelector)(state => state.postsData.postsData);
    const loading = (0, react_redux_1.useSelector)(state => state.postsData.loading);
    const error = (0, react_redux_1.useSelector)(state => state.postsData.error);
    (0, react_1.useEffect)(() => {
        const observer = new IntersectionObserver((entries) => {
            if (!token && token == '')
                return;
            if (cycle > 3) {
                console.log(`Cycle over ${cycle}`);
                setIsButtonVisible(true);
                return;
            }
            if (entries[0].isIntersecting) {
                dispatch((0, actions_1.postsRequestAsync)());
                cycle++;
                console.log(cycle);
            }
        });
        if (bottomOfList.current) {
            observer.observe(bottomOfList.current);
        }
        return () => {
            if (bottomOfList.current) {
                observer.unobserve(bottomOfList.current);
            }
        };
    }, [bottomOfList.current, after, token]);
    return (react_1.default.createElement("ul", { className: cardlist_scss_1.default.cardList },
        postsData.length === 0 && !loading && !error && (react_1.default.createElement("div", { className: cardlist_scss_1.default.status }, "\u041D\u0435\u0442 \u043D\u0438 \u043E\u0434\u043D\u043E\u0433\u043E \u043F\u043E\u0441\u0442\u0430")),
        postsData.map((item) => (react_1.default.createElement(Card_1.Card, { key: item.id, id: item.id, username: item.username, title: item.title, score: item.score, num_comments: item.num_comments, thumbnail: item.thumbnail, created: item.created }))),
        isButtonVisible && react_1.default.createElement("button", { className: cardlist_scss_1.default.moreButton, onClick: () => { cycle = 0; setIsButtonVisible(false); dispatch((0, actions_1.postsRequestAsync)()); } }, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0435\u0449\u0451"),
        react_1.default.createElement("div", { ref: bottomOfList }),
        loading && (react_1.default.createElement("div", { className: cardlist_scss_1.default.status }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...")),
        error && (react_1.default.createElement("div", { className: cardlist_scss_1.default.status }, error))));
}
exports.CardList = CardList;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = exports.time = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const card_scss_1 = __importDefault(__webpack_require__(59));
const Controls_1 = __webpack_require__(12);
const Actions_1 = __webpack_require__(62);
const CommentsButton_1 = __webpack_require__(65);
const KarmaCounter_1 = __webpack_require__(13);
const Menu_1 = __webpack_require__(70);
const Preview_1 = __webpack_require__(14);
const TextContent_1 = __webpack_require__(82);
const Title_1 = __webpack_require__(16);
function time(created) {
    let unix_timestamp = created;
    let date = new Date(unix_timestamp * 1000);
    let formattedTime = String(date).substr(4, 20);
    return formattedTime;
}
exports.time = time;
function Card(props) {
    const { id, username, title, score, num_comments, thumbnail, created } = props;
    return (react_1.default.createElement("li", { className: card_scss_1.default.card },
        react_1.default.createElement(TextContent_1.TextContent, { username: username, date: time(created) },
            react_1.default.createElement(Title_1.Title, { title: title, id: id })),
        react_1.default.createElement(Preview_1.Preview, { thumbnail: thumbnail }),
        react_1.default.createElement(Menu_1.Menu, null),
        react_1.default.createElement(Controls_1.Controls, null,
            react_1.default.createElement(KarmaCounter_1.KarmaCounter, { score: score }),
            react_1.default.createElement(CommentsButton_1.CommentsButton, { num_comments: num_comments }),
            react_1.default.createElement(Actions_1.Actions, null))));
}
exports.Card = Card;


/***/ }),
/* 59 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"card": "card__card--6OfeO"
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controls = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const controls_scss_1 = __importDefault(__webpack_require__(61));
function Controls({ className = 'controls', children }) {
    return (react_1.default.createElement("div", { className: controls_scss_1.default[className] }, children));
}
exports.Controls = Controls;


/***/ }),
/* 61 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"controls": "controls__controls--2oCbL",
	"controls-modal": "controls__controls-modal--2WUcs"
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(63), exports);


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Actions = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const actions_scss_1 = __importDefault(__webpack_require__(64));
function Actions() {
    return (react_1.default.createElement("div", { className: actions_scss_1.default.actions },
        react_1.default.createElement("button", { className: actions_scss_1.default.shareButton },
            react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 20 20", fill: "none" },
                react_1.default.createElement("circle", { cx: "10", cy: "10", r: "10", fill: "#C4C4C4" }),
                react_1.default.createElement("path", { d: "M11.6667 12.0683C11.3289 12.0683 11.0267 12.2189 10.7956 12.4548L7.62667 10.3715C7.64889 10.256 7.66667 10.1406 7.66667 10.0201C7.66667 9.8996 7.64889 9.78414 7.62667 9.66867L10.76 7.60542C11 7.85643 11.3156 8.01205 11.6667 8.01205C12.4044 8.01205 13 7.33936 13 6.50602C13 5.67269 12.4044 5 11.6667 5C10.9289 5 10.3333 5.67269 10.3333 6.50602C10.3333 6.62651 10.3511 6.74197 10.3733 6.85743L7.24 8.92068C7 8.66968 6.68444 8.51406 6.33333 8.51406C5.59556 8.51406 5 9.18675 5 10.0201C5 10.8534 5.59556 11.5261 6.33333 11.5261C6.68444 11.5261 7 11.3705 7.24 11.1195L10.4044 13.2078C10.3822 13.3133 10.3689 13.4237 10.3689 13.5341C10.3689 14.3424 10.9511 15 11.6667 15C12.3822 15 12.9644 14.3424 12.9644 13.5341C12.9644 12.7259 12.3822 12.0683 11.6667 12.0683Z", fill: "white" }))),
        react_1.default.createElement("button", { className: actions_scss_1.default.saveButton },
            react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 20 20", fill: "none" },
                react_1.default.createElement("circle", { cx: "10", cy: "10", r: "10", fill: "#C4C4C4" }),
                react_1.default.createElement("path", { d: "M6 7H5V14C5 14.55 5.45 15 6 15H13V14H6V7ZM14 5H8C7.45 5 7 5.45 7 6V12C7 12.55 7.45 13 8 13H14C14.55 13 15 12.55 15 12V6C15 5.45 14.55 5 14 5ZM13.5 9.5H11.5V11.5H10.5V9.5H8.5V8.5H10.5V6.5H11.5V8.5H13.5V9.5Z", fill: "white" })))));
}
exports.Actions = Actions;


/***/ }),
/* 64 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"shareButton": "actions__shareButton--3jy6e",
	"saveButton": "actions__saveButton--2Hq4Z",
	"actions": "actions__actions--3b2kc"
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(66), exports);


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsButton = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const commentsbutton_scss_1 = __importDefault(__webpack_require__(67));
function CommentsButton({ num_comments }) {
    return (react_1.default.createElement("button", { className: commentsbutton_scss_1.default.commentsButton },
        react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "15", height: "15", viewBox: "0 0 15 15", fill: "none" },
            react_1.default.createElement("path", { d: "M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z", fill: "#C4C4C4" })),
        react_1.default.createElement("span", { className: commentsbutton_scss_1.default.commentsNumber }, num_comments)));
}
exports.CommentsButton = CommentsButton;


/***/ }),
/* 67 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"commentsButton": "commentsbutton__commentsButton--1g156",
	"commentsNumber": "commentsbutton__commentsNumber--1ClmV"
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KarmaCounter = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const karmacounter_scss_1 = __importDefault(__webpack_require__(69));
function KarmaCounter({ score }) {
    return (react_1.default.createElement("div", { className: karmacounter_scss_1.default.karmaCounter },
        react_1.default.createElement("button", { className: karmacounter_scss_1.default.up },
            react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "19", height: "10", viewBox: "0 0 19 10", fill: "none" },
                react_1.default.createElement("path", { d: "M9.5 0L0 10H19L9.5 0Z", fill: "#C4C4C4" }))),
        react_1.default.createElement("span", { className: karmacounter_scss_1.default.karmaValue }, score),
        react_1.default.createElement("button", { className: karmacounter_scss_1.default.down },
            react_1.default.createElement("svg", { className: karmacounter_scss_1.default.down, xmlns: "http://www.w3.org/2000/svg", width: "19", height: "10", viewBox: "0 0 19 10", fill: "none" },
                react_1.default.createElement("path", { d: "M9.5 0L0 10H19L9.5 0Z", fill: "#C4C4C4" })))));
}
exports.KarmaCounter = KarmaCounter;


/***/ }),
/* 69 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"karmaCounter": "karmacounter__karmaCounter--C3LEv",
	"down": "karmacounter__down--jOmVn",
	"karmaValue": "karmacounter__karmaValue--2SpQL",
	"up": "karmacounter__up--OZkNa"
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(71), exports);


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const Dropdown_1 = __webpack_require__(9);
const menu_scss_1 = __importDefault(__webpack_require__(72));
const MenuIcon_1 = __webpack_require__(73);
const MenuItemsList_1 = __webpack_require__(74);
const Text_1 = __webpack_require__(3);
function Menu() {
    const [isDropdownOpen, setIsDropdownOpen] = react_1.default.useState(false);
    return (react_1.default.createElement("div", { className: menu_scss_1.default.menu },
        react_1.default.createElement(Dropdown_1.Dropdown, { button: react_1.default.createElement("button", { className: menu_scss_1.default.menuButton },
                react_1.default.createElement(MenuIcon_1.MenuIcon, null)) },
            react_1.default.createElement("div", { className: menu_scss_1.default.dropDown },
                react_1.default.createElement(MenuItemsList_1.MenuItemsList, { postID: '1' }),
                react_1.default.createElement("button", { className: menu_scss_1.default.closeButton },
                    react_1.default.createElement(Text_1.Text, { mobileSize: 12, size: 14, color: Text_1.EColors.gray66 }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"))))));
}
exports.Menu = Menu;


/***/ }),
/* 72 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"menu": "menu__menu--3ALMa",
	"closeButton": "menu__closeButton--3cfWS",
	"menuButton": "menu__menuButton--1o5uL",
	"dropDown": "menu__dropDown--33ilJ"
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuIcon = void 0;
const React = __importStar(__webpack_require__(0));
function MenuIcon() {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "5", viewBox: "0 0 20 5", fill: "none" },
        React.createElement("circle", { cx: "17.5", cy: "2.5", r: "2.5", transform: "rotate(90 17.5 2.5)", fill: "#D9D9D9" }),
        React.createElement("circle", { cx: "10", cy: "2.5", r: "2.5", transform: "rotate(90 10 2.5)", fill: "#D9D9D9" }),
        React.createElement("circle", { cx: "2.5", cy: "2.5", r: "2.5", transform: "rotate(90 2.5 2.5)", fill: "#D9D9D9" })));
}
exports.MenuIcon = MenuIcon;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(75), exports);


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuItemsList = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const menuitemslist_scss_1 = __importDefault(__webpack_require__(76));
const Text_1 = __webpack_require__(3);
const Icon_1 = __webpack_require__(77);
function MenuItemsList({ postID }) {
    return (react_1.default.createElement("ul", { className: menuitemslist_scss_1.default.menuItemsList },
        react_1.default.createElement("li", { onClick: () => console.log(postID), className: menuitemslist_scss_1.default.menuItemTablet },
            react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.comment, size: 16 }),
            react_1.default.createElement(Text_1.Text, { size: 12, color: Text_1.EColors.gray99 }, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438")),
        react_1.default.createElement("div", { className: menuitemslist_scss_1.default.dividerTablet }),
        react_1.default.createElement("li", { onClick: () => console.log(postID), className: menuitemslist_scss_1.default.menuItemTablet },
            react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.share, size: 16 }),
            react_1.default.createElement(Text_1.Text, { size: 12, color: Text_1.EColors.gray99 }, "\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F")),
        react_1.default.createElement("div", { className: menuitemslist_scss_1.default.dividerTablet }),
        react_1.default.createElement("li", { onClick: () => console.log(postID), className: menuitemslist_scss_1.default.menuItem },
            react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.block, size: 16 }),
            react_1.default.createElement(Text_1.Text, { size: 12, color: Text_1.EColors.gray99 }, "\u0421\u043A\u0440\u044B\u0442\u044C")),
        react_1.default.createElement("div", { className: menuitemslist_scss_1.default.divider }),
        react_1.default.createElement("li", { className: menuitemslist_scss_1.default.menuItemTablet },
            react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.save, size: 16 }),
            react_1.default.createElement(Text_1.Text, { size: 12, color: Text_1.EColors.gray99 }, "\u0421\u043E\u0445\u0440\u043E\u043D\u0438\u0442\u044C")),
        react_1.default.createElement("div", { className: menuitemslist_scss_1.default.dividerTablet }),
        react_1.default.createElement("li", { className: menuitemslist_scss_1.default.menuItem },
            react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.warning, size: 16 }),
            react_1.default.createElement(Text_1.Text, { size: 12, color: Text_1.EColors.gray99 }, "\u041F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C\u0441\u044F"))));
}
exports.MenuItemsList = MenuItemsList;


/***/ }),
/* 76 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"menuItemsList": "menuitemslist__menuItemsList--2xuAE",
	"menuItem": "menuitemslist__menuItem--2Vr82",
	"menuItemTablet": "menuitemslist__menuItemTablet--m8-EA",
	"divider": "menuitemslist__divider--vvAHf",
	"dividerTablet": "menuitemslist__dividerTablet--1H8o1"
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(78), exports);


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = exports.EIcons = void 0;
const classnames_1 = __importDefault(__webpack_require__(2));
const react_1 = __importDefault(__webpack_require__(0));
const icon_scss_1 = __importDefault(__webpack_require__(79));
var EIcons;
(function (EIcons) {
    EIcons["menu"] = "menu";
    EIcons["warning"] = "warning";
    EIcons["block"] = "block";
    EIcons["comment"] = "comment";
    EIcons["share"] = "share";
    EIcons["save"] = "save";
})(EIcons = exports.EIcons || (exports.EIcons = {}));
function Icon(props) {
    const { name, size } = props;
    const classes = (0, classnames_1.default)(icon_scss_1.default[`s${size}`]);
    const setIcon = () => {
        switch (name) {
            default:
                return react_1.default.createElement("svg", { className: classes, xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 12 12", fill: "none" },
                    react_1.default.createElement("path", { d: "M6 0C2.688 0 0 2.688 0 6C0 9.312 2.688 12 6 12C9.312 12 12 9.312 12 6C12 2.688 9.312 0 6 0ZM6 10.8C3.348 10.8 1.2 8.652 1.2 6C1.2 4.89 1.578 3.87 2.214 3.06L8.94 9.786C8.13 10.422 7.11 10.8 6 10.8ZM9.786 8.94L3.06 2.214C3.87 1.578 4.89 1.2 6 1.2C8.652 1.2 10.8 3.348 10.8 6C10.8 7.11 10.422 8.13 9.786 8.94Z", fill: "#999999" }));
            case `block`:
                return react_1.default.createElement("svg", { className: classes, xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 12 12", fill: "none" },
                    react_1.default.createElement("path", { d: "M6 0C2.688 0 0 2.688 0 6C0 9.312 2.688 12 6 12C9.312 12 12 9.312 12 6C12 2.688 9.312 0 6 0ZM6 10.8C3.348 10.8 1.2 8.652 1.2 6C1.2 4.89 1.578 3.87 2.214 3.06L8.94 9.786C8.13 10.422 7.11 10.8 6 10.8ZM9.786 8.94L3.06 2.214C3.87 1.578 4.89 1.2 6 1.2C8.652 1.2 10.8 3.348 10.8 6C10.8 7.11 10.422 8.13 9.786 8.94Z", fill: "#999999" }));
            case 'warning':
                return react_1.default.createElement("svg", { className: classes, xmlns: "http://www.w3.org/2000/svg", width: "14", height: "12", viewBox: "0 0 14 12", fill: "none" },
                    react_1.default.createElement("path", { d: "M0 12H14L7 0L0 12ZM7.63636 10.1053H6.36364V8.8421H7.63636V10.1053ZM7.63636 7.57895H6.36364V5.05263H7.63636V7.57895Z", fill: "#999999" }));
            case 'comment':
                return react_1.default.createElement("svg", { className: classes, xmlns: "http://www.w3.org/2000/svg", width: "15", height: "15", viewBox: "0 0 15 15", fill: "none" },
                    react_1.default.createElement("path", { d: "M12.75 0.416626H1.41667C0.6375 0.416626 0 1.05413 0 1.83329V10.3333C0 11.1125 0.6375 11.75 1.41667 11.75H11.3333L14.1667 14.5833V1.83329C14.1667 1.05413 13.5292 0.416626 12.75 0.416626ZM11.3333 8.91663H2.83333V7.49996H11.3333V8.91663ZM11.3333 6.79163H2.83333V5.37496H11.3333V6.79163ZM11.3333 4.66663H2.83333V3.24996H11.3333V4.66663Z", fill: "#999999" }));
            case 'share':
                return react_1.default.createElement("svg", { className: classes, xmlns: "http://www.w3.org/2000/svg", width: "12", height: "14", viewBox: "0 0 12 14", fill: "none" },
                    react_1.default.createElement("path", { d: "M10 9.89558C9.49333 9.89558 9.04 10.1064 8.69333 10.4367L3.94 7.52008C3.97333 7.35843 4 7.19679 4 7.02811C4 6.85944 3.97333 6.69779 3.94 6.53614L8.64 3.64759C9 3.999 9.47333 4.21687 10 4.21687C11.1067 4.21687 12 3.2751 12 2.10843C12 0.941767 11.1067 0 10 0C8.89333 0 8 0.941767 8 2.10843C8 2.27711 8.02667 2.43875 8.06 2.6004L3.36 5.48896C3 5.13755 2.52667 4.91968 2 4.91968C0.893333 4.91968 0 5.86145 0 7.02811C0 8.19478 0.893333 9.13655 2 9.13655C2.52667 9.13655 3 8.91867 3.36 8.56727L8.10667 11.491C8.07333 11.6386 8.05333 11.7932 8.05333 11.9478C8.05333 13.0793 8.92667 14 10 14C11.0733 14 11.9467 13.0793 11.9467 11.9478C11.9467 10.8163 11.0733 9.89558 10 9.89558Z", fill: "#999999" }));
            case 'save':
                return react_1.default.createElement("svg", { className: classes, xmlns: "http://www.w3.org/2000/svg", width: "14", height: "14", viewBox: "0 0 14 14", fill: "none" },
                    react_1.default.createElement("path", { d: "M1.4 2.8H0V12.6C0 13.37 0.63 14 1.4 14H11.2V12.6H1.4V2.8ZM12.6 0H4.2C3.43 0 2.8 0.63 2.8 1.4V9.8C2.8 10.57 3.43 11.2 4.2 11.2H12.6C13.37 11.2 14 10.57 14 9.8V1.4C14 0.63 13.37 0 12.6 0ZM11.9 6.3H9.1V9.1H7.7V6.3H4.9V4.9H7.7V2.1H9.1V4.9H11.9V6.3Z", fill: "#979797" }));
        }
    };
    return (setIcon());
}
exports.Icon = Icon;


/***/ }),
/* 79 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"s28": "icon__s28--2qQBw",
	"s20": "icon__s20--1D7eo",
	"s16": "icon__s16--36Wur",
	"s14": "icon__s14--13KUs",
	"s12": "icon__s12--2csRx",
	"s10": "icon__s10--1Q_Oh",
	"m28": "icon__m28--H9DuR",
	"m20": "icon__m20--2WB4j",
	"m16": "icon__m16--1MMC3",
	"m14": "icon__m14--BCoIV",
	"m12": "icon__m12--2RjzK",
	"m10": "icon__m10--3ZTRB",
	"t28": "icon__t28--3W9bI",
	"t20": "icon__t20--1-8Sj",
	"t16": "icon__t16--1Z9Hk",
	"t14": "icon__t14--TaoZd",
	"t12": "icon__t12--1CT0U",
	"t10": "icon__t10--34TMq",
	"d28": "icon__d28--CMfsA",
	"d20": "icon__d20--3LGSK",
	"d16": "icon__d16--235Yh",
	"d14": "icon__d14--2qICP",
	"d12": "icon__d12--Bj3ci",
	"d10": "icon__d10--1z4jL"
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Preview = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const preview_scss_1 = __importDefault(__webpack_require__(81));
function Preview(props) {
    const { thumbnail, className = 'preview' } = props;
    if (!(thumbnail.endsWith('.jpg'))) {
        return null;
    }
    return (react_1.default.createElement("div", { className: preview_scss_1.default[className] },
        react_1.default.createElement("img", { className: preview_scss_1.default.previewImg, src: thumbnail })));
}
exports.Preview = Preview;


/***/ }),
/* 81 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"preview": "preview__preview--3v8sd",
	"previewImg": "preview__previewImg--1EsgH",
	"preview-modal": "preview__preview-modal--10a9Z"
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(15), exports);


/***/ }),
/* 83 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"textContent": "textcontent__textContent--36RnO",
	"publishedLabel": "textcontent__publishedLabel--3qyv9",
	"userLink": "textcontent__userLink--2DvdL",
	"avatar": "textcontent__avatar--39M_r",
	"createdAt": "textcontent__createdAt--2XYRb",
	"title": "textcontent__title--3n-Ks",
	"postLink": "textcontent__postLink--2czDE",
	"username": "textcontent__username--nWPj1",
	"metaData": "textcontent__metaData--3SRhz",
	"textContent-modal": "textcontent__textContent-modal--3Dz0h"
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Title = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const title_scss_1 = __importDefault(__webpack_require__(85));
const react_router_dom_1 = __webpack_require__(7);
function Title(props) {
    const { title, id } = props;
    return (react_1.default.createElement("h2", { className: title_scss_1.default.title },
        react_1.default.createElement(react_router_dom_1.Link, { to: `/posts/${id}`, className: title_scss_1.default.postLink }, title)));
}
exports.Title = Title;


/***/ }),
/* 85 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"title": "title__title--3tBeX",
	"postLink": "title__postLink--3myAd"
};


/***/ }),
/* 86 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"cardList": "cardlist__cardList--2WH4h",
	"status": "cardlist__status--2_czr",
	"moreButton": "cardlist__moreButton--YjTTl"
};


/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.rootReducer = exports.initialState = void 0;
const actions_1 = __webpack_require__(8);
const actions_2 = __webpack_require__(4);
const reducer_1 = __webpack_require__(90);
const reducer_2 = __webpack_require__(91);
const reducer_3 = __webpack_require__(92);
const actions_3 = __webpack_require__(5);
exports.initialState = {
    setToken: {
        loading: false,
        error: '',
        token: '',
    },
    postsData: {
        loading: false,
        error: '',
        postsData: [],
    },
    me: {
        loading: false,
        error: '',
        data: {},
    },
    afterData: {
        loading: false,
        error: '',
        after: '',
    }
};
const rootReducer = (state = exports.initialState, action) => {
    switch (action.type) {
        case actions_2.SAVING_TOKEN:
        case actions_2.SAVING_TOKEN_SUCCES:
        case actions_2.SAVING_TOKEN_ERROR:
            return Object.assign(Object.assign({}, state), { setToken: (0, reducer_1.tokenReducer)(state.setToken, action) });
        case actions_1.SAVING_POSTS:
        case actions_1.SAVING_POSTS_SUCCES:
        case actions_1.SAVING_POSTS_ERROR:
            return Object.assign(Object.assign({}, state), { postsData: (0, reducer_2.postsReducer)(state.postsData, action) });
        case actions_3.SAVING_ME:
        case actions_3.SAVING_ME_SUCCES:
        case actions_3.SAVING_ME_ERROR:
            return Object.assign(Object.assign({}, state), { me: (0, reducer_3.meReducer)(state.me, action) });
        case actions_1.SAVING_AFTER:
        case actions_1.SAVING_AFTER_SUCCES:
        case actions_1.SAVING_AFTER_ERROR:
            return Object.assign(Object.assign({}, state), { afterData: (0, reducer_2.afterReducer)(state.afterData, action) });
        default:
            return state;
    }
};
exports.rootReducer = rootReducer;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenReducer = void 0;
const actions_1 = __webpack_require__(4);
const tokenReducer = (state, action) => {
    switch (action.type) {
        case actions_1.SAVING_TOKEN:
            return Object.assign(Object.assign({}, state), { loading: true });
        default:
            return state;
        case actions_1.SAVING_TOKEN_ERROR:
            return Object.assign(Object.assign({}, state), { error: action.error, loading: false });
        case actions_1.SAVING_TOKEN_SUCCES:
            return Object.assign(Object.assign({}, state), { token: action.token, loading: false });
    }
};
exports.tokenReducer = tokenReducer;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.afterReducer = exports.postsReducer = void 0;
const actions_1 = __webpack_require__(8);
const postsReducer = (state, action) => {
    switch (action.type) {
        case actions_1.SAVING_POSTS:
            return Object.assign(Object.assign({}, state), { loading: true });
        default:
            return state;
        case actions_1.SAVING_POSTS_ERROR:
            return Object.assign(Object.assign({}, state), { error: action.error, loading: false });
        case actions_1.SAVING_POSTS_SUCCES:
            return Object.assign(Object.assign({}, state), { postsData: state.postsData.concat(action.posts), loading: false });
    }
};
exports.postsReducer = postsReducer;
const afterReducer = (state, action) => {
    switch (action.type) {
        case actions_1.SAVING_AFTER:
            return Object.assign(Object.assign({}, state), { loading: true });
        default:
            return state;
        case actions_1.SAVING_AFTER_ERROR:
            return Object.assign(Object.assign({}, state), { error: action.error, loading: false });
        case actions_1.SAVING_AFTER_SUCCES:
            return Object.assign(Object.assign({}, state), { after: action.after, loading: false });
    }
};
exports.afterReducer = afterReducer;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.meReducer = void 0;
const actions_1 = __webpack_require__(5);
const meReducer = (state, action) => {
    switch (action.type) {
        case actions_1.SAVING_ME:
            return Object.assign(Object.assign({}, state), { loading: true });
        default:
            return state;
        case actions_1.SAVING_ME_ERROR:
            return Object.assign(Object.assign({}, state), { error: action.error, loading: false });
        case actions_1.SAVING_ME_SUCCES:
            return Object.assign(Object.assign({}, state), { data: action.data, loading: false });
    }
};
exports.meReducer = meReducer;


/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useIsMounted = void 0;
const React = __importStar(__webpack_require__(0));
function useIsMounted() {
    const [isMounted, setIsMounted] = React.useState(false);
    React.useEffect(() => { setIsMounted(true); }, []);
    return [isMounted];
}
exports.useIsMounted = useIsMounted;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const react_dom_1 = __importDefault(__webpack_require__(96));
const post_scss_1 = __importDefault(__webpack_require__(97));
const react_router_dom_1 = __webpack_require__(7);
const Title_1 = __webpack_require__(16);
const react_redux_1 = __webpack_require__(1);
const Card_1 = __webpack_require__(11);
const TextContent_1 = __webpack_require__(15);
const KarmaCounter_1 = __webpack_require__(13);
const Controls_1 = __webpack_require__(12);
const Preview_1 = __webpack_require__(14);
const Form_1 = __webpack_require__(98);
function Post() {
    // ID
    const { id } = (0, react_router_dom_1.useParams)();
    // Close
    const navigate = (0, react_router_dom_1.useNavigate)();
    react_1.default.useEffect(() => {
        function handleClick(event) {
            var _a;
            if (event.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {
                navigate('/posts/');
            }
        }
        document.addEventListener('click', handleClick);
        return () => { document.removeEventListener('click', handleClick); };
    }, []);
    const ref = react_1.default.useRef(null);
    const node = document.querySelector('#modal_root');
    if (!node)
        return null;
    // Header
    const postsData = (0, react_redux_1.useSelector)(state => state.postsData.postsData);
    const thisPostData = postsData.find((el) => el.id == id);
    if (!thisPostData)
        return react_1.default.createElement("div", null);
    return react_dom_1.default.createPortal((react_1.default.createElement("div", { className: post_scss_1.default.container, ref: ref },
        react_1.default.createElement("div", { className: post_scss_1.default.modal },
            react_1.default.createElement("div", { className: post_scss_1.default.header },
                react_1.default.createElement(Controls_1.Controls, { className: 'controls-modal' },
                    react_1.default.createElement(KarmaCounter_1.KarmaCounter, { score: thisPostData.score })),
                react_1.default.createElement(TextContent_1.TextContent, { username: thisPostData.username, date: (0, Card_1.time)(thisPostData.created), className: 'textContent-modal' },
                    react_1.default.createElement(Title_1.Title, { title: thisPostData.title, id: id }))),
            react_1.default.createElement("div", { className: post_scss_1.default.content },
                react_1.default.createElement("p", { className: post_scss_1.default.selfText }, thisPostData.selftext),
                react_1.default.createElement(Preview_1.Preview, { thumbnail: thisPostData.thumbnail, className: 'preview-modal' })),
            react_1.default.createElement(Form_1.Form, null)))), node);
}
exports.Post = Post;


/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 97 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "post__container--S9kFt",
	"modal": "post__modal--1s-Df",
	"title": "post__title--1icm3",
	"content": "post__content--2MRqO",
	"header": "post__header--2gazH",
	"selfText": "post__selfText--1FHr2"
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(99), exports);


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Form = void 0;
const react_1 = __importDefault(__webpack_require__(0));
const form_scss_1 = __importDefault(__webpack_require__(100));
const formik_1 = __webpack_require__(101);
const Yup = __importStar(__webpack_require__(102));
const react_redux_1 = __webpack_require__(1);
function Form() {
    const { name } = (0, react_redux_1.useSelector)(state => state.me.data);
    const formik = (0, formik_1.useFormik)({
        initialValues: {
            text: ""
        },
        validationSchema: Yup.object({
            text: Yup.string()
                .max(50, "Должно быть 50 символов или меньше")
                .required("Объязательна для заполнения"),
        }),
        onSubmit: (e) => {
            alert(e.text);
        }
    });
    return (react_1.default.createElement("form", { onSubmit: formik.handleSubmit },
        react_1.default.createElement("textarea", { name: "text", id: "text", className: form_scss_1.default.textarea, onChange: formik.handleChange, placeholder: `${name}, оставьте ваш комментарий`, onBlur: formik.handleBlur }),
        react_1.default.createElement("div", { className: form_scss_1.default.textarea_bottom },
            react_1.default.createElement("div", { className: form_scss_1.default.error }, formik.touched.text && formik.errors.text),
            react_1.default.createElement("button", { type: 'submit', className: form_scss_1.default.textarea_btn }, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C"))));
}
exports.Form = Form;


/***/ }),
/* 100 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"textarea": "form__textarea--d5HYq",
	"textarea_btn": "form__textarea_btn---HQTh",
	"textarea_bottom": "form__textarea_bottom--3oJrm",
	"error": "form__error--30cRs"
};


/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.indexTemplate = void 0;
const indexTemplate = (content, token) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reddit</title>
  <script src="/static/client.js" type="application/javascript"></script>
  <script>
   window.__token__ = '${token}'
  </script>
</head>
<body>
  <div id="react_root">${content}</div>
  <div id="modal_root"></div>
</body>
</html>
`;
exports.indexTemplate = indexTemplate;


/***/ })
/******/ ]);