/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Orbitron", monospace;
}

body {
  background: radial-gradient(circle at center, #001122, #000811);
  color: #0af;
  min-height: 100vh;
  padding: 20px;
  overflow-x: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

header {
  text-align: center;
  padding: 20px 0;
  margin-bottom: 30px;
  position: relative;
}

h1 {
  font-size: 3.2rem;
  text-shadow: 0 0 10px #0af, 0 0 20px #0af;
  margin-bottom: 10px;
  letter-spacing: 3px;
  background: linear-gradient(to right, #0af, #0ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.game-status {
  font-size: 1.2rem;
  background-color: rgba(0, 20, 40, 0.7);
  padding: 10px 20px;
  border-radius: 10px;
  display: inline-block;
  margin-bottom: 20px;
  border: 1px solid #0af;
  box-shadow: 0 0 10px rgba(0, 170, 255, 0.5);
  text-shadow: 0 0 5px #0af;
}

.game-boards {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
}

.board-container {
  flex: 1;
  min-width: 300px;
  background: radial-gradient(
    circle at center,
    rgba(0, 30, 60, 0.8),
    rgba(0, 10, 30, 0.9)
  );
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 20px rgba(0, 170, 255, 0.3);
  backdrop-filter: blur(5px);
  border: 1px solid #0af;
  position: relative;
  overflow: hidden;
}

.board-container::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: conic-gradient(
    transparent,
    rgba(0, 170, 255, 0.1),
    transparent 30%
  );
  animation: rotate 10s linear infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

.board-title {
  text-align: center;
  margin-bottom: 15px;
  font-size: 1.5rem;
  color: #0ff;
  text-shadow: 0 0 10px #0ff;
  position: relative;
  z-index: 1;
}

.game-board {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  gap: 2px;
  width: 100%;
  aspect-ratio: 1 / 1;
  margin: 0 auto;
  border: 2px solid #0af;
  background-color: rgba(0, 10, 30, 0.7);
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  z-index: 1;
}

.game-board::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
      circle at center,
      transparent 70%,
      rgba(0, 170, 255, 0.1) 100%
    ),
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 9.5%,
      rgba(0, 170, 255, 0.1) 10%
    ),
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 9.5%,
      rgba(0, 170, 255, 0.1) 10%
    );
  pointer-events: none;
}

.cell {
  background-color: rgba(0, 20, 40, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  cursor: pointer;
  position: relative;
  border: 1px solid rgba(0, 170, 255, 0.2);
}

.initial-board .cell:hover {
  background-color: rgba(0, 100, 200, 0.5);
  box-shadow: 0 0 10px rgba(0, 170, 255, 0.5);
}

.player-board .cell:hover {
  background-color: rgba(0, 100, 200, 0.5);
  box-shadow: 0 0 10px rgba(0, 170, 255, 0.5);
}

.computer-board .cell:hover {
  background-color: rgba(0, 100, 200, 0.5);
  box-shadow: 0 0 10px rgba(0, 170, 255, 0.5);
}

.cell.hit::after {
  content: "✕";
  color: #f00;
  font-size: 1.5rem;
  font-weight: bold;
  text-shadow: 0 0 10px #f00;
  animation: pulse 1s infinite;
}

.cell.miss::after {
  content: "•";
  color: #888;
  font-size: 1.8rem;
  text-shadow: 0 0 5px #888;
}

.cell.ship {
  background-color: rgba(0, 100, 0, 0.5);
  box-shadow: inset 0 0 10px rgba(0, 255, 0, 0.3);
}

.cell.ship.hit {
  background-color: rgba(100, 0, 0, 0.7);
  box-shadow: inset 0 0 10px rgba(255, 0, 0, 0.5);
}

@keyframes pulse {
  0% {
    opacity: 0.7;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.7;
  }
}

.coordinates {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  padding: 0 5px;
}

.coordinate {
  width: calc(100% / 10);
  text-align: center;
  font-weight: bold;
  color: #0ff;
  text-shadow: 0 0 5px #0ff;
}

.controls {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
  flex-wrap: wrap;
}

button {
  padding: 12px 25px;
  font-size: 1rem;
  background: linear-gradient(to bottom, #003366, #001122);
  color: #0ff;
  border: 1px solid #0af;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;
  box-shadow: 0 0 10px rgba(0, 170, 255, 0.5);
  text-shadow: 0 0 5px #0af;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

button::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(0, 170, 255, 0.4),
    transparent
  );
  transition: 0.5s;
  z-index: -1;
}

button:hover {
  box-shadow: 0 0 20px rgba(0, 170, 255, 0.8);
  color: #fff;
}

button:hover::before {
  left: 100%;
}

button:active {
  transform: translateY(2px);
}

.instructions {
  max-width: 800px;
  margin: 30px auto;
  background: radial-gradient(
    circle at center,
    rgba(0, 30, 60, 0.8),
    rgba(0, 10, 30, 0.9)
  );
  padding: 20px;
  border-radius: 10px;
  line-height: 1.6;
  border: 1px solid #0af;
  box-shadow: 0 0 20px rgba(0, 170, 255, 0.3);
  position: relative;
  z-index: 1;
}

.instructions h2 {
  color: #0ff;
  margin-bottom: 15px;
  text-align: center;
  text-shadow: 0 0 10px #0ff;
}

.instructions ul {
  margin-left: 20px;
}

.instructions li {
  margin-bottom: 8px;
  text-shadow: 0 0 5px #0af;
}

.radar-sweep {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: -1;
  opacity: 0.1;
}

.radar-sweep::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: conic-gradient(
    from 0deg,
    transparent 0%,
    rgba(0, 255, 255, 0.1) 10%,
    transparent 20%
  );
  animation: radar-sweep 4s linear infinite;
}

@keyframes radar-sweep {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@media (max-width: 768px) {
  .game-boards {
    flex-direction: column;
  }

  .board-container {
    width: 100%;
  }

  h1 {
    font-size: 2.5rem;
  }
}

.initial-ui {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-top: 10px;
}

.initial-board {
  height: 450px;
  width: 450px;

  display: flex;
  align-items: center;
  justify-content: center;  
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Orbitron\", monospace;\n}\n\nbody {\n  background: radial-gradient(circle at center, #001122, #000811);\n  color: #0af;\n  min-height: 100vh;\n  padding: 20px;\n  overflow-x: hidden;\n}\n\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\nheader {\n  text-align: center;\n  padding: 20px 0;\n  margin-bottom: 30px;\n  position: relative;\n}\n\nh1 {\n  font-size: 3.2rem;\n  text-shadow: 0 0 10px #0af, 0 0 20px #0af;\n  margin-bottom: 10px;\n  letter-spacing: 3px;\n  background: linear-gradient(to right, #0af, #0ff);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n}\n\n.game-status {\n  font-size: 1.2rem;\n  background-color: rgba(0, 20, 40, 0.7);\n  padding: 10px 20px;\n  border-radius: 10px;\n  display: inline-block;\n  margin-bottom: 20px;\n  border: 1px solid #0af;\n  box-shadow: 0 0 10px rgba(0, 170, 255, 0.5);\n  text-shadow: 0 0 5px #0af;\n}\n\n.game-boards {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 30px;\n}\n\n.board-container {\n  flex: 1;\n  min-width: 300px;\n  background: radial-gradient(\n    circle at center,\n    rgba(0, 30, 60, 0.8),\n    rgba(0, 10, 30, 0.9)\n  );\n  border-radius: 10px;\n  padding: 20px;\n  box-shadow: 0 0 20px rgba(0, 170, 255, 0.3);\n  backdrop-filter: blur(5px);\n  border: 1px solid #0af;\n  position: relative;\n  overflow: hidden;\n}\n\n.board-container::before {\n  content: \"\";\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  background: conic-gradient(\n    transparent,\n    rgba(0, 170, 255, 0.1),\n    transparent 30%\n  );\n  animation: rotate 10s linear infinite;\n}\n\n@keyframes rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.board-title {\n  text-align: center;\n  margin-bottom: 15px;\n  font-size: 1.5rem;\n  color: #0ff;\n  text-shadow: 0 0 10px #0ff;\n  position: relative;\n  z-index: 1;\n}\n\n.game-board {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  gap: 2px;\n  width: 100%;\n  aspect-ratio: 1 / 1;\n  margin: 0 auto;\n  border: 2px solid #0af;\n  background-color: rgba(0, 10, 30, 0.7);\n  border-radius: 5px;\n  overflow: hidden;\n  position: relative;\n  z-index: 1;\n}\n\n.game-board::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: radial-gradient(\n      circle at center,\n      transparent 70%,\n      rgba(0, 170, 255, 0.1) 100%\n    ),\n    repeating-linear-gradient(\n      0deg,\n      transparent,\n      transparent 9.5%,\n      rgba(0, 170, 255, 0.1) 10%\n    ),\n    repeating-linear-gradient(\n      90deg,\n      transparent,\n      transparent 9.5%,\n      rgba(0, 170, 255, 0.1) 10%\n    );\n  pointer-events: none;\n}\n\n.cell {\n  background-color: rgba(0, 20, 40, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n  cursor: pointer;\n  position: relative;\n  border: 1px solid rgba(0, 170, 255, 0.2);\n}\n\n.initial-board .cell:hover {\n  background-color: rgba(0, 100, 200, 0.5);\n  box-shadow: 0 0 10px rgba(0, 170, 255, 0.5);\n}\n\n.player-board .cell:hover {\n  background-color: rgba(0, 100, 200, 0.5);\n  box-shadow: 0 0 10px rgba(0, 170, 255, 0.5);\n}\n\n.computer-board .cell:hover {\n  background-color: rgba(0, 100, 200, 0.5);\n  box-shadow: 0 0 10px rgba(0, 170, 255, 0.5);\n}\n\n.cell.hit::after {\n  content: \"✕\";\n  color: #f00;\n  font-size: 1.5rem;\n  font-weight: bold;\n  text-shadow: 0 0 10px #f00;\n  animation: pulse 1s infinite;\n}\n\n.cell.miss::after {\n  content: \"•\";\n  color: #888;\n  font-size: 1.8rem;\n  text-shadow: 0 0 5px #888;\n}\n\n.cell.ship {\n  background-color: rgba(0, 100, 0, 0.5);\n  box-shadow: inset 0 0 10px rgba(0, 255, 0, 0.3);\n}\n\n.cell.ship.hit {\n  background-color: rgba(100, 0, 0, 0.7);\n  box-shadow: inset 0 0 10px rgba(255, 0, 0, 0.5);\n}\n\n@keyframes pulse {\n  0% {\n    opacity: 0.7;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0.7;\n  }\n}\n\n.coordinates {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 5px;\n  padding: 0 5px;\n}\n\n.coordinate {\n  width: calc(100% / 10);\n  text-align: center;\n  font-weight: bold;\n  color: #0ff;\n  text-shadow: 0 0 5px #0ff;\n}\n\n.controls {\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n  margin-top: 30px;\n  flex-wrap: wrap;\n}\n\nbutton {\n  padding: 12px 25px;\n  font-size: 1rem;\n  background: linear-gradient(to bottom, #003366, #001122);\n  color: #0ff;\n  border: 1px solid #0af;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-weight: bold;\n  box-shadow: 0 0 10px rgba(0, 170, 255, 0.5);\n  text-shadow: 0 0 5px #0af;\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n}\n\nbutton::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(\n    90deg,\n    transparent,\n    rgba(0, 170, 255, 0.4),\n    transparent\n  );\n  transition: 0.5s;\n  z-index: -1;\n}\n\nbutton:hover {\n  box-shadow: 0 0 20px rgba(0, 170, 255, 0.8);\n  color: #fff;\n}\n\nbutton:hover::before {\n  left: 100%;\n}\n\nbutton:active {\n  transform: translateY(2px);\n}\n\n.instructions {\n  max-width: 800px;\n  margin: 30px auto;\n  background: radial-gradient(\n    circle at center,\n    rgba(0, 30, 60, 0.8),\n    rgba(0, 10, 30, 0.9)\n  );\n  padding: 20px;\n  border-radius: 10px;\n  line-height: 1.6;\n  border: 1px solid #0af;\n  box-shadow: 0 0 20px rgba(0, 170, 255, 0.3);\n  position: relative;\n  z-index: 1;\n}\n\n.instructions h2 {\n  color: #0ff;\n  margin-bottom: 15px;\n  text-align: center;\n  text-shadow: 0 0 10px #0ff;\n}\n\n.instructions ul {\n  margin-left: 20px;\n}\n\n.instructions li {\n  margin-bottom: 8px;\n  text-shadow: 0 0 5px #0af;\n}\n\n.radar-sweep {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  pointer-events: none;\n  z-index: -1;\n  opacity: 0.1;\n}\n\n.radar-sweep::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: conic-gradient(\n    from 0deg,\n    transparent 0%,\n    rgba(0, 255, 255, 0.1) 10%,\n    transparent 20%\n  );\n  animation: radar-sweep 4s linear infinite;\n}\n\n@keyframes radar-sweep {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@media (max-width: 768px) {\n  .game-boards {\n    flex-direction: column;\n  }\n\n  .board-container {\n    width: 100%;\n  }\n\n  h1 {\n    font-size: 2.5rem;\n  }\n}\n\n.initial-ui {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 30px;\n  margin-top: 10px;\n}\n\n.initial-board {\n  height: 450px;\n  width: 450px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;  \n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

"use strict";


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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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

"use strict";


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

"use strict";


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

"use strict";


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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

"use strict";


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

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { Ship, GameBoard, Player } = __webpack_require__(/*! ./ship */ "./src/ship.js");

function placeShipsRandomly(gameBoard) {
    const shipLengths = [5, 4, 3, 3, 2];
    shipLengths.forEach(length => {
        let placed = false;
        while (!placed) {
            const axis = Math.random() > 0.5 ? 'horizontal' : 'vertical';
            const x = Math.floor(Math.random() * 10);
            const y = Math.floor(Math.random() * 10);
            const ship = new Ship("RandomShip", length);
            placed = gameBoard.addShip(ship, x, y, axis);
        }
    });
}

function load(){
document.addEventListener('DOMContentLoaded', function () {
    const placingBoard = document.querySelector('.placing-board');
    const playerBoard = document.querySelector('.player-board');
    const computerBoard = document.querySelector('.computer-board');
    const startBtn = document.getElementById('start-btn');
    const resetBtn = document.getElementById('reset-btn');
    const randomBtn = document.getElementById('random-btn');
    const gameStatus = document.querySelector('.game-status');
    let playerGameBoard = null;
    let computerGameBoard = null;

    function createBoard(boardElement, role) {
        boardElement.innerHTML = '';

        const newBoard = new GameBoard();
        placeShipsRandomly(newBoard);

        for (let row = 0; row < 10; row++) {
            for (let col = 0; col < 10; col++) {
                const cell = document.createElement('div');
                cell.className = 'cell';
                cell.dataset.row = row;
                cell.dataset.col = col;

                if (role === 'player') {
                    cell.classList.add('player');
                } else {
                    cell.classList.add('computer');
                }

                const ship = newBoard.ships[row][col];
                if (ship !== 0 && ship !== 1) {
                    cell.classList.add('ship');
                }

                boardElement.appendChild(cell);
            }
        }

        return newBoard;
    }

    function initializeGame() {
        // Initialize placing board and assign new GameBoard instances
        playerGameBoard = createBoard(playerBoard, 'player');
        computerGameBoard = createBoard(computerBoard, 'computer');
        
    }

    function shoot() {

    }

    function computerTurnToShoot() {
            const x = Math.floor(Math.random() * 10);
            const y = Math.floor(Math.random() * 10);

    }


    initializeGame();

    // Add event listeners for game controls
    startBtn.addEventListener('click', function () {
        gameStatus.textContent = "RADAR ACTIVE - ENGAGE ENEMY TARGETS";
        startBtn.disabled = true;

        // Add click handlers to computer board for gameplay
        const computerCells = document.querySelectorAll('.computer-board .cell');
        computerCells.forEach(cell => {
            cell.addEventListener('click', function () {
                if (!this.classList.contains('hit') && !this.classList.contains('miss')) {
                    if (this.classList.contains('ship') && computerGameBoard.reciveAttack(parseInt(this.dataset.row), parseInt(this.dataset.col))) {
                        this.classList.add('hit');
                        gameStatus.textContent = "DIRECT HIT! ENEMY VESSEL DAMAGED!";
                        if(computerGameBoard.allSunk()) {
                            gameStatus.textContent = "ALL ENEMY VESSELS DESTROYED - VICTORY ACHIEVED!";
                        }
                    } else {
                        this.classList.add('miss');
                        gameStatus.textContent = "TARGET MISSED - RECALIBRATING";
                    }
                }
            });
        });
    });

    resetBtn.addEventListener('click', function () {
        initializeGame();

        gameStatus.textContent = "SYSTEMS RESET - DEPLOY YOUR FLEET";
        startBtn.disabled = false;
    });

    // randomBtn.addEventListener('click', function () {
    //     createBoard(playerBoard, true);
    //     gameStatus.textContent = "RANDOM DEPLOYMENT COMPLETE - ACTIVATE RADAR";
    // });
});
}
module.exports =  {load, placeShipsRandomly};










//  <div class="container">
//       <header>
//         <h1>BATTLESHIP</h1>
//         <div class="game-status">
//           ACTIVATE RADAR SYSTEMS - DEPLOY YOUR FLEET
//         </div>
//       </header>

//       <div class="game-boards">
//         <div class="board-container">
//           <h2 class="board-title">FRIENDLY FLEET</h2>
//           <div class="coordinates">
//             <div class="coordinate">A</div>
//             <div class="coordinate">B</div>
//             <div class="coordinate">C</div>
//             <div class="coordinate">D</div>
//             <div class="coordinate">E</div>
//             <div class="coordinate">F</div>
//             <div class="coordinate">G</div>
//             <div class="coordinate">H</div>
//             <div class="coordinate">I</div>
//             <div class="coordinate">J</div>
//           </div>
//           <div class="game-board player-board">
//             <!-- Player board cells will be generated by JavaScript -->
//           </div>
//         </div>

//         <div class="board-container">
//           <h2 class="board-title">ENEMY WATERS</h2>
//           <div class="coordinates">
//             <div class="coordinate">A</div>
//             <div class="coordinate">B</div>
//             <div class="coordinate">C</div>
//             <div class="coordinate">D</div>
//             <div class="coordinate">E</div>
//             <div class="coordinate">F</div>
//             <div class="coordinate">G</div>
//             <div class="coordinate">H</div>
//             <div class="coordinate">I</div>
//             <div class="coordinate">J</div>
//           </div>
//           <div class="game-board computer-board">
//             <!-- Computer board cells will be generated by JavaScript -->
//           </div>
//         </div>
//       </div>

//       <div class="controls">
//         <button id="start-btn">ACTIVATE RADAR</button>
//         <button id="reset-btn">RESET SYSTEMS</button>
//       </div>

//       <div class="instructions">
//         <h2>TACTICAL BRIEFING</h2>
//         <ul>
//           <li>Deploy your fleet on your tactical grid</li>
//           <li>Activate radar systems to begin engagement</li>
//           <li>Target enemy coordinates by selecting grid positions</li>
//           <li>Red markers indicate successful hits on enemy vessels</li>
//           <li>Gray markers indicate missed targets</li>
//           <li>Eliminate all enemy ships to achieve victory</li>
//         </ul>
//       </div>
//     </div>
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


    // <div class="initial-ui">
    //   <h1>WELCOME TO BATTLESHIP</h1>
    //   <h3>Place You Carrier:</h3>

    //   <div class="game-boards initial-board">
    //     <div class="board-container">
    //       <div class="coordinates">
    //         <div class="coordinate">A</div>
    //         <div class="coordinate">B</div>
    //         <div class="coordinate">C</div>
    //         <div class="coordinate">D</div>
    //         <div class="coordinate">E</div>
    //         <div class="coordinate">F</div>
    //         <div class="coordinate">G</div>
    //         <div class="coordinate">H</div>
    //         <div class="coordinate">I</div>
    //         <div class="coordinate">J</div>
    //       </div>
    //       <div class="game-board placing-board">
    //         <!-- Player board cells will be generated by JavaScript -->
    //       </div>
    //     </div>
    //     <div><button id="random-btn">RANDOM DEPLOYMENT</button></div>
          
    //   </div>
    // </div>

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module) => {

class Ship {
  constructor(name, length, hitPoints=0, sunk = false) {
    this.name = name;
    this.length = length;
    this.hitPoints = hitPoints;
    this.sunk = sunk;
  }

  hit() {
    this.hitPoints++;
    if (this.hitPoints >= this.length) {
      this.sunk = true;
      return true;
    }
    return false;
  }

  isSunk() {
    return this.sunk;
  }
}

class GameBoard {
  constructor() {
    this.ships = Array.from({ length: 10 }, () => Array(10).fill(0));
    this.numberOfSunkShips = 0;
  }
  
  addShip(ship, ax, ay, axis) {
    if(axis === 'vertical') {
      if(ay + ship.length > 10) return false;
      for (let i = ay; i < ay + ship.length; i++) {
        if(this.ships[ax][i] !== 0) return false;
      }
      for (let i = ay; i < ay + ship.length; i++) {
        this.ships[ax][i] = ship;
      }
      return true;
    } 
    
    else if(axis === 'horizontal') {
      if(ax + ship.length > 10) return false;
      for (let i = ax; i < ax + ship.length; i++) {
        if(this.ships[i][ay] !== 0) return false;
      }
      for (let i = ax; i < ax + ship.length; i++) {
        this.ships[i][ay] = ship;
      }
      return true;
    }
    return false;
  }

  reciveAttack(x, y) {
    const target = this.ships[x][y];
    if (target !== 0 && target !== 1) {
      if(target.hit()) this.numberOfSunkShips++;
      return true;
    }
    else if(target === 0) {
      this.ships[x][y] = 1; // Mark as miss
      return false;
    }
    return false;
  }

  allSunk() {
    return this.numberOfSunkShips === 5; // Assuming there are 5 ships in total
  }
}

class Player {
    constructor(type, gameBoard) {
        this.type = type;
        this.gameBoard = gameBoard;
    }
}

module.exports = { Ship, GameBoard, Player };

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");

const {load} = __webpack_require__(/*! ./game */ "./src/game.js");
console.log("Hello World!");
load();

// const sum = require('./sum');
// module.exports = sum;
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGlGQUFpRixVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFNBQVMsS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxRQUFRLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLG9CQUFvQixNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFL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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYTs7Ozs7Ozs7OztBQzdOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIsWUFBWTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLDBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdFbkIsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBb0c7QUFDcEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTtBQUNyQyxpQkFBaUIsdUdBQWE7QUFDOUIsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyx1RkFBTzs7OztBQUk4QztBQUN0RSxPQUFPLGlFQUFlLHVGQUFPLElBQUksdUZBQU8sVUFBVSx1RkFBTyxtQkFBbUIsRUFBQzs7Ozs7OztVQ3hCN0U7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7O1dDTkEsbUM7Ozs7Ozs7Ozs7Ozs7QUNBc0I7QUFDdEIsT0FBTyxNQUFNLEVBQUUsbUJBQU8sQ0FBQyw2QkFBUTtBQUMvQjtBQUNBOztBQUVBO0FBQ0Esd0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LWZhbWlseTogXCJPcmJpdHJvblwiLCBtb25vc3BhY2U7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IGNlbnRlciwgIzAwMTEyMiwgIzAwMDgxMSk7XG4gIGNvbG9yOiAjMGFmO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZzogMjBweDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMy4ycmVtO1xuICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggIzBhZiwgMCAwIDIwcHggIzBhZjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMGFmLCAjMGZmKTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZ2FtZS1zdGF0dXMge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyMCwgNDAsIDAuNyk7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMGFmO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDE3MCwgMjU1LCAwLjUpO1xuICB0ZXh0LXNoYWRvdzogMCAwIDVweCAjMGFmO1xufVxuXG4uZ2FtZS1ib2FyZHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAzMHB4O1xufVxuXG4uYm9hcmQtY29udGFpbmVyIHtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiAzMDBweDtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KFxuICAgIGNpcmNsZSBhdCBjZW50ZXIsXG4gICAgcmdiYSgwLCAzMCwgNjAsIDAuOCksXG4gICAgcmdiYSgwLCAxMCwgMzAsIDAuOSlcbiAgKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgwLCAxNzAsIDI1NSwgMC4zKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwYWY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmJvYXJkLWNvbnRhaW5lcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC01MCU7XG4gIGxlZnQ6IC01MCU7XG4gIHdpZHRoOiAyMDAlO1xuICBoZWlnaHQ6IDIwMCU7XG4gIGJhY2tncm91bmQ6IGNvbmljLWdyYWRpZW50KFxuICAgIHRyYW5zcGFyZW50LFxuICAgIHJnYmEoMCwgMTcwLCAyNTUsIDAuMSksXG4gICAgdHJhbnNwYXJlbnQgMzAlXG4gICk7XG4gIGFuaW1hdGlvbjogcm90YXRlIDEwcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgcm90YXRlIHtcbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuXG4uYm9hcmQtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjb2xvcjogIzBmZjtcbiAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4ICMwZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cblxuLmdhbWUtYm9hcmQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XG4gIGdhcDogMnB4O1xuICB3aWR0aDogMTAwJTtcbiAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwYWY7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTAsIDMwLCAwLjcpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cblxuLmdhbWUtYm9hcmQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoXG4gICAgICBjaXJjbGUgYXQgY2VudGVyLFxuICAgICAgdHJhbnNwYXJlbnQgNzAlLFxuICAgICAgcmdiYSgwLCAxNzAsIDI1NSwgMC4xKSAxMDAlXG4gICAgKSxcbiAgICByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KFxuICAgICAgMGRlZyxcbiAgICAgIHRyYW5zcGFyZW50LFxuICAgICAgdHJhbnNwYXJlbnQgOS41JSxcbiAgICAgIHJnYmEoMCwgMTcwLCAyNTUsIDAuMSkgMTAlXG4gICAgKSxcbiAgICByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KFxuICAgICAgOTBkZWcsXG4gICAgICB0cmFuc3BhcmVudCxcbiAgICAgIHRyYW5zcGFyZW50IDkuNSUsXG4gICAgICByZ2JhKDAsIDE3MCwgMjU1LCAwLjEpIDEwJVxuICAgICk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uY2VsbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjAsIDQwLCAwLjcpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMTcwLCAyNTUsIDAuMik7XG59XG5cbi5pbml0aWFsLWJvYXJkIC5jZWxsOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMDAsIDIwMCwgMC41KTtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAxNzAsIDI1NSwgMC41KTtcbn1cblxuLnBsYXllci1ib2FyZCAuY2VsbDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTAwLCAyMDAsIDAuNSk7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMTcwLCAyNTUsIDAuNSk7XG59XG5cbi5jb21wdXRlci1ib2FyZCAuY2VsbDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTAwLCAyMDAsIDAuNSk7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMTcwLCAyNTUsIDAuNSk7XG59XG5cbi5jZWxsLmhpdDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIuKclVwiO1xuICBjb2xvcjogI2YwMDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggI2YwMDtcbiAgYW5pbWF0aW9uOiBwdWxzZSAxcyBpbmZpbml0ZTtcbn1cblxuLmNlbGwubWlzczo6YWZ0ZXIge1xuICBjb250ZW50OiBcIuKAolwiO1xuICBjb2xvcjogIzg4ODtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIHRleHQtc2hhZG93OiAwIDAgNXB4ICM4ODg7XG59XG5cbi5jZWxsLnNoaXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEwMCwgMCwgMC41KTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDEwcHggcmdiYSgwLCAyNTUsIDAsIDAuMyk7XG59XG5cbi5jZWxsLnNoaXAuaGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDAsIDAsIDAsIDAuNyk7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4IHJnYmEoMjU1LCAwLCAwLCAwLjUpO1xufVxuXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMC43O1xuICB9XG59XG5cbi5jb29yZGluYXRlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBwYWRkaW5nOiAwIDVweDtcbn1cblxuLmNvb3JkaW5hdGUge1xuICB3aWR0aDogY2FsYygxMDAlIC8gMTApO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzBmZjtcbiAgdGV4dC1zaGFkb3c6IDAgMCA1cHggIzBmZjtcbn1cblxuLmNvbnRyb2xzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMjBweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG5idXR0b24ge1xuICBwYWRkaW5nOiAxMnB4IDI1cHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzAwMzM2NiwgIzAwMTEyMik7XG4gIGNvbG9yOiAjMGZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMGFmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMTcwLCAyNTUsIDAuNSk7XG4gIHRleHQtc2hhZG93OiAwIDAgNXB4ICMwYWY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgei1pbmRleDogMTtcbn1cblxuYnV0dG9uOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogLTEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICA5MGRlZyxcbiAgICB0cmFuc3BhcmVudCxcbiAgICByZ2JhKDAsIDE3MCwgMjU1LCAwLjQpLFxuICAgIHRyYW5zcGFyZW50XG4gICk7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHotaW5kZXg6IC0xO1xufVxuXG5idXR0b246aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDAsIDE3MCwgMjU1LCAwLjgpO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuYnV0dG9uOmhvdmVyOjpiZWZvcmUge1xuICBsZWZ0OiAxMDAlO1xufVxuXG5idXR0b246YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XG59XG5cbi5pbnN0cnVjdGlvbnMge1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBtYXJnaW46IDMwcHggYXV0bztcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KFxuICAgIGNpcmNsZSBhdCBjZW50ZXIsXG4gICAgcmdiYSgwLCAzMCwgNjAsIDAuOCksXG4gICAgcmdiYSgwLCAxMCwgMzAsIDAuOSlcbiAgKTtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzBhZjtcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgwLCAxNzAsIDI1NSwgMC4zKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xufVxuXG4uaW5zdHJ1Y3Rpb25zIGgyIHtcbiAgY29sb3I6ICMwZmY7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4ICMwZmY7XG59XG5cbi5pbnN0cnVjdGlvbnMgdWwge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLmluc3RydWN0aW9ucyBsaSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgdGV4dC1zaGFkb3c6IDAgMCA1cHggIzBhZjtcbn1cblxuLnJhZGFyLXN3ZWVwIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHotaW5kZXg6IC0xO1xuICBvcGFjaXR5OiAwLjE7XG59XG5cbi5yYWRhci1zd2VlcDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGNvbmljLWdyYWRpZW50KFxuICAgIGZyb20gMGRlZyxcbiAgICB0cmFuc3BhcmVudCAwJSxcbiAgICByZ2JhKDAsIDI1NSwgMjU1LCAwLjEpIDEwJSxcbiAgICB0cmFuc3BhcmVudCAyMCVcbiAgKTtcbiAgYW5pbWF0aW9uOiByYWRhci1zd2VlcCA0cyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgcmFkYXItc3dlZXAge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmdhbWUtYm9hcmRzIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLmJvYXJkLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICBoMSB7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gIH1cbn1cblxuLmluaXRpYWwtdWkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAzMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uaW5pdGlhbC1ib2FyZCB7XG4gIGhlaWdodDogNDUwcHg7XG4gIHdpZHRoOiA0NTBweDtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgIFxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSwrREFBK0Q7RUFDL0QsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIseUNBQXlDO0VBQ3pDLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsaURBQWlEO0VBQ2pELDZCQUE2QjtFQUM3QixxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHNDQUFzQztFQUN0QyxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLDJDQUEyQztFQUMzQyx5QkFBeUI7QUFDM0I7O0FB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RUFDakI7Ozs7R0FJQztFQUNELGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QiwyQ0FBMkM7RUFDM0Msa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1o7Ozs7O0dBS0M7RUFDRCx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTs7RUFFWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcmJpdHJvblxcXCIsIG1vbm9zcGFjZTtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IGNlbnRlciwgIzAwMTEyMiwgIzAwMDgxMSk7XFxuICBjb2xvcjogIzBhZjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMjBweCAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAzLjJyZW07XFxuICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggIzBhZiwgMCAwIDIwcHggIzBhZjtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBsZXR0ZXItc3BhY2luZzogM3B4O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMGFmLCAjMGZmKTtcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uZ2FtZS1zdGF0dXMge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDIwLCA0MCwgMC43KTtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzBhZjtcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMTcwLCAyNTUsIDAuNSk7XFxuICB0ZXh0LXNoYWRvdzogMCAwIDVweCAjMGFmO1xcbn1cXG5cXG4uZ2FtZS1ib2FyZHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogMzBweDtcXG59XFxuXFxuLmJvYXJkLWNvbnRhaW5lciB7XFxuICBmbGV4OiAxO1xcbiAgbWluLXdpZHRoOiAzMDBweDtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChcXG4gICAgY2lyY2xlIGF0IGNlbnRlcixcXG4gICAgcmdiYSgwLCAzMCwgNjAsIDAuOCksXFxuICAgIHJnYmEoMCwgMTAsIDMwLCAwLjkpXFxuICApO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDAsIDE3MCwgMjU1LCAwLjMpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMGFmO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmJvYXJkLWNvbnRhaW5lcjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtNTAlO1xcbiAgbGVmdDogLTUwJTtcXG4gIHdpZHRoOiAyMDAlO1xcbiAgaGVpZ2h0OiAyMDAlO1xcbiAgYmFja2dyb3VuZDogY29uaWMtZ3JhZGllbnQoXFxuICAgIHRyYW5zcGFyZW50LFxcbiAgICByZ2JhKDAsIDE3MCwgMjU1LCAwLjEpLFxcbiAgICB0cmFuc3BhcmVudCAzMCVcXG4gICk7XFxuICBhbmltYXRpb246IHJvdGF0ZSAxMHMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuXFxuLmJvYXJkLXRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGNvbG9yOiAjMGZmO1xcbiAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4ICMwZmY7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uZ2FtZS1ib2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdhcDogMnB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMGFmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMCwgMzAsIDAuNyk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLmdhbWUtYm9hcmQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChcXG4gICAgICBjaXJjbGUgYXQgY2VudGVyLFxcbiAgICAgIHRyYW5zcGFyZW50IDcwJSxcXG4gICAgICByZ2JhKDAsIDE3MCwgMjU1LCAwLjEpIDEwMCVcXG4gICAgKSxcXG4gICAgcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudChcXG4gICAgICAwZGVnLFxcbiAgICAgIHRyYW5zcGFyZW50LFxcbiAgICAgIHRyYW5zcGFyZW50IDkuNSUsXFxuICAgICAgcmdiYSgwLCAxNzAsIDI1NSwgMC4xKSAxMCVcXG4gICAgKSxcXG4gICAgcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudChcXG4gICAgICA5MGRlZyxcXG4gICAgICB0cmFuc3BhcmVudCxcXG4gICAgICB0cmFuc3BhcmVudCA5LjUlLFxcbiAgICAgIHJnYmEoMCwgMTcwLCAyNTUsIDAuMSkgMTAlXFxuICAgICk7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmNlbGwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyMCwgNDAsIDAuNyk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMTcwLCAyNTUsIDAuMik7XFxufVxcblxcbi5pbml0aWFsLWJvYXJkIC5jZWxsOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTAwLCAyMDAsIDAuNSk7XFxuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDE3MCwgMjU1LCAwLjUpO1xcbn1cXG5cXG4ucGxheWVyLWJvYXJkIC5jZWxsOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTAwLCAyMDAsIDAuNSk7XFxuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDE3MCwgMjU1LCAwLjUpO1xcbn1cXG5cXG4uY29tcHV0ZXItYm9hcmQgLmNlbGw6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMDAsIDIwMCwgMC41KTtcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMTcwLCAyNTUsIDAuNSk7XFxufVxcblxcbi5jZWxsLmhpdDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIuKclVxcXCI7XFxuICBjb2xvcjogI2YwMDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggI2YwMDtcXG4gIGFuaW1hdGlvbjogcHVsc2UgMXMgaW5maW5pdGU7XFxufVxcblxcbi5jZWxsLm1pc3M6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCLigKJcXFwiO1xcbiAgY29sb3I6ICM4ODg7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIHRleHQtc2hhZG93OiAwIDAgNXB4ICM4ODg7XFxufVxcblxcbi5jZWxsLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMDAsIDAsIDAuNSk7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTBweCByZ2JhKDAsIDI1NSwgMCwgMC4zKTtcXG59XFxuXFxuLmNlbGwuc2hpcC5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDAsIDAsIDAsIDAuNyk7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTBweCByZ2JhKDI1NSwgMCwgMCwgMC41KTtcXG59XFxuXFxuQGtleWZyYW1lcyBwdWxzZSB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDAuNztcXG4gIH1cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMC43O1xcbiAgfVxcbn1cXG5cXG4uY29vcmRpbmF0ZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIHBhZGRpbmc6IDAgNXB4O1xcbn1cXG5cXG4uY29vcmRpbmF0ZSB7XFxuICB3aWR0aDogY2FsYygxMDAlIC8gMTApO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogIzBmZjtcXG4gIHRleHQtc2hhZG93OiAwIDAgNXB4ICMwZmY7XFxufVxcblxcbi5jb250cm9scyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgcGFkZGluZzogMTJweCAyNXB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzAwMzM2NiwgIzAwMTEyMik7XFxuICBjb2xvcjogIzBmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwYWY7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDE3MCwgMjU1LCAwLjUpO1xcbiAgdGV4dC1zaGFkb3c6IDAgMCA1cHggIzBhZjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG5idXR0b246OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IC0xMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIDkwZGVnLFxcbiAgICB0cmFuc3BhcmVudCxcXG4gICAgcmdiYSgwLCAxNzAsIDI1NSwgMC40KSxcXG4gICAgdHJhbnNwYXJlbnRcXG4gICk7XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgei1pbmRleDogLTE7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDAsIDE3MCwgMjU1LCAwLjgpO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbmJ1dHRvbjpob3Zlcjo6YmVmb3JlIHtcXG4gIGxlZnQ6IDEwMCU7XFxufVxcblxcbmJ1dHRvbjphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XFxufVxcblxcbi5pbnN0cnVjdGlvbnMge1xcbiAgbWF4LXdpZHRoOiA4MDBweDtcXG4gIG1hcmdpbjogMzBweCBhdXRvO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KFxcbiAgICBjaXJjbGUgYXQgY2VudGVyLFxcbiAgICByZ2JhKDAsIDMwLCA2MCwgMC44KSxcXG4gICAgcmdiYSgwLCAxMCwgMzAsIDAuOSlcXG4gICk7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMGFmO1xcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgwLCAxNzAsIDI1NSwgMC4zKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5pbnN0cnVjdGlvbnMgaDIge1xcbiAgY29sb3I6ICMwZmY7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4ICMwZmY7XFxufVxcblxcbi5pbnN0cnVjdGlvbnMgdWwge1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxufVxcblxcbi5pbnN0cnVjdGlvbnMgbGkge1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgdGV4dC1zaGFkb3c6IDAgMCA1cHggIzBhZjtcXG59XFxuXFxuLnJhZGFyLXN3ZWVwIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB6LWluZGV4OiAtMTtcXG4gIG9wYWNpdHk6IDAuMTtcXG59XFxuXFxuLnJhZGFyLXN3ZWVwOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiBjb25pYy1ncmFkaWVudChcXG4gICAgZnJvbSAwZGVnLFxcbiAgICB0cmFuc3BhcmVudCAwJSxcXG4gICAgcmdiYSgwLCAyNTUsIDI1NSwgMC4xKSAxMCUsXFxuICAgIHRyYW5zcGFyZW50IDIwJVxcbiAgKTtcXG4gIGFuaW1hdGlvbjogcmFkYXItc3dlZXAgNHMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJhZGFyLXN3ZWVwIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAuZ2FtZS1ib2FyZHMge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLmJvYXJkLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgaDEge1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gIH1cXG59XFxuXFxuLmluaXRpYWwtdWkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDMwcHg7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4uaW5pdGlhbC1ib2FyZCB7XFxuICBoZWlnaHQ6IDQ1MHB4O1xcbiAgd2lkdGg6IDQ1MHB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgIFxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgeyBTaGlwLCBHYW1lQm9hcmQsIFBsYXllciB9ID0gcmVxdWlyZSgnLi9zaGlwJyk7XG5cbmZ1bmN0aW9uIHBsYWNlU2hpcHNSYW5kb21seShnYW1lQm9hcmQpIHtcbiAgICBjb25zdCBzaGlwTGVuZ3RocyA9IFs1LCA0LCAzLCAzLCAyXTtcbiAgICBzaGlwTGVuZ3Rocy5mb3JFYWNoKGxlbmd0aCA9PiB7XG4gICAgICAgIGxldCBwbGFjZWQgPSBmYWxzZTtcbiAgICAgICAgd2hpbGUgKCFwbGFjZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGF4aXMgPSBNYXRoLnJhbmRvbSgpID4gMC41ID8gJ2hvcml6b250YWwnIDogJ3ZlcnRpY2FsJztcbiAgICAgICAgICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKFwiUmFuZG9tU2hpcFwiLCBsZW5ndGgpO1xuICAgICAgICAgICAgcGxhY2VkID0gZ2FtZUJvYXJkLmFkZFNoaXAoc2hpcCwgeCwgeSwgYXhpcyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gbG9hZCgpe1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBwbGFjaW5nQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxhY2luZy1ib2FyZCcpO1xuICAgIGNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1ib2FyZCcpO1xuICAgIGNvbnN0IGNvbXB1dGVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcHV0ZXItYm9hcmQnKTtcbiAgICBjb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1idG4nKTtcbiAgICBjb25zdCByZXNldEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNldC1idG4nKTtcbiAgICBjb25zdCByYW5kb21CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFuZG9tLWJ0bicpO1xuICAgIGNvbnN0IGdhbWVTdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1zdGF0dXMnKTtcbiAgICBsZXQgcGxheWVyR2FtZUJvYXJkID0gbnVsbDtcbiAgICBsZXQgY29tcHV0ZXJHYW1lQm9hcmQgPSBudWxsO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlQm9hcmQoYm9hcmRFbGVtZW50LCByb2xlKSB7XG4gICAgICAgIGJvYXJkRWxlbWVudC5pbm5lckhUTUwgPSAnJztcblxuICAgICAgICBjb25zdCBuZXdCb2FyZCA9IG5ldyBHYW1lQm9hcmQoKTtcbiAgICAgICAgcGxhY2VTaGlwc1JhbmRvbWx5KG5ld0JvYXJkKTtcblxuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDEwOyBjb2wrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTmFtZSA9ICdjZWxsJztcbiAgICAgICAgICAgICAgICBjZWxsLmRhdGFzZXQucm93ID0gcm93O1xuICAgICAgICAgICAgICAgIGNlbGwuZGF0YXNldC5jb2wgPSBjb2w7XG5cbiAgICAgICAgICAgICAgICBpZiAocm9sZSA9PT0gJ3BsYXllcicpIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdwbGF5ZXInKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NvbXB1dGVyJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hpcCA9IG5ld0JvYXJkLnNoaXBzW3Jvd11bY29sXTtcbiAgICAgICAgICAgICAgICBpZiAoc2hpcCAhPT0gMCAmJiBzaGlwICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJvYXJkRWxlbWVudC5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXdCb2FyZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0aWFsaXplR2FtZSgpIHtcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBwbGFjaW5nIGJvYXJkIGFuZCBhc3NpZ24gbmV3IEdhbWVCb2FyZCBpbnN0YW5jZXNcbiAgICAgICAgcGxheWVyR2FtZUJvYXJkID0gY3JlYXRlQm9hcmQocGxheWVyQm9hcmQsICdwbGF5ZXInKTtcbiAgICAgICAgY29tcHV0ZXJHYW1lQm9hcmQgPSBjcmVhdGVCb2FyZChjb21wdXRlckJvYXJkLCAnY29tcHV0ZXInKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvb3QoKSB7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb21wdXRlclR1cm5Ub1Nob290KCkge1xuICAgICAgICAgICAgY29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG5cbiAgICB9XG5cblxuICAgIGluaXRpYWxpemVHYW1lKCk7XG5cbiAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXJzIGZvciBnYW1lIGNvbnRyb2xzXG4gICAgc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGdhbWVTdGF0dXMudGV4dENvbnRlbnQgPSBcIlJBREFSIEFDVElWRSAtIEVOR0FHRSBFTkVNWSBUQVJHRVRTXCI7XG4gICAgICAgIHN0YXJ0QnRuLmRpc2FibGVkID0gdHJ1ZTtcblxuICAgICAgICAvLyBBZGQgY2xpY2sgaGFuZGxlcnMgdG8gY29tcHV0ZXIgYm9hcmQgZm9yIGdhbWVwbGF5XG4gICAgICAgIGNvbnN0IGNvbXB1dGVyQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tcHV0ZXItYm9hcmQgLmNlbGwnKTtcbiAgICAgICAgY29tcHV0ZXJDZWxscy5mb3JFYWNoKGNlbGwgPT4ge1xuICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaXQnKSAmJiAhdGhpcy5jbGFzc0xpc3QuY29udGFpbnMoJ21pc3MnKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAnKSAmJiBjb21wdXRlckdhbWVCb2FyZC5yZWNpdmVBdHRhY2socGFyc2VJbnQodGhpcy5kYXRhc2V0LnJvdyksIHBhcnNlSW50KHRoaXMuZGF0YXNldC5jb2wpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVTdGF0dXMudGV4dENvbnRlbnQgPSBcIkRJUkVDVCBISVQhIEVORU1ZIFZFU1NFTCBEQU1BR0VEIVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoY29tcHV0ZXJHYW1lQm9hcmQuYWxsU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZVN0YXR1cy50ZXh0Q29udGVudCA9IFwiQUxMIEVORU1ZIFZFU1NFTFMgREVTVFJPWUVEIC0gVklDVE9SWSBBQ0hJRVZFRCFcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZVN0YXR1cy50ZXh0Q29udGVudCA9IFwiVEFSR0VUIE1JU1NFRCAtIFJFQ0FMSUJSQVRJTkdcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJlc2V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpbml0aWFsaXplR2FtZSgpO1xuXG4gICAgICAgIGdhbWVTdGF0dXMudGV4dENvbnRlbnQgPSBcIlNZU1RFTVMgUkVTRVQgLSBERVBMT1kgWU9VUiBGTEVFVFwiO1xuICAgICAgICBzdGFydEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH0pO1xuXG4gICAgLy8gcmFuZG9tQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIC8vICAgICBjcmVhdGVCb2FyZChwbGF5ZXJCb2FyZCwgdHJ1ZSk7XG4gICAgLy8gICAgIGdhbWVTdGF0dXMudGV4dENvbnRlbnQgPSBcIlJBTkRPTSBERVBMT1lNRU5UIENPTVBMRVRFIC0gQUNUSVZBVEUgUkFEQVJcIjtcbiAgICAvLyB9KTtcbn0pO1xufVxubW9kdWxlLmV4cG9ydHMgPSAge2xvYWQsIHBsYWNlU2hpcHNSYW5kb21seX07XG5cblxuXG5cblxuXG5cblxuXG5cbi8vICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4vLyAgICAgICA8aGVhZGVyPlxuLy8gICAgICAgICA8aDE+QkFUVExFU0hJUDwvaDE+XG4vLyAgICAgICAgIDxkaXYgY2xhc3M9XCJnYW1lLXN0YXR1c1wiPlxuLy8gICAgICAgICAgIEFDVElWQVRFIFJBREFSIFNZU1RFTVMgLSBERVBMT1kgWU9VUiBGTEVFVFxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICAgIDwvaGVhZGVyPlxuXG4vLyAgICAgICA8ZGl2IGNsYXNzPVwiZ2FtZS1ib2FyZHNcIj5cbi8vICAgICAgICAgPGRpdiBjbGFzcz1cImJvYXJkLWNvbnRhaW5lclwiPlxuLy8gICAgICAgICAgIDxoMiBjbGFzcz1cImJvYXJkLXRpdGxlXCI+RlJJRU5ETFkgRkxFRVQ8L2gyPlxuLy8gICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb29yZGluYXRlc1wiPlxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvb3JkaW5hdGVcIj5BPC9kaXY+XG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29vcmRpbmF0ZVwiPkI8L2Rpdj5cbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb29yZGluYXRlXCI+QzwvZGl2PlxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvb3JkaW5hdGVcIj5EPC9kaXY+XG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29vcmRpbmF0ZVwiPkU8L2Rpdj5cbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb29yZGluYXRlXCI+RjwvZGl2PlxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvb3JkaW5hdGVcIj5HPC9kaXY+XG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29vcmRpbmF0ZVwiPkg8L2Rpdj5cbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb29yZGluYXRlXCI+STwvZGl2PlxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvb3JkaW5hdGVcIj5KPC9kaXY+XG4vLyAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgPGRpdiBjbGFzcz1cImdhbWUtYm9hcmQgcGxheWVyLWJvYXJkXCI+XG4vLyAgICAgICAgICAgICA8IS0tIFBsYXllciBib2FyZCBjZWxscyB3aWxsIGJlIGdlbmVyYXRlZCBieSBKYXZhU2NyaXB0IC0tPlxuLy8gICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICA8L2Rpdj5cblxuLy8gICAgICAgICA8ZGl2IGNsYXNzPVwiYm9hcmQtY29udGFpbmVyXCI+XG4vLyAgICAgICAgICAgPGgyIGNsYXNzPVwiYm9hcmQtdGl0bGVcIj5FTkVNWSBXQVRFUlM8L2gyPlxuLy8gICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb29yZGluYXRlc1wiPlxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvb3JkaW5hdGVcIj5BPC9kaXY+XG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29vcmRpbmF0ZVwiPkI8L2Rpdj5cbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb29yZGluYXRlXCI+QzwvZGl2PlxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvb3JkaW5hdGVcIj5EPC9kaXY+XG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29vcmRpbmF0ZVwiPkU8L2Rpdj5cbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb29yZGluYXRlXCI+RjwvZGl2PlxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvb3JkaW5hdGVcIj5HPC9kaXY+XG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29vcmRpbmF0ZVwiPkg8L2Rpdj5cbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb29yZGluYXRlXCI+STwvZGl2PlxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvb3JkaW5hdGVcIj5KPC9kaXY+XG4vLyAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgPGRpdiBjbGFzcz1cImdhbWUtYm9hcmQgY29tcHV0ZXItYm9hcmRcIj5cbi8vICAgICAgICAgICAgIDwhLS0gQ29tcHV0ZXIgYm9hcmQgY2VsbHMgd2lsbCBiZSBnZW5lcmF0ZWQgYnkgSmF2YVNjcmlwdCAtLT5cbi8vICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgPC9kaXY+XG4vLyAgICAgICA8L2Rpdj5cblxuLy8gICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xzXCI+XG4vLyAgICAgICAgIDxidXR0b24gaWQ9XCJzdGFydC1idG5cIj5BQ1RJVkFURSBSQURBUjwvYnV0dG9uPlxuLy8gICAgICAgICA8YnV0dG9uIGlkPVwicmVzZXQtYnRuXCI+UkVTRVQgU1lTVEVNUzwvYnV0dG9uPlxuLy8gICAgICAgPC9kaXY+XG5cbi8vICAgICAgIDxkaXYgY2xhc3M9XCJpbnN0cnVjdGlvbnNcIj5cbi8vICAgICAgICAgPGgyPlRBQ1RJQ0FMIEJSSUVGSU5HPC9oMj5cbi8vICAgICAgICAgPHVsPlxuLy8gICAgICAgICAgIDxsaT5EZXBsb3kgeW91ciBmbGVldCBvbiB5b3VyIHRhY3RpY2FsIGdyaWQ8L2xpPlxuLy8gICAgICAgICAgIDxsaT5BY3RpdmF0ZSByYWRhciBzeXN0ZW1zIHRvIGJlZ2luIGVuZ2FnZW1lbnQ8L2xpPlxuLy8gICAgICAgICAgIDxsaT5UYXJnZXQgZW5lbXkgY29vcmRpbmF0ZXMgYnkgc2VsZWN0aW5nIGdyaWQgcG9zaXRpb25zPC9saT5cbi8vICAgICAgICAgICA8bGk+UmVkIG1hcmtlcnMgaW5kaWNhdGUgc3VjY2Vzc2Z1bCBoaXRzIG9uIGVuZW15IHZlc3NlbHM8L2xpPlxuLy8gICAgICAgICAgIDxsaT5HcmF5IG1hcmtlcnMgaW5kaWNhdGUgbWlzc2VkIHRhcmdldHM8L2xpPlxuLy8gICAgICAgICAgIDxsaT5FbGltaW5hdGUgYWxsIGVuZW15IHNoaXBzIHRvIGFjaGlldmUgdmljdG9yeTwvbGk+XG4vLyAgICAgICAgIDwvdWw+XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICA8L2Rpdj5cbi8vIFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcblxuXG4gICAgLy8gPGRpdiBjbGFzcz1cImluaXRpYWwtdWlcIj5cbiAgICAvLyAgIDxoMT5XRUxDT01FIFRPIEJBVFRMRVNISVA8L2gxPlxuICAgIC8vICAgPGgzPlBsYWNlIFlvdSBDYXJyaWVyOjwvaDM+XG5cbiAgICAvLyAgIDxkaXYgY2xhc3M9XCJnYW1lLWJvYXJkcyBpbml0aWFsLWJvYXJkXCI+XG4gICAgLy8gICAgIDxkaXYgY2xhc3M9XCJib2FyZC1jb250YWluZXJcIj5cbiAgICAvLyAgICAgICA8ZGl2IGNsYXNzPVwiY29vcmRpbmF0ZXNcIj5cbiAgICAvLyAgICAgICAgIDxkaXYgY2xhc3M9XCJjb29yZGluYXRlXCI+QTwvZGl2PlxuICAgIC8vICAgICAgICAgPGRpdiBjbGFzcz1cImNvb3JkaW5hdGVcIj5CPC9kaXY+XG4gICAgLy8gICAgICAgICA8ZGl2IGNsYXNzPVwiY29vcmRpbmF0ZVwiPkM8L2Rpdj5cbiAgICAvLyAgICAgICAgIDxkaXYgY2xhc3M9XCJjb29yZGluYXRlXCI+RDwvZGl2PlxuICAgIC8vICAgICAgICAgPGRpdiBjbGFzcz1cImNvb3JkaW5hdGVcIj5FPC9kaXY+XG4gICAgLy8gICAgICAgICA8ZGl2IGNsYXNzPVwiY29vcmRpbmF0ZVwiPkY8L2Rpdj5cbiAgICAvLyAgICAgICAgIDxkaXYgY2xhc3M9XCJjb29yZGluYXRlXCI+RzwvZGl2PlxuICAgIC8vICAgICAgICAgPGRpdiBjbGFzcz1cImNvb3JkaW5hdGVcIj5IPC9kaXY+XG4gICAgLy8gICAgICAgICA8ZGl2IGNsYXNzPVwiY29vcmRpbmF0ZVwiPkk8L2Rpdj5cbiAgICAvLyAgICAgICAgIDxkaXYgY2xhc3M9XCJjb29yZGluYXRlXCI+SjwvZGl2PlxuICAgIC8vICAgICAgIDwvZGl2PlxuICAgIC8vICAgICAgIDxkaXYgY2xhc3M9XCJnYW1lLWJvYXJkIHBsYWNpbmctYm9hcmRcIj5cbiAgICAvLyAgICAgICAgIDwhLS0gUGxheWVyIGJvYXJkIGNlbGxzIHdpbGwgYmUgZ2VuZXJhdGVkIGJ5IEphdmFTY3JpcHQgLS0+XG4gICAgLy8gICAgICAgPC9kaXY+XG4gICAgLy8gICAgIDwvZGl2PlxuICAgIC8vICAgICA8ZGl2PjxidXR0b24gaWQ9XCJyYW5kb20tYnRuXCI+UkFORE9NIERFUExPWU1FTlQ8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICBcbiAgICAvLyAgIDwvZGl2PlxuICAgIC8vIDwvZGl2PiIsImNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBsZW5ndGgsIGhpdFBvaW50cz0wLCBzdW5rID0gZmFsc2UpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMuaGl0UG9pbnRzID0gaGl0UG9pbnRzO1xuICAgIHRoaXMuc3VuayA9IHN1bms7XG4gIH1cblxuICBoaXQoKSB7XG4gICAgdGhpcy5oaXRQb2ludHMrKztcbiAgICBpZiAodGhpcy5oaXRQb2ludHMgPj0gdGhpcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuc3VuayA9IHRydWU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaXNTdW5rKCkge1xuICAgIHJldHVybiB0aGlzLnN1bms7XG4gIH1cbn1cblxuY2xhc3MgR2FtZUJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zaGlwcyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDEwIH0sICgpID0+IEFycmF5KDEwKS5maWxsKDApKTtcbiAgICB0aGlzLm51bWJlck9mU3Vua1NoaXBzID0gMDtcbiAgfVxuICBcbiAgYWRkU2hpcChzaGlwLCBheCwgYXksIGF4aXMpIHtcbiAgICBpZihheGlzID09PSAndmVydGljYWwnKSB7XG4gICAgICBpZihheSArIHNoaXAubGVuZ3RoID4gMTApIHJldHVybiBmYWxzZTtcbiAgICAgIGZvciAobGV0IGkgPSBheTsgaSA8IGF5ICsgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZih0aGlzLnNoaXBzW2F4XVtpXSAhPT0gMCkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IGF5OyBpIDwgYXkgKyBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMuc2hpcHNbYXhdW2ldID0gc2hpcDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gXG4gICAgXG4gICAgZWxzZSBpZihheGlzID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIGlmKGF4ICsgc2hpcC5sZW5ndGggPiAxMCkgcmV0dXJuIGZhbHNlO1xuICAgICAgZm9yIChsZXQgaSA9IGF4OyBpIDwgYXggKyBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKHRoaXMuc2hpcHNbaV1bYXldICE9PSAwKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gYXg7IGkgPCBheCArIHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5zaGlwc1tpXVtheV0gPSBzaGlwO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJlY2l2ZUF0dGFjayh4LCB5KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5zaGlwc1t4XVt5XTtcbiAgICBpZiAodGFyZ2V0ICE9PSAwICYmIHRhcmdldCAhPT0gMSkge1xuICAgICAgaWYodGFyZ2V0LmhpdCgpKSB0aGlzLm51bWJlck9mU3Vua1NoaXBzKys7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZih0YXJnZXQgPT09IDApIHtcbiAgICAgIHRoaXMuc2hpcHNbeF1beV0gPSAxOyAvLyBNYXJrIGFzIG1pc3NcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgYWxsU3VuaygpIHtcbiAgICByZXR1cm4gdGhpcy5udW1iZXJPZlN1bmtTaGlwcyA9PT0gNTsgLy8gQXNzdW1pbmcgdGhlcmUgYXJlIDUgc2hpcHMgaW4gdG90YWxcbiAgfVxufVxuXG5jbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKHR5cGUsIGdhbWVCb2FyZCkge1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLmdhbWVCb2FyZCA9IGdhbWVCb2FyZDtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0geyBTaGlwLCBHYW1lQm9hcmQsIFBsYXllciB9OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuY29uc3Qge2xvYWR9ID0gcmVxdWlyZSgnLi9nYW1lJyk7XG5jb25zb2xlLmxvZyhcIkhlbGxvIFdvcmxkIVwiKTtcbmxvYWQoKTtcblxuLy8gY29uc3Qgc3VtID0gcmVxdWlyZSgnLi9zdW0nKTtcbi8vIG1vZHVsZS5leHBvcnRzID0gc3VtOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==