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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --sidebar-padding: 0 35px;\n  --main-border-radius: 35px;\n  --main-color: rgb(136, 0, 255);\n  --sub-color: rgb(242, 226, 255);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nul {\n  list-style-type: none;\n}\n\nbutton {\n  padding: 5px 15px;\n  border-radius: 5px;\n  border: none;\n  font-weight: 700;\n  color: white;\n  background-color: var(--main-color);\n}\n\ntextarea {\n  resize: none;\n}\n\nhtml {\n  background-color: var(--main-color);\n}\n\nhtml, body{\n  height: 100%;\n}\n\nmain {\n  display: grid;\n  grid-template-columns: 250px 1fr;\n  grid-template-rows: 50px 1fr;\n  grid-template-areas: \n  \"header header\"\n  \"sidebar list\";\n  height: 100%;\n}\n\nheader {\n  grid-area: header;\n  background-color: var(--main-color);\n  display: flex;\n  align-items: center;\n  padding-left: 35px;\n  color: white;\n}\n\n.selectable {\n  padding-top: 5px !important;\n  padding-bottom: 5px !important;\n}\n\n.selectable:hover {\n  background-color: rgb(235, 235, 235);\n  border-top-right-radius: 50px;\n  border-bottom-right-radius: 50px;\n  transition: all .2s ease-in-out;\n}\n\n.selected {\n  background-color: var(--sub-color);\n  border-top-right-radius: 50px;\n  border-bottom-right-radius: 50px;\n  transition: background-color .2s ease-in;\n}\n\n.collapse{\n  display: none;\n  overflow: hidden;\n}\n\n.hide {\n  opacity: 0;\n  transition: visibility 0s, opacity 0.5s linear;\n}\n\n.hide:hover {\n  opacity: 1;\n}\n\n.strike {\n  /* text-decoration: line-through; */\n  opacity: .2;\n}\n\ni,\nbutton,\n.selectable,\n.todoName,\n.editTodo,\n.delTodo,\n.sortDate,\ninput[type='checkbox'] {\n  cursor: pointer;\n}\n\n.sidebar {\n  padding: 30px 30px 30px 0;\n  grid-area: sidebar;\n  font-size: 1.3rem;\n  font-weight: 500;\n  height: 100%;\n  background-color: white;\n  border-top-left-radius: var(--main-border-radius);\n}\n\n.sidebar li {\n  margin-top: 10px;\n  padding: var(--sidebar-padding);\n}\n\n#projectsList{\n  padding: 0;\n}\n\n.projects {\n  padding: var(--sidebar-padding);\n  display: flex;\n  margin-bottom: 10px;\n  align-items: center;\n}\n\n.projectsBtn {\n  margin-left: 10px;\n}\n\n.projectItem {\n  display: grid;\n  grid-template-columns: 22px 130px 30px;\n  grid-template-rows: 22px;\n  font-size: 1rem;\n  font-weight: 300;\n  padding-left: var(--sidebar-padding);\n}\n\n.projectName {\n  align-self: center;\n  padding: 8px 5px !important;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.projectLength {\n  font-size: .8rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--main-color);\n  background-color: rgb(245, 245, 245);\n  border-radius: 50%;\n}\n\n.delProject,\n.delTodo,\n.editTodo {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: rgb(0, 0, 0, .2);\n}\n\n.delProject:hover,\n.delTodo:hover {\n  color: red;\n  transition: color 0.5s ease;\n}\n\n.editTodo:hover {\n  color: rgba(0, 0, 0, 0.5);\n  transition: color 0.5s ease;\n}\n\n#notes {\n  margin-top: 50px;\n}\n\n.list {\n  padding: 0 20px;\n  grid-area: list;\n  width: 100%;\n  height: 100%;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-top-right-radius: var(--main-border-radius);\n}\n\n.topRow,\n.listView {\n  width: max(500px, 100%);\n  background-color: white;\n}\n\n.topRow {\n  display: flex;\n  align-items: center;\n  padding-bottom: 15px;\n  padding-top: 20px;\n  border-top-right-radius: var(--main-border-radius);\n}\n\n.listTitle {\n  margin-left: 40px;\n}\n\n.listBtn {\n  margin-left: 20px;\n}\n\n.dueDate {\n  margin-left: auto;\n  margin-right: 95px;\n}\n\n\n.todo {\n  margin: 5px 0;\n  display: grid;\n  grid-template-columns: 15px 1fr 110px 25px 30px;\n  align-items: center;\n  font-size: 1rem;\n  padding: 0 15px;\n  border-radius: 20px;\n}\n\n.todo:hover {\n  background-color: var(--sub-color);\n  transition: all 0.5s ease-out;\n}\n\n/* .todo:nth-child(even){\n  background-color: rgb(250, 250, 250);\n} */\n\n.todoName {\n  padding: 10px 10px;\n}\n\n.todoDesc {\n  grid-column: 2 / span 4;\n  font-size: .8rem;\n  padding: 10px 20px 20px 20px;\n}\n\n.todoDate {\n  font-size: .8rem;\n  color: var(--main-color);\n}\n\n.sortDate {\n  color: var(--main-color);\n}\n\n\n.edits {\n  height: 100vh;\n  width: 100vw;\n  z-index: 10;\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(180, 180, 180, 0.397);\n}\n\n.editInputs {\n  z-index: 20;\n  padding: 20px;\n  background-color: white;\n  border: 2px solid black;\n  border-radius: 5px;\n  height: 250px;\n  width: 500px;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  font-size: 1.1rem;\n}\n\n.editInputs button {\n  padding: 5px;\n  width: 80px;\n}\n\n#editName,\n#editDesc {\n  margin-bottom: 10px;\n  border: 1px solid black;\n  border-radius: 2px;\n  padding: 5px;\n  font-size: .8rem;\n}\n\n#editName {\n  width: 100%;\n}\n\n#editDesc {\n  height: 80px;\n  width: 100%;\n}\n\n#editAccept {\n  margin-left: auto;\n}\n\n.newInputs {\n  margin-left: 30px;\n  padding: 10px;\n  width: min(500px, 100%);\n}\n\n.newName,\n.newDesc {\n  border: 1px solid grey;\n  border-radius: 3px;\n  padding: 5px;\n}\n\n.newName {\n  width: 100%;\n  font-size: 1rem;\n  margin-bottom: 10px;\n}\n\n.newDesc {\n  display: block;\n  width: 100%;\n  height: 100px;\n  font-size: 1rem;\n  margin-bottom: 10px;\n}\n\n.newDate {\n  padding: 3px;\n  font-size: .9rem;\n  display: flex;\n  align-items: center;\n}\n\n.newInputBottom {\n  display: flex;\n  align-items: center;\n}\n\n.confirmNew,\n.cancelNew {\n  font-size: .9rem;\n}\n\n.confirmNew {\n  margin-left: auto;\n  margin-right: 10px;\n}\n\n\n/* Remove default checkbox styles */\ninput[type=\"checkbox\"] {\n  /* Add if not using autoprefixer */\n  -webkit-appearance: none;\n  appearance: none;\n  /* For iOS < 15 to remove gradient background */\n  background-color: #fff;\n  /* Not removed via appearance */\n  margin: 0;\n}\n\ninput[type=\"checkbox\"] {\n  appearance: none;\n  background-color: #fff;\n  margin: 0;\n  font: inherit;\n  color: grey;\n  width: .9rem;\n  height: .9rem;\n  border: 0.1rem solid grey;\n  border-radius: 0.15em;\n  transform: translateY(-0.075em);\n  display: grid;\n  place-content: center;\n}\n\ninput[type=\"checkbox\"]::before {\n  content: \"\";\n  width: 0.65rem;\n  height: 0.65rem;\n  transform: scale(0);\n  transition: 120ms transform ease-in-out;\n  /* Checked color */\n  box-shadow: inset 1em 1em rgb(228, 228, 228);\n}\n\ninput[type=\"checkbox\"]:checked::before {\n  transform: scale(1);\n}\n\n.newNote {\n  margin-left: 20px;\n}\n\nmain[data-list='NotesSection'] .listView {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.noteItem {\n  width: 220px;\n  height: 240px;\n}\n\n.noteItem:nth-child(even) {\n  transform:rotate(4deg);\n  position:relative;\n  top:5px;\n}\n.noteItem:nth-child(3n) {\n  transform:rotate(-3deg);\n  position:relative;\n  top:-5px;\n}\n.noteItem:nth-child(5n) {\n  transform:rotate(5deg);\n  position:relative;\n  top:-10px;\n}\n\n.noteText {border: none;\n  padding: 20px;\n  height: 100%;\n  width: 100%;\n  font-size: 1.3rem;\n  font-weight: 400;\n  border: 1px solid #E8E8E8;\n  background: #ffff88;\n  /* Old browsers */\n  background: -moz-linear-gradient(-45deg, #ffff88 81%, #ffff88 82%, #ffff88 82%, #ffffc6 100%);\n  /* FF3.6+ */\n  background: -webkit-gradient(linear, left top, right bottom, color-stop(81%, #ffff88), color-stop(82%, #ffff88), color-stop(82%, #ffff88), color-stop(100%, #ffffc6));\n  /* Chrome,Safari4+ */\n  background: -webkit-linear-gradient(-45deg, #ffff88 81%, #ffff88 82%, #ffff88 82%, #ffffc6 100%);\n  /* Chrome10+,Safari5.1+ */\n  background: -o-linear-gradient(-45deg, #ffff88 81%, #ffff88 82%, #ffff88 82%, #ffffc6 100%);\n  /* Opera 11.10+ */\n  background: -ms-linear-gradient(-45deg, #ffff88 81%, #ffff88 82%, #ffff88 82%, #ffffc6 100%);\n  /* IE10+ */\n  background: linear-gradient(135deg, #ffff88 81%, #ffff88 82%, #ffff88 82%, #ffffc6 100%);\n  /* W3C */\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffff88', endColorstr='#ffffc6', GradientType=1);\n  /* IE6-9 fallback on horizontal gradient */\n  border-bottom-right-radius: 60px 10px;\n}\n\n.noteText:focus {\n  outline: none !important;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;\n  transition: box-shadow .3s;\n}\n\n.deleteNote {\n  position: relative;\n  top: -238px;\n  right: -193px;\n  width: fit-content;\n  z-index: 10;\n  color: rgb(179, 179, 179);\n}\n\n.deleteNote:hover {\n  color: red;\n  transition: color .3s;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --sidebar-padding: 0 35px;\n  --main-border-radius: 35px;\n  --main-color: rgb(136, 0, 255);\n  --sub-color: rgb(242, 226, 255);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nul {\n  list-style-type: none;\n}\n\nbutton {\n  padding: 5px 15px;\n  border-radius: 5px;\n  border: none;\n  font-weight: 700;\n  color: white;\n  background-color: var(--main-color);\n}\n\ntextarea {\n  resize: none;\n}\n\nhtml {\n  background-color: var(--main-color);\n}\n\nhtml, body{\n  height: 100%;\n}\n\nmain {\n  display: grid;\n  grid-template-columns: 250px 1fr;\n  grid-template-rows: 50px 1fr;\n  grid-template-areas: \n  \"header header\"\n  \"sidebar list\";\n  height: 100%;\n}\n\nheader {\n  grid-area: header;\n  background-color: var(--main-color);\n  display: flex;\n  align-items: center;\n  padding-left: 35px;\n  color: white;\n}\n\n.selectable {\n  padding-top: 5px !important;\n  padding-bottom: 5px !important;\n}\n\n.selectable:hover {\n  background-color: rgb(235, 235, 235);\n  border-top-right-radius: 50px;\n  border-bottom-right-radius: 50px;\n  transition: all .2s ease-in-out;\n}\n\n.selected {\n  background-color: var(--sub-color);\n  border-top-right-radius: 50px;\n  border-bottom-right-radius: 50px;\n  transition: background-color .2s ease-in;\n}\n\n.collapse{\n  display: none;\n  overflow: hidden;\n}\n\n.hide {\n  opacity: 0;\n  transition: visibility 0s, opacity 0.5s linear;\n}\n\n.hide:hover {\n  opacity: 1;\n}\n\n.strike {\n  /* text-decoration: line-through; */\n  opacity: .2;\n}\n\ni,\nbutton,\n.selectable,\n.todoName,\n.editTodo,\n.delTodo,\n.sortDate,\ninput[type='checkbox'] {\n  cursor: pointer;\n}\n\n.sidebar {\n  padding: 30px 30px 30px 0;\n  grid-area: sidebar;\n  font-size: 1.3rem;\n  font-weight: 500;\n  height: 100%;\n  background-color: white;\n  border-top-left-radius: var(--main-border-radius);\n}\n\n.sidebar li {\n  margin-top: 10px;\n  padding: var(--sidebar-padding);\n}\n\n#projectsList{\n  padding: 0;\n}\n\n.projects {\n  padding: var(--sidebar-padding);\n  display: flex;\n  margin-bottom: 10px;\n  align-items: center;\n}\n\n.projectsBtn {\n  margin-left: 10px;\n}\n\n.projectItem {\n  display: grid;\n  grid-template-columns: 22px 130px 30px;\n  grid-template-rows: 22px;\n  font-size: 1rem;\n  font-weight: 300;\n  padding-left: var(--sidebar-padding);\n}\n\n.projectName {\n  align-self: center;\n  padding: 8px 5px !important;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.projectLength {\n  font-size: .8rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--main-color);\n  background-color: rgb(245, 245, 245);\n  border-radius: 50%;\n}\n\n.delProject,\n.delTodo,\n.editTodo {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: rgb(0, 0, 0, .2);\n}\n\n.delProject:hover,\n.delTodo:hover {\n  color: red;\n  transition: color 0.5s ease;\n}\n\n.editTodo:hover {\n  color: rgba(0, 0, 0, 0.5);\n  transition: color 0.5s ease;\n}\n\n#notes {\n  margin-top: 50px;\n}\n\n.list {\n  padding: 0 20px;\n  grid-area: list;\n  width: 100%;\n  height: 100%;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-top-right-radius: var(--main-border-radius);\n}\n\n.topRow,\n.listView {\n  width: max(500px, 100%);\n  background-color: white;\n}\n\n.topRow {\n  display: flex;\n  align-items: center;\n  padding-bottom: 15px;\n  padding-top: 20px;\n  border-top-right-radius: var(--main-border-radius);\n}\n\n.listTitle {\n  margin-left: 40px;\n}\n\n.listBtn {\n  margin-left: 20px;\n}\n\n.dueDate {\n  margin-left: auto;\n  margin-right: 95px;\n}\n\n\n.todo {\n  margin: 5px 0;\n  display: grid;\n  grid-template-columns: 15px 1fr 110px 25px 30px;\n  align-items: center;\n  font-size: 1rem;\n  padding: 0 15px;\n  border-radius: 20px;\n}\n\n.todo:hover {\n  background-color: var(--sub-color);\n  transition: all 0.5s ease-out;\n}\n\n/* .todo:nth-child(even){\n  background-color: rgb(250, 250, 250);\n} */\n\n.todoName {\n  padding: 10px 10px;\n}\n\n.todoDesc {\n  grid-column: 2 / span 4;\n  font-size: .8rem;\n  padding: 10px 20px 20px 20px;\n}\n\n.todoDate {\n  font-size: .8rem;\n  color: var(--main-color);\n}\n\n.sortDate {\n  color: var(--main-color);\n}\n\n\n.edits {\n  height: 100vh;\n  width: 100vw;\n  z-index: 10;\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(180, 180, 180, 0.397);\n}\n\n.editInputs {\n  z-index: 20;\n  padding: 20px;\n  background-color: white;\n  border: 2px solid black;\n  border-radius: 5px;\n  height: 250px;\n  width: 500px;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  font-size: 1.1rem;\n}\n\n.editInputs button {\n  padding: 5px;\n  width: 80px;\n}\n\n#editName,\n#editDesc {\n  margin-bottom: 10px;\n  border: 1px solid black;\n  border-radius: 2px;\n  padding: 5px;\n  font-size: .8rem;\n}\n\n#editName {\n  width: 100%;\n}\n\n#editDesc {\n  height: 80px;\n  width: 100%;\n}\n\n#editAccept {\n  margin-left: auto;\n}\n\n.newInputs {\n  margin-left: 30px;\n  padding: 10px;\n  width: min(500px, 100%);\n}\n\n.newName,\n.newDesc {\n  border: 1px solid grey;\n  border-radius: 3px;\n  padding: 5px;\n}\n\n.newName {\n  width: 100%;\n  font-size: 1rem;\n  margin-bottom: 10px;\n}\n\n.newDesc {\n  display: block;\n  width: 100%;\n  height: 100px;\n  font-size: 1rem;\n  margin-bottom: 10px;\n}\n\n.newDate {\n  padding: 3px;\n  font-size: .9rem;\n  display: flex;\n  align-items: center;\n}\n\n.newInputBottom {\n  display: flex;\n  align-items: center;\n}\n\n.confirmNew,\n.cancelNew {\n  font-size: .9rem;\n}\n\n.confirmNew {\n  margin-left: auto;\n  margin-right: 10px;\n}\n\n\n/* Remove default checkbox styles */\ninput[type=\"checkbox\"] {\n  /* Add if not using autoprefixer */\n  -webkit-appearance: none;\n  appearance: none;\n  /* For iOS < 15 to remove gradient background */\n  background-color: #fff;\n  /* Not removed via appearance */\n  margin: 0;\n}\n\ninput[type=\"checkbox\"] {\n  appearance: none;\n  background-color: #fff;\n  margin: 0;\n  font: inherit;\n  color: grey;\n  width: .9rem;\n  height: .9rem;\n  border: 0.1rem solid grey;\n  border-radius: 0.15em;\n  transform: translateY(-0.075em);\n  display: grid;\n  place-content: center;\n}\n\ninput[type=\"checkbox\"]::before {\n  content: \"\";\n  width: 0.65rem;\n  height: 0.65rem;\n  transform: scale(0);\n  transition: 120ms transform ease-in-out;\n  /* Checked color */\n  box-shadow: inset 1em 1em rgb(228, 228, 228);\n}\n\ninput[type=\"checkbox\"]:checked::before {\n  transform: scale(1);\n}\n\n.newNote {\n  margin-left: 20px;\n}\n\nmain[data-list='NotesSection'] .listView {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.noteItem {\n  width: 220px;\n  height: 240px;\n}\n\n.noteItem:nth-child(even) {\n  transform:rotate(4deg);\n  position:relative;\n  top:5px;\n}\n.noteItem:nth-child(3n) {\n  transform:rotate(-3deg);\n  position:relative;\n  top:-5px;\n}\n.noteItem:nth-child(5n) {\n  transform:rotate(5deg);\n  position:relative;\n  top:-10px;\n}\n\n.noteText {border: none;\n  padding: 20px;\n  height: 100%;\n  width: 100%;\n  font-size: 1.3rem;\n  font-weight: 400;\n  border: 1px solid #E8E8E8;\n  background: #ffff88;\n  /* Old browsers */\n  background: -moz-linear-gradient(-45deg, #ffff88 81%, #ffff88 82%, #ffff88 82%, #ffffc6 100%);\n  /* FF3.6+ */\n  background: -webkit-gradient(linear, left top, right bottom, color-stop(81%, #ffff88), color-stop(82%, #ffff88), color-stop(82%, #ffff88), color-stop(100%, #ffffc6));\n  /* Chrome,Safari4+ */\n  background: -webkit-linear-gradient(-45deg, #ffff88 81%, #ffff88 82%, #ffff88 82%, #ffffc6 100%);\n  /* Chrome10+,Safari5.1+ */\n  background: -o-linear-gradient(-45deg, #ffff88 81%, #ffff88 82%, #ffff88 82%, #ffffc6 100%);\n  /* Opera 11.10+ */\n  background: -ms-linear-gradient(-45deg, #ffff88 81%, #ffff88 82%, #ffff88 82%, #ffffc6 100%);\n  /* IE10+ */\n  background: linear-gradient(135deg, #ffff88 81%, #ffff88 82%, #ffff88 82%, #ffffc6 100%);\n  /* W3C */\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffff88', endColorstr='#ffffc6', GradientType=1);\n  /* IE6-9 fallback on horizontal gradient */\n  border-bottom-right-radius: 60px 10px;\n}\n\n.noteText:focus {\n  outline: none !important;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;\n  transition: box-shadow .3s;\n}\n\n.deleteNote {\n  position: relative;\n  top: -238px;\n  right: -193px;\n  width: fit-content;\n  z-index: 10;\n  color: rgb(179, 179, 179);\n}\n\n.deleteNote:hover {\n  color: red;\n  transition: color .3s;\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLFlBQVksVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sT0FBTyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsUUFBUSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxRQUFRLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxlQUFlLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZ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LHVFQUFjO0FBQ2Qsb0VBQVc7Ozs7OztVQ3JHWDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL0RPTWVsZW1lbnRzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9MaXN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9Ob3RlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9Ub0RvLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9jcmVhdGVFZGl0SW5wdXRET00uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2NyZWF0ZU5ld0lucHV0RE9NLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9jcmVhdGVOZXdJdGVtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9jcmVhdGVOZXdOb3RlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9jcmVhdGVOZXdOb3RlRE9NLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9jcmVhdGVOZXdQcm9qZWN0RE9NLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9jcmVhdGVOZXdUb0RvRE9NLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9yZW5kZXJJdGVtcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvdGVzdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tc2lkZWJhci1wYWRkaW5nOiAwIDM1cHg7XFxuICAtLW1haW4tYm9yZGVyLXJhZGl1czogMzVweDtcXG4gIC0tbWFpbi1jb2xvcjogcmdiKDEzNiwgMCwgMjU1KTtcXG4gIC0tc3ViLWNvbG9yOiByZ2IoMjQyLCAyMjYsIDI1NSk7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgcGFkZGluZzogNXB4IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuaHRtbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG59XFxuXFxuaHRtbCwgYm9keXtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNTBweCAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICBcXFwiaGVhZGVyIGhlYWRlclxcXCJcXG4gIFxcXCJzaWRlYmFyIGxpc3RcXFwiO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiAzNXB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc2VsZWN0YWJsZSB7XFxuICBwYWRkaW5nLXRvcDogNXB4ICFpbXBvcnRhbnQ7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5zZWxlY3RhYmxlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIzNSwgMjM1KTtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MHB4O1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDUwcHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3ViLWNvbG9yKTtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MHB4O1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDUwcHg7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlLWluO1xcbn1cXG5cXG4uY29sbGFwc2V7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmhpZGUge1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMsIG9wYWNpdHkgMC41cyBsaW5lYXI7XFxufVxcblxcbi5oaWRlOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5zdHJpa2Uge1xcbiAgLyogdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7ICovXFxuICBvcGFjaXR5OiAuMjtcXG59XFxuXFxuaSxcXG5idXR0b24sXFxuLnNlbGVjdGFibGUsXFxuLnRvZG9OYW1lLFxcbi5lZGl0VG9kbyxcXG4uZGVsVG9kbyxcXG4uc29ydERhdGUsXFxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gIHBhZGRpbmc6IDMwcHggMzBweCAzMHB4IDA7XFxuICBncmlkLWFyZWE6IHNpZGViYXI7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IHZhcigtLW1haW4tYm9yZGVyLXJhZGl1cyk7XFxufVxcblxcbi5zaWRlYmFyIGxpIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBwYWRkaW5nOiB2YXIoLS1zaWRlYmFyLXBhZGRpbmcpO1xcbn1cXG5cXG4jcHJvamVjdHNMaXN0e1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLnByb2plY3RzIHtcXG4gIHBhZGRpbmc6IHZhcigtLXNpZGViYXItcGFkZGluZyk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0c0J0biB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLnByb2plY3RJdGVtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIycHggMTMwcHggMzBweDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMjJweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXNpZGViYXItcGFkZGluZyk7XFxufVxcblxcbi5wcm9qZWN0TmFtZSB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA4cHggNXB4ICFpbXBvcnRhbnQ7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG5cXG4ucHJvamVjdExlbmd0aCB7XFxuICBmb250LXNpemU6IC44cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0NSwgMjQ1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLmRlbFByb2plY3QsXFxuLmRlbFRvZG8sXFxuLmVkaXRUb2RvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBjb2xvcjogcmdiKDAsIDAsIDAsIC4yKTtcXG59XFxuXFxuLmRlbFByb2plY3Q6aG92ZXIsXFxuLmRlbFRvZG86aG92ZXIge1xcbiAgY29sb3I6IHJlZDtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuNXMgZWFzZTtcXG59XFxuXFxuLmVkaXRUb2RvOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjVzIGVhc2U7XFxufVxcblxcbiNub3RlcyB7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG5cXG4ubGlzdCB7XFxuICBwYWRkaW5nOiAwIDIwcHg7XFxuICBncmlkLWFyZWE6IGxpc3Q7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IHZhcigtLW1haW4tYm9yZGVyLXJhZGl1cyk7XFxufVxcblxcbi50b3BSb3csXFxuLmxpc3RWaWV3IHtcXG4gIHdpZHRoOiBtYXgoNTAwcHgsIDEwMCUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi50b3BSb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IHZhcigtLW1haW4tYm9yZGVyLXJhZGl1cyk7XFxufVxcblxcbi5saXN0VGl0bGUge1xcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxufVxcblxcbi5saXN0QnRuIHtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbn1cXG5cXG4uZHVlRGF0ZSB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogOTVweDtcXG59XFxuXFxuXFxuLnRvZG8ge1xcbiAgbWFyZ2luOiA1cHggMDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE1cHggMWZyIDExMHB4IDI1cHggMzBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBwYWRkaW5nOiAwIDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG4udG9kbzpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWItY29sb3IpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1vdXQ7XFxufVxcblxcbi8qIC50b2RvOm50aC1jaGlsZChldmVuKXtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTAsIDI1MCwgMjUwKTtcXG59ICovXFxuXFxuLnRvZG9OYW1lIHtcXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcXG59XFxuXFxuLnRvZG9EZXNjIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gc3BhbiA0O1xcbiAgZm9udC1zaXplOiAuOHJlbTtcXG4gIHBhZGRpbmc6IDEwcHggMjBweCAyMHB4IDIwcHg7XFxufVxcblxcbi50b2RvRGF0ZSB7XFxuICBmb250LXNpemU6IC44cmVtO1xcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbn1cXG5cXG4uc29ydERhdGUge1xcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbn1cXG5cXG5cXG4uZWRpdHMge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIHotaW5kZXg6IDEwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4MCwgMTgwLCAxODAsIDAuMzk3KTtcXG59XFxuXFxuLmVkaXRJbnB1dHMge1xcbiAgei1pbmRleDogMjA7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGhlaWdodDogMjUwcHg7XFxuICB3aWR0aDogNTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG4uZWRpdElucHV0cyBidXR0b24ge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgd2lkdGg6IDgwcHg7XFxufVxcblxcbiNlZGl0TmFtZSxcXG4jZWRpdERlc2Mge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZm9udC1zaXplOiAuOHJlbTtcXG59XFxuXFxuI2VkaXROYW1lIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jZWRpdERlc2Mge1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNlZGl0QWNjZXB0IHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4ubmV3SW5wdXRzIHtcXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHdpZHRoOiBtaW4oNTAwcHgsIDEwMCUpO1xcbn1cXG5cXG4ubmV3TmFtZSxcXG4ubmV3RGVzYyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4ubmV3TmFtZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5uZXdEZXNjIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLm5ld0RhdGUge1xcbiAgcGFkZGluZzogM3B4O1xcbiAgZm9udC1zaXplOiAuOXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubmV3SW5wdXRCb3R0b20ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb25maXJtTmV3LFxcbi5jYW5jZWxOZXcge1xcbiAgZm9udC1zaXplOiAuOXJlbTtcXG59XFxuXFxuLmNvbmZpcm1OZXcge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcblxcbi8qIFJlbW92ZSBkZWZhdWx0IGNoZWNrYm94IHN0eWxlcyAqL1xcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgLyogQWRkIGlmIG5vdCB1c2luZyBhdXRvcHJlZml4ZXIgKi9cXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAvKiBGb3IgaU9TIDwgMTUgdG8gcmVtb3ZlIGdyYWRpZW50IGJhY2tncm91bmQgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAvKiBOb3QgcmVtb3ZlZCB2aWEgYXBwZWFyYW5jZSAqL1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIGNvbG9yOiBncmV5O1xcbiAgd2lkdGg6IC45cmVtO1xcbiAgaGVpZ2h0OiAuOXJlbTtcXG4gIGJvcmRlcjogMC4xcmVtIHNvbGlkIGdyZXk7XFxuICBib3JkZXItcmFkaXVzOiAwLjE1ZW07XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMDc1ZW0pO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgd2lkdGg6IDAuNjVyZW07XFxuICBoZWlnaHQ6IDAuNjVyZW07XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgdHJhbnNpdGlvbjogMTIwbXMgdHJhbnNmb3JtIGVhc2UtaW4tb3V0O1xcbiAgLyogQ2hlY2tlZCBjb2xvciAqL1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMWVtIDFlbSByZ2IoMjI4LCAyMjgsIDIyOCk7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZDo6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbi5uZXdOb3RlIHtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbn1cXG5cXG5tYWluW2RhdGEtbGlzdD0nTm90ZXNTZWN0aW9uJ10gLmxpc3RWaWV3IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5ub3RlSXRlbSB7XFxuICB3aWR0aDogMjIwcHg7XFxuICBoZWlnaHQ6IDI0MHB4O1xcbn1cXG5cXG4ubm90ZUl0ZW06bnRoLWNoaWxkKGV2ZW4pIHtcXG4gIHRyYW5zZm9ybTpyb3RhdGUoNGRlZyk7XFxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG4gIHRvcDo1cHg7XFxufVxcbi5ub3RlSXRlbTpudGgtY2hpbGQoM24pIHtcXG4gIHRyYW5zZm9ybTpyb3RhdGUoLTNkZWcpO1xcbiAgcG9zaXRpb246cmVsYXRpdmU7XFxuICB0b3A6LTVweDtcXG59XFxuLm5vdGVJdGVtOm50aC1jaGlsZCg1bikge1xcbiAgdHJhbnNmb3JtOnJvdGF0ZSg1ZGVnKTtcXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xcbiAgdG9wOi0xMHB4O1xcbn1cXG5cXG4ubm90ZVRleHQge2JvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNFOEU4RTg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZjg4O1xcbiAgLyogT2xkIGJyb3dzZXJzICovXFxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNmZmZmODggODElLCAjZmZmZjg4IDgyJSwgI2ZmZmY4OCA4MiUsICNmZmZmYzYgMTAwJSk7XFxuICAvKiBGRjMuNisgKi9cXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgYm90dG9tLCBjb2xvci1zdG9wKDgxJSwgI2ZmZmY4OCksIGNvbG9yLXN0b3AoODIlLCAjZmZmZjg4KSwgY29sb3Itc3RvcCg4MiUsICNmZmZmODgpLCBjb2xvci1zdG9wKDEwMCUsICNmZmZmYzYpKTtcXG4gIC8qIENocm9tZSxTYWZhcmk0KyAqL1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjZmZmZjg4IDgxJSwgI2ZmZmY4OCA4MiUsICNmZmZmODggODIlLCAjZmZmZmM2IDEwMCUpO1xcbiAgLyogQ2hyb21lMTArLFNhZmFyaTUuMSsgKi9cXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNmZmZmODggODElLCAjZmZmZjg4IDgyJSwgI2ZmZmY4OCA4MiUsICNmZmZmYzYgMTAwJSk7XFxuICAvKiBPcGVyYSAxMS4xMCsgKi9cXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjZmZmZjg4IDgxJSwgI2ZmZmY4OCA4MiUsICNmZmZmODggODIlLCAjZmZmZmM2IDEwMCUpO1xcbiAgLyogSUUxMCsgKi9cXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmZmZmODggODElLCAjZmZmZjg4IDgyJSwgI2ZmZmY4OCA4MiUsICNmZmZmYzYgMTAwJSk7XFxuICAvKiBXM0MgKi9cXG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyNmZmZmODgnLCBlbmRDb2xvcnN0cj0nI2ZmZmZjNicsIEdyYWRpZW50VHlwZT0xKTtcXG4gIC8qIElFNi05IGZhbGxiYWNrIG9uIGhvcml6b250YWwgZ3JhZGllbnQgKi9cXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA2MHB4IDEwcHg7XFxufVxcblxcbi5ub3RlVGV4dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDRweCAxMnB4O2JveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggNHB4IDEycHg7XFxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IC4zcztcXG59XFxuXFxuLmRlbGV0ZU5vdGUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAtMjM4cHg7XFxuICByaWdodDogLTE5M3B4O1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgei1pbmRleDogMTA7XFxuICBjb2xvcjogcmdiKDE3OSwgMTc5LCAxNzkpO1xcbn1cXG5cXG4uZGVsZXRlTm90ZTpob3ZlciB7XFxuICBjb2xvcjogcmVkO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgLjNzO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLDRCQUE0QjtFQUM1Qjs7Z0JBRWM7RUFDZCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUNBQW1DO0VBQ25DLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMs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O0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixPQUFPO0FBQ1Q7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsUUFBUTtBQUNWO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLFNBQVM7QUFDWDs7QUFFQSxXQUFXLFlBQVk7RUFDckIsYUFBYTtFQUNiLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQiw2RkFBNkY7RUFDN0YsV0FBVztFQUNYLHFLQUFxSztFQUNySyxvQkFBb0I7RUFDcEIsZ0dBQWdHO0VBQ2hHLHlCQUF5QjtFQUN6QiwyRkFBMkY7RUFDM0YsaUJBQWlCO0VBQ2pCLDRGQUE0RjtFQUM1RixVQUFVO0VBQ1Ysd0ZBQXdGO0VBQ3hGLFFBQVE7RUFDUixrSEFBa0g7RUFDbEgsMENBQTBDO0VBQzFDLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QiwyQ0FBMkMsQ0FBQywyQ0FBMkM7RUFDdkYsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YscUJBQXFCO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tc2lkZWJhci1wYWRkaW5nOiAwIDM1cHg7XFxuICAtLW1haW4tYm9yZGVyLXJhZGl1czogMzVweDtcXG4gIC0tbWFpbi1jb2xvcjogcmdiKDEzNiwgMCwgMjU1KTtcXG4gIC0tc3ViLWNvbG9yOiByZ2IoMjQyLCAyMjYsIDI1NSk7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgcGFkZGluZzogNXB4IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuaHRtbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG59XFxuXFxuaHRtbCwgYm9keXtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNTBweCAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICBcXFwiaGVhZGVyIGhlYWRlclxcXCJcXG4gIFxcXCJzaWRlYmFyIGxpc3RcXFwiO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiAzNXB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc2VsZWN0YWJsZSB7XFxuICBwYWRkaW5nLXRvcDogNXB4ICFpbXBvcnRhbnQ7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5zZWxlY3RhYmxlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIzNSwgMjM1KTtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MHB4O1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDUwcHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3ViLWNvbG9yKTtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MHB4O1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDUwcHg7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlLWluO1xcbn1cXG5cXG4uY29sbGFwc2V7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmhpZGUge1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMsIG9wYWNpdHkgMC41cyBsaW5lYXI7XFxufVxcblxcbi5oaWRlOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5zdHJpa2Uge1xcbiAgLyogdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7ICovXFxuICBvcGFjaXR5OiAuMjtcXG59XFxuXFxuaSxcXG5idXR0b24sXFxuLnNlbGVjdGFibGUsXFxuLnRvZG9OYW1lLFxcbi5lZGl0VG9kbyxcXG4uZGVsVG9kbyxcXG4uc29ydERhdGUsXFxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gIHBhZGRpbmc6IDMwcHggMzBweCAzMHB4IDA7XFxuICBncmlkLWFyZWE6IHNpZGViYXI7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IHZhcigtLW1haW4tYm9yZGVyLXJhZGl1cyk7XFxufVxcblxcbi5zaWRlYmFyIGxpIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBwYWRkaW5nOiB2YXIoLS1zaWRlYmFyLXBhZGRpbmcpO1xcbn1cXG5cXG4jcHJvamVjdHNMaXN0e1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLnByb2plY3RzIHtcXG4gIHBhZGRpbmc6IHZhcigtLXNpZGViYXItcGFkZGluZyk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0c0J0biB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLnByb2plY3RJdGVtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIycHggMTMwcHggMzBweDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMjJweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXNpZGViYXItcGFkZGluZyk7XFxufVxcblxcbi5wcm9qZWN0TmFtZSB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA4cHggNXB4ICFpbXBvcnRhbnQ7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG5cXG4ucHJvamVjdExlbmd0aCB7XFxuICBmb250LXNpemU6IC44cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0NSwgMjQ1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLmRlbFByb2plY3QsXFxuLmRlbFRvZG8sXFxuLmVkaXRUb2RvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBjb2xvcjogcmdiKDAsIDAsIDAsIC4yKTtcXG59XFxuXFxuLmRlbFByb2plY3Q6aG92ZXIsXFxuLmRlbFRvZG86aG92ZXIge1xcbiAgY29sb3I6IHJlZDtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuNXMgZWFzZTtcXG59XFxuXFxuLmVkaXRUb2RvOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjVzIGVhc2U7XFxufVxcblxcbiNub3RlcyB7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG5cXG4ubGlzdCB7XFxuICBwYWRkaW5nOiAwIDIwcHg7XFxuICBncmlkLWFyZWE6IGxpc3Q7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IHZhcigtLW1haW4tYm9yZGVyLXJhZGl1cyk7XFxufVxcblxcbi50b3BSb3csXFxuLmxpc3RWaWV3IHtcXG4gIHdpZHRoOiBtYXgoNTAwcHgsIDEwMCUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi50b3BSb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IHZhcigtLW1haW4tYm9yZGVyLXJhZGl1cyk7XFxufVxcblxcbi5saXN0VGl0bGUge1xcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxufVxcblxcbi5saXN0QnRuIHtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbn1cXG5cXG4uZHVlRGF0ZSB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogOTVweDtcXG59XFxuXFxuXFxuLnRvZG8ge1xcbiAgbWFyZ2luOiA1cHggMDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE1cHggMWZyIDExMHB4IDI1cHggMzBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBwYWRkaW5nOiAwIDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG4udG9kbzpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWItY29sb3IpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1vdXQ7XFxufVxcblxcbi8qIC50b2RvOm50aC1jaGlsZChldmVuKXtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTAsIDI1MCwgMjUwKTtcXG59ICovXFxuXFxuLnRvZG9OYW1lIHtcXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcXG59XFxuXFxuLnRvZG9EZXNjIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gc3BhbiA0O1xcbiAgZm9udC1zaXplOiAuOHJlbTtcXG4gIHBhZGRpbmc6IDEwcHggMjBweCAyMHB4IDIwcHg7XFxufVxcblxcbi50b2RvRGF0ZSB7XFxuICBmb250LXNpemU6IC44cmVtO1xcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbn1cXG5cXG4uc29ydERhdGUge1xcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbn1cXG5cXG5cXG4uZWRpdHMge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIHotaW5kZXg6IDEwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4MCwgMTgwLCAxODAsIDAuMzk3KTtcXG59XFxuXFxuLmVkaXRJbnB1dHMge1xcbiAgei1pbmRleDogMjA7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGhlaWdodDogMjUwcHg7XFxuICB3aWR0aDogNTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG4uZWRpdElucHV0cyBidXR0b24ge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgd2lkdGg6IDgwcHg7XFxufVxcblxcbiNlZGl0TmFtZSxcXG4jZWRpdERlc2Mge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZm9udC1zaXplOiAuOHJlbTtcXG59XFxuXFxuI2VkaXROYW1lIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jZWRpdERlc2Mge1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNlZGl0QWNjZXB0IHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4ubmV3SW5wdXRzIHtcXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHdpZHRoOiBtaW4oNTAwcHgsIDEwMCUpO1xcbn1cXG5cXG4ubmV3TmFtZSxcXG4ubmV3RGVzYyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4ubmV3TmFtZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5uZXdEZXNjIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLm5ld0RhdGUge1xcbiAgcGFkZGluZzogM3B4O1xcbiAgZm9udC1zaXplOiAuOXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubmV3SW5wdXRCb3R0b20ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb25maXJtTmV3LFxcbi5jYW5jZWxOZXcge1xcbiAgZm9udC1zaXplOiAuOXJlbTtcXG59XFxuXFxuLmNvbmZpcm1OZXcge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcblxcbi8qIFJlbW92ZSBkZWZhdWx0IGNoZWNrYm94IHN0eWxlcyAqL1xcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgLyogQWRkIGlmIG5vdCB1c2luZyBhdXRvcHJlZml4ZXIgKi9cXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAvKiBGb3IgaU9TIDwgMTUgdG8gcmVtb3ZlIGdyYWRpZW50IGJhY2tncm91bmQgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAvKiBOb3QgcmVtb3ZlZCB2aWEgYXBwZWFyYW5jZSAqL1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIGNvbG9yOiBncmV5O1xcbiAgd2lkdGg6IC45cmVtO1xcbiAgaGVpZ2h0OiAuOXJlbTtcXG4gIGJvcmRlcjogMC4xcmVtIHNvbGlkIGdyZXk7XFxuICBib3JkZXItcmFkaXVzOiAwLjE1ZW07XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMDc1ZW0pO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgd2lkdGg6IDAuNjVyZW07XFxuICBoZWlnaHQ6IDAuNjVyZW07XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgdHJhbnNpdGlvbjogMTIwbXMgdHJhbnNmb3JtIGVhc2UtaW4tb3V0O1xcbiAgLyogQ2hlY2tlZCBjb2xvciAqL1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMWVtIDFlbSByZ2IoMjI4LCAyMjgsIDIyOCk7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZDo6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbi5uZXdOb3RlIHtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbn1cXG5cXG5tYWluW2RhdGEtbGlzdD0nTm90ZXNTZWN0aW9uJ10gLmxpc3RWaWV3IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5ub3RlSXRlbSB7XFxuICB3aWR0aDogMjIwcHg7XFxuICBoZWlnaHQ6IDI0MHB4O1xcbn1cXG5cXG4ubm90ZUl0ZW06bnRoLWNoaWxkKGV2ZW4pIHtcXG4gIHRyYW5zZm9ybTpyb3RhdGUoNGRlZyk7XFxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG4gIHRvcDo1cHg7XFxufVxcbi5ub3RlSXRlbTpudGgtY2hpbGQoM24pIHtcXG4gIHRyYW5zZm9ybTpyb3RhdGUoLTNkZWcpO1xcbiAgcG9zaXRpb246cmVsYXRpdmU7XFxuICB0b3A6LTVweDtcXG59XFxuLm5vdGVJdGVtOm50aC1jaGlsZCg1bikge1xcbiAgdHJhbnNmb3JtOnJvdGF0ZSg1ZGVnKTtcXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xcbiAgdG9wOi0xMHB4O1xcbn1cXG5cXG4ubm90ZVRleHQge2JvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNFOEU4RTg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZjg4O1xcbiAgLyogT2xkIGJyb3dzZXJzICovXFxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNmZmZmODggODElLCAjZmZmZjg4IDgyJSwgI2ZmZmY4OCA4MiUsICNmZmZmYzYgMTAwJSk7XFxuICAvKiBGRjMuNisgKi9cXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgYm90dG9tLCBjb2xvci1zdG9wKDgxJSwgI2ZmZmY4OCksIGNvbG9yLXN0b3AoODIlLCAjZmZmZjg4KSwgY29sb3Itc3RvcCg4MiUsICNmZmZmODgpLCBjb2xvci1zdG9wKDEwMCUsICNmZmZmYzYpKTtcXG4gIC8qIENocm9tZSxTYWZhcmk0KyAqL1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjZmZmZjg4IDgxJSwgI2ZmZmY4OCA4MiUsICNmZmZmODggODIlLCAjZmZmZmM2IDEwMCUpO1xcbiAgLyogQ2hyb21lMTArLFNhZmFyaTUuMSsgKi9cXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNmZmZmODggODElLCAjZmZmZjg4IDgyJSwgI2ZmZmY4OCA4MiUsICNmZmZmYzYgMTAwJSk7XFxuICAvKiBPcGVyYSAxMS4xMCsgKi9cXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjZmZmZjg4IDgxJSwgI2ZmZmY4OCA4MiUsICNmZmZmODggODIlLCAjZmZmZmM2IDEwMCUpO1xcbiAgLyogSUUxMCsgKi9cXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmZmZmODggODElLCAjZmZmZjg4IDgyJSwgI2ZmZmY4OCA4MiUsICNmZmZmYzYgMTAwJSk7XFxuICAvKiBXM0MgKi9cXG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyNmZmZmODgnLCBlbmRDb2xvcnN0cj0nI2ZmZmZjNicsIEdyYWRpZW50VHlwZT0xKTtcXG4gIC8qIElFNi05IGZhbGxiYWNrIG9uIGhvcml6b250YWwgZ3JhZGllbnQgKi9cXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA2MHB4IDEwcHg7XFxufVxcblxcbi5ub3RlVGV4dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDRweCAxMnB4O2JveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggNHB4IDEycHg7XFxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IC4zcztcXG59XFxuXFxuLmRlbGV0ZU5vdGUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAtMjM4cHg7XFxuICByaWdodDogLTE5M3B4O1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgei1pbmRleDogMTA7XFxuICBjb2xvcjogcmdiKDE3OSwgMTc5LCAxNzkpO1xcbn1cXG5cXG4uZGVsZXRlTm90ZTpob3ZlciB7XFxuICBjb2xvcjogcmVkO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgLjNzO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNyZWF0ZU5ld0lucHV0IH0gZnJvbSAnLi9jcmVhdGVOZXdJbnB1dERPTSc7XG5pbXBvcnQgeyByZW5kZXJJbmJveCwgcmVuZGVyVG9kYXksIHJlbmRlcldlZWtseSwgcmVuZGVyTm90ZXMgfSBmcm9tICcuL3JlbmRlckl0ZW1zJztcbmltcG9ydCB7IHNvcnREYXRlLCBjb2xvclNlbGVjdGVkIH0gZnJvbSAnLi4vaW5kZXgnO1xuXG5cbmV4cG9ydCBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuZXhwb3J0IGNvbnN0IHNpZGViYXIgPSBtYWluLnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XG5jb25zdCBpbmJveCA9IHNpZGViYXIucXVlcnlTZWxlY3RvcignI2luYm94Jyk7XG5jb25zdCB0b2RheSA9IHNpZGViYXIucXVlcnlTZWxlY3RvcignI3RvZGF5Jyk7XG5jb25zdCB3ZWVrbHkgPSBzaWRlYmFyLnF1ZXJ5U2VsZWN0b3IoJyN3ZWVrJyk7XG5jb25zdCBub3RlcyA9IHNpZGViYXIucXVlcnlTZWxlY3RvcignI25vdGVzJyk7XG5jb25zdCBzZWxlY3RhYmxlID0gc2lkZWJhci5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0YWJsZScpO1xuXG5leHBvcnQgY29uc3QgcHJvamVjdHNWaWV3ID0gbWFpbi5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHNWaWV3Jyk7XG5jb25zdCBwcm9qZWN0c0J0biA9IG1haW4ucXVlcnlTZWxlY3RvcignLnByb2plY3RzQnRuJyk7XG5jb25zdCBsaXN0ID0gbWFpbi5xdWVyeVNlbGVjdG9yKCcubGlzdCcpO1xuZXhwb3J0IGNvbnN0IGxpc3RWaWV3ID0gbGlzdC5xdWVyeVNlbGVjdG9yKCcubGlzdFZpZXcnKTtcbmV4cG9ydCBjb25zdCBsaXN0QnRuID0gbGlzdC5xdWVyeVNlbGVjdG9yKCcubGlzdEJ0bicpO1xuZXhwb3J0IGNvbnN0IGRhdGVMYWJlbCA9IGxpc3QucXVlcnlTZWxlY3RvcignLmR1ZURhdGUnKTtcbmV4cG9ydCBjb25zdCBzb3J0RGF0ZUJ0biA9IGxpc3QucXVlcnlTZWxlY3RvcignLnNvcnREYXRlJyk7XG5cbmV4cG9ydCBsZXQgbGlzdFRpdGxlID0gbGlzdC5xdWVyeVNlbGVjdG9yKCcubGlzdFRpdGxlJyk7XG5wcm9qZWN0c0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZU5ld0lucHV0KHByb2plY3RzVmlldywgJ3Byb2plY3QnKSk7XG5saXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlTmV3SW5wdXQobGlzdFZpZXcsICd0b2RvJykpO1xuaW5ib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXJJbmJveCk7XG50b2RheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlclRvZGF5KTtcbndlZWtseS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlcldlZWtseSk7XG5ub3Rlcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlck5vdGVzKTtcbnNvcnREYXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc29ydERhdGUpO1xuc2VsZWN0YWJsZS5mb3JFYWNoKGVsID0+IHtcbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb2xvclNlbGVjdGVkKTtcbn0pO1xuIiwiZXhwb3J0IGNsYXNzIExpc3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuICBsaXN0ID0gW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxUb2RvKHByb2plY3QsIHRvZG8pIHtcbiAgcHJvamVjdC5saXN0LnNwbGljZShwcm9qZWN0Lmxpc3QuaW5kZXhPZih0b2RvKSwgMSlcbn0iLCJleHBvcnQgY2xhc3MgTm90ZSB7XG4gIGNvbnN0cnVjdG9yKHRleHQgPSAnJykge1xuICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldE5vdGVUZXh0KG5vdGUsIHRleHQpIHtcbiAgbm90ZS50ZXh0ID0gdGV4dFxufSIsImV4cG9ydCBjbGFzcyBUb0RvIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZHVlRGF0ZSwgZGVzYyA9ICdObyBkZXNjcmlwdGlvbicpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5kZXNjID0gZGVzYztcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRUb0RvTmFtZSh0b2RvLCBuYW1lKSB7XG4gIHRvZG8ubmFtZSA9IG5hbWVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFRvRG9EYXRlKHRvZG8sIGRhdGUpIHtcbiAgdG9kby5kdWVEYXRlID0gZGF0ZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0VG9Eb0Rlc2ModG9kbywgZGVzYykge1xuICB0b2RvLmRlc2MgPSBkZXNjXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVUb0RvQ29tcGxldGVkKHRvZG8pIHtcbiAgdG9kby5jb21wbGV0ZWQgPSAhdG9kby5jb21wbGV0ZWRcbn0iLCJpbXBvcnQgeyByZW1vdmVBbGxDaGlsZE5vZGVzLCBjdXJyZW50UHJvamVjdCwgc2V0TG9jYWxTdG9yYWdlIH0gZnJvbSAnLi4vaW5kZXgnO1xuaW1wb3J0IHsgbWFpbiwgbGlzdFZpZXcgfSBmcm9tIFwiLi9ET01lbGVtZW50c1wiO1xuaW1wb3J0IHsgcmVuZGVySW5ib3gsIHJlbmRlclRvRG9zIH0gZnJvbSBcIi4vcmVuZGVySXRlbXNcIjtcbmltcG9ydCB7IHNldFRvRG9OYW1lLCBzZXRUb0RvRGF0ZSwgc2V0VG9Eb0Rlc2MgfSBmcm9tICcuL1RvRG8nO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFZGl0SW5wdXQoZWwpIHtcbiAgY29uc3QgZWRpdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGxhYmVsTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGNvbnN0IGxhYmVsRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGNvbnN0IGxhYmVsRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGNvbnN0IG5ld05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjb25zdCBuZXdEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY29uc3QgbmV3RGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gIGNvbnN0IGFjY2VwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICBlZGl0cy5jbGFzc0xpc3QuYWRkKCdlZGl0cycpO1xuICBkaXYuY2xhc3NMaXN0LmFkZCgnZWRpdElucHV0cycpO1xuXG4gIGxhYmVsTmFtZS50ZXh0Q29udGVudCA9ICdOYW1lOic7XG4gIGxhYmVsRGF0ZS50ZXh0Q29udGVudCA9ICdEdWU6JztcbiAgbGFiZWxEZXNjLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uOic7XG4gIGFjY2VwdC50ZXh0Q29udGVudCA9ICdDb25maXJtJztcbiAgY2FuY2VsLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gIGxhYmVsTmFtZS5odG1sRm9yID0gJ2VkaXROYW1lJztcbiAgbGFiZWxEYXRlLmh0bWxGb3IgPSAnZWRpdERhdGUnO1xuICBsYWJlbERlc2MuaHRtbEZvciA9ICdlZGl0RGVzYyc7XG4gIG5ld05hbWUuaWQgPSAnZWRpdE5hbWUnO1xuICBuZXdEYXRlLmlkID0gJ2VkaXREYXRlJztcbiAgbmV3RGVzYy5pZCA9ICdlZGl0RGVzYyc7XG4gIGFjY2VwdC5pZCA9ICdlZGl0QWNjZXB0JztcbiAgY2FuY2VsLmlkID0gJ2VkaXRDYW5jZWwnO1xuICBuZXdOYW1lLnR5cGUgPSAndGV4dCc7XG4gIG5ld0RhdGUudHlwZSA9ICdkYXRlJztcblxuICBuZXdOYW1lLnZhbHVlID0gZWwubmFtZTtcbiAgbmV3RGF0ZS52YWx1ZSA9IGVsLmR1ZURhdGU7XG4gIG5ld0Rlc2MudmFsdWUgPSBlbC5kZXNjO1xuXG4gIGRpdi5hcHBlbmQobGFiZWxOYW1lLCBuZXdOYW1lLCBsYWJlbERlc2MsIG5ld0Rlc2MsIGxhYmVsRGF0ZSwgbmV3RGF0ZSwgYWNjZXB0LCBjYW5jZWwpO1xuICBlZGl0cy5hcHBlbmQoZGl2KTtcbiAgbWFpbi5hcHBlbmQoZWRpdHMpO1xuXG4gIGFjY2VwdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHVwZGF0ZVRvZG8oZWwpKTtcbiAgY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FuY2VsRWRpdCk7XG5cbiAgZnVuY3Rpb24gY2FuY2VsRWRpdCgpIHtcbiAgICBlZGl0cy5yZW1vdmUoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVRvZG8oZWwpIHtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgbmFtZSA9IG5ld05hbWUudmFsdWU7XG4gICAgICBjb25zdCBkdWUgPSBuZXdEYXRlLnZhbHVlO1xuICAgICAgY29uc3QgZGVzYyA9IG5ld0Rlc2MudmFsdWU7XG4gICAgICBzZXRUb0RvTmFtZShlbCwgbmFtZSk7XG4gICAgICBzZXRUb0RvRGF0ZShlbCwgZHVlKTtcbiAgICAgIHNldFRvRG9EZXNjKGVsLCBkZXNjKTtcbiAgICAgIFxuICAgICAgcmVtb3ZlQWxsQ2hpbGROb2RlcyhlZGl0cyk7XG4gICAgICByZW1vdmVBbGxDaGlsZE5vZGVzKGxpc3RWaWV3KTtcbiAgICAgIGlmIChtYWluLmRhdGFzZXQubGlzdCA9PT0gJ2FsbEluYm94Jykge1xuICAgICAgICByZW5kZXJJbmJveCgpO1xuICAgICAgfSBlbHNlIHsgcmVuZGVyVG9Eb3MoY3VycmVudFByb2plY3QpOyB9O1xuICAgICAgZWRpdHMucmVtb3ZlKCk7XG4gICAgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgcmVtb3ZlQWxsQ2hpbGROb2RlcywgY3VycmVudFByb2plY3QgfSBmcm9tICcuLi9pbmRleCc7XG5pbXBvcnQgeyBwcm9qZWN0c1ZpZXcsIGxpc3RWaWV3IH0gZnJvbSBcIi4vRE9NZWxlbWVudHNcIjtcbmltcG9ydCB7IHJlbmRlclByb2plY3RzLCByZW5kZXJUb0RvcyB9IGZyb20gXCIuL3JlbmRlckl0ZW1zXCI7XG5pbXBvcnQgeyBjcmVhdGVOZXdJdGVtIH0gZnJvbSAnLi9jcmVhdGVOZXdJdGVtJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5ld0lucHV0KHZpZXcsIHR5cGUpIHtcbiAgcmV0dXJuICgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBuZXdOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBuZXdEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBuZXdEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBjb25zdCBjb25maXJtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgY2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgYm90dG9tUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnbmV3SW5wdXRzJyk7XG4gICAgbmV3TmFtZS5jbGFzc0xpc3QuYWRkKCduZXdOYW1lJyk7XG4gICAgbmV3RGF0ZS5jbGFzc0xpc3QuYWRkKCduZXdEYXRlJyk7XG4gICAgbmV3RGVzYy5jbGFzc0xpc3QuYWRkKCduZXdEZXNjJyk7XG4gICAgY29uZmlybS5jbGFzc0xpc3QuYWRkKCdjb25maXJtTmV3Jyk7XG4gICAgY2FuY2VsLmNsYXNzTGlzdC5hZGQoJ2NhbmNlbE5ldycpO1xuICAgIGJvdHRvbVJvdy5jbGFzc0xpc3QuYWRkKCduZXdJbnB1dEJvdHRvbScpO1xuXG4gICAgbmV3TmFtZS5wbGFjZWhvbGRlciA9IGBhZGQgYSAke3R5cGV9Li4uYDtcbiAgICBuZXdEZXNjLnBsYWNlaG9sZGVyID0gJ2FkZCBhIGJyZWlmIGRlc2NyaXB0aW9uJztcblxuICAgIG5ld05hbWUudHlwZSA9ICd0ZXh0JztcbiAgICBuZXdEYXRlLnR5cGUgPSAnZGF0ZSc7XG5cbiAgICBjb25maXJtLnRleHRDb250ZW50ID0gJ0NvbmZpcm0nO1xuICAgIGNhbmNlbC50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuXG4gICAgcmVtb3ZlQWxsQ2hpbGROb2Rlcyh2aWV3KTtcbiAgICBkaXYuYXBwZW5kKG5ld05hbWUpO1xuXG5cbiAgICBpZiAodHlwZSA9PT0gJ3Byb2plY3QnKSB7XG4gICAgICBkaXYuYXBwZW5kKGNvbmZpcm0sIGNhbmNlbCk7XG4gICAgICByZW5kZXJQcm9qZWN0cygpO1xuICAgICAgbmV3TmFtZS5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGNyZWF0ZU5ld0l0ZW0oXG4gICAgICAgIG5ld05hbWUsIHByb2plY3RzVmlldywgdHlwZSkpO1xuICAgICAgY29uZmlybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZU5ld0l0ZW0oXG4gICAgICAgIG5ld05hbWUsIHByb2plY3RzVmlldywgdHlwZSkpO1xuICAgIH07XG5cbiAgICBpZiAodHlwZSA9PT0gJ3RvZG8nKSB7XG4gICAgICBib3R0b21Sb3cuYXBwZW5kKG5ld0RhdGUsIGNvbmZpcm0sIGNhbmNlbCk7XG4gICAgICBkaXYuYXBwZW5kKG5ld0Rlc2MsIGJvdHRvbVJvdyk7XG4gICAgICByZW5kZXJUb0RvcyhjdXJyZW50UHJvamVjdCk7XG4gICAgICBuZXdOYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgY3JlYXRlTmV3SXRlbShcbiAgICAgICAgbmV3TmFtZSwgbGlzdFZpZXcsIHR5cGUsIG5ld0RhdGUsIG5ld0Rlc2MpKTtcbiAgICAgIGNvbmZpcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVOZXdJdGVtKFxuICAgICAgICBuZXdOYW1lLCBsaXN0VmlldywgdHlwZSwgbmV3RGF0ZSwgbmV3RGVzYykpO1xuICAgIH07XG5cbiAgICBjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBkaXYucmVtb3ZlKCkpO1xuICAgIHZpZXcuYXBwZW5kKGRpdik7XG4gICAgbmV3TmFtZS5zZWxlY3QoKTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IExpc3QgfSBmcm9tICcuL0xpc3QnO1xuaW1wb3J0IHsgVG9EbyB9IGZyb20gJy4vVG9Ebyc7XG5pbXBvcnQgeyByZW1vdmVBbGxDaGlsZE5vZGVzLCBjdXJyZW50UHJvamVjdCwgcHJvamVjdHMgfSBmcm9tICcuLi9pbmRleCc7XG5pbXBvcnQgeyBwcm9qZWN0c1ZpZXcgfSBmcm9tIFwiLi9ET01lbGVtZW50c1wiO1xuaW1wb3J0IHsgcmVuZGVyUHJvamVjdHMsIHJlbmRlclRvRG9zIH0gZnJvbSBcIi4vcmVuZGVySXRlbXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5ld0l0ZW0obmV3TmFtZSwgdmlldywgdHlwZSwgbmV3RGF0ZSwgbmV3RGVzYykge1xuICByZXR1cm4gKGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicgfHwgZS50YXJnZXQuY2xhc3NMaXN0ID09ICdjb25maXJtTmV3Jykge1xuICAgICAgY29uc3QgbmFtZSA9IG5ld05hbWUudmFsdWU7XG4gICAgICByZW1vdmVBbGxDaGlsZE5vZGVzKHZpZXcpO1xuXG4gICAgICBpZiAodHlwZSA9PT0gJ3Byb2plY3QnKSB7XG4gICAgICAgIGNyZWF0ZU5ld1Byb2plY3QobmFtZSk7XG4gICAgICAgIHJlbmRlclByb2plY3RzKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlID09PSAndG9kbycpIHtcbiAgICAgICAgY3JlYXRlTmV3VG9kbyhuYW1lLCBuZXdEYXRlLCBuZXdEZXNjKTtcbiAgICAgICAgcmVuZGVyVG9Eb3MoY3VycmVudFByb2plY3QpO1xuICAgICAgICByZW1vdmVBbGxDaGlsZE5vZGVzKHByb2plY3RzVmlldyk7XG4gICAgICAgIHJlbmRlclByb2plY3RzKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuZnVuY3Rpb24gY3JlYXRlTmV3VG9kbyhuYW1lLCBuZXdEYXRlLCBuZXdEZXNjKSB7XG4gIGNvbnN0IHRvZG8gPSBuZXcgVG9EbyhuYW1lLCBuZXdEYXRlLnZhbHVlLCBuZXdEZXNjLnZhbHVlKTtcbiAgY3VycmVudFByb2plY3QubGlzdC5wdXNoKHRvZG8pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdChuYW1lKSB7XG4gIGNvbnN0IGxpc3QgPSBuZXcgTGlzdChuYW1lKTtcbiAgcHJvamVjdHMucHVzaChsaXN0KTtcbiAgcmV0dXJuIGxpc3Q7XG59XG4iLCJpbXBvcnQgeyBub3Rlc0Fyciwgc2V0TG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4uXCI7XG5pbXBvcnQgeyBjcmVhdGVOZXdOb3RlRE9NIH0gZnJvbSBcIi4vY3JlYXRlTmV3Tm90ZURPTVwiO1xuaW1wb3J0IHsgTm90ZSB9IGZyb20gXCIuL05vdGVcIjtcblxuZXhwb3J0IGNvbnN0IGFkZE5vdGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmFkZE5vdGVCdG4udGV4dENvbnRlbnQgPSAnQWRkJztcbmFkZE5vdGVCdG4uY2xhc3NMaXN0LmFkZCgnbmV3Tm90ZScpXG5cbmFkZE5vdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVOZXdOb3RlKCkpXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOZXdOb3RlKHRleHQpIHtcbiAgcmV0dXJuICgpID0+IHtcbiAgICBjb25zdCBub3RlID0gbmV3IE5vdGUodGV4dClcbiAgICBjcmVhdGVOZXdOb3RlRE9NKG5vdGUpO1xuICAgIG5vdGVzQXJyLnB1c2gobm90ZSlcbiAgICBzZXRMb2NhbFN0b3JhZ2UoJ25vdGVzJywgbm90ZXNBcnIpXG4gICAgcmV0dXJuIG5vdGU7XG4gIH1cbn0iLCJpbXBvcnQgeyBub3Rlc0Fyciwgc2V0TG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4uXCI7XG5pbXBvcnQgeyBsaXN0VmlldyB9IGZyb20gXCIuL0RPTWVsZW1lbnRzXCI7XG5pbXBvcnQgeyByZW5kZXJOb3RlcyB9IGZyb20gXCIuL3JlbmRlckl0ZW1zXCI7XG5pbXBvcnQgeyBzZXROb3RlVGV4dCB9IGZyb20gXCIuL05vdGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5ld05vdGVET00oaXRlbSkge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgdGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICBjb25zdCBkZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBkaXYuY2xhc3NMaXN0LmFkZCgnbm90ZUl0ZW0nKTtcbiAgdGV4dEFyZWEuY2xhc3NMaXN0LmFkZCgnbm90ZVRleHQnKTtcbiAgZGVsLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZU5vdGUnKTtcblxuICB0ZXh0QXJlYS5wbGFjZWhvbGRlciA9ICdhZGQgYnJpZWYgbm90ZS4uLidcbiAgZGVsLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWRlbGV0ZS1sZWZ0XCI+PC9pPic7XG4gIHRleHRBcmVhLnZhbHVlID0gaXRlbS50ZXh0O1xuXG4gIGRpdi5hcHBlbmQodGV4dEFyZWEsIGRlbCk7XG4gIGxpc3RWaWV3LmFwcGVuZChkaXYpO1xuXG4gIGRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZU5vdGUpO1xuICB0ZXh0QXJlYS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB1cGRhdGVOb3RlKVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZU5vdGUoKSB7XG4gICAgc2V0Tm90ZVRleHQoaXRlbSwgdGhpcy52YWx1ZSlcbiAgICBzZXRMb2NhbFN0b3JhZ2UoJ25vdGVzJywgbm90ZXNBcnIpXG4gIH1cblxuICBmdW5jdGlvbiBkZWxldGVOb3RlKCkge1xuICAgIG5vdGVzQXJyLnNwbGljZShub3Rlc0Fyci5pbmRleE9mKGl0ZW0pLCAxKTtcbiAgICBzZXRMb2NhbFN0b3JhZ2UoJ25vdGVzJywgbm90ZXNBcnIpXG4gICAgcmVuZGVyTm90ZXMoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY29sb3JTZWxlY3RlZCwgcHJvamVjdHMsIHJlbW92ZUFsbENoaWxkTm9kZXMsIHVwZGF0ZUN1cnJlbnRQcm9qZWN0LCB1cGRhdGVQcm9qZWN0c30gZnJvbSAnLi4vaW5kZXgnO1xuaW1wb3J0IHsgcHJvamVjdHNWaWV3LCBtYWluLCBsaXN0VGl0bGUsIGxpc3RCdG4sIGRhdGVMYWJlbCwgc29ydERhdGVCdG4sIGxpc3RWaWV3IH0gZnJvbSBcIi4vRE9NZWxlbWVudHNcIjtcbmltcG9ydCB7IHJlbmRlclByb2plY3RzLCByZW5kZXJJbmJveCwgcmVuZGVyVG9Eb3MgfSBmcm9tIFwiLi9yZW5kZXJJdGVtc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdERPTShpdGVtLCBpbmRleCkge1xuICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IGRlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGRlbC5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1kZWxldGUtbGVmdFwiPjwvaT4nO1xuICBzcGFuLnRleHRDb250ZW50ID0gaXRlbS5saXN0Lmxlbmd0aDtcbiAgcC50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcblxuICBwLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3ROYW1lJyk7XG4gIGRlbC5jbGFzc0xpc3QuYWRkKCdkZWxQcm9qZWN0Jyk7XG4gIHNwYW4uY2xhc3NMaXN0LmFkZCgncHJvamVjdExlbmd0aCcpO1xuICBsaS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0SXRlbScpO1xuICBsaS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RhYmxlJyk7XG4gIGRlbC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG5cbiAgbGkuYXBwZW5kKHNwYW4sIHAsIGRlbCk7XG5cbiAgcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlclNlbGVjdGVkKTtcbiAgc3Bhbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlclNlbGVjdGVkKTtcbiAgZGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlUHJvamVjdChpdGVtKSk7XG4gIGxpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29sb3JTZWxlY3RlZCk7XG4gIGxpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7IGRlbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7IH0pO1xuICBsaS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4geyBkZWwuY2xhc3NMaXN0LmFkZCgnaGlkZScpOyB9KTtcbiAgcmV0dXJuIGxpO1xuXG4gIGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoaXRlbSkge1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBmaWx0ZXJlZCA9IHByb2plY3RzLmZpbHRlcihrZXkgPT4ga2V5ICE9IGl0ZW0pO1xuICAgICAgdXBkYXRlUHJvamVjdHMoZmlsdGVyZWQpXG4gICAgICByZW1vdmVBbGxDaGlsZE5vZGVzKHByb2plY3RzVmlldyk7XG4gICAgICByZW5kZXJQcm9qZWN0cygpO1xuICAgICAgcmVuZGVySW5ib3goKTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyU2VsZWN0ZWQoKSB7XG4gICAgbWFpbi5kYXRhc2V0Lmxpc3QgPSBpdGVtLm5hbWU7XG4gICAgdXBkYXRlQ3VycmVudFByb2plY3QoaXRlbSlcbiAgICBsaXN0VGl0bGUudGV4dENvbnRlbnQgPSBpdGVtLm5hbWU7XG4gICAgbGlzdFRpdGxlLmFmdGVyKGxpc3RCdG4pO1xuICAgIGRhdGVMYWJlbC5hcHBlbmQoc29ydERhdGVCdG4pO1xuICAgIHJlbW92ZUFsbENoaWxkTm9kZXMobGlzdFZpZXcpO1xuICAgIHJlbmRlclRvRG9zKHByb2plY3RzW2luZGV4XSk7XG4gIH07XG59XG4iLCJpbXBvcnQgeyBjaGFuZ2VEYXRlRm9ybWF0LCByZW1vdmVBbGxDaGlsZE5vZGVzLCBzZXRMb2NhbFN0b3JhZ2UsIHByb2plY3RzIH0gZnJvbSAnLi4vaW5kZXgnO1xuaW1wb3J0IHsgbGlzdFZpZXcsIHByb2plY3RzVmlldywgbWFpbiB9IGZyb20gXCIuL0RPTWVsZW1lbnRzXCI7XG5pbXBvcnQgeyByZW5kZXJQcm9qZWN0cywgcmVuZGVySW5ib3gsIHJlbmRlclRvRG9zIH0gZnJvbSBcIi4vcmVuZGVySXRlbXNcIjtcbmltcG9ydCB7IGNyZWF0ZUVkaXRJbnB1dCB9IGZyb20gXCIuL2NyZWF0ZUVkaXRJbnB1dERPTVwiO1xuaW1wb3J0IHsgZGVsVG9kbyB9IGZyb20gJy4vTGlzdCc7XG5pbXBvcnQgeyB0b2dnbGVUb0RvQ29tcGxldGVkIH0gZnJvbSAnLi9Ub0RvJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5ld1RvRG9ET00oZWwsIHByb2plY3RBcnJheSkge1xuICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgZGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGNoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGNoZWNrLnR5cGUgPSAnY2hlY2tib3gnO1xuICBlZGl0LmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXJlZ3VsYXIgZmEtcGVuLXRvLXNxdWFyZVwiPjwvaT4nO1xuICBkZWwuaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEtc29saWQgZmEtZGVsZXRlLWxlZnRcIj48L2k+JztcbiAgcC50ZXh0Q29udGVudCA9IGVsLm5hbWU7XG4gIHNwYW4udGV4dENvbnRlbnQgPSBjaGFuZ2VEYXRlRm9ybWF0KGVsLmR1ZURhdGUpO1xuICBkZXNjLnRleHRDb250ZW50ID0gZWwuZGVzYztcblxuICBjaGVjay5jbGFzc0xpc3QuYWRkKCdjaGVja0NvbXBsZXRlJyk7XG4gIGxpLmNsYXNzTGlzdC5hZGQoJ3RvZG8nKTtcbiAgcC5jbGFzc0xpc3QuYWRkKCd0b2RvTmFtZScpO1xuICBzcGFuLmNsYXNzTGlzdC5hZGQoJ3RvZG9EYXRlJyk7XG4gIGRlc2MuY2xhc3NMaXN0LmFkZCgndG9kb0Rlc2MnKTtcbiAgZGVzYy5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZScpO1xuICBlZGl0LmNsYXNzTGlzdC5hZGQoJ2VkaXRUb2RvJyk7XG4gIGVkaXQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICBkZWwuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICBkZWwuY2xhc3NMaXN0LmFkZCgnZGVsVG9kbycpO1xuXG4gIGxpLmFwcGVuZChjaGVjaywgcCwgc3BhbiwgZWRpdCwgZGVsLCBkZXNjKTtcblxuICBpZiAoZWwuY29tcGxldGVkKSB7XG4gICAgY2hlY2suY2hlY2tlZCA9IHRydWU7XG4gICAgcC5jbGFzc0xpc3QuYWRkKCdzdHJpa2UnKTtcbiAgICBzcGFuLmNsYXNzTGlzdC5hZGQoJ3N0cmlrZScpO1xuICAgIGVkaXQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIGRlbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gIH1cbiAgZWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVkaXRUb2RvKGVsKSk7XG4gIGRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZVRvZG8ocHJvamVjdEFycmF5KSk7XG4gIGxpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCB1bmhpZGVPcHRpb25zKGRlbCwgZWRpdCkpO1xuICBsaS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgaGlkZU9wdGlvbnMoZWwsIGRlbCwgZWRpdCkpO1xuICBjaGVjay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZUNvbXBsZXRlZChlbCkpO1xuICBwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlRGVzYyk7XG4gIHJldHVybiBsaTtcblxuICBmdW5jdGlvbiB0b2dnbGVEZXNjKCkge1xuICAgIGRlc2MuY2xhc3NMaXN0LnRvZ2dsZSgnY29sbGFwc2UnKTtcbiAgICBsaS5jbGFzc0xpc3QudG9nZ2xlKCdzZWxlY3RlZCcpO1xuICB9XG5cbiAgZnVuY3Rpb24gZWRpdFRvZG8oZWwpIHtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY3JlYXRlRWRpdElucHV0KGVsKTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gaGlkZU9wdGlvbnMoZWwsIGRlbCwgZWRpdCkge1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAoIWVsLmNvbXBsZXRlZCkge1xuICAgICAgICBkZWwuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICBlZGl0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gdW5oaWRlT3B0aW9ucyhkZWwsIGVkaXQpIHtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgIGVkaXQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBkZWxldGVUb2RvKHByb2plY3RBcnJheSkge1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkZWxUb2RvKHByb2plY3RBcnJheSwgZWwpO1xuICAgICAgcmVtb3ZlQWxsQ2hpbGROb2RlcyhsaXN0Vmlldyk7XG4gICAgICByZW1vdmVBbGxDaGlsZE5vZGVzKHByb2plY3RzVmlldyk7XG4gICAgICByZW5kZXJQcm9qZWN0cygpO1xuICAgICAgaWYgKG1haW4uZGF0YXNldC5saXN0ID09PSAnYWxsSW5ib3gnKSB7XG4gICAgICAgIHJlbmRlckluYm94KCk7XG4gICAgICB9IGVsc2UgeyByZW5kZXJUb0Rvcyhwcm9qZWN0QXJyYXkpOyB9XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZUNvbXBsZXRlZChlbCkge1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB0b2dnbGVUb0RvQ29tcGxldGVkKGVsKTtcbiAgICAgIHNldExvY2FsU3RvcmFnZSgncHJvamVjdHMnLCBwcm9qZWN0cyk7XG4gICAgICBpZiAoIWVsLmNvbXBsZXRlZCkge1xuICAgICAgICBwLmNsYXNzTGlzdC5yZW1vdmUoJ3N0cmlrZScpO1xuICAgICAgICBzcGFuLmNsYXNzTGlzdC5yZW1vdmUoJ3N0cmlrZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcC5jbGFzc0xpc3QuYWRkKCdzdHJpa2UnKTtcbiAgICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKCdzdHJpa2UnKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVOZXdQcm9qZWN0RE9NIH0gZnJvbSAnLi9jcmVhdGVOZXdQcm9qZWN0RE9NJztcbmltcG9ydCB7IGNyZWF0ZU5ld1RvRG9ET00gfSBmcm9tICcuL2NyZWF0ZU5ld1RvRG9ET00nO1xuaW1wb3J0IHsgYWRkTm90ZUJ0biB9IGZyb20gJy4vY3JlYXRlTmV3Tm90ZSc7XG5pbXBvcnQgeyByZW1vdmVBbGxDaGlsZE5vZGVzLCBwcm9qZWN0cywgdXBkYXRlQ3VycmVudFByb2plY3QsIHNldExvY2FsU3RvcmFnZSwgbm90ZXNBcnIgfSBmcm9tICcuLi9pbmRleCc7XG5pbXBvcnQgeyBsaXN0VGl0bGUsIGRhdGVMYWJlbCwgbGlzdEJ0biwgc29ydERhdGVCdG4sIG1haW4sIGxpc3RWaWV3LCBwcm9qZWN0c1ZpZXcgfSBmcm9tIFwiLi9ET01lbGVtZW50c1wiO1xuaW1wb3J0IHsgY3JlYXRlTmV3Tm90ZURPTSB9IGZyb20gJy4vY3JlYXRlTmV3Tm90ZURPTSc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckluYm94KCkge1xuICBsaXN0VGl0bGUuYWZ0ZXIoZGF0ZUxhYmVsKTtcbiAgbGlzdEJ0bi5yZW1vdmUoKTtcbiAgc29ydERhdGVCdG4ucmVtb3ZlKCk7XG4gIG1haW4uZGF0YXNldC5saXN0ID0gJ2FsbEluYm94JztcbiAgbGlzdFRpdGxlLnRleHRDb250ZW50ID0gJ0luYm94JztcbiAgcmVtb3ZlQWxsQ2hpbGROb2RlcyhsaXN0Vmlldyk7XG4gIHByb2plY3RzLmZvckVhY2goZWwgPT4ge1xuICAgIHJlbmRlclRvRG9zKGVsKTtcbiAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVG9kYXkoKSB7XG4gIGxpc3RUaXRsZS5hZnRlcihkYXRlTGFiZWwpO1xuICBsaXN0QnRuLnJlbW92ZSgpO1xuICBhZGROb3RlQnRuLnJlbW92ZSgpXG4gIHJlbW92ZUFsbENoaWxkTm9kZXMobGlzdFZpZXcpO1xuICBtYWluLmRhdGFzZXQubGlzdCA9ICdUb2RheVNlY3Rpb24nO1xuICBsaXN0VGl0bGUudGV4dENvbnRlbnQgPSAnVG9kYXknO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcldlZWtseSgpIHtcbiAgbGlzdFRpdGxlLmFmdGVyKGRhdGVMYWJlbCk7XG4gIGxpc3RCdG4ucmVtb3ZlKCk7XG4gIGFkZE5vdGVCdG4ucmVtb3ZlKClcbiAgcmVtb3ZlQWxsQ2hpbGROb2RlcyhsaXN0Vmlldyk7XG4gIG1haW4uZGF0YXNldC5saXN0ID0gJ1dlZWtseVNlY3Rpb24nO1xuICBsaXN0VGl0bGUudGV4dENvbnRlbnQgPSAnVGhpcyBXZWVrJztcbn1cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJOb3RlcygpIHtcbiAgcmVtb3ZlQWxsQ2hpbGROb2RlcyhsaXN0Vmlldyk7XG4gIGRhdGVMYWJlbC5yZW1vdmUoKTtcbiAgbGlzdEJ0bi5yZW1vdmUoKTtcbiAgbWFpbi5kYXRhc2V0Lmxpc3QgPSAnTm90ZXNTZWN0aW9uJztcbiAgbGlzdFRpdGxlLnRleHRDb250ZW50ID0gJ05vdGVzJztcbiAgbGlzdFRpdGxlLmFmdGVyKGFkZE5vdGVCdG4pXG4gIG5vdGVzQXJyLmZvckVhY2goZWwgPT4ge1xuICAgIGNyZWF0ZU5ld05vdGVET00oZWwpXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJUb0Rvcyhwcm9qZWN0QXJyYXkpIHtcbiAgYWRkTm90ZUJ0bi5yZW1vdmUoKVxuICBwcm9qZWN0QXJyYXkubGlzdC5mb3JFYWNoKGVsID0+IHtcbiAgICBjb25zdCBsaSA9IGNyZWF0ZU5ld1RvRG9ET00oZWwsIHByb2plY3RBcnJheSk7XG4gICAgbGlzdFZpZXcuYXBwZW5kQ2hpbGQobGkpO1xuICAgIHVwZGF0ZUN1cnJlbnRQcm9qZWN0KHByb2plY3RBcnJheSk7XG4gIH0pO1xuICBzZXRMb2NhbFN0b3JhZ2UoJ3Byb2plY3RzJywgcHJvamVjdHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyUHJvamVjdHMoKSB7XG4gIGFkZE5vdGVCdG4ucmVtb3ZlKClcbiAgcHJvamVjdHMuZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgbGkgPSBjcmVhdGVOZXdQcm9qZWN0RE9NKGVsLCBpbmRleCk7XG4gICAgcHJvamVjdHNWaWV3LmFwcGVuZENoaWxkKGxpKTtcbiAgfSk7XG4gIHNldExvY2FsU3RvcmFnZSgncHJvamVjdHMnLCBwcm9qZWN0cylcbn1cbiIsImltcG9ydCB7IFRvRG8sIHRvZ2dsZVRvRG9Db21wbGV0ZWQgfSBmcm9tICcuL1RvRG8nO1xuaW1wb3J0IHsgY3JlYXRlTmV3UHJvamVjdCB9IGZyb20gXCIuL2NyZWF0ZU5ld0l0ZW1cIjtcbmltcG9ydCB7IE5vdGUgfSBmcm9tICcuL05vdGUnO1xuaW1wb3J0IHsgbm90ZXNBcnIgfSBmcm9tICcuLic7XG5cbmV4cG9ydCBjb25zdCB0b2RvcyA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdDEgPSBjcmVhdGVOZXdQcm9qZWN0KCdQcm9qZWN0Jyk7XG4gIGNvbnN0IHByb2plY3QyID0gY3JlYXRlTmV3UHJvamVjdCgnQ2hvcmVzJyk7XG4gIFxuICBjb25zdCB0b2RvMCA9IG5ldyBUb0RvKCdDcmVhdGUgZGVsZXRlIGJ1dHRvbicsICcyMDIyLTA5LTI5JywgJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBOYW0gbGliZXJvIGp1c3RvIGxhb3JlZXQgc2l0IGFtZXQgY3Vyc3VzLiBBbWV0IGVzdCBwbGFjZXJhdCBpbiBlZ2VzdGFzIGVyYXQuJyk7XG4gIHByb2plY3QxLmxpc3QucHVzaCh0b2RvMCk7XG4gIHRvZ2dsZVRvRG9Db21wbGV0ZWQodG9kbzApO1xuXG4gIGNvbnN0IHRvZG8gPSBuZXcgVG9EbygnQ3JlYXRlIGEgd2F5IHRvIHVwZGF0ZSB2YWx1ZXMnLCAnMjAyMi0wOS0yOScpO1xuICBwcm9qZWN0MS5saXN0LnB1c2godG9kbyk7XG4gIHRvZ2dsZVRvRG9Db21wbGV0ZWQodG9kbylcblxuICBjb25zdCB0b2RvMTAgPSBuZXcgVG9EbygnRXhwYW5kIGZvciBkZXNjcmlwdGlvbicsICcyMDIyLTA5LTMwJywgJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBOYW0gbGliZXJvIGp1c3RvIGxhb3JlZXQgc2l0IGFtZXQgY3Vyc3VzLiBBbWV0IGVzdCBwbGFjZXJhdCBpbiBlZ2VzdGFzIGVyYXQuJyk7XG4gIHByb2plY3QxLmxpc3QucHVzaCh0b2RvMTApO1xuICB0b2dnbGVUb0RvQ29tcGxldGVkKHRvZG8xMCk7XG5cblxuICBjb25zdCB0b2RvOSA9IG5ldyBUb0RvKCdDcmVhdGUgY3VycmVudGx5IHNlbGVjdGVkIHByb2plY3QgZnVuY3Rpb24nLCAnMjAyMi0xMC0wMScpO1xuICBwcm9qZWN0MS5saXN0LnB1c2godG9kbzkpO1xuICB0b2dnbGVUb0RvQ29tcGxldGVkKHRvZG85KVxuXG4gIGNvbnN0IHRvZG8xID0gbmV3IFRvRG8oJ1NvcnQgZGF0ZXMnLCAnMjAyMi0xMC0wMScpO1xuICBwcm9qZWN0MS5saXN0LnB1c2godG9kbzEpO1xuICB0b2dnbGVUb0RvQ29tcGxldGVkKHRvZG8xKVxuXG4gIGNvbnN0IHRvZG84ID0gbmV3IFRvRG8oJ0NoYW5nZSBkYXRlIGZvcm1hdCcsICcyMDIyLTEwLTAxJyk7XG4gIHByb2plY3QxLmxpc3QucHVzaCh0b2RvOCk7XG4gIHRvZ2dsZVRvRG9Db21wbGV0ZWQodG9kbzgpXG5cbiAgY29uc3QgdG9kbzIgPSBuZXcgVG9EbygnRmlsdGVyIGJ5IHRvZGF5JywgJzIwMjItMTAtMDEnKTtcbiAgcHJvamVjdDEubGlzdC5wdXNoKHRvZG8yKTtcblxuICBjb25zdCB0b2RvMyA9IG5ldyBUb0RvKCdGaWx0ZXIgYnkgdGhpcyB3ZWVrJywgJzIwMjItMTAtMDEnKTtcbiAgcHJvamVjdDEubGlzdC5wdXNoKHRvZG8zKTtcblxuICBjb25zdCB0b2RvNyA9IG5ldyBUb0RvKCdBZGQgbm90ZXMgc2VjdGlvbicsICcyMDIyLTEwLTAxJyk7XG4gIHByb2plY3QxLmxpc3QucHVzaCh0b2RvNyk7XG4gIHRvZ2dsZVRvRG9Db21wbGV0ZWQodG9kbzcpO1xuXG4gIGNvbnN0IHRvZG8xMiA9IG5ldyBUb0RvKCdBZGQgbG9jYWxTdG9yYWdlIGFiaWxpdGllcycsICcyMDIyLTEwLTA2JylcbiAgcHJvamVjdDEubGlzdC5wdXNoKHRvZG8xMik7XG4gIHRvZ2dsZVRvRG9Db21wbGV0ZWQodG9kbzEyKVxuXG4gIGNvbnN0IHRvZG80ID0gbmV3IFRvRG8oJ0NsZWFuIHJvb20nLCBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXSk7XG4gIHByb2plY3QyLmxpc3QucHVzaCh0b2RvNCk7XG5cbiAgY29uc3QgdG9kbzUgPSBuZXcgVG9EbygnRG8gbGF1bmRyeScsIG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdKTtcbiAgcHJvamVjdDIubGlzdC5wdXNoKHRvZG81KTtcbiAgdG9nZ2xlVG9Eb0NvbXBsZXRlZCh0b2RvNSlcblxuICBjb25zdCB0b2RvNiA9IG5ldyBUb0RvKCdCdXkgZ3JvY2VyaWVzJywgbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF0pO1xuICBwcm9qZWN0Mi5saXN0LnB1c2godG9kbzYpO1xuXG4gIGNvbnN0IHRvZG8xMSA9IG5ldyBUb0RvKCdUYWtlIG91dCB0aGUgdHJhc2gnLCBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXSk7XG4gIHByb2plY3QyLmxpc3QucHVzaCh0b2RvMTEpO1xuICB0b2dnbGVUb0RvQ29tcGxldGVkKHRvZG8xMSlcbn07XG5cbmV4cG9ydCBjb25zdCBub3RlcyA9ICgpID0+IHtcbiAgY29uc3Qgbm90ZTAgPSBuZXcgTm90ZSgnb3Jhbmdlc1xcbmJhbmFuYXNcXG5hcHBsZXNcXG5ncmFwZXMnKVxuICBub3Rlc0Fyci5wdXNoKG5vdGUwKVxuXG4gIGNvbnN0IG5vdGUxID0gbmV3IE5vdGUoJ0NQVVxcbkdQVVxcblJBTVxcblBTVVxcblNTRFxcbk1vdGhlcmJvYXJkJylcbiAgbm90ZXNBcnIucHVzaChub3RlMSlcblxuICBjb25zdCBub3RlMiA9IG5ldyBOb3RlKCdvbmVcXG50d29cXG50aHJlZVxcbmZvdXInKVxuICBub3Rlc0Fyci5wdXNoKG5vdGUyKVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgY29uc3QgbmV3Tm90ZXMgPSBuZXcgTm90ZSgpO1xuICAgIG5vdGVzQXJyLnB1c2gobmV3Tm90ZXMpXG4gIH1cbn0iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuaW1wb3J0ICogYXMgZGVtbyBmcm9tICcuL2NvbXBvbmVudHMvdGVzdCc7XG5pbXBvcnQgeyByZW5kZXJJbmJveCwgcmVuZGVyUHJvamVjdHMsIHJlbmRlclRvRG9zIH0gZnJvbSAnLi9jb21wb25lbnRzL3JlbmRlckl0ZW1zJztcbmltcG9ydCB7IHNpZGViYXIsIHNvcnREYXRlQnRuLCBsaXN0VmlldyB9IGZyb20gJy4vY29tcG9uZW50cy9ET01lbGVtZW50cyc7XG5cbmV4cG9ydCBsZXQgbm90ZXNBcnIgPSBbXTtcbmV4cG9ydCBsZXQgcHJvamVjdHMgPSBbXTtcbmV4cG9ydCBsZXQgY3VycmVudFByb2plY3Q7XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVQcm9qZWN0cyhpdGVtKXtcbiAgcmV0dXJuIHByb2plY3RzID0gaXRlbTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVDdXJyZW50UHJvamVjdChpdGVtKSB7XG4gIHJldHVybiBjdXJyZW50UHJvamVjdCA9IGl0ZW07XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZU5vdGVzKGl0ZW0pIHtcbiAgcmV0dXJuIG5vdGVzQXJyID0gaXRlbTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZURhdGVGb3JtYXQoZGF0ZUlTT3N0cmluZyl7XG4gIGlmKCFkYXRlSVNPc3RyaW5nKSByZXR1cm4gJyc7XG4gIGNvbnN0IHNwbGl0ID0gZGF0ZUlTT3N0cmluZy5zcGxpdCgnLScpO1xuICBjb25zdCBuZXdEYXRlID0gYCR7c3BsaXRbMV19LyR7c3BsaXRbMl19LyR7c3BsaXRbMF19YDtcbiAgcmV0dXJuIG5ld0RhdGVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbG9yU2VsZWN0ZWQoZSl7XG4gIGNvbnN0IHNlbGVjdGFibGUgPSBzaWRlYmFyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3RhYmxlJylcbiAgc2VsZWN0YWJsZS5mb3JFYWNoKGVsPT57XG4gICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgfSlcbiAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNvcnREYXRlKCkge1xuICBpZiAoIXNvcnREYXRlQnRuLmRhdGFzZXQuc29ydCkge1xuICAgIHNvcnREYXRlQnRuLmRhdGFzZXQuc29ydCA9ICdhc2MnXG4gIH1cbiAgcHJvamVjdHMuZm9yRWFjaChlbCA9PiB7XG4gICAgZWwubGlzdC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICBpZiAoc29ydERhdGVCdG4uZGF0YXNldC5zb3J0ID09PSAnYXNjJykge1xuICAgICAgICBpZiAoYS5kdWVEYXRlID4gYi5kdWVEYXRlKVxuICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICBpZiAoYS5kdWVEYXRlIDwgYi5kdWVEYXRlKVxuICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYoc29ydERhdGVCdG4uZGF0YXNldC5zb3J0ID09PSAnZHNjJyl7XG4gICAgICAgIGlmIChhLmR1ZURhdGUgPiBiLmR1ZURhdGUpXG4gICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICBpZiAoYS5kdWVEYXRlIDwgYi5kdWVEYXRlKVxuICAgICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG4gIH0pO1xuICBpZiAoc29ydERhdGVCdG4uZGF0YXNldC5zb3J0ID09PSAnYXNjJykge1xuICAgIHNvcnREYXRlQnRuLmRhdGFzZXQuc29ydCA9ICdkc2MnO1xuICAgIHNvcnREYXRlQnRuLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXNvcnQtdXBcIj48L2k+J1xuICB9IGVsc2UgaWYoc29ydERhdGVCdG4uZGF0YXNldC5zb3J0ID09PSAnZHNjJykge1xuICAgIHNvcnREYXRlQnRuLmRhdGFzZXQuc29ydCA9ICdhc2MnO1xuICAgIHNvcnREYXRlQnRuLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXNvcnQtZG93blwiPjwvaT4nXG4gIH1cbiAgcmVtb3ZlQWxsQ2hpbGROb2RlcyhsaXN0VmlldylcbiAgcmVuZGVyVG9Eb3MoY3VycmVudFByb2plY3QpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVBbGxDaGlsZE5vZGVzKHBhcmVudCkge1xuICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldExvY2FsU3RvcmFnZShzdG9yZWROYW1lLCBkYXRhQXJyKXtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc3RvcmVkTmFtZSwgSlNPTi5zdHJpbmdpZnkoZGF0YUFycikpXG59XG5cbmZ1bmN0aW9uIGdldExvY2FsU3RvcmFnZShzdG9yZWROYW1lKXtcbiAgaWYgKHN0b3JlZE5hbWUgPT09ICdwcm9qZWN0cycpIHtcbiAgICB1cGRhdGVQcm9qZWN0cyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHN0b3JlZE5hbWUpKSlcbiAgfSBcbiAgZWxzZSBpZiAoc3RvcmVkTmFtZSA9PT0gJ25vdGVzJykge1xuICAgIHVwZGF0ZU5vdGVzKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oc3RvcmVkTmFtZSkpKVxuICB9XG59XG5cblxuaWYodHlwZW9mIGxvY2FsU3RvcmFnZS5wcm9qZWN0cyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgZGVtby50b2RvcygpO1xuICBzZXRMb2NhbFN0b3JhZ2UoJ3Byb2plY3RzJywgcHJvamVjdHMpXG59XG5pZiAodHlwZW9mIGxvY2FsU3RvcmFnZS5ub3RlcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgZGVtby5ub3RlcygpO1xuICBzZXRMb2NhbFN0b3JhZ2UoJ25vdGVzJywgbm90ZXNBcnIpXG59XG5cbi8vIGxvY2FsU3RvcmFnZS5jbGVhcigpXG5nZXRMb2NhbFN0b3JhZ2UoJ3Byb2plY3RzJyk7XG5nZXRMb2NhbFN0b3JhZ2UoJ25vdGVzJyk7XG5yZW5kZXJQcm9qZWN0cygpO1xucmVuZGVySW5ib3goKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==