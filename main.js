/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/components/container/container.scss":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/components/container/container.scss ***!
  \*************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".container {\\n  margin: 0 auto;\\n  padding: 0 1.0714rem;\\n  max-width: 85rem;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://toxin-hotel-website/./src/components/container/container.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/components/dropdown/dropdown.scss":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/components/dropdown/dropdown.scss ***!
  \***********************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".select {\\n  width: fit-content;\\n  position: relative;\\n  z-index: 2;\\n}\\n.select.open .select__dropdown {\\n  display: block;\\n}\\n.select.open .select__backdrop {\\n  display: block;\\n}\\n.select.open .text-field {\\n  border-bottom-left-radius: 0;\\n  border-bottom-right-radius: 0;\\n  border: 1px solid var(--dark-shade-50);\\n  border-bottom: none;\\n}\\n.select.open .dropdown::after {\\n  border: none;\\n  border-top: 2px solid var(--dark-shade-50);\\n  border-right: 2px solid var(--dark-shade-50);\\n}\\n.select__title {\\n  margin-bottom: 5px;\\n}\\n.select__backdrop {\\n  position: fixed;\\n  display: none;\\n  z-index: -1;\\n  top: 0;\\n  right: 0;\\n  left: 0;\\n  bottom: 0;\\n  background: transparent;\\n}\\n.select__dropdown {\\n  position: absolute;\\n  left: 0;\\n  right: 0;\\n  display: none;\\n  padding: 13px 7px 17px 15px;\\n  border: 1px solid var(--dark-shade-50);\\n  border-bottom-left-radius: 4px;\\n  border-bottom-right-radius: 4px;\\n  background: #fff;\\n}\\n.select__dropdown.border-none {\\n  border: none !important;\\n  padding: 0 !important;\\n}\\n.select__item {\\n  position: relative;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: baseline;\\n  margin-bottom: 20px;\\n  margin-right: 45px;\\n}\\n.select__item:last-child {\\n  margin-bottom: 0;\\n}\\n.select__item-minus, .select__item-plus {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  position: absolute;\\n  top: -6px;\\n  right: -45px;\\n  font-size: 18px;\\n  color: var(--dark-shade-50);\\n  width: 30px;\\n  height: 30px;\\n  border-radius: 15px;\\n  border: 1px solid var(--dark-shade-50);\\n  cursor: pointer;\\n}\\n.select__item-minus {\\n  right: 25px;\\n  display: none;\\n}\\n.select__item-minus::after {\\n  content: \\\"-\\\";\\n  position: absolute;\\n  top: 2px;\\n}\\n.select__apply-wrap {\\n  position: relative;\\n  height: 55px;\\n  font-weight: 800;\\n  font-size: 12px;\\n  text-transform: uppercase;\\n  color: var(--purple);\\n}\\n.select__clear, .select__apply {\\n  position: absolute;\\n  right: 0;\\n  bottom: 13px;\\n  cursor: pointer;\\n}\\n.select__clear {\\n  display: none;\\n  width: fit-content;\\n  left: 0;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://toxin-hotel-website/./src/components/dropdown/dropdown.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/components/heading/heading.scss":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/components/heading/heading.scss ***!
  \*********************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".heading {\\n  font-family: Montserrat, Arial, sans-serif;\\n  font-weight: 700;\\n  color: #1f2041;\\n}\\n.heading._level_1 {\\n  font-size: 1.7143rem;\\n  letter-spacing: -0.0714rem;\\n  line-height: 2.2857rem;\\n}\\n.heading._level_2 {\\n  font-size: 1.3571rem;\\n  letter-spacing: -0.0714rem;\\n}\\n.heading._level_3 {\\n  font-size: 0.8571rem;\\n  text-transform: uppercase;\\n}\\n.heading._font_quicksand {\\n  font-family: Quicksand, Arial, sans-serif;\\n  letter-spacing: unset;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://toxin-hotel-website/./src/components/heading/heading.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/colors-and-type/colors-and-type.scss":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/colors-and-type/colors-and-type.scss ***!
  \********************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".c-t-page {\\n  padding: 10.3571rem 0 3.5714rem;\\n}\\n.c-t-page-logo {\\n  position: absolute;\\n  top: 2.1429rem;\\n  left: 50%;\\n  transform: translateX(-50%);\\n}\\n@media (min-width: 640px) {\\n  .c-t-page-logo {\\n    transform: translateX(0%);\\n    left: 1.0714rem;\\n  }\\n}\\n@media (min-width: 1440px) {\\n  .c-t-page-logo {\\n    left: 2.0714rem;\\n  }\\n}\\n.c-t-page-content {\\n  display: grid;\\n  grid-template-columns: repeat(auto-fit, minmax(20.7143rem, 1fr));\\n  justify-content: space-between;\\n}\\n@media (min-width: 1440px) {\\n  .c-t-page-content {\\n    padding-right: 3.3571rem;\\n    padding-left: 0.6429rem;\\n  }\\n}\\n.c-t-page .colors {\\n  width: 20.7143rem;\\n  margin: 0 auto 3.5714rem;\\n}\\n@media (min-width: 640px) {\\n  .c-t-page .colors {\\n    width: fit-content;\\n    margin: 0;\\n  }\\n}\\n.c-t-page .colors__color {\\n  display: grid;\\n  grid-template-columns: 5rem auto;\\n  grid-template-rows: auto auto;\\n  column-gap: 2.8571rem;\\n}\\n.c-t-page .colors__color:not(:last-child) {\\n  margin-bottom: 1.4286rem;\\n}\\n.c-t-page .colors__color-example {\\n  width: 5rem;\\n  height: 5rem;\\n  border-radius: 0.4286rem;\\n  grid-row: 1/3;\\n  align-self: center;\\n}\\n.c-t-page .colors__color-example._color_first-darkest {\\n  background: #1f2041;\\n}\\n.c-t-page .colors__color-example._color_first-darker {\\n  background: rgba(31, 32, 65, 0.75);\\n}\\n.c-t-page .colors__color-example._color_first {\\n  background: rgba(31, 32, 65, 0.5);\\n}\\n.c-t-page .colors__color-example._color_first-lighter {\\n  background: rgba(31, 32, 65, 0.25);\\n}\\n.c-t-page .colors__color-example._color_first-lightest {\\n  background: rgba(31, 32, 65, 0.05);\\n}\\n.c-t-page .colors__color-example._color_second {\\n  background: #BC9CFF;\\n}\\n.c-t-page .colors__color-example._color_third {\\n  background: #6FCF97;\\n}\\n.c-t-page .colors__color-name {\\n  align-self: end;\\n}\\n.c-t-page .colors__color-value {\\n  font-family: Quicksand, Arial, sans-serif;\\n  font-size: 1.3571rem;\\n  font-weight: 400;\\n  align-self: center;\\n}\\n.c-t-page .type {\\n  display: grid;\\n  grid-template-columns: max-content minmax(auto, 24.2857rem);\\n  grid-gap: 3.4286rem 2.1429rem;\\n  width: fit-content;\\n  margin: 0 auto;\\n  grid-auto-rows: max-content;\\n}\\n@media (min-width: 640px) {\\n  .c-t-page .type {\\n    margin: 0;\\n    justify-self: end;\\n  }\\n}\\n.c-t-page .type__recommended-tag-name {\\n  color: rgba(31, 32, 65, 0.25);\\n  justify-self: end;\\n}\\n.c-t-page .type__recommended-tag-name._size_large {\\n  font-size: 1.7143rem;\\n}\\n.c-t-page .type__recommended-tag-name._size_medium {\\n  font-size: 1.3571rem;\\n}\\n.c-t-page .type__recommended-tag-name._size_small {\\n  font-size: 0.8571rem;\\n}\\n.c-t-page .type__paragraph {\\n  max-width: 22.6429rem;\\n  line-height: 1.7857rem;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://toxin-hotel-website/./src/pages/colors-and-type/colors-and-type.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/form-elements/form-elements.scss":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/form-elements/form-elements.scss ***!
  \****************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".f-e-page {\\n  padding: 10rem 0 9.2857rem;\\n}\\n.f-e-page-logo {\\n  position: absolute;\\n  top: 2.1429rem;\\n  left: 50%;\\n  transform: translateX(-50%);\\n}\\n@media (min-width: 640px) {\\n  .f-e-page-logo {\\n    transform: translateX(0%);\\n    left: 1.0714rem;\\n  }\\n}\\n@media (min-width: 1440px) {\\n  .f-e-page-logo {\\n    left: 2.0714rem;\\n  }\\n}\\n.f-e-page-content {\\n  display: grid;\\n  justify-items: center;\\n  grid-row-gap: 20px;\\n}\\n@media (min-width: 480px) {\\n  .f-e-page-content {\\n    grid-template-columns: repeat(2, minmax(215px, auto));\\n    grid-column-gap: 10px;\\n  }\\n}\\n@media (min-width: 768px) {\\n  .f-e-page-content {\\n    grid-template-columns: repeat(3, minmax(239px, auto));\\n  }\\n}\\n@media (min-width: 1010px) {\\n  .f-e-page-content {\\n    grid-template-columns: repeat(3, 320px);\\n    justify-content: space-between;\\n  }\\n}\\n.f-e-page-column {\\n  max-width: 320px;\\n  min-height: 100px;\\n  background: #000;\\n  color: #FFF;\\n}\\n.f-e-page-column._type_reviews {\\n  max-width: 320px;\\n}\\n@media (min-width: 640px) {\\n  .f-e-page-column._type_reviews {\\n    max-width: 610px;\\n    grid-column-end: span 2;\\n  }\\n}\\n@media (min-width: 768px) {\\n  .f-e-page-column._type_reviews {\\n    max-width: 711px;\\n  }\\n}\\n@media (min-width: 1010px) {\\n  .f-e-page-column._type_reviews {\\n    justify-self: start;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://toxin-hotel-website/./src/pages/form-elements/form-elements.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/index/index.scss":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/index/index.scss ***!
  \************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".tr {\\n  text-decoration: none;\\n  display: block;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://toxin-hotel-website/./src/pages/index/index.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/uikit/headers-and-footers/headers-and-footers.scss":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/uikit/headers-and-footers/headers-and-footers.scss ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://toxin-hotel-website/./src/pages/uikit/headers-and-footers/headers-and-footers.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/uikit/uikit.scss":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/uikit/uikit.scss ***!
  \************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".main {\\n  display: flex;\\n  justify-content: space-around;\\n}\\n\\n.tt {\\n  width: 100px;\\n  height: 100px;\\n  width: 100px;\\n  height: 100px;\\n  background: #000;\\n  color: #fff;\\n  text-align: center;\\n  vertical-align: center;\\n}\\n.tt:last-child {\\n  order: -1;\\n}\\n.tt:nth-child(2) {\\n  order: -2;\\n}\\n\\n.grid {\\n  display: grid;\\n  grid-template-columns: auto;\\n  grid-template-columns: repeat(auto-fill, 100px);\\n  grid-template-rows: 200px repeat(auto-fill, 100px);\\n  margin: 20px;\\n  background: red;\\n}\\n\\n.rr {\\n  color: #fff;\\n  width: 20px;\\n  height: 20px;\\n  background: #000;\\n}\\n\\n#grid {\\n  margin: 20px;\\n  display: grid;\\n  height: 100px;\\n  grid-template-columns: repeat(6, 1fr);\\n  grid-template-rows: 100px;\\n}\\n\\n#item1 {\\n  background-color: lime;\\n}\\n\\n#item2 {\\n  background-color: yellow;\\n  grid-column: 2/4;\\n}\\n\\n#item3 {\\n  background-color: blue;\\n  grid-column: span 2/7;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://toxin-hotel-website/./src/pages/uikit/uikit.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/theme/scss/fonts.scss":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/theme/scss/fonts.scss ***!
  \***********************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fonts_montserrat_montserrat_v14_latin_cyrillic_700_woff2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fonts/montserrat/montserrat-v14-latin_cyrillic-700.woff2 */ \"./src/theme/fonts/montserrat/montserrat-v14-latin_cyrillic-700.woff2\");\n/* harmony import */ var _fonts_montserrat_montserrat_v14_latin_cyrillic_700_woff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fonts/montserrat/montserrat-v14-latin_cyrillic-700.woff */ \"./src/theme/fonts/montserrat/montserrat-v14-latin_cyrillic-700.woff\");\n/* harmony import */ var _fonts_montserrat_montserrat_v14_latin_cyrillic_regular_woff2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fonts/montserrat/montserrat-v14-latin_cyrillic-regular.woff2 */ \"./src/theme/fonts/montserrat/montserrat-v14-latin_cyrillic-regular.woff2\");\n/* harmony import */ var _fonts_montserrat_montserrat_v14_latin_cyrillic_regular_woff__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fonts/montserrat/montserrat-v14-latin_cyrillic-regular.woff */ \"./src/theme/fonts/montserrat/montserrat-v14-latin_cyrillic-regular.woff\");\n/* harmony import */ var _fonts_quicksand_quicksand_bold_woff__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../fonts/quicksand/quicksand-bold.woff */ \"./src/theme/fonts/quicksand/quicksand-bold.woff\");\n/* harmony import */ var _fonts_quicksand_quicksand_regular_woff__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../fonts/quicksand/quicksand-regular.woff */ \"./src/theme/fonts/quicksand/quicksand-regular.woff\");\n// Imports\n\n\n\n\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_montserrat_montserrat_v14_latin_cyrillic_700_woff2__WEBPACK_IMPORTED_MODULE_2__);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_montserrat_montserrat_v14_latin_cyrillic_700_woff__WEBPACK_IMPORTED_MODULE_3__);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_montserrat_montserrat_v14_latin_cyrillic_regular_woff2__WEBPACK_IMPORTED_MODULE_4__);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_montserrat_montserrat_v14_latin_cyrillic_regular_woff__WEBPACK_IMPORTED_MODULE_5__);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_quicksand_quicksand_bold_woff__WEBPACK_IMPORTED_MODULE_6__);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_quicksand_quicksand_regular_woff__WEBPACK_IMPORTED_MODULE_7__);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n  font-family: \\\"Montserrat\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format(\\\"woff2\\\"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format(\\\"woff\\\");\\n  font-weight: 700;\\n}\\n@font-face {\\n  font-family: \\\"Montserrat\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") format(\\\"woff2\\\"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \") format(\\\"woff\\\");\\n  font-weight: 400;\\n}\\n@font-face {\\n  font-family: \\\"Quicksand\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \") format(\\\"woff\\\");\\n  font-weight: 700;\\n}\\n@font-face {\\n  font-family: \\\"Quicksand\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_5___ + \") format(\\\"woff\\\");\\n  font-weight: 400;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://toxin-hotel-website/./src/theme/scss/fonts.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/theme/scss/global.scss":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/theme/scss/global.scss ***!
  \************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  box-sizing: border-box;\\n}\\n\\nhtml {\\n  background: #fff;\\n  font: 14px Montserrat, Arial, sans-serif;\\n  color: rgba(31, 32, 65, 0.75);\\n  scroll-behavior: smooth;\\n}\\n\\nbody {\\n  width: 100%;\\n  min-height: 100vh;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://toxin-hotel-website/./src/theme/scss/global.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/theme/scss/reset.scss":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/theme/scss/reset.scss ***!
  \***********************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  margin: 0;\\n  padding: 0;\\n}\\n\\na,\\na:hover {\\n  text-decoration: none;\\n}\\n\\nul {\\n  list-style-type: none;\\n}\\n\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\np,\\nul,\\nlabel,\\ninput {\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nimg {\\n  display: block;\\n  border: 0;\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\nbutton,\\ninput {\\n  cursor: pointer;\\n  border: none;\\n  padding: 0;\\n  background: transparent;\\n}\\n\\ntextarea,\\nbutton,\\ninput {\\n  outline: none;\\n}\\n\\n.none {\\n  display: none !important;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://toxin-hotel-website/./src/theme/scss/reset.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/theme/scss/variables.scss":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/theme/scss/variables.scss ***!
  \***************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://toxin-hotel-website/./src/theme/scss/variables.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://toxin-hotel-website/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://toxin-hotel-website/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/components/container/container.scss":
/*!*************************************************!*\
  !*** ./src/components/container/container.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_container_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js!./container.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/components/container/container.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_container_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_container_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://toxin-hotel-website/./src/components/container/container.scss?");

/***/ }),

/***/ "./src/components/dropdown/dropdown.scss":
/*!***********************************************!*\
  !*** ./src/components/dropdown/dropdown.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_dropdown_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js!./dropdown.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/components/dropdown/dropdown.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_dropdown_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_dropdown_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://toxin-hotel-website/./src/components/dropdown/dropdown.scss?");

/***/ }),

/***/ "./src/components/heading/heading.scss":
/*!*********************************************!*\
  !*** ./src/components/heading/heading.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_heading_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js!./heading.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/components/heading/heading.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_heading_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_heading_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://toxin-hotel-website/./src/components/heading/heading.scss?");

/***/ }),

/***/ "./src/pages/colors-and-type/colors-and-type.scss":
/*!********************************************************!*\
  !*** ./src/pages/colors-and-type/colors-and-type.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_colors_and_type_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js!./colors-and-type.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/colors-and-type/colors-and-type.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_colors_and_type_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_colors_and_type_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://toxin-hotel-website/./src/pages/colors-and-type/colors-and-type.scss?");

/***/ }),

/***/ "./src/pages/form-elements/form-elements.scss":
/*!****************************************************!*\
  !*** ./src/pages/form-elements/form-elements.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_form_elements_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js!./form-elements.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/form-elements/form-elements.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_form_elements_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_form_elements_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://toxin-hotel-website/./src/pages/form-elements/form-elements.scss?");

/***/ }),

/***/ "./src/pages/index/index.scss":
/*!************************************!*\
  !*** ./src/pages/index/index.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js!./index.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/index/index.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://toxin-hotel-website/./src/pages/index/index.scss?");

/***/ }),

/***/ "./src/pages/uikit/headers-and-footers/headers-and-footers.scss":
/*!**********************************************************************!*\
  !*** ./src/pages/uikit/headers-and-footers/headers-and-footers.scss ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_headers_and_footers_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/resolve-url-loader/index.js!../../../../node_modules/sass-loader/dist/cjs.js!./headers-and-footers.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/uikit/headers-and-footers/headers-and-footers.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_headers_and_footers_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_headers_and_footers_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://toxin-hotel-website/./src/pages/uikit/headers-and-footers/headers-and-footers.scss?");

/***/ }),

/***/ "./src/pages/uikit/uikit.scss":
/*!************************************!*\
  !*** ./src/pages/uikit/uikit.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_uikit_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js!./uikit.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/uikit/uikit.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_uikit_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_uikit_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://toxin-hotel-website/./src/pages/uikit/uikit.scss?");

/***/ }),

/***/ "./src/theme/scss/fonts.scss":
/*!***********************************!*\
  !*** ./src/theme/scss/fonts.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_fonts_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js!./fonts.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/theme/scss/fonts.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_fonts_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_fonts_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://toxin-hotel-website/./src/theme/scss/fonts.scss?");

/***/ }),

/***/ "./src/theme/scss/global.scss":
/*!************************************!*\
  !*** ./src/theme/scss/global.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_global_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js!./global.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/theme/scss/global.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_global_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_global_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://toxin-hotel-website/./src/theme/scss/global.scss?");

/***/ }),

/***/ "./src/theme/scss/reset.scss":
/*!***********************************!*\
  !*** ./src/theme/scss/reset.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_reset_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js!./reset.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/theme/scss/reset.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_reset_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_reset_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://toxin-hotel-website/./src/theme/scss/reset.scss?");

/***/ }),

/***/ "./src/theme/scss/variables.scss":
/*!***************************************!*\
  !*** ./src/theme/scss/variables.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_variables_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js!./variables.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js!./src/theme/scss/variables.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_variables_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_variables_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://toxin-hotel-website/./src/theme/scss/variables.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://toxin-hotel-website/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/components/button/img/header.png":
/*!**********************************************!*\
  !*** ./src/components/button/img/header.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/components/button/img/header.png\";\n\n//# sourceURL=webpack://toxin-hotel-website/./src/components/button/img/header.png?");

/***/ }),

/***/ "./src/components/button/img/logo.svg":
/*!********************************************!*\
  !*** ./src/components/button/img/logo.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/components/button/img/logo.svg\";\n\n//# sourceURL=webpack://toxin-hotel-website/./src/components/button/img/logo.svg?");

/***/ }),

/***/ "./src/components/dropdown/dropdown.js":
/*!*********************************************!*\
  !*** ./src/components/dropdown/dropdown.js ***!
  \*********************************************/
/***/ (() => {

eval("const select = document.querySelectorAll('.select');\n\nselect.forEach((i) => {\n  const selectInput = i.querySelector('.select__input');\n  const backdrop = i.querySelector('.select__backdrop');\n  const dropdown = i.querySelector('.select__dropdown');\n  // const textField = i.querySelector('.text-field')\n  const input = i.querySelector('.input');\n  const setInputWidth = i.querySelector('.set-input-width');\n  const hiddenSpan = setInputWidth.nextElementSibling;\n\n  const guests = i.getAttribute('data-type') === 'guests';\n  const roomsConfig = i.getAttribute('data-type') === 'rooms-config';\n  const checkboxList = i.getAttribute('data-type') === 'checkbox-list';\n//   const dates = i.getAttribute('data-type') === 'dates';\n\n  const roomsConfigTemplate = `\n                                <ul class=\"select__list\">\n                                    <li class=\"select__item\">\n                                        <span class=\"label-text\">спальни</span>\n                                        <div class=\"select__item-number\">   \n                                            <span class=\"label-text\">2</span>\n                                            <div class=\"select__item-minus\"> </div>\n                                            <div class=\"select__item-plus\">+</div>\n                                        </div>\n                                    </li>\n                                    <li class=\"select__item\">\n                                        <span class=\"label-text\">кровати</span>\n                                        <div class=\"select__item-number\">\n                                            <span class=\"label-text\">2</span>\n                                            <div class=\"select__item-minus\"> </div>\n                                            <div class=\"select__item-plus\">+</div>\n                                        </div>\n                                    </li>\n                                    <li class=\"select__item\">\n                                        <span class=\"label-text\">ванные комнаты</span>\n                                        <div class=\"select__item-number\">\n                                            <span class=\"label-text\">0</span>\n                                            <div class=\"select__item-minus\"> </div>\n                                            <div class=\"select__item-plus\">+</div>\n                                        </div>\n                                    </li>\n                                </ul>\n                            `;\n  const guestsTemplate = `\n                            <ul class=\"select__list\">\n                                <li class=\"select__item\">\n                                    <span class=\"label-text\">взрослые</span>\n                                    <div class=\"select__item-number\">\n                                        <span class=\"label-text\">0</span>\n                                        <div class=\"select__item-minus\"></div>\n                                        <div class=\"select__item-plus\">+</div>\n                                    </div>\n                                </li>\n                                <li class=\"select__item\">\n                                    <span class=\"label-text\">дети</span>\n                                    <div class=\"select__item-number\">\n                                        <span class=\"label-text\">0</span>\n                                        <div class=\"select__item-minus\"></div>\n                                        <div class=\"select__item-plus\">+</div>\n                                    </div>\n                                </li>\n                                <li class=\"select__item\">\n                                    <span class=\"label-text\">младенцы</span>\n                                    <div class=\"select__item-number\">\n                                        <span class=\"label-text\">0</span>\n                                        <div class=\"select__item-minus\"></div>\n                                        <div class=\"select__item-plus\">+</div>\n                                    </div>\n                                </li>\n                            </ul>\n                            <div class=\"select__apply-wrap\">\n                                <span class=\"select__clear\">очистить</span>\n                                <span class=\"select__apply\">применить</span>\n                                </div>\n                            `;\n  const textForms1 = ['спальня', 'спальни', 'спален'];\n  const textForms2 = ['кровать', 'кровати', 'кроватей'];\n  const textForms3 = ['ванная комната', 'ванные комнаты', 'ванных комнат'];\n  const textForms4 = ['гость', 'гостя', 'гостей'];\n\n  input.setAttribute('readonly', '');\n\n  if (roomsConfig) {\n    dropdown.innerHTML = roomsConfigTemplate;\n    input.value = '2 спальни, 2 кровати';\n    setInputWidth.style.display = 'block';\n    setInputWidth.textContent = input.value;\n    setTimeout(() => {\n      input.style.width = `${setInputWidth.offsetWidth}px`;\n      hiddenSpan.style.display = 'block';\n    }, 500);\n    showHidden(dropdownSum());\n  } else if (guests) {\n    dropdown.style.paddingBottom = '0px';\n    dropdown.innerHTML = guestsTemplate;\n    input.value = 'Сколько гостей';\n    applyChanges();\n    clearValues();\n    showHidden(dropdownSum());\n  } else if (checkboxList) {\n    input.closest('.text-field').classList.add('border-none');\n    input.classList.add('border-none-text');\n    dropdown.classList.add('border-none');\n  }\n\n  // else if (dates) {\n  //     textField.style.width = \"150px\"\n  //     input.value = 'ДД.ММ.ГГГГ'\n  //     dropdown.style.display = 'none'\n  // }\n\n  selectInput.addEventListener('click', () => {\n    i.classList.toggle('open');\n  });\n\n  backdrop.addEventListener('click', () => {\n    i.classList.remove('open');\n  });\n\n  dropdown.addEventListener('click', (event) => {\n    increaseOrDecreaseSum(event);\n    showHidden(dropdownSum());\n\n    if (roomsConfig) {\n      const arr = dropdown.querySelectorAll('.select__item-number');\n      const num1 = arr[0].children[0].textContent;\n      const num2 = arr[1].children[0].textContent;\n      const num3 = arr[2].children[0].textContent;\n\n      const array = `${num1} ${declOfNum(parseInt(num1), textForms1)}, ${num2} ${declOfNum(parseInt(num2), textForms2)}, ${num3} ${declOfNum(parseInt(num3), textForms3)}`.split(',');\n      input.value = `${array[0]}, ${array[1]}`;\n      setInputWidth.textContent = input.value;\n      input.style.width = `${setInputWidth.offsetWidth}px`;\n    } else if (guests) {\n      if (dropdownSum() > 0) {\n        input.value = `${dropdownSum()} ${declOfNum(dropdownSum(), textForms4)}`;\n      } else {\n        input.value = 'Сколько гостей';\n      }\n    }\n  });\n\n  function increaseOrDecreaseSum(event) {\n    const e = event.target;\n    if (e.matches('.select__item-minus') || e.matches('.select__item-plus')) {\n      let count = e.closest('.select__item-number').querySelector('.label-text').textContent;\n      if (e.matches('.select__item-minus')) {\n        count = parseInt(count, 10) - 1;\n        e.closest('.select__item-number').querySelector('.label-text').textContent = count;\n      } else {\n        count = parseInt(count) + 1;\n        e.closest('.select__item-number').querySelector('.label-text').textContent = count;\n      }\n    }\n  }\n\n  function dropdownSum() {\n    let num = 0;\n    const arr = dropdown.querySelectorAll('.select__item-number');\n    arr.forEach((i) => {\n      num += parseInt(i.querySelector('.label-text').textContent);\n    });\n    return num;\n  }\n\n  function showHidden(num) {\n    const arr = dropdown.querySelectorAll('.select__item-number');\n    arr.forEach((i) => {\n      const number = i.querySelector('.label-text');\n      const minus = i.querySelector('.select__item-minus');\n      parseInt(number.textContent) > 0 ? minus.style.display = 'flex' : minus.style.display = 'none';\n      if (i.previousElementSibling.textContent === 'спальни'\n                || i.previousElementSibling.textContent === 'кровати') {\n        parseInt(number.textContent) > 1 ? minus.style.display = 'flex' : minus.style.display = 'none';\n      }\n    });\n\n    if (guests) {\n      const clear = dropdown.querySelector('.select__clear');\n      num > 0 ? clear.style.display = 'block' : clear.style.display = 'none';\n    }\n  }\n\n  function applyChanges() {\n    const apply = dropdown.querySelector('.select__apply');\n    apply.addEventListener('click', () => {\n      if (dropdownSum() > 0) i.classList.remove('open');\n    });\n  }\n\n  function clearValues() {\n    const clear = dropdown.querySelector('.select__clear');\n    clear.addEventListener('click', () => {\n      const arr = dropdown.querySelectorAll('.select__item-number');\n      arr.forEach((i) => {\n        i.querySelector('.label-text').textContent = 0;\n      });\n    });\n  }\n\n  function declOfNum(n, textForms) {\n    n %= 100;\n    const n1 = n % 10;\n\n    if (n > 10 && n < 20) return textForms[2];\n    if (n1 > 1 && n1 < 5) return textForms[1];\n    if (n1 == 1) return textForms[0];\n    return textForms[2];\n  }\n});\n\n\n//# sourceURL=webpack://toxin-hotel-website/./src/components/dropdown/dropdown.js?");

/***/ }),

/***/ "./src/components/dropdown/img/include.jpg":
/*!*************************************************!*\
  !*** ./src/components/dropdown/img/include.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/components/dropdown/img/include.jpg\";\n\n//# sourceURL=webpack://toxin-hotel-website/./src/components/dropdown/img/include.jpg?");

/***/ }),

/***/ "./src/components sync recursive \\.(png|jpg|svg|gif|js|scss)$":
/*!***********************************************************!*\
  !*** ./src/components/ sync \.(png|jpg|svg|gif|js|scss)$ ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./button/img/header.png\": \"./src/components/button/img/header.png\",\n\t\"./button/img/logo.svg\": \"./src/components/button/img/logo.svg\",\n\t\"./container/container.scss\": \"./src/components/container/container.scss\",\n\t\"./dropdown/dropdown.js\": \"./src/components/dropdown/dropdown.js\",\n\t\"./dropdown/dropdown.scss\": \"./src/components/dropdown/dropdown.scss\",\n\t\"./dropdown/img/include.jpg\": \"./src/components/dropdown/img/include.jpg\",\n\t\"./heading/heading.scss\": \"./src/components/heading/heading.scss\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/components sync recursive \\\\.(png|jpg|svg|gif|js|scss)$\";\n\n//# sourceURL=webpack://toxin-hotel-website/./src/components/_sync_\\.(png%7Cjpg%7Csvg%7Cgif%7Cjs%7Cscss)$?");

/***/ }),

/***/ "./src/pages/index/index.js":
/*!**********************************!*\
  !*** ./src/pages/index/index.js ***!
  \**********************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://toxin-hotel-website/./src/pages/index/index.js?");

/***/ }),

/***/ "./src/pages/uikit/uikit.js":
/*!**********************************!*\
  !*** ./src/pages/uikit/uikit.js ***!
  \**********************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://toxin-hotel-website/./src/pages/uikit/uikit.js?");

/***/ }),

/***/ "./src/pages sync recursive \\.(js|scss)$":
/*!**************************************!*\
  !*** ./src/pages/ sync \.(js|scss)$ ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./colors-and-type/colors-and-type.scss\": \"./src/pages/colors-and-type/colors-and-type.scss\",\n\t\"./form-elements/form-elements.scss\": \"./src/pages/form-elements/form-elements.scss\",\n\t\"./index/index.js\": \"./src/pages/index/index.js\",\n\t\"./index/index.scss\": \"./src/pages/index/index.scss\",\n\t\"./uikit/headers-and-footers/headers-and-footers.scss\": \"./src/pages/uikit/headers-and-footers/headers-and-footers.scss\",\n\t\"./uikit/uikit.js\": \"./src/pages/uikit/uikit.js\",\n\t\"./uikit/uikit.scss\": \"./src/pages/uikit/uikit.scss\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/pages sync recursive \\\\.(js|scss)$\";\n\n//# sourceURL=webpack://toxin-hotel-website/./src/pages/_sync_\\.(js%7Cscss)$?");

/***/ }),

/***/ "./src/theme/favicons/android-chrome-192x192.png":
/*!*******************************************************!*\
  !*** ./src/theme/favicons/android-chrome-192x192.png ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/theme/favicons/android-chrome-192x192.png\";\n\n//# sourceURL=webpack://toxin-hotel-website/./src/theme/favicons/android-chrome-192x192.png?");

/***/ }),

/***/ "./src/theme/favicons/apple-touch-icon.png":
/*!*************************************************!*\
  !*** ./src/theme/favicons/apple-touch-icon.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/theme/favicons/apple-touch-icon.png\";\n\n//# sourceURL=webpack://toxin-hotel-website/./src/theme/favicons/apple-touch-icon.png?");

/***/ }),

/***/ "./src/theme/favicons/favicon.ico":
/*!****************************************!*\
  !*** ./src/theme/favicons/favicon.ico ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/theme/favicons/favicon.ico\";\n\n//# sourceURL=webpack://toxin-hotel-website/./src/theme/favicons/favicon.ico?");

/***/ }),

/***/ "./src/theme/favicons/favicon.svg":
/*!****************************************!*\
  !*** ./src/theme/favicons/favicon.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/theme/favicons/favicon.svg\";\n\n//# sourceURL=webpack://toxin-hotel-website/./src/theme/favicons/favicon.svg?");

/***/ }),

/***/ "./src/theme/favicons/icon-16x16.png":
/*!*******************************************!*\
  !*** ./src/theme/favicons/icon-16x16.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/theme/favicons/icon-16x16.png\";\n\n//# sourceURL=webpack://toxin-hotel-website/./src/theme/favicons/icon-16x16.png?");

/***/ }),

/***/ "./src/theme/favicons/icon-32x32.png":
/*!*******************************************!*\
  !*** ./src/theme/favicons/icon-32x32.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/theme/favicons/icon-32x32.png\";\n\n//# sourceURL=webpack://toxin-hotel-website/./src/theme/favicons/icon-32x32.png?");

/***/ }),

/***/ "./src/theme/favicons/mstile-150x150.png":
/*!***********************************************!*\
  !*** ./src/theme/favicons/mstile-150x150.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/theme/favicons/mstile-150x150.png\";\n\n//# sourceURL=webpack://toxin-hotel-website/./src/theme/favicons/mstile-150x150.png?");

/***/ }),

/***/ "./src/theme/favicons/safari-pinned-tab.svg":
/*!**************************************************!*\
  !*** ./src/theme/favicons/safari-pinned-tab.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/theme/favicons/safari-pinned-tab.svg\";\n\n//# sourceURL=webpack://toxin-hotel-website/./src/theme/favicons/safari-pinned-tab.svg?");

/***/ }),

/***/ "./src/theme/favicons/site.webmanifest":
/*!*********************************************!*\
  !*** ./src/theme/favicons/site.webmanifest ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/theme/favicons/site.webmanifest\";\n\n//# sourceURL=webpack://toxin-hotel-website/./src/theme/favicons/site.webmanifest?");

/***/ }),

/***/ "./src/theme/fonts/montserrat/montserrat-v14-latin_cyrillic-700.woff":
/*!***************************************************************************!*\
  !*** ./src/theme/fonts/montserrat/montserrat-v14-latin_cyrillic-700.woff ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/theme/fonts/montserrat/montserrat-v14-latin_cyrillic-700.woff\";\n\n//# sourceURL=webpack://toxin-hotel-website/./src/theme/fonts/montserrat/montserrat-v14-latin_cyrillic-700.woff?");

/***/ }),

/***/ "./src/theme/fonts/montserrat/montserrat-v14-latin_cyrillic-700.woff2":
/*!****************************************************************************!*\
  !*** ./src/theme/fonts/montserrat/montserrat-v14-latin_cyrillic-700.woff2 ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/theme/fonts/montserrat/montserrat-v14-latin_cyrillic-700.woff2\";\n\n//# sourceURL=webpack://toxin-hotel-website/./src/theme/fonts/montserrat/montserrat-v14-latin_cyrillic-700.woff2?");

/***/ }),

/***/ "./src/theme/fonts/montserrat/montserrat-v14-latin_cyrillic-regular.woff":
/*!*******************************************************************************!*\
  !*** ./src/theme/fonts/montserrat/montserrat-v14-latin_cyrillic-regular.woff ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/theme/fonts/montserrat/montserrat-v14-latin_cyrillic-regular.woff\";\n\n//# sourceURL=webpack://toxin-hotel-website/./src/theme/fonts/montserrat/montserrat-v14-latin_cyrillic-regular.woff?");

/***/ }),

/***/ "./src/theme/fonts/montserrat/montserrat-v14-latin_cyrillic-regular.woff2":
/*!********************************************************************************!*\
  !*** ./src/theme/fonts/montserrat/montserrat-v14-latin_cyrillic-regular.woff2 ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/theme/fonts/montserrat/montserrat-v14-latin_cyrillic-regular.woff2\";\n\n//# sourceURL=webpack://toxin-hotel-website/./src/theme/fonts/montserrat/montserrat-v14-latin_cyrillic-regular.woff2?");

/***/ }),

/***/ "./src/theme/fonts/quicksand/quicksand-bold.woff":
/*!*******************************************************!*\
  !*** ./src/theme/fonts/quicksand/quicksand-bold.woff ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/theme/fonts/quicksand/quicksand-bold.woff\";\n\n//# sourceURL=webpack://toxin-hotel-website/./src/theme/fonts/quicksand/quicksand-bold.woff?");

/***/ }),

/***/ "./src/theme/fonts/quicksand/quicksand-regular.woff":
/*!**********************************************************!*\
  !*** ./src/theme/fonts/quicksand/quicksand-regular.woff ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/theme/fonts/quicksand/quicksand-regular.woff\";\n\n//# sourceURL=webpack://toxin-hotel-website/./src/theme/fonts/quicksand/quicksand-regular.woff?");

/***/ }),

/***/ "./src/theme sync recursive \\.(scss|png|svg|ico|webmanifest)$":
/*!***********************************************************!*\
  !*** ./src/theme/ sync \.(scss|png|svg|ico|webmanifest)$ ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./favicons/android-chrome-192x192.png\": \"./src/theme/favicons/android-chrome-192x192.png\",\n\t\"./favicons/apple-touch-icon.png\": \"./src/theme/favicons/apple-touch-icon.png\",\n\t\"./favicons/favicon.ico\": \"./src/theme/favicons/favicon.ico\",\n\t\"./favicons/favicon.svg\": \"./src/theme/favicons/favicon.svg\",\n\t\"./favicons/icon-16x16.png\": \"./src/theme/favicons/icon-16x16.png\",\n\t\"./favicons/icon-32x32.png\": \"./src/theme/favicons/icon-32x32.png\",\n\t\"./favicons/mstile-150x150.png\": \"./src/theme/favicons/mstile-150x150.png\",\n\t\"./favicons/safari-pinned-tab.svg\": \"./src/theme/favicons/safari-pinned-tab.svg\",\n\t\"./favicons/site.webmanifest\": \"./src/theme/favicons/site.webmanifest\",\n\t\"./scss/fonts.scss\": \"./src/theme/scss/fonts.scss\",\n\t\"./scss/global.scss\": \"./src/theme/scss/global.scss\",\n\t\"./scss/reset.scss\": \"./src/theme/scss/reset.scss\",\n\t\"./scss/variables.scss\": \"./src/theme/scss/variables.scss\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/theme sync recursive \\\\.(scss|png|svg|ico|webmanifest)$\";\n\n//# sourceURL=webpack://toxin-hotel-website/./src/theme/_sync_\\.(scss%7Cpng%7Csvg%7Cico%7Cwebmanifest)$?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
(() => {
/*!**********************!*\
  !*** ./src/entry.js ***!
  \**********************/
eval("function requireAll(requireContext) {\r\n    return requireContext.keys().map(requireContext);\r\n}\r\n\r\nrequireAll(__webpack_require__(\"./src/components sync recursive \\\\.(png|jpg|svg|gif|js|scss)$\"));\r\nrequireAll(__webpack_require__(\"./src/pages sync recursive \\\\.(js|scss)$\"));\r\nrequireAll(__webpack_require__(\"./src/theme sync recursive \\\\.(scss|png|svg|ico|webmanifest)$\"));\n\n//# sourceURL=webpack://toxin-hotel-website/./src/entry.js?");
})();

/******/ })()
;