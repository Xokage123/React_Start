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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/hooks/useToken.ts":
/*!*******************************!*\
  !*** ./src/hooks/useToken.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nconst actions_1 = __webpack_require__(/*! ../shared/store/token/actions */ \"./src/shared/store/token/actions.ts\");\r\nfunction useToken() {\r\n    const dispatch = react_redux_1.useDispatch();\r\n    React.useEffect(() => {\r\n        dispatch(actions_1.tokenRequestSync(window.__token__));\r\n    }, []);\r\n    const token = react_redux_1.useSelector(state => state.setToken.token);\r\n    return [token];\r\n}\r\nexports.useToken = useToken;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useToken.ts?");

/***/ }),

/***/ "./src/hooks/useUserData.ts":
/*!**********************************!*\
  !*** ./src/hooks/useUserData.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nconst useToken_1 = __webpack_require__(/*! ./useToken */ \"./src/hooks/useToken.ts\");\r\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nconst actions_1 = __webpack_require__(/*! ../shared/store/me/actions */ \"./src/shared/store/me/actions.ts\");\r\nfunction useUserData() {\r\n    const data = react_redux_1.useSelector(state => state.me.data);\r\n    const dispatch = react_redux_1.useDispatch();\r\n    const [token] = useToken_1.useToken();\r\n    React.useEffect(() => {\r\n        if (!token)\r\n            return;\r\n        dispatch(actions_1.meRequestAsync());\r\n    }, [token]);\r\n    return data;\r\n}\r\nexports.useUserData = useUserData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useUserData.ts?");

/***/ }),

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.indexTemplate = (content, token) => `\r\n<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <title>Reddit</title>\r\n  <script src=\"/static/client.js\" type=\"application/javascript\"></script>\r\n  <script>\r\n   window.__token__ = '${token}'\r\n  </script>\r\n</head>\r\n<body>\r\n  <div id=\"react_root\">${content}</div>\r\n  <div id=\"modal_root\"></div>\r\n</body>\r\n</html>\r\n`;\r\n\n\n//# sourceURL=webpack:///./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nconst server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\r\nconst App_1 = __webpack_require__(/*! ../shared/App */ \"./src/shared/App.tsx\");\r\nconst indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\r\nconst axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nconst app = express_1.default();\r\napp.use('/static', express_1.default.static('./dist/client'));\r\napp.get('/auth', (req, res) => {\r\n    axios_1.default.post('https://www.reddit.com/api/v1/access_token', `grant_type=authorization_code&code=${req.query.code}&redirect_uri=http://localhost:3000/auth`, {\r\n        auth: { username: 'wPuZkCZI9S4RJ87ZKWwc0w', password: 'EmuC04f1ckYXf7OLCPwGUTL89dl4bw' },\r\n        headers: { 'Content-type': 'application/x-www-form-urlencoded' }\r\n    })\r\n        .then(({ data }) => {\r\n        res.send(indexTemplate_1.indexTemplate(server_1.default.renderToString(react_1.default.createElement(App_1.App, null)), data['access_token']));\r\n    })\r\n        .catch(console.log);\r\n});\r\napp.get('*', (req, res) => {\r\n    res.send(indexTemplate_1.indexTemplate(server_1.default.renderToString(react_1.default.createElement(App_1.App, null))));\r\n});\r\napp.listen(3000, () => {\r\n    console.log('Server started on http://localhost:3000');\r\n});\r\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/App.tsx":
/*!****************************!*\
  !*** ./src/shared/App.tsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nconst Layout_1 = __webpack_require__(/*! ./Layout/Layout */ \"./src/shared/Layout/Layout.tsx\");\r\n__webpack_require__(/*! ./main.global.scss */ \"./src/shared/main.global.scss\");\r\nconst Header_1 = __webpack_require__(/*! ./Header */ \"./src/shared/Header/index.ts\");\r\nconst Content_1 = __webpack_require__(/*! ./Content */ \"./src/shared/Content/index.ts\");\r\nconst CardList_1 = __webpack_require__(/*! ./CardList */ \"./src/shared/CardList/index.ts\");\r\nconst redux_1 = __webpack_require__(/*! redux */ \"redux\");\r\nconst redux_devtools_extension_1 = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\r\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nconst rootReducer_1 = __webpack_require__(/*! ./store/rootReducer */ \"./src/shared/store/rootReducer.ts\");\r\nconst redux_thunk_1 = __importDefault(__webpack_require__(/*! redux-thunk */ \"redux-thunk\"));\r\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nconst useIsMuonted_1 = __webpack_require__(/*! ./utils/React/useIsMuonted */ \"./src/shared/utils/React/useIsMuonted.tsx\");\r\nconst Post_1 = __webpack_require__(/*! ./Post/Post */ \"./src/shared/Post/Post.tsx\");\r\nconst store = redux_1.createStore(rootReducer_1.rootReducer, redux_devtools_extension_1.composeWithDevTools(redux_1.applyMiddleware(redux_thunk_1.default)));\r\nfunction App() {\r\n    const [isMounted] = useIsMuonted_1.useIsMounted();\r\n    return (React.createElement(react_redux_1.Provider, { store: store }, isMounted && (React.createElement(react_router_dom_1.BrowserRouter, null,\r\n        React.createElement(Layout_1.Layout, null,\r\n            React.createElement(Header_1.Header, null),\r\n            React.createElement(Content_1.Content, null,\r\n                React.createElement(CardList_1.CardList, null),\r\n                React.createElement(react_router_dom_1.Routes, null,\r\n                    React.createElement(react_router_dom_1.Route, { path: '/posts/:id', element: React.createElement(Post_1.Post, null) }))))))));\r\n}\r\nexports.App = App;\r\n\n\n//# sourceURL=webpack:///./src/shared/App.tsx?");

/***/ }),

/***/ "./src/shared/Break/Break.tsx":
/*!************************************!*\
  !*** ./src/shared/Break/Break.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst break_scss_1 = __importDefault(__webpack_require__(/*! ./break.scss */ \"./src/shared/Break/break.scss\"));\r\nconst classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nfunction Break(props) {\r\n    const { inline = false, top = false, size, mobileSize, tabletSize, desktopSize, } = props;\r\n    return (react_1.default.createElement(\"div\", { className: classnames_1.default(break_scss_1.default[`s${size}`], { [break_scss_1.default[`mobile_s${mobileSize}`]]: mobileSize }, { [break_scss_1.default[`tablet_s${tabletSize}`]]: tabletSize }, { [break_scss_1.default[`desktop_s${desktopSize}`]]: desktopSize }, { [break_scss_1.default.inline]: inline }, { [break_scss_1.default.top]: top }) }));\r\n}\r\nexports.Break = Break;\r\n\n\n//# sourceURL=webpack:///./src/shared/Break/Break.tsx?");

/***/ }),

/***/ "./src/shared/Break/break.scss":
/*!*************************************!*\
  !*** ./src/shared/Break/break.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"s4\": \"break__s4--3kctv\",\n\t\"s8\": \"break__s8--psbgx\",\n\t\"s12\": \"break__s12--hyZ-e\",\n\t\"s16\": \"break__s16--3GLW7\",\n\t\"s20\": \"break__s20--2znbf\",\n\t\"inline\": \"break__inline--1-WLz\",\n\t\"top\": \"break__top--2QE-5\",\n\t\"mobile_s4\": \"break__mobile_s4--HSL_1\",\n\t\"mobile_s8\": \"break__mobile_s8--1hWLe\",\n\t\"mobile_s12\": \"break__mobile_s12--3Sggf\",\n\t\"mobile_s16\": \"break__mobile_s16--3zAL1\",\n\t\"mobile_s20\": \"break__mobile_s20--3WdEu\",\n\t\"tablet_s4\": \"break__tablet_s4--3_TIi\",\n\t\"tablet_s8\": \"break__tablet_s8--2fJ0_\",\n\t\"tablet_s12\": \"break__tablet_s12--20Xnc\",\n\t\"tablet_s16\": \"break__tablet_s16--167Fu\",\n\t\"tablet_s20\": \"break__tablet_s20--16SRw\",\n\t\"desktop_s4\": \"break__desktop_s4--3Ahl5\",\n\t\"desktop_s8\": \"break__desktop_s8--1hZOk\",\n\t\"desktop_s12\": \"break__desktop_s12--3tEJg\",\n\t\"desktop_s16\": \"break__desktop_s16--3bDgP\",\n\t\"desktop_s20\": \"break__desktop_s20--28y3I\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Break/break.scss?");

/***/ }),

/***/ "./src/shared/Break/index.ts":
/*!***********************************!*\
  !*** ./src/shared/Break/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nfunction __export(m) {\r\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__export(__webpack_require__(/*! ./Break */ \"./src/shared/Break/Break.tsx\"));\r\n\n\n//# sourceURL=webpack:///./src/shared/Break/index.ts?");

/***/ }),

/***/ "./src/shared/CardList/Card/Card.tsx":
/*!*******************************************!*\
  !*** ./src/shared/CardList/Card/Card.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst card_scss_1 = __importDefault(__webpack_require__(/*! ./card.scss */ \"./src/shared/CardList/Card/card.scss\"));\r\nconst Controls_1 = __webpack_require__(/*! ./Controls */ \"./src/shared/CardList/Card/Controls/index.ts\");\r\nconst Actions_1 = __webpack_require__(/*! ./Controls/Actions */ \"./src/shared/CardList/Card/Controls/Actions/index.ts\");\r\nconst CommentsButton_1 = __webpack_require__(/*! ./Controls/CommentsButton */ \"./src/shared/CardList/Card/Controls/CommentsButton/index.ts\");\r\nconst KarmaCounter_1 = __webpack_require__(/*! ./Controls/KarmaCounter */ \"./src/shared/CardList/Card/Controls/KarmaCounter/index.ts\");\r\nconst Menu_1 = __webpack_require__(/*! ./Menu */ \"./src/shared/CardList/Card/Menu/index.ts\");\r\nconst Preview_1 = __webpack_require__(/*! ./Preview */ \"./src/shared/CardList/Card/Preview/index.ts\");\r\nconst TextContent_1 = __webpack_require__(/*! ./TextContent */ \"./src/shared/CardList/Card/TextContent/index.ts\");\r\nconst Title_1 = __webpack_require__(/*! ./TextContent/Title */ \"./src/shared/CardList/Card/TextContent/Title/index.ts\");\r\nfunction time(created) {\r\n    let unix_timestamp = created;\r\n    let date = new Date(unix_timestamp * 1000);\r\n    let formattedTime = String(date).substr(4, 20);\r\n    return formattedTime;\r\n}\r\nexports.time = time;\r\nfunction Card(props) {\r\n    const { id, username, title, score, num_comments, thumbnail, created } = props;\r\n    return (react_1.default.createElement(\"li\", { className: card_scss_1.default.card },\r\n        react_1.default.createElement(TextContent_1.TextContent, { username: username, date: time(created) },\r\n            react_1.default.createElement(Title_1.Title, { title: title, id: id })),\r\n        react_1.default.createElement(Preview_1.Preview, { thumbnail: thumbnail }),\r\n        react_1.default.createElement(Menu_1.Menu, null),\r\n        react_1.default.createElement(Controls_1.Controls, null,\r\n            react_1.default.createElement(KarmaCounter_1.KarmaCounter, { score: score }),\r\n            react_1.default.createElement(CommentsButton_1.CommentsButton, { num_comments: num_comments }),\r\n            react_1.default.createElement(Actions_1.Actions, null))));\r\n}\r\nexports.Card = Card;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Card.tsx?");

