/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".app.js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "assets/scripts/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/myApp.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ActiveToFinish.js":
/*!*******************************!*\
  !*** ./src/ActiveToFinish.js ***!
  \*******************************/
/*! exports provided: activeToFinish */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"activeToFinish\", function() { return activeToFinish; });\n/* harmony import */ var _Add_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add.js */ \"./src/Add.js\");\n/* harmony import */ var _Remove_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Remove.js */ \"./src/Remove.js\");\n/* harmony import */ var _FinishToActive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FinishToActive.js */ \"./src/FinishToActive.js\");\n\r\n\r\n\r\n//import { removeEventListener } from './RemoveEventListener.js'\r\n\r\nfunction activeToFinish(element) {\r\n    //update DOM\r\n    Object(_Remove_js__WEBPACK_IMPORTED_MODULE_1__[\"remove\"])(element);\r\n    //remove EventListener from element and add EventListener to the same element\r\n    /* this part will not get downloaded initially . it we get once we click on the button that triggers the eventlistener \r\n    and runs the ActiveToFinish function */\r\n    __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./RemoveEventListener.js */ \"./src/RemoveEventListener.js\")).then(module => {\r\n        Object(_Add_js__WEBPACK_IMPORTED_MODULE_0__[\"add\"])(module.removeEventListener(element, _FinishToActive_js__WEBPACK_IMPORTED_MODULE_2__[\"FinishToActive\"], 'Finish'), 'finished');\r\n    })\r\n}\n\n//# sourceURL=webpack:///./src/ActiveToFinish.js?");

/***/ }),

/***/ "./src/Add.js":
/*!********************!*\
  !*** ./src/Add.js ***!
  \********************/
/*! exports provided: add */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"add\", function() { return add; });\nfunction add(element, type) {\r\n    const insideUl = document.querySelector(`#${type}-projects ul`);\r\n    insideUl.appendChild(element);\r\n}\r\nconsole.log('this is inside add() ')\n\n//# sourceURL=webpack:///./src/Add.js?");

/***/ }),

/***/ "./src/AddingEventListener.js":
/*!************************************!*\
  !*** ./src/AddingEventListener.js ***!
  \************************************/
/*! exports provided: addingEventListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addingEventListener\", function() { return addingEventListener; });\n/* harmony import */ var _ActiveToFinish_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActiveToFinish.js */ \"./src/ActiveToFinish.js\");\n/* harmony import */ var _FinishToActive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FinishToActive.js */ \"./src/FinishToActive.js\");\n\r\n\r\n\r\nfunction addingEventListener(type) {\r\n    const handler = type === 'active' ? _ActiveToFinish_js__WEBPACK_IMPORTED_MODULE_0__[\"activeToFinish\"] : _FinishToActive_js__WEBPACK_IMPORTED_MODULE_1__[\"FinishToActive\"]\r\n    const allProjects = document.querySelectorAll(`#${type}-projects li`);\r\n    console.log(allProjects);\r\n    for (const eachProject of allProjects) {\r\n        const button = eachProject.querySelector('button:last-of-type');\r\n        button.addEventListener('click', handler.bind(null, eachProject));\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/AddingEventListener.js?");

/***/ }),

/***/ "./src/FinishToActive.js":
/*!*******************************!*\
  !*** ./src/FinishToActive.js ***!
  \*******************************/
/*! exports provided: FinishToActive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FinishToActive\", function() { return FinishToActive; });\n/* harmony import */ var _Add_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add.js */ \"./src/Add.js\");\n/* harmony import */ var _Remove_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Remove.js */ \"./src/Remove.js\");\n/* harmony import */ var _ActiveToFinish_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ActiveToFinish.js */ \"./src/ActiveToFinish.js\");\n\r\n\r\n\r\n//import { removeEventListener } from './RemoveEventListener.js'\r\n\r\n\r\nfunction FinishToActive(element) {\r\n    //update DOM\r\n    Object(_Remove_js__WEBPACK_IMPORTED_MODULE_1__[\"remove\"])(element);\r\n    //remove EventListener from element and add EventListener to the same element\r\n    /* this part will not get downloaded initially . it we get once we click on the button that triggers the eventlistener \r\n    and runs the FinishToActive function */\r\n    __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./RemoveEventListener.js */ \"./src/RemoveEventListener.js\")).then(module => {\r\n        Object(_Add_js__WEBPACK_IMPORTED_MODULE_0__[\"add\"])(module.removeEventListener(element, _ActiveToFinish_js__WEBPACK_IMPORTED_MODULE_2__[\"activeToFinish\"], 'Activate'), 'active');\r\n    })\r\n\r\n}\n\n//# sourceURL=webpack:///./src/FinishToActive.js?");

/***/ }),

/***/ "./src/Remove.js":
/*!***********************!*\
  !*** ./src/Remove.js ***!
  \***********************/
/*! exports provided: remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"remove\", function() { return remove; });\nfunction remove(element) {\r\n    element.remove();\r\n}\n\n//# sourceURL=webpack:///./src/Remove.js?");

/***/ }),

/***/ "./src/myApp.js":
/*!**********************!*\
  !*** ./src/myApp.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AddingEventListener_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddingEventListener.js */ \"./src/AddingEventListener.js\");\n//adding dynamic imports in removeEventListener\r\n // in the carly braces we define what to import and in quotation we define where to import\r\n\r\nObject(_AddingEventListener_js__WEBPACK_IMPORTED_MODULE_0__[\"addingEventListener\"])('active');\r\nObject(_AddingEventListener_js__WEBPACK_IMPORTED_MODULE_0__[\"addingEventListener\"])('finished');\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* // creating funcitons:\r\nconst removeLiFromActive = (liElementToRemove) => {\r\n    liElementToRemove.remove();\r\n}\r\n\r\nconst addLiToFinished = (liElement) => {\r\n    insideUlInFinished.appendChild(liElement);\r\n}\r\n\r\nconst addLiToActive = (liElement) => {\r\n    insideUlInActive.appendChild(liElement)\r\n}\r\n\r\nconst removeLiFromFinished = (liElementToRemove) => {\r\n    liElementToRemove.remove(liElementToRemove);\r\n}\r\n\r\n\r\nfunction finishBtn1Handler(liElementToRemove, liElementToAdd) {\r\n\r\n    console.log(liElementToRemove.lastElementChild.textContent)\r\n    if (liElementToRemove.lastElementChild.textContent == 'Finish') {\r\n        console.log('this is running ' + liElementToAdd.lastElementChild.textContent);\r\n        removeLiFromActive(liElementToRemove);\r\n        addLiToFinished(liElementToAdd);\r\n        liElementToAdd.lastElementChild.textContent = 'Activate';\r\n        liElementToAdd.addEventListener('click', activateBtn1Handler.bind(null, liElementToAdd, activeClones[0]))\r\n\r\n\r\n    }\r\n    if (finishBtn1.textContent == 'Activate') {\r\n        console.log('this is running ' + liElementToAdd.lastElementChild.textContent);\r\n        removeLiFromFinished(liElementToRemove);\r\n        addLiToActive(liElementToAdd);\r\n        liElementToAdd.lastElementChild.textContent = 'Finish'\r\n\r\n    }\r\n\r\n\r\n    //liElementToAdd.addEventListener('click', activateBtn1Handler.bind(null, liElementToAdd, liElementToAdd));\r\n\r\n    // liElementToAdd.lastElementChild.removeEventListener('click', finishBtn1Handler.bind(null, liElementToAdd, liElementToAdd));\r\n\r\n}\r\n\r\nfunction activateBtn1Handler(liElementToRemove, liElementToAdd) {\r\n\r\n\r\n    console.log(liElementToAdd.lastElementChild)\r\n\r\n    if (activateBtn1.textContent == 'Activate') {\r\n        console.log('this is running ' + activateBtn1.textContent);\r\n        removeLiFromFinished(liElementToRemove);\r\n        addLiToActive(liElementToAdd);\r\n        liElementToAdd.lastElementChild.textContent = 'Finish';\r\n\r\n\r\n    }\r\n\r\n    if (activateBtn1.textContent == 'Finish') {\r\n        console.log('this is running ' + activateBtn1.textContent);\r\n        removeLiFromActive(liElementToRemove);\r\n        addLiToFinished(liElementToAdd);\r\n        activateBtn1.textContent == 'Activate';\r\n\r\n\r\n    }\r\n\r\n}\r\n */\r\n/* -------------------------------------------------------- */\r\n//console.log(finishBtn1.textContent);\r\n//adding eventListener \r\n/* if (finishBtn1.textContent == 'Finish') {\r\n    console.log('this is running ' + finishBtn1.textContent);\r\n    finishBtn1.addEventListener('click', finishBtn1Handler.bind(null, activeLi1, activeClones[0]));\r\n}\r\nif (finishBtn1.textContent == 'Activate') {\r\n    console.log('this is running ' + finishBtn1.textContent);\r\n    finishBtn1.addEventListener('click', activateBtn1Handler.bind(null, activeLi1, activeClones[0]))\r\n}\r\n\r\nif (activateBtn1.textContent == 'Finish') {\r\n    console.log('this is running ' + activateBtn1.textContent);\r\n    activateBtn1.addEventListener('click', finishBtn1Handler.bind(null, finishedSectionLi1, finishedClones[0]));\r\n}\r\nif (activateBtn1.textContent == 'Activate') {\r\n    console.log('this is running ' + activateBtn1.textContent);\r\n    activateBtn1.addEventListener('click', activateBtn1Handler.bind(null, activeLi1, activeClones[0]))\r\n} */\r\n\r\n\r\n\r\n\r\n/* finishBtn1.removeEventListener('click', finishBtn1Handler.bind(null, activeLi1, activeClones[0]), true);\r\nactivateBtn1.removeEventListener('click', activateBtn1Handler); */\r\n//activateBtn1.removeEventListener('click', activateBtn1Handler,true);\r\n\r\n\r\n\r\n\r\n\r\n/* I tried to do it with my knowledge but I know I can improve it even more */\n\n//# sourceURL=webpack:///./src/myApp.js?");

/***/ })

/******/ });