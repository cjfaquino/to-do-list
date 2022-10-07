/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --sidebar-padding: 0 20px;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nul {\n  list-style-type: none;\n}\n\nbutton {\n  padding: 5px 15px;\n}\n\ntextarea {\n  resize: none;\n}\n\nhtml, body{\n  height: 100%;\n}\n\nmain {\n  display: grid;\n  grid-template-columns: 250px 1fr;\n  grid-template-rows: 50px 1fr;\n  grid-template-areas: \n  \"header header\"\n  \"sidebar list\";\n  height: 100%;\n}\n\nheader {\n  grid-area: header;\n  background-color: rgb(172, 211, 255);\n  display: flex;\n  align-items: center;\n  padding-left: 35px;\n}\n\n.selectable:hover {\n  background-color: rgb(235, 235, 235);\n  border-top-right-radius: 50px;\n  border-bottom-right-radius: 50px;\n}\n\n.selected {\n  background-color: rgb(255, 255, 255);\n  border-top-right-radius: 50px;\n  border-bottom-right-radius: 50px;\n}\n\n.collapse{\n  display: none;\n  overflow: hidden;\n}\n\n.hide {\n  opacity: 0;\n  transition: visibility 0s, opacity 0.5s linear;\n}\n\n.hide:hover {\n  opacity: 1;\n}\n\n.strike {\n  /* text-decoration: line-through; */\n  opacity: .2;\n}\n\n.selectable:hover,\n.todoName:hover,\n.editTodo:hover,\n.delTodo:hover,\ninput[type='checkbox'] {\n  cursor: pointer;\n}\n\n.sidebar {\n  padding: 30px 30px 30px 0;\n  grid-area: sidebar;\n  font-size: 1.5rem;\n  font-weight: 600;\n  height: 100%;\n  background-color: rgb(238, 246, 255);\n}\n\n.sidebar li {\n  margin-top: 10px;\n  padding: var(--sidebar-padding);\n}\n\n#projectsList{\n  padding: 0;\n}\n\n.projects {\n  padding: var(--sidebar-padding);\n  display: flex;\n  margin-bottom: 10px;\n  align-items: center;\n}\n\n.projectsBtn {\n  margin-left: 10px;\n}\n\n.projectItem {\n  display: grid;\n  grid-template-columns: 22px 130px 30px;\n  font-size: 1.2rem;\n  font-weight: 400;\n  padding-left: 30px !important;\n}\n\n.projectName {\n  padding: 0 5px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.projectLength {\n  font-size: .8rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: grey;\n  background-color: rgb(255, 255, 255);\n  border-radius: 50%;\n}\n\n.delProject,\n.delTodo,\n.editTodo {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: rgb(0, 0, 0, .2);\n}\n\n.delProject:hover,\n.delTodo:hover {\n  color: red;\n  transition: color 0.5s ease;\n}\n\n.editTodo:hover {\n  color: rgba(0, 0, 0, 0.5);\n  transition: color 0.5s ease;\n}\n\n#notes {\n  margin-top: 50px;\n}\n\n.list {\n  grid-area: list;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.topRow,\n.listView {\n  width: max(500px, 100%);\n}\n\n.topRow {\n  display: flex;\n  align-items: center;\n  margin-bottom: 15px;\n  padding-top: 20px;\n}\n\n.listTitle {\n  margin-left: 40px;\n}\n\n.listBtn {\n  margin-left: 20px;\n}\n\n.dueDate {\n  margin-left: auto;\n  margin-right: 95px;\n}\n\n\n.todo {\n  display: grid;\n  grid-template-columns: 15px 1fr 110px 25px 30px;\n  align-items: center;\n  font-size: 1rem;\n  padding: 10px 10px;\n}\n\n.todo:nth-child(even){\n  background-color: rgb(250, 250, 250);\n}\n\n.todoName {\n  padding-left: 10px;\n}\n\n.todoDesc {\n  grid-column: 2 / span 4;\n  font-size: .8rem;\n  padding: 5px;\n}\n\n.todoDate {\n  font-size: .8rem;\n  color: red;\n}\n\n\n.edits {\n  height: 100vh;\n  width: 100vw;\n  z-index: 10;\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(180, 180, 180, 0.397);\n}\n\n.editInputs {\n  z-index: 20;\n  padding: 20px;\n  background-color: white;\n  border: 2px solid black;\n  border-radius: 5px;\n  height: 250px;\n  width: 500px;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  font-size: 1.1rem;\n}\n\n.editInputs button {\n  padding: 5px;\n  width: 80px;\n}\n\n#editName,\n#editDesc {\n  margin-bottom: 10px;\n  border: 1px solid black;\n  border-radius: 2px;\n  padding: 5px;\n  font-size: .8rem;\n}\n\n#editName {\n  width: 100%;\n}\n\n#editDesc {\n  height: 80px;\n  width: 100%;\n}\n\n#editAccept {\n  margin-left: auto;\n}\n\n.newInputs {\n  margin-left: 30px;\n  padding: 10px;\n  width: min(500px, 100%);\n}\n\n.newName,\n.newDesc {\n  border: 1px solid grey;\n  border-radius: 3px;\n  padding: 5px;\n}\n\n.newName {\n  width: 100%;\n  font-size: 1rem;\n  margin-bottom: 10px;\n}\n\n.newDesc {\n  display: block;\n  width: 100%;\n  height: 100px;\n  font-size: 1rem;\n  margin-bottom: 10px;\n}\n\n.newDate {\n  padding: 3px;\n  font-size: .9rem;\n  display: flex;\n  align-items: center;\n}\n\n.newInputBottom {\n  display: flex;\n  align-items: center;\n}\n\n.confirmNew,\n.cancelNew {\n  font-size: .9rem;\n}\n\n.confirmNew {\n  margin-left: auto;\n  margin-right: 10px;\n}\n\n\n/* Remove default checkbox styles */\ninput[type=\"checkbox\"] {\n  /* Add if not using autoprefixer */\n  -webkit-appearance: none;\n  appearance: none;\n  /* For iOS < 15 to remove gradient background */\n  background-color: #fff;\n  /* Not removed via appearance */\n  margin: 0;\n}\n\ninput[type=\"checkbox\"] {\n  appearance: none;\n  background-color: #fff;\n  margin: 0;\n  font: inherit;\n  color: grey;\n  width: .9rem;\n  height: .9rem;\n  border: 0.1rem solid grey;\n  border-radius: 0.15em;\n  transform: translateY(-0.075em);\n  display: grid;\n  place-content: center;\n}\n\ninput[type=\"checkbox\"]::before {\n  content: \"\";\n  width: 0.65rem;\n  height: 0.65rem;\n  transform: scale(0);\n  transition: 120ms transform ease-in-out;\n  /* Checked color */\n  box-shadow: inset 1em 1em rgb(228, 228, 228);\n}\n\ninput[type=\"checkbox\"]:checked::before {\n  transform: scale(1);\n}\n\n.newNote {\n  margin-left: 20px;\n}\n\nmain[data-list='NotesSection'] .listView {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.noteItem {\n  margin: 20px;\n  width: 220px;\n  height: 240px;\n  \n}\n\n.noteText {\n  border: none;\n  background-color: rgb(255, 255, 230);\n  padding: 20px;\n  height: 100%;\n  width: 100%;\n  font-size: 1.5rem;\n}\n\n.noteText:focus {\n  outline: none !important;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;\n  transition: box-shadow .3s;\n}\n\n.deleteNote {\n  position: relative;\n  top: -238px;\n  right: -193px;\n  width: fit-content;\n  z-index: 10;\n  color: rgb(179, 179, 179);\n}\n\n.deleteNote:hover {\n  color: red;\n  transition: color .3s;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --sidebar-padding: 0 20px;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nul {\n  list-style-type: none;\n}\n\nbutton {\n  padding: 5px 15px;\n}\n\ntextarea {\n  resize: none;\n}\n\nhtml, body{\n  height: 100%;\n}\n\nmain {\n  display: grid;\n  grid-template-columns: 250px 1fr;\n  grid-template-rows: 50px 1fr;\n  grid-template-areas: \n  \"header header\"\n  \"sidebar list\";\n  height: 100%;\n}\n\nheader {\n  grid-area: header;\n  background-color: rgb(172, 211, 255);\n  display: flex;\n  align-items: center;\n  padding-left: 35px;\n}\n\n.selectable:hover {\n  background-color: rgb(235, 235, 235);\n  border-top-right-radius: 50px;\n  border-bottom-right-radius: 50px;\n}\n\n.selected {\n  background-color: rgb(255, 255, 255);\n  border-top-right-radius: 50px;\n  border-bottom-right-radius: 50px;\n}\n\n.collapse{\n  display: none;\n  overflow: hidden;\n}\n\n.hide {\n  opacity: 0;\n  transition: visibility 0s, opacity 0.5s linear;\n}\n\n.hide:hover {\n  opacity: 1;\n}\n\n.strike {\n  /* text-decoration: line-through; */\n  opacity: .2;\n}\n\n.selectable:hover,\n.todoName:hover,\n.editTodo:hover,\n.delTodo:hover,\ninput[type='checkbox'] {\n  cursor: pointer;\n}\n\n.sidebar {\n  padding: 30px 30px 30px 0;\n  grid-area: sidebar;\n  font-size: 1.5rem;\n  font-weight: 600;\n  height: 100%;\n  background-color: rgb(238, 246, 255);\n}\n\n.sidebar li {\n  margin-top: 10px;\n  padding: var(--sidebar-padding);\n}\n\n#projectsList{\n  padding: 0;\n}\n\n.projects {\n  padding: var(--sidebar-padding);\n  display: flex;\n  margin-bottom: 10px;\n  align-items: center;\n}\n\n.projectsBtn {\n  margin-left: 10px;\n}\n\n.projectItem {\n  display: grid;\n  grid-template-columns: 22px 130px 30px;\n  font-size: 1.2rem;\n  font-weight: 400;\n  padding-left: 30px !important;\n}\n\n.projectName {\n  padding: 0 5px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.projectLength {\n  font-size: .8rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: grey;\n  background-color: rgb(255, 255, 255);\n  border-radius: 50%;\n}\n\n.delProject,\n.delTodo,\n.editTodo {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: rgb(0, 0, 0, .2);\n}\n\n.delProject:hover,\n.delTodo:hover {\n  color: red;\n  transition: color 0.5s ease;\n}\n\n.editTodo:hover {\n  color: rgba(0, 0, 0, 0.5);\n  transition: color 0.5s ease;\n}\n\n#notes {\n  margin-top: 50px;\n}\n\n.list {\n  grid-area: list;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.topRow,\n.listView {\n  width: max(500px, 100%);\n}\n\n.topRow {\n  display: flex;\n  align-items: center;\n  margin-bottom: 15px;\n  padding-top: 20px;\n}\n\n.listTitle {\n  margin-left: 40px;\n}\n\n.listBtn {\n  margin-left: 20px;\n}\n\n.dueDate {\n  margin-left: auto;\n  margin-right: 95px;\n}\n\n\n.todo {\n  display: grid;\n  grid-template-columns: 15px 1fr 110px 25px 30px;\n  align-items: center;\n  font-size: 1rem;\n  padding: 10px 10px;\n}\n\n.todo:nth-child(even){\n  background-color: rgb(250, 250, 250);\n}\n\n.todoName {\n  padding-left: 10px;\n}\n\n.todoDesc {\n  grid-column: 2 / span 4;\n  font-size: .8rem;\n  padding: 5px;\n}\n\n.todoDate {\n  font-size: .8rem;\n  color: red;\n}\n\n\n.edits {\n  height: 100vh;\n  width: 100vw;\n  z-index: 10;\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(180, 180, 180, 0.397);\n}\n\n.editInputs {\n  z-index: 20;\n  padding: 20px;\n  background-color: white;\n  border: 2px solid black;\n  border-radius: 5px;\n  height: 250px;\n  width: 500px;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  font-size: 1.1rem;\n}\n\n.editInputs button {\n  padding: 5px;\n  width: 80px;\n}\n\n#editName,\n#editDesc {\n  margin-bottom: 10px;\n  border: 1px solid black;\n  border-radius: 2px;\n  padding: 5px;\n  font-size: .8rem;\n}\n\n#editName {\n  width: 100%;\n}\n\n#editDesc {\n  height: 80px;\n  width: 100%;\n}\n\n#editAccept {\n  margin-left: auto;\n}\n\n.newInputs {\n  margin-left: 30px;\n  padding: 10px;\n  width: min(500px, 100%);\n}\n\n.newName,\n.newDesc {\n  border: 1px solid grey;\n  border-radius: 3px;\n  padding: 5px;\n}\n\n.newName {\n  width: 100%;\n  font-size: 1rem;\n  margin-bottom: 10px;\n}\n\n.newDesc {\n  display: block;\n  width: 100%;\n  height: 100px;\n  font-size: 1rem;\n  margin-bottom: 10px;\n}\n\n.newDate {\n  padding: 3px;\n  font-size: .9rem;\n  display: flex;\n  align-items: center;\n}\n\n.newInputBottom {\n  display: flex;\n  align-items: center;\n}\n\n.confirmNew,\n.cancelNew {\n  font-size: .9rem;\n}\n\n.confirmNew {\n  margin-left: auto;\n  margin-right: 10px;\n}\n\n\n/* Remove default checkbox styles */\ninput[type=\"checkbox\"] {\n  /* Add if not using autoprefixer */\n  -webkit-appearance: none;\n  appearance: none;\n  /* For iOS < 15 to remove gradient background */\n  background-color: #fff;\n  /* Not removed via appearance */\n  margin: 0;\n}\n\ninput[type=\"checkbox\"] {\n  appearance: none;\n  background-color: #fff;\n  margin: 0;\n  font: inherit;\n  color: grey;\n  width: .9rem;\n  height: .9rem;\n  border: 0.1rem solid grey;\n  border-radius: 0.15em;\n  transform: translateY(-0.075em);\n  display: grid;\n  place-content: center;\n}\n\ninput[type=\"checkbox\"]::before {\n  content: \"\";\n  width: 0.65rem;\n  height: 0.65rem;\n  transform: scale(0);\n  transition: 120ms transform ease-in-out;\n  /* Checked color */\n  box-shadow: inset 1em 1em rgb(228, 228, 228);\n}\n\ninput[type=\"checkbox\"]:checked::before {\n  transform: scale(1);\n}\n\n.newNote {\n  margin-left: 20px;\n}\n\nmain[data-list='NotesSection'] .listView {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.noteItem {\n  margin: 20px;\n  width: 220px;\n  height: 240px;\n  \n}\n\n.noteText {\n  border: none;\n  background-color: rgb(255, 255, 230);\n  padding: 20px;\n  height: 100%;\n  width: 100%;\n  font-size: 1.5rem;\n}\n\n.noteText:focus {\n  outline: none !important;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;\n  transition: box-shadow .3s;\n}\n\n.deleteNote {\n  position: relative;\n  top: -238px;\n  right: -193px;\n  width: fit-content;\n  z-index: 10;\n  color: rgb(179, 179, 179);\n}\n\n.deleteNote:hover {\n  color: red;\n  transition: color .3s;\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLE9BQU8sVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxRQUFRLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFV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QUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvRE9NZWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL05vdGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL1RvRG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2NyZWF0ZUVkaXRJbnB1dERPTS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvY3JlYXRlTmV3SW5wdXRET00uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2NyZWF0ZU5ld0l0ZW0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2NyZWF0ZU5ld05vdGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2NyZWF0ZU5ld05vdGVET00uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2NyZWF0ZU5ld1Byb2plY3RET00uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2NyZWF0ZU5ld1RvRG9ET00uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3JlbmRlckl0ZW1zLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50cy90ZXN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1zaWRlYmFyLXBhZGRpbmc6IDAgMjBweDtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBwYWRkaW5nOiA1cHggMTVweDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG5cXG5odG1sLCBib2R5e1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1MHB4IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNTBweCAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gIFxcXCJoZWFkZXIgaGVhZGVyXFxcIlxcbiAgXFxcInNpZGViYXIgbGlzdFxcXCI7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmhlYWRlciB7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzIsIDIxMSwgMjU1KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiAzNXB4O1xcbn1cXG5cXG4uc2VsZWN0YWJsZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM1LCAyMzUsIDIzNSk7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNTBweDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1MHB4O1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDUwcHg7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNTBweDtcXG59XFxuXFxuLmNvbGxhcHNle1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5oaWRlIHtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzLCBvcGFjaXR5IDAuNXMgbGluZWFyO1xcbn1cXG5cXG4uaGlkZTpob3ZlciB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uc3RyaWtlIHtcXG4gIC8qIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoOyAqL1xcbiAgb3BhY2l0eTogLjI7XFxufVxcblxcbi5zZWxlY3RhYmxlOmhvdmVyLFxcbi50b2RvTmFtZTpob3ZlcixcXG4uZWRpdFRvZG86aG92ZXIsXFxuLmRlbFRvZG86aG92ZXIsXFxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gIHBhZGRpbmc6IDMwcHggMzBweCAzMHB4IDA7XFxuICBncmlkLWFyZWE6IHNpZGViYXI7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM4LCAyNDYsIDI1NSk7XFxufVxcblxcbi5zaWRlYmFyIGxpIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBwYWRkaW5nOiB2YXIoLS1zaWRlYmFyLXBhZGRpbmcpO1xcbn1cXG5cXG4jcHJvamVjdHNMaXN0e1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLnByb2plY3RzIHtcXG4gIHBhZGRpbmc6IHZhcigtLXNpZGViYXItcGFkZGluZyk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0c0J0biB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLnByb2plY3RJdGVtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIycHggMTMwcHggMzBweDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIHBhZGRpbmctbGVmdDogMzBweCAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucHJvamVjdE5hbWUge1xcbiAgcGFkZGluZzogMCA1cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG5cXG4ucHJvamVjdExlbmd0aCB7XFxuICBmb250LXNpemU6IC44cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGNvbG9yOiBncmV5O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4uZGVsUHJvamVjdCxcXG4uZGVsVG9kbyxcXG4uZWRpdFRvZG8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGNvbG9yOiByZ2IoMCwgMCwgMCwgLjIpO1xcbn1cXG5cXG4uZGVsUHJvamVjdDpob3ZlcixcXG4uZGVsVG9kbzpob3ZlciB7XFxuICBjb2xvcjogcmVkO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC41cyBlYXNlO1xcbn1cXG5cXG4uZWRpdFRvZG86aG92ZXIge1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuNXMgZWFzZTtcXG59XFxuXFxuI25vdGVzIHtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxufVxcblxcbi5saXN0IHtcXG4gIGdyaWQtYXJlYTogbGlzdDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9wUm93LFxcbi5saXN0VmlldyB7XFxuICB3aWR0aDogbWF4KDUwMHB4LCAxMDAlKTtcXG59XFxuXFxuLnRvcFJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICBwYWRkaW5nLXRvcDogMjBweDtcXG59XFxuXFxuLmxpc3RUaXRsZSB7XFxuICBtYXJnaW4tbGVmdDogNDBweDtcXG59XFxuXFxuLmxpc3RCdG4ge1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxufVxcblxcbi5kdWVEYXRlIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiA5NXB4O1xcbn1cXG5cXG5cXG4udG9kbyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNXB4IDFmciAxMTBweCAyNXB4IDMwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgcGFkZGluZzogMTBweCAxMHB4O1xcbn1cXG5cXG4udG9kbzpudGgtY2hpbGQoZXZlbil7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUwLCAyNTAsIDI1MCk7XFxufVxcblxcbi50b2RvTmFtZSB7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxufVxcblxcbi50b2RvRGVzYyB7XFxuICBncmlkLWNvbHVtbjogMiAvIHNwYW4gNDtcXG4gIGZvbnQtc2l6ZTogLjhyZW07XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi50b2RvRGF0ZSB7XFxuICBmb250LXNpemU6IC44cmVtO1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuXFxuLmVkaXRzIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICB6LWluZGV4OiAxMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODAsIDE4MCwgMTgwLCAwLjM5Nyk7XFxufVxcblxcbi5lZGl0SW5wdXRzIHtcXG4gIHotaW5kZXg6IDIwO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBoZWlnaHQ6IDI1MHB4O1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuLmVkaXRJbnB1dHMgYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHdpZHRoOiA4MHB4O1xcbn1cXG5cXG4jZWRpdE5hbWUsXFxuI2VkaXREZXNjIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGZvbnQtc2l6ZTogLjhyZW07XFxufVxcblxcbiNlZGl0TmFtZSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI2VkaXREZXNjIHtcXG4gIGhlaWdodDogODBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jZWRpdEFjY2VwdCB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLm5ld0lucHV0cyB7XFxuICBtYXJnaW4tbGVmdDogMzBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB3aWR0aDogbWluKDUwMHB4LCAxMDAlKTtcXG59XFxuXFxuLm5ld05hbWUsXFxuLm5ld0Rlc2Mge1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLm5ld05hbWUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4ubmV3RGVzYyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5uZXdEYXRlIHtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIGZvbnQtc2l6ZTogLjlyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm5ld0lucHV0Qm90dG9tIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29uZmlybU5ldyxcXG4uY2FuY2VsTmV3IHtcXG4gIGZvbnQtc2l6ZTogLjlyZW07XFxufVxcblxcbi5jb25maXJtTmV3IHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG5cXG4vKiBSZW1vdmUgZGVmYXVsdCBjaGVja2JveCBzdHlsZXMgKi9cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gIC8qIEFkZCBpZiBub3QgdXNpbmcgYXV0b3ByZWZpeGVyICovXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgLyogRm9yIGlPUyA8IDE1IHRvIHJlbW92ZSBncmFkaWVudCBiYWNrZ3JvdW5kICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgLyogTm90IHJlbW92ZWQgdmlhIGFwcGVhcmFuY2UgKi9cXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICBjb2xvcjogZ3JleTtcXG4gIHdpZHRoOiAuOXJlbTtcXG4gIGhlaWdodDogLjlyZW07XFxuICBib3JkZXI6IDAuMXJlbSBzb2xpZCBncmV5O1xcbiAgYm9yZGVyLXJhZGl1czogMC4xNWVtO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjA3NWVtKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHdpZHRoOiAwLjY1cmVtO1xcbiAgaGVpZ2h0OiAwLjY1cmVtO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIHRyYW5zaXRpb246IDEyMG1zIHRyYW5zZm9ybSBlYXNlLWluLW91dDtcXG4gIC8qIENoZWNrZWQgY29sb3IgKi9cXG4gIGJveC1zaGFkb3c6IGluc2V0IDFlbSAxZW0gcmdiKDIyOCwgMjI4LCAyMjgpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQ6OmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG5cXG4ubmV3Tm90ZSB7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG59XFxuXFxubWFpbltkYXRhLWxpc3Q9J05vdGVzU2VjdGlvbiddIC5saXN0VmlldyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4ubm90ZUl0ZW0ge1xcbiAgbWFyZ2luOiAyMHB4O1xcbiAgd2lkdGg6IDIyMHB4O1xcbiAgaGVpZ2h0OiAyNDBweDtcXG4gIFxcbn1cXG5cXG4ubm90ZVRleHQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyMzApO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5ub3RlVGV4dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDRweCAxMnB4O2JveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggNHB4IDEycHg7XFxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IC4zcztcXG59XFxuXFxuLmRlbGV0ZU5vdGUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAtMjM4cHg7XFxuICByaWdodDogLTE5M3B4O1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgei1pbmRleDogMTA7XFxuICBjb2xvcjogcmdiKDE3OSwgMTc5LCAxNzkpO1xcbn1cXG5cXG4uZGVsZXRlTm90ZTpob3ZlciB7XFxuICBjb2xvcjogcmVkO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgLjNzO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyw0QkFBNEI7RUFDNUI7O2dCQUVjO0VBQ2QsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyw2QkFBNkI7RUFDN0IsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLDZCQUE2QjtFQUM3QixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtFQUNW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b290IHtcXG4gIC0tc2lkZWJhci1wYWRkaW5nOiAwIDIwcHg7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgcGFkZGluZzogNXB4IDE1cHg7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuaHRtbCwgYm9keXtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNTBweCAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICBcXFwiaGVhZGVyIGhlYWRlclxcXCJcXG4gIFxcXCJzaWRlYmFyIGxpc3RcXFwiO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcyLCAyMTEsIDI1NSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctbGVmdDogMzVweDtcXG59XFxuXFxuLnNlbGVjdGFibGU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMjM1LCAyMzUpO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDUwcHg7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNTBweDtcXG59XFxuXFxuLnNlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MHB4O1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDUwcHg7XFxufVxcblxcbi5jb2xsYXBzZXtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uaGlkZSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcywgb3BhY2l0eSAwLjVzIGxpbmVhcjtcXG59XFxuXFxuLmhpZGU6aG92ZXIge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnN0cmlrZSB7XFxuICAvKiB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDsgKi9cXG4gIG9wYWNpdHk6IC4yO1xcbn1cXG5cXG4uc2VsZWN0YWJsZTpob3ZlcixcXG4udG9kb05hbWU6aG92ZXIsXFxuLmVkaXRUb2RvOmhvdmVyLFxcbi5kZWxUb2RvOmhvdmVyLFxcbmlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBwYWRkaW5nOiAzMHB4IDMwcHggMzBweCAwO1xcbiAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgMjQ2LCAyNTUpO1xcbn1cXG5cXG4uc2lkZWJhciBsaSB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgcGFkZGluZzogdmFyKC0tc2lkZWJhci1wYWRkaW5nKTtcXG59XFxuXFxuI3Byb2plY3RzTGlzdHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5wcm9qZWN0cyB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaWRlYmFyLXBhZGRpbmcpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdHNCdG4ge1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0SXRlbSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMnB4IDEzMHB4IDMwcHg7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBwYWRkaW5nLWxlZnQ6IDMwcHggIWltcG9ydGFudDtcXG59XFxuXFxuLnByb2plY3ROYW1lIHtcXG4gIHBhZGRpbmc6IDAgNXB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuXFxuLnByb2plY3RMZW5ndGgge1xcbiAgZm9udC1zaXplOiAuOHJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBjb2xvcjogZ3JleTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLmRlbFByb2plY3QsXFxuLmRlbFRvZG8sXFxuLmVkaXRUb2RvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBjb2xvcjogcmdiKDAsIDAsIDAsIC4yKTtcXG59XFxuXFxuLmRlbFByb2plY3Q6aG92ZXIsXFxuLmRlbFRvZG86aG92ZXIge1xcbiAgY29sb3I6IHJlZDtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuNXMgZWFzZTtcXG59XFxuXFxuLmVkaXRUb2RvOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjVzIGVhc2U7XFxufVxcblxcbiNub3RlcyB7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG5cXG4ubGlzdCB7XFxuICBncmlkLWFyZWE6IGxpc3Q7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvcFJvdyxcXG4ubGlzdFZpZXcge1xcbiAgd2lkdGg6IG1heCg1MDBweCwgMTAwJSk7XFxufVxcblxcbi50b3BSb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgcGFkZGluZy10b3A6IDIwcHg7XFxufVxcblxcbi5saXN0VGl0bGUge1xcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxufVxcblxcbi5saXN0QnRuIHtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbn1cXG5cXG4uZHVlRGF0ZSB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogOTVweDtcXG59XFxuXFxuXFxuLnRvZG8ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTVweCAxZnIgMTEwcHggMjVweCAzMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcXG59XFxuXFxuLnRvZG86bnRoLWNoaWxkKGV2ZW4pe1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCwgMjUwLCAyNTApO1xcbn1cXG5cXG4udG9kb05hbWUge1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4udG9kb0Rlc2Mge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyBzcGFuIDQ7XFxuICBmb250LXNpemU6IC44cmVtO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4udG9kb0RhdGUge1xcbiAgZm9udC1zaXplOiAuOHJlbTtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcblxcbi5lZGl0cyB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgei1pbmRleDogMTA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTgwLCAxODAsIDE4MCwgMC4zOTcpO1xcbn1cXG5cXG4uZWRpdElucHV0cyB7XFxuICB6LWluZGV4OiAyMDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgaGVpZ2h0OiAyNTBweDtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbi5lZGl0SW5wdXRzIGJ1dHRvbiB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICB3aWR0aDogODBweDtcXG59XFxuXFxuI2VkaXROYW1lLFxcbiNlZGl0RGVzYyB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBmb250LXNpemU6IC44cmVtO1xcbn1cXG5cXG4jZWRpdE5hbWUge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNlZGl0RGVzYyB7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI2VkaXRBY2NlcHQge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5uZXdJbnB1dHMge1xcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgd2lkdGg6IG1pbig1MDBweCwgMTAwJSk7XFxufVxcblxcbi5uZXdOYW1lLFxcbi5uZXdEZXNjIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5uZXdOYW1lIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLm5ld0Rlc2Mge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4ubmV3RGF0ZSB7XFxuICBwYWRkaW5nOiAzcHg7XFxuICBmb250LXNpemU6IC45cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5uZXdJbnB1dEJvdHRvbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbmZpcm1OZXcsXFxuLmNhbmNlbE5ldyB7XFxuICBmb250LXNpemU6IC45cmVtO1xcbn1cXG5cXG4uY29uZmlybU5ldyB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuXFxuLyogUmVtb3ZlIGRlZmF1bHQgY2hlY2tib3ggc3R5bGVzICovXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICAvKiBBZGQgaWYgbm90IHVzaW5nIGF1dG9wcmVmaXhlciAqL1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIC8qIEZvciBpT1MgPCAxNSB0byByZW1vdmUgZ3JhZGllbnQgYmFja2dyb3VuZCAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIC8qIE5vdCByZW1vdmVkIHZpYSBhcHBlYXJhbmNlICovXFxuICBtYXJnaW46IDA7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBtYXJnaW46IDA7XFxuICBmb250OiBpbmhlcml0O1xcbiAgY29sb3I6IGdyZXk7XFxuICB3aWR0aDogLjlyZW07XFxuICBoZWlnaHQ6IC45cmVtO1xcbiAgYm9yZGVyOiAwLjFyZW0gc29saWQgZ3JleTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMTVlbTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4wNzVlbSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB3aWR0aDogMC42NXJlbTtcXG4gIGhlaWdodDogMC42NXJlbTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICB0cmFuc2l0aW9uOiAxMjBtcyB0cmFuc2Zvcm0gZWFzZS1pbi1vdXQ7XFxuICAvKiBDaGVja2VkIGNvbG9yICovXFxuICBib3gtc2hhZG93OiBpbnNldCAxZW0gMWVtIHJnYigyMjgsIDIyOCwgMjI4KTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkOjpiZWZvcmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuLm5ld05vdGUge1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxufVxcblxcbm1haW5bZGF0YS1saXN0PSdOb3Rlc1NlY3Rpb24nXSAubGlzdFZpZXcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLm5vdGVJdGVtIHtcXG4gIG1hcmdpbjogMjBweDtcXG4gIHdpZHRoOiAyMjBweDtcXG4gIGhlaWdodDogMjQwcHg7XFxuICBcXG59XFxuXFxuLm5vdGVUZXh0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjMwKTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4ubm90ZVRleHQ6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCA0cHggMTJweDtib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDRweCAxMnB4O1xcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAuM3M7XFxufVxcblxcbi5kZWxldGVOb3RlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogLTIzOHB4O1xcbiAgcmlnaHQ6IC0xOTNweDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIHotaW5kZXg6IDEwO1xcbiAgY29sb3I6IHJnYigxNzksIDE3OSwgMTc5KTtcXG59XFxuXFxuLmRlbGV0ZU5vdGU6aG92ZXIge1xcbiAgY29sb3I6IHJlZDtcXG4gIHRyYW5zaXRpb246IGNvbG9yIC4zcztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBjcmVhdGVOZXdJbnB1dCB9IGZyb20gJy4vY3JlYXRlTmV3SW5wdXRET00nO1xuaW1wb3J0IHsgcmVuZGVySW5ib3gsIHJlbmRlclRvZGF5LCByZW5kZXJXZWVrbHksIHJlbmRlck5vdGVzIH0gZnJvbSAnLi9yZW5kZXJJdGVtcyc7XG5pbXBvcnQgeyBzb3J0RGF0ZSwgY29sb3JTZWxlY3RlZCB9IGZyb20gJy4uL2luZGV4JztcblxuXG5leHBvcnQgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbmV4cG9ydCBjb25zdCBzaWRlYmFyID0gbWFpbi5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuY29uc3QgaW5ib3ggPSBzaWRlYmFyLnF1ZXJ5U2VsZWN0b3IoJyNpbmJveCcpO1xuY29uc3QgdG9kYXkgPSBzaWRlYmFyLnF1ZXJ5U2VsZWN0b3IoJyN0b2RheScpO1xuY29uc3Qgd2Vla2x5ID0gc2lkZWJhci5xdWVyeVNlbGVjdG9yKCcjd2VlaycpO1xuY29uc3Qgbm90ZXMgPSBzaWRlYmFyLnF1ZXJ5U2VsZWN0b3IoJyNub3RlcycpO1xuY29uc3Qgc2VsZWN0YWJsZSA9IHNpZGViYXIucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdGFibGUnKTtcblxuZXhwb3J0IGNvbnN0IHByb2plY3RzVmlldyA9IG1haW4ucXVlcnlTZWxlY3RvcignLnByb2plY3RzVmlldycpO1xuY29uc3QgcHJvamVjdHNCdG4gPSBtYWluLnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c0J0bicpO1xuY29uc3QgbGlzdCA9IG1haW4ucXVlcnlTZWxlY3RvcignLmxpc3QnKTtcbmV4cG9ydCBjb25zdCBsaXN0VmlldyA9IGxpc3QucXVlcnlTZWxlY3RvcignLmxpc3RWaWV3Jyk7XG5leHBvcnQgY29uc3QgbGlzdEJ0biA9IGxpc3QucXVlcnlTZWxlY3RvcignLmxpc3RCdG4nKTtcbmV4cG9ydCBjb25zdCBkYXRlTGFiZWwgPSBsaXN0LnF1ZXJ5U2VsZWN0b3IoJy5kdWVEYXRlJyk7XG5leHBvcnQgY29uc3Qgc29ydERhdGVCdG4gPSBsaXN0LnF1ZXJ5U2VsZWN0b3IoJy5zb3J0RGF0ZScpO1xuXG5leHBvcnQgbGV0IGxpc3RUaXRsZSA9IGxpc3QucXVlcnlTZWxlY3RvcignLmxpc3RUaXRsZScpO1xucHJvamVjdHNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVOZXdJbnB1dChwcm9qZWN0c1ZpZXcsICdwcm9qZWN0JykpO1xubGlzdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZU5ld0lucHV0KGxpc3RWaWV3LCAndG9kbycpKTtcbmluYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVuZGVySW5ib3gpO1xudG9kYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXJUb2RheSk7XG53ZWVrbHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXJXZWVrbHkpO1xubm90ZXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXJOb3Rlcyk7XG5zb3J0RGF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNvcnREYXRlKTtcbnNlbGVjdGFibGUuZm9yRWFjaChlbCA9PiB7XG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29sb3JTZWxlY3RlZCk7XG59KTtcbiIsImV4cG9ydCBjbGFzcyBMaXN0IHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cbiAgbGlzdCA9IFtdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsVG9kbyhwcm9qZWN0LCB0b2RvKSB7XG4gIHByb2plY3QubGlzdC5zcGxpY2UocHJvamVjdC5saXN0LmluZGV4T2YodG9kbyksIDEpXG59IiwiZXhwb3J0IGNsYXNzIE5vdGUge1xuICBjb25zdHJ1Y3Rvcih0ZXh0ID0gJycpIHtcbiAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXROb3RlVGV4dChub3RlLCB0ZXh0KSB7XG4gIG5vdGUudGV4dCA9IHRleHRcbn0iLCJleHBvcnQgY2xhc3MgVG9EbyB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGR1ZURhdGUsIGRlc2MgPSAnTm8gZGVzY3JpcHRpb24nKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMuZGVzYyA9IGRlc2M7XG4gICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0VG9Eb05hbWUodG9kbywgbmFtZSkge1xuICB0b2RvLm5hbWUgPSBuYW1lXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRUb0RvRGF0ZSh0b2RvLCBkYXRlKSB7XG4gIHRvZG8uZHVlRGF0ZSA9IGRhdGVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFRvRG9EZXNjKHRvZG8sIGRlc2MpIHtcbiAgdG9kby5kZXNjID0gZGVzY1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlVG9Eb0NvbXBsZXRlZCh0b2RvKSB7XG4gIHRvZG8uY29tcGxldGVkID0gIXRvZG8uY29tcGxldGVkXG59IiwiaW1wb3J0IHsgcmVtb3ZlQWxsQ2hpbGROb2RlcywgY3VycmVudFByb2plY3QsIHNldExvY2FsU3RvcmFnZSB9IGZyb20gJy4uL2luZGV4JztcbmltcG9ydCB7IG1haW4sIGxpc3RWaWV3IH0gZnJvbSBcIi4vRE9NZWxlbWVudHNcIjtcbmltcG9ydCB7IHJlbmRlckluYm94LCByZW5kZXJUb0RvcyB9IGZyb20gXCIuL3JlbmRlckl0ZW1zXCI7XG5pbXBvcnQgeyBzZXRUb0RvTmFtZSwgc2V0VG9Eb0RhdGUsIHNldFRvRG9EZXNjIH0gZnJvbSAnLi9Ub0RvJztcblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWRpdElucHV0KGVsKSB7XG4gIGNvbnN0IGVkaXRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBsYWJlbE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBjb25zdCBsYWJlbERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBjb25zdCBsYWJlbERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBjb25zdCBuZXdOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY29uc3QgbmV3RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGNvbnN0IG5ld0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICBjb25zdCBhY2NlcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgY2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgZWRpdHMuY2xhc3NMaXN0LmFkZCgnZWRpdHMnKTtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoJ2VkaXRJbnB1dHMnKTtcblxuICBsYWJlbE5hbWUudGV4dENvbnRlbnQgPSAnTmFtZTonO1xuICBsYWJlbERhdGUudGV4dENvbnRlbnQgPSAnRHVlOic7XG4gIGxhYmVsRGVzYy50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbjonO1xuICBhY2NlcHQudGV4dENvbnRlbnQgPSAnQ29uZmlybSc7XG4gIGNhbmNlbC50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICBsYWJlbE5hbWUuaHRtbEZvciA9ICdlZGl0TmFtZSc7XG4gIGxhYmVsRGF0ZS5odG1sRm9yID0gJ2VkaXREYXRlJztcbiAgbGFiZWxEZXNjLmh0bWxGb3IgPSAnZWRpdERlc2MnO1xuICBuZXdOYW1lLmlkID0gJ2VkaXROYW1lJztcbiAgbmV3RGF0ZS5pZCA9ICdlZGl0RGF0ZSc7XG4gIG5ld0Rlc2MuaWQgPSAnZWRpdERlc2MnO1xuICBhY2NlcHQuaWQgPSAnZWRpdEFjY2VwdCc7XG4gIGNhbmNlbC5pZCA9ICdlZGl0Q2FuY2VsJztcbiAgbmV3TmFtZS50eXBlID0gJ3RleHQnO1xuICBuZXdEYXRlLnR5cGUgPSAnZGF0ZSc7XG5cbiAgbmV3TmFtZS52YWx1ZSA9IGVsLm5hbWU7XG4gIG5ld0RhdGUudmFsdWUgPSBlbC5kdWVEYXRlO1xuICBuZXdEZXNjLnZhbHVlID0gZWwuZGVzYztcblxuICBkaXYuYXBwZW5kKGxhYmVsTmFtZSwgbmV3TmFtZSwgbGFiZWxEZXNjLCBuZXdEZXNjLCBsYWJlbERhdGUsIG5ld0RhdGUsIGFjY2VwdCwgY2FuY2VsKTtcbiAgZWRpdHMuYXBwZW5kKGRpdik7XG4gIG1haW4uYXBwZW5kKGVkaXRzKTtcblxuICBhY2NlcHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB1cGRhdGVUb2RvKGVsKSk7XG4gIGNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbmNlbEVkaXQpO1xuXG4gIGZ1bmN0aW9uIGNhbmNlbEVkaXQoKSB7XG4gICAgZWRpdHMucmVtb3ZlKCk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVUb2RvKGVsKSB7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IG5hbWUgPSBuZXdOYW1lLnZhbHVlO1xuICAgICAgY29uc3QgZHVlID0gbmV3RGF0ZS52YWx1ZTtcbiAgICAgIGNvbnN0IGRlc2MgPSBuZXdEZXNjLnZhbHVlO1xuICAgICAgc2V0VG9Eb05hbWUoZWwsIG5hbWUpO1xuICAgICAgc2V0VG9Eb0RhdGUoZWwsIGR1ZSk7XG4gICAgICBzZXRUb0RvRGVzYyhlbCwgZGVzYyk7XG4gICAgICBcbiAgICAgIHJlbW92ZUFsbENoaWxkTm9kZXMoZWRpdHMpO1xuICAgICAgcmVtb3ZlQWxsQ2hpbGROb2RlcyhsaXN0Vmlldyk7XG4gICAgICBpZiAobWFpbi5kYXRhc2V0Lmxpc3QgPT09ICdhbGxJbmJveCcpIHtcbiAgICAgICAgcmVuZGVySW5ib3goKTtcbiAgICAgIH0gZWxzZSB7IHJlbmRlclRvRG9zKGN1cnJlbnRQcm9qZWN0KTsgfTtcbiAgICAgIGVkaXRzLnJlbW92ZSgpO1xuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCB7IHJlbW92ZUFsbENoaWxkTm9kZXMsIGN1cnJlbnRQcm9qZWN0IH0gZnJvbSAnLi4vaW5kZXgnO1xuaW1wb3J0IHsgcHJvamVjdHNWaWV3LCBsaXN0VmlldyB9IGZyb20gXCIuL0RPTWVsZW1lbnRzXCI7XG5pbXBvcnQgeyByZW5kZXJQcm9qZWN0cywgcmVuZGVyVG9Eb3MgfSBmcm9tIFwiLi9yZW5kZXJJdGVtc1wiO1xuaW1wb3J0IHsgY3JlYXRlTmV3SXRlbSB9IGZyb20gJy4vY3JlYXRlTmV3SXRlbSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOZXdJbnB1dCh2aWV3LCB0eXBlKSB7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbmV3TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgbmV3RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgbmV3RGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgY29uc3QgY29uZmlybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGJvdHRvbVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ25ld0lucHV0cycpO1xuICAgIG5ld05hbWUuY2xhc3NMaXN0LmFkZCgnbmV3TmFtZScpO1xuICAgIG5ld0RhdGUuY2xhc3NMaXN0LmFkZCgnbmV3RGF0ZScpO1xuICAgIG5ld0Rlc2MuY2xhc3NMaXN0LmFkZCgnbmV3RGVzYycpO1xuICAgIGNvbmZpcm0uY2xhc3NMaXN0LmFkZCgnY29uZmlybU5ldycpO1xuICAgIGNhbmNlbC5jbGFzc0xpc3QuYWRkKCdjYW5jZWxOZXcnKTtcbiAgICBib3R0b21Sb3cuY2xhc3NMaXN0LmFkZCgnbmV3SW5wdXRCb3R0b20nKTtcblxuICAgIG5ld05hbWUucGxhY2Vob2xkZXIgPSBgYWRkIGEgJHt0eXBlfS4uLmA7XG4gICAgbmV3RGVzYy5wbGFjZWhvbGRlciA9ICdhZGQgYSBicmVpZiBkZXNjcmlwdGlvbic7XG5cbiAgICBuZXdOYW1lLnR5cGUgPSAndGV4dCc7XG4gICAgbmV3RGF0ZS50eXBlID0gJ2RhdGUnO1xuXG4gICAgY29uZmlybS50ZXh0Q29udGVudCA9ICdDb25maXJtJztcbiAgICBjYW5jZWwudGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcblxuICAgIHJlbW92ZUFsbENoaWxkTm9kZXModmlldyk7XG4gICAgZGl2LmFwcGVuZChuZXdOYW1lKTtcblxuXG4gICAgaWYgKHR5cGUgPT09ICdwcm9qZWN0Jykge1xuICAgICAgZGl2LmFwcGVuZChjb25maXJtLCBjYW5jZWwpO1xuICAgICAgcmVuZGVyUHJvamVjdHMoKTtcbiAgICAgIG5ld05hbWUuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBjcmVhdGVOZXdJdGVtKFxuICAgICAgICBuZXdOYW1lLCBwcm9qZWN0c1ZpZXcsIHR5cGUpKTtcbiAgICAgIGNvbmZpcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVOZXdJdGVtKFxuICAgICAgICBuZXdOYW1lLCBwcm9qZWN0c1ZpZXcsIHR5cGUpKTtcbiAgICB9O1xuXG4gICAgaWYgKHR5cGUgPT09ICd0b2RvJykge1xuICAgICAgYm90dG9tUm93LmFwcGVuZChuZXdEYXRlLCBjb25maXJtLCBjYW5jZWwpO1xuICAgICAgZGl2LmFwcGVuZChuZXdEZXNjLCBib3R0b21Sb3cpO1xuICAgICAgcmVuZGVyVG9Eb3MoY3VycmVudFByb2plY3QpO1xuICAgICAgbmV3TmFtZS5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGNyZWF0ZU5ld0l0ZW0oXG4gICAgICAgIG5ld05hbWUsIGxpc3RWaWV3LCB0eXBlLCBuZXdEYXRlLCBuZXdEZXNjKSk7XG4gICAgICBjb25maXJtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlTmV3SXRlbShcbiAgICAgICAgbmV3TmFtZSwgbGlzdFZpZXcsIHR5cGUsIG5ld0RhdGUsIG5ld0Rlc2MpKTtcbiAgICB9O1xuXG4gICAgY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZGl2LnJlbW92ZSgpKTtcbiAgICB2aWV3LmFwcGVuZChkaXYpO1xuICAgIG5ld05hbWUuc2VsZWN0KCk7XG4gIH07XG59XG4iLCJpbXBvcnQgeyBMaXN0IH0gZnJvbSAnLi9MaXN0JztcbmltcG9ydCB7IFRvRG8gfSBmcm9tICcuL1RvRG8nO1xuaW1wb3J0IHsgcmVtb3ZlQWxsQ2hpbGROb2RlcywgY3VycmVudFByb2plY3QsIHByb2plY3RzIH0gZnJvbSAnLi4vaW5kZXgnO1xuaW1wb3J0IHsgcHJvamVjdHNWaWV3IH0gZnJvbSBcIi4vRE9NZWxlbWVudHNcIjtcbmltcG9ydCB7IHJlbmRlclByb2plY3RzLCByZW5kZXJUb0RvcyB9IGZyb20gXCIuL3JlbmRlckl0ZW1zXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOZXdJdGVtKG5ld05hbWUsIHZpZXcsIHR5cGUsIG5ld0RhdGUsIG5ld0Rlc2MpIHtcbiAgcmV0dXJuIChlKSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInIHx8IGUudGFyZ2V0LmNsYXNzTGlzdCA9PSAnY29uZmlybU5ldycpIHtcbiAgICAgIGNvbnN0IG5hbWUgPSBuZXdOYW1lLnZhbHVlO1xuICAgICAgcmVtb3ZlQWxsQ2hpbGROb2Rlcyh2aWV3KTtcblxuICAgICAgaWYgKHR5cGUgPT09ICdwcm9qZWN0Jykge1xuICAgICAgICBjcmVhdGVOZXdQcm9qZWN0KG5hbWUpO1xuICAgICAgICByZW5kZXJQcm9qZWN0cygpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZSA9PT0gJ3RvZG8nKSB7XG4gICAgICAgIGNyZWF0ZU5ld1RvZG8obmFtZSwgbmV3RGF0ZSwgbmV3RGVzYyk7XG4gICAgICAgIHJlbmRlclRvRG9zKGN1cnJlbnRQcm9qZWN0KTtcbiAgICAgICAgcmVtb3ZlQWxsQ2hpbGROb2Rlcyhwcm9qZWN0c1ZpZXcpO1xuICAgICAgICByZW5kZXJQcm9qZWN0cygpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZU5ld1RvZG8obmFtZSwgbmV3RGF0ZSwgbmV3RGVzYykge1xuICBjb25zdCB0b2RvID0gbmV3IFRvRG8obmFtZSwgbmV3RGF0ZS52YWx1ZSwgbmV3RGVzYy52YWx1ZSk7XG4gIGN1cnJlbnRQcm9qZWN0Lmxpc3QucHVzaCh0b2RvKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QobmFtZSkge1xuICBjb25zdCBsaXN0ID0gbmV3IExpc3QobmFtZSk7XG4gIHByb2plY3RzLnB1c2gobGlzdCk7XG4gIHJldHVybiBsaXN0O1xufVxuIiwiaW1wb3J0IHsgbm90ZXNBcnIsIHNldExvY2FsU3RvcmFnZSB9IGZyb20gXCIuLlwiO1xuaW1wb3J0IHsgY3JlYXRlTmV3Tm90ZURPTSB9IGZyb20gXCIuL2NyZWF0ZU5ld05vdGVET01cIjtcbmltcG9ydCB7IE5vdGUgfSBmcm9tIFwiLi9Ob3RlXCI7XG5cbmV4cG9ydCBjb25zdCBhZGROb3RlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5hZGROb3RlQnRuLnRleHRDb250ZW50ID0gJ0FkZCc7XG5hZGROb3RlQnRuLmNsYXNzTGlzdC5hZGQoJ25ld05vdGUnKVxuXG5hZGROb3RlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlTmV3Tm90ZSgpKVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTmV3Tm90ZSh0ZXh0KSB7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgY29uc3Qgbm90ZSA9IG5ldyBOb3RlKHRleHQpXG4gICAgY3JlYXRlTmV3Tm90ZURPTShub3RlKTtcbiAgICBub3Rlc0Fyci5wdXNoKG5vdGUpXG4gICAgc2V0TG9jYWxTdG9yYWdlKCdub3RlcycsIG5vdGVzQXJyKVxuICAgIHJldHVybiBub3RlO1xuICB9XG59IiwiaW1wb3J0IHsgbm90ZXNBcnIsIHNldExvY2FsU3RvcmFnZSB9IGZyb20gXCIuLlwiO1xuaW1wb3J0IHsgbGlzdFZpZXcgfSBmcm9tIFwiLi9ET01lbGVtZW50c1wiO1xuaW1wb3J0IHsgcmVuZGVyTm90ZXMgfSBmcm9tIFwiLi9yZW5kZXJJdGVtc1wiO1xuaW1wb3J0IHsgc2V0Tm90ZVRleHQgfSBmcm9tIFwiLi9Ob3RlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOZXdOb3RlRE9NKGl0ZW0pIHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgY29uc3QgZGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgZGl2LmNsYXNzTGlzdC5hZGQoJ25vdGVJdGVtJyk7XG4gIHRleHRBcmVhLmNsYXNzTGlzdC5hZGQoJ25vdGVUZXh0Jyk7XG4gIGRlbC5jbGFzc0xpc3QuYWRkKCdkZWxldGVOb3RlJyk7XG5cbiAgdGV4dEFyZWEucGxhY2Vob2xkZXIgPSAnYWRkIGJyaWVmIG5vdGUuLi4nXG4gIGRlbC5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1kZWxldGUtbGVmdFwiPjwvaT4nO1xuICB0ZXh0QXJlYS52YWx1ZSA9IGl0ZW0udGV4dDtcblxuICBkaXYuYXBwZW5kKHRleHRBcmVhLCBkZWwpO1xuICBsaXN0Vmlldy5hcHBlbmQoZGl2KTtcblxuICBkZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVOb3RlKTtcbiAgdGV4dEFyZWEuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdXBkYXRlTm90ZSlcblxuICBmdW5jdGlvbiB1cGRhdGVOb3RlKCkge1xuICAgIHNldE5vdGVUZXh0KGl0ZW0sIHRoaXMudmFsdWUpXG4gICAgc2V0TG9jYWxTdG9yYWdlKCdub3RlcycsIG5vdGVzQXJyKVxuICB9XG5cbiAgZnVuY3Rpb24gZGVsZXRlTm90ZSgpIHtcbiAgICBub3Rlc0Fyci5zcGxpY2Uobm90ZXNBcnIuaW5kZXhPZihpdGVtKSwgMSk7XG4gICAgc2V0TG9jYWxTdG9yYWdlKCdub3RlcycsIG5vdGVzQXJyKVxuICAgIHJlbmRlck5vdGVzKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGNvbG9yU2VsZWN0ZWQsIHByb2plY3RzLCByZW1vdmVBbGxDaGlsZE5vZGVzLCB1cGRhdGVDdXJyZW50UHJvamVjdCwgdXBkYXRlUHJvamVjdHN9IGZyb20gJy4uL2luZGV4JztcbmltcG9ydCB7IHByb2plY3RzVmlldywgbWFpbiwgbGlzdFRpdGxlLCBsaXN0QnRuLCBkYXRlTGFiZWwsIHNvcnREYXRlQnRuLCBsaXN0VmlldyB9IGZyb20gXCIuL0RPTWVsZW1lbnRzXCI7XG5pbXBvcnQgeyByZW5kZXJQcm9qZWN0cywgcmVuZGVySW5ib3gsIHJlbmRlclRvRG9zIH0gZnJvbSBcIi4vcmVuZGVySXRlbXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3RET00oaXRlbSwgaW5kZXgpIHtcbiAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBkZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBkZWwuaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEtc29saWQgZmEtZGVsZXRlLWxlZnRcIj48L2k+JztcbiAgc3Bhbi50ZXh0Q29udGVudCA9IGl0ZW0ubGlzdC5sZW5ndGg7XG4gIHAudGV4dENvbnRlbnQgPSBpdGVtLm5hbWU7XG5cbiAgcC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0TmFtZScpO1xuICBkZWwuY2xhc3NMaXN0LmFkZCgnZGVsUHJvamVjdCcpO1xuICBzcGFuLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RMZW5ndGgnKTtcbiAgbGkuY2xhc3NMaXN0LmFkZCgncHJvamVjdEl0ZW0nKTtcbiAgbGkuY2xhc3NMaXN0LmFkZCgnc2VsZWN0YWJsZScpO1xuICBkZWwuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuXG4gIGxpLmFwcGVuZChzcGFuLCBwLCBkZWwpO1xuXG4gIHAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXJTZWxlY3RlZCk7XG4gIHNwYW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXJTZWxlY3RlZCk7XG4gIGRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZVByb2plY3QoaXRlbSkpO1xuICBsaS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbG9yU2VsZWN0ZWQpO1xuICBsaS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4geyBkZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpOyB9KTtcbiAgbGkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHsgZGVsLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTsgfSk7XG4gIHJldHVybiBsaTtcblxuICBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KGl0ZW0pIHtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgZmlsdGVyZWQgPSBwcm9qZWN0cy5maWx0ZXIoa2V5ID0+IGtleSAhPSBpdGVtKTtcbiAgICAgIHVwZGF0ZVByb2plY3RzKGZpbHRlcmVkKVxuICAgICAgcmVtb3ZlQWxsQ2hpbGROb2Rlcyhwcm9qZWN0c1ZpZXcpO1xuICAgICAgcmVuZGVyUHJvamVjdHMoKTtcbiAgICAgIHJlbmRlckluYm94KCk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlclNlbGVjdGVkKCkge1xuICAgIG1haW4uZGF0YXNldC5saXN0ID0gaXRlbS5uYW1lO1xuICAgIHVwZGF0ZUN1cnJlbnRQcm9qZWN0KGl0ZW0pXG4gICAgbGlzdFRpdGxlLnRleHRDb250ZW50ID0gaXRlbS5uYW1lO1xuICAgIGxpc3RUaXRsZS5hZnRlcihsaXN0QnRuKTtcbiAgICBkYXRlTGFiZWwuYXBwZW5kKHNvcnREYXRlQnRuKTtcbiAgICByZW1vdmVBbGxDaGlsZE5vZGVzKGxpc3RWaWV3KTtcbiAgICByZW5kZXJUb0Rvcyhwcm9qZWN0c1tpbmRleF0pO1xuICB9O1xufVxuIiwiaW1wb3J0IHsgY2hhbmdlRGF0ZUZvcm1hdCwgcmVtb3ZlQWxsQ2hpbGROb2Rlcywgc2V0TG9jYWxTdG9yYWdlLCBwcm9qZWN0cyB9IGZyb20gJy4uL2luZGV4JztcbmltcG9ydCB7IGxpc3RWaWV3LCBwcm9qZWN0c1ZpZXcsIG1haW4gfSBmcm9tIFwiLi9ET01lbGVtZW50c1wiO1xuaW1wb3J0IHsgcmVuZGVyUHJvamVjdHMsIHJlbmRlckluYm94LCByZW5kZXJUb0RvcyB9IGZyb20gXCIuL3JlbmRlckl0ZW1zXCI7XG5pbXBvcnQgeyBjcmVhdGVFZGl0SW5wdXQgfSBmcm9tIFwiLi9jcmVhdGVFZGl0SW5wdXRET01cIjtcbmltcG9ydCB7IGRlbFRvZG8gfSBmcm9tICcuL0xpc3QnO1xuaW1wb3J0IHsgdG9nZ2xlVG9Eb0NvbXBsZXRlZCB9IGZyb20gJy4vVG9Ebyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOZXdUb0RvRE9NKGVsLCBwcm9qZWN0QXJyYXkpIHtcbiAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBjb25zdCBlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGRlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBjaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBjaGVjay50eXBlID0gJ2NoZWNrYm94JztcbiAgZWRpdC5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLXBlbi10by1zcXVhcmVcIj48L2k+JztcbiAgZGVsLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWRlbGV0ZS1sZWZ0XCI+PC9pPic7XG4gIHAudGV4dENvbnRlbnQgPSBlbC5uYW1lO1xuICBzcGFuLnRleHRDb250ZW50ID0gY2hhbmdlRGF0ZUZvcm1hdChlbC5kdWVEYXRlKTtcbiAgZGVzYy50ZXh0Q29udGVudCA9IGVsLmRlc2M7XG5cbiAgY2hlY2suY2xhc3NMaXN0LmFkZCgnY2hlY2tDb21wbGV0ZScpO1xuICBsaS5jbGFzc0xpc3QuYWRkKCd0b2RvJyk7XG4gIHAuY2xhc3NMaXN0LmFkZCgndG9kb05hbWUnKTtcbiAgc3Bhbi5jbGFzc0xpc3QuYWRkKCd0b2RvRGF0ZScpO1xuICBkZXNjLmNsYXNzTGlzdC5hZGQoJ3RvZG9EZXNjJyk7XG4gIGRlc2MuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2UnKTtcbiAgZWRpdC5jbGFzc0xpc3QuYWRkKCdlZGl0VG9kbycpO1xuICBlZGl0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgZGVsLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgZGVsLmNsYXNzTGlzdC5hZGQoJ2RlbFRvZG8nKTtcblxuICBsaS5hcHBlbmQoY2hlY2ssIHAsIHNwYW4sIGVkaXQsIGRlbCwgZGVzYyk7XG5cbiAgaWYgKGVsLmNvbXBsZXRlZCkge1xuICAgIGNoZWNrLmNoZWNrZWQgPSB0cnVlO1xuICAgIHAuY2xhc3NMaXN0LmFkZCgnc3RyaWtlJyk7XG4gICAgc3Bhbi5jbGFzc0xpc3QuYWRkKCdzdHJpa2UnKTtcbiAgICBlZGl0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICBkZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICB9XG4gIGVkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlZGl0VG9kbyhlbCkpO1xuICBkZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVUb2RvKHByb2plY3RBcnJheSkpO1xuICBsaS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgdW5oaWRlT3B0aW9ucyhkZWwsIGVkaXQpKTtcbiAgbGkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGhpZGVPcHRpb25zKGVsLCBkZWwsIGVkaXQpKTtcbiAgY2hlY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVDb21wbGV0ZWQoZWwpKTtcbiAgcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZURlc2MpO1xuICByZXR1cm4gbGk7XG5cbiAgZnVuY3Rpb24gdG9nZ2xlRGVzYygpIHtcbiAgICBkZXNjLmNsYXNzTGlzdC50b2dnbGUoJ2NvbGxhcHNlJyk7XG4gIH1cblxuICBmdW5jdGlvbiBlZGl0VG9kbyhlbCkge1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjcmVhdGVFZGl0SW5wdXQoZWwpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBoaWRlT3B0aW9ucyhlbCwgZGVsLCBlZGl0KSB7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmICghZWwuY29tcGxldGVkKSB7XG4gICAgICAgIGRlbC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIGVkaXQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB1bmhpZGVPcHRpb25zKGRlbCwgZWRpdCkge1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgZWRpdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlbGV0ZVRvZG8ocHJvamVjdEFycmF5KSB7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRlbFRvZG8ocHJvamVjdEFycmF5LCBlbCk7XG4gICAgICByZW1vdmVBbGxDaGlsZE5vZGVzKGxpc3RWaWV3KTtcbiAgICAgIHJlbW92ZUFsbENoaWxkTm9kZXMocHJvamVjdHNWaWV3KTtcbiAgICAgIHJlbmRlclByb2plY3RzKCk7XG4gICAgICBpZiAobWFpbi5kYXRhc2V0Lmxpc3QgPT09ICdhbGxJbmJveCcpIHtcbiAgICAgICAgcmVuZGVySW5ib3goKTtcbiAgICAgIH0gZWxzZSB7IHJlbmRlclRvRG9zKHByb2plY3RBcnJheSk7IH1cbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlQ29tcGxldGVkKGVsKSB7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHRvZ2dsZVRvRG9Db21wbGV0ZWQoZWwpO1xuICAgICAgc2V0TG9jYWxTdG9yYWdlKCdwcm9qZWN0cycsIHByb2plY3RzKTtcbiAgICAgIGlmICghZWwuY29tcGxldGVkKSB7XG4gICAgICAgIHAuY2xhc3NMaXN0LnJlbW92ZSgnc3RyaWtlJyk7XG4gICAgICAgIHNwYW4uY2xhc3NMaXN0LnJlbW92ZSgnc3RyaWtlJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwLmNsYXNzTGlzdC5hZGQoJ3N0cmlrZScpO1xuICAgICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoJ3N0cmlrZScpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCB7IGNyZWF0ZU5ld1Byb2plY3RET00gfSBmcm9tICcuL2NyZWF0ZU5ld1Byb2plY3RET00nO1xuaW1wb3J0IHsgY3JlYXRlTmV3VG9Eb0RPTSB9IGZyb20gJy4vY3JlYXRlTmV3VG9Eb0RPTSc7XG5pbXBvcnQgeyBhZGROb3RlQnRuIH0gZnJvbSAnLi9jcmVhdGVOZXdOb3RlJztcbmltcG9ydCB7IHJlbW92ZUFsbENoaWxkTm9kZXMsIHByb2plY3RzLCB1cGRhdGVDdXJyZW50UHJvamVjdCwgc2V0TG9jYWxTdG9yYWdlLCBub3Rlc0FyciB9IGZyb20gJy4uL2luZGV4JztcbmltcG9ydCB7IGxpc3RUaXRsZSwgZGF0ZUxhYmVsLCBsaXN0QnRuLCBzb3J0RGF0ZUJ0biwgbWFpbiwgbGlzdFZpZXcsIHByb2plY3RzVmlldyB9IGZyb20gXCIuL0RPTWVsZW1lbnRzXCI7XG5pbXBvcnQgeyBjcmVhdGVOZXdOb3RlRE9NIH0gZnJvbSAnLi9jcmVhdGVOZXdOb3RlRE9NJztcblxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVySW5ib3goKSB7XG4gIGxpc3RUaXRsZS5hZnRlcihkYXRlTGFiZWwpO1xuICBsaXN0QnRuLnJlbW92ZSgpO1xuICBzb3J0RGF0ZUJ0bi5yZW1vdmUoKTtcbiAgbWFpbi5kYXRhc2V0Lmxpc3QgPSAnYWxsSW5ib3gnO1xuICBsaXN0VGl0bGUudGV4dENvbnRlbnQgPSAnSW5ib3gnO1xuICByZW1vdmVBbGxDaGlsZE5vZGVzKGxpc3RWaWV3KTtcbiAgcHJvamVjdHMuZm9yRWFjaChlbCA9PiB7XG4gICAgcmVuZGVyVG9Eb3MoZWwpO1xuICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJUb2RheSgpIHtcbiAgbGlzdFRpdGxlLmFmdGVyKGRhdGVMYWJlbCk7XG4gIGxpc3RCdG4ucmVtb3ZlKCk7XG4gIGFkZE5vdGVCdG4ucmVtb3ZlKClcbiAgcmVtb3ZlQWxsQ2hpbGROb2RlcyhsaXN0Vmlldyk7XG4gIG1haW4uZGF0YXNldC5saXN0ID0gJ1RvZGF5U2VjdGlvbic7XG4gIGxpc3RUaXRsZS50ZXh0Q29udGVudCA9ICdUb2RheSc7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyV2Vla2x5KCkge1xuICBsaXN0VGl0bGUuYWZ0ZXIoZGF0ZUxhYmVsKTtcbiAgbGlzdEJ0bi5yZW1vdmUoKTtcbiAgYWRkTm90ZUJ0bi5yZW1vdmUoKVxuICByZW1vdmVBbGxDaGlsZE5vZGVzKGxpc3RWaWV3KTtcbiAgbWFpbi5kYXRhc2V0Lmxpc3QgPSAnV2Vla2x5U2VjdGlvbic7XG4gIGxpc3RUaXRsZS50ZXh0Q29udGVudCA9ICdUaGlzIFdlZWsnO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlck5vdGVzKCkge1xuICByZW1vdmVBbGxDaGlsZE5vZGVzKGxpc3RWaWV3KTtcbiAgZGF0ZUxhYmVsLnJlbW92ZSgpO1xuICBsaXN0QnRuLnJlbW92ZSgpO1xuICBtYWluLmRhdGFzZXQubGlzdCA9ICdOb3Rlc1NlY3Rpb24nO1xuICBsaXN0VGl0bGUudGV4dENvbnRlbnQgPSAnTm90ZXMnO1xuICBsaXN0VGl0bGUuYWZ0ZXIoYWRkTm90ZUJ0bilcbiAgbm90ZXNBcnIuZm9yRWFjaChlbCA9PiB7XG4gICAgY3JlYXRlTmV3Tm90ZURPTShlbClcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclRvRG9zKHByb2plY3RBcnJheSkge1xuICBhZGROb3RlQnRuLnJlbW92ZSgpXG4gIHByb2plY3RBcnJheS5saXN0LmZvckVhY2goZWwgPT4ge1xuICAgIGNvbnN0IGxpID0gY3JlYXRlTmV3VG9Eb0RPTShlbCwgcHJvamVjdEFycmF5KTtcbiAgICBsaXN0Vmlldy5hcHBlbmRDaGlsZChsaSk7XG4gICAgdXBkYXRlQ3VycmVudFByb2plY3QocHJvamVjdEFycmF5KTtcbiAgfSk7XG4gIHNldExvY2FsU3RvcmFnZSgncHJvamVjdHMnLCBwcm9qZWN0cyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJQcm9qZWN0cygpIHtcbiAgYWRkTm90ZUJ0bi5yZW1vdmUoKVxuICBwcm9qZWN0cy5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBsaSA9IGNyZWF0ZU5ld1Byb2plY3RET00oZWwsIGluZGV4KTtcbiAgICBwcm9qZWN0c1ZpZXcuYXBwZW5kQ2hpbGQobGkpO1xuICB9KTtcbiAgc2V0TG9jYWxTdG9yYWdlKCdwcm9qZWN0cycsIHByb2plY3RzKVxufVxuIiwiaW1wb3J0IHsgVG9EbywgdG9nZ2xlVG9Eb0NvbXBsZXRlZCB9IGZyb20gJy4vVG9Ebyc7XG5pbXBvcnQgeyBjcmVhdGVOZXdQcm9qZWN0IH0gZnJvbSBcIi4vY3JlYXRlTmV3SXRlbVwiO1xuaW1wb3J0IHsgTm90ZSB9IGZyb20gJy4vTm90ZSc7XG5pbXBvcnQgeyBub3Rlc0FyciB9IGZyb20gJy4uJztcblxuZXhwb3J0IGNvbnN0IHRvZG9zID0gKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0MSA9IGNyZWF0ZU5ld1Byb2plY3QoJ1Byb2plY3QnKTtcbiAgY29uc3QgcHJvamVjdDIgPSBjcmVhdGVOZXdQcm9qZWN0KCdDaG9yZXMnKTtcbiAgXG4gIGNvbnN0IHRvZG8wID0gbmV3IFRvRG8oJ0NyZWF0ZSBkZWxldGUgYnV0dG9uJywgJzIwMjItMDktMjknLCAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIE5hbSBsaWJlcm8ganVzdG8gbGFvcmVldCBzaXQgYW1ldCBjdXJzdXMuIEFtZXQgZXN0IHBsYWNlcmF0IGluIGVnZXN0YXMgZXJhdC4nKTtcbiAgcHJvamVjdDEubGlzdC5wdXNoKHRvZG8wKTtcbiAgdG9nZ2xlVG9Eb0NvbXBsZXRlZCh0b2RvMCk7XG5cbiAgY29uc3QgdG9kbyA9IG5ldyBUb0RvKCdDcmVhdGUgYSB3YXkgdG8gdXBkYXRlIHZhbHVlcycsICcyMDIyLTA5LTI5Jyk7XG4gIHByb2plY3QxLmxpc3QucHVzaCh0b2RvKTtcbiAgdG9nZ2xlVG9Eb0NvbXBsZXRlZCh0b2RvKVxuXG4gIGNvbnN0IHRvZG8xMCA9IG5ldyBUb0RvKCdFeHBhbmQgZm9yIGRlc2NyaXB0aW9uJywgJzIwMjItMDktMzAnLCAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIE5hbSBsaWJlcm8ganVzdG8gbGFvcmVldCBzaXQgYW1ldCBjdXJzdXMuIEFtZXQgZXN0IHBsYWNlcmF0IGluIGVnZXN0YXMgZXJhdC4nKTtcbiAgcHJvamVjdDEubGlzdC5wdXNoKHRvZG8xMCk7XG4gIHRvZ2dsZVRvRG9Db21wbGV0ZWQodG9kbzEwKTtcblxuXG4gIGNvbnN0IHRvZG85ID0gbmV3IFRvRG8oJ0NyZWF0ZSBjdXJyZW50bHkgc2VsZWN0ZWQgcHJvamVjdCBmdW5jdGlvbicsICcyMDIyLTEwLTAxJyk7XG4gIHByb2plY3QxLmxpc3QucHVzaCh0b2RvOSk7XG4gIHRvZ2dsZVRvRG9Db21wbGV0ZWQodG9kbzkpXG5cbiAgY29uc3QgdG9kbzEgPSBuZXcgVG9EbygnU29ydCBkYXRlcycsICcyMDIyLTEwLTAxJyk7XG4gIHByb2plY3QxLmxpc3QucHVzaCh0b2RvMSk7XG4gIHRvZ2dsZVRvRG9Db21wbGV0ZWQodG9kbzEpXG5cbiAgY29uc3QgdG9kbzggPSBuZXcgVG9EbygnQ2hhbmdlIGRhdGUgZm9ybWF0JywgJzIwMjItMTAtMDEnKTtcbiAgcHJvamVjdDEubGlzdC5wdXNoKHRvZG84KTtcbiAgdG9nZ2xlVG9Eb0NvbXBsZXRlZCh0b2RvOClcblxuICBjb25zdCB0b2RvMiA9IG5ldyBUb0RvKCdGaWx0ZXIgYnkgdG9kYXknLCAnMjAyMi0xMC0wMScpO1xuICBwcm9qZWN0MS5saXN0LnB1c2godG9kbzIpO1xuXG4gIGNvbnN0IHRvZG8zID0gbmV3IFRvRG8oJ0ZpbHRlciBieSB0aGlzIHdlZWsnLCAnMjAyMi0xMC0wMScpO1xuICBwcm9qZWN0MS5saXN0LnB1c2godG9kbzMpO1xuXG4gIGNvbnN0IHRvZG83ID0gbmV3IFRvRG8oJ0FkZCBub3RlcyBzZWN0aW9uJywgJzIwMjItMTAtMDEnKTtcbiAgcHJvamVjdDEubGlzdC5wdXNoKHRvZG83KTtcbiAgdG9nZ2xlVG9Eb0NvbXBsZXRlZCh0b2RvNyk7XG5cbiAgY29uc3QgdG9kbzEyID0gbmV3IFRvRG8oJ0FkZCBsb2NhbFN0b3JhZ2UgYWJpbGl0aWVzJywgJzIwMjItMTAtMDYnKVxuICBwcm9qZWN0MS5saXN0LnB1c2godG9kbzEyKTtcbiAgdG9nZ2xlVG9Eb0NvbXBsZXRlZCh0b2RvMTIpXG5cbiAgY29uc3QgdG9kbzQgPSBuZXcgVG9EbygnQ2xlYW4gcm9vbScsIG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdKTtcbiAgcHJvamVjdDIubGlzdC5wdXNoKHRvZG80KTtcblxuICBjb25zdCB0b2RvNSA9IG5ldyBUb0RvKCdEbyBsYXVuZHJ5JywgbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF0pO1xuICBwcm9qZWN0Mi5saXN0LnB1c2godG9kbzUpO1xuICB0b2dnbGVUb0RvQ29tcGxldGVkKHRvZG81KVxuXG4gIGNvbnN0IHRvZG82ID0gbmV3IFRvRG8oJ0J1eSBncm9jZXJpZXMnLCBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXSk7XG4gIHByb2plY3QyLmxpc3QucHVzaCh0b2RvNik7XG5cbiAgY29uc3QgdG9kbzExID0gbmV3IFRvRG8oJ1Rha2Ugb3V0IHRoZSB0cmFzaCcsIG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdKTtcbiAgcHJvamVjdDIubGlzdC5wdXNoKHRvZG8xMSk7XG4gIHRvZ2dsZVRvRG9Db21wbGV0ZWQodG9kbzExKVxufTtcblxuZXhwb3J0IGNvbnN0IG5vdGVzID0gKCkgPT4ge1xuICBjb25zdCBub3RlMCA9IG5ldyBOb3RlKCdvcmFuZ2VzXFxuYmFuYW5hc1xcbmFwcGxlc1xcbmdyYXBlcycpXG4gIG5vdGVzQXJyLnB1c2gobm90ZTApXG5cbiAgY29uc3Qgbm90ZTEgPSBuZXcgTm90ZSgnQ1BVXFxuR1BVXFxuUkFNXFxuUFNVXFxuU1NEXFxuTW90aGVyYm9hcmQnKVxuICBub3Rlc0Fyci5wdXNoKG5vdGUxKVxuXG4gIGNvbnN0IG5vdGUyID0gbmV3IE5vdGUoJ29uZVxcbnR3b1xcbnRocmVlXFxuZm91cicpXG4gIG5vdGVzQXJyLnB1c2gobm90ZTIpXG59IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmltcG9ydCAqIGFzIGRlbW8gZnJvbSAnLi9jb21wb25lbnRzL3Rlc3QnO1xuaW1wb3J0IHsgcmVuZGVySW5ib3gsIHJlbmRlclByb2plY3RzLCByZW5kZXJUb0RvcyB9IGZyb20gJy4vY29tcG9uZW50cy9yZW5kZXJJdGVtcyc7XG5pbXBvcnQgeyBzaWRlYmFyLCBzb3J0RGF0ZUJ0biwgbGlzdFZpZXcgfSBmcm9tICcuL2NvbXBvbmVudHMvRE9NZWxlbWVudHMnO1xuXG5leHBvcnQgbGV0IG5vdGVzQXJyID0gW107XG5leHBvcnQgbGV0IHByb2plY3RzID0gW107XG5leHBvcnQgbGV0IGN1cnJlbnRQcm9qZWN0O1xuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUHJvamVjdHMoaXRlbSl7XG4gIHJldHVybiBwcm9qZWN0cyA9IGl0ZW07XG59XG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQ3VycmVudFByb2plY3QoaXRlbSkge1xuICByZXR1cm4gY3VycmVudFByb2plY3QgPSBpdGVtO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVOb3RlcyhpdGVtKSB7XG4gIHJldHVybiBub3Rlc0FyciA9IGl0ZW07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VEYXRlRm9ybWF0KGRhdGVJU09zdHJpbmcpe1xuICBpZighZGF0ZUlTT3N0cmluZykgcmV0dXJuICcnO1xuICBjb25zdCBzcGxpdCA9IGRhdGVJU09zdHJpbmcuc3BsaXQoJy0nKTtcbiAgY29uc3QgbmV3RGF0ZSA9IGAke3NwbGl0WzFdfS8ke3NwbGl0WzJdfS8ke3NwbGl0WzBdfWA7XG4gIHJldHVybiBuZXdEYXRlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2xvclNlbGVjdGVkKGUpe1xuICBjb25zdCBzZWxlY3RhYmxlID0gc2lkZWJhci5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0YWJsZScpXG4gIHNlbGVjdGFibGUuZm9yRWFjaChlbD0+e1xuICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gIH0pXG4gIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzb3J0RGF0ZSgpIHtcbiAgaWYgKCFzb3J0RGF0ZUJ0bi5kYXRhc2V0LnNvcnQpIHtcbiAgICBzb3J0RGF0ZUJ0bi5kYXRhc2V0LnNvcnQgPSAnYXNjJ1xuICB9XG4gIHByb2plY3RzLmZvckVhY2goZWwgPT4ge1xuICAgIGVsLmxpc3Quc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgaWYgKHNvcnREYXRlQnRuLmRhdGFzZXQuc29ydCA9PT0gJ2FzYycpIHtcbiAgICAgICAgaWYgKGEuZHVlRGF0ZSA+IGIuZHVlRGF0ZSlcbiAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgaWYgKGEuZHVlRGF0ZSA8IGIuZHVlRGF0ZSlcbiAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgICBlbHNlIGlmKHNvcnREYXRlQnRuLmRhdGFzZXQuc29ydCA9PT0gJ2RzYycpe1xuICAgICAgICBpZiAoYS5kdWVEYXRlID4gYi5kdWVEYXRlKVxuICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgaWYgKGEuZHVlRGF0ZSA8IGIuZHVlRGF0ZSlcbiAgICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuICB9KTtcbiAgaWYgKHNvcnREYXRlQnRuLmRhdGFzZXQuc29ydCA9PT0gJ2FzYycpIHtcbiAgICBzb3J0RGF0ZUJ0bi5kYXRhc2V0LnNvcnQgPSAnZHNjJztcbiAgICBzb3J0RGF0ZUJ0bi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1zb3J0LXVwXCI+PC9pPidcbiAgfSBlbHNlIGlmKHNvcnREYXRlQnRuLmRhdGFzZXQuc29ydCA9PT0gJ2RzYycpIHtcbiAgICBzb3J0RGF0ZUJ0bi5kYXRhc2V0LnNvcnQgPSAnYXNjJztcbiAgICBzb3J0RGF0ZUJ0bi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1zb3J0LWRvd25cIj48L2k+J1xuICB9XG4gIHJlbW92ZUFsbENoaWxkTm9kZXMobGlzdFZpZXcpXG4gIHJlbmRlclRvRG9zKGN1cnJlbnRQcm9qZWN0KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGROb2RlcyhwYXJlbnQpIHtcbiAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRMb2NhbFN0b3JhZ2Uoc3RvcmVkTmFtZSwgZGF0YUFycil7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHN0b3JlZE5hbWUsIEpTT04uc3RyaW5naWZ5KGRhdGFBcnIpKVxufVxuXG5mdW5jdGlvbiBnZXRMb2NhbFN0b3JhZ2Uoc3RvcmVkTmFtZSl7XG4gIGlmIChzdG9yZWROYW1lID09PSAncHJvamVjdHMnKSB7XG4gICAgdXBkYXRlUHJvamVjdHMoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzdG9yZWROYW1lKSkpXG4gIH0gXG4gIGVsc2UgaWYgKHN0b3JlZE5hbWUgPT09ICdub3RlcycpIHtcbiAgICB1cGRhdGVOb3RlcyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHN0b3JlZE5hbWUpKSlcbiAgfVxufVxuXG5cbmlmKHR5cGVvZiBsb2NhbFN0b3JhZ2UucHJvamVjdHMgPT09ICd1bmRlZmluZWQnKSB7XG4gIGRlbW8udG9kb3MoKTtcbiAgc2V0TG9jYWxTdG9yYWdlKCdwcm9qZWN0cycsIHByb2plY3RzKVxufVxuaWYgKHR5cGVvZiBsb2NhbFN0b3JhZ2Uubm90ZXMgPT09ICd1bmRlZmluZWQnKSB7XG4gIGRlbW8ubm90ZXMoKTtcbiAgc2V0TG9jYWxTdG9yYWdlKCdub3RlcycsIG5vdGVzQXJyKVxufVxuXG4vLyBsb2NhbFN0b3JhZ2UuY2xlYXIoKVxuZ2V0TG9jYWxTdG9yYWdlKCdwcm9qZWN0cycpO1xuZ2V0TG9jYWxTdG9yYWdlKCdub3RlcycpO1xucmVuZGVyUHJvamVjdHMoKTtcbnJlbmRlckluYm94KCk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=