/***/ }),

/***/ "./src/shared/CardList/Card/Controls/Actions/Actions.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/CardList/Card/Controls/Actions/Actions.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst actions_scss_1 = __importDefault(__webpack_require__(/*! ./actions.scss */ \"./src/shared/CardList/Card/Controls/Actions/actions.scss\"));\r\nfunction Actions() {\r\n    return (react_1.default.createElement(\"div\", { className: actions_scss_1.default.actions },\r\n        react_1.default.createElement(\"button\", { className: actions_scss_1.default.shareButton },\r\n            react_1.default.createElement(\"svg\", { xmlns: \"http://www.w3.org/2000/svg\", width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\" },\r\n                react_1.default.createElement(\"circle\", { cx: \"10\", cy: \"10\", r: \"10\", fill: \"#C4C4C4\" }),\r\n                react_1.default.createElement(\"path\", { d: \"M11.6667 12.0683C11.3289 12.0683 11.0267 12.2189 10.7956 12.4548L7.62667 10.3715C7.64889 10.256 7.66667 10.1406 7.66667 10.0201C7.66667 9.8996 7.64889 9.78414 7.62667 9.66867L10.76 7.60542C11 7.85643 11.3156 8.01205 11.6667 8.01205C12.4044 8.01205 13 7.33936 13 6.50602C13 5.67269 12.4044 5 11.6667 5C10.9289 5 10.3333 5.67269 10.3333 6.50602C10.3333 6.62651 10.3511 6.74197 10.3733 6.85743L7.24 8.92068C7 8.66968 6.68444 8.51406 6.33333 8.51406C5.59556 8.51406 5 9.18675 5 10.0201C5 10.8534 5.59556 11.5261 6.33333 11.5261C6.68444 11.5261 7 11.3705 7.24 11.1195L10.4044 13.2078C10.3822 13.3133 10.3689 13.4237 10.3689 13.5341C10.3689 14.3424 10.9511 15 11.6667 15C12.3822 15 12.9644 14.3424 12.9644 13.5341C12.9644 12.7259 12.3822 12.0683 11.6667 12.0683Z\", fill: \"white\" }))),\r\n        react_1.default.createElement(\"button\", { className: actions_scss_1.default.saveButton },\r\n            react_1.default.createElement(\"svg\", { xmlns: \"http://www.w3.org/2000/svg\", width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\" },\r\n                react_1.default.createElement(\"circle\", { cx: \"10\", cy: \"10\", r: \"10\", fill: \"#C4C4C4\" }),\r\n                react_1.default.createElement(\"path\", { d: \"M6 7H5V14C5 14.55 5.45 15 6 15H13V14H6V7ZM14 5H8C7.45 5 7 5.45 7 6V12C7 12.55 7.45 13 8 13H14C14.55 13 15 12.55 15 12V6C15 5.45 14.55 5 14 5ZM13.5 9.5H11.5V11.5H10.5V9.5H8.5V8.5H10.5V6.5H11.5V8.5H13.5V9.5Z\", fill: \"white\" })))));\r\n}\r\nexports.Actions = Actions;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Controls/Actions/Actions.tsx?");

/***/ }),

/***/ "./src/shared/CardList/Card/Controls/Actions/actions.scss":
/*!****************************************************************!*\
  !*** ./src/shared/CardList/Card/Controls/Actions/actions.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"shareButton\": \"actions__shareButton--3jy6e\",\n\t\"saveButton\": \"actions__saveButton--2Hq4Z\",\n\t\"actions\": \"actions__actions--3b2kc\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Controls/Actions/actions.scss?");

/***/ }),

/***/ "./src/shared/CardList/Card/Controls/Actions/index.ts":
/*!************************************************************!*\
  !*** ./src/shared/CardList/Card/Controls/Actions/index.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nfunction __export(m) {\r\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__export(__webpack_require__(/*! ./Actions */ \"./src/shared/CardList/Card/Controls/Actions/Actions.tsx\"));\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Controls/Actions/index.ts?");

/***/ }),

/***/ "./src/shared/CardList/Card/Controls/CommentsButton/CommentsButton.tsx":
/*!*****************************************************************************!*\
  !*** ./src/shared/CardList/Card/Controls/CommentsButton/CommentsButton.tsx ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst commentsbutton_scss_1 = __importDefault(__webpack_require__(/*! ./commentsbutton.scss */ \"./src/shared/CardList/Card/Controls/CommentsButton/commentsbutton.scss\"));\r\nfunction CommentsButton({ num_comments }) {\r\n    return (react_1.default.createElement(\"button\", { className: commentsbutton_scss_1.default.commentsButton },\r\n        react_1.default.createElement(\"svg\", { xmlns: \"http://www.w3.org/2000/svg\", width: \"15\", height: \"15\", viewBox: \"0 0 15 15\", fill: \"none\" },\r\n            react_1.default.createElement(\"path\", { d: \"M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z\", fill: \"#C4C4C4\" })),\r\n        react_1.default.createElement(\"span\", { className: commentsbutton_scss_1.default.commentsNumber }, num_comments)));\r\n}\r\nexports.CommentsButton = CommentsButton;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Controls/CommentsButton/CommentsButton.tsx?");

/***/ }),

/***/ "./src/shared/CardList/Card/Controls/CommentsButton/commentsbutton.scss":
/*!******************************************************************************!*\
  !*** ./src/shared/CardList/Card/Controls/CommentsButton/commentsbutton.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"commentsButton\": \"commentsbutton__commentsButton--1g156\",\n\t\"commentsNumber\": \"commentsbutton__commentsNumber--1ClmV\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Controls/CommentsButton/commentsbutton.scss?");

/***/ }),

/***/ "./src/shared/CardList/Card/Controls/CommentsButton/index.ts":
/*!*******************************************************************!*\
  !*** ./src/shared/CardList/Card/Controls/CommentsButton/index.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nfunction __export(m) {\r\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__export(__webpack_require__(/*! ./CommentsButton */ \"./src/shared/CardList/Card/Controls/CommentsButton/CommentsButton.tsx\"));\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Controls/CommentsButton/index.ts?");

/***/ }),

/***/ "./src/shared/CardList/Card/Controls/Controls.tsx":
/*!********************************************************!*\
  !*** ./src/shared/CardList/Card/Controls/Controls.tsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst controls_scss_1 = __importDefault(__webpack_require__(/*! ./controls.scss */ \"./src/shared/CardList/Card/Controls/controls.scss\"));\r\nfunction Controls({ className = 'controls', children }) {\r\n    return (react_1.default.createElement(\"div\", { className: controls_scss_1.default[className] }, children));\r\n}\r\nexports.Controls = Controls;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Controls/Controls.tsx?");

/***/ }),

/***/ "./src/shared/CardList/Card/Controls/KarmaCounter/KarmaCounter.tsx":
/*!*************************************************************************!*\
  !*** ./src/shared/CardList/Card/Controls/KarmaCounter/KarmaCounter.tsx ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst karmacounter_scss_1 = __importDefault(__webpack_require__(/*! ./karmacounter.scss */ \"./src/shared/CardList/Card/Controls/KarmaCounter/karmacounter.scss\"));\r\nfunction KarmaCounter({ score }) {\r\n    return (react_1.default.createElement(\"div\", { className: karmacounter_scss_1.default.karmaCounter },\r\n        react_1.default.createElement(\"button\", { className: karmacounter_scss_1.default.up },\r\n            react_1.default.createElement(\"svg\", { xmlns: \"http://www.w3.org/2000/svg\", width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\" },\r\n                react_1.default.createElement(\"path\", { d: \"M9.5 0L0 10H19L9.5 0Z\", fill: \"#C4C4C4\" }))),\r\n        react_1.default.createElement(\"span\", { className: karmacounter_scss_1.default.karmaValue }, score),\r\n        react_1.default.createElement(\"button\", { className: karmacounter_scss_1.default.down },\r\n            react_1.default.createElement(\"svg\", { className: karmacounter_scss_1.default.down, xmlns: \"http://www.w3.org/2000/svg\", width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\" },\r\n                react_1.default.createElement(\"path\", { d: \"M9.5 0L0 10H19L9.5 0Z\", fill: \"#C4C4C4\" })))));\r\n}\r\nexports.KarmaCounter = KarmaCounter;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Controls/KarmaCounter/KarmaCounter.tsx?");

/***/ }),

/***/ "./src/shared/CardList/Card/Controls/KarmaCounter/index.ts":
/*!*****************************************************************!*\
  !*** ./src/shared/CardList/Card/Controls/KarmaCounter/index.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nfunction __export(m) {\r\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__export(__webpack_require__(/*! ./KarmaCounter */ \"./src/shared/CardList/Card/Controls/KarmaCounter/KarmaCounter.tsx\"));\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Controls/KarmaCounter/index.ts?");

/***/ }),

/***/ "./src/shared/CardList/Card/Controls/KarmaCounter/karmacounter.scss":
/*!**************************************************************************!*\
  !*** ./src/shared/CardList/Card/Controls/KarmaCounter/karmacounter.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"karmaCounter\": \"karmacounter__karmaCounter--C3LEv\",\n\t\"down\": \"karmacounter__down--jOmVn\",\n\t\"karmaValue\": \"karmacounter__karmaValue--2SpQL\",\n\t\"up\": \"karmacounter__up--OZkNa\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Controls/KarmaCounter/karmacounter.scss?");

/***/ }),

/***/ "./src/shared/CardList/Card/Controls/controls.scss":
/*!*********************************************************!*\
  !*** ./src/shared/CardList/Card/Controls/controls.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"controls\": \"controls__controls--2oCbL\",\n\t\"controls-modal\": \"controls__controls-modal--2WUcs\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Controls/controls.scss?");

/***/ }),

/***/ "./src/shared/CardList/Card/Controls/index.ts":
/*!****************************************************!*\
  !*** ./src/shared/CardList/Card/Controls/index.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nfunction __export(m) {\r\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__export(__webpack_require__(/*! ./Controls */ \"./src/shared/CardList/Card/Controls/Controls.tsx\"));\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Controls/index.ts?");

/***/ }),

/***/ "./src/shared/CardList/Card/Menu/Menu.tsx":
/*!************************************************!*\
  !*** ./src/shared/CardList/Card/Menu/Menu.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst Dropdown_1 = __webpack_require__(/*! ../../../Dropdown */ \"./src/shared/Dropdown/index.ts\");\r\nconst menu_scss_1 = __importDefault(__webpack_require__(/*! ./menu.scss */ \"./src/shared/CardList/Card/Menu/menu.scss\"));\r\nconst MenuIcon_1 = __webpack_require__(/*! ../../../Icons/MenuIcon */ \"./src/shared/Icons/MenuIcon.tsx\");\r\nconst MenuItemsList_1 = __webpack_require__(/*! ./MenuItemsList */ \"./src/shared/CardList/Card/Menu/MenuItemsList/index.ts\");\r\nconst Text_1 = __webpack_require__(/*! ../../../Text/Text */ \"./src/shared/Text/Text.tsx\");\r\nfunction Menu() {\r\n    const [isDropdownOpen, setIsDropdownOpen] = react_1.default.useState(false);\r\n    return (react_1.default.createElement(\"div\", { className: menu_scss_1.default.menu },\r\n        react_1.default.createElement(Dropdown_1.Dropdown, { button: react_1.default.createElement(\"button\", { className: menu_scss_1.default.menuButton },\r\n                react_1.default.createElement(MenuIcon_1.MenuIcon, null)) },\r\n            react_1.default.createElement(\"div\", { className: menu_scss_1.default.dropDown },\r\n                react_1.default.createElement(MenuItemsList_1.MenuItemsList, { postID: '1' }),\r\n                react_1.default.createElement(\"button\", { className: menu_scss_1.default.closeButton },\r\n                    react_1.default.createElement(Text_1.Text, { mobileSize: 12, size: 14, color: Text_1.EColors.gray66 }, \"\\u0417\\u0430\\u043A\\u0440\\u044B\\u0442\\u044C\"))))));\r\n}\r\nexports.Menu = Menu;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Menu/Menu.tsx?");

/***/ }),

/***/ "./src/shared/CardList/Card/Menu/MenuItemsList/MenuItemsList.tsx":
/*!***********************************************************************!*\
  !*** ./src/shared/CardList/Card/Menu/MenuItemsList/MenuItemsList.tsx ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst menuitemslist_scss_1 = __importDefault(__webpack_require__(/*! ./menuitemslist.scss */ \"./src/shared/CardList/Card/Menu/MenuItemsList/menuitemslist.scss\"));\r\nconst Text_1 = __webpack_require__(/*! ../../../../Text/Text */ \"./src/shared/Text/Text.tsx\");\r\nconst Icon_1 = __webpack_require__(/*! ../../../../Icons/Icon */ \"./src/shared/Icons/Icon/index.ts\");\r\nfunction MenuItemsList({ postID }) {\r\n    return (react_1.default.createElement(\"ul\", { className: menuitemslist_scss_1.default.menuItemsList },\r\n        react_1.default.createElement(\"li\", { onClick: () => console.log(postID), className: menuitemslist_scss_1.default.menuItemTablet },\r\n            react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.comment, size: 16 }),\r\n            react_1.default.createElement(Text_1.Text, { size: 12, color: Text_1.EColors.gray99 }, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0430\\u0440\\u0438\\u0438\")),\r\n        react_1.default.createElement(\"div\", { className: menuitemslist_scss_1.default.dividerTablet }),\r\n        react_1.default.createElement(\"li\", { onClick: () => console.log(postID), className: menuitemslist_scss_1.default.menuItemTablet },\r\n            react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.share, size: 16 }),\r\n            react_1.default.createElement(Text_1.Text, { size: 12, color: Text_1.EColors.gray99 }, \"\\u041F\\u043E\\u0434\\u0435\\u043B\\u0438\\u0442\\u044C\\u0441\\u044F\")),\r\n        react_1.default.createElement(\"div\", { className: menuitemslist_scss_1.default.dividerTablet }),\r\n        react_1.default.createElement(\"li\", { onClick: () => console.log(postID), className: menuitemslist_scss_1.default.menuItem },\r\n            react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.block, size: 16 }),\r\n            react_1.default.createElement(Text_1.Text, { size: 12, color: Text_1.EColors.gray99 }, \"\\u0421\\u043A\\u0440\\u044B\\u0442\\u044C\")),\r\n        react_1.default.createElement(\"div\", { className: menuitemslist_scss_1.default.divider }),\r\n        react_1.default.createElement(\"li\", { className: menuitemslist_scss_1.default.menuItemTablet },\r\n            react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.save, size: 16 }),\r\n            react_1.default.createElement(Text_1.Text, { size: 12, color: Text_1.EColors.gray99 }, \"\\u0421\\u043E\\u0445\\u0440\\u043E\\u043D\\u0438\\u0442\\u044C\")),\r\n        react_1.default.createElement(\"div\", { className: menuitemslist_scss_1.default.dividerTablet }),\r\n        react_1.default.createElement(\"li\", { className: menuitemslist_scss_1.default.menuItem },\r\n            react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.warning, size: 16 }),\r\n            react_1.default.createElement(Text_1.Text, { size: 12, color: Text_1.EColors.gray99 }, \"\\u041F\\u043E\\u0436\\u0430\\u043B\\u043E\\u0432\\u0430\\u0442\\u044C\\u0441\\u044F\"))));\r\n}\r\nexports.MenuItemsList = MenuItemsList;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Menu/MenuItemsList/MenuItemsList.tsx?");

/***/ }),

/***/ "./src/shared/CardList/Card/Menu/MenuItemsList/index.ts":
/*!**************************************************************!*\
  !*** ./src/shared/CardList/Card/Menu/MenuItemsList/index.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nfunction __export(m) {\r\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__export(__webpack_require__(/*! ./MenuItemsList */ \"./src/shared/CardList/Card/Menu/MenuItemsList/MenuItemsList.tsx\"));\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Menu/MenuItemsList/index.ts?");

/***/ }),

/***/ "./src/shared/CardList/Card/Menu/MenuItemsList/menuitemslist.scss":
/*!************************************************************************!*\
  !*** ./src/shared/CardList/Card/Menu/MenuItemsList/menuitemslist.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"menuItemsList\": \"menuitemslist__menuItemsList--2xuAE\",\n\t\"menuItem\": \"menuitemslist__menuItem--2Vr82\",\n\t\"menuItemTablet\": \"menuitemslist__menuItemTablet--m8-EA\",\n\t\"divider\": \"menuitemslist__divider--vvAHf\",\n\t\"dividerTablet\": \"menuitemslist__dividerTablet--1H8o1\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Menu/MenuItemsList/menuitemslist.scss?");

/***/ }),

/***/ "./src/shared/CardList/Card/Menu/index.ts":
/*!************************************************!*\
  !*** ./src/shared/CardList/Card/Menu/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nfunction __export(m) {\r\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__export(__webpack_require__(/*! ./Menu */ \"./src/shared/CardList/Card/Menu/Menu.tsx\"));\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Menu/index.ts?");

/***/ }),

/***/ "./src/shared/CardList/Card/Menu/menu.scss":
/*!*************************************************!*\
  !*** ./src/shared/CardList/Card/Menu/menu.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"menu\": \"menu__menu--3ALMa\",\n\t\"closeButton\": \"menu__closeButton--3cfWS\",\n\t\"menuButton\": \"menu__menuButton--1o5uL\",\n\t\"dropDown\": \"menu__dropDown--33ilJ\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Menu/menu.scss?");

/***/ }),

/***/ "./src/shared/CardList/Card/Preview/Preview.tsx":
/*!******************************************************!*\
  !*** ./src/shared/CardList/Card/Preview/Preview.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst preview_scss_1 = __importDefault(__webpack_require__(/*! ./preview.scss */ \"./src/shared/CardList/Card/Preview/preview.scss\"));\r\nfunction Preview(props) {\r\n    const { thumbnail, className = 'preview' } = props;\r\n    if (!(thumbnail.endsWith('.jpg'))) {\r\n        return null;\r\n    }\r\n    return (react_1.default.createElement(\"div\", { className: preview_scss_1.default[className] },\r\n        react_1.default.createElement(\"img\", { className: preview_scss_1.default.previewImg, src: thumbnail })));\r\n}\r\nexports.Preview = Preview;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Preview/Preview.tsx?");

/***/ }),

/***/ "./src/shared/CardList/Card/Preview/index.ts":
/*!***************************************************!*\
  !*** ./src/shared/CardList/Card/Preview/index.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nfunction __export(m) {\r\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__export(__webpack_require__(/*! ./Preview */ \"./src/shared/CardList/Card/Preview/Preview.tsx\"));\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Preview/index.ts?");

/***/ }),

/***/ "./src/shared/CardList/Card/Preview/preview.scss":
/*!*******************************************************!*\
  !*** ./src/shared/CardList/Card/Preview/preview.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"preview\": \"preview__preview--3v8sd\",\n\t\"previewImg\": \"preview__previewImg--1EsgH\",\n\t\"preview-modal\": \"preview__preview-modal--10a9Z\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Preview/preview.scss?");

/***/ }),

/***/ "./src/shared/CardList/Card/TextContent/TextContent.tsx":
/*!**************************************************************!*\
  !*** ./src/shared/CardList/Card/TextContent/TextContent.tsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst textcontent_scss_1 = __importDefault(__webpack_require__(/*! ./textcontent.scss */ \"./src/shared/CardList/Card/TextContent/textcontent.scss\"));\r\nfunction TextContent(props) {\r\n    const { username, date, children, className = 'textContent' } = props;\r\n    return (react_1.default.createElement(\"div\", { className: textcontent_scss_1.default[className] },\r\n        react_1.default.createElement(\"div\", { className: textcontent_scss_1.default.metaData },\r\n            react_1.default.createElement(\"div\", { className: textcontent_scss_1.default.userLink },\r\n                react_1.default.createElement(\"img\", { className: textcontent_scss_1.default.avatar, src: \"https://i.redd.it/snk96iikvra51.png\", alt: \"avatar\" }),\r\n                react_1.default.createElement(\"a\", { href: \"#user-url\", className: textcontent_scss_1.default.username }, username)),\r\n            react_1.default.createElement(\"span\", { className: textcontent_scss_1.default.createdAt },\r\n                react_1.default.createElement(\"span\", { className: textcontent_scss_1.default.publishedLabel }, \"\\u041E\\u043F\\u0443\\u0431\\u043B\\u0438\\u043A\\u043E\\u0432\\u0430\\u043D\\u043E\"),\r\n                \" \",\r\n                date)),\r\n        children));\r\n}\r\nexports.TextContent = TextContent;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/TextContent/TextContent.tsx?");

/***/ }),

/***/ "./src/shared/CardList/Card/TextContent/Title/Title.tsx":
/*!**************************************************************!*\
  !*** ./src/shared/CardList/Card/TextContent/Title/Title.tsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst title_scss_1 = __importDefault(__webpack_require__(/*! ./title.scss */ \"./src/shared/CardList/Card/TextContent/Title/title.scss\"));\r\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nfunction Title(props) {\r\n    const { title, id } = props;\r\n    return (react_1.default.createElement(\"h2\", { className: title_scss_1.default.title },\r\n        react_1.default.createElement(react_router_dom_1.Link, { to: `/posts/${id}`, className: title_scss_1.default.postLink }, title)));\r\n}\r\nexports.Title = Title;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/TextContent/Title/Title.tsx?");

/***/ }),

/***/ "./src/shared/CardList/Card/TextContent/Title/index.ts":
/*!*************************************************************!*\
  !*** ./src/shared/CardList/Card/TextContent/Title/index.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nfunction __export(m) {\r\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__export(__webpack_require__(/*! ./Title */ \"./src/shared/CardList/Card/TextContent/Title/Title.tsx\"));\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/TextContent/Title/index.ts?");

/***/ }),

/***/ "./src/shared/CardList/Card/TextContent/Title/title.scss":
/*!***************************************************************!*\
  !*** ./src/shared/CardList/Card/TextContent/Title/title.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"title\": \"title__title--3tBeX\",\n\t\"postLink\": \"title__postLink--3myAd\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/TextContent/Title/title.scss?");

/***/ }),

/***/ "./src/shared/CardList/Card/TextContent/index.ts":
/*!*******************************************************!*\
  !*** ./src/shared/CardList/Card/TextContent/index.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nfunction __export(m) {\r\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__export(__webpack_require__(/*! ./TextContent */ \"./src/shared/CardList/Card/TextContent/TextContent.tsx\"));\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/TextContent/index.ts?");

/***/ }),

/***/ "./src/shared/CardList/Card/TextContent/textcontent.scss":
/*!***************************************************************!*\
  !*** ./src/shared/CardList/Card/TextContent/textcontent.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"textContent\": \"textcontent__textContent--36RnO\",\n\t\"publishedLabel\": \"textcontent__publishedLabel--3qyv9\",\n\t\"userLink\": \"textcontent__userLink--2DvdL\",\n\t\"avatar\": \"textcontent__avatar--39M_r\",\n\t\"createdAt\": \"textcontent__createdAt--2XYRb\",\n\t\"title\": \"textcontent__title--3n-Ks\",\n\t\"postLink\": \"textcontent__postLink--2czDE\",\n\t\"username\": \"textcontent__username--nWPj1\",\n\t\"metaData\": \"textcontent__metaData--3SRhz\",\n\t\"textContent-modal\": \"textcontent__textContent-modal--3Dz0h\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/TextContent/textcontent.scss?");

/***/ }),

/***/ "./src/shared/CardList/Card/card.scss":
/*!********************************************!*\
  !*** ./src/shared/CardList/Card/card.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"card\": \"card__card--6OfeO\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/card.scss?");

/***/ }),

/***/ "./src/shared/CardList/Card/index.ts":
/*!*******************************************!*\
  !*** ./src/shared/CardList/Card/index.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nfunction __export(m) {\r\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__export(__webpack_require__(/*! ./Card */ \"./src/shared/CardList/Card/Card.tsx\"));\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/index.ts?");

/***/ }),

/***/ "./src/shared/CardList/CardList.tsx":
/*!******************************************!*\
  !*** ./src/shared/CardList/CardList.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nconst Card_1 = __webpack_require__(/*! ./Card */ \"./src/shared/CardList/Card/index.ts\");\r\nconst cardlist_scss_1 = __importDefault(__webpack_require__(/*! ./cardlist.scss */ \"./src/shared/CardList/cardlist.scss\"));\r\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nconst actions_1 = __webpack_require__(/*! ../store/posts/actions */ \"./src/shared/store/posts/actions.ts\");\r\nconst generateRandomIndex_1 = __webpack_require__(/*! ../utils/React/generateRandomIndex */ \"./src/shared/utils/React/generateRandomIndex.ts\");\r\nfunction CardList() {\r\n    const bottomOfList = react_1.useRef(null);\r\n    const dispatch = react_redux_1.useDispatch();\r\n    const postsData = react_redux_1.useSelector(state => state.postsData.postsData);\r\n    const loading = react_redux_1.useSelector(state => state.postsData.loading);\r\n    const error = react_redux_1.useSelector(state => state.postsData.error);\r\n    react_1.useEffect(() => {\r\n        console.log('hello');\r\n        const observer = new IntersectionObserver(() => {\r\n            dispatch(actions_1.postsRequestAsync());\r\n        });\r\n        if (bottomOfList.current) {\r\n            observer.observe(bottomOfList.current);\r\n        }\r\n        return () => {\r\n            if (bottomOfList.current) {\r\n                observer.unobserve(bottomOfList.current);\r\n            }\r\n        };\r\n    }, [bottomOfList.current]);\r\n    return (react_1.default.createElement(\"ul\", { className: cardlist_scss_1.default.cardList },\r\n        postsData.length === 0 && !loading && !error && (react_1.default.createElement(\"div\", { className: cardlist_scss_1.default.status }, \"\\u041D\\u0435\\u0442 \\u043D\\u0438 \\u043E\\u0434\\u043D\\u043E\\u0433\\u043E \\u043F\\u043E\\u0441\\u0442\\u0430\")),\r\n        postsData.map((item) => (react_1.default.createElement(Card_1.Card, { key: generateRandomIndex_1.generateRandomString(), id: item.id, username: item.username, title: item.title, score: item.score, num_comments: item.num_comments, thumbnail: item.thumbnail, created: item.created }))),\r\n        react_1.default.createElement(\"div\", { ref: bottomOfList }),\r\n        loading && (react_1.default.createElement(\"div\", { className: cardlist_scss_1.default.status }, \"\\u0417\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0430...\")),\r\n        error && (react_1.default.createElement(\"div\", { className: cardlist_scss_1.default.status }, error))));\r\n}\r\nexports.CardList = CardList;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/CardList.tsx?");

/***/ }),

/***/ "./src/shared/CardList/cardlist.scss":
/*!*******************************************!*\
  !*** ./src/shared/CardList/cardlist.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"cardList\": \"cardlist__cardList--2WH4h\",\n\t\"status\": \"cardlist__status--2_czr\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardList/cardlist.scss?");

/***/ }),

/***/ "./src/shared/CardList/index.ts":
/*!**************************************!*\
  !*** ./src/shared/CardList/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nfunction __export(m) {\r\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__export(__webpack_require__(/*! ./CardList */ \"./src/shared/CardList/CardList.tsx\"));\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/index.ts?");

/***/ }),

/***/ "./src/shared/Content/Content.tsx":
/*!****************************************!*\
  !*** ./src/shared/Content/Content.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst content_scss_1 = __importDefault(__webpack_require__(/*! ./content.scss */ \"./src/shared/Content/content.scss\"));\r\nfunction Content({ children }) {\r\n    return (react_1.default.createElement(\"main\", { className: content_scss_1.default.content }, children));\r\n}\r\nexports.Content = Content;\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/Content.tsx?");

/***/ }),

/***/ "./src/shared/Content/content.scss":
/*!*****************************************!*\
  !*** ./src/shared/Content/content.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"content\": \"content__content--61-H9\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/content.scss?");

/***/ }),

/***/ "./src/shared/Content/index.ts":
/*!*************************************!*\
  !*** ./src/shared/Content/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nfunction __export(m) {\r\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__export(__webpack_require__(/*! ./Content */ \"./src/shared/Content/Content.tsx\"));\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/index.ts?");

/***/ }),

/***/ "./src/shared/Dropdown/Dropdown.tsx":
/*!******************************************!*\
  !*** ./src/shared/Dropdown/Dropdown.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst dropdown_scss_1 = __importDefault(__webpack_require__(/*! ./dropdown.scss */ \"./src/shared/Dropdown/dropdown.scss\"));\r\nconst NOOP = () => { };\r\nfunction Dropdown({ button, children, isOpen = false, onOpen = NOOP, onClose = NOOP }) {\r\n    const [isDropdownOpen, setIsDropdownOpen] = react_1.default.useState(isOpen);\r\n    react_1.default.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);\r\n    react_1.default.useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen]);\r\n    return (react_1.default.createElement(\"div\", { className: dropdown_scss_1.default.container },\r\n        react_1.default.createElement(\"div\", { onClick: () => setIsDropdownOpen(!isDropdownOpen) }, button),\r\n        isDropdownOpen && (react_1.default.createElement(\"div\", { className: dropdown_scss_1.default.listContainer },\r\n            react_1.default.createElement(\"div\", { className: dropdown_scss_1.default.list, onClick: () => setIsDropdownOpen(false) }, children)))));\r\n}\r\nexports.Dropdown = Dropdown;\r\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/Dropdown.tsx?");

/***/ }),

/***/ "./src/shared/Dropdown/dropdown.scss":
/*!*******************************************!*\
  !*** ./src/shared/Dropdown/dropdown.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"dropdown__container--o1mMR\",\n\t\"listContainer\": \"dropdown__listContainer--3nCwY\",\n\t\"list\": \"dropdown__list--1nfRv\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/dropdown.scss?");

/***/ }),

/***/ "./src/shared/Dropdown/index.ts":
/*!**************************************!*\
  !*** ./src/shared/Dropdown/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nfunction __export(m) {\r\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__export(__webpack_require__(/*! ./Dropdown */ \"./src/shared/Dropdown/Dropdown.tsx\"));\r\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/index.ts?");

/***/ }),

/***/ "./src/shared/Header/Header.tsx":
/*!**************************************!*\
  !*** ./src/shared/Header/Header.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst header_scss_1 = __importDefault(__webpack_require__(/*! ./header.scss */ \"./src/shared/Header/header.scss\"));\r\nconst SearchBlock_1 = __webpack_require__(/*! ./SearchBlock */ \"./src/shared/Header/SearchBlock/index.ts\");\r\nconst SortBlock_1 = __webpack_require__(/*! ./SortBlock */ \"./src/shared/Header/SortBlock/index.ts\");\r\nconst ThreadTitle_1 = __webpack_require__(/*! ./ThreadTitle */ \"./src/shared/Header/ThreadTitle/index.ts\");\r\nfunction Header() {\r\n    return (react_1.default.createElement(\"header\", { className: header_scss_1.default.header },\r\n        react_1.default.createElement(SearchBlock_1.SearchBlock, null),\r\n        react_1.default.createElement(ThreadTitle_1.ThreadTitle, null),\r\n        react_1.default.createElement(SortBlock_1.SortBlock, null)));\r\n}\r\nexports.Header = Header;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/SearchBlock.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/SearchBlock.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst searchblock_scss_1 = __importDefault(__webpack_require__(/*! ./searchblock.scss */ \"./src/shared/Header/SearchBlock/searchblock.scss\"));\r\nconst UserBlock_1 = __webpack_require__(/*! ./UserBlock */ \"./src/shared/Header/SearchBlock/UserBlock/index.ts\");\r\nconst useUserData_1 = __webpack_require__(/*! ../../../hooks/useUserData */ \"./src/hooks/useUserData.ts\");\r\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nfunction SearchBlock() {\r\n    useUserData_1.useUserData();\r\n    const { iconImg, name } = react_redux_1.useSelector(state => state.me.data);\r\n    const loading = react_redux_1.useSelector(state => state.me.loading);\r\n    return (react_1.default.createElement(\"div\", { className: searchblock_scss_1.default.searchBlock },\r\n        react_1.default.createElement(UserBlock_1.UserBlock, { avatarSrc: iconImg, userName: name, loading: loading })));\r\n}\r\nexports.SearchBlock = SearchBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/SearchBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst Break_1 = __webpack_require__(/*! ../../../Break */ \"./src/shared/Break/index.ts\");\r\nconst Text_1 = __webpack_require__(/*! ../../../Text/Text */ \"./src/shared/Text/Text.tsx\");\r\nconst IconAnon_1 = __webpack_require__(/*! ../../../Icons/Icon/IconAnon */ \"./src/shared/Icons/Icon/IconAnon.tsx\");\r\nconst userblock_scss_1 = __importDefault(__webpack_require__(/*! ./userblock.scss */ \"./src/shared/Header/SearchBlock/UserBlock/userblock.scss\"));\r\nfunction UserBlock({ avatarSrc, userName, loading }) {\r\n    return (react_1.default.createElement(\"a\", { href: \"https://www.reddit.com/api/v1/authorize?client_id=wPuZkCZI9S4RJ87ZKWwc0w&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity\", className: userblock_scss_1.default.userBox },\r\n        react_1.default.createElement(\"div\", { className: userblock_scss_1.default.avatarBox }, avatarSrc\r\n            ? react_1.default.createElement(\"img\", { src: avatarSrc, alt: \"user avatar\", className: userblock_scss_1.default.avatarImage })\r\n            : react_1.default.createElement(IconAnon_1.IconAnon, null)),\r\n        react_1.default.createElement(\"div\", { className: userblock_scss_1.default.username },\r\n            react_1.default.createElement(Break_1.Break, { size: 12 }),\r\n            loading ? (react_1.default.createElement(Text_1.Text, { size: 20, color: userName ? Text_1.EColors.black : Text_1.EColors.gray99 }, \"\\u0417\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0430...\")) : (react_1.default.createElement(Text_1.Text, { size: 20, color: userName ? Text_1.EColors.black : Text_1.EColors.gray99 }, userName || 'Аноним')))));\r\n}\r\nexports.UserBlock = UserBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/index.ts":
/*!**********************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/index.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nfunction __export(m) {\r\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__export(__webpack_require__(/*! ./UserBlock */ \"./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx\"));\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/userblock.scss":
/*!****************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/userblock.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"userBox\": \"userblock__userBox--1fubG\",\n\t\"avatarBox\": \"userblock__avatarBox--zfE9Z\",\n\t\"avatarImage\": \"userblock__avatarImage--CXX_4\",\n\t\"username\": \"userblock__username--8sDRn\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/userblock.scss?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/index.ts":
/*!************************************************!*\
  !*** ./src/shared/Header/SearchBlock/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nfunction __export(m) {\r\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__export(__webpack_require__(/*! ./SearchBlock */ \"./src/shared/Header/SearchBlock/SearchBlock.tsx\"));\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/searchblock.scss":
/*!********************************************************!*\
  !*** ./src/shared/Header/SearchBlock/searchblock.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"searchBlock\": \"searchblock__searchBlock--3Rcx1\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/searchblock.scss?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/List.tsx":
/*!**********************************************!*\
  !*** ./src/shared/Header/SortBlock/List.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nconst withKey_1 = __webpack_require__(/*! ../../utils/React/withKey */ \"./src/shared/utils/React/withKey.tsx\");\r\nconst sortblock_scss_1 = __importDefault(__webpack_require__(/*! ./sortblock.scss */ \"./src/shared/Header/SortBlock/sortblock.scss\"));\r\nfunction Feed(props) {\r\n    return (React.createElement(\"ul\", { className: sortblock_scss_1.default.dropList }, props.blocks.map(withKey_1.withIdKey(Block))));\r\n}\r\nexports.Feed = Feed;\r\nfunction Block(props) {\r\n    return (React.createElement(\"li\", { className: sortblock_scss_1.default[props.class], onClick: () => props.onClick(props.id) }, props.title));\r\n}\r\nexports.Block = Block;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/List.tsx?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/SortBlock.tsx":
/*!***************************************************!*\
  !*** ./src/shared/Header/SortBlock/SortBlock.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst Dropdown_1 = __webpack_require__(/*! ../../Dropdown */ \"./src/shared/Dropdown/index.ts\");\r\nconst List_1 = __webpack_require__(/*! ./List */ \"./src/shared/Header/SortBlock/List.tsx\");\r\nconst generateRandomIndex_1 = __webpack_require__(/*! ../../utils/React/generateRandomIndex */ \"./src/shared/utils/React/generateRandomIndex.ts\");\r\nconst sortblock_scss_1 = __importDefault(__webpack_require__(/*! ./sortblock.scss */ \"./src/shared/Header/SortBlock/sortblock.scss\"));\r\nconst merge_1 = __webpack_require__(/*! ../../utils/js/merge */ \"./src/shared/utils/js/merge.ts\");\r\nlet LIST = [\r\n    { title: 'Everywhere', class: 'dropItem' },\r\n    { title: 'United Kingdom', class: 'dropItem' },\r\n    { title: 'United States', class: 'dropItem' },\r\n    { title: 'Argentina', class: 'dropItem' },\r\n    { title: 'Australia', class: 'dropItem' },\r\n    { title: 'Canada', class: 'dropItem' },\r\n    { title: 'Japan', class: 'dropItem' },\r\n    { title: 'Colombia', class: 'dropItem' },\r\n    { title: 'Brazilia', class: 'dropItem' },\r\n    { title: 'Finland', class: 'dropItem' },\r\n].map(generateRandomIndex_1.generateId);\r\nfunction SortBlock() {\r\n    const [mainButton, setMainButton] = react_1.default.useState('Everywhere');\r\n    const handleClick = (id) => {\r\n        const newList = LIST.filter((item) => item.id == id);\r\n        const [newItem] = newList;\r\n        setMainButton(newItem.title);\r\n    };\r\n    return (react_1.default.createElement(Dropdown_1.Dropdown, { button: react_1.default.createElement(\"button\", { className: sortblock_scss_1.default.sortBlock }, mainButton) },\r\n        react_1.default.createElement(List_1.Feed, { blocks: LIST.map(merge_1.merge({ onClick: handleClick })) })));\r\n}\r\nexports.SortBlock = SortBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/SortBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/index.ts":
/*!**********************************************!*\
  !*** ./src/shared/Header/SortBlock/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nfunction __export(m) {\r\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__export(__webpack_require__(/*! ./SortBlock */ \"./src/shared/Header/SortBlock/SortBlock.tsx\"));\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/sortblock.scss":
/*!****************************************************!*\
  !*** ./src/shared/Header/SortBlock/sortblock.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"sortBlock\": \"sortblock__sortBlock--1otXh\",\n\t\"dropList\": \"sortblock__dropList--kyols\",\n\t\"dropItem\": \"sortblock__dropItem--OVHQy\",\n\t\"icon-premium\": \"sortblock__icon-premium--hx64k\",\n\t\"icon-powerup\": \"sortblock__icon-powerup--3zIzF\",\n\t\"icon-help\": \"sortblock__icon-help--2dyGx\",\n\t\"list\": \"sortblock__list--3KJrQ\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/sortblock.scss?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/ThreadTitle.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/ThreadTitle.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst threadtitle_scss_1 = __importDefault(__webpack_require__(/*! ./threadtitle.scss */ \"./src/shared/Header/ThreadTitle/threadtitle.scss\"));\r\nfunction ThreadTitle() {\r\n    return (react_1.default.createElement(\"h1\", { className: threadtitle_scss_1.default.threadTitle }, \"Reddit\"));\r\n}\r\nexports.ThreadTitle = ThreadTitle;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/ThreadTitle.tsx?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/index.ts":
/*!************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nfunction __export(m) {\r\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__export(__webpack_require__(/*! ./ThreadTitle */ \"./src/shared/Header/ThreadTitle/ThreadTitle.tsx\"));\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/index.ts?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/threadtitle.scss":
/*!********************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/threadtitle.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"threadTitle\": \"threadtitle__threadTitle--1fvoP\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/threadtitle.scss?");

/***/ }),

/***/ "./src/shared/Header/header.scss":
/*!***************************************!*\
  !*** ./src/shared/Header/header.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"header\": \"header__header--4oGEs\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/header.scss?");

/***/ }),

/***/ "./src/shared/Header/index.ts":
/*!************************************!*\
  !*** ./src/shared/Header/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nfunction __export(m) {\r\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__export(__webpack_require__(/*! ./Header */ \"./src/shared/Header/Header.tsx\"));\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/index.ts?");

/***/ }),

/***/ "./src/shared/Icons/Icon/Icon.tsx":
/*!****************************************!*\
  !*** ./src/shared/Icons/Icon/Icon.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst icon_scss_1 = __importDefault(__webpack_require__(/*! ./icon.scss */ \"./src/shared/Icons/Icon/icon.scss\"));\r\nvar EIcons;\r\n(function (EIcons) {\r\n    EIcons[\"menu\"] = \"menu\";\r\n    EIcons[\"warning\"] = \"warning\";\r\n    EIcons[\"block\"] = \"block\";\r\n    EIcons[\"comment\"] = \"comment\";\r\n    EIcons[\"share\"] = \"share\";\r\n    EIcons[\"save\"] = \"save\";\r\n})(EIcons = exports.EIcons || (exports.EIcons = {}));\r\nfunction Icon(props) {\r\n    const { name, size } = props;\r\n    const classes = classnames_1.default(icon_scss_1.default[`s${size}`]);\r\n    const setIcon = () => {\r\n        switch (name) {\r\n            default:\r\n                return react_1.default.createElement(\"svg\", { className: classes, xmlns: \"http://www.w3.org/2000/svg\", width: \"12\", height: \"12\", viewBox: \"0 0 12 12\", fill: \"none\" },\r\n                    react_1.default.createElement(\"path\", { d: \"M6 0C2.688 0 0 2.688 0 6C0 9.312 2.688 12 6 12C9.312 12 12 9.312 12 6C12 2.688 9.312 0 6 0ZM6 10.8C3.348 10.8 1.2 8.652 1.2 6C1.2 4.89 1.578 3.87 2.214 3.06L8.94 9.786C8.13 10.422 7.11 10.8 6 10.8ZM9.786 8.94L3.06 2.214C3.87 1.578 4.89 1.2 6 1.2C8.652 1.2 10.8 3.348 10.8 6C10.8 7.11 10.422 8.13 9.786 8.94Z\", fill: \"#999999\" }));\r\n            case `block`:\r\n                return react_1.default.createElement(\"svg\", { className: classes, xmlns: \"http://www.w3.org/2000/svg\", width: \"12\", height: \"12\", viewBox: \"0 0 12 12\", fill: \"none\" },\r\n                    react_1.default.createElement(\"path\", { d: \"M6 0C2.688 0 0 2.688 0 6C0 9.312 2.688 12 6 12C9.312 12 12 9.312 12 6C12 2.688 9.312 0 6 0ZM6 10.8C3.348 10.8 1.2 8.652 1.2 6C1.2 4.89 1.578 3.87 2.214 3.06L8.94 9.786C8.13 10.422 7.11 10.8 6 10.8ZM9.786 8.94L3.06 2.214C3.87 1.578 4.89 1.2 6 1.2C8.652 1.2 10.8 3.348 10.8 6C10.8 7.11 10.422 8.13 9.786 8.94Z\", fill: \"#999999\" }));\r\n            case 'warning':\r\n                return react_1.default.createElement(\"svg\", { className: classes, xmlns: \"http://www.w3.org/2000/svg\", width: \"14\", height: \"12\", viewBox: \"0 0 14 12\", fill: \"none\" },\r\n                    react_1.default.createElement(\"path\", { d: \"M0 12H14L7 0L0 12ZM7.63636 10.1053H6.36364V8.8421H7.63636V10.1053ZM7.63636 7.57895H6.36364V5.05263H7.63636V7.57895Z\", fill: \"#999999\" }));\r\n            case 'comment':\r\n                return react_1.default.createElement(\"svg\", { className: classes, xmlns: \"http://www.w3.org/2000/svg\", width: \"15\", height: \"15\", viewBox: \"0 0 15 15\", fill: \"none\" },\r\n                    react_1.default.createElement(\"path\", { d: \"M12.75 0.416626H1.41667C0.6375 0.416626 0 1.05413 0 1.83329V10.3333C0 11.1125 0.6375 11.75 1.41667 11.75H11.3333L14.1667 14.5833V1.83329C14.1667 1.05413 13.5292 0.416626 12.75 0.416626ZM11.3333 8.91663H2.83333V7.49996H11.3333V8.91663ZM11.3333 6.79163H2.83333V5.37496H11.3333V6.79163ZM11.3333 4.66663H2.83333V3.24996H11.3333V4.66663Z\", fill: \"#999999\" }));\r\n            case 'share':\r\n                return react_1.default.createElement(\"svg\", { className: classes, xmlns: \"http://www.w3.org/2000/svg\", width: \"12\", height: \"14\", viewBox: \"0 0 12 14\", fill: \"none\" },\r\n                    react_1.default.createElement(\"path\", { d: \"M10 9.89558C9.49333 9.89558 9.04 10.1064 8.69333 10.4367L3.94 7.52008C3.97333 7.35843 4 7.19679 4 7.02811C4 6.85944 3.97333 6.69779 3.94 6.53614L8.64 3.64759C9 3.999 9.47333 4.21687 10 4.21687C11.1067 4.21687 12 3.2751 12 2.10843C12 0.941767 11.1067 0 10 0C8.89333 0 8 0.941767 8 2.10843C8 2.27711 8.02667 2.43875 8.06 2.6004L3.36 5.48896C3 5.13755 2.52667 4.91968 2 4.91968C0.893333 4.91968 0 5.86145 0 7.02811C0 8.19478 0.893333 9.13655 2 9.13655C2.52667 9.13655 3 8.91867 3.36 8.56727L8.10667 11.491C8.07333 11.6386 8.05333 11.7932 8.05333 11.9478C8.05333 13.0793 8.92667 14 10 14C11.0733 14 11.9467 13.0793 11.9467 11.9478C11.9467 10.8163 11.0733 9.89558 10 9.89558Z\", fill: \"#999999\" }));\r\n            case 'save':\r\n                return react_1.default.createElement(\"svg\", { className: classes, xmlns: \"http://www.w3.org/2000/svg\", width: \"14\", height: \"14\", viewBox: \"0 0 14 14\", fill: \"none\" },\r\n                    react_1.default.createElement(\"path\", { d: \"M1.4 2.8H0V12.6C0 13.37 0.63 14 1.4 14H11.2V12.6H1.4V2.8ZM12.6 0H4.2C3.43 0 2.8 0.63 2.8 1.4V9.8C2.8 10.57 3.43 11.2 4.2 11.2H12.6C13.37 11.2 14 10.57 14 9.8V1.4C14 0.63 13.37 0 12.6 0ZM11.9 6.3H9.1V9.1H7.7V6.3H4.9V4.9H7.7V2.1H9.1V4.9H11.9V6.3Z\", fill: \"#979797\" }));\r\n        }\r\n    };\r\n    return (setIcon());\r\n}\r\nexports.Icon = Icon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/Icon/Icon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/Icon/IconAnon.tsx":
/*!********************************************!*\
  !*** ./src/shared/Icons/Icon/IconAnon.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction IconAnon() {\r\n    return (React.createElement(\"svg\", { xmlns: \"http://www.w3.org/2000/svg\", width: \"50\", height: \"50\", viewBox: \"0 0 50 50\", fill: \"none\" },\r\n        React.createElement(\"path\", { d: \"M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 7.5C29.15 7.5 32.5 10.85 32.5 15C32.5 19.15 29.15 22.5 25 22.5C20.85 22.5 17.5 19.15 17.5 15C17.5 10.85 20.85 7.5 25 7.5ZM25 43C18.75 43 13.225 39.8 10 34.95C10.075 29.975 20 27.25 25 27.25C29.975 27.25 39.925 29.975 40 34.95C36.775 39.8 31.25 43 25 43Z\", fill: \"#D9D9D9\" })));\r\n}\r\nexports.IconAnon = IconAnon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/Icon/IconAnon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/Icon/icon.scss":
/*!*****************************************!*\
  !*** ./src/shared/Icons/Icon/icon.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"s28\": \"icon__s28--2qQBw\",\n\t\"s20\": \"icon__s20--1D7eo\",\n\t\"s16\": \"icon__s16--36Wur\",\n\t\"s14\": \"icon__s14--13KUs\",\n\t\"s12\": \"icon__s12--2csRx\",\n\t\"s10\": \"icon__s10--1Q_Oh\",\n\t\"m28\": \"icon__m28--H9DuR\",\n\t\"m20\": \"icon__m20--2WB4j\",\n\t\"m16\": \"icon__m16--1MMC3\",\n\t\"m14\": \"icon__m14--BCoIV\",\n\t\"m12\": \"icon__m12--2RjzK\",\n\t\"m10\": \"icon__m10--3ZTRB\",\n\t\"t28\": \"icon__t28--3W9bI\",\n\t\"t20\": \"icon__t20--1-8Sj\",\n\t\"t16\": \"icon__t16--1Z9Hk\",\n\t\"t14\": \"icon__t14--TaoZd\",\n\t\"t12\": \"icon__t12--1CT0U\",\n\t\"t10\": \"icon__t10--34TMq\",\n\t\"d28\": \"icon__d28--CMfsA\",\n\t\"d20\": \"icon__d20--3LGSK\",\n\t\"d16\": \"icon__d16--235Yh\",\n\t\"d14\": \"icon__d14--2qICP\",\n\t\"d12\": \"icon__d12--Bj3ci\",\n\t\"d10\": \"icon__d10--1z4jL\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Icons/Icon/icon.scss?");

/***/ }),

/***/ "./src/shared/Icons/Icon/index.ts":
/*!****************************************!*\
  !*** ./src/shared/Icons/Icon/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nfunction __export(m) {\r\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__export(__webpack_require__(/*! ./Icon */ \"./src/shared/Icons/Icon/Icon.tsx\"));\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/Icon/index.ts?");

/***/ }),

/***/ "./src/shared/Icons/MenuIcon.tsx":
/*!***************************************!*\
  !*** ./src/shared/Icons/MenuIcon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction MenuIcon() {\r\n    return (React.createElement(\"svg\", { xmlns: \"http://www.w3.org/2000/svg\", width: \"20\", height: \"5\", viewBox: \"0 0 20 5\", fill: \"none\" },\r\n        React.createElement(\"circle\", { cx: \"17.5\", cy: \"2.5\", r: \"2.5\", transform: \"rotate(90 17.5 2.5)\", fill: \"#D9D9D9\" }),\r\n        React.createElement(\"circle\", { cx: \"10\", cy: \"2.5\", r: \"2.5\", transform: \"rotate(90 10 2.5)\", fill: \"#D9D9D9\" }),\r\n        React.createElement(\"circle\", { cx: \"2.5\", cy: \"2.5\", r: \"2.5\", transform: \"rotate(90 2.5 2.5)\", fill: \"#D9D9D9\" })));\r\n}\r\nexports.MenuIcon = MenuIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/MenuIcon.tsx?");

/***/ }),

/***/ "./src/shared/Layout/Layout.scss":
/*!***************************************!*\
  !*** ./src/shared/Layout/Layout.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"layout\": \"Layout__layout--2Fw78\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Layout.scss?");

/***/ }),

/***/ "./src/shared/Layout/Layout.tsx":
/*!**************************************!*\
  !*** ./src/shared/Layout/Layout.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst Layout_scss_1 = __importDefault(__webpack_require__(/*! ./Layout.scss */ \"./src/shared/Layout/Layout.scss\"));\r\nfunction Layout({ children }) {\r\n    return (react_1.default.createElement(\"div\", { className: Layout_scss_1.default.layout }, children));\r\n}\r\nexports.Layout = Layout;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Layout.tsx?");

/***/ }),

/***/ "./src/shared/Post/Form/Form.tsx":
/*!***************************************!*\
  !*** ./src/shared/Post/Form/Form.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst form_scss_1 = __importDefault(__webpack_require__(/*! ./form.scss */ \"./src/shared/Post/Form/form.scss\"));\r\nconst formik_1 = __webpack_require__(/*! formik */ \"formik\");\r\nconst Yup = __importStar(__webpack_require__(/*! yup */ \"yup\"));\r\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nfunction Form() {\r\n    const { name } = react_redux_1.useSelector(state => state.me.data);\r\n    const formik = formik_1.useFormik({\r\n        initialValues: {\r\n            text: \"\"\r\n        },\r\n        validationSchema: Yup.object({\r\n            text: Yup.string()\r\n                .max(50, \"Должно быть 50 символов или меньше\")\r\n                .required(\"Объязательна для заполнения\"),\r\n        }),\r\n        onSubmit: (e) => {\r\n            alert(e.text);\r\n        }\r\n    });\r\n    return (react_1.default.createElement(\"form\", { onSubmit: formik.handleSubmit },\r\n        react_1.default.createElement(\"textarea\", { name: \"text\", id: \"text\", className: form_scss_1.default.textarea, onChange: formik.handleChange, placeholder: `${name}, оставьте ваш комментарий`, onBlur: formik.handleBlur }),\r\n        react_1.default.createElement(\"div\", { className: form_scss_1.default.textarea_bottom },\r\n            react_1.default.createElement(\"div\", { className: form_scss_1.default.error }, formik.touched.text && formik.errors.text),\r\n            react_1.default.createElement(\"button\", { type: 'submit', className: form_scss_1.default.textarea_btn }, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\"))));\r\n}\r\nexports.Form = Form;\r\n\n\n//# sourceURL=webpack:///./src/shared/Post/Form/Form.tsx?");

/***/ }),

/***/ "./src/shared/Post/Form/form.scss":
/*!****************************************!*\
  !*** ./src/shared/Post/Form/form.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"textarea\": \"form__textarea--d5HYq\",\n\t\"textarea_btn\": \"form__textarea_btn---HQTh\",\n\t\"textarea_bottom\": \"form__textarea_bottom--3oJrm\",\n\t\"error\": \"form__error--30cRs\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Post/Form/form.scss?");

/***/ }),

/***/ "./src/shared/Post/Form/index.ts":
/*!***************************************!*\
  !*** ./src/shared/Post/Form/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nfunction __export(m) {\r\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__export(__webpack_require__(/*! ./Form */ \"./src/shared/Post/Form/Form.tsx\"));\r\n\n\n//# sourceURL=webpack:///./src/shared/Post/Form/index.ts?");

/***/ }),

/***/ "./src/shared/Post/Post.tsx":
/*!**********************************!*\
  !*** ./src/shared/Post/Post.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"react-dom\"));\r\nconst post_scss_1 = __importDefault(__webpack_require__(/*! ./post.scss */ \"./src/shared/Post/post.scss\"));\r\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nconst Title_1 = __webpack_require__(/*! ../CardList/Card/TextContent/Title */ \"./src/shared/CardList/Card/TextContent/Title/index.ts\");\r\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nconst Card_1 = __webpack_require__(/*! ../CardList/Card */ \"./src/shared/CardList/Card/index.ts\");\r\nconst TextContent_1 = __webpack_require__(/*! ../CardList/Card/TextContent/TextContent */ \"./src/shared/CardList/Card/TextContent/TextContent.tsx\");\r\nconst KarmaCounter_1 = __webpack_require__(/*! ../CardList/Card/Controls/KarmaCounter */ \"./src/shared/CardList/Card/Controls/KarmaCounter/index.ts\");\r\nconst Controls_1 = __webpack_require__(/*! ../CardList/Card/Controls */ \"./src/shared/CardList/Card/Controls/index.ts\");\r\nconst Preview_1 = __webpack_require__(/*! ../CardList/Card/Preview */ \"./src/shared/CardList/Card/Preview/index.ts\");\r\nconst Form_1 = __webpack_require__(/*! ./Form */ \"./src/shared/Post/Form/index.ts\");\r\nfunction Post() {\r\n    // ID\r\n    const { id } = react_router_dom_1.useParams();\r\n    // Close\r\n    const navigate = react_router_dom_1.useNavigate();\r\n    react_1.default.useEffect(() => {\r\n        function handleClick(event) {\r\n            var _a;\r\n            if (event.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {\r\n                navigate('/');\r\n            }\r\n        }\r\n        document.addEventListener('click', handleClick);\r\n        return () => { document.removeEventListener('click', handleClick); };\r\n    }, []);\r\n    const ref = react_1.default.useRef(null);\r\n    const node = document.querySelector('#modal_root');\r\n    if (!node)\r\n        return null;\r\n    // Header\r\n    const postsData = react_redux_1.useSelector(state => state.postsData.postsData);\r\n    const thisPostData = postsData.find((el) => el.id == id);\r\n    if (!thisPostData)\r\n        return react_1.default.createElement(\"div\", null);\r\n    return react_dom_1.default.createPortal((react_1.default.createElement(\"div\", { className: post_scss_1.default.container, ref: ref },\r\n        react_1.default.createElement(\"div\", { className: post_scss_1.default.modal },\r\n            react_1.default.createElement(\"div\", { className: post_scss_1.default.header },\r\n                react_1.default.createElement(Controls_1.Controls, { className: 'controls-modal' },\r\n                    react_1.default.createElement(KarmaCounter_1.KarmaCounter, { score: thisPostData.score })),\r\n                react_1.default.createElement(TextContent_1.TextContent, { username: thisPostData.username, date: Card_1.time(thisPostData.created), className: 'textContent-modal' },\r\n                    react_1.default.createElement(Title_1.Title, { title: thisPostData.title, id: id }))),\r\n            react_1.default.createElement(\"div\", { className: post_scss_1.default.content },\r\n                react_1.default.createElement(\"p\", { className: post_scss_1.default.selfText }, thisPostData.selftext),\r\n                react_1.default.createElement(Preview_1.Preview, { thumbnail: thisPostData.thumbnail, className: 'preview-modal' })),\r\n            react_1.default.createElement(Form_1.Form, null)))), node);\r\n}\r\nexports.Post = Post;\r\n\n\n//# sourceURL=webpack:///./src/shared/Post/Post.tsx?");

/***/ }),

/***/ "./src/shared/Post/post.scss":
/*!***********************************!*\
  !*** ./src/shared/Post/post.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"post__container--S9kFt\",\n\t\"modal\": \"post__modal--1s-Df\",\n\t\"title\": \"post__title--1icm3\",\n\t\"content\": \"post__content--2MRqO\",\n\t\"header\": \"post__header--2gazH\",\n\t\"selfText\": \"post__selfText--1FHr2\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Post/post.scss?");

/***/ }),

/***/ "./src/shared/Text/Text.tsx":
/*!**********************************!*\
  !*** ./src/shared/Text/Text.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst text_scss_1 = __importDefault(__webpack_require__(/*! ./text.scss */ \"./src/shared/Text/text.scss\"));\r\nconst classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nvar EColors;\r\n(function (EColors) {\r\n    EColors[\"black\"] = \"black\";\r\n    EColors[\"orange\"] = \"orange\";\r\n    EColors[\"green\"] = \"green\";\r\n    EColors[\"white\"] = \"white\";\r\n    EColors[\"grayF4\"] = \"grayF4\";\r\n    EColors[\"grayF3\"] = \"grayF3\";\r\n    EColors[\"grayD9\"] = \"grayD9\";\r\n    EColors[\"grayC4\"] = \"grayC4\";\r\n    EColors[\"gray99\"] = \"gray99\";\r\n    EColors[\"gray66\"] = \"gray66\";\r\n})(EColors = exports.EColors || (exports.EColors = {}));\r\nfunction Text(props) {\r\n    const { As = 'span', color = EColors.black, children, size, mobileSize, tabletSize, desktopSize } = props;\r\n    const classes = classnames_1.default(text_scss_1.default[`s${size}`], { [text_scss_1.default[`m${mobileSize}`]]: mobileSize }, { [text_scss_1.default[`t${tabletSize}`]]: tabletSize }, { [text_scss_1.default[`d${desktopSize}`]]: desktopSize }, text_scss_1.default[color]);\r\n    return (react_1.default.createElement(As, { className: classes }, children));\r\n}\r\nexports.Text = Text;\r\n\n\n//# sourceURL=webpack:///./src/shared/Text/Text.tsx?");

/***/ }),

/***/ "./src/shared/Text/text.scss":
/*!***********************************!*\
  !*** ./src/shared/Text/text.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"s28\": \"text__s28--NMm7b\",\n\t\"s20\": \"text__s20--1rvNx\",\n\t\"s16\": \"text__s16--hE9c4\",\n\t\"s14\": \"text__s14--3gJUG\",\n\t\"s12\": \"text__s12--33ZEp\",\n\t\"s10\": \"text__s10--cdfW2\",\n\t\"black\": \"text__black--2W7Vd\",\n\t\"orange\": \"text__orange--168U_\",\n\t\"green\": \"text__green--20DPX\",\n\t\"white\": \"text__white--3v6Pb\",\n\t\"greyF4\": \"text__greyF4--3M269\",\n\t\"greyF3\": \"text__greyF3--AU_5I\",\n\t\"greyD9\": \"text__greyD9--v9wD6\",\n\t\"greyC4\": \"text__greyC4--3f3uL\",\n\t\"grey99\": \"text__grey99--CH_Mt\",\n\t\"grey66\": \"text__grey66--3Sprr\",\n\t\"m28\": \"text__m28--2I4i7\",\n\t\"m20\": \"text__m20--1aNj1\",\n\t\"m16\": \"text__m16--1_b0d\",\n\t\"m14\": \"text__m14--35Y-X\",\n\t\"m12\": \"text__m12--oPjc_\",\n\t\"m10\": \"text__m10--1lq28\",\n\t\"t28\": \"text__t28--dEFgN\",\n\t\"t20\": \"text__t20--2OiUl\",\n\t\"t16\": \"text__t16--1mXaU\",\n\t\"t14\": \"text__t14---S9NA\",\n\t\"t12\": \"text__t12--1U2aL\",\n\t\"t10\": \"text__t10--1HUWH\",\n\t\"d28\": \"text__d28--3YkIr\",\n\t\"d20\": \"text__d20--1z4RJ\",\n\t\"d16\": \"text__d16--3A4IZ\",\n\t\"d14\": \"text__d14--3lkFJ\",\n\t\"d12\": \"text__d12--2dPIl\",\n\t\"d10\": \"text__d10--3M5vD\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Text/text.scss?");

/***/ }),

/***/ "./src/shared/main.global.scss":
/*!*************************************!*\
  !*** ./src/shared/main.global.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;700&family=Roboto:wght@400;500;700&display=swap);\"]);\n// Module\nexports.push([module.i, \"body {\\n  padding: 0;\\n  margin: 0;\\n  background-color: #f4f4f4;\\n  font-size: 14px;\\n  line-height: 16px;\\n  font-family: \\\"Roboto\\\", \\\"serif\\\";\\n}\\n\\n* {\\n  color: #333333;\\n  box-sizing: border-box;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n}\\n\\nul {\\n  padding: 0;\\n  margin: 0;\\n  list-style: none;\\n}\\n\\na {\\n  text-decoration: none;\\n}\\n\\nbutton {\\n  padding: 0;\\n  border: 0;\\n  background-color: transparent;\\n  cursor: pointer;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/shared/main.global.scss?");

/***/ }),

/***/ "./src/shared/store/me/actions.ts":
/*!****************************************!*\
  !*** ./src/shared/store/me/actions.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nexports.SAVING_ME = 'SAVING_ME';\r\nexports.meRequest = () => ({\r\n    type: exports.SAVING_ME,\r\n});\r\nexports.SAVING_ME_SUCCES = 'SAVING_ME_SUCCES';\r\nexports.meRequestSuccess = (data) => ({\r\n    type: exports.SAVING_ME_SUCCES,\r\n    data,\r\n});\r\nexports.SAVING_ME_ERROR = 'SAVING_ME_ERROR';\r\nexports.meRequestError = (error) => ({\r\n    type: exports.SAVING_ME_ERROR,\r\n    error,\r\n});\r\nexports.meRequestAsync = () => (dispatch, getState) => {\r\n    dispatch(exports.meRequest());\r\n    axios_1.default.get('https://oauth.reddit.com/api/v1/me', {\r\n        headers: { Authorization: `bearer ${getState().setToken.token}` }\r\n    })\r\n        .then((resp) => {\r\n        let userData = resp.data;\r\n        dispatch(exports.meRequestSuccess({ name: userData.name, iconImg: userData.icon_img }));\r\n    })\r\n        .catch((error) => {\r\n        console.log(error);\r\n        dispatch(exports.meRequestError(String(error)));\r\n    });\r\n};\r\n\n\n//# sourceURL=webpack:///./src/shared/store/me/actions.ts?");

/***/ }),

/***/ "./src/shared/store/me/reducer.ts":
/*!****************************************!*\
  !*** ./src/shared/store/me/reducer.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst actions_1 = __webpack_require__(/*! ./actions */ \"./src/shared/store/me/actions.ts\");\r\nexports.meReducer = (state, action) => {\r\n    switch (action.type) {\r\n        case actions_1.SAVING_ME:\r\n            return Object.assign(Object.assign({}, state), { loading: true });\r\n        default:\r\n            return state;\r\n        case actions_1.SAVING_ME_ERROR:\r\n            return Object.assign(Object.assign({}, state), { error: action.error, loading: false });\r\n        case actions_1.SAVING_ME_SUCCES:\r\n            return Object.assign(Object.assign({}, state), { data: action.data, loading: false });\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/shared/store/me/reducer.ts?");

/***/ }),

/***/ "./src/shared/store/posts/actions.ts":
/*!*******************************************!*\
  !*** ./src/shared/store/posts/actions.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nexports.SAVING_POSTS = 'SAVING_POSTS';\r\nexports.postsRequest = () => ({\r\n    type: exports.SAVING_POSTS,\r\n});\r\nexports.SAVING_POSTS_SUCCES = 'SAVING_POSTS_SUCCES';\r\nexports.postsRequestSuccess = (posts) => ({\r\n    type: exports.SAVING_POSTS_SUCCES,\r\n    posts,\r\n});\r\nexports.SAVING_POSTS_ERROR = 'SAVING_POSTS_ERROR';\r\nexports.postsRequestError = (error) => ({\r\n    type: exports.SAVING_POSTS_ERROR,\r\n    error,\r\n});\r\nexports.SAVING_AFTER = 'SAVING_AFTER';\r\nexports.afterRequest = () => ({\r\n    type: exports.SAVING_AFTER,\r\n});\r\nexports.SAVING_AFTER_SUCCES = 'SAVING_AFTER_SUCCES';\r\nexports.afterRequestSuccess = (after) => ({\r\n    type: exports.SAVING_AFTER_SUCCES,\r\n    after: after\r\n});\r\nexports.SAVING_AFTER_ERROR = 'SAVING_AFTER_ERROR';\r\nexports.afterRequestError = (error) => ({\r\n    type: exports.SAVING_AFTER_ERROR,\r\n    error,\r\n});\r\nexports.postsRequestAsync = () => (dispatch, getState) => {\r\n    dispatch(exports.postsRequest());\r\n    dispatch(exports.afterRequest());\r\n    axios_1.default.get('https://oauth.reddit.com/best', {\r\n        headers: { Authorization: `bearer ${getState().setToken.token}` },\r\n        params: {\r\n            limit: 10,\r\n            after: getState().afterData.after\r\n        }\r\n    })\r\n        .then((resp) => {\r\n        const data = resp.data.data.children.map((item) => item.data);\r\n        const nextAfter = resp.data.data.after;\r\n        const postsData = data.map((item) => ({\r\n            title: item.title,\r\n            username: item.author,\r\n            score: item.score,\r\n            num_comments: item.num_comments,\r\n            id: item.id,\r\n            created: item.created,\r\n            thumbnail: item.thumbnail,\r\n            selftext: item.selftext\r\n        }));\r\n        dispatch(exports.postsRequestSuccess(postsData));\r\n        dispatch(exports.afterRequestSuccess(nextAfter));\r\n        console.log(getState().afterData.after);\r\n    })\r\n        .catch((error) => {\r\n        console.log(error);\r\n        dispatch(exports.postsRequestError(String(error)));\r\n        dispatch(exports.afterRequestError(String(error)));\r\n    });\r\n};\r\n\n\n//# sourceURL=webpack:///./src/shared/store/posts/actions.ts?");

/***/ }),

/***/ "./src/shared/store/posts/reducer.ts":
/*!*******************************************!*\
  !*** ./src/shared/store/posts/reducer.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst actions_1 = __webpack_require__(/*! ./actions */ \"./src/shared/store/posts/actions.ts\");\r\nexports.postsReducer = (state, action) => {\r\n    switch (action.type) {\r\n        case actions_1.SAVING_POSTS:\r\n            return Object.assign(Object.assign({}, state), { loading: true });\r\n        default:\r\n            return state;\r\n        case actions_1.SAVING_POSTS_ERROR:\r\n            return Object.assign(Object.assign({}, state), { error: action.error, loading: false });\r\n        case actions_1.SAVING_POSTS_SUCCES:\r\n            return Object.assign(Object.assign({}, state), { postsData: state.postsData.concat(action.posts), loading: false });\r\n    }\r\n};\r\nexports.afterReducer = (state, action) => {\r\n    switch (action.type) {\r\n        case actions_1.SAVING_AFTER:\r\n            return Object.assign(Object.assign({}, state), { loading: true });\r\n        default:\r\n            return state;\r\n        case actions_1.SAVING_AFTER_ERROR:\r\n            return Object.assign(Object.assign({}, state), { error: action.error, loading: false });\r\n        case actions_1.SAVING_AFTER_SUCCES:\r\n            return Object.assign(Object.assign({}, state), { after: action.after, loading: false });\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/shared/store/posts/reducer.ts?");

/***/ }),

/***/ "./src/shared/store/rootReducer.ts":
/*!*****************************************!*\
  !*** ./src/shared/store/rootReducer.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst actions_1 = __webpack_require__(/*! ./posts/actions */ \"./src/shared/store/posts/actions.ts\");\r\nconst actions_2 = __webpack_require__(/*! ./token/actions */ \"./src/shared/store/token/actions.ts\");\r\nconst reducer_1 = __webpack_require__(/*! ./token/reducer */ \"./src/shared/store/token/reducer.ts\");\r\nconst reducer_2 = __webpack_require__(/*! ./posts/reducer */ \"./src/shared/store/posts/reducer.ts\");\r\nconst reducer_3 = __webpack_require__(/*! ./me/reducer */ \"./src/shared/store/me/reducer.ts\");\r\nconst actions_3 = __webpack_require__(/*! ./me/actions */ \"./src/shared/store/me/actions.ts\");\r\nexports.initialState = {\r\n    setToken: {\r\n        loading: false,\r\n        error: '',\r\n        token: '',\r\n    },\r\n    postsData: {\r\n        loading: false,\r\n        error: '',\r\n        postsData: [],\r\n    },\r\n    me: {\r\n        loading: false,\r\n        error: '',\r\n        data: {},\r\n    },\r\n    afterData: {\r\n        loading: false,\r\n        error: '',\r\n        after: '',\r\n    }\r\n};\r\nexports.rootReducer = (state = exports.initialState, action) => {\r\n    switch (action.type) {\r\n        case actions_2.SAVING_TOKEN:\r\n        case actions_2.SAVING_TOKEN_SUCCES:\r\n        case actions_2.SAVING_TOKEN_ERROR:\r\n            return Object.assign(Object.assign({}, state), { setToken: reducer_1.tokenReducer(state.setToken, action) });\r\n        case actions_1.SAVING_POSTS:\r\n        case actions_1.SAVING_POSTS_SUCCES:\r\n        case actions_1.SAVING_POSTS_ERROR:\r\n            return Object.assign(Object.assign({}, state), { postsData: reducer_2.postsReducer(state.postsData, action) });\r\n        case actions_3.SAVING_ME:\r\n        case actions_3.SAVING_ME_SUCCES:\r\n        case actions_3.SAVING_ME_ERROR:\r\n            return Object.assign(Object.assign({}, state), { me: reducer_3.meReducer(state.me, action) });\r\n        case actions_1.SAVING_AFTER:\r\n        case actions_1.SAVING_AFTER_SUCCES:\r\n        case actions_1.SAVING_AFTER_ERROR:\r\n            return Object.assign(Object.assign({}, state), { afterData: reducer_2.afterReducer(state.afterData, action) });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/shared/store/rootReducer.ts?");

/***/ }),

/***/ "./src/shared/store/token/actions.ts":
/*!*******************************************!*\
  !*** ./src/shared/store/token/actions.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SAVING_TOKEN = 'SAVING_TOKEN';\r\nexports.tokenRequest = () => ({\r\n    type: exports.SAVING_TOKEN,\r\n});\r\nexports.SAVING_TOKEN_SUCCES = 'SAVING_TOKEN_SUCCES';\r\nexports.tokenRequestSuccess = (token) => ({\r\n    type: exports.SAVING_TOKEN_SUCCES,\r\n    token,\r\n});\r\nexports.SAVING_TOKEN_ERROR = 'SAVING_TOKEN_ERROR';\r\nexports.tokenRequestError = (error) => ({\r\n    type: exports.SAVING_TOKEN_ERROR,\r\n    error,\r\n});\r\nexports.tokenRequestSync = (token) => (dispatch, _getState) => {\r\n    if (token == 'undefined')\r\n        return;\r\n    dispatch(exports.tokenRequest());\r\n    if (token) {\r\n        dispatch(exports.tokenRequestSuccess(token));\r\n    }\r\n    else {\r\n        dispatch(exports.tokenRequestError(String(token)));\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/shared/store/token/actions.ts?");

/***/ }),

/***/ "./src/shared/store/token/reducer.ts":
/*!*******************************************!*\
  !*** ./src/shared/store/token/reducer.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst actions_1 = __webpack_require__(/*! ./actions */ \"./src/shared/store/token/actions.ts\");\r\nexports.tokenReducer = (state, action) => {\r\n    switch (action.type) {\r\n        case actions_1.SAVING_TOKEN:\r\n            return Object.assign(Object.assign({}, state), { loading: true });\r\n        default:\r\n            return state;\r\n        case actions_1.SAVING_TOKEN_ERROR:\r\n            return Object.assign(Object.assign({}, state), { error: action.error, loading: false });\r\n        case actions_1.SAVING_TOKEN_SUCCES:\r\n            return Object.assign(Object.assign({}, state), { token: action.token, loading: false });\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/shared/store/token/reducer.ts?");

/***/ }),

/***/ "./src/shared/utils/React/generateRandomIndex.ts":
/*!*******************************************************!*\
  !*** ./src/shared/utils/React/generateRandomIndex.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst assoc_1 = __webpack_require__(/*! ../js/assoc */ \"./src/shared/utils/js/assoc.ts\");\r\nexports.generateRandomString = () => Math.random().toString(36).substring(2, 15);\r\nexports.assignId = assoc_1.assoc('id', exports.generateRandomString());\r\nexports.generateId = (obj) => assoc_1.assoc('id', exports.generateRandomString())(obj);\r\n\n\n//# sourceURL=webpack:///./src/shared/utils/React/generateRandomIndex.ts?");

/***/ }),

/***/ "./src/shared/utils/React/useIsMuonted.tsx":
/*!*************************************************!*\
  !*** ./src/shared/utils/React/useIsMuonted.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nfunction useIsMounted() {\r\n    const [isMounted, setIsMounted] = React.useState(false);\r\n    React.useEffect(() => { setIsMounted(true); }, []);\r\n    return [isMounted];\r\n}\r\nexports.useIsMounted = useIsMounted;\r\n\n\n//# sourceURL=webpack:///./src/shared/utils/React/useIsMuonted.tsx?");

/***/ }),

/***/ "./src/shared/utils/React/withKey.tsx":
/*!********************************************!*\
  !*** ./src/shared/utils/React/withKey.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nexports.withIdKey = withKey('id');\r\nfunction withKey(key) {\r\n    return (component) => (props, index) => react_1.default.createElement(component, Object.assign(Object.assign({}, props), { key: key ? props[key] : index }), []);\r\n}\r\nexports.withKey = withKey;\r\n\n\n//# sourceURL=webpack:///./src/shared/utils/React/withKey.tsx?");

/***/ }),

/***/ "./src/shared/utils/js/assoc.ts":
/*!**************************************!*\
  !*** ./src/shared/utils/js/assoc.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nfunction assoc(key, value) {\r\n    return (obj) => (Object.assign(Object.assign({}, obj), { [key]: value }));\r\n}\r\nexports.assoc = assoc;\r\n\n\n//# sourceURL=webpack:///./src/shared/utils/js/assoc.ts?");

/***/ }),

/***/ "./src/shared/utils/js/merge.ts":
/*!**************************************!*\
  !*** ./src/shared/utils/js/merge.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nfunction merge(obj) {\r\n    return (obj2) => (Object.assign(Object.assign({}, obj), obj2));\r\n}\r\nexports.merge = merge;\r\n\n\n//# sourceURL=webpack:///./src/shared/utils/js/merge.ts?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"classnames\");\n\n//# sourceURL=webpack:///external_%22classnames%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"formik\");\n\n//# sourceURL=webpack:///external_%22formik%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");\n\n//# sourceURL=webpack:///external_%22react-dom%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");\n\n//# sourceURL=webpack:///external_%22redux-devtools-extension%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ }),

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"yup\");\n\n//# sourceURL=webpack:///external_%22yup%22?");

/***/ })

/******/ });