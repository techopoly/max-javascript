(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/RemoveEventListener.js":
/*!************************************!*\
  !*** ./src/RemoveEventListener.js ***!
  \************************************/
/*! exports provided: removeEventListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeEventListener\", function() { return removeEventListener; });\nfunction removeEventListener(element, handler, type) {\r\n    const clonedElement = element.cloneNode(true);\r\n    //element.replaceWith(clonedElement);\r\n    const button = clonedElement.querySelector('button:last-of-type');\r\n    button.textContent = type === 'Finish' ? 'Activate' : 'Finish'\r\n    button.addEventListener('click', handler.bind(null, clonedElement))\r\n    return clonedElement;\r\n}\n\n//# sourceURL=webpack:///./src/RemoveEventListener.js?");

/***/ })

}]);