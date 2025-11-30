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
}

.cell.disabled::after {
  pointer-events: none;
  opacity: 0.6;
  cursor: not-allowed;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Orbitron\", monospace;\n}\n\nbody {\n  background: radial-gradient(circle at center, #001122, #000811);\n  color: #0af;\n  min-height: 100vh;\n  padding: 20px;\n  overflow-x: hidden;\n}\n\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\nheader {\n  text-align: center;\n  padding: 20px 0;\n  margin-bottom: 30px;\n  position: relative;\n}\n\nh1 {\n  font-size: 3.2rem;\n  text-shadow: 0 0 10px #0af, 0 0 20px #0af;\n  margin-bottom: 10px;\n  letter-spacing: 3px;\n  background: linear-gradient(to right, #0af, #0ff);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n}\n\n.game-status {\n  font-size: 1.2rem;\n  background-color: rgba(0, 20, 40, 0.7);\n  padding: 10px 20px;\n  border-radius: 10px;\n  display: inline-block;\n  margin-bottom: 20px;\n  border: 1px solid #0af;\n  box-shadow: 0 0 10px rgba(0, 170, 255, 0.5);\n  text-shadow: 0 0 5px #0af;\n}\n\n.game-boards {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 30px;\n}\n\n.board-container {\n  flex: 1;\n  min-width: 300px;\n  background: radial-gradient(\n    circle at center,\n    rgba(0, 30, 60, 0.8),\n    rgba(0, 10, 30, 0.9)\n  );\n  border-radius: 10px;\n  padding: 20px;\n  box-shadow: 0 0 20px rgba(0, 170, 255, 0.3);\n  backdrop-filter: blur(5px);\n  border: 1px solid #0af;\n  position: relative;\n  overflow: hidden;\n}\n\n.board-container::before {\n  content: \"\";\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  background: conic-gradient(\n    transparent,\n    rgba(0, 170, 255, 0.1),\n    transparent 30%\n  );\n  animation: rotate 10s linear infinite;\n}\n\n@keyframes rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.board-title {\n  text-align: center;\n  margin-bottom: 15px;\n  font-size: 1.5rem;\n  color: #0ff;\n  text-shadow: 0 0 10px #0ff;\n  position: relative;\n  z-index: 1;\n}\n\n.game-board {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  gap: 2px;\n  width: 100%;\n  aspect-ratio: 1 / 1;\n  margin: 0 auto;\n  border: 2px solid #0af;\n  background-color: rgba(0, 10, 30, 0.7);\n  border-radius: 5px;\n  overflow: hidden;\n  position: relative;\n  z-index: 1;\n}\n\n.game-board::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: radial-gradient(\n      circle at center,\n      transparent 70%,\n      rgba(0, 170, 255, 0.1) 100%\n    ),\n    repeating-linear-gradient(\n      0deg,\n      transparent,\n      transparent 9.5%,\n      rgba(0, 170, 255, 0.1) 10%\n    ),\n    repeating-linear-gradient(\n      90deg,\n      transparent,\n      transparent 9.5%,\n      rgba(0, 170, 255, 0.1) 10%\n    );\n  pointer-events: none;\n}\n\n.cell {\n  background-color: rgba(0, 20, 40, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n  cursor: pointer;\n  position: relative;\n  border: 1px solid rgba(0, 170, 255, 0.2);\n}\n\n.initial-board .cell:hover {\n  background-color: rgba(0, 100, 200, 0.5);\n  box-shadow: 0 0 10px rgba(0, 170, 255, 0.5);\n}\n\n.player-board .cell:hover {\n  background-color: rgba(0, 100, 200, 0.5);\n  box-shadow: 0 0 10px rgba(0, 170, 255, 0.5);\n}\n\n.computer-board .cell:hover {\n  background-color: rgba(0, 100, 200, 0.5);\n  box-shadow: 0 0 10px rgba(0, 170, 255, 0.5);\n}\n\n.cell.hit::after {\n  content: \"✕\";\n  color: #f00;\n  font-size: 1.5rem;\n  font-weight: bold;\n  text-shadow: 0 0 10px #f00;\n  animation: pulse 1s infinite;\n}\n\n.cell.miss::after {\n  content: \"•\";\n  color: #888;\n  font-size: 1.8rem;\n  text-shadow: 0 0 5px #888;\n}\n\n.cell.ship {\n  background-color: rgba(0, 100, 0, 0.5);\n  box-shadow: inset 0 0 10px rgba(0, 255, 0, 0.3);\n}\n\n.cell.ship.hit {\n  background-color: rgba(100, 0, 0, 0.7);\n  box-shadow: inset 0 0 10px rgba(255, 0, 0, 0.5);\n}\n\n@keyframes pulse {\n  0% {\n    opacity: 0.7;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0.7;\n  }\n}\n\n.coordinates {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 5px;\n  padding: 0 5px;\n}\n\n.coordinate {\n  width: calc(100% / 10);\n  text-align: center;\n  font-weight: bold;\n  color: #0ff;\n  text-shadow: 0 0 5px #0ff;\n}\n\n.controls {\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n  margin-top: 30px;\n  flex-wrap: wrap;\n}\n\nbutton {\n  padding: 12px 25px;\n  font-size: 1rem;\n  background: linear-gradient(to bottom, #003366, #001122);\n  color: #0ff;\n  border: 1px solid #0af;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-weight: bold;\n  box-shadow: 0 0 10px rgba(0, 170, 255, 0.5);\n  text-shadow: 0 0 5px #0af;\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n}\n\nbutton::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(\n    90deg,\n    transparent,\n    rgba(0, 170, 255, 0.4),\n    transparent\n  );\n  transition: 0.5s;\n  z-index: -1;\n}\n\nbutton:hover {\n  box-shadow: 0 0 20px rgba(0, 170, 255, 0.8);\n  color: #fff;\n}\n\nbutton:hover::before {\n  left: 100%;\n}\n\nbutton:active {\n  transform: translateY(2px);\n}\n\n.instructions {\n  max-width: 800px;\n  margin: 30px auto;\n  background: radial-gradient(\n    circle at center,\n    rgba(0, 30, 60, 0.8),\n    rgba(0, 10, 30, 0.9)\n  );\n  padding: 20px;\n  border-radius: 10px;\n  line-height: 1.6;\n  border: 1px solid #0af;\n  box-shadow: 0 0 20px rgba(0, 170, 255, 0.3);\n  position: relative;\n  z-index: 1;\n}\n\n.instructions h2 {\n  color: #0ff;\n  margin-bottom: 15px;\n  text-align: center;\n  text-shadow: 0 0 10px #0ff;\n}\n\n.instructions ul {\n  margin-left: 20px;\n}\n\n.instructions li {\n  margin-bottom: 8px;\n  text-shadow: 0 0 5px #0af;\n}\n\n.radar-sweep {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  pointer-events: none;\n  z-index: -1;\n  opacity: 0.1;\n}\n\n.radar-sweep::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: conic-gradient(\n    from 0deg,\n    transparent 0%,\n    rgba(0, 255, 255, 0.1) 10%,\n    transparent 20%\n  );\n  animation: radar-sweep 4s linear infinite;\n}\n\n@keyframes radar-sweep {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@media (max-width: 768px) {\n  .game-boards {\n    flex-direction: column;\n  }\n\n  .board-container {\n    width: 100%;\n  }\n\n  h1 {\n    font-size: 2.5rem;\n  }\n}\n\n.initial-ui {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 30px;\n  margin-top: 10px;\n}\n\n.initial-board {\n  height: 450px;\n  width: 450px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;  \n}\n\n.cell.disabled::after {\n  pointer-events: none;\n  opacity: 0.6;\n  cursor: not-allowed;\n}"],"sourceRoot":""}]);
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

        const playerCells = document.querySelectorAll('.player-board .cell');
        const targetCell = Array.from(playerCells).find(cell => parseInt(cell.dataset.row) === x && parseInt(cell.dataset.col) === y);

        if (!targetCell.classList.contains('hit') && !targetCell.classList.contains('miss') && !targetCell.classList.contains('disabled')) {
            if (targetCell.classList.contains('ship') && playerGameBoard.reciveAttack(x, y)) {
                targetCell.classList.add('hit');
                gameStatus.textContent = "ENEMY STRIKE! YOUR VESSEL HAS BEEN HIT!";
                if(playerGameBoard.allSunk()) {
                    gameStatus.textContent = "ALL YOUR VESSELS HAVE BEEN DESTROYED - DEFEAT!";
                    playerCells.forEach(cell => cell.classList.add('disabled'));
                    document.querySelectorAll('.computer-board .cell').forEach(cell => cell.classList.add('disabled'));
                    return;
                }
            } else {
                targetCell.classList.add('miss');
                gameStatus.textContent = "ENEMY MISSED! YOUR VESSEL IS SAFE!";
            }
        } else {
            computerTurnToShoot(); // Retry if the cell was already targeted
        }

    }


    initializeGame();

    // Add event listeners for game controls
    startBtn.addEventListener('click', function () {
        gameStatus.textContent = "RADAR ACTIVE - ENGAGE ENEMY TARGETS";
        startBtn.disabled = true;

        // Add click handlers to computer board for gameplay
        const computerCells = document.querySelectorAll('.computer-board .cell');
        
        let boardLocked = false;
        function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }
        
        computerCells.forEach(cell => {
            cell.addEventListener('click', function () {
                if (!this.classList.contains('hit') && !this.classList.contains('miss') && !this.classList.contains('disabled')) {
                    if (this.classList.contains('ship') && computerGameBoard.reciveAttack(parseInt(this.dataset.row), parseInt(this.dataset.col))) {
                        this.classList.add('hit');
                        gameStatus.textContent = "DIRECT HIT! ENEMY VESSEL DAMAGED!";
                        if(computerGameBoard.allSunk()) {
                            gameStatus.textContent = "ALL ENEMY VESSELS DESTROYED - VICTORY ACHIEVED!";
                            computerCells.forEach(cell => cell.classList.add('disabled'));
                            document.querySelectorAll('.player-board .cell').forEach(cell => cell.classList.add('disabled'));
                            return;
                        }
                    } else {
                        this.classList.add('miss');
                        gameStatus.textContent = "TARGET MISSED - RECALIBRATING";
                    }
                    setTimeout(computerTurnToShoot, 1000);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8saUZBQWlGLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksU0FBUyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFFBQVEsS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsb0JBQW9CLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssVUFB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Oi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6IFwiT3JiaXRyb25cIiwgbW9ub3NwYWNlO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCBjZW50ZXIsICMwMDExMjIsICMwMDA4MTEpO1xuICBjb2xvcjogIzBhZjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDMuMnJlbTtcbiAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4ICMwYWYsIDAgMCAyMHB4ICMwYWY7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzBhZiwgIzBmZik7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmdhbWUtc3RhdHVzIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjAsIDQwLCAwLjcpO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzBhZjtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAxNzAsIDI1NSwgMC41KTtcbiAgdGV4dC1zaGFkb3c6IDAgMCA1cHggIzBhZjtcbn1cblxuLmdhbWUtYm9hcmRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMzBweDtcbn1cblxuLmJvYXJkLWNvbnRhaW5lciB7XG4gIGZsZXg6IDE7XG4gIG1pbi13aWR0aDogMzAwcHg7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChcbiAgICBjaXJjbGUgYXQgY2VudGVyLFxuICAgIHJnYmEoMCwgMzAsIDYwLCAwLjgpLFxuICAgIHJnYmEoMCwgMTAsIDMwLCAwLjkpXG4gICk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMCwgMTcwLCAyNTUsIDAuMyk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMGFmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5ib2FyZC1jb250YWluZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNTAlO1xuICBsZWZ0OiAtNTAlO1xuICB3aWR0aDogMjAwJTtcbiAgaGVpZ2h0OiAyMDAlO1xuICBiYWNrZ3JvdW5kOiBjb25pYy1ncmFkaWVudChcbiAgICB0cmFuc3BhcmVudCxcbiAgICByZ2JhKDAsIDE3MCwgMjU1LCAwLjEpLFxuICAgIHRyYW5zcGFyZW50IDMwJVxuICApO1xuICBhbmltYXRpb246IHJvdGF0ZSAxMHMgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cblxuLmJvYXJkLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY29sb3I6ICMwZmY7XG4gIHRleHQtc2hhZG93OiAwIDAgMTBweCAjMGZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5nYW1lLWJvYXJkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xuICBnYXA6IDJweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFzcGVjdC1yYXRpbzogMSAvIDE7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMGFmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEwLCAzMCwgMC43KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5nYW1lLWJvYXJkOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KFxuICAgICAgY2lyY2xlIGF0IGNlbnRlcixcbiAgICAgIHRyYW5zcGFyZW50IDcwJSxcbiAgICAgIHJnYmEoMCwgMTcwLCAyNTUsIDAuMSkgMTAwJVxuICAgICksXG4gICAgcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudChcbiAgICAgIDBkZWcsXG4gICAgICB0cmFuc3BhcmVudCxcbiAgICAgIHRyYW5zcGFyZW50IDkuNSUsXG4gICAgICByZ2JhKDAsIDE3MCwgMjU1LCAwLjEpIDEwJVxuICAgICksXG4gICAgcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudChcbiAgICAgIDkwZGVnLFxuICAgICAgdHJhbnNwYXJlbnQsXG4gICAgICB0cmFuc3BhcmVudCA5LjUlLFxuICAgICAgcmdiYSgwLCAxNzAsIDI1NSwgMC4xKSAxMCVcbiAgICApO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmNlbGwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDIwLCA0MCwgMC43KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDE3MCwgMjU1LCAwLjIpO1xufVxuXG4uaW5pdGlhbC1ib2FyZCAuY2VsbDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTAwLCAyMDAsIDAuNSk7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMTcwLCAyNTUsIDAuNSk7XG59XG5cbi5wbGF5ZXItYm9hcmQgLmNlbGw6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEwMCwgMjAwLCAwLjUpO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDE3MCwgMjU1LCAwLjUpO1xufVxuXG4uY29tcHV0ZXItYm9hcmQgLmNlbGw6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEwMCwgMjAwLCAwLjUpO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDE3MCwgMjU1LCAwLjUpO1xufVxuXG4uY2VsbC5oaXQ6OmFmdGVyIHtcbiAgY29udGVudDogXCLinJVcIjtcbiAgY29sb3I6ICNmMDA7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4ICNmMDA7XG4gIGFuaW1hdGlvbjogcHVsc2UgMXMgaW5maW5pdGU7XG59XG5cbi5jZWxsLm1pc3M6OmFmdGVyIHtcbiAgY29udGVudDogXCLigKJcIjtcbiAgY29sb3I6ICM4ODg7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICB0ZXh0LXNoYWRvdzogMCAwIDVweCAjODg4O1xufVxuXG4uY2VsbC5zaGlwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMDAsIDAsIDAuNSk7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4IHJnYmEoMCwgMjU1LCAwLCAwLjMpO1xufVxuXG4uY2VsbC5zaGlwLmhpdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAwLCAwLCAwLCAwLjcpO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTBweCByZ2JhKDI1NSwgMCwgMCwgMC41KTtcbn1cblxuQGtleWZyYW1lcyBwdWxzZSB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxufVxuXG4uY29vcmRpbmF0ZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgcGFkZGluZzogMCA1cHg7XG59XG5cbi5jb29yZGluYXRlIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAvIDEwKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwZmY7XG4gIHRleHQtc2hhZG93OiAwIDAgNXB4ICMwZmY7XG59XG5cbi5jb250cm9scyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuYnV0dG9uIHtcbiAgcGFkZGluZzogMTJweCAyNXB4O1xuICBmb250LXNpemU6IDFyZW07XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMwMDMzNjYsICMwMDExMjIpO1xuICBjb2xvcjogIzBmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzBhZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDE3MCwgMjU1LCAwLjUpO1xuICB0ZXh0LXNoYWRvdzogMCAwIDVweCAjMGFmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHotaW5kZXg6IDE7XG59XG5cbmJ1dHRvbjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IC0xMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgOTBkZWcsXG4gICAgdHJhbnNwYXJlbnQsXG4gICAgcmdiYSgwLCAxNzAsIDI1NSwgMC40KSxcbiAgICB0cmFuc3BhcmVudFxuICApO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB6LWluZGV4OiAtMTtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgwLCAxNzAsIDI1NSwgMC44KTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbmJ1dHRvbjpob3Zlcjo6YmVmb3JlIHtcbiAgbGVmdDogMTAwJTtcbn1cblxuYnV0dG9uOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpO1xufVxuXG4uaW5zdHJ1Y3Rpb25zIHtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgbWFyZ2luOiAzMHB4IGF1dG87XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChcbiAgICBjaXJjbGUgYXQgY2VudGVyLFxuICAgIHJnYmEoMCwgMzAsIDYwLCAwLjgpLFxuICAgIHJnYmEoMCwgMTAsIDMwLCAwLjkpXG4gICk7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwYWY7XG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMCwgMTcwLCAyNTUsIDAuMyk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cblxuLmluc3RydWN0aW9ucyBoMiB7XG4gIGNvbG9yOiAjMGZmO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtc2hhZG93OiAwIDAgMTBweCAjMGZmO1xufVxuXG4uaW5zdHJ1Y3Rpb25zIHVsIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5pbnN0cnVjdGlvbnMgbGkge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIHRleHQtc2hhZG93OiAwIDAgNXB4ICMwYWY7XG59XG5cbi5yYWRhci1zd2VlcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB6LWluZGV4OiAtMTtcbiAgb3BhY2l0eTogMC4xO1xufVxuXG4ucmFkYXItc3dlZXA6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBjb25pYy1ncmFkaWVudChcbiAgICBmcm9tIDBkZWcsXG4gICAgdHJhbnNwYXJlbnQgMCUsXG4gICAgcmdiYSgwLCAyNTUsIDI1NSwgMC4xKSAxMCUsXG4gICAgdHJhbnNwYXJlbnQgMjAlXG4gICk7XG4gIGFuaW1hdGlvbjogcmFkYXItc3dlZXAgNHMgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHJhZGFyLXN3ZWVwIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5nYW1lLWJvYXJkcyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC5ib2FyZC1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICB9XG59XG5cbi5pbml0aWFsLXVpIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMzBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmluaXRpYWwtYm9hcmQge1xuICBoZWlnaHQ6IDQ1MHB4O1xuICB3aWR0aDogNDUwcHg7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICBcbn1cblxuLmNlbGwuZGlzYWJsZWQ6OmFmdGVyIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIG9wYWNpdHk6IDAuNjtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsK0RBQStEO0VBQy9ELFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlDQUF5QztFQUN6QyxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGlEQUFpRDtFQUNqRCw2QkFBNkI7RUFDN0IscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixzQ0FBc0M7RUFDdEMsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QiwyQ0FBMkM7RUFDM0MseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2YsU0FBUztBQUNYOztBQUVBO0VBQ0UsT0FBTztFQUNQLGdCQUFnQjtFQUNoQjs7OztHQUlDO0VBQ0QsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiwyQ0FBMkM7RUFDM0MsMEJBQTBCO0VBQzFCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1o7Ozs7R0FJQztFQUNELHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztFQUNuQyxRQUFRO0VBQ1IsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLHNDQUFzQztFQUN0QyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVDs7Ozs7Ozs7Ozs7Ozs7OztLQWdCRztFQUNILG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLHdDQUF3QztFQUN4QywyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsMEJBQTBCO0VBQzFCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QywrQ0FBK0M7QUFDakQ7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsK0NBQStDO0FBQ2pEOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsU0FBUztFQUNULGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZix3REFBd0Q7RUFDeEQsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsMkNBQTJDO0VBQzNDLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaOzs7OztHQUtDO0VBQ0QsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDJDQUEyQztFQUMzQyxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCOzs7O0dBSUM7RUFDRCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsMkNBQTJDO0VBQzNDLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsWUFBWTtFQUNaLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaOzs7OztHQUtDO0VBQ0QseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7O0VBRVosYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcmJpdHJvblxcXCIsIG1vbm9zcGFjZTtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IGNlbnRlciwgIzAwMTEyMiwgIzAwMDgxMSk7XFxuICBjb2xvcjogIzBhZjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMjBweCAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAzLjJyZW07XFxuICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggIzBhZiwgMCAwIDIwcHggIzBhZjtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBsZXR0ZXItc3BhY2luZzogM3B4O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMGFmLCAjMGZmKTtcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uZ2FtZS1zdGF0dXMge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDIwLCA0MCwgMC43KTtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzBhZjtcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMTcwLCAyNTUsIDAuNSk7XFxuICB0ZXh0LXNoYWRvdzogMCAwIDVweCAjMGFmO1xcbn1cXG5cXG4uZ2FtZS1ib2FyZHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogMzBweDtcXG59XFxuXFxuLmJvYXJkLWNvbnRhaW5lciB7XFxuICBmbGV4OiAxO1xcbiAgbWluLXdpZHRoOiAzMDBweDtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChcXG4gICAgY2lyY2xlIGF0IGNlbnRlcixcXG4gICAgcmdiYSgwLCAzMCwgNjAsIDAuOCksXFxuICAgIHJnYmEoMCwgMTAsIDMwLCAwLjkpXFxuICApO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDAsIDE3MCwgMjU1LCAwLjMpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMGFmO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmJvYXJkLWNvbnRhaW5lcjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtNTAlO1xcbiAgbGVmdDogLTUwJTtcXG4gIHdpZHRoOiAyMDAlO1xcbiAgaGVpZ2h0OiAyMDAlO1xcbiAgYmFja2dyb3VuZDogY29uaWMtZ3JhZGllbnQoXFxuICAgIHRyYW5zcGFyZW50LFxcbiAgICByZ2JhKDAsIDE3MCwgMjU1LCAwLjEpLFxcbiAgICB0cmFuc3BhcmVudCAzMCVcXG4gICk7XFxuICBhbmltYXRpb246IHJvdGF0ZSAxMHMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuXFxuLmJvYXJkLXRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGNvbG9yOiAjMGZmO1xcbiAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4ICMwZmY7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uZ2FtZS1ib2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdhcDogMnB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMGFmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMCwgMzAsIDAuNyk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLmdhbWUtYm9hcmQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChcXG4gICAgICBjaXJjbGUgYXQgY2VudGVyLFxcbiAgICAgIHRyYW5zcGFyZW50IDcwJSxcXG4gICAgICByZ2JhKDAsIDE3MCwgMjU1LCAwLjEpIDEwMCVcXG4gICAgKSxcXG4gICAgcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudChcXG4gICAgICAwZGVnLFxcbiAgICAgIHRyYW5zcGFyZW50LFxcbiAgICAgIHRyYW5zcGFyZW50IDkuNSUsXFxuICAgICAgcmdiYSgwLCAxNzAsIDI1NSwgMC4xKSAxMCVcXG4gICAgKSxcXG4gICAgcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudChcXG4gICAgICA5MGRlZyxcXG4gICAgICB0cmFuc3BhcmVudCxcXG4gICAgICB0cmFuc3BhcmVudCA5LjUlLFxcbiAgICAgIHJnYmEoMCwgMTcwLCAyNTUsIDAuMSkgMTAlXFxuICAgICk7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmNlbGwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyMCwgNDAsIDAuNyk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMTcwLCAyNTUsIDAuMik7XFxufVxcblxcbi5pbml0aWFsLWJvYXJkIC5jZWxsOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTAwLCAyMDAsIDAuNSk7XFxuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDE3MCwgMjU1LCAwLjUpO1xcbn1cXG5cXG4ucGxheWVyLWJvYXJkIC5jZWxsOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTAwLCAyMDAsIDAuNSk7XFxuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDE3MCwgMjU1LCAwLjUpO1xcbn1cXG5cXG4uY29tcHV0ZXItYm9hcmQgLmNlbGw6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMDAsIDIwMCwgMC41KTtcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMTcwLCAyNTUsIDAuNSk7XFxufVxcblxcbi5jZWxsLmhpdDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIuKclVxcXCI7XFxuICBjb2xvcjogI2YwMDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggI2YwMDtcXG4gIGFuaW1hdGlvbjogcHVsc2UgMXMgaW5maW5pdGU7XFxufVxcblxcbi5jZWxsLm1pc3M6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCLigKJcXFwiO1xcbiAgY29sb3I6ICM4ODg7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIHRleHQtc2hhZG93OiAwIDAgNXB4ICM4ODg7XFxufVxcblxcbi5jZWxsLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMDAsIDAsIDAuNSk7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTBweCByZ2JhKDAsIDI1NSwgMCwgMC4zKTtcXG59XFxuXFxuLmNlbGwuc2hpcC5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDAsIDAsIDAsIDAuNyk7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTBweCByZ2JhKDI1NSwgMCwgMCwgMC41KTtcXG59XFxuXFxuQGtleWZyYW1lcyBwdWxzZSB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDAuNztcXG4gIH1cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMC43O1xcbiAgfVxcbn1cXG5cXG4uY29vcmRpbmF0ZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIHBhZGRpbmc6IDAgNXB4O1xcbn1cXG5cXG4uY29vcmRpbmF0ZSB7XFxuICB3aWR0aDogY2FsYygxMDAlIC8gMTApO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogIzBmZjtcXG4gIHRleHQtc2hhZG93OiAwIDAgNXB4ICMwZmY7XFxufVxcblxcbi5jb250cm9scyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgcGFkZGluZzogMTJweCAyNXB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzAwMzM2NiwgIzAwMTEyMik7XFxuICBjb2xvcjogIzBmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwYWY7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDE3MCwgMjU1LCAwLjUpO1xcbiAgdGV4dC1zaGFkb3c6IDAgMCA1cHggIzBhZjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG5idXR0b246OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IC0xMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIDkwZGVnLFxcbiAgICB0cmFuc3BhcmVudCxcXG4gICAgcmdiYSgwLCAxNzAsIDI1NSwgMC40KSxcXG4gICAgdHJhbnNwYXJlbnRcXG4gICk7XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgei1pbmRleDogLTE7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDAsIDE3MCwgMjU1LCAwLjgpO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbmJ1dHRvbjpob3Zlcjo6YmVmb3JlIHtcXG4gIGxlZnQ6IDEwMCU7XFxufVxcblxcbmJ1dHRvbjphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XFxufVxcblxcbi5pbnN0cnVjdGlvbnMge1xcbiAgbWF4LXdpZHRoOiA4MDBweDtcXG4gIG1hcmdpbjogMzBweCBhdXRvO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KFxcbiAgICBjaXJjbGUgYXQgY2VudGVyLFxcbiAgICByZ2JhKDAsIDMwLCA2MCwgMC44KSxcXG4gICAgcmdiYSgwLCAxMCwgMzAsIDAuOSlcXG4gICk7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMGFmO1xcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgwLCAxNzAsIDI1NSwgMC4zKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5pbnN0cnVjdGlvbnMgaDIge1xcbiAgY29sb3I6ICMwZmY7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4ICMwZmY7XFxufVxcblxcbi5pbnN0cnVjdGlvbnMgdWwge1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxufVxcblxcbi5pbnN0cnVjdGlvbnMgbGkge1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgdGV4dC1zaGFkb3c6IDAgMCA1cHggIzBhZjtcXG59XFxuXFxuLnJhZGFyLXN3ZWVwIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB6LWluZGV4OiAtMTtcXG4gIG9wYWNpdHk6IDAuMTtcXG59XFxuXFxuLnJhZGFyLXN3ZWVwOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiBjb25pYy1ncmFkaWVudChcXG4gICAgZnJvbSAwZGVnLFxcbiAgICB0cmFuc3BhcmVudCAwJSxcXG4gICAgcmdiYSgwLCAyNTUsIDI1NSwgMC4xKSAxMCUsXFxuICAgIHRyYW5zcGFyZW50IDIwJVxcbiAgKTtcXG4gIGFuaW1hdGlvbjogcmFkYXItc3dlZXAgNHMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJhZGFyLXN3ZWVwIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAuZ2FtZS1ib2FyZHMge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLmJvYXJkLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgaDEge1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gIH1cXG59XFxuXFxuLmluaXRpYWwtdWkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDMwcHg7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4uaW5pdGlhbC1ib2FyZCB7XFxuICBoZWlnaHQ6IDQ1MHB4O1xcbiAgd2lkdGg6IDQ1MHB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgIFxcbn1cXG5cXG4uY2VsbC5kaXNhYmxlZDo6YWZ0ZXIge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBvcGFjaXR5OiAwLjY7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgeyBTaGlwLCBHYW1lQm9hcmQsIFBsYXllciB9ID0gcmVxdWlyZSgnLi9zaGlwJyk7XG5cbmZ1bmN0aW9uIHBsYWNlU2hpcHNSYW5kb21seShnYW1lQm9hcmQpIHtcbiAgICBjb25zdCBzaGlwTGVuZ3RocyA9IFs1LCA0LCAzLCAzLCAyXTtcbiAgICBzaGlwTGVuZ3Rocy5mb3JFYWNoKGxlbmd0aCA9PiB7XG4gICAgICAgIGxldCBwbGFjZWQgPSBmYWxzZTtcbiAgICAgICAgd2hpbGUgKCFwbGFjZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGF4aXMgPSBNYXRoLnJhbmRvbSgpID4gMC41ID8gJ2hvcml6b250YWwnIDogJ3ZlcnRpY2FsJztcbiAgICAgICAgICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKFwiUmFuZG9tU2hpcFwiLCBsZW5ndGgpO1xuICAgICAgICAgICAgcGxhY2VkID0gZ2FtZUJvYXJkLmFkZFNoaXAoc2hpcCwgeCwgeSwgYXhpcyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gbG9hZCgpe1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBwbGFjaW5nQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxhY2luZy1ib2FyZCcpO1xuICAgIGNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1ib2FyZCcpO1xuICAgIGNvbnN0IGNvbXB1dGVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcHV0ZXItYm9hcmQnKTtcbiAgICBjb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1idG4nKTtcbiAgICBjb25zdCByZXNldEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNldC1idG4nKTtcbiAgICBjb25zdCByYW5kb21CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFuZG9tLWJ0bicpO1xuICAgIGNvbnN0IGdhbWVTdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1zdGF0dXMnKTtcbiAgICBsZXQgcGxheWVyR2FtZUJvYXJkID0gbnVsbDtcbiAgICBsZXQgY29tcHV0ZXJHYW1lQm9hcmQgPSBudWxsO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlQm9hcmQoYm9hcmRFbGVtZW50LCByb2xlKSB7XG4gICAgICAgIGJvYXJkRWxlbWVudC5pbm5lckhUTUwgPSAnJztcblxuICAgICAgICBjb25zdCBuZXdCb2FyZCA9IG5ldyBHYW1lQm9hcmQoKTtcbiAgICAgICAgcGxhY2VTaGlwc1JhbmRvbWx5KG5ld0JvYXJkKTtcblxuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDEwOyBjb2wrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTmFtZSA9ICdjZWxsJztcbiAgICAgICAgICAgICAgICBjZWxsLmRhdGFzZXQucm93ID0gcm93O1xuICAgICAgICAgICAgICAgIGNlbGwuZGF0YXNldC5jb2wgPSBjb2w7XG5cbiAgICAgICAgICAgICAgICBpZiAocm9sZSA9PT0gJ3BsYXllcicpIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdwbGF5ZXInKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NvbXB1dGVyJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hpcCA9IG5ld0JvYXJkLnNoaXBzW3Jvd11bY29sXTtcbiAgICAgICAgICAgICAgICBpZiAoc2hpcCAhPT0gMCAmJiBzaGlwICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJvYXJkRWxlbWVudC5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXdCb2FyZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0aWFsaXplR2FtZSgpIHtcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBwbGFjaW5nIGJvYXJkIGFuZCBhc3NpZ24gbmV3IEdhbWVCb2FyZCBpbnN0YW5jZXNcbiAgICAgICAgcGxheWVyR2FtZUJvYXJkID0gY3JlYXRlQm9hcmQocGxheWVyQm9hcmQsICdwbGF5ZXInKTtcbiAgICAgICAgY29tcHV0ZXJHYW1lQm9hcmQgPSBjcmVhdGVCb2FyZChjb21wdXRlckJvYXJkLCAnY29tcHV0ZXInKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvb3QoKSB7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb21wdXRlclR1cm5Ub1Nob290KCkge1xuICAgICAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXG4gICAgICAgIGNvbnN0IHBsYXllckNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllci1ib2FyZCAuY2VsbCcpO1xuICAgICAgICBjb25zdCB0YXJnZXRDZWxsID0gQXJyYXkuZnJvbShwbGF5ZXJDZWxscykuZmluZChjZWxsID0+IHBhcnNlSW50KGNlbGwuZGF0YXNldC5yb3cpID09PSB4ICYmIHBhcnNlSW50KGNlbGwuZGF0YXNldC5jb2wpID09PSB5KTtcblxuICAgICAgICBpZiAoIXRhcmdldENlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaXQnKSAmJiAhdGFyZ2V0Q2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ21pc3MnKSAmJiAhdGFyZ2V0Q2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpIHtcbiAgICAgICAgICAgIGlmICh0YXJnZXRDZWxsLmNsYXNzTGlzdC5jb250YWlucygnc2hpcCcpICYmIHBsYXllckdhbWVCb2FyZC5yZWNpdmVBdHRhY2soeCwgeSkpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRDZWxsLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgICAgICAgICAgIGdhbWVTdGF0dXMudGV4dENvbnRlbnQgPSBcIkVORU1ZIFNUUklLRSEgWU9VUiBWRVNTRUwgSEFTIEJFRU4gSElUIVwiO1xuICAgICAgICAgICAgICAgIGlmKHBsYXllckdhbWVCb2FyZC5hbGxTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZVN0YXR1cy50ZXh0Q29udGVudCA9IFwiQUxMIFlPVVIgVkVTU0VMUyBIQVZFIEJFRU4gREVTVFJPWUVEIC0gREVGRUFUIVwiO1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJDZWxscy5mb3JFYWNoKGNlbGwgPT4gY2VsbC5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpKTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbXB1dGVyLWJvYXJkIC5jZWxsJykuZm9yRWFjaChjZWxsID0+IGNlbGwuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhcmdldENlbGwuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgICAgICAgICAgICAgIGdhbWVTdGF0dXMudGV4dENvbnRlbnQgPSBcIkVORU1ZIE1JU1NFRCEgWU9VUiBWRVNTRUwgSVMgU0FGRSFcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbXB1dGVyVHVyblRvU2hvb3QoKTsgLy8gUmV0cnkgaWYgdGhlIGNlbGwgd2FzIGFscmVhZHkgdGFyZ2V0ZWRcbiAgICAgICAgfVxuXG4gICAgfVxuXG5cbiAgICBpbml0aWFsaXplR2FtZSgpO1xuXG4gICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVycyBmb3IgZ2FtZSBjb250cm9sc1xuICAgIHN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBnYW1lU3RhdHVzLnRleHRDb250ZW50ID0gXCJSQURBUiBBQ1RJVkUgLSBFTkdBR0UgRU5FTVkgVEFSR0VUU1wiO1xuICAgICAgICBzdGFydEJ0bi5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICAgICAgLy8gQWRkIGNsaWNrIGhhbmRsZXJzIHRvIGNvbXB1dGVyIGJvYXJkIGZvciBnYW1lcGxheVxuICAgICAgICBjb25zdCBjb21wdXRlckNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbXB1dGVyLWJvYXJkIC5jZWxsJyk7XG4gICAgICAgIFxuICAgICAgICBsZXQgYm9hcmRMb2NrZWQgPSBmYWxzZTtcbiAgICAgICAgZnVuY3Rpb24gc2xlZXAobXMpIHsgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpOyB9XG4gICAgICAgIFxuICAgICAgICBjb21wdXRlckNlbGxzLmZvckVhY2goY2VsbCA9PiB7XG4gICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5jbGFzc0xpc3QuY29udGFpbnMoJ2hpdCcpICYmICF0aGlzLmNsYXNzTGlzdC5jb250YWlucygnbWlzcycpICYmICF0aGlzLmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAnKSAmJiBjb21wdXRlckdhbWVCb2FyZC5yZWNpdmVBdHRhY2socGFyc2VJbnQodGhpcy5kYXRhc2V0LnJvdyksIHBhcnNlSW50KHRoaXMuZGF0YXNldC5jb2wpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVTdGF0dXMudGV4dENvbnRlbnQgPSBcIkRJUkVDVCBISVQhIEVORU1ZIFZFU1NFTCBEQU1BR0VEIVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoY29tcHV0ZXJHYW1lQm9hcmQuYWxsU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZVN0YXR1cy50ZXh0Q29udGVudCA9IFwiQUxMIEVORU1ZIFZFU1NFTFMgREVTVFJPWUVEIC0gVklDVE9SWSBBQ0hJRVZFRCFcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wdXRlckNlbGxzLmZvckVhY2goY2VsbCA9PiBjZWxsLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5ZXItYm9hcmQgLmNlbGwnKS5mb3JFYWNoKGNlbGwgPT4gY2VsbC5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVTdGF0dXMudGV4dENvbnRlbnQgPSBcIlRBUkdFVCBNSVNTRUQgLSBSRUNBTElCUkFUSU5HXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChjb21wdXRlclR1cm5Ub1Nob290LCAxMDAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXNldEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaW5pdGlhbGl6ZUdhbWUoKTtcblxuICAgICAgICBnYW1lU3RhdHVzLnRleHRDb250ZW50ID0gXCJTWVNURU1TIFJFU0VUIC0gREVQTE9ZIFlPVVIgRkxFRVRcIjtcbiAgICAgICAgc3RhcnRCdG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9KTtcblxuICAgIC8vIHJhbmRvbUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgICAgY3JlYXRlQm9hcmQocGxheWVyQm9hcmQsIHRydWUpO1xuICAgIC8vICAgICBnYW1lU3RhdHVzLnRleHRDb250ZW50ID0gXCJSQU5ET00gREVQTE9ZTUVOVCBDT01QTEVURSAtIEFDVElWQVRFIFJBREFSXCI7XG4gICAgLy8gfSk7XG59KTtcbn1cbm1vZHVsZS5leHBvcnRzID0gIHtsb2FkLCBwbGFjZVNoaXBzUmFuZG9tbHl9O1xuXG5cblxuXG5cblxuXG5cblxuXG4vLyAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuLy8gICAgICAgPGhlYWRlcj5cbi8vICAgICAgICAgPGgxPkJBVFRMRVNISVA8L2gxPlxuLy8gICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FtZS1zdGF0dXNcIj5cbi8vICAgICAgICAgICBBQ1RJVkFURSBSQURBUiBTWVNURU1TIC0gREVQTE9ZIFlPVVIgRkxFRVRcbi8vICAgICAgICAgPC9kaXY+XG4vLyAgICAgICA8L2hlYWRlcj5cblxuLy8gICAgICAgPGRpdiBjbGFzcz1cImdhbWUtYm9hcmRzXCI+XG4vLyAgICAgICAgIDxkaXYgY2xhc3M9XCJib2FyZC1jb250YWluZXJcIj5cbi8vICAgICAgICAgICA8aDIgY2xhc3M9XCJib2FyZC10aXRsZVwiPkZSSUVORExZIEZMRUVUPC9oMj5cbi8vICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29vcmRpbmF0ZXNcIj5cbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb29yZGluYXRlXCI+QTwvZGl2PlxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvb3JkaW5hdGVcIj5CPC9kaXY+XG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29vcmRpbmF0ZVwiPkM8L2Rpdj5cbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb29yZGluYXRlXCI+RDwvZGl2PlxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvb3JkaW5hdGVcIj5FPC9kaXY+XG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29vcmRpbmF0ZVwiPkY8L2Rpdj5cbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb29yZGluYXRlXCI+RzwvZGl2PlxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvb3JkaW5hdGVcIj5IPC9kaXY+XG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29vcmRpbmF0ZVwiPkk8L2Rpdj5cbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb29yZGluYXRlXCI+SjwvZGl2PlxuLy8gICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgIDxkaXYgY2xhc3M9XCJnYW1lLWJvYXJkIHBsYXllci1ib2FyZFwiPlxuLy8gICAgICAgICAgICAgPCEtLSBQbGF5ZXIgYm9hcmQgY2VsbHMgd2lsbCBiZSBnZW5lcmF0ZWQgYnkgSmF2YVNjcmlwdCAtLT5cbi8vICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgPC9kaXY+XG5cbi8vICAgICAgICAgPGRpdiBjbGFzcz1cImJvYXJkLWNvbnRhaW5lclwiPlxuLy8gICAgICAgICAgIDxoMiBjbGFzcz1cImJvYXJkLXRpdGxlXCI+RU5FTVkgV0FURVJTPC9oMj5cbi8vICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29vcmRpbmF0ZXNcIj5cbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb29yZGluYXRlXCI+QTwvZGl2PlxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvb3JkaW5hdGVcIj5CPC9kaXY+XG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29vcmRpbmF0ZVwiPkM8L2Rpdj5cbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb29yZGluYXRlXCI+RDwvZGl2PlxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvb3JkaW5hdGVcIj5FPC9kaXY+XG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29vcmRpbmF0ZVwiPkY8L2Rpdj5cbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb29yZGluYXRlXCI+RzwvZGl2PlxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvb3JkaW5hdGVcIj5IPC9kaXY+XG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29vcmRpbmF0ZVwiPkk8L2Rpdj5cbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb29yZGluYXRlXCI+SjwvZGl2PlxuLy8gICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgIDxkaXYgY2xhc3M9XCJnYW1lLWJvYXJkIGNvbXB1dGVyLWJvYXJkXCI+XG4vLyAgICAgICAgICAgICA8IS0tIENvbXB1dGVyIGJvYXJkIGNlbGxzIHdpbGwgYmUgZ2VuZXJhdGVkIGJ5IEphdmFTY3JpcHQgLS0+XG4vLyAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgPC9kaXY+XG5cbi8vICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sc1wiPlxuLy8gICAgICAgICA8YnV0dG9uIGlkPVwic3RhcnQtYnRuXCI+QUNUSVZBVEUgUkFEQVI8L2J1dHRvbj5cbi8vICAgICAgICAgPGJ1dHRvbiBpZD1cInJlc2V0LWJ0blwiPlJFU0VUIFNZU1RFTVM8L2J1dHRvbj5cbi8vICAgICAgIDwvZGl2PlxuXG4vLyAgICAgICA8ZGl2IGNsYXNzPVwiaW5zdHJ1Y3Rpb25zXCI+XG4vLyAgICAgICAgIDxoMj5UQUNUSUNBTCBCUklFRklORzwvaDI+XG4vLyAgICAgICAgIDx1bD5cbi8vICAgICAgICAgICA8bGk+RGVwbG95IHlvdXIgZmxlZXQgb24geW91ciB0YWN0aWNhbCBncmlkPC9saT5cbi8vICAgICAgICAgICA8bGk+QWN0aXZhdGUgcmFkYXIgc3lzdGVtcyB0byBiZWdpbiBlbmdhZ2VtZW50PC9saT5cbi8vICAgICAgICAgICA8bGk+VGFyZ2V0IGVuZW15IGNvb3JkaW5hdGVzIGJ5IHNlbGVjdGluZyBncmlkIHBvc2l0aW9uczwvbGk+XG4vLyAgICAgICAgICAgPGxpPlJlZCBtYXJrZXJzIGluZGljYXRlIHN1Y2Nlc3NmdWwgaGl0cyBvbiBlbmVteSB2ZXNzZWxzPC9saT5cbi8vICAgICAgICAgICA8bGk+R3JheSBtYXJrZXJzIGluZGljYXRlIG1pc3NlZCB0YXJnZXRzPC9saT5cbi8vICAgICAgICAgICA8bGk+RWxpbWluYXRlIGFsbCBlbmVteSBzaGlwcyB0byBhY2hpZXZlIHZpY3Rvcnk8L2xpPlxuLy8gICAgICAgICA8L3VsPlxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgPC9kaXY+XG4vLyBcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXG5cblxuICAgIC8vIDxkaXYgY2xhc3M9XCJpbml0aWFsLXVpXCI+XG4gICAgLy8gICA8aDE+V0VMQ09NRSBUTyBCQVRUTEVTSElQPC9oMT5cbiAgICAvLyAgIDxoMz5QbGFjZSBZb3UgQ2Fycmllcjo8L2gzPlxuXG4gICAgLy8gICA8ZGl2IGNsYXNzPVwiZ2FtZS1ib2FyZHMgaW5pdGlhbC1ib2FyZFwiPlxuICAgIC8vICAgICA8ZGl2IGNsYXNzPVwiYm9hcmQtY29udGFpbmVyXCI+XG4gICAgLy8gICAgICAgPGRpdiBjbGFzcz1cImNvb3JkaW5hdGVzXCI+XG4gICAgLy8gICAgICAgICA8ZGl2IGNsYXNzPVwiY29vcmRpbmF0ZVwiPkE8L2Rpdj5cbiAgICAvLyAgICAgICAgIDxkaXYgY2xhc3M9XCJjb29yZGluYXRlXCI+QjwvZGl2PlxuICAgIC8vICAgICAgICAgPGRpdiBjbGFzcz1cImNvb3JkaW5hdGVcIj5DPC9kaXY+XG4gICAgLy8gICAgICAgICA8ZGl2IGNsYXNzPVwiY29vcmRpbmF0ZVwiPkQ8L2Rpdj5cbiAgICAvLyAgICAgICAgIDxkaXYgY2xhc3M9XCJjb29yZGluYXRlXCI+RTwvZGl2PlxuICAgIC8vICAgICAgICAgPGRpdiBjbGFzcz1cImNvb3JkaW5hdGVcIj5GPC9kaXY+XG4gICAgLy8gICAgICAgICA8ZGl2IGNsYXNzPVwiY29vcmRpbmF0ZVwiPkc8L2Rpdj5cbiAgICAvLyAgICAgICAgIDxkaXYgY2xhc3M9XCJjb29yZGluYXRlXCI+SDwvZGl2PlxuICAgIC8vICAgICAgICAgPGRpdiBjbGFzcz1cImNvb3JkaW5hdGVcIj5JPC9kaXY+XG4gICAgLy8gICAgICAgICA8ZGl2IGNsYXNzPVwiY29vcmRpbmF0ZVwiPko8L2Rpdj5cbiAgICAvLyAgICAgICA8L2Rpdj5cbiAgICAvLyAgICAgICA8ZGl2IGNsYXNzPVwiZ2FtZS1ib2FyZCBwbGFjaW5nLWJvYXJkXCI+XG4gICAgLy8gICAgICAgICA8IS0tIFBsYXllciBib2FyZCBjZWxscyB3aWxsIGJlIGdlbmVyYXRlZCBieSBKYXZhU2NyaXB0IC0tPlxuICAgIC8vICAgICAgIDwvZGl2PlxuICAgIC8vICAgICA8L2Rpdj5cbiAgICAvLyAgICAgPGRpdj48YnV0dG9uIGlkPVwicmFuZG9tLWJ0blwiPlJBTkRPTSBERVBMT1lNRU5UPC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgXG4gICAgLy8gICA8L2Rpdj5cbiAgICAvLyA8L2Rpdj4iLCJjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IobmFtZSwgbGVuZ3RoLCBoaXRQb2ludHM9MCwgc3VuayA9IGZhbHNlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICB0aGlzLmhpdFBvaW50cyA9IGhpdFBvaW50cztcbiAgICB0aGlzLnN1bmsgPSBzdW5rO1xuICB9XG5cbiAgaGl0KCkge1xuICAgIHRoaXMuaGl0UG9pbnRzKys7XG4gICAgaWYgKHRoaXMuaGl0UG9pbnRzID49IHRoaXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnN1bmsgPSB0cnVlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlzU3VuaygpIHtcbiAgICByZXR1cm4gdGhpcy5zdW5rO1xuICB9XG59XG5cbmNsYXNzIEdhbWVCb2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc2hpcHMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiAxMCB9LCAoKSA9PiBBcnJheSgxMCkuZmlsbCgwKSk7XG4gICAgdGhpcy5udW1iZXJPZlN1bmtTaGlwcyA9IDA7XG4gIH1cbiAgXG4gIGFkZFNoaXAoc2hpcCwgYXgsIGF5LCBheGlzKSB7XG4gICAgaWYoYXhpcyA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgaWYoYXkgKyBzaGlwLmxlbmd0aCA+IDEwKSByZXR1cm4gZmFsc2U7XG4gICAgICBmb3IgKGxldCBpID0gYXk7IGkgPCBheSArIHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYodGhpcy5zaGlwc1theF1baV0gIT09IDApIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSBheTsgaSA8IGF5ICsgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLnNoaXBzW2F4XVtpXSA9IHNoaXA7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IFxuICAgIFxuICAgIGVsc2UgaWYoYXhpcyA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBpZihheCArIHNoaXAubGVuZ3RoID4gMTApIHJldHVybiBmYWxzZTtcbiAgICAgIGZvciAobGV0IGkgPSBheDsgaSA8IGF4ICsgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZih0aGlzLnNoaXBzW2ldW2F5XSAhPT0gMCkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IGF4OyBpIDwgYXggKyBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMuc2hpcHNbaV1bYXldID0gc2hpcDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZWNpdmVBdHRhY2soeCwgeSkge1xuICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuc2hpcHNbeF1beV07XG4gICAgaWYgKHRhcmdldCAhPT0gMCAmJiB0YXJnZXQgIT09IDEpIHtcbiAgICAgIGlmKHRhcmdldC5oaXQoKSkgdGhpcy5udW1iZXJPZlN1bmtTaGlwcysrO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYodGFyZ2V0ID09PSAwKSB7XG4gICAgICB0aGlzLnNoaXBzW3hdW3ldID0gMTsgLy8gTWFyayBhcyBtaXNzXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGFsbFN1bmsoKSB7XG4gICAgcmV0dXJuIHRoaXMubnVtYmVyT2ZTdW5rU2hpcHMgPT09IDU7IC8vIEFzc3VtaW5nIHRoZXJlIGFyZSA1IHNoaXBzIGluIHRvdGFsXG4gIH1cbn1cblxuY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3Rvcih0eXBlLCBnYW1lQm9hcmQpIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5nYW1lQm9hcmQgPSBnYW1lQm9hcmQ7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgU2hpcCwgR2FtZUJvYXJkLCBQbGF5ZXIgfTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcbmNvbnN0IHtsb2FkfSA9IHJlcXVpcmUoJy4vZ2FtZScpO1xuY29uc29sZS5sb2coXCJIZWxsbyBXb3JsZCFcIik7XG5sb2FkKCk7XG5cbi8vIGNvbnN0IHN1bSA9IHJlcXVpcmUoJy4vc3VtJyk7XG4vLyBtb2R1bGUuZXhwb3J0cyA9IHN1bTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=