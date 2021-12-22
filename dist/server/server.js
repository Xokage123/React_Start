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

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.indexTemplate = (content) => `\r\n<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <title>Reddit</title>\r\n  <script src=\"/static/client.js\" type=\"application/javascript\"></script>\r\n</head>\r\n<body>\r\n  <div id=\"react_root\">${content}</div>\r\n</body>\r\n</html>\r\n`;\r\n\n\n//# sourceURL=webpack:///./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nconst server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\r\nconst App_1 = __webpack_require__(/*! ../shared/App */ \"./src/shared/App.tsx\");\r\nconst indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\r\nconst app = express_1.default();\r\napp.use('/static', express_1.default.static('./dist/client'));\r\napp.get('/', (req, res) => {\r\n    res.send(indexTemplate_1.indexTemplate(server_1.default.renderToString(react_1.default.createElement(App_1.App, null))));\r\n});\r\napp.listen(3000, () => {\r\n    console.log('Server started on http://localhost:3000');\r\n});\r\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/App.tsx":
/*!****************************!*\
  !*** ./src/shared/App.tsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result[\"default\"] = mod;\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nconst Layout_1 = __webpack_require__(/*! ./Layout/Layout */ \"./src/shared/Layout/Layout.tsx\");\r\n__webpack_require__(/*! ./main.global.scss */ \"./src/shared/main.global.scss\");\r\nconst Header_1 = __webpack_require__(/*! ./Header */ \"./src/shared/Header/index.ts\");\r\nconst Content_1 = __webpack_require__(/*! ./Content */ \"./src/shared/Content/index.ts\");\r\nconst CardList_1 = __webpack_require__(/*! ./CardList */ \"./src/shared/CardList/index.ts\");\r\nfunction App() {\r\n    return (React.createElement(Layout_1.Layout, null,\r\n        React.createElement(Header_1.Header, null),\r\n        React.createElement(Content_1.Content, null,\r\n            React.createElement(CardList_1.CardList, null))));\r\n}\r\nexports.App = App;\r\n\n\n//# sourceURL=webpack:///./src/shared/App.tsx?");

/***/ }),

/***/ "./src/shared/CardList/Card/Card.tsx":
/*!*******************************************!*\
  !*** ./src/shared/CardList/Card/Card.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst card_scss_1 = __importDefault(__webpack_require__(/*! ./card.scss */ \"./src/shared/CardList/Card/card.scss\"));\r\nconst Controls_1 = __webpack_require__(/*! ./Controls */ \"./src/shared/CardList/Card/Controls/index.ts\");\r\nconst Menu_1 = __webpack_require__(/*! ./Menu */ \"./src/shared/CardList/Card/Menu/index.ts\");\r\nconst Preview_1 = __webpack_require__(/*! ./Preview */ \"./src/shared/CardList/Card/Preview/index.ts\");\r\nconst TextContent_1 = __webpack_require__(/*! ./TextContent */ \"./src/shared/CardList/Card/TextContent/index.ts\");\r\nfunction Card() {\r\n    return (react_1.default.createElement(\"li\", { className: card_scss_1.default.card },\r\n        react_1.default.createElement(TextContent_1.TextContent, null),\r\n        react_1.default.createElement(Preview_1.Preview, null),\r\n        react_1.default.createElement(Menu_1.Menu, null),\r\n        react_1.default.createElement(Controls_1.Controls, null)));\r\n}\r\nexports.Card = Card;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Card.tsx?");

/***/ }),

/***/ "./src/shared/CardList/Card/Controls/Controls.tsx":
/*!********************************************************!*\
  !*** ./src/shared/CardList/Card/Controls/Controls.tsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst controls_scss_1 = __importDefault(__webpack_require__(/*! ./controls.scss */ \"./src/shared/CardList/Card/Controls/controls.scss\"));\r\nfunction Controls() {\r\n    return (react_1.default.createElement(\"div\", { className: controls_scss_1.default.controls },\r\n        react_1.default.createElement(\"div\", { className: controls_scss_1.default.karmaCounter },\r\n            react_1.default.createElement(\"button\", { className: controls_scss_1.default.up },\r\n                react_1.default.createElement(\"img\", { className: controls_scss_1.default.upImg, src: \"https://ps.w.org/wpfront-scroll-top/assets/icon.svg?rev=1534312\" })),\r\n            react_1.default.createElement(\"span\", { className: controls_scss_1.default.karmaValue }, \"234\"),\r\n            react_1.default.createElement(\"button\", { className: controls_scss_1.default.down },\r\n                react_1.default.createElement(\"img\", { className: controls_scss_1.default.downImg, src: \"https://ps.w.org/wpfront-scroll-top/assets/icon.svg?rev=1534312\" }))),\r\n        react_1.default.createElement(\"button\", { className: controls_scss_1.default.commentsButton },\r\n            react_1.default.createElement(\"img\", { src: \"https://cdn-icons-png.flaticon.com/512/1380/1380338.png\", alt: \"\" }),\r\n            react_1.default.createElement(\"span\", { className: controls_scss_1.default.commentsNumber }, \"13\")),\r\n        react_1.default.createElement(\"div\", { className: controls_scss_1.default.actions },\r\n            react_1.default.createElement(\"button\", { className: controls_scss_1.default.shareButton },\r\n                react_1.default.createElement(\"img\", { src: \"https://cdn0.iconfinder.com/data/icons/multimedia-261/32/Send-512.png\", alt: \"\" })),\r\n            react_1.default.createElement(\"button\", { className: controls_scss_1.default.saveButton },\r\n                react_1.default.createElement(\"img\", { src: \"https://cdn.iconscout.com/icon/free/png-256/save-1659426-1408816.png\" })))));\r\n}\r\nexports.Controls = Controls;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Controls/Controls.tsx?");

/***/ }),

/***/ "./src/shared/CardList/Card/Controls/controls.scss":
/*!*********************************************************!*\
  !*** ./src/shared/CardList/Card/Controls/controls.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"controls\": \"controls__controls--2oCbL\",\n\t\"karmaCounter\": \"controls__karmaCounter--1EUdq\",\n\t\"karmaValue\": \"controls__karmaValue--2EWKm\",\n\t\"up\": \"controls__up--V_4b5\",\n\t\"down\": \"controls__down--4xOxC\",\n\t\"upImg\": \"controls__upImg--NKD8K\",\n\t\"downImg\": \"controls__downImg--NYcP6\",\n\t\"commentsButton\": \"controls__commentsButton--2np_t\",\n\t\"commentsNumber\": \"controls__commentsNumber--3ua6g\",\n\t\"shareButton\": \"controls__shareButton--15quJ\",\n\t\"saveButton\": \"controls__saveButton--2Im-p\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Controls/controls.scss?");

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
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst Dropdown_1 = __webpack_require__(/*! ../../../Dropdown */ \"./src/shared/Dropdown/index.ts\");\r\nconst generateRandomIndex_1 = __webpack_require__(/*! ../../../utils/React/generateRandomIndex */ \"./src/shared/utils/React/generateRandomIndex.ts\");\r\nconst menu_scss_1 = __importDefault(__webpack_require__(/*! ./menu.scss */ \"./src/shared/CardList/Card/Menu/menu.scss\"));\r\nconst MenuIcon_1 = __webpack_require__(/*! ../../../Icons/MenuIcon */ \"./src/shared/Icons/MenuIcon.tsx\");\r\nconst LIST = [\r\n    { title: 'Rising', class: 'dropItem' },\r\n    { title: 'Powerups', class: 'icon-powerup' },\r\n    { title: 'Premium', class: 'icon-premium' },\r\n    { title: 'Talk', class: 'dropItem' },\r\n    { title: 'Predictions', class: 'dropItem' },\r\n    { title: 'Help Center', class: '' },\r\n].map(generateRandomIndex_1.generateId);\r\nfunction Menu() {\r\n    const [mainButton, setMainButton] = react_1.default.useState('Rising');\r\n    const handleClick = (id) => {\r\n        const newList = LIST.filter((item) => item.id == id);\r\n        const [newItem] = newList;\r\n        setMainButton(newItem.title);\r\n    };\r\n    return (react_1.default.createElement(\"div\", { className: menu_scss_1.default.menu },\r\n        react_1.default.createElement(Dropdown_1.Dropdown, { button: react_1.default.createElement(\"button\", { className: menu_scss_1.default.menuButton },\r\n                react_1.default.createElement(MenuIcon_1.MenuIcon, null)) },\r\n            react_1.default.createElement(\"div\", { className: menu_scss_1.default.dropDown }, \"Rising Powerups Premium\"))));\r\n}\r\nexports.Menu = Menu;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Menu/Menu.tsx?");

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

eval("// Exports\nmodule.exports = {\n\t\"menu\": \"menu__menu--3ALMa\",\n\t\"menuButtom\": \"menu__menuButtom--1U-B8\",\n\t\"menuButtonImg\": \"menu__menuButtonImg--3HAVq\",\n\t\"menuButtomImg\": \"menu__menuButtomImg--3UWil\",\n\t\"dropDown\": \"menu__dropDown--33ilJ\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Menu/menu.scss?");

/***/ }),

/***/ "./src/shared/CardList/Card/Preview/Preview.tsx":
/*!******************************************************!*\
  !*** ./src/shared/CardList/Card/Preview/Preview.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst preview_scss_1 = __importDefault(__webpack_require__(/*! ./preview.scss */ \"./src/shared/CardList/Card/Preview/preview.scss\"));\r\nfunction Preview() {\r\n    return (react_1.default.createElement(\"div\", { className: preview_scss_1.default.preview },\r\n        react_1.default.createElement(\"img\", { className: preview_scss_1.default.previewImg, src: \"https://cdn.dribbble.com/users/4125071/screenshots/17041619/media/c9ade589fb28a581b7ea7930fb1c887e.png?compress=1&resize=1200x900\" })));\r\n}\r\nexports.Preview = Preview;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Preview/Preview.tsx?");

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

eval("// Exports\nmodule.exports = {\n\t\"preview\": \"preview__preview--3v8sd\",\n\t\"previewImg\": \"preview__previewImg--1EsgH\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Preview/preview.scss?");

/***/ }),

/***/ "./src/shared/CardList/Card/TextContent/TextContent.tsx":
/*!**************************************************************!*\
  !*** ./src/shared/CardList/Card/TextContent/TextContent.tsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst textcontent_scss_1 = __importDefault(__webpack_require__(/*! ./textcontent.scss */ \"./src/shared/CardList/Card/TextContent/textcontent.scss\"));\r\nfunction TextContent() {\r\n    return (react_1.default.createElement(\"div\", { className: textcontent_scss_1.default.textContent },\r\n        react_1.default.createElement(\"div\", { className: textcontent_scss_1.default.metaData },\r\n            react_1.default.createElement(\"div\", { className: textcontent_scss_1.default.userLink },\r\n                react_1.default.createElement(\"img\", { className: textcontent_scss_1.default.avatar, src: \"https://cdn.dribbble.com/users/2313212/screenshots/11256142/media/27b57b3ee2ac221dc8c616d02161d96b.jpg?compress=1&resize=400x300\", alt: \"avatar\" }),\r\n                react_1.default.createElement(\"a\", { href: \"#user-url\", className: textcontent_scss_1.default.username }, \"\\u0414\\u043C\\u0438\\u0442\\u0440\\u0438\\u0439 \\u0413\\u0440\\u0438\\u0448\\u0438\\u043D\")),\r\n            react_1.default.createElement(\"span\", { className: textcontent_scss_1.default.createdAt }, \"4 \\u0447\\u0430\\u0441\\u0430 \\u043D\\u0430\\u0437\\u0430\\u0434\")),\r\n        react_1.default.createElement(\"h2\", { className: textcontent_scss_1.default.title },\r\n            react_1.default.createElement(\"a\", { href: \"#post-url\", className: textcontent_scss_1.default.postLink }, \"\\u0421\\u043B\\u0435\\u0434\\u0443\\u0435\\u0442 \\u043E\\u0442\\u043C\\u0435\\u0442\\u0438\\u0442\\u044C, \\u0447\\u0442\\u043E \\u043D\\u043E\\u0432\\u0430\\u044F \\u043C\\u043E\\u0434\\u043A\\u0435\\u043B\\u044C \\u043E\\u0440\\u0433\\u0430\\u043D\\u0438\\u0437\\u0430\\u0446\\u0438\\u043E\\u043D\\u043D\\u043E\\u0439 \\u0434\\u0435\\u044F\\u0442\\u0435\\u043B\\u044C\\u043D\\u043E\\u0441\\u0442\\u0438 \\u0421\\u043B\\u0435\\u0434\\u0443\\u0435\\u0442 \\u043E\\u0442\\u043C\\u0435\\u0442\\u0438\\u0442\\u044C, \\u0447\\u0442\\u043E \\u043D\\u043E\\u0432\\u0430\\u044F \\u043C\\u043E\\u0434\\u043A\\u0435\\u043B\\u044C \\u043E\\u0440\\u0433\\u0430\\u043D\\u0438\\u0437\\u0430\\u0446\\u0438\\u043E\\u043D\\u043D\\u043E\\u0439 \\u0434\\u0435\\u044F\\u0442\\u0435\\u043B\\u044C\\u043D\\u043E\\u0441\\u0442\\u0438\"))));\r\n}\r\nexports.TextContent = TextContent;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/TextContent/TextContent.tsx?");

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

eval("// Exports\nmodule.exports = {\n\t\"metaData\": \"textcontent__metaData--3SRhz\",\n\t\"userLink\": \"textcontent__userLink--2DvdL\",\n\t\"avatar\": \"textcontent__avatar--39M_r\",\n\t\"username\": \"textcontent__username--nWPj1\",\n\t\"createdAt\": \"textcontent__createdAt--2XYRb\",\n\t\"title\": \"textcontent__title--3n-Ks\",\n\t\"postLink\": \"textcontent__postLink--2czDE\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/TextContent/textcontent.scss?");

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
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst Card_1 = __webpack_require__(/*! ./Card */ \"./src/shared/CardList/Card/index.ts\");\r\nconst cardlist_scss_1 = __importDefault(__webpack_require__(/*! ./cardlist.scss */ \"./src/shared/CardList/cardlist.scss\"));\r\nfunction CardList() {\r\n    return (react_1.default.createElement(\"ul\", { className: cardlist_scss_1.default.cardList },\r\n        react_1.default.createElement(Card_1.Card, null)));\r\n}\r\nexports.CardList = CardList;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/CardList.tsx?");

/***/ }),

/***/ "./src/shared/CardList/cardlist.scss":
/*!*******************************************!*\
  !*** ./src/shared/CardList/cardlist.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"cardList\": \"cardlist__cardList--2WH4h\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardList/cardlist.scss?");

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
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst searchblock_scss_1 = __importDefault(__webpack_require__(/*! ./searchblock.scss */ \"./src/shared/Header/SearchBlock/searchblock.scss\"));\r\nfunction SearchBlock() {\r\n    return (react_1.default.createElement(\"div\", { className: searchblock_scss_1.default.searchBlock }, \"Search Block\"));\r\n}\r\nexports.SearchBlock = SearchBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/SearchBlock.tsx?");

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
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst Dropdown_1 = __webpack_require__(/*! ../../Dropdown */ \"./src/shared/Dropdown/index.ts\");\r\nconst List_1 = __webpack_require__(/*! ./List */ \"./src/shared/Header/SortBlock/List.tsx\");\r\nconst merge_1 = __webpack_require__(/*! ../../utils/js/merge */ \"./src/shared/utils/js/merge.ts\");\r\nconst generateRandomIndex_1 = __webpack_require__(/*! ../../utils/React/generateRandomIndex */ \"./src/shared/utils/React/generateRandomIndex.ts\");\r\nconst sortblock_scss_1 = __importDefault(__webpack_require__(/*! ./sortblock.scss */ \"./src/shared/Header/SortBlock/sortblock.scss\"));\r\nlet LIST = [\r\n    { title: 'Everywhere', class: 'dropItem' },\r\n    { title: 'United Kingdom', class: 'dropItem' },\r\n    { title: 'United States', class: 'dropItem' },\r\n    { title: 'Argentina', class: 'dropItem' },\r\n    { title: 'Australia', class: 'dropItem' },\r\n    { title: 'Canada', class: 'dropItem' },\r\n    { title: 'Japan', class: 'dropItem' },\r\n    { title: 'Colombia', class: 'dropItem' },\r\n    { title: 'Brazilia', class: 'dropItem' },\r\n    { title: 'Finland', class: 'dropItem' },\r\n].map(generateRandomIndex_1.generateId);\r\nfunction SortBlock() {\r\n    const [mainButton, setMainButton] = react_1.default.useState('Everywhere');\r\n    const handleClick = (id) => {\r\n        const newList = LIST.filter((item) => item.id == id);\r\n        const [newItem] = newList;\r\n        setMainButton(newItem.title);\r\n    };\r\n    return (react_1.default.createElement(Dropdown_1.Dropdown, { button: react_1.default.createElement(\"button\", { className: sortblock_scss_1.default.sortBlock }, mainButton) },\r\n        react_1.default.createElement(List_1.Feed, { blocks: LIST.map(merge_1.merge({ onClick: handleClick })) })));\r\n}\r\nexports.SortBlock = SortBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/SortBlock.tsx?");

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
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst threadtitle_scss_1 = __importDefault(__webpack_require__(/*! ./threadtitle.scss */ \"./src/shared/Header/ThreadTitle/threadtitle.scss\"));\r\nfunction ThreadTitle() {\r\n    return (react_1.default.createElement(\"h1\", { className: threadtitle_scss_1.default.threadTitle }, \"Header\"));\r\n}\r\nexports.ThreadTitle = ThreadTitle;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/ThreadTitle.tsx?");

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

/***/ "./src/shared/main.global.scss":
/*!*************************************!*\
  !*** ./src/shared/main.global.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;700&family=Roboto:wght@400;500;700&display=swap);\"]);\n// Module\nexports.push([module.i, \"body {\\n  padding: 0;\\n  margin: 0;\\n  background-color: #f4f4f4;\\n  font-size: 14px;\\n  line-height: 16px;\\n  font-family: \\\"Roboto\\\", \\\"serif\\\";\\n}\\n\\n* {\\n  color: #333333;\\n  box-sizing: border-box;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n}\\n\\nul {\\n  padding: 0;\\n  margin: 0;\\n  list-style: none;\\n}\\n\\na {\\n  text-decoration: none;\\n}\\n\\nbutton {\\n  padding: 0;\\n  border: 0;\\n  background-color: transparent;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/shared/main.global.scss?");

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

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ })

/******/ });