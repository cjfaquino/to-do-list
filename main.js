/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/editTodo.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/editTodo.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".edits {\n  height: 100vh;\n  width: 100vw;\n  z-index: 10;\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(180, 180, 180, 0.397);\n}\n\n.editInputs {\n  z-index: 20;\n  padding: 20px;\n  background-color: white;\n  border: 2px solid black;\n  border-radius: 5px;\n  height: 250px;\n  width: 500px;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  font-size: 1.1rem;\n}\n\n.editInputs button {\n  padding: 5px;\n  width: 80px;\n}\n\n#editName,\n#editDesc {\n  margin-bottom: 10px;\n  border: 1px solid black;\n  border-radius: 2px;\n  padding: 5px;\n  font-size: .8rem;\n}\n\n#editName {\n  width: 100%;\n}\n\n#editDesc {\n  height: 80px;\n  width: 100%;\n}\n\n#editAccept {\n  margin-left: auto;\n}\n\n.newInputs {\n  margin-left: 30px;\n  padding: 10px;\n  width: min(500px, 100%);\n}\n\n.newName,\n.newDesc {\n  border: 1px solid grey;\n  border-radius: 3px;\n  padding: 5px;\n}\n\n.newName {\n  width: 100%;\n  font-size: 1rem;\n  margin-bottom: 10px;\n}\n\n.newDesc {\n  display: block;\n  width: 100%;\n  height: 100px;\n  font-size: 1rem;\n  margin-bottom: 10px;\n}\n\n.newDate {\n  padding: 3px;\n  font-size: .9rem;\n  display: flex;\n  align-items: center;\n}\n\n.newInputBottom {\n  display: flex;\n  align-items: center;\n}\n\n.confirmNew,\n.cancelNew {\n  font-size: .9rem;\n}\n\n.confirmNew {\n  margin-left: auto;\n  margin-right: 10px;\n}", "",{"version":3,"sources":["webpack://./src/components/editTodo.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,4CAA4C;AAC9C;;AAEA;EACE,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,uBAAuB;EACvB,kBAAkB;EAClB,aAAa;EACb,YAAY;EACZ,aAAa;EACb,eAAe;EACf,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;;EAEE,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,uBAAuB;AACzB;;AAEA;;EAEE,sBAAsB;EACtB,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,WAAW;EACX,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,aAAa;EACb,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,gBAAgB;EAChB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;AACpB","sourcesContent":[".edits {\n  height: 100vh;\n  width: 100vw;\n  z-index: 10;\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(180, 180, 180, 0.397);\n}\n\n.editInputs {\n  z-index: 20;\n  padding: 20px;\n  background-color: white;\n  border: 2px solid black;\n  border-radius: 5px;\n  height: 250px;\n  width: 500px;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  font-size: 1.1rem;\n}\n\n.editInputs button {\n  padding: 5px;\n  width: 80px;\n}\n\n#editName,\n#editDesc {\n  margin-bottom: 10px;\n  border: 1px solid black;\n  border-radius: 2px;\n  padding: 5px;\n  font-size: .8rem;\n}\n\n#editName {\n  width: 100%;\n}\n\n#editDesc {\n  height: 80px;\n  width: 100%;\n}\n\n#editAccept {\n  margin-left: auto;\n}\n\n.newInputs {\n  margin-left: 30px;\n  padding: 10px;\n  width: min(500px, 100%);\n}\n\n.newName,\n.newDesc {\n  border: 1px solid grey;\n  border-radius: 3px;\n  padding: 5px;\n}\n\n.newName {\n  width: 100%;\n  font-size: 1rem;\n  margin-bottom: 10px;\n}\n\n.newDesc {\n  display: block;\n  width: 100%;\n  height: 100px;\n  font-size: 1rem;\n  margin-bottom: 10px;\n}\n\n.newDate {\n  padding: 3px;\n  font-size: .9rem;\n  display: flex;\n  align-items: center;\n}\n\n.newInputBottom {\n  display: flex;\n  align-items: center;\n}\n\n.confirmNew,\n.cancelNew {\n  font-size: .9rem;\n}\n\n.confirmNew {\n  margin-left: auto;\n  margin-right: 10px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/notes.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/notes.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".newNote {\n  margin-left: 20px;\n}\n\nmain[data-list='NotesSection'] .listView {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.noteItem {\n  width: 220px;\n  height: 240px;\n}\n\n.noteItem:nth-child(even) {\n  transform: rotate(4deg);\n  position: relative;\n  top: 5px;\n}\n\n.noteItem:nth-child(3n) {\n  transform: rotate(-3deg);\n  position: relative;\n  top: -5px;\n}\n\n.noteItem:nth-child(5n) {\n  transform: rotate(5deg);\n  position: relative;\n  top: -10px;\n}\n\n.noteText {\n  border: none;\n  padding: 20px;\n  height: 100%;\n  width: 100%;\n  font-size: 1.3rem;\n  font-weight: 400;\n  border: 1px solid #E8E8E8;\n  background: #ffff88;\n  /* Old browsers */\n  background: -moz-linear-gradient(-45deg, #ffff88 81%, #ffff88 82%, #ffff88 82%, #ffffc6 100%);\n  /* FF3.6+ */\n  background: -webkit-gradient(linear, left top, right bottom, color-stop(81%, #ffff88), color-stop(82%, #ffff88), color-stop(82%, #ffff88), color-stop(100%, #ffffc6));\n  /* Chrome,Safari4+ */\n  background: -webkit-linear-gradient(-45deg, #ffff88 81%, #ffff88 82%, #ffff88 82%, #ffffc6 100%);\n  /* Chrome10+,Safari5.1+ */\n  background: -o-linear-gradient(-45deg, #ffff88 81%, #ffff88 82%, #ffff88 82%, #ffffc6 100%);\n  /* Opera 11.10+ */\n  background: -ms-linear-gradient(-45deg, #ffff88 81%, #ffff88 82%, #ffff88 82%, #ffffc6 100%);\n  /* IE10+ */\n  background: linear-gradient(135deg, #ffff88 81%, #ffff88 82%, #ffff88 82%, #ffffc6 100%);\n  /* W3C */\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffff88', endColorstr='#ffffc6', GradientType=1);\n  /* IE6-9 fallback on horizontal gradient */\n  border-bottom-right-radius: 60px 10px;\n}\n\n.noteText:focus {\n  outline: none !important;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;\n  transition: box-shadow .3s;\n}\n\n.deleteNote {\n  position: relative;\n  top: -238px;\n  right: -193px;\n  width: fit-content;\n  z-index: 10;\n  color: rgb(179, 179, 179);\n}\n\n.deleteNote:hover {\n  color: red;\n  transition: color .3s;\n}", "",{"version":3,"sources":["webpack://./src/components/notes.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,uBAAuB;EACvB,kBAAkB;EAClB,QAAQ;AACV;;AAEA;EACE,wBAAwB;EACxB,kBAAkB;EAClB,SAAS;AACX;;AAEA;EACE,uBAAuB;EACvB,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,WAAW;EACX,iBAAiB;EACjB,gBAAgB;EAChB,yBAAyB;EACzB,mBAAmB;EACnB,iBAAiB;EACjB,6FAA6F;EAC7F,WAAW;EACX,qKAAqK;EACrK,oBAAoB;EACpB,gGAAgG;EAChG,yBAAyB;EACzB,2FAA2F;EAC3F,iBAAiB;EACjB,4FAA4F;EAC5F,UAAU;EACV,wFAAwF;EACxF,QAAQ;EACR,kHAAkH;EAClH,0CAA0C;EAC1C,qCAAqC;AACvC;;AAEA;EACE,wBAAwB;EACxB,2CAA2C;EAC3C,2CAA2C;EAC3C,0BAA0B;AAC5B;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,aAAa;EACb,kBAAkB;EAClB,WAAW;EACX,yBAAyB;AAC3B;;AAEA;EACE,UAAU;EACV,qBAAqB;AACvB","sourcesContent":[".newNote {\n  margin-left: 20px;\n}\n\nmain[data-list='NotesSection'] .listView {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.noteItem {\n  width: 220px;\n  height: 240px;\n}\n\n.noteItem:nth-child(even) {\n  transform: rotate(4deg);\n  position: relative;\n  top: 5px;\n}\n\n.noteItem:nth-child(3n) {\n  transform: rotate(-3deg);\n  position: relative;\n  top: -5px;\n}\n\n.noteItem:nth-child(5n) {\n  transform: rotate(5deg);\n  position: relative;\n  top: -10px;\n}\n\n.noteText {\n  border: none;\n  padding: 20px;\n  height: 100%;\n  width: 100%;\n  font-size: 1.3rem;\n  font-weight: 400;\n  border: 1px solid #E8E8E8;\n  background: #ffff88;\n  /* Old browsers */\n  background: -moz-linear-gradient(-45deg, #ffff88 81%, #ffff88 82%, #ffff88 82%, #ffffc6 100%);\n  /* FF3.6+ */\n  background: -webkit-gradient(linear, left top, right bottom, color-stop(81%, #ffff88), color-stop(82%, #ffff88), color-stop(82%, #ffff88), color-stop(100%, #ffffc6));\n  /* Chrome,Safari4+ */\n  background: -webkit-linear-gradient(-45deg, #ffff88 81%, #ffff88 82%, #ffff88 82%, #ffffc6 100%);\n  /* Chrome10+,Safari5.1+ */\n  background: -o-linear-gradient(-45deg, #ffff88 81%, #ffff88 82%, #ffff88 82%, #ffffc6 100%);\n  /* Opera 11.10+ */\n  background: -ms-linear-gradient(-45deg, #ffff88 81%, #ffff88 82%, #ffff88 82%, #ffffc6 100%);\n  /* IE10+ */\n  background: linear-gradient(135deg, #ffff88 81%, #ffff88 82%, #ffff88 82%, #ffffc6 100%);\n  /* W3C */\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffff88', endColorstr='#ffffc6', GradientType=1);\n  /* IE6-9 fallback on horizontal gradient */\n  border-bottom-right-radius: 60px 10px;\n}\n\n.noteText:focus {\n  outline: none !important;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;\n  transition: box-shadow .3s;\n}\n\n.deleteNote {\n  position: relative;\n  top: -238px;\n  right: -193px;\n  width: fit-content;\n  z-index: 10;\n  color: rgb(179, 179, 179);\n}\n\n.deleteNote:hover {\n  color: red;\n  transition: color .3s;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/sidebar.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/sidebar.css ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".sidebar {\n  padding: 30px 30px 30px 0;\n  grid-area: sidebar;\n  font-size: 1.3rem;\n  font-weight: 500;\n  height: 100%;\n  background-color: white;\n  border-top-left-radius: var(--main-border-radius);\n}\n\n.sidebar li {\n  margin-top: 10px;\n  padding: var(--sidebar-padding);\n}\n\n#projectsList {\n  padding: 0;\n}\n\n#notes {\n  margin-top: 50px;\n}\n\n.projects {\n  padding: var(--sidebar-padding);\n  display: flex;\n  margin-bottom: 10px;\n  align-items: center;\n}\n\n.projectsBtn {\n  margin-left: 10px;\n}\n\n.projectItem {\n  display: grid;\n  grid-template-columns: 22px 130px 30px;\n  grid-template-rows: 22px;\n  font-size: 1rem;\n  font-weight: 300;\n  padding-left: var(--sidebar-padding);\n}\n\n.projectName {\n  align-self: center;\n  padding: 8px 5px !important;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.projectLength {\n  font-size: .8rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--main-color);\n  background-color: rgb(245, 245, 245);\n  border-radius: 50%;\n}", "",{"version":3,"sources":["webpack://./src/components/sidebar.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,iBAAiB;EACjB,gBAAgB;EAChB,YAAY;EACZ,uBAAuB;EACvB,iDAAiD;AACnD;;AAEA;EACE,gBAAgB;EAChB,+BAA+B;AACjC;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,+BAA+B;EAC/B,aAAa;EACb,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,wBAAwB;EACxB,eAAe;EACf,gBAAgB;EAChB,oCAAoC;AACtC;;AAEA;EACE,kBAAkB;EAClB,2BAA2B;EAC3B,gBAAgB;EAChB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,wBAAwB;EACxB,oCAAoC;EACpC,kBAAkB;AACpB","sourcesContent":[".sidebar {\n  padding: 30px 30px 30px 0;\n  grid-area: sidebar;\n  font-size: 1.3rem;\n  font-weight: 500;\n  height: 100%;\n  background-color: white;\n  border-top-left-radius: var(--main-border-radius);\n}\n\n.sidebar li {\n  margin-top: 10px;\n  padding: var(--sidebar-padding);\n}\n\n#projectsList {\n  padding: 0;\n}\n\n#notes {\n  margin-top: 50px;\n}\n\n.projects {\n  padding: var(--sidebar-padding);\n  display: flex;\n  margin-bottom: 10px;\n  align-items: center;\n}\n\n.projectsBtn {\n  margin-left: 10px;\n}\n\n.projectItem {\n  display: grid;\n  grid-template-columns: 22px 130px 30px;\n  grid-template-rows: 22px;\n  font-size: 1rem;\n  font-weight: 300;\n  padding-left: var(--sidebar-padding);\n}\n\n.projectName {\n  align-self: center;\n  padding: 8px 5px !important;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.projectLength {\n  font-size: .8rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--main-color);\n  background-color: rgb(245, 245, 245);\n  border-radius: 50%;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/todoList.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/todoList.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".list {\n  padding: 0 20px;\n  grid-area: list;\n  width: 100%;\n  height: 100%;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-top-right-radius: var(--main-border-radius);\n}\n\n.topRow,\n.listView {\n  width: max(500px, 100%);\n  background-color: white;\n}\n\n.topRow {\n  display: flex;\n  align-items: center;\n  padding-bottom: 15px;\n  padding-top: 20px;\n  border-top-right-radius: var(--main-border-radius);\n}\n\n.listTitle {\n  margin-left: 40px;\n}\n\n.listBtn {\n  margin-left: 20px;\n}\n\n.dueDate {\n  margin-left: auto;\n  margin-right: 95px;\n}\n\n\n.todo {\n  margin: 5px 0;\n  display: grid;\n  grid-template-columns: 15px 1fr 110px 25px 30px;\n  align-items: center;\n  font-size: 1rem;\n  padding: 0 15px;\n  border-radius: 20px;\n}\n\n.todo:hover {\n  background-color: var(--sub-color);\n  transition: all 0.5s ease-out;\n}\n\n/* .todo:nth-child(even){\n  background-color: rgb(250, 250, 250);\n} */\n\n.todoName {\n  padding: 10px 10px;\n}\n\n.todoDesc {\n  grid-column: 2 / span 4;\n  font-size: .8rem;\n  padding: 10px 20px 20px 20px;\n}\n\n.todoDate {\n  font-size: .8rem;\n  color: var(--main-color);\n}\n\n.sortDate {\n  color: var(--main-color);\n}\n\n.delProject,\n.delTodo,\n.editTodo {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: rgb(0, 0, 0, .2);\n}\n\n.delProject:hover,\n.delTodo:hover {\n  color: red;\n  transition: color 0.5s ease;\n}\n\n.editTodo:hover {\n  color: rgba(0, 0, 0, 0.5);\n  transition: color 0.5s ease;\n}\n\n/* Remove default checkbox styles */\ninput[type=\"checkbox\"] {\n  /* Add if not using autoprefixer */\n  -webkit-appearance: none;\n  appearance: none;\n  /* For iOS < 15 to remove gradient background */\n  background-color: #fff;\n  /* Not removed via appearance */\n  margin: 0;\n}\n\ninput[type=\"checkbox\"] {\n  appearance: none;\n  background-color: #fff;\n  margin: 0;\n  font: inherit;\n  color: grey;\n  width: .9rem;\n  height: .9rem;\n  border: 0.1rem solid grey;\n  border-radius: 0.15em;\n  transform: translateY(-0.075em);\n  display: grid;\n  place-content: center;\n}\n\ninput[type=\"checkbox\"]::before {\n  content: \"\";\n  width: 0.65rem;\n  height: 0.65rem;\n  transform: scale(0);\n  transition: 120ms transform ease-in-out;\n  /* Checked color */\n  box-shadow: inset 1em 1em rgb(228, 228, 228);\n}\n\ninput[type=\"checkbox\"]:checked::before {\n  transform: scale(1);\n}", "",{"version":3,"sources":["webpack://./src/components/todoList.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,eAAe;EACf,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,kDAAkD;AACpD;;AAEA;;EAEE,uBAAuB;EACvB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,oBAAoB;EACpB,iBAAiB;EACjB,kDAAkD;AACpD;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;;;AAGA;EACE,aAAa;EACb,aAAa;EACb,+CAA+C;EAC/C,mBAAmB;EACnB,eAAe;EACf,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,kCAAkC;EAClC,6BAA6B;AAC/B;;AAEA;;GAEG;;AAEH;EACE,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;EACvB,gBAAgB;EAChB,4BAA4B;AAC9B;;AAEA;EACE,gBAAgB;EAChB,wBAAwB;AAC1B;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;;;EAGE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,uBAAuB;AACzB;;AAEA;;EAEE,UAAU;EACV,2BAA2B;AAC7B;;AAEA;EACE,yBAAyB;EACzB,2BAA2B;AAC7B;;AAEA,mCAAmC;AACnC;EACE,kCAAkC;EAClC,wBAAwB;EACxB,gBAAgB;EAChB,+CAA+C;EAC/C,sBAAsB;EACtB,+BAA+B;EAC/B,SAAS;AACX;;AAEA;EACE,gBAAgB;EAChB,sBAAsB;EACtB,SAAS;EACT,aAAa;EACb,WAAW;EACX,YAAY;EACZ,aAAa;EACb,yBAAyB;EACzB,qBAAqB;EACrB,+BAA+B;EAC/B,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,cAAc;EACd,eAAe;EACf,mBAAmB;EACnB,uCAAuC;EACvC,kBAAkB;EAClB,4CAA4C;AAC9C;;AAEA;EACE,mBAAmB;AACrB","sourcesContent":[".list {\n  padding: 0 20px;\n  grid-area: list;\n  width: 100%;\n  height: 100%;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-top-right-radius: var(--main-border-radius);\n}\n\n.topRow,\n.listView {\n  width: max(500px, 100%);\n  background-color: white;\n}\n\n.topRow {\n  display: flex;\n  align-items: center;\n  padding-bottom: 15px;\n  padding-top: 20px;\n  border-top-right-radius: var(--main-border-radius);\n}\n\n.listTitle {\n  margin-left: 40px;\n}\n\n.listBtn {\n  margin-left: 20px;\n}\n\n.dueDate {\n  margin-left: auto;\n  margin-right: 95px;\n}\n\n\n.todo {\n  margin: 5px 0;\n  display: grid;\n  grid-template-columns: 15px 1fr 110px 25px 30px;\n  align-items: center;\n  font-size: 1rem;\n  padding: 0 15px;\n  border-radius: 20px;\n}\n\n.todo:hover {\n  background-color: var(--sub-color);\n  transition: all 0.5s ease-out;\n}\n\n/* .todo:nth-child(even){\n  background-color: rgb(250, 250, 250);\n} */\n\n.todoName {\n  padding: 10px 10px;\n}\n\n.todoDesc {\n  grid-column: 2 / span 4;\n  font-size: .8rem;\n  padding: 10px 20px 20px 20px;\n}\n\n.todoDate {\n  font-size: .8rem;\n  color: var(--main-color);\n}\n\n.sortDate {\n  color: var(--main-color);\n}\n\n.delProject,\n.delTodo,\n.editTodo {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: rgb(0, 0, 0, .2);\n}\n\n.delProject:hover,\n.delTodo:hover {\n  color: red;\n  transition: color 0.5s ease;\n}\n\n.editTodo:hover {\n  color: rgba(0, 0, 0, 0.5);\n  transition: color 0.5s ease;\n}\n\n/* Remove default checkbox styles */\ninput[type=\"checkbox\"] {\n  /* Add if not using autoprefixer */\n  -webkit-appearance: none;\n  appearance: none;\n  /* For iOS < 15 to remove gradient background */\n  background-color: #fff;\n  /* Not removed via appearance */\n  margin: 0;\n}\n\ninput[type=\"checkbox\"] {\n  appearance: none;\n  background-color: #fff;\n  margin: 0;\n  font: inherit;\n  color: grey;\n  width: .9rem;\n  height: .9rem;\n  border: 0.1rem solid grey;\n  border-radius: 0.15em;\n  transform: translateY(-0.075em);\n  display: grid;\n  place-content: center;\n}\n\ninput[type=\"checkbox\"]::before {\n  content: \"\";\n  width: 0.65rem;\n  height: 0.65rem;\n  transform: scale(0);\n  transition: 120ms transform ease-in-out;\n  /* Checked color */\n  box-shadow: inset 1em 1em rgb(228, 228, 228);\n}\n\ninput[type=\"checkbox\"]:checked::before {\n  transform: scale(1);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_sidebar_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./components/sidebar.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/sidebar.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_todoList_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./components/todoList.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/todoList.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_editTodo_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./components/editTodo.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/editTodo.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_notes_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./components/notes.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/notes.css");
// Imports






var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_sidebar_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_todoList_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_editTodo_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_notes_css__WEBPACK_IMPORTED_MODULE_5__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --sidebar-padding: 0 35px;\n  --main-border-radius: 35px;\n  --main-color: rgb(136, 0, 255);\n  --sub-color: rgb(242, 226, 255);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nul {\n  list-style-type: none;\n}\n\nbutton {\n  padding: 5px 15px;\n  border-radius: 5px;\n  border: none;\n  font-weight: 700;\n  color: white;\n  background-color: var(--main-color);\n}\n\ntextarea {\n  resize: none;\n}\n\nhtml {\n  background-color: var(--main-color);\n}\n\nhtml, body{\n  height: 100%;\n}\n\nmain {\n  display: grid;\n  grid-template-columns: 250px 1fr;\n  grid-template-rows: 50px 1fr;\n  grid-template-areas: \n  \"header header\"\n  \"sidebar list\";\n  height: 100%;\n}\n\nheader {\n  grid-area: header;\n  background-color: var(--main-color);\n  display: flex;\n  align-items: center;\n  padding-left: 35px;\n  color: white;\n}\n\n.selectable {\n  padding-top: 5px !important;\n  padding-bottom: 5px !important;\n}\n\n.selectable:hover {\n  background-color: rgb(235, 235, 235);\n  border-top-right-radius: 50px;\n  border-bottom-right-radius: 50px;\n  transition: all .2s ease-in-out;\n}\n\n.selected {\n  background-color: var(--sub-color);\n  border-top-right-radius: 50px;\n  border-bottom-right-radius: 50px;\n  transition: background-color .2s ease-in;\n}\n\n.collapse{\n  display: none;\n  overflow: hidden;\n}\n\n.hide {\n  opacity: 0;\n  transition: visibility 0s, opacity 0.5s linear;\n}\n\n.hide:hover {\n  opacity: 1;\n}\n\n.strike {\n  /* text-decoration: line-through; */\n  opacity: .2;\n}\n\ni,\nbutton,\n.selectable,\n.todoName,\n.editTodo,\n.delTodo,\n.sortDate,\ninput[type='checkbox'] {\n  cursor: pointer;\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAKA;EACE,yBAAyB;EACzB,0BAA0B;EAC1B,8BAA8B;EAC9B,+BAA+B;AACjC;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,yCAAyC;AAC3C;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;EAChB,YAAY;EACZ,mCAAmC;AACrC;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,gCAAgC;EAChC,4BAA4B;EAC5B;;gBAEc;EACd,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,mCAAmC;EACnC,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,2BAA2B;EAC3B,8BAA8B;AAChC;;AAEA;EACE,oCAAoC;EACpC,6BAA6B;EAC7B,gCAAgC;EAChC,+BAA+B;AACjC;;AAEA;EACE,kCAAkC;EAClC,6BAA6B;EAC7B,gCAAgC;EAChC,wCAAwC;AAC1C;;AAEA;EACE,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,UAAU;EACV,8CAA8C;AAChD;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,mCAAmC;EACnC,WAAW;AACb;;AAEA;;;;;;;;EAQE,eAAe;AACjB","sourcesContent":["@import \"./components/sidebar.css\";\n@import \"./components/todoList.css\";\n@import \"./components/editTodo.css\";\n@import \"./components/notes.css\";\n\n:root {\n  --sidebar-padding: 0 35px;\n  --main-border-radius: 35px;\n  --main-color: rgb(136, 0, 255);\n  --sub-color: rgb(242, 226, 255);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nul {\n  list-style-type: none;\n}\n\nbutton {\n  padding: 5px 15px;\n  border-radius: 5px;\n  border: none;\n  font-weight: 700;\n  color: white;\n  background-color: var(--main-color);\n}\n\ntextarea {\n  resize: none;\n}\n\nhtml {\n  background-color: var(--main-color);\n}\n\nhtml, body{\n  height: 100%;\n}\n\nmain {\n  display: grid;\n  grid-template-columns: 250px 1fr;\n  grid-template-rows: 50px 1fr;\n  grid-template-areas: \n  \"header header\"\n  \"sidebar list\";\n  height: 100%;\n}\n\nheader {\n  grid-area: header;\n  background-color: var(--main-color);\n  display: flex;\n  align-items: center;\n  padding-left: 35px;\n  color: white;\n}\n\n.selectable {\n  padding-top: 5px !important;\n  padding-bottom: 5px !important;\n}\n\n.selectable:hover {\n  background-color: rgb(235, 235, 235);\n  border-top-right-radius: 50px;\n  border-bottom-right-radius: 50px;\n  transition: all .2s ease-in-out;\n}\n\n.selected {\n  background-color: var(--sub-color);\n  border-top-right-radius: 50px;\n  border-bottom-right-radius: 50px;\n  transition: background-color .2s ease-in;\n}\n\n.collapse{\n  display: none;\n  overflow: hidden;\n}\n\n.hide {\n  opacity: 0;\n  transition: visibility 0s, opacity 0.5s linear;\n}\n\n.hide:hover {\n  opacity: 1;\n}\n\n.strike {\n  /* text-decoration: line-through; */\n  opacity: .2;\n}\n\ni,\nbutton,\n.selectable,\n.todoName,\n.editTodo,\n.delTodo,\n.sortDate,\ninput[type='checkbox'] {\n  cursor: pointer;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/DOMelements.js":
/*!***************************************!*\
  !*** ./src/components/DOMelements.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dateLabel": () => (/* binding */ dateLabel),
/* harmony export */   "listBtn": () => (/* binding */ listBtn),
/* harmony export */   "listTitle": () => (/* binding */ listTitle),
/* harmony export */   "listView": () => (/* binding */ listView),
/* harmony export */   "main": () => (/* binding */ main),
/* harmony export */   "projectsView": () => (/* binding */ projectsView),
/* harmony export */   "sidebar": () => (/* binding */ sidebar),
/* harmony export */   "sortDateBtn": () => (/* binding */ sortDateBtn)
/* harmony export */ });
/* harmony import */ var _createNewInputDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createNewInputDOM */ "./src/components/createNewInputDOM.js");
/* harmony import */ var _renderItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderItems */ "./src/components/renderItems.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index */ "./src/index.js");





const main = document.querySelector('main');
const sidebar = main.querySelector('.sidebar');
const inbox = sidebar.querySelector('#inbox');
const today = sidebar.querySelector('#today');
const weekly = sidebar.querySelector('#week');
const notes = sidebar.querySelector('#notes');
const selectable = sidebar.querySelectorAll('.selectable');

const projectsView = main.querySelector('.projectsView');
const projectsBtn = main.querySelector('.projectsBtn');
const list = main.querySelector('.list');
const listView = list.querySelector('.listView');
const listBtn = list.querySelector('.listBtn');
const dateLabel = list.querySelector('.dueDate');
const sortDateBtn = list.querySelector('.sortDate');

let listTitle = list.querySelector('.listTitle');
projectsBtn.addEventListener('click', (0,_createNewInputDOM__WEBPACK_IMPORTED_MODULE_0__.createNewInput)(projectsView, 'project'));
listBtn.addEventListener('click', (0,_createNewInputDOM__WEBPACK_IMPORTED_MODULE_0__.createNewInput)(listView, 'todo'));
inbox.addEventListener('click', _renderItems__WEBPACK_IMPORTED_MODULE_1__.renderInbox);
today.addEventListener('click', _renderItems__WEBPACK_IMPORTED_MODULE_1__.renderToday);
weekly.addEventListener('click', _renderItems__WEBPACK_IMPORTED_MODULE_1__.renderWeekly);
notes.addEventListener('click', _renderItems__WEBPACK_IMPORTED_MODULE_1__.renderNotes);
sortDateBtn.addEventListener('click', _index__WEBPACK_IMPORTED_MODULE_2__.sortDate);
selectable.forEach(el => {
  el.addEventListener('click', _index__WEBPACK_IMPORTED_MODULE_2__.colorSelected);
});


/***/ }),

/***/ "./src/components/List.js":
/*!********************************!*\
  !*** ./src/components/List.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "List": () => (/* binding */ List),
/* harmony export */   "delTodo": () => (/* binding */ delTodo)
/* harmony export */ });
class List {
  constructor(name) {
    this.name = name;
  }
  list = [];
}

function delTodo(project, todo) {
  project.list.splice(project.list.indexOf(todo), 1)
}

/***/ }),

/***/ "./src/components/Note.js":
/*!********************************!*\
  !*** ./src/components/Note.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Note": () => (/* binding */ Note),
/* harmony export */   "setNoteText": () => (/* binding */ setNoteText)
/* harmony export */ });
class Note {
  constructor(text = '') {
    this.text = text;
  }
}

function setNoteText(note, text) {
  note.text = text
}

/***/ }),

/***/ "./src/components/ToDo.js":
/*!********************************!*\
  !*** ./src/components/ToDo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToDo": () => (/* binding */ ToDo),
/* harmony export */   "setToDoDate": () => (/* binding */ setToDoDate),
/* harmony export */   "setToDoDesc": () => (/* binding */ setToDoDesc),
/* harmony export */   "setToDoName": () => (/* binding */ setToDoName),
/* harmony export */   "toggleToDoCompleted": () => (/* binding */ toggleToDoCompleted)
/* harmony export */ });
class ToDo {
  constructor(name, dueDate, desc = 'No description') {
    this.name = name;
    this.dueDate = dueDate;
    this.desc = desc;
    this.completed = false;
  }
}

function setToDoName(todo, name) {
  todo.name = name
}

function setToDoDate(todo, date) {
  todo.dueDate = date
}

function setToDoDesc(todo, desc) {
  todo.desc = desc
}

function toggleToDoCompleted(todo) {
  todo.completed = !todo.completed
}

/***/ }),

/***/ "./src/components/createEditInputDOM.js":
/*!**********************************************!*\
  !*** ./src/components/createEditInputDOM.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createEditInput": () => (/* binding */ createEditInput)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _DOMelements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMelements */ "./src/components/DOMelements.js");
/* harmony import */ var _renderItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderItems */ "./src/components/renderItems.js");
/* harmony import */ var _ToDo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ToDo */ "./src/components/ToDo.js");






function createEditInput(el) {
  const edits = document.createElement('div');
  const div = document.createElement('div');
  const labelName = document.createElement('label');
  const labelDate = document.createElement('label');
  const labelDesc = document.createElement('label');
  const newName = document.createElement('input');
  const newDate = document.createElement('input');
  const newDesc = document.createElement('textarea');
  const accept = document.createElement('button');
  const cancel = document.createElement('button');

  edits.classList.add('edits');
  div.classList.add('editInputs');

  labelName.textContent = 'Name:';
  labelDate.textContent = 'Due:';
  labelDesc.textContent = 'Description:';
  accept.textContent = 'Confirm';
  cancel.textContent = 'Cancel';
  labelName.htmlFor = 'editName';
  labelDate.htmlFor = 'editDate';
  labelDesc.htmlFor = 'editDesc';
  newName.id = 'editName';
  newDate.id = 'editDate';
  newDesc.id = 'editDesc';
  accept.id = 'editAccept';
  cancel.id = 'editCancel';
  newName.type = 'text';
  newDate.type = 'date';

  newName.value = el.name;
  newDate.value = el.dueDate;
  newDesc.value = el.desc;

  div.append(labelName, newName, labelDesc, newDesc, labelDate, newDate, accept, cancel);
  edits.append(div);
  _DOMelements__WEBPACK_IMPORTED_MODULE_1__.main.append(edits);

  accept.addEventListener('click', updateTodo(el));
  cancel.addEventListener('click', cancelEdit);

  function cancelEdit() {
    edits.remove();
  }

  function updateTodo(el) {
    return () => {
      const name = newName.value;
      const due = newDate.value;
      const desc = newDesc.value;
      (0,_ToDo__WEBPACK_IMPORTED_MODULE_3__.setToDoName)(el, name);
      (0,_ToDo__WEBPACK_IMPORTED_MODULE_3__.setToDoDate)(el, due);
      (0,_ToDo__WEBPACK_IMPORTED_MODULE_3__.setToDoDesc)(el, desc);
      
      (0,_index__WEBPACK_IMPORTED_MODULE_0__.removeAllChildNodes)(edits);
      (0,_index__WEBPACK_IMPORTED_MODULE_0__.removeAllChildNodes)(_DOMelements__WEBPACK_IMPORTED_MODULE_1__.listView);
      if (_DOMelements__WEBPACK_IMPORTED_MODULE_1__.main.dataset.list === 'allInbox') {
        (0,_renderItems__WEBPACK_IMPORTED_MODULE_2__.renderInbox)();
      } else { (0,_renderItems__WEBPACK_IMPORTED_MODULE_2__.renderToDos)(_index__WEBPACK_IMPORTED_MODULE_0__.currentProject); };
      edits.remove();
    };
  }
}


/***/ }),

/***/ "./src/components/createNewInputDOM.js":
/*!*********************************************!*\
  !*** ./src/components/createNewInputDOM.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNewInput": () => (/* binding */ createNewInput)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _DOMelements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMelements */ "./src/components/DOMelements.js");
/* harmony import */ var _renderItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderItems */ "./src/components/renderItems.js");
/* harmony import */ var _createNewItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createNewItem */ "./src/components/createNewItem.js");





function createNewInput(view, type) {
  return () => {
    const div = document.createElement('div');
    const newName = document.createElement('input');
    const newDate = document.createElement('input');
    const newDesc = document.createElement('textarea');
    const confirm = document.createElement('button');
    const cancel = document.createElement('button');
    const bottomRow = document.createElement('div');

    div.classList.add('newInputs');
    newName.classList.add('newName');
    newDate.classList.add('newDate');
    newDesc.classList.add('newDesc');
    confirm.classList.add('confirmNew');
    cancel.classList.add('cancelNew');
    bottomRow.classList.add('newInputBottom');

    newName.placeholder = `add a ${type}...`;
    newDesc.placeholder = 'add a breif description';

    newName.type = 'text';
    newDate.type = 'date';

    confirm.textContent = 'Confirm';
    cancel.textContent = 'Cancel';

    (0,_index__WEBPACK_IMPORTED_MODULE_0__.removeAllChildNodes)(view);
    div.append(newName);


    if (type === 'project') {
      div.append(confirm, cancel);
      (0,_renderItems__WEBPACK_IMPORTED_MODULE_2__.renderProjects)();
      newName.addEventListener('keypress', (0,_createNewItem__WEBPACK_IMPORTED_MODULE_3__.createNewItem)(
        newName, _DOMelements__WEBPACK_IMPORTED_MODULE_1__.projectsView, type));
      confirm.addEventListener('click', (0,_createNewItem__WEBPACK_IMPORTED_MODULE_3__.createNewItem)(
        newName, _DOMelements__WEBPACK_IMPORTED_MODULE_1__.projectsView, type));
    };

    if (type === 'todo') {
      bottomRow.append(newDate, confirm, cancel);
      div.append(newDesc, bottomRow);
      (0,_renderItems__WEBPACK_IMPORTED_MODULE_2__.renderToDos)(_index__WEBPACK_IMPORTED_MODULE_0__.currentProject);
      newName.addEventListener('keypress', (0,_createNewItem__WEBPACK_IMPORTED_MODULE_3__.createNewItem)(
        newName, _DOMelements__WEBPACK_IMPORTED_MODULE_1__.listView, type, newDate, newDesc));
      confirm.addEventListener('click', (0,_createNewItem__WEBPACK_IMPORTED_MODULE_3__.createNewItem)(
        newName, _DOMelements__WEBPACK_IMPORTED_MODULE_1__.listView, type, newDate, newDesc));
    };

    cancel.addEventListener('click', () => div.remove());
    view.append(div);
    newName.select();
  };
}


/***/ }),

/***/ "./src/components/createNewItem.js":
/*!*****************************************!*\
  !*** ./src/components/createNewItem.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNewItem": () => (/* binding */ createNewItem),
/* harmony export */   "createNewProject": () => (/* binding */ createNewProject)
/* harmony export */ });
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List */ "./src/components/List.js");
/* harmony import */ var _ToDo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToDo */ "./src/components/ToDo.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _DOMelements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOMelements */ "./src/components/DOMelements.js");
/* harmony import */ var _renderItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renderItems */ "./src/components/renderItems.js");






function createNewItem(newName, view, type, newDate, newDesc) {
  return (e) => {
    if (e.key === 'Enter' || e.target.classList == 'confirmNew') {
      const name = newName.value;
      (0,_index__WEBPACK_IMPORTED_MODULE_2__.removeAllChildNodes)(view);

      if (type === 'project') {
        createNewProject(name);
        (0,_renderItems__WEBPACK_IMPORTED_MODULE_4__.renderProjects)();
      }

      if (type === 'todo') {
        createNewTodo(name, newDate, newDesc);
        (0,_renderItems__WEBPACK_IMPORTED_MODULE_4__.renderToDos)(_index__WEBPACK_IMPORTED_MODULE_2__.currentProject);
        (0,_index__WEBPACK_IMPORTED_MODULE_2__.removeAllChildNodes)(_DOMelements__WEBPACK_IMPORTED_MODULE_3__.projectsView);
        (0,_renderItems__WEBPACK_IMPORTED_MODULE_4__.renderProjects)();
      }
    }
  };
}
function createNewTodo(name, newDate, newDesc) {
  const todo = new _ToDo__WEBPACK_IMPORTED_MODULE_1__.ToDo(name, newDate.value, newDesc.value);
  _index__WEBPACK_IMPORTED_MODULE_2__.currentProject.list.push(todo);
}

function createNewProject(name) {
  const list = new _List__WEBPACK_IMPORTED_MODULE_0__.List(name);
  _index__WEBPACK_IMPORTED_MODULE_2__.projects.push(list);
  return list;
}


/***/ }),

/***/ "./src/components/createNewNote.js":
/*!*****************************************!*\
  !*** ./src/components/createNewNote.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addNoteBtn": () => (/* binding */ addNoteBtn),
/* harmony export */   "createNewNote": () => (/* binding */ createNewNote)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.js");
/* harmony import */ var _createNewNoteDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createNewNoteDOM */ "./src/components/createNewNoteDOM.js");
/* harmony import */ var _Note__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Note */ "./src/components/Note.js");




const addNoteBtn = document.createElement('button');
addNoteBtn.textContent = 'Add';
addNoteBtn.classList.add('newNote')

addNoteBtn.addEventListener('click', createNewNote())

function createNewNote(text) {
  return () => {
    const note = new _Note__WEBPACK_IMPORTED_MODULE_2__.Note(text)
    ;(0,_createNewNoteDOM__WEBPACK_IMPORTED_MODULE_1__.createNewNoteDOM)(note);
    ___WEBPACK_IMPORTED_MODULE_0__.notesArr.push(note)
    ;(0,___WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)('notes', ___WEBPACK_IMPORTED_MODULE_0__.notesArr)
    return note;
  }
}

/***/ }),

/***/ "./src/components/createNewNoteDOM.js":
/*!********************************************!*\
  !*** ./src/components/createNewNoteDOM.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNewNoteDOM": () => (/* binding */ createNewNoteDOM)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.js");
/* harmony import */ var _DOMelements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMelements */ "./src/components/DOMelements.js");
/* harmony import */ var _renderItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderItems */ "./src/components/renderItems.js");
/* harmony import */ var _Note__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Note */ "./src/components/Note.js");





function createNewNoteDOM(item) {
  const div = document.createElement('div');
  const textArea = document.createElement('textarea');
  const del = document.createElement('div');

  div.classList.add('noteItem');
  textArea.classList.add('noteText');
  del.classList.add('deleteNote');

  textArea.placeholder = 'add brief note...'
  del.innerHTML = '<i class="fa-solid fa-delete-left"></i>';
  textArea.value = item.text;

  div.append(textArea, del);
  _DOMelements__WEBPACK_IMPORTED_MODULE_1__.listView.append(div);

  del.addEventListener('click', deleteNote);
  textArea.addEventListener('change', updateNote)

  function updateNote() {
    ;(0,_Note__WEBPACK_IMPORTED_MODULE_3__.setNoteText)(item, this.value)
    ;(0,___WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)('notes', ___WEBPACK_IMPORTED_MODULE_0__.notesArr)
  }

  function deleteNote() {
    ___WEBPACK_IMPORTED_MODULE_0__.notesArr.splice(___WEBPACK_IMPORTED_MODULE_0__.notesArr.indexOf(item), 1);
    (0,___WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)('notes', ___WEBPACK_IMPORTED_MODULE_0__.notesArr)
    ;(0,_renderItems__WEBPACK_IMPORTED_MODULE_2__.renderNotes)();
  }
}


/***/ }),

/***/ "./src/components/createNewProjectDOM.js":
/*!***********************************************!*\
  !*** ./src/components/createNewProjectDOM.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNewProjectDOM": () => (/* binding */ createNewProjectDOM)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _DOMelements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMelements */ "./src/components/DOMelements.js");
/* harmony import */ var _renderItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderItems */ "./src/components/renderItems.js");




function createNewProjectDOM(item, index) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const p = document.createElement('p');
  const del = document.createElement('div');

  del.innerHTML = '<i class="fa-solid fa-delete-left"></i>';
  span.textContent = item.list.length;
  p.textContent = item.name;

  p.classList.add('projectName');
  del.classList.add('delProject');
  span.classList.add('projectLength');
  li.classList.add('projectItem');
  li.classList.add('selectable');
  del.classList.add('hide');

  li.append(span, p, del);

  p.addEventListener('click', renderSelected);
  span.addEventListener('click', renderSelected);
  del.addEventListener('click', deleteProject(item));
  li.addEventListener('click', _index__WEBPACK_IMPORTED_MODULE_0__.colorSelected);
  li.addEventListener('mouseenter', () => { del.classList.remove('hide'); });
  li.addEventListener('mouseleave', () => { del.classList.add('hide'); });
  return li;

  function deleteProject(item) {
    return () => {
      const filtered = _index__WEBPACK_IMPORTED_MODULE_0__.projects.filter(key => key != item);
      (0,_index__WEBPACK_IMPORTED_MODULE_0__.updateProjects)(filtered)
      ;(0,_index__WEBPACK_IMPORTED_MODULE_0__.removeAllChildNodes)(_DOMelements__WEBPACK_IMPORTED_MODULE_1__.projectsView);
      (0,_renderItems__WEBPACK_IMPORTED_MODULE_2__.renderProjects)();
      (0,_renderItems__WEBPACK_IMPORTED_MODULE_2__.renderInbox)();
    };
  }

  function renderSelected() {
    _DOMelements__WEBPACK_IMPORTED_MODULE_1__.main.dataset.list = item.name;
    (0,_index__WEBPACK_IMPORTED_MODULE_0__.updateCurrentProject)(item)
    _DOMelements__WEBPACK_IMPORTED_MODULE_1__.listTitle.textContent = item.name;
    _DOMelements__WEBPACK_IMPORTED_MODULE_1__.listTitle.after(_DOMelements__WEBPACK_IMPORTED_MODULE_1__.listBtn);
    _DOMelements__WEBPACK_IMPORTED_MODULE_1__.dateLabel.append(_DOMelements__WEBPACK_IMPORTED_MODULE_1__.sortDateBtn);
    (0,_index__WEBPACK_IMPORTED_MODULE_0__.removeAllChildNodes)(_DOMelements__WEBPACK_IMPORTED_MODULE_1__.listView);
    (0,_renderItems__WEBPACK_IMPORTED_MODULE_2__.renderToDos)(_index__WEBPACK_IMPORTED_MODULE_0__.projects[index]);
  };
}


/***/ }),

/***/ "./src/components/createNewToDoDOM.js":
/*!********************************************!*\
  !*** ./src/components/createNewToDoDOM.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNewToDoDOM": () => (/* binding */ createNewToDoDOM)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _DOMelements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMelements */ "./src/components/DOMelements.js");
/* harmony import */ var _renderItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderItems */ "./src/components/renderItems.js");
/* harmony import */ var _createEditInputDOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createEditInputDOM */ "./src/components/createEditInputDOM.js");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./List */ "./src/components/List.js");
/* harmony import */ var _ToDo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ToDo */ "./src/components/ToDo.js");







function createNewToDoDOM(el, projectArray) {
  const li = document.createElement('li');
  const p = document.createElement('p');
  const span = document.createElement('span');
  const edit = document.createElement('div');
  const del = document.createElement('div');
  const check = document.createElement('input');
  const desc = document.createElement('div');

  check.type = 'checkbox';
  edit.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>';
  del.innerHTML = '<i class="fa-solid fa-delete-left"></i>';
  p.textContent = el.name;
  span.textContent = (0,_index__WEBPACK_IMPORTED_MODULE_0__.changeDateFormat)(el.dueDate);
  desc.textContent = el.desc;

  check.classList.add('checkComplete');
  li.classList.add('todo');
  p.classList.add('todoName');
  span.classList.add('todoDate');
  desc.classList.add('todoDesc');
  desc.classList.add('collapse');
  edit.classList.add('editTodo');
  edit.classList.add('hide');
  del.classList.add('hide');
  del.classList.add('delTodo');

  li.append(check, p, span, edit, del, desc);

  if (el.completed) {
    check.checked = true;
    p.classList.add('strike');
    span.classList.add('strike');
    edit.classList.remove('hide');
    del.classList.remove('hide');
  }
  edit.addEventListener('click', editTodo(el));
  del.addEventListener('click', deleteTodo(projectArray));
  li.addEventListener('mouseenter', unhideOptions(del, edit));
  li.addEventListener('mouseleave', hideOptions(el, del, edit));
  check.addEventListener('click', toggleCompleted(el));
  p.addEventListener('click', toggleDesc);
  return li;

  function toggleDesc() {
    desc.classList.toggle('collapse');
    li.classList.toggle('selected');
  }

  function editTodo(el) {
    return () => {
      (0,_createEditInputDOM__WEBPACK_IMPORTED_MODULE_3__.createEditInput)(el);
    };
  }

  function hideOptions(el, del, edit) {
    return () => {
      if (!el.completed) {
        del.classList.add('hide');
        edit.classList.add('hide');
      }
    };
  }

  function unhideOptions(del, edit) {
    return () => {
      del.classList.remove('hide');
      edit.classList.remove('hide');
    };
  }

  function deleteTodo(projectArray) {
    return () => {
      (0,_List__WEBPACK_IMPORTED_MODULE_4__.delTodo)(projectArray, el);
      (0,_index__WEBPACK_IMPORTED_MODULE_0__.removeAllChildNodes)(_DOMelements__WEBPACK_IMPORTED_MODULE_1__.listView);
      (0,_index__WEBPACK_IMPORTED_MODULE_0__.removeAllChildNodes)(_DOMelements__WEBPACK_IMPORTED_MODULE_1__.projectsView);
      (0,_renderItems__WEBPACK_IMPORTED_MODULE_2__.renderProjects)();
      if (_DOMelements__WEBPACK_IMPORTED_MODULE_1__.main.dataset.list === 'allInbox') {
        (0,_renderItems__WEBPACK_IMPORTED_MODULE_2__.renderInbox)();
      } else { (0,_renderItems__WEBPACK_IMPORTED_MODULE_2__.renderToDos)(projectArray); }
    };
  }

  function toggleCompleted(el) {
    return () => {
      (0,_ToDo__WEBPACK_IMPORTED_MODULE_5__.toggleToDoCompleted)(el);
      (0,_index__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)('projects', _index__WEBPACK_IMPORTED_MODULE_0__.projects);
      if (!el.completed) {
        p.classList.remove('strike');
        span.classList.remove('strike');
      } else {
        p.classList.add('strike');
        span.classList.add('strike');
      }
    };
  }
}


/***/ }),

/***/ "./src/components/renderItems.js":
/*!***************************************!*\
  !*** ./src/components/renderItems.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderInbox": () => (/* binding */ renderInbox),
/* harmony export */   "renderNotes": () => (/* binding */ renderNotes),
/* harmony export */   "renderProjects": () => (/* binding */ renderProjects),
/* harmony export */   "renderToDos": () => (/* binding */ renderToDos),
/* harmony export */   "renderToday": () => (/* binding */ renderToday),
/* harmony export */   "renderWeekly": () => (/* binding */ renderWeekly)
/* harmony export */ });
/* harmony import */ var _createNewProjectDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createNewProjectDOM */ "./src/components/createNewProjectDOM.js");
/* harmony import */ var _createNewToDoDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createNewToDoDOM */ "./src/components/createNewToDoDOM.js");
/* harmony import */ var _createNewNote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createNewNote */ "./src/components/createNewNote.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _DOMelements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DOMelements */ "./src/components/DOMelements.js");
/* harmony import */ var _createNewNoteDOM__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createNewNoteDOM */ "./src/components/createNewNoteDOM.js");








function renderInbox() {
  _DOMelements__WEBPACK_IMPORTED_MODULE_4__.listTitle.after(_DOMelements__WEBPACK_IMPORTED_MODULE_4__.dateLabel);
  _DOMelements__WEBPACK_IMPORTED_MODULE_4__.listBtn.remove();
  _DOMelements__WEBPACK_IMPORTED_MODULE_4__.sortDateBtn.remove();
  _DOMelements__WEBPACK_IMPORTED_MODULE_4__.main.dataset.list = 'allInbox';
  _DOMelements__WEBPACK_IMPORTED_MODULE_4__.listTitle.textContent = 'Inbox';
  (0,_index__WEBPACK_IMPORTED_MODULE_3__.removeAllChildNodes)(_DOMelements__WEBPACK_IMPORTED_MODULE_4__.listView);
  _index__WEBPACK_IMPORTED_MODULE_3__.projects.forEach(el => {
    renderToDos(el);
  });
}
function renderToday() {
  _DOMelements__WEBPACK_IMPORTED_MODULE_4__.listTitle.after(_DOMelements__WEBPACK_IMPORTED_MODULE_4__.dateLabel);
  _DOMelements__WEBPACK_IMPORTED_MODULE_4__.listBtn.remove();
  _createNewNote__WEBPACK_IMPORTED_MODULE_2__.addNoteBtn.remove()
  ;(0,_index__WEBPACK_IMPORTED_MODULE_3__.removeAllChildNodes)(_DOMelements__WEBPACK_IMPORTED_MODULE_4__.listView);
  _DOMelements__WEBPACK_IMPORTED_MODULE_4__.main.dataset.list = 'TodaySection';
  _DOMelements__WEBPACK_IMPORTED_MODULE_4__.listTitle.textContent = 'Today';
}
function renderWeekly() {
  _DOMelements__WEBPACK_IMPORTED_MODULE_4__.listTitle.after(_DOMelements__WEBPACK_IMPORTED_MODULE_4__.dateLabel);
  _DOMelements__WEBPACK_IMPORTED_MODULE_4__.listBtn.remove();
  _createNewNote__WEBPACK_IMPORTED_MODULE_2__.addNoteBtn.remove()
  ;(0,_index__WEBPACK_IMPORTED_MODULE_3__.removeAllChildNodes)(_DOMelements__WEBPACK_IMPORTED_MODULE_4__.listView);
  _DOMelements__WEBPACK_IMPORTED_MODULE_4__.main.dataset.list = 'WeeklySection';
  _DOMelements__WEBPACK_IMPORTED_MODULE_4__.listTitle.textContent = 'This Week';
}
function renderNotes() {
  (0,_index__WEBPACK_IMPORTED_MODULE_3__.removeAllChildNodes)(_DOMelements__WEBPACK_IMPORTED_MODULE_4__.listView);
  _DOMelements__WEBPACK_IMPORTED_MODULE_4__.dateLabel.remove();
  _DOMelements__WEBPACK_IMPORTED_MODULE_4__.listBtn.remove();
  _DOMelements__WEBPACK_IMPORTED_MODULE_4__.main.dataset.list = 'NotesSection';
  _DOMelements__WEBPACK_IMPORTED_MODULE_4__.listTitle.textContent = 'Notes';
  _DOMelements__WEBPACK_IMPORTED_MODULE_4__.listTitle.after(_createNewNote__WEBPACK_IMPORTED_MODULE_2__.addNoteBtn)
  _index__WEBPACK_IMPORTED_MODULE_3__.notesArr.forEach(el => {
    ;(0,_createNewNoteDOM__WEBPACK_IMPORTED_MODULE_5__.createNewNoteDOM)(el)
  })
}

function renderToDos(projectArray) {
  _createNewNote__WEBPACK_IMPORTED_MODULE_2__.addNoteBtn.remove()
  projectArray.list.forEach(el => {
    const li = (0,_createNewToDoDOM__WEBPACK_IMPORTED_MODULE_1__.createNewToDoDOM)(el, projectArray);
    _DOMelements__WEBPACK_IMPORTED_MODULE_4__.listView.appendChild(li);
    (0,_index__WEBPACK_IMPORTED_MODULE_3__.updateCurrentProject)(projectArray);
  });
  (0,_index__WEBPACK_IMPORTED_MODULE_3__.setLocalStorage)('projects', _index__WEBPACK_IMPORTED_MODULE_3__.projects);
}

function renderProjects() {
  _createNewNote__WEBPACK_IMPORTED_MODULE_2__.addNoteBtn.remove()
  _index__WEBPACK_IMPORTED_MODULE_3__.projects.forEach((el, index) => {
    const li = (0,_createNewProjectDOM__WEBPACK_IMPORTED_MODULE_0__.createNewProjectDOM)(el, index);
    _DOMelements__WEBPACK_IMPORTED_MODULE_4__.projectsView.appendChild(li);
  });
  (0,_index__WEBPACK_IMPORTED_MODULE_3__.setLocalStorage)('projects', _index__WEBPACK_IMPORTED_MODULE_3__.projects)
}


/***/ }),

/***/ "./src/components/test.js":
/*!********************************!*\
  !*** ./src/components/test.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "notes": () => (/* binding */ notes),
/* harmony export */   "todos": () => (/* binding */ todos)
/* harmony export */ });
/* harmony import */ var _ToDo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToDo */ "./src/components/ToDo.js");
/* harmony import */ var _createNewItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createNewItem */ "./src/components/createNewItem.js");
/* harmony import */ var _Note__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Note */ "./src/components/Note.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .. */ "./src/index.js");





const todos = () => {
  const project1 = (0,_createNewItem__WEBPACK_IMPORTED_MODULE_1__.createNewProject)('Project');
  const project2 = (0,_createNewItem__WEBPACK_IMPORTED_MODULE_1__.createNewProject)('Chores');
  
  const todo0 = new _ToDo__WEBPACK_IMPORTED_MODULE_0__.ToDo('Create delete button', '2022-09-29', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam libero justo laoreet sit amet cursus. Amet est placerat in egestas erat.');
  project1.list.push(todo0);
  (0,_ToDo__WEBPACK_IMPORTED_MODULE_0__.toggleToDoCompleted)(todo0);

  const todo = new _ToDo__WEBPACK_IMPORTED_MODULE_0__.ToDo('Create a way to update values', '2022-09-29');
  project1.list.push(todo);
  (0,_ToDo__WEBPACK_IMPORTED_MODULE_0__.toggleToDoCompleted)(todo)

  const todo10 = new _ToDo__WEBPACK_IMPORTED_MODULE_0__.ToDo('Expand for description', '2022-09-30', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam libero justo laoreet sit amet cursus. Amet est placerat in egestas erat.');
  project1.list.push(todo10);
  (0,_ToDo__WEBPACK_IMPORTED_MODULE_0__.toggleToDoCompleted)(todo10);


  const todo9 = new _ToDo__WEBPACK_IMPORTED_MODULE_0__.ToDo('Create currently selected project function', '2022-10-01');
  project1.list.push(todo9);
  (0,_ToDo__WEBPACK_IMPORTED_MODULE_0__.toggleToDoCompleted)(todo9)

  const todo1 = new _ToDo__WEBPACK_IMPORTED_MODULE_0__.ToDo('Sort dates', '2022-10-01');
  project1.list.push(todo1);
  (0,_ToDo__WEBPACK_IMPORTED_MODULE_0__.toggleToDoCompleted)(todo1)

  const todo8 = new _ToDo__WEBPACK_IMPORTED_MODULE_0__.ToDo('Change date format', '2022-10-01');
  project1.list.push(todo8);
  (0,_ToDo__WEBPACK_IMPORTED_MODULE_0__.toggleToDoCompleted)(todo8)

  const todo2 = new _ToDo__WEBPACK_IMPORTED_MODULE_0__.ToDo('Filter by today', '2022-10-01');
  project1.list.push(todo2);

  const todo3 = new _ToDo__WEBPACK_IMPORTED_MODULE_0__.ToDo('Filter by this week', '2022-10-01');
  project1.list.push(todo3);

  const todo7 = new _ToDo__WEBPACK_IMPORTED_MODULE_0__.ToDo('Add notes section', '2022-10-01');
  project1.list.push(todo7);
  (0,_ToDo__WEBPACK_IMPORTED_MODULE_0__.toggleToDoCompleted)(todo7);

  const todo12 = new _ToDo__WEBPACK_IMPORTED_MODULE_0__.ToDo('Add localStorage abilities', '2022-10-06')
  project1.list.push(todo12);
  (0,_ToDo__WEBPACK_IMPORTED_MODULE_0__.toggleToDoCompleted)(todo12)

  const todo4 = new _ToDo__WEBPACK_IMPORTED_MODULE_0__.ToDo('Clean room', new Date().toISOString().split('T')[0]);
  project2.list.push(todo4);

  const todo5 = new _ToDo__WEBPACK_IMPORTED_MODULE_0__.ToDo('Do laundry', new Date().toISOString().split('T')[0]);
  project2.list.push(todo5);
  (0,_ToDo__WEBPACK_IMPORTED_MODULE_0__.toggleToDoCompleted)(todo5)

  const todo6 = new _ToDo__WEBPACK_IMPORTED_MODULE_0__.ToDo('Buy groceries', new Date().toISOString().split('T')[0]);
  project2.list.push(todo6);

  const todo11 = new _ToDo__WEBPACK_IMPORTED_MODULE_0__.ToDo('Take out the trash', new Date().toISOString().split('T')[0]);
  project2.list.push(todo11);
  (0,_ToDo__WEBPACK_IMPORTED_MODULE_0__.toggleToDoCompleted)(todo11)
};

const notes = () => {
  const note0 = new _Note__WEBPACK_IMPORTED_MODULE_2__.Note('oranges\nbananas\napples\ngrapes')
  ___WEBPACK_IMPORTED_MODULE_3__.notesArr.push(note0)

  const note1 = new _Note__WEBPACK_IMPORTED_MODULE_2__.Note('CPU\nGPU\nRAM\nPSU\nSSD\nMotherboard')
  ___WEBPACK_IMPORTED_MODULE_3__.notesArr.push(note1)

  const note2 = new _Note__WEBPACK_IMPORTED_MODULE_2__.Note('one\ntwo\nthree\nfour')
  ___WEBPACK_IMPORTED_MODULE_3__.notesArr.push(note2)

  for (let i = 0; i < 5; i++) {
    const newNotes = new _Note__WEBPACK_IMPORTED_MODULE_2__.Note();
    ___WEBPACK_IMPORTED_MODULE_3__.notesArr.push(newNotes)
  }
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeDateFormat": () => (/* binding */ changeDateFormat),
/* harmony export */   "colorSelected": () => (/* binding */ colorSelected),
/* harmony export */   "currentProject": () => (/* binding */ currentProject),
/* harmony export */   "notesArr": () => (/* binding */ notesArr),
/* harmony export */   "projects": () => (/* binding */ projects),
/* harmony export */   "removeAllChildNodes": () => (/* binding */ removeAllChildNodes),
/* harmony export */   "setLocalStorage": () => (/* binding */ setLocalStorage),
/* harmony export */   "sortDate": () => (/* binding */ sortDate),
/* harmony export */   "updateCurrentProject": () => (/* binding */ updateCurrentProject),
/* harmony export */   "updateProjects": () => (/* binding */ updateProjects)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _components_test__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/test */ "./src/components/test.js");
/* harmony import */ var _components_renderItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/renderItems */ "./src/components/renderItems.js");
/* harmony import */ var _components_DOMelements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/DOMelements */ "./src/components/DOMelements.js");






let notesArr = [];
let projects = [];
let currentProject;

function updateProjects(item){
  return projects = item;
}
function updateCurrentProject(item) {
  return currentProject = item;
}

function updateNotes(item) {
  return notesArr = item;
}

function changeDateFormat(dateISOstring){
  if(!dateISOstring) return '';
  const split = dateISOstring.split('-');
  const newDate = `${split[1]}/${split[2]}/${split[0]}`;
  return newDate
}

function colorSelected(e){
  const selectable = _components_DOMelements__WEBPACK_IMPORTED_MODULE_3__.sidebar.querySelectorAll('.selectable')
  selectable.forEach(el=>{
    el.classList.remove('selected');
  })
  e.currentTarget.classList.add('selected')
}

function sortDate() {
  if (!_components_DOMelements__WEBPACK_IMPORTED_MODULE_3__.sortDateBtn.dataset.sort) {
    _components_DOMelements__WEBPACK_IMPORTED_MODULE_3__.sortDateBtn.dataset.sort = 'asc'
  }
  projects.forEach(el => {
    el.list.sort(function (a, b) {
      if (_components_DOMelements__WEBPACK_IMPORTED_MODULE_3__.sortDateBtn.dataset.sort === 'asc') {
        if (a.dueDate > b.dueDate)
          return 1;
        if (a.dueDate < b.dueDate)
          return -1;
      }
      else if(_components_DOMelements__WEBPACK_IMPORTED_MODULE_3__.sortDateBtn.dataset.sort === 'dsc'){
        if (a.dueDate > b.dueDate)
          return -1;
        if (a.dueDate < b.dueDate)
          return 1;
      }
      return 0;
    });
  });
  if (_components_DOMelements__WEBPACK_IMPORTED_MODULE_3__.sortDateBtn.dataset.sort === 'asc') {
    _components_DOMelements__WEBPACK_IMPORTED_MODULE_3__.sortDateBtn.dataset.sort = 'dsc';
    _components_DOMelements__WEBPACK_IMPORTED_MODULE_3__.sortDateBtn.innerHTML = '<i class="fa-solid fa-sort-up"></i>'
  } else if(_components_DOMelements__WEBPACK_IMPORTED_MODULE_3__.sortDateBtn.dataset.sort === 'dsc') {
    _components_DOMelements__WEBPACK_IMPORTED_MODULE_3__.sortDateBtn.dataset.sort = 'asc';
    _components_DOMelements__WEBPACK_IMPORTED_MODULE_3__.sortDateBtn.innerHTML = '<i class="fa-solid fa-sort-down"></i>'
  }
  removeAllChildNodes(_components_DOMelements__WEBPACK_IMPORTED_MODULE_3__.listView)
  ;(0,_components_renderItems__WEBPACK_IMPORTED_MODULE_2__.renderToDos)(currentProject)
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

function setLocalStorage(storedName, dataArr){
  localStorage.setItem(storedName, JSON.stringify(dataArr))
}

function getLocalStorage(storedName){
  if (storedName === 'projects') {
    updateProjects(JSON.parse(localStorage.getItem(storedName)))
  } 
  else if (storedName === 'notes') {
    updateNotes(JSON.parse(localStorage.getItem(storedName)))
  }
}


if(typeof localStorage.projects === 'undefined') {
  _components_test__WEBPACK_IMPORTED_MODULE_1__.todos();
  setLocalStorage('projects', projects)
}
if (typeof localStorage.notes === 'undefined') {
  _components_test__WEBPACK_IMPORTED_MODULE_1__.notes();
  setLocalStorage('notes', notesArr)
}

// localStorage.clear()
getLocalStorage('projects');
getLocalStorage('notes');
(0,_components_renderItems__WEBPACK_IMPORTED_MODULE_2__.renderProjects)();
(0,_components_renderItems__WEBPACK_IMPORTED_MODULE_2__.renderInbox)();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 				() => (module['default']) :
/******/ 				() => (module);
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9lZGl0VG9kby5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL25vdGVzLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvc2lkZWJhci5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3RvZG9MaXN0LmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9ET01lbGVtZW50cy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvTGlzdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvTm90ZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvVG9Eby5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvY3JlYXRlRWRpdElucHV0RE9NLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9jcmVhdGVOZXdJbnB1dERPTS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvY3JlYXRlTmV3SXRlbS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvY3JlYXRlTmV3Tm90ZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvY3JlYXRlTmV3Tm90ZURPTS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvY3JlYXRlTmV3UHJvamVjdERPTS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvY3JlYXRlTmV3VG9Eb0RPTS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvcmVuZGVySXRlbXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3Rlc3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZWRpdHMge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIHotaW5kZXg6IDEwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4MCwgMTgwLCAxODAsIDAuMzk3KTtcXG59XFxuXFxuLmVkaXRJbnB1dHMge1xcbiAgei1pbmRleDogMjA7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGhlaWdodDogMjUwcHg7XFxuICB3aWR0aDogNTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG4uZWRpdElucHV0cyBidXR0b24ge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgd2lkdGg6IDgwcHg7XFxufVxcblxcbiNlZGl0TmFtZSxcXG4jZWRpdERlc2Mge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZm9udC1zaXplOiAuOHJlbTtcXG59XFxuXFxuI2VkaXROYW1lIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jZWRpdERlc2Mge1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNlZGl0QWNjZXB0IHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4ubmV3SW5wdXRzIHtcXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHdpZHRoOiBtaW4oNTAwcHgsIDEwMCUpO1xcbn1cXG5cXG4ubmV3TmFtZSxcXG4ubmV3RGVzYyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4ubmV3TmFtZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5uZXdEZXNjIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLm5ld0RhdGUge1xcbiAgcGFkZGluZzogM3B4O1xcbiAgZm9udC1zaXplOiAuOXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubmV3SW5wdXRCb3R0b20ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb25maXJtTmV3LFxcbi5jYW5jZWxOZXcge1xcbiAgZm9udC1zaXplOiAuOXJlbTtcXG59XFxuXFxuLmNvbmZpcm1OZXcge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL2VkaXRUb2RvLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBOztFQUVFLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7O0VBRUUsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmVkaXRzIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICB6LWluZGV4OiAxMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODAsIDE4MCwgMTgwLCAwLjM5Nyk7XFxufVxcblxcbi5lZGl0SW5wdXRzIHtcXG4gIHotaW5kZXg6IDIwO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBoZWlnaHQ6IDI1MHB4O1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuLmVkaXRJbnB1dHMgYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHdpZHRoOiA4MHB4O1xcbn1cXG5cXG4jZWRpdE5hbWUsXFxuI2VkaXREZXNjIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGZvbnQtc2l6ZTogLjhyZW07XFxufVxcblxcbiNlZGl0TmFtZSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI2VkaXREZXNjIHtcXG4gIGhlaWdodDogODBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jZWRpdEFjY2VwdCB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLm5ld0lucHV0cyB7XFxuICBtYXJnaW4tbGVmdDogMzBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB3aWR0aDogbWluKDUwMHB4LCAxMDAlKTtcXG59XFxuXFxuLm5ld05hbWUsXFxuLm5ld0Rlc2Mge1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLm5ld05hbWUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4ubmV3RGVzYyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5uZXdEYXRlIHtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIGZvbnQtc2l6ZTogLjlyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm5ld0lucHV0Qm90dG9tIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29uZmlybU5ldyxcXG4uY2FuY2VsTmV3IHtcXG4gIGZvbnQtc2l6ZTogLjlyZW07XFxufVxcblxcbi5jb25maXJtTmV3IHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubmV3Tm90ZSB7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG59XFxuXFxubWFpbltkYXRhLWxpc3Q9J05vdGVzU2VjdGlvbiddIC5saXN0VmlldyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4ubm90ZUl0ZW0ge1xcbiAgd2lkdGg6IDIyMHB4O1xcbiAgaGVpZ2h0OiAyNDBweDtcXG59XFxuXFxuLm5vdGVJdGVtOm50aC1jaGlsZChldmVuKSB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0ZGVnKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogNXB4O1xcbn1cXG5cXG4ubm90ZUl0ZW06bnRoLWNoaWxkKDNuKSB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtM2RlZyk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IC01cHg7XFxufVxcblxcbi5ub3RlSXRlbTpudGgtY2hpbGQoNW4pIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAtMTBweDtcXG59XFxuXFxuLm5vdGVUZXh0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNFOEU4RTg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZjg4O1xcbiAgLyogT2xkIGJyb3dzZXJzICovXFxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNmZmZmODggODElLCAjZmZmZjg4IDgyJSwgI2ZmZmY4OCA4MiUsICNmZmZmYzYgMTAwJSk7XFxuICAvKiBGRjMuNisgKi9cXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgYm90dG9tLCBjb2xvci1zdG9wKDgxJSwgI2ZmZmY4OCksIGNvbG9yLXN0b3AoODIlLCAjZmZmZjg4KSwgY29sb3Itc3RvcCg4MiUsICNmZmZmODgpLCBjb2xvci1zdG9wKDEwMCUsICNmZmZmYzYpKTtcXG4gIC8qIENocm9tZSxTYWZhcmk0KyAqL1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjZmZmZjg4IDgxJSwgI2ZmZmY4OCA4MiUsICNmZmZmODggODIlLCAjZmZmZmM2IDEwMCUpO1xcbiAgLyogQ2hyb21lMTArLFNhZmFyaTUuMSsgKi9cXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNmZmZmODggODElLCAjZmZmZjg4IDgyJSwgI2ZmZmY4OCA4MiUsICNmZmZmYzYgMTAwJSk7XFxuICAvKiBPcGVyYSAxMS4xMCsgKi9cXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjZmZmZjg4IDgxJSwgI2ZmZmY4OCA4MiUsICNmZmZmODggODIlLCAjZmZmZmM2IDEwMCUpO1xcbiAgLyogSUUxMCsgKi9cXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmZmZmODggODElLCAjZmZmZjg4IDgyJSwgI2ZmZmY4OCA4MiUsICNmZmZmYzYgMTAwJSk7XFxuICAvKiBXM0MgKi9cXG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyNmZmZmODgnLCBlbmRDb2xvcnN0cj0nI2ZmZmZjNicsIEdyYWRpZW50VHlwZT0xKTtcXG4gIC8qIElFNi05IGZhbGxiYWNrIG9uIGhvcml6b250YWwgZ3JhZGllbnQgKi9cXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA2MHB4IDEwcHg7XFxufVxcblxcbi5ub3RlVGV4dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDRweCAxMnB4O1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCA0cHggMTJweDtcXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgLjNzO1xcbn1cXG5cXG4uZGVsZXRlTm90ZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IC0yMzhweDtcXG4gIHJpZ2h0OiAtMTkzcHg7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICB6LWluZGV4OiAxMDtcXG4gIGNvbG9yOiByZ2IoMTc5LCAxNzksIDE3OSk7XFxufVxcblxcbi5kZWxldGVOb3RlOmhvdmVyIHtcXG4gIGNvbG9yOiByZWQ7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAuM3M7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL25vdGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsUUFBUTtBQUNWOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLDZGQUE2RjtFQUM3RixXQUFXO0VBQ1gscUtBQXFLO0VBQ3JLLG9CQUFvQjtFQUNwQixnR0FBZ0c7RUFDaEcseUJBQXlCO0VBQ3pCLDJGQUEyRjtFQUMzRixpQkFBaUI7RUFDakIsNEZBQTRGO0VBQzVGLFVBQVU7RUFDVix3RkFBd0Y7RUFDeEYsUUFBUTtFQUNSLGtIQUFrSDtFQUNsSCwwQ0FBMEM7RUFDMUMscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLDJDQUEyQztFQUMzQywyQ0FBMkM7RUFDM0MsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YscUJBQXFCO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5uZXdOb3RlIHtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbn1cXG5cXG5tYWluW2RhdGEtbGlzdD0nTm90ZXNTZWN0aW9uJ10gLmxpc3RWaWV3IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5ub3RlSXRlbSB7XFxuICB3aWR0aDogMjIwcHg7XFxuICBoZWlnaHQ6IDI0MHB4O1xcbn1cXG5cXG4ubm90ZUl0ZW06bnRoLWNoaWxkKGV2ZW4pIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDRkZWcpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiA1cHg7XFxufVxcblxcbi5ub3RlSXRlbTpudGgtY2hpbGQoM24pIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC0zZGVnKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogLTVweDtcXG59XFxuXFxuLm5vdGVJdGVtOm50aC1jaGlsZCg1bikge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNWRlZyk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IC0xMHB4O1xcbn1cXG5cXG4ubm90ZVRleHQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI0U4RThFODtcXG4gIGJhY2tncm91bmQ6ICNmZmZmODg7XFxuICAvKiBPbGQgYnJvd3NlcnMgKi9cXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KC00NWRlZywgI2ZmZmY4OCA4MSUsICNmZmZmODggODIlLCAjZmZmZjg4IDgyJSwgI2ZmZmZjNiAxMDAlKTtcXG4gIC8qIEZGMy42KyAqL1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCBib3R0b20sIGNvbG9yLXN0b3AoODElLCAjZmZmZjg4KSwgY29sb3Itc3RvcCg4MiUsICNmZmZmODgpLCBjb2xvci1zdG9wKDgyJSwgI2ZmZmY4OCksIGNvbG9yLXN0b3AoMTAwJSwgI2ZmZmZjNikpO1xcbiAgLyogQ2hyb21lLFNhZmFyaTQrICovXFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNmZmZmODggODElLCAjZmZmZjg4IDgyJSwgI2ZmZmY4OCA4MiUsICNmZmZmYzYgMTAwJSk7XFxuICAvKiBDaHJvbWUxMCssU2FmYXJpNS4xKyAqL1xcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KC00NWRlZywgI2ZmZmY4OCA4MSUsICNmZmZmODggODIlLCAjZmZmZjg4IDgyJSwgI2ZmZmZjNiAxMDAlKTtcXG4gIC8qIE9wZXJhIDExLjEwKyAqL1xcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNmZmZmODggODElLCAjZmZmZjg4IDgyJSwgI2ZmZmY4OCA4MiUsICNmZmZmYzYgMTAwJSk7XFxuICAvKiBJRTEwKyAqL1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ZmZmY4OCA4MSUsICNmZmZmODggODIlLCAjZmZmZjg4IDgyJSwgI2ZmZmZjNiAxMDAlKTtcXG4gIC8qIFczQyAqL1xcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI2ZmZmY4OCcsIGVuZENvbG9yc3RyPScjZmZmZmM2JywgR3JhZGllbnRUeXBlPTEpO1xcbiAgLyogSUU2LTkgZmFsbGJhY2sgb24gaG9yaXpvbnRhbCBncmFkaWVudCAqL1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDYwcHggMTBweDtcXG59XFxuXFxuLm5vdGVUZXh0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggNHB4IDEycHg7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDRweCAxMnB4O1xcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAuM3M7XFxufVxcblxcbi5kZWxldGVOb3RlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogLTIzOHB4O1xcbiAgcmlnaHQ6IC0xOTNweDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIHotaW5kZXg6IDEwO1xcbiAgY29sb3I6IHJnYigxNzksIDE3OSwgMTc5KTtcXG59XFxuXFxuLmRlbGV0ZU5vdGU6aG92ZXIge1xcbiAgY29sb3I6IHJlZDtcXG4gIHRyYW5zaXRpb246IGNvbG9yIC4zcztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnNpZGViYXIge1xcbiAgcGFkZGluZzogMzBweCAzMHB4IDMwcHggMDtcXG4gIGdyaWQtYXJlYTogc2lkZWJhcjtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogdmFyKC0tbWFpbi1ib3JkZXItcmFkaXVzKTtcXG59XFxuXFxuLnNpZGViYXIgbGkge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIHBhZGRpbmc6IHZhcigtLXNpZGViYXItcGFkZGluZyk7XFxufVxcblxcbiNwcm9qZWN0c0xpc3Qge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuI25vdGVzIHtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxufVxcblxcbi5wcm9qZWN0cyB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaWRlYmFyLXBhZGRpbmcpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdHNCdG4ge1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0SXRlbSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMnB4IDEzMHB4IDMwcHg7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDIycHg7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zaWRlYmFyLXBhZGRpbmcpO1xcbn1cXG5cXG4ucHJvamVjdE5hbWUge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgcGFkZGluZzogOHB4IDVweCAhaW1wb3J0YW50O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuXFxuLnByb2plY3RMZW5ndGgge1xcbiAgZm9udC1zaXplOiAuOHJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyNDUsIDI0NSk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3NpZGViYXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsaURBQWlEO0FBQ25EOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIsb0NBQW9DO0VBQ3BDLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuc2lkZWJhciB7XFxuICBwYWRkaW5nOiAzMHB4IDMwcHggMzBweCAwO1xcbiAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiB2YXIoLS1tYWluLWJvcmRlci1yYWRpdXMpO1xcbn1cXG5cXG4uc2lkZWJhciBsaSB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgcGFkZGluZzogdmFyKC0tc2lkZWJhci1wYWRkaW5nKTtcXG59XFxuXFxuI3Byb2plY3RzTGlzdCB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4jbm90ZXMge1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG59XFxuXFxuLnByb2plY3RzIHtcXG4gIHBhZGRpbmc6IHZhcigtLXNpZGViYXItcGFkZGluZyk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0c0J0biB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLnByb2plY3RJdGVtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIycHggMTMwcHggMzBweDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMjJweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXNpZGViYXItcGFkZGluZyk7XFxufVxcblxcbi5wcm9qZWN0TmFtZSB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA4cHggNXB4ICFpbXBvcnRhbnQ7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG5cXG4ucHJvamVjdExlbmd0aCB7XFxuICBmb250LXNpemU6IC44cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0NSwgMjQ1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmxpc3Qge1xcbiAgcGFkZGluZzogMCAyMHB4O1xcbiAgZ3JpZC1hcmVhOiBsaXN0O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiB2YXIoLS1tYWluLWJvcmRlci1yYWRpdXMpO1xcbn1cXG5cXG4udG9wUm93LFxcbi5saXN0VmlldyB7XFxuICB3aWR0aDogbWF4KDUwMHB4LCAxMDAlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udG9wUm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxuICBwYWRkaW5nLXRvcDogMjBweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiB2YXIoLS1tYWluLWJvcmRlci1yYWRpdXMpO1xcbn1cXG5cXG4ubGlzdFRpdGxlIHtcXG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xcbn1cXG5cXG4ubGlzdEJ0biB7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG59XFxuXFxuLmR1ZURhdGUge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IDk1cHg7XFxufVxcblxcblxcbi50b2RvIHtcXG4gIG1hcmdpbjogNXB4IDA7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNXB4IDFmciAxMTBweCAyNXB4IDMwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgcGFkZGluZzogMCAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuLnRvZG86aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3ViLWNvbG9yKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2Utb3V0O1xcbn1cXG5cXG4vKiAudG9kbzpudGgtY2hpbGQoZXZlbil7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUwLCAyNTAsIDI1MCk7XFxufSAqL1xcblxcbi50b2RvTmFtZSB7XFxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XFxufVxcblxcbi50b2RvRGVzYyB7XFxuICBncmlkLWNvbHVtbjogMiAvIHNwYW4gNDtcXG4gIGZvbnQtc2l6ZTogLjhyZW07XFxuICBwYWRkaW5nOiAxMHB4IDIwcHggMjBweCAyMHB4O1xcbn1cXG5cXG4udG9kb0RhdGUge1xcbiAgZm9udC1zaXplOiAuOHJlbTtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG59XFxuXFxuLnNvcnREYXRlIHtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG59XFxuXFxuLmRlbFByb2plY3QsXFxuLmRlbFRvZG8sXFxuLmVkaXRUb2RvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBjb2xvcjogcmdiKDAsIDAsIDAsIC4yKTtcXG59XFxuXFxuLmRlbFByb2plY3Q6aG92ZXIsXFxuLmRlbFRvZG86aG92ZXIge1xcbiAgY29sb3I6IHJlZDtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuNXMgZWFzZTtcXG59XFxuXFxuLmVkaXRUb2RvOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjVzIGVhc2U7XFxufVxcblxcbi8qIFJlbW92ZSBkZWZhdWx0IGNoZWNrYm94IHN0eWxlcyAqL1xcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgLyogQWRkIGlmIG5vdCB1c2luZyBhdXRvcHJlZml4ZXIgKi9cXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAvKiBGb3IgaU9TIDwgMTUgdG8gcmVtb3ZlIGdyYWRpZW50IGJhY2tncm91bmQgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAvKiBOb3QgcmVtb3ZlZCB2aWEgYXBwZWFyYW5jZSAqL1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIGNvbG9yOiBncmV5O1xcbiAgd2lkdGg6IC45cmVtO1xcbiAgaGVpZ2h0OiAuOXJlbTtcXG4gIGJvcmRlcjogMC4xcmVtIHNvbGlkIGdyZXk7XFxuICBib3JkZXItcmFkaXVzOiAwLjE1ZW07XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMDc1ZW0pO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgd2lkdGg6IDAuNjVyZW07XFxuICBoZWlnaHQ6IDAuNjVyZW07XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgdHJhbnNpdGlvbjogMTIwbXMgdHJhbnNmb3JtIGVhc2UtaW4tb3V0O1xcbiAgLyogQ2hlY2tlZCBjb2xvciAqL1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMWVtIDFlbSByZ2IoMjI4LCAyMjgsIDIyOCk7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZDo6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3RvZG9MaXN0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsa0RBQWtEO0FBQ3BEOztBQUVBOztFQUVFLHVCQUF1QjtFQUN2Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsa0RBQWtEO0FBQ3BEOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7O0FBR0E7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLCtDQUErQztFQUMvQyxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsNkJBQTZCO0FBQy9COztBQUVBOztHQUVHOztBQUVIO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBOzs7RUFHRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qix1QkFBdUI7QUFDekI7O0FBRUE7O0VBRUUsVUFBVTtFQUNWLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QiwyQkFBMkI7QUFDN0I7O0FBRUEsbUNBQW1DO0FBQ25DO0VBQ0Usa0NBQWtDO0VBQ2xDLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsK0NBQStDO0VBQy9DLHNCQUFzQjtFQUN0QiwrQkFBK0I7RUFDL0IsU0FBUztBQUNYOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsK0JBQStCO0VBQy9CLGFBQWE7RUFDYixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsdUNBQXVDO0VBQ3ZDLGtCQUFrQjtFQUNsQiw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmxpc3Qge1xcbiAgcGFkZGluZzogMCAyMHB4O1xcbiAgZ3JpZC1hcmVhOiBsaXN0O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiB2YXIoLS1tYWluLWJvcmRlci1yYWRpdXMpO1xcbn1cXG5cXG4udG9wUm93LFxcbi5saXN0VmlldyB7XFxuICB3aWR0aDogbWF4KDUwMHB4LCAxMDAlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udG9wUm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxuICBwYWRkaW5nLXRvcDogMjBweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiB2YXIoLS1tYWluLWJvcmRlci1yYWRpdXMpO1xcbn1cXG5cXG4ubGlzdFRpdGxlIHtcXG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xcbn1cXG5cXG4ubGlzdEJ0biB7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG59XFxuXFxuLmR1ZURhdGUge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IDk1cHg7XFxufVxcblxcblxcbi50b2RvIHtcXG4gIG1hcmdpbjogNXB4IDA7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNXB4IDFmciAxMTBweCAyNXB4IDMwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgcGFkZGluZzogMCAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuLnRvZG86aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3ViLWNvbG9yKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2Utb3V0O1xcbn1cXG5cXG4vKiAudG9kbzpudGgtY2hpbGQoZXZlbil7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUwLCAyNTAsIDI1MCk7XFxufSAqL1xcblxcbi50b2RvTmFtZSB7XFxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XFxufVxcblxcbi50b2RvRGVzYyB7XFxuICBncmlkLWNvbHVtbjogMiAvIHNwYW4gNDtcXG4gIGZvbnQtc2l6ZTogLjhyZW07XFxuICBwYWRkaW5nOiAxMHB4IDIwcHggMjBweCAyMHB4O1xcbn1cXG5cXG4udG9kb0RhdGUge1xcbiAgZm9udC1zaXplOiAuOHJlbTtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG59XFxuXFxuLnNvcnREYXRlIHtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG59XFxuXFxuLmRlbFByb2plY3QsXFxuLmRlbFRvZG8sXFxuLmVkaXRUb2RvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBjb2xvcjogcmdiKDAsIDAsIDAsIC4yKTtcXG59XFxuXFxuLmRlbFByb2plY3Q6aG92ZXIsXFxuLmRlbFRvZG86aG92ZXIge1xcbiAgY29sb3I6IHJlZDtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuNXMgZWFzZTtcXG59XFxuXFxuLmVkaXRUb2RvOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjVzIGVhc2U7XFxufVxcblxcbi8qIFJlbW92ZSBkZWZhdWx0IGNoZWNrYm94IHN0eWxlcyAqL1xcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgLyogQWRkIGlmIG5vdCB1c2luZyBhdXRvcHJlZml4ZXIgKi9cXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAvKiBGb3IgaU9TIDwgMTUgdG8gcmVtb3ZlIGdyYWRpZW50IGJhY2tncm91bmQgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAvKiBOb3QgcmVtb3ZlZCB2aWEgYXBwZWFyYW5jZSAqL1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIGNvbG9yOiBncmV5O1xcbiAgd2lkdGg6IC45cmVtO1xcbiAgaGVpZ2h0OiAuOXJlbTtcXG4gIGJvcmRlcjogMC4xcmVtIHNvbGlkIGdyZXk7XFxuICBib3JkZXItcmFkaXVzOiAwLjE1ZW07XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMDc1ZW0pO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgd2lkdGg6IDAuNjVyZW07XFxuICBoZWlnaHQ6IDAuNjVyZW07XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgdHJhbnNpdGlvbjogMTIwbXMgdHJhbnNmb3JtIGVhc2UtaW4tb3V0O1xcbiAgLyogQ2hlY2tlZCBjb2xvciAqL1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMWVtIDFlbSByZ2IoMjI4LCAyMjgsIDIyOCk7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZDo6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb21wb25lbnRzL3NpZGViYXIuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29tcG9uZW50cy90b2RvTGlzdC5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzJfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb21wb25lbnRzL2VkaXRUb2RvLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfM19fXyBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbXBvbmVudHMvbm90ZXMuY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMV9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMl9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLXNpZGViYXItcGFkZGluZzogMCAzNXB4O1xcbiAgLS1tYWluLWJvcmRlci1yYWRpdXM6IDM1cHg7XFxuICAtLW1haW4tY29sb3I6IHJnYigxMzYsIDAsIDI1NSk7XFxuICAtLXN1Yi1jb2xvcjogcmdiKDI0MiwgMjI2LCAyNTUpO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbmh0bWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxufVxcblxcbmh0bWwsIGJvZHl7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUwcHggMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgXFxcImhlYWRlciBoZWFkZXJcXFwiXFxuICBcXFwic2lkZWJhciBsaXN0XFxcIjtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctbGVmdDogMzVweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnNlbGVjdGFibGUge1xcbiAgcGFkZGluZy10b3A6IDVweCAhaW1wb3J0YW50O1xcbiAgcGFkZGluZy1ib3R0b206IDVweCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uc2VsZWN0YWJsZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM1LCAyMzUsIDIzNSk7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNTBweDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1MHB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnNlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1Yi1jb2xvcik7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNTBweDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1MHB4O1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMnMgZWFzZS1pbjtcXG59XFxuXFxuLmNvbGxhcHNle1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5oaWRlIHtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzLCBvcGFjaXR5IDAuNXMgbGluZWFyO1xcbn1cXG5cXG4uaGlkZTpob3ZlciB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uc3RyaWtlIHtcXG4gIC8qIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoOyAqL1xcbiAgb3BhY2l0eTogLjI7XFxufVxcblxcbmksXFxuYnV0dG9uLFxcbi5zZWxlY3RhYmxlLFxcbi50b2RvTmFtZSxcXG4uZWRpdFRvZG8sXFxuLmRlbFRvZG8sXFxuLnNvcnREYXRlLFxcbmlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUtBO0VBQ0UseUJBQXlCO0VBQ3pCLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLDRCQUE0QjtFQUM1Qjs7Z0JBRWM7RUFDZCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUNBQW1DO0VBQ25DLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsNkJBQTZCO0VBQzdCLGdDQUFnQztFQUNoQywrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsNkJBQTZCO0VBQzdCLGdDQUFnQztFQUNoQyx3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxXQUFXO0FBQ2I7O0FBRUE7Ozs7Ozs7O0VBUUUsZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IFxcXCIuL2NvbXBvbmVudHMvc2lkZWJhci5jc3NcXFwiO1xcbkBpbXBvcnQgXFxcIi4vY29tcG9uZW50cy90b2RvTGlzdC5jc3NcXFwiO1xcbkBpbXBvcnQgXFxcIi4vY29tcG9uZW50cy9lZGl0VG9kby5jc3NcXFwiO1xcbkBpbXBvcnQgXFxcIi4vY29tcG9uZW50cy9ub3Rlcy5jc3NcXFwiO1xcblxcbjpyb290IHtcXG4gIC0tc2lkZWJhci1wYWRkaW5nOiAwIDM1cHg7XFxuICAtLW1haW4tYm9yZGVyLXJhZGl1czogMzVweDtcXG4gIC0tbWFpbi1jb2xvcjogcmdiKDEzNiwgMCwgMjU1KTtcXG4gIC0tc3ViLWNvbG9yOiByZ2IoMjQyLCAyMjYsIDI1NSk7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgcGFkZGluZzogNXB4IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuaHRtbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG59XFxuXFxuaHRtbCwgYm9keXtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNTBweCAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICBcXFwiaGVhZGVyIGhlYWRlclxcXCJcXG4gIFxcXCJzaWRlYmFyIGxpc3RcXFwiO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiAzNXB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc2VsZWN0YWJsZSB7XFxuICBwYWRkaW5nLXRvcDogNXB4ICFpbXBvcnRhbnQ7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5zZWxlY3RhYmxlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIzNSwgMjM1KTtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MHB4O1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDUwcHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3ViLWNvbG9yKTtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MHB4O1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDUwcHg7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlLWluO1xcbn1cXG5cXG4uY29sbGFwc2V7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmhpZGUge1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMsIG9wYWNpdHkgMC41cyBsaW5lYXI7XFxufVxcblxcbi5oaWRlOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5zdHJpa2Uge1xcbiAgLyogdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7ICovXFxuICBvcGFjaXR5OiAuMjtcXG59XFxuXFxuaSxcXG5idXR0b24sXFxuLnNlbGVjdGFibGUsXFxuLnRvZG9OYW1lLFxcbi5lZGl0VG9kbyxcXG4uZGVsVG9kbyxcXG4uc29ydERhdGUsXFxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgY3JlYXRlTmV3SW5wdXQgfSBmcm9tICcuL2NyZWF0ZU5ld0lucHV0RE9NJztcbmltcG9ydCB7IHJlbmRlckluYm94LCByZW5kZXJUb2RheSwgcmVuZGVyV2Vla2x5LCByZW5kZXJOb3RlcyB9IGZyb20gJy4vcmVuZGVySXRlbXMnO1xuaW1wb3J0IHsgc29ydERhdGUsIGNvbG9yU2VsZWN0ZWQgfSBmcm9tICcuLi9pbmRleCc7XG5cblxuZXhwb3J0IGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5leHBvcnQgY29uc3Qgc2lkZWJhciA9IG1haW4ucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcbmNvbnN0IGluYm94ID0gc2lkZWJhci5xdWVyeVNlbGVjdG9yKCcjaW5ib3gnKTtcbmNvbnN0IHRvZGF5ID0gc2lkZWJhci5xdWVyeVNlbGVjdG9yKCcjdG9kYXknKTtcbmNvbnN0IHdlZWtseSA9IHNpZGViYXIucXVlcnlTZWxlY3RvcignI3dlZWsnKTtcbmNvbnN0IG5vdGVzID0gc2lkZWJhci5xdWVyeVNlbGVjdG9yKCcjbm90ZXMnKTtcbmNvbnN0IHNlbGVjdGFibGUgPSBzaWRlYmFyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3RhYmxlJyk7XG5cbmV4cG9ydCBjb25zdCBwcm9qZWN0c1ZpZXcgPSBtYWluLnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c1ZpZXcnKTtcbmNvbnN0IHByb2plY3RzQnRuID0gbWFpbi5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHNCdG4nKTtcbmNvbnN0IGxpc3QgPSBtYWluLnF1ZXJ5U2VsZWN0b3IoJy5saXN0Jyk7XG5leHBvcnQgY29uc3QgbGlzdFZpZXcgPSBsaXN0LnF1ZXJ5U2VsZWN0b3IoJy5saXN0VmlldycpO1xuZXhwb3J0IGNvbnN0IGxpc3RCdG4gPSBsaXN0LnF1ZXJ5U2VsZWN0b3IoJy5saXN0QnRuJyk7XG5leHBvcnQgY29uc3QgZGF0ZUxhYmVsID0gbGlzdC5xdWVyeVNlbGVjdG9yKCcuZHVlRGF0ZScpO1xuZXhwb3J0IGNvbnN0IHNvcnREYXRlQnRuID0gbGlzdC5xdWVyeVNlbGVjdG9yKCcuc29ydERhdGUnKTtcblxuZXhwb3J0IGxldCBsaXN0VGl0bGUgPSBsaXN0LnF1ZXJ5U2VsZWN0b3IoJy5saXN0VGl0bGUnKTtcbnByb2plY3RzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlTmV3SW5wdXQocHJvamVjdHNWaWV3LCAncHJvamVjdCcpKTtcbmxpc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVOZXdJbnB1dChsaXN0VmlldywgJ3RvZG8nKSk7XG5pbmJveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlckluYm94KTtcbnRvZGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVuZGVyVG9kYXkpO1xud2Vla2x5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVuZGVyV2Vla2x5KTtcbm5vdGVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVuZGVyTm90ZXMpO1xuc29ydERhdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzb3J0RGF0ZSk7XG5zZWxlY3RhYmxlLmZvckVhY2goZWwgPT4ge1xuICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbG9yU2VsZWN0ZWQpO1xufSk7XG4iLCJleHBvcnQgY2xhc3MgTGlzdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG4gIGxpc3QgPSBbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbFRvZG8ocHJvamVjdCwgdG9kbykge1xuICBwcm9qZWN0Lmxpc3Quc3BsaWNlKHByb2plY3QubGlzdC5pbmRleE9mKHRvZG8pLCAxKVxufSIsImV4cG9ydCBjbGFzcyBOb3RlIHtcbiAgY29uc3RydWN0b3IodGV4dCA9ICcnKSB7XG4gICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0Tm90ZVRleHQobm90ZSwgdGV4dCkge1xuICBub3RlLnRleHQgPSB0ZXh0XG59IiwiZXhwb3J0IGNsYXNzIFRvRG8ge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBkdWVEYXRlLCBkZXNjID0gJ05vIGRlc2NyaXB0aW9uJykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLmRlc2MgPSBkZXNjO1xuICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFRvRG9OYW1lKHRvZG8sIG5hbWUpIHtcbiAgdG9kby5uYW1lID0gbmFtZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0VG9Eb0RhdGUodG9kbywgZGF0ZSkge1xuICB0b2RvLmR1ZURhdGUgPSBkYXRlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRUb0RvRGVzYyh0b2RvLCBkZXNjKSB7XG4gIHRvZG8uZGVzYyA9IGRlc2Ncbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVRvRG9Db21wbGV0ZWQodG9kbykge1xuICB0b2RvLmNvbXBsZXRlZCA9ICF0b2RvLmNvbXBsZXRlZFxufSIsImltcG9ydCB7IHJlbW92ZUFsbENoaWxkTm9kZXMsIGN1cnJlbnRQcm9qZWN0LCBzZXRMb2NhbFN0b3JhZ2UgfSBmcm9tICcuLi9pbmRleCc7XG5pbXBvcnQgeyBtYWluLCBsaXN0VmlldyB9IGZyb20gXCIuL0RPTWVsZW1lbnRzXCI7XG5pbXBvcnQgeyByZW5kZXJJbmJveCwgcmVuZGVyVG9Eb3MgfSBmcm9tIFwiLi9yZW5kZXJJdGVtc1wiO1xuaW1wb3J0IHsgc2V0VG9Eb05hbWUsIHNldFRvRG9EYXRlLCBzZXRUb0RvRGVzYyB9IGZyb20gJy4vVG9Ebyc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVkaXRJbnB1dChlbCkge1xuICBjb25zdCBlZGl0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbGFiZWxOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgY29uc3QgbGFiZWxEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgY29uc3QgbGFiZWxEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgY29uc3QgbmV3TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGNvbnN0IG5ld0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjb25zdCBuZXdEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgY29uc3QgYWNjZXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gIGVkaXRzLmNsYXNzTGlzdC5hZGQoJ2VkaXRzJyk7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKCdlZGl0SW5wdXRzJyk7XG5cbiAgbGFiZWxOYW1lLnRleHRDb250ZW50ID0gJ05hbWU6JztcbiAgbGFiZWxEYXRlLnRleHRDb250ZW50ID0gJ0R1ZTonO1xuICBsYWJlbERlc2MudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb246JztcbiAgYWNjZXB0LnRleHRDb250ZW50ID0gJ0NvbmZpcm0nO1xuICBjYW5jZWwudGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcbiAgbGFiZWxOYW1lLmh0bWxGb3IgPSAnZWRpdE5hbWUnO1xuICBsYWJlbERhdGUuaHRtbEZvciA9ICdlZGl0RGF0ZSc7XG4gIGxhYmVsRGVzYy5odG1sRm9yID0gJ2VkaXREZXNjJztcbiAgbmV3TmFtZS5pZCA9ICdlZGl0TmFtZSc7XG4gIG5ld0RhdGUuaWQgPSAnZWRpdERhdGUnO1xuICBuZXdEZXNjLmlkID0gJ2VkaXREZXNjJztcbiAgYWNjZXB0LmlkID0gJ2VkaXRBY2NlcHQnO1xuICBjYW5jZWwuaWQgPSAnZWRpdENhbmNlbCc7XG4gIG5ld05hbWUudHlwZSA9ICd0ZXh0JztcbiAgbmV3RGF0ZS50eXBlID0gJ2RhdGUnO1xuXG4gIG5ld05hbWUudmFsdWUgPSBlbC5uYW1lO1xuICBuZXdEYXRlLnZhbHVlID0gZWwuZHVlRGF0ZTtcbiAgbmV3RGVzYy52YWx1ZSA9IGVsLmRlc2M7XG5cbiAgZGl2LmFwcGVuZChsYWJlbE5hbWUsIG5ld05hbWUsIGxhYmVsRGVzYywgbmV3RGVzYywgbGFiZWxEYXRlLCBuZXdEYXRlLCBhY2NlcHQsIGNhbmNlbCk7XG4gIGVkaXRzLmFwcGVuZChkaXYpO1xuICBtYWluLmFwcGVuZChlZGl0cyk7XG5cbiAgYWNjZXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdXBkYXRlVG9kbyhlbCkpO1xuICBjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYW5jZWxFZGl0KTtcblxuICBmdW5jdGlvbiBjYW5jZWxFZGl0KCkge1xuICAgIGVkaXRzLnJlbW92ZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlVG9kbyhlbCkge1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBuYW1lID0gbmV3TmFtZS52YWx1ZTtcbiAgICAgIGNvbnN0IGR1ZSA9IG5ld0RhdGUudmFsdWU7XG4gICAgICBjb25zdCBkZXNjID0gbmV3RGVzYy52YWx1ZTtcbiAgICAgIHNldFRvRG9OYW1lKGVsLCBuYW1lKTtcbiAgICAgIHNldFRvRG9EYXRlKGVsLCBkdWUpO1xuICAgICAgc2V0VG9Eb0Rlc2MoZWwsIGRlc2MpO1xuICAgICAgXG4gICAgICByZW1vdmVBbGxDaGlsZE5vZGVzKGVkaXRzKTtcbiAgICAgIHJlbW92ZUFsbENoaWxkTm9kZXMobGlzdFZpZXcpO1xuICAgICAgaWYgKG1haW4uZGF0YXNldC5saXN0ID09PSAnYWxsSW5ib3gnKSB7XG4gICAgICAgIHJlbmRlckluYm94KCk7XG4gICAgICB9IGVsc2UgeyByZW5kZXJUb0RvcyhjdXJyZW50UHJvamVjdCk7IH07XG4gICAgICBlZGl0cy5yZW1vdmUoKTtcbiAgICB9O1xuICB9XG59XG4iLCJpbXBvcnQgeyByZW1vdmVBbGxDaGlsZE5vZGVzLCBjdXJyZW50UHJvamVjdCB9IGZyb20gJy4uL2luZGV4JztcbmltcG9ydCB7IHByb2plY3RzVmlldywgbGlzdFZpZXcgfSBmcm9tIFwiLi9ET01lbGVtZW50c1wiO1xuaW1wb3J0IHsgcmVuZGVyUHJvamVjdHMsIHJlbmRlclRvRG9zIH0gZnJvbSBcIi4vcmVuZGVySXRlbXNcIjtcbmltcG9ydCB7IGNyZWF0ZU5ld0l0ZW0gfSBmcm9tICcuL2NyZWF0ZU5ld0l0ZW0nO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTmV3SW5wdXQodmlldywgdHlwZSkge1xuICByZXR1cm4gKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG5ld05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IG5ld0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IG5ld0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIGNvbnN0IGNvbmZpcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBib3R0b21Sb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCduZXdJbnB1dHMnKTtcbiAgICBuZXdOYW1lLmNsYXNzTGlzdC5hZGQoJ25ld05hbWUnKTtcbiAgICBuZXdEYXRlLmNsYXNzTGlzdC5hZGQoJ25ld0RhdGUnKTtcbiAgICBuZXdEZXNjLmNsYXNzTGlzdC5hZGQoJ25ld0Rlc2MnKTtcbiAgICBjb25maXJtLmNsYXNzTGlzdC5hZGQoJ2NvbmZpcm1OZXcnKTtcbiAgICBjYW5jZWwuY2xhc3NMaXN0LmFkZCgnY2FuY2VsTmV3Jyk7XG4gICAgYm90dG9tUm93LmNsYXNzTGlzdC5hZGQoJ25ld0lucHV0Qm90dG9tJyk7XG5cbiAgICBuZXdOYW1lLnBsYWNlaG9sZGVyID0gYGFkZCBhICR7dHlwZX0uLi5gO1xuICAgIG5ld0Rlc2MucGxhY2Vob2xkZXIgPSAnYWRkIGEgYnJlaWYgZGVzY3JpcHRpb24nO1xuXG4gICAgbmV3TmFtZS50eXBlID0gJ3RleHQnO1xuICAgIG5ld0RhdGUudHlwZSA9ICdkYXRlJztcblxuICAgIGNvbmZpcm0udGV4dENvbnRlbnQgPSAnQ29uZmlybSc7XG4gICAgY2FuY2VsLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG5cbiAgICByZW1vdmVBbGxDaGlsZE5vZGVzKHZpZXcpO1xuICAgIGRpdi5hcHBlbmQobmV3TmFtZSk7XG5cblxuICAgIGlmICh0eXBlID09PSAncHJvamVjdCcpIHtcbiAgICAgIGRpdi5hcHBlbmQoY29uZmlybSwgY2FuY2VsKTtcbiAgICAgIHJlbmRlclByb2plY3RzKCk7XG4gICAgICBuZXdOYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgY3JlYXRlTmV3SXRlbShcbiAgICAgICAgbmV3TmFtZSwgcHJvamVjdHNWaWV3LCB0eXBlKSk7XG4gICAgICBjb25maXJtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlTmV3SXRlbShcbiAgICAgICAgbmV3TmFtZSwgcHJvamVjdHNWaWV3LCB0eXBlKSk7XG4gICAgfTtcblxuICAgIGlmICh0eXBlID09PSAndG9kbycpIHtcbiAgICAgIGJvdHRvbVJvdy5hcHBlbmQobmV3RGF0ZSwgY29uZmlybSwgY2FuY2VsKTtcbiAgICAgIGRpdi5hcHBlbmQobmV3RGVzYywgYm90dG9tUm93KTtcbiAgICAgIHJlbmRlclRvRG9zKGN1cnJlbnRQcm9qZWN0KTtcbiAgICAgIG5ld05hbWUuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBjcmVhdGVOZXdJdGVtKFxuICAgICAgICBuZXdOYW1lLCBsaXN0VmlldywgdHlwZSwgbmV3RGF0ZSwgbmV3RGVzYykpO1xuICAgICAgY29uZmlybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZU5ld0l0ZW0oXG4gICAgICAgIG5ld05hbWUsIGxpc3RWaWV3LCB0eXBlLCBuZXdEYXRlLCBuZXdEZXNjKSk7XG4gICAgfTtcblxuICAgIGNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGRpdi5yZW1vdmUoKSk7XG4gICAgdmlldy5hcHBlbmQoZGl2KTtcbiAgICBuZXdOYW1lLnNlbGVjdCgpO1xuICB9O1xufVxuIiwiaW1wb3J0IHsgTGlzdCB9IGZyb20gJy4vTGlzdCc7XG5pbXBvcnQgeyBUb0RvIH0gZnJvbSAnLi9Ub0RvJztcbmltcG9ydCB7IHJlbW92ZUFsbENoaWxkTm9kZXMsIGN1cnJlbnRQcm9qZWN0LCBwcm9qZWN0cyB9IGZyb20gJy4uL2luZGV4JztcbmltcG9ydCB7IHByb2plY3RzVmlldyB9IGZyb20gXCIuL0RPTWVsZW1lbnRzXCI7XG5pbXBvcnQgeyByZW5kZXJQcm9qZWN0cywgcmVuZGVyVG9Eb3MgfSBmcm9tIFwiLi9yZW5kZXJJdGVtc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTmV3SXRlbShuZXdOYW1lLCB2aWV3LCB0eXBlLCBuZXdEYXRlLCBuZXdEZXNjKSB7XG4gIHJldHVybiAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJyB8fCBlLnRhcmdldC5jbGFzc0xpc3QgPT0gJ2NvbmZpcm1OZXcnKSB7XG4gICAgICBjb25zdCBuYW1lID0gbmV3TmFtZS52YWx1ZTtcbiAgICAgIHJlbW92ZUFsbENoaWxkTm9kZXModmlldyk7XG5cbiAgICAgIGlmICh0eXBlID09PSAncHJvamVjdCcpIHtcbiAgICAgICAgY3JlYXRlTmV3UHJvamVjdChuYW1lKTtcbiAgICAgICAgcmVuZGVyUHJvamVjdHMoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGUgPT09ICd0b2RvJykge1xuICAgICAgICBjcmVhdGVOZXdUb2RvKG5hbWUsIG5ld0RhdGUsIG5ld0Rlc2MpO1xuICAgICAgICByZW5kZXJUb0RvcyhjdXJyZW50UHJvamVjdCk7XG4gICAgICAgIHJlbW92ZUFsbENoaWxkTm9kZXMocHJvamVjdHNWaWV3KTtcbiAgICAgICAgcmVuZGVyUHJvamVjdHMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5mdW5jdGlvbiBjcmVhdGVOZXdUb2RvKG5hbWUsIG5ld0RhdGUsIG5ld0Rlc2MpIHtcbiAgY29uc3QgdG9kbyA9IG5ldyBUb0RvKG5hbWUsIG5ld0RhdGUudmFsdWUsIG5ld0Rlc2MudmFsdWUpO1xuICBjdXJyZW50UHJvamVjdC5saXN0LnB1c2godG9kbyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0KG5hbWUpIHtcbiAgY29uc3QgbGlzdCA9IG5ldyBMaXN0KG5hbWUpO1xuICBwcm9qZWN0cy5wdXNoKGxpc3QpO1xuICByZXR1cm4gbGlzdDtcbn1cbiIsImltcG9ydCB7IG5vdGVzQXJyLCBzZXRMb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi5cIjtcbmltcG9ydCB7IGNyZWF0ZU5ld05vdGVET00gfSBmcm9tIFwiLi9jcmVhdGVOZXdOb3RlRE9NXCI7XG5pbXBvcnQgeyBOb3RlIH0gZnJvbSBcIi4vTm90ZVwiO1xuXG5leHBvcnQgY29uc3QgYWRkTm90ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuYWRkTm90ZUJ0bi50ZXh0Q29udGVudCA9ICdBZGQnO1xuYWRkTm90ZUJ0bi5jbGFzc0xpc3QuYWRkKCduZXdOb3RlJylcblxuYWRkTm90ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZU5ld05vdGUoKSlcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5ld05vdGUodGV4dCkge1xuICByZXR1cm4gKCkgPT4ge1xuICAgIGNvbnN0IG5vdGUgPSBuZXcgTm90ZSh0ZXh0KVxuICAgIGNyZWF0ZU5ld05vdGVET00obm90ZSk7XG4gICAgbm90ZXNBcnIucHVzaChub3RlKVxuICAgIHNldExvY2FsU3RvcmFnZSgnbm90ZXMnLCBub3Rlc0FycilcbiAgICByZXR1cm4gbm90ZTtcbiAgfVxufSIsImltcG9ydCB7IG5vdGVzQXJyLCBzZXRMb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi5cIjtcbmltcG9ydCB7IGxpc3RWaWV3IH0gZnJvbSBcIi4vRE9NZWxlbWVudHNcIjtcbmltcG9ydCB7IHJlbmRlck5vdGVzIH0gZnJvbSBcIi4vcmVuZGVySXRlbXNcIjtcbmltcG9ydCB7IHNldE5vdGVUZXh0IH0gZnJvbSBcIi4vTm90ZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTmV3Tm90ZURPTShpdGVtKSB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCB0ZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gIGNvbnN0IGRlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGRpdi5jbGFzc0xpc3QuYWRkKCdub3RlSXRlbScpO1xuICB0ZXh0QXJlYS5jbGFzc0xpc3QuYWRkKCdub3RlVGV4dCcpO1xuICBkZWwuY2xhc3NMaXN0LmFkZCgnZGVsZXRlTm90ZScpO1xuXG4gIHRleHRBcmVhLnBsYWNlaG9sZGVyID0gJ2FkZCBicmllZiBub3RlLi4uJ1xuICBkZWwuaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEtc29saWQgZmEtZGVsZXRlLWxlZnRcIj48L2k+JztcbiAgdGV4dEFyZWEudmFsdWUgPSBpdGVtLnRleHQ7XG5cbiAgZGl2LmFwcGVuZCh0ZXh0QXJlYSwgZGVsKTtcbiAgbGlzdFZpZXcuYXBwZW5kKGRpdik7XG5cbiAgZGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlTm90ZSk7XG4gIHRleHRBcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHVwZGF0ZU5vdGUpXG5cbiAgZnVuY3Rpb24gdXBkYXRlTm90ZSgpIHtcbiAgICBzZXROb3RlVGV4dChpdGVtLCB0aGlzLnZhbHVlKVxuICAgIHNldExvY2FsU3RvcmFnZSgnbm90ZXMnLCBub3Rlc0FycilcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlbGV0ZU5vdGUoKSB7XG4gICAgbm90ZXNBcnIuc3BsaWNlKG5vdGVzQXJyLmluZGV4T2YoaXRlbSksIDEpO1xuICAgIHNldExvY2FsU3RvcmFnZSgnbm90ZXMnLCBub3Rlc0FycilcbiAgICByZW5kZXJOb3RlcygpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBjb2xvclNlbGVjdGVkLCBwcm9qZWN0cywgcmVtb3ZlQWxsQ2hpbGROb2RlcywgdXBkYXRlQ3VycmVudFByb2plY3QsIHVwZGF0ZVByb2plY3RzfSBmcm9tICcuLi9pbmRleCc7XG5pbXBvcnQgeyBwcm9qZWN0c1ZpZXcsIG1haW4sIGxpc3RUaXRsZSwgbGlzdEJ0biwgZGF0ZUxhYmVsLCBzb3J0RGF0ZUJ0biwgbGlzdFZpZXcgfSBmcm9tIFwiLi9ET01lbGVtZW50c1wiO1xuaW1wb3J0IHsgcmVuZGVyUHJvamVjdHMsIHJlbmRlckluYm94LCByZW5kZXJUb0RvcyB9IGZyb20gXCIuL3JlbmRlckl0ZW1zXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0RE9NKGl0ZW0sIGluZGV4KSB7XG4gIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgZGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgZGVsLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWRlbGV0ZS1sZWZ0XCI+PC9pPic7XG4gIHNwYW4udGV4dENvbnRlbnQgPSBpdGVtLmxpc3QubGVuZ3RoO1xuICBwLnRleHRDb250ZW50ID0gaXRlbS5uYW1lO1xuXG4gIHAuY2xhc3NMaXN0LmFkZCgncHJvamVjdE5hbWUnKTtcbiAgZGVsLmNsYXNzTGlzdC5hZGQoJ2RlbFByb2plY3QnKTtcbiAgc3Bhbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0TGVuZ3RoJyk7XG4gIGxpLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RJdGVtJyk7XG4gIGxpLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGFibGUnKTtcbiAgZGVsLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcblxuICBsaS5hcHBlbmQoc3BhbiwgcCwgZGVsKTtcblxuICBwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVuZGVyU2VsZWN0ZWQpO1xuICBzcGFuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVuZGVyU2VsZWN0ZWQpO1xuICBkZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVQcm9qZWN0KGl0ZW0pKTtcbiAgbGkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb2xvclNlbGVjdGVkKTtcbiAgbGkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHsgZGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTsgfSk7XG4gIGxpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7IGRlbC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7IH0pO1xuICByZXR1cm4gbGk7XG5cbiAgZnVuY3Rpb24gZGVsZXRlUHJvamVjdChpdGVtKSB7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IGZpbHRlcmVkID0gcHJvamVjdHMuZmlsdGVyKGtleSA9PiBrZXkgIT0gaXRlbSk7XG4gICAgICB1cGRhdGVQcm9qZWN0cyhmaWx0ZXJlZClcbiAgICAgIHJlbW92ZUFsbENoaWxkTm9kZXMocHJvamVjdHNWaWV3KTtcbiAgICAgIHJlbmRlclByb2plY3RzKCk7XG4gICAgICByZW5kZXJJbmJveCgpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJTZWxlY3RlZCgpIHtcbiAgICBtYWluLmRhdGFzZXQubGlzdCA9IGl0ZW0ubmFtZTtcbiAgICB1cGRhdGVDdXJyZW50UHJvamVjdChpdGVtKVxuICAgIGxpc3RUaXRsZS50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcbiAgICBsaXN0VGl0bGUuYWZ0ZXIobGlzdEJ0bik7XG4gICAgZGF0ZUxhYmVsLmFwcGVuZChzb3J0RGF0ZUJ0bik7XG4gICAgcmVtb3ZlQWxsQ2hpbGROb2RlcyhsaXN0Vmlldyk7XG4gICAgcmVuZGVyVG9Eb3MocHJvamVjdHNbaW5kZXhdKTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IGNoYW5nZURhdGVGb3JtYXQsIHJlbW92ZUFsbENoaWxkTm9kZXMsIHNldExvY2FsU3RvcmFnZSwgcHJvamVjdHMgfSBmcm9tICcuLi9pbmRleCc7XG5pbXBvcnQgeyBsaXN0VmlldywgcHJvamVjdHNWaWV3LCBtYWluIH0gZnJvbSBcIi4vRE9NZWxlbWVudHNcIjtcbmltcG9ydCB7IHJlbmRlclByb2plY3RzLCByZW5kZXJJbmJveCwgcmVuZGVyVG9Eb3MgfSBmcm9tIFwiLi9yZW5kZXJJdGVtc1wiO1xuaW1wb3J0IHsgY3JlYXRlRWRpdElucHV0IH0gZnJvbSBcIi4vY3JlYXRlRWRpdElucHV0RE9NXCI7XG5pbXBvcnQgeyBkZWxUb2RvIH0gZnJvbSAnLi9MaXN0JztcbmltcG9ydCB7IHRvZ2dsZVRvRG9Db21wbGV0ZWQgfSBmcm9tICcuL1RvRG8nO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTmV3VG9Eb0RPTShlbCwgcHJvamVjdEFycmF5KSB7XG4gIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBkZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgY2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgY2hlY2sudHlwZSA9ICdjaGVja2JveCc7XG4gIGVkaXQuaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEtcmVndWxhciBmYS1wZW4tdG8tc3F1YXJlXCI+PC9pPic7XG4gIGRlbC5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1kZWxldGUtbGVmdFwiPjwvaT4nO1xuICBwLnRleHRDb250ZW50ID0gZWwubmFtZTtcbiAgc3Bhbi50ZXh0Q29udGVudCA9IGNoYW5nZURhdGVGb3JtYXQoZWwuZHVlRGF0ZSk7XG4gIGRlc2MudGV4dENvbnRlbnQgPSBlbC5kZXNjO1xuXG4gIGNoZWNrLmNsYXNzTGlzdC5hZGQoJ2NoZWNrQ29tcGxldGUnKTtcbiAgbGkuY2xhc3NMaXN0LmFkZCgndG9kbycpO1xuICBwLmNsYXNzTGlzdC5hZGQoJ3RvZG9OYW1lJyk7XG4gIHNwYW4uY2xhc3NMaXN0LmFkZCgndG9kb0RhdGUnKTtcbiAgZGVzYy5jbGFzc0xpc3QuYWRkKCd0b2RvRGVzYycpO1xuICBkZXNjLmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNlJyk7XG4gIGVkaXQuY2xhc3NMaXN0LmFkZCgnZWRpdFRvZG8nKTtcbiAgZWRpdC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gIGRlbC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gIGRlbC5jbGFzc0xpc3QuYWRkKCdkZWxUb2RvJyk7XG5cbiAgbGkuYXBwZW5kKGNoZWNrLCBwLCBzcGFuLCBlZGl0LCBkZWwsIGRlc2MpO1xuXG4gIGlmIChlbC5jb21wbGV0ZWQpIHtcbiAgICBjaGVjay5jaGVja2VkID0gdHJ1ZTtcbiAgICBwLmNsYXNzTGlzdC5hZGQoJ3N0cmlrZScpO1xuICAgIHNwYW4uY2xhc3NMaXN0LmFkZCgnc3RyaWtlJyk7XG4gICAgZWRpdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgZGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgfVxuICBlZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWRpdFRvZG8oZWwpKTtcbiAgZGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlVG9kbyhwcm9qZWN0QXJyYXkpKTtcbiAgbGkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHVuaGlkZU9wdGlvbnMoZGVsLCBlZGl0KSk7XG4gIGxpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBoaWRlT3B0aW9ucyhlbCwgZGVsLCBlZGl0KSk7XG4gIGNoZWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlQ29tcGxldGVkKGVsKSk7XG4gIHAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVEZXNjKTtcbiAgcmV0dXJuIGxpO1xuXG4gIGZ1bmN0aW9uIHRvZ2dsZURlc2MoKSB7XG4gICAgZGVzYy5jbGFzc0xpc3QudG9nZ2xlKCdjb2xsYXBzZScpO1xuICAgIGxpLmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdGVkJyk7XG4gIH1cblxuICBmdW5jdGlvbiBlZGl0VG9kbyhlbCkge1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjcmVhdGVFZGl0SW5wdXQoZWwpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBoaWRlT3B0aW9ucyhlbCwgZGVsLCBlZGl0KSB7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmICghZWwuY29tcGxldGVkKSB7XG4gICAgICAgIGRlbC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIGVkaXQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB1bmhpZGVPcHRpb25zKGRlbCwgZWRpdCkge1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgZWRpdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlbGV0ZVRvZG8ocHJvamVjdEFycmF5KSB7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRlbFRvZG8ocHJvamVjdEFycmF5LCBlbCk7XG4gICAgICByZW1vdmVBbGxDaGlsZE5vZGVzKGxpc3RWaWV3KTtcbiAgICAgIHJlbW92ZUFsbENoaWxkTm9kZXMocHJvamVjdHNWaWV3KTtcbiAgICAgIHJlbmRlclByb2plY3RzKCk7XG4gICAgICBpZiAobWFpbi5kYXRhc2V0Lmxpc3QgPT09ICdhbGxJbmJveCcpIHtcbiAgICAgICAgcmVuZGVySW5ib3goKTtcbiAgICAgIH0gZWxzZSB7IHJlbmRlclRvRG9zKHByb2plY3RBcnJheSk7IH1cbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlQ29tcGxldGVkKGVsKSB7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHRvZ2dsZVRvRG9Db21wbGV0ZWQoZWwpO1xuICAgICAgc2V0TG9jYWxTdG9yYWdlKCdwcm9qZWN0cycsIHByb2plY3RzKTtcbiAgICAgIGlmICghZWwuY29tcGxldGVkKSB7XG4gICAgICAgIHAuY2xhc3NMaXN0LnJlbW92ZSgnc3RyaWtlJyk7XG4gICAgICAgIHNwYW4uY2xhc3NMaXN0LnJlbW92ZSgnc3RyaWtlJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwLmNsYXNzTGlzdC5hZGQoJ3N0cmlrZScpO1xuICAgICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoJ3N0cmlrZScpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCB7IGNyZWF0ZU5ld1Byb2plY3RET00gfSBmcm9tICcuL2NyZWF0ZU5ld1Byb2plY3RET00nO1xuaW1wb3J0IHsgY3JlYXRlTmV3VG9Eb0RPTSB9IGZyb20gJy4vY3JlYXRlTmV3VG9Eb0RPTSc7XG5pbXBvcnQgeyBhZGROb3RlQnRuIH0gZnJvbSAnLi9jcmVhdGVOZXdOb3RlJztcbmltcG9ydCB7IHJlbW92ZUFsbENoaWxkTm9kZXMsIHByb2plY3RzLCB1cGRhdGVDdXJyZW50UHJvamVjdCwgc2V0TG9jYWxTdG9yYWdlLCBub3Rlc0FyciB9IGZyb20gJy4uL2luZGV4JztcbmltcG9ydCB7IGxpc3RUaXRsZSwgZGF0ZUxhYmVsLCBsaXN0QnRuLCBzb3J0RGF0ZUJ0biwgbWFpbiwgbGlzdFZpZXcsIHByb2plY3RzVmlldyB9IGZyb20gXCIuL0RPTWVsZW1lbnRzXCI7XG5pbXBvcnQgeyBjcmVhdGVOZXdOb3RlRE9NIH0gZnJvbSAnLi9jcmVhdGVOZXdOb3RlRE9NJztcblxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVySW5ib3goKSB7XG4gIGxpc3RUaXRsZS5hZnRlcihkYXRlTGFiZWwpO1xuICBsaXN0QnRuLnJlbW92ZSgpO1xuICBzb3J0RGF0ZUJ0bi5yZW1vdmUoKTtcbiAgbWFpbi5kYXRhc2V0Lmxpc3QgPSAnYWxsSW5ib3gnO1xuICBsaXN0VGl0bGUudGV4dENvbnRlbnQgPSAnSW5ib3gnO1xuICByZW1vdmVBbGxDaGlsZE5vZGVzKGxpc3RWaWV3KTtcbiAgcHJvamVjdHMuZm9yRWFjaChlbCA9PiB7XG4gICAgcmVuZGVyVG9Eb3MoZWwpO1xuICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJUb2RheSgpIHtcbiAgbGlzdFRpdGxlLmFmdGVyKGRhdGVMYWJlbCk7XG4gIGxpc3RCdG4ucmVtb3ZlKCk7XG4gIGFkZE5vdGVCdG4ucmVtb3ZlKClcbiAgcmVtb3ZlQWxsQ2hpbGROb2RlcyhsaXN0Vmlldyk7XG4gIG1haW4uZGF0YXNldC5saXN0ID0gJ1RvZGF5U2VjdGlvbic7XG4gIGxpc3RUaXRsZS50ZXh0Q29udGVudCA9ICdUb2RheSc7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyV2Vla2x5KCkge1xuICBsaXN0VGl0bGUuYWZ0ZXIoZGF0ZUxhYmVsKTtcbiAgbGlzdEJ0bi5yZW1vdmUoKTtcbiAgYWRkTm90ZUJ0bi5yZW1vdmUoKVxuICByZW1vdmVBbGxDaGlsZE5vZGVzKGxpc3RWaWV3KTtcbiAgbWFpbi5kYXRhc2V0Lmxpc3QgPSAnV2Vla2x5U2VjdGlvbic7XG4gIGxpc3RUaXRsZS50ZXh0Q29udGVudCA9ICdUaGlzIFdlZWsnO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlck5vdGVzKCkge1xuICByZW1vdmVBbGxDaGlsZE5vZGVzKGxpc3RWaWV3KTtcbiAgZGF0ZUxhYmVsLnJlbW92ZSgpO1xuICBsaXN0QnRuLnJlbW92ZSgpO1xuICBtYWluLmRhdGFzZXQubGlzdCA9ICdOb3Rlc1NlY3Rpb24nO1xuICBsaXN0VGl0bGUudGV4dENvbnRlbnQgPSAnTm90ZXMnO1xuICBsaXN0VGl0bGUuYWZ0ZXIoYWRkTm90ZUJ0bilcbiAgbm90ZXNBcnIuZm9yRWFjaChlbCA9PiB7XG4gICAgY3JlYXRlTmV3Tm90ZURPTShlbClcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclRvRG9zKHByb2plY3RBcnJheSkge1xuICBhZGROb3RlQnRuLnJlbW92ZSgpXG4gIHByb2plY3RBcnJheS5saXN0LmZvckVhY2goZWwgPT4ge1xuICAgIGNvbnN0IGxpID0gY3JlYXRlTmV3VG9Eb0RPTShlbCwgcHJvamVjdEFycmF5KTtcbiAgICBsaXN0Vmlldy5hcHBlbmRDaGlsZChsaSk7XG4gICAgdXBkYXRlQ3VycmVudFByb2plY3QocHJvamVjdEFycmF5KTtcbiAgfSk7XG4gIHNldExvY2FsU3RvcmFnZSgncHJvamVjdHMnLCBwcm9qZWN0cyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJQcm9qZWN0cygpIHtcbiAgYWRkTm90ZUJ0bi5yZW1vdmUoKVxuICBwcm9qZWN0cy5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBsaSA9IGNyZWF0ZU5ld1Byb2plY3RET00oZWwsIGluZGV4KTtcbiAgICBwcm9qZWN0c1ZpZXcuYXBwZW5kQ2hpbGQobGkpO1xuICB9KTtcbiAgc2V0TG9jYWxTdG9yYWdlKCdwcm9qZWN0cycsIHByb2plY3RzKVxufVxuIiwiaW1wb3J0IHsgVG9EbywgdG9nZ2xlVG9Eb0NvbXBsZXRlZCB9IGZyb20gJy4vVG9Ebyc7XG5pbXBvcnQgeyBjcmVhdGVOZXdQcm9qZWN0IH0gZnJvbSBcIi4vY3JlYXRlTmV3SXRlbVwiO1xuaW1wb3J0IHsgTm90ZSB9IGZyb20gJy4vTm90ZSc7XG5pbXBvcnQgeyBub3Rlc0FyciB9IGZyb20gJy4uJztcblxuZXhwb3J0IGNvbnN0IHRvZG9zID0gKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0MSA9IGNyZWF0ZU5ld1Byb2plY3QoJ1Byb2plY3QnKTtcbiAgY29uc3QgcHJvamVjdDIgPSBjcmVhdGVOZXdQcm9qZWN0KCdDaG9yZXMnKTtcbiAgXG4gIGNvbnN0IHRvZG8wID0gbmV3IFRvRG8oJ0NyZWF0ZSBkZWxldGUgYnV0dG9uJywgJzIwMjItMDktMjknLCAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIE5hbSBsaWJlcm8ganVzdG8gbGFvcmVldCBzaXQgYW1ldCBjdXJzdXMuIEFtZXQgZXN0IHBsYWNlcmF0IGluIGVnZXN0YXMgZXJhdC4nKTtcbiAgcHJvamVjdDEubGlzdC5wdXNoKHRvZG8wKTtcbiAgdG9nZ2xlVG9Eb0NvbXBsZXRlZCh0b2RvMCk7XG5cbiAgY29uc3QgdG9kbyA9IG5ldyBUb0RvKCdDcmVhdGUgYSB3YXkgdG8gdXBkYXRlIHZhbHVlcycsICcyMDIyLTA5LTI5Jyk7XG4gIHByb2plY3QxLmxpc3QucHVzaCh0b2RvKTtcbiAgdG9nZ2xlVG9Eb0NvbXBsZXRlZCh0b2RvKVxuXG4gIGNvbnN0IHRvZG8xMCA9IG5ldyBUb0RvKCdFeHBhbmQgZm9yIGRlc2NyaXB0aW9uJywgJzIwMjItMDktMzAnLCAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIE5hbSBsaWJlcm8ganVzdG8gbGFvcmVldCBzaXQgYW1ldCBjdXJzdXMuIEFtZXQgZXN0IHBsYWNlcmF0IGluIGVnZXN0YXMgZXJhdC4nKTtcbiAgcHJvamVjdDEubGlzdC5wdXNoKHRvZG8xMCk7XG4gIHRvZ2dsZVRvRG9Db21wbGV0ZWQodG9kbzEwKTtcblxuXG4gIGNvbnN0IHRvZG85ID0gbmV3IFRvRG8oJ0NyZWF0ZSBjdXJyZW50bHkgc2VsZWN0ZWQgcHJvamVjdCBmdW5jdGlvbicsICcyMDIyLTEwLTAxJyk7XG4gIHByb2plY3QxLmxpc3QucHVzaCh0b2RvOSk7XG4gIHRvZ2dsZVRvRG9Db21wbGV0ZWQodG9kbzkpXG5cbiAgY29uc3QgdG9kbzEgPSBuZXcgVG9EbygnU29ydCBkYXRlcycsICcyMDIyLTEwLTAxJyk7XG4gIHByb2plY3QxLmxpc3QucHVzaCh0b2RvMSk7XG4gIHRvZ2dsZVRvRG9Db21wbGV0ZWQodG9kbzEpXG5cbiAgY29uc3QgdG9kbzggPSBuZXcgVG9EbygnQ2hhbmdlIGRhdGUgZm9ybWF0JywgJzIwMjItMTAtMDEnKTtcbiAgcHJvamVjdDEubGlzdC5wdXNoKHRvZG84KTtcbiAgdG9nZ2xlVG9Eb0NvbXBsZXRlZCh0b2RvOClcblxuICBjb25zdCB0b2RvMiA9IG5ldyBUb0RvKCdGaWx0ZXIgYnkgdG9kYXknLCAnMjAyMi0xMC0wMScpO1xuICBwcm9qZWN0MS5saXN0LnB1c2godG9kbzIpO1xuXG4gIGNvbnN0IHRvZG8zID0gbmV3IFRvRG8oJ0ZpbHRlciBieSB0aGlzIHdlZWsnLCAnMjAyMi0xMC0wMScpO1xuICBwcm9qZWN0MS5saXN0LnB1c2godG9kbzMpO1xuXG4gIGNvbnN0IHRvZG83ID0gbmV3IFRvRG8oJ0FkZCBub3RlcyBzZWN0aW9uJywgJzIwMjItMTAtMDEnKTtcbiAgcHJvamVjdDEubGlzdC5wdXNoKHRvZG83KTtcbiAgdG9nZ2xlVG9Eb0NvbXBsZXRlZCh0b2RvNyk7XG5cbiAgY29uc3QgdG9kbzEyID0gbmV3IFRvRG8oJ0FkZCBsb2NhbFN0b3JhZ2UgYWJpbGl0aWVzJywgJzIwMjItMTAtMDYnKVxuICBwcm9qZWN0MS5saXN0LnB1c2godG9kbzEyKTtcbiAgdG9nZ2xlVG9Eb0NvbXBsZXRlZCh0b2RvMTIpXG5cbiAgY29uc3QgdG9kbzQgPSBuZXcgVG9EbygnQ2xlYW4gcm9vbScsIG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdKTtcbiAgcHJvamVjdDIubGlzdC5wdXNoKHRvZG80KTtcblxuICBjb25zdCB0b2RvNSA9IG5ldyBUb0RvKCdEbyBsYXVuZHJ5JywgbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF0pO1xuICBwcm9qZWN0Mi5saXN0LnB1c2godG9kbzUpO1xuICB0b2dnbGVUb0RvQ29tcGxldGVkKHRvZG81KVxuXG4gIGNvbnN0IHRvZG82ID0gbmV3IFRvRG8oJ0J1eSBncm9jZXJpZXMnLCBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXSk7XG4gIHByb2plY3QyLmxpc3QucHVzaCh0b2RvNik7XG5cbiAgY29uc3QgdG9kbzExID0gbmV3IFRvRG8oJ1Rha2Ugb3V0IHRoZSB0cmFzaCcsIG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdKTtcbiAgcHJvamVjdDIubGlzdC5wdXNoKHRvZG8xMSk7XG4gIHRvZ2dsZVRvRG9Db21wbGV0ZWQodG9kbzExKVxufTtcblxuZXhwb3J0IGNvbnN0IG5vdGVzID0gKCkgPT4ge1xuICBjb25zdCBub3RlMCA9IG5ldyBOb3RlKCdvcmFuZ2VzXFxuYmFuYW5hc1xcbmFwcGxlc1xcbmdyYXBlcycpXG4gIG5vdGVzQXJyLnB1c2gobm90ZTApXG5cbiAgY29uc3Qgbm90ZTEgPSBuZXcgTm90ZSgnQ1BVXFxuR1BVXFxuUkFNXFxuUFNVXFxuU1NEXFxuTW90aGVyYm9hcmQnKVxuICBub3Rlc0Fyci5wdXNoKG5vdGUxKVxuXG4gIGNvbnN0IG5vdGUyID0gbmV3IE5vdGUoJ29uZVxcbnR3b1xcbnRocmVlXFxuZm91cicpXG4gIG5vdGVzQXJyLnB1c2gobm90ZTIpXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICBjb25zdCBuZXdOb3RlcyA9IG5ldyBOb3RlKCk7XG4gICAgbm90ZXNBcnIucHVzaChuZXdOb3RlcylcbiAgfVxufSIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5pbXBvcnQgKiBhcyBkZW1vIGZyb20gJy4vY29tcG9uZW50cy90ZXN0JztcbmltcG9ydCB7IHJlbmRlckluYm94LCByZW5kZXJQcm9qZWN0cywgcmVuZGVyVG9Eb3MgfSBmcm9tICcuL2NvbXBvbmVudHMvcmVuZGVySXRlbXMnO1xuaW1wb3J0IHsgc2lkZWJhciwgc29ydERhdGVCdG4sIGxpc3RWaWV3IH0gZnJvbSAnLi9jb21wb25lbnRzL0RPTWVsZW1lbnRzJztcblxuZXhwb3J0IGxldCBub3Rlc0FyciA9IFtdO1xuZXhwb3J0IGxldCBwcm9qZWN0cyA9IFtdO1xuZXhwb3J0IGxldCBjdXJyZW50UHJvamVjdDtcblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVByb2plY3RzKGl0ZW0pe1xuICByZXR1cm4gcHJvamVjdHMgPSBpdGVtO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUN1cnJlbnRQcm9qZWN0KGl0ZW0pIHtcbiAgcmV0dXJuIGN1cnJlbnRQcm9qZWN0ID0gaXRlbTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlTm90ZXMoaXRlbSkge1xuICByZXR1cm4gbm90ZXNBcnIgPSBpdGVtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlRGF0ZUZvcm1hdChkYXRlSVNPc3RyaW5nKXtcbiAgaWYoIWRhdGVJU09zdHJpbmcpIHJldHVybiAnJztcbiAgY29uc3Qgc3BsaXQgPSBkYXRlSVNPc3RyaW5nLnNwbGl0KCctJyk7XG4gIGNvbnN0IG5ld0RhdGUgPSBgJHtzcGxpdFsxXX0vJHtzcGxpdFsyXX0vJHtzcGxpdFswXX1gO1xuICByZXR1cm4gbmV3RGF0ZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29sb3JTZWxlY3RlZChlKXtcbiAgY29uc3Qgc2VsZWN0YWJsZSA9IHNpZGViYXIucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdGFibGUnKVxuICBzZWxlY3RhYmxlLmZvckVhY2goZWw9PntcbiAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICB9KVxuICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc29ydERhdGUoKSB7XG4gIGlmICghc29ydERhdGVCdG4uZGF0YXNldC5zb3J0KSB7XG4gICAgc29ydERhdGVCdG4uZGF0YXNldC5zb3J0ID0gJ2FzYydcbiAgfVxuICBwcm9qZWN0cy5mb3JFYWNoKGVsID0+IHtcbiAgICBlbC5saXN0LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIGlmIChzb3J0RGF0ZUJ0bi5kYXRhc2V0LnNvcnQgPT09ICdhc2MnKSB7XG4gICAgICAgIGlmIChhLmR1ZURhdGUgPiBiLmR1ZURhdGUpXG4gICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIGlmIChhLmR1ZURhdGUgPCBiLmR1ZURhdGUpXG4gICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgICAgZWxzZSBpZihzb3J0RGF0ZUJ0bi5kYXRhc2V0LnNvcnQgPT09ICdkc2MnKXtcbiAgICAgICAgaWYgKGEuZHVlRGF0ZSA+IGIuZHVlRGF0ZSlcbiAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIGlmIChhLmR1ZURhdGUgPCBiLmR1ZURhdGUpXG4gICAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcbiAgfSk7XG4gIGlmIChzb3J0RGF0ZUJ0bi5kYXRhc2V0LnNvcnQgPT09ICdhc2MnKSB7XG4gICAgc29ydERhdGVCdG4uZGF0YXNldC5zb3J0ID0gJ2RzYyc7XG4gICAgc29ydERhdGVCdG4uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEtc29saWQgZmEtc29ydC11cFwiPjwvaT4nXG4gIH0gZWxzZSBpZihzb3J0RGF0ZUJ0bi5kYXRhc2V0LnNvcnQgPT09ICdkc2MnKSB7XG4gICAgc29ydERhdGVCdG4uZGF0YXNldC5zb3J0ID0gJ2FzYyc7XG4gICAgc29ydERhdGVCdG4uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEtc29saWQgZmEtc29ydC1kb3duXCI+PC9pPidcbiAgfVxuICByZW1vdmVBbGxDaGlsZE5vZGVzKGxpc3RWaWV3KVxuICByZW5kZXJUb0RvcyhjdXJyZW50UHJvamVjdClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUFsbENoaWxkTm9kZXMocGFyZW50KSB7XG4gIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0TG9jYWxTdG9yYWdlKHN0b3JlZE5hbWUsIGRhdGFBcnIpe1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzdG9yZWROYW1lLCBKU09OLnN0cmluZ2lmeShkYXRhQXJyKSlcbn1cblxuZnVuY3Rpb24gZ2V0TG9jYWxTdG9yYWdlKHN0b3JlZE5hbWUpe1xuICBpZiAoc3RvcmVkTmFtZSA9PT0gJ3Byb2plY3RzJykge1xuICAgIHVwZGF0ZVByb2plY3RzKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oc3RvcmVkTmFtZSkpKVxuICB9IFxuICBlbHNlIGlmIChzdG9yZWROYW1lID09PSAnbm90ZXMnKSB7XG4gICAgdXBkYXRlTm90ZXMoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzdG9yZWROYW1lKSkpXG4gIH1cbn1cblxuXG5pZih0eXBlb2YgbG9jYWxTdG9yYWdlLnByb2plY3RzID09PSAndW5kZWZpbmVkJykge1xuICBkZW1vLnRvZG9zKCk7XG4gIHNldExvY2FsU3RvcmFnZSgncHJvamVjdHMnLCBwcm9qZWN0cylcbn1cbmlmICh0eXBlb2YgbG9jYWxTdG9yYWdlLm5vdGVzID09PSAndW5kZWZpbmVkJykge1xuICBkZW1vLm5vdGVzKCk7XG4gIHNldExvY2FsU3RvcmFnZSgnbm90ZXMnLCBub3Rlc0Fycilcbn1cblxuLy8gbG9jYWxTdG9yYWdlLmNsZWFyKClcbmdldExvY2FsU3RvcmFnZSgncHJvamVjdHMnKTtcbmdldExvY2FsU3RvcmFnZSgnbm90ZXMnKTtcbnJlbmRlclByb2plY3RzKCk7XG5yZW5kZXJJbmJveCgpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9