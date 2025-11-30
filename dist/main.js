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

.disabled {
  pointer-events: none;
  opacity: 0.6;
  cursor: not-allowed;
}
.cell.disabled {
  pointer-events: none;
  opacity: 0.6;
  cursor: not-allowed;
}
.board.disabled { pointer-events: none; opacity: 0.6; }`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,kCAAkC;AACpC;;AAEA;EACE,+DAA+D;EAC/D,WAAW;EACX,iBAAiB;EACjB,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,yCAAyC;EACzC,mBAAmB;EACnB,mBAAmB;EACnB,iDAAiD;EACjD,6BAA6B;EAC7B,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,sCAAsC;EACtC,kBAAkB;EAClB,mBAAmB;EACnB,qBAAqB;EACrB,mBAAmB;EACnB,sBAAsB;EACtB,2CAA2C;EAC3C,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,eAAe;EACf,SAAS;AACX;;AAEA;EACE,OAAO;EACP,gBAAgB;EAChB;;;;GAIC;EACD,mBAAmB;EACnB,aAAa;EACb,2CAA2C;EAC3C,0BAA0B;EAC1B,sBAAsB;EACtB,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV,WAAW;EACX,YAAY;EACZ;;;;GAIC;EACD,qCAAqC;AACvC;;AAEA;EACE;IACE,yBAAyB;EAC3B;AACF;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,iBAAiB;EACjB,WAAW;EACX,0BAA0B;EAC1B,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,QAAQ;EACR,WAAW;EACX,mBAAmB;EACnB,cAAc;EACd,sBAAsB;EACtB,sCAAsC;EACtC,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT;;;;;;;;;;;;;;;;KAgBG;EACH,oBAAoB;AACtB;;AAEA;EACE,sCAAsC;EACtC,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,yBAAyB;EACzB,eAAe;EACf,kBAAkB;EAClB,wCAAwC;AAC1C;;AAEA;EACE,wCAAwC;EACxC,2CAA2C;AAC7C;;AAEA;EACE,wCAAwC;EACxC,2CAA2C;AAC7C;;AAEA;EACE,wCAAwC;EACxC,2CAA2C;AAC7C;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,iBAAiB;EACjB,iBAAiB;EACjB,0BAA0B;EAC1B,4BAA4B;AAC9B;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,iBAAiB;EACjB,yBAAyB;AAC3B;;AAEA;EACE,sCAAsC;EACtC,+CAA+C;AACjD;;AAEA;EACE,sCAAsC;EACtC,+CAA+C;AACjD;;AAEA;EACE;IACE,YAAY;EACd;EACA;IACE,UAAU;EACZ;EACA;IACE,YAAY;EACd;AACF;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,iBAAiB;EACjB,WAAW;EACX,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,SAAS;EACT,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,wDAAwD;EACxD,WAAW;EACX,sBAAsB;EACtB,kBAAkB;EAClB,eAAe;EACf,yBAAyB;EACzB,iBAAiB;EACjB,2CAA2C;EAC3C,yBAAyB;EACzB,kBAAkB;EAClB,gBAAgB;EAChB,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,MAAM;EACN,WAAW;EACX,WAAW;EACX,YAAY;EACZ;;;;;GAKC;EACD,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,2CAA2C;EAC3C,WAAW;AACb;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB;;;;GAIC;EACD,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,sBAAsB;EACtB,2CAA2C;EAC3C,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,mBAAmB;EACnB,kBAAkB;EAClB,0BAA0B;AAC5B;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,yBAAyB;AAC3B;;AAEA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,YAAY;EACZ,aAAa;EACb,oBAAoB;EACpB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ;;;;;GAKC;EACD,yCAAyC;AAC3C;;AAEA;EACE;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;AACF;;AAEA;EACE;IACE,sBAAsB;EACxB;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,iBAAiB;EACnB;AACF;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;EACT,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,YAAY;;EAEZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,oBAAoB;EACpB,YAAY;EACZ,mBAAmB;AACrB;AACA;EACE,oBAAoB;EACpB,YAAY;EACZ,mBAAmB;AACrB;AACA,kBAAkB,oBAAoB,EAAE,YAAY,EAAE","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Orbitron\", monospace;\n}\n\nbody {\n  background: radial-gradient(circle at center, #001122, #000811);\n  color: #0af;\n  min-height: 100vh;\n  padding: 20px;\n  overflow-x: hidden;\n}\n\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\nheader {\n  text-align: center;\n  padding: 20px 0;\n  margin-bottom: 30px;\n  position: relative;\n}\n\nh1 {\n  font-size: 3.2rem;\n  text-shadow: 0 0 10px #0af, 0 0 20px #0af;\n  margin-bottom: 10px;\n  letter-spacing: 3px;\n  background: linear-gradient(to right, #0af, #0ff);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n}\n\n.game-status {\n  font-size: 1.2rem;\n  background-color: rgba(0, 20, 40, 0.7);\n  padding: 10px 20px;\n  border-radius: 10px;\n  display: inline-block;\n  margin-bottom: 20px;\n  border: 1px solid #0af;\n  box-shadow: 0 0 10px rgba(0, 170, 255, 0.5);\n  text-shadow: 0 0 5px #0af;\n}\n\n.game-boards {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 30px;\n}\n\n.board-container {\n  flex: 1;\n  min-width: 300px;\n  background: radial-gradient(\n    circle at center,\n    rgba(0, 30, 60, 0.8),\n    rgba(0, 10, 30, 0.9)\n  );\n  border-radius: 10px;\n  padding: 20px;\n  box-shadow: 0 0 20px rgba(0, 170, 255, 0.3);\n  backdrop-filter: blur(5px);\n  border: 1px solid #0af;\n  position: relative;\n  overflow: hidden;\n}\n\n.board-container::before {\n  content: \"\";\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  background: conic-gradient(\n    transparent,\n    rgba(0, 170, 255, 0.1),\n    transparent 30%\n  );\n  animation: rotate 10s linear infinite;\n}\n\n@keyframes rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.board-title {\n  text-align: center;\n  margin-bottom: 15px;\n  font-size: 1.5rem;\n  color: #0ff;\n  text-shadow: 0 0 10px #0ff;\n  position: relative;\n  z-index: 1;\n}\n\n.game-board {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  gap: 2px;\n  width: 100%;\n  aspect-ratio: 1 / 1;\n  margin: 0 auto;\n  border: 2px solid #0af;\n  background-color: rgba(0, 10, 30, 0.7);\n  border-radius: 5px;\n  overflow: hidden;\n  position: relative;\n  z-index: 1;\n}\n\n.game-board::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: radial-gradient(\n      circle at center,\n      transparent 70%,\n      rgba(0, 170, 255, 0.1) 100%\n    ),\n    repeating-linear-gradient(\n      0deg,\n      transparent,\n      transparent 9.5%,\n      rgba(0, 170, 255, 0.1) 10%\n    ),\n    repeating-linear-gradient(\n      90deg,\n      transparent,\n      transparent 9.5%,\n      rgba(0, 170, 255, 0.1) 10%\n    );\n  pointer-events: none;\n}\n\n.cell {\n  background-color: rgba(0, 20, 40, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n  cursor: pointer;\n  position: relative;\n  border: 1px solid rgba(0, 170, 255, 0.2);\n}\n\n.initial-board .cell:hover {\n  background-color: rgba(0, 100, 200, 0.5);\n  box-shadow: 0 0 10px rgba(0, 170, 255, 0.5);\n}\n\n.player-board .cell:hover {\n  background-color: rgba(0, 100, 200, 0.5);\n  box-shadow: 0 0 10px rgba(0, 170, 255, 0.5);\n}\n\n.computer-board .cell:hover {\n  background-color: rgba(0, 100, 200, 0.5);\n  box-shadow: 0 0 10px rgba(0, 170, 255, 0.5);\n}\n\n.cell.hit::after {\n  content: \"✕\";\n  color: #f00;\n  font-size: 1.5rem;\n  font-weight: bold;\n  text-shadow: 0 0 10px #f00;\n  animation: pulse 1s infinite;\n}\n\n.cell.miss::after {\n  content: \"•\";\n  color: #888;\n  font-size: 1.8rem;\n  text-shadow: 0 0 5px #888;\n}\n\n.cell.ship {\n  background-color: rgba(0, 100, 0, 0.5);\n  box-shadow: inset 0 0 10px rgba(0, 255, 0, 0.3);\n}\n\n.cell.ship.hit {\n  background-color: rgba(100, 0, 0, 0.7);\n  box-shadow: inset 0 0 10px rgba(255, 0, 0, 0.5);\n}\n\n@keyframes pulse {\n  0% {\n    opacity: 0.7;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0.7;\n  }\n}\n\n.coordinates {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 5px;\n  padding: 0 5px;\n}\n\n.coordinate {\n  width: calc(100% / 10);\n  text-align: center;\n  font-weight: bold;\n  color: #0ff;\n  text-shadow: 0 0 5px #0ff;\n}\n\n.controls {\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n  margin-top: 30px;\n  flex-wrap: wrap;\n}\n\nbutton {\n  padding: 12px 25px;\n  font-size: 1rem;\n  background: linear-gradient(to bottom, #003366, #001122);\n  color: #0ff;\n  border: 1px solid #0af;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-weight: bold;\n  box-shadow: 0 0 10px rgba(0, 170, 255, 0.5);\n  text-shadow: 0 0 5px #0af;\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n}\n\nbutton::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(\n    90deg,\n    transparent,\n    rgba(0, 170, 255, 0.4),\n    transparent\n  );\n  transition: 0.5s;\n  z-index: -1;\n}\n\nbutton:hover {\n  box-shadow: 0 0 20px rgba(0, 170, 255, 0.8);\n  color: #fff;\n}\n\nbutton:hover::before {\n  left: 100%;\n}\n\nbutton:active {\n  transform: translateY(2px);\n}\n\n.instructions {\n  max-width: 800px;\n  margin: 30px auto;\n  background: radial-gradient(\n    circle at center,\n    rgba(0, 30, 60, 0.8),\n    rgba(0, 10, 30, 0.9)\n  );\n  padding: 20px;\n  border-radius: 10px;\n  line-height: 1.6;\n  border: 1px solid #0af;\n  box-shadow: 0 0 20px rgba(0, 170, 255, 0.3);\n  position: relative;\n  z-index: 1;\n}\n\n.instructions h2 {\n  color: #0ff;\n  margin-bottom: 15px;\n  text-align: center;\n  text-shadow: 0 0 10px #0ff;\n}\n\n.instructions ul {\n  margin-left: 20px;\n}\n\n.instructions li {\n  margin-bottom: 8px;\n  text-shadow: 0 0 5px #0af;\n}\n\n.radar-sweep {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  pointer-events: none;\n  z-index: -1;\n  opacity: 0.1;\n}\n\n.radar-sweep::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: conic-gradient(\n    from 0deg,\n    transparent 0%,\n    rgba(0, 255, 255, 0.1) 10%,\n    transparent 20%\n  );\n  animation: radar-sweep 4s linear infinite;\n}\n\n@keyframes radar-sweep {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@media (max-width: 768px) {\n  .game-boards {\n    flex-direction: column;\n  }\n\n  .board-container {\n    width: 100%;\n  }\n\n  h1 {\n    font-size: 2.5rem;\n  }\n}\n\n.initial-ui {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 30px;\n  margin-top: 10px;\n}\n\n.initial-board {\n  height: 450px;\n  width: 450px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;  \n}\n\n.disabled {\n  pointer-events: none;\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.cell.disabled {\n  pointer-events: none;\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.board.disabled { pointer-events: none; opacity: 0.6; }"],"sourceRoot":""}]);
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
    let boardLocked = false;

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

    function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

    async function computerTurnToShoot() {
        const playerCells = document.querySelectorAll('.player-board .cell');

        while (true) {
            const x = Math.floor(Math.random() * 10);
            const y = Math.floor(Math.random() * 10);
            const targetCell = Array.from(playerCells).find(cell => parseInt(cell.dataset.row) === x && parseInt(cell.dataset.col) === y);

        // if target already tried, pick again (loop)
        if (!targetCell || targetCell.classList.contains('hit') || targetCell.classList.contains('miss')) {
          continue;
        }

        // small delay to simulate thinking (optional)
        await sleep(600);

                    if (targetCell.classList.contains('ship') && playerGameBoard.reciveAttack(x, y)) {
                    targetCell.classList.add('hit');
                    gameStatus.textContent = "ENEMY STRIKE! YOUR VESSEL HAS BEEN HIT!";
                    if (playerGameBoard.allSunk()) {
                        gameStatus.textContent = "ALL YOUR VESSELS HAVE BEEN DESTROYED - DEFEAT!";
                        boardLocked = true;
                        playerBoard.classList.add('disabled');
                        computerBoard.classList.add('disabled');
                    }
        } else {
          targetCell.classList.add('miss');
          gameStatus.textContent = "ENEMY MISSED! YOUR VESSEL IS SAFE!";
    }
    return; // shot processed, exit
  }

    }


    initializeGame();

    // Add event listeners for game controls
    startBtn.addEventListener('click', function () {
        gameStatus.textContent = "RADAR ACTIVE - ENGAGE ENEMY TARGETS";
        startBtn.disabled = true;

        // Add click handlers to computer board for gameplay
        const computerCells = document.querySelectorAll('.computer-board .cell');

        computerCells.forEach(cell => {
            cell.addEventListener('click', async function () {
                if (boardLocked) return;
                if (!this.classList.contains('hit') && !this.classList.contains('miss') && !this.classList.contains('disabled')) {
                    if (this.classList.contains('ship') && computerGameBoard.reciveAttack(parseInt(this.dataset.row), parseInt(this.dataset.col))) {
                        this.classList.add('hit');
                        gameStatus.textContent = "DIRECT HIT! ENEMY VESSEL DAMAGED!";
                        if(computerGameBoard.allSunk()) {
                            gameStatus.textContent = "ALL ENEMY VESSELS DESTROYED - VICTORY ACHIEVED!";
                            // lock game and mark boards disabled
                            boardLocked = true;
                            computerBoard.classList.add('disabled');
                            playerBoard.classList.add('disabled');
                            return;
                        }
                    } else {
                        this.classList.add('miss');
                        gameStatus.textContent = "TARGET MISSED - RECALIBRATING";
                    }
                    boardLocked = true;
                    await sleep(200);
                    await computerTurnToShoot();
                    boardLocked = false;
                    // setTimeout(computerTurnToShoot, 1000);
                }
            });
        });
    });

    resetBtn.addEventListener('click', function () {
        initializeGame();
        // unlock boards and remove disabled visual state
        boardLocked = false;
        playerBoard.classList.remove('disabled');
        computerBoard.classList.remove('disabled');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7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V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7V0NOQSxtQzs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUN0QixPQUFPLE1BQU0sRUFBRSxtQkFBTyxDQUFDLDZCQUFRO0FBQy9CO0FBQ0E7O0FBRUE7QUFDQSx3QiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtZmFtaWx5OiBcIk9yYml0cm9uXCIsIG1vbm9zcGFjZTtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgY2VudGVyLCAjMDAxMTIyLCAjMDAwODExKTtcbiAgY29sb3I6ICMwYWY7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nOiAyMHB4O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbi5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbmhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweCAwO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAzLjJyZW07XG4gIHRleHQtc2hhZG93OiAwIDAgMTBweCAjMGFmLCAwIDAgMjBweCAjMGFmO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwYWYsICMwZmYpO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5nYW1lLXN0YXR1cyB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDIwLCA0MCwgMC43KTtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwYWY7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMTcwLCAyNTUsIDAuNSk7XG4gIHRleHQtc2hhZG93OiAwIDAgNXB4ICMwYWY7XG59XG5cbi5nYW1lLWJvYXJkcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDMwcHg7XG59XG5cbi5ib2FyZC1jb250YWluZXIge1xuICBmbGV4OiAxO1xuICBtaW4td2lkdGg6IDMwMHB4O1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoXG4gICAgY2lyY2xlIGF0IGNlbnRlcixcbiAgICByZ2JhKDAsIDMwLCA2MCwgMC44KSxcbiAgICByZ2JhKDAsIDEwLCAzMCwgMC45KVxuICApO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDAsIDE3MCwgMjU1LCAwLjMpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzBhZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYm9hcmQtY29udGFpbmVyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTUwJTtcbiAgbGVmdDogLTUwJTtcbiAgd2lkdGg6IDIwMCU7XG4gIGhlaWdodDogMjAwJTtcbiAgYmFja2dyb3VuZDogY29uaWMtZ3JhZGllbnQoXG4gICAgdHJhbnNwYXJlbnQsXG4gICAgcmdiYSgwLCAxNzAsIDI1NSwgMC4xKSxcbiAgICB0cmFuc3BhcmVudCAzMCVcbiAgKTtcbiAgYW5pbWF0aW9uOiByb3RhdGUgMTBzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyByb3RhdGUge1xuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5cbi5ib2FyZC10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGNvbG9yOiAjMGZmO1xuICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggIzBmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xufVxuXG4uZ2FtZS1ib2FyZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcbiAgZ2FwOiAycHg7XG4gIHdpZHRoOiAxMDAlO1xuICBhc3BlY3QtcmF0aW86IDEgLyAxO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyOiAycHggc29saWQgIzBhZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMCwgMzAsIDAuNyk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xufVxuXG4uZ2FtZS1ib2FyZDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChcbiAgICAgIGNpcmNsZSBhdCBjZW50ZXIsXG4gICAgICB0cmFuc3BhcmVudCA3MCUsXG4gICAgICByZ2JhKDAsIDE3MCwgMjU1LCAwLjEpIDEwMCVcbiAgICApLFxuICAgIHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoXG4gICAgICAwZGVnLFxuICAgICAgdHJhbnNwYXJlbnQsXG4gICAgICB0cmFuc3BhcmVudCA5LjUlLFxuICAgICAgcmdiYSgwLCAxNzAsIDI1NSwgMC4xKSAxMCVcbiAgICApLFxuICAgIHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoXG4gICAgICA5MGRlZyxcbiAgICAgIHRyYW5zcGFyZW50LFxuICAgICAgdHJhbnNwYXJlbnQgOS41JSxcbiAgICAgIHJnYmEoMCwgMTcwLCAyNTUsIDAuMSkgMTAlXG4gICAgKTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5jZWxsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyMCwgNDAsIDAuNyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAxNzAsIDI1NSwgMC4yKTtcbn1cblxuLmluaXRpYWwtYm9hcmQgLmNlbGw6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEwMCwgMjAwLCAwLjUpO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDE3MCwgMjU1LCAwLjUpO1xufVxuXG4ucGxheWVyLWJvYXJkIC5jZWxsOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMDAsIDIwMCwgMC41KTtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAxNzAsIDI1NSwgMC41KTtcbn1cblxuLmNvbXB1dGVyLWJvYXJkIC5jZWxsOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMDAsIDIwMCwgMC41KTtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAxNzAsIDI1NSwgMC41KTtcbn1cblxuLmNlbGwuaGl0OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwi4pyVXCI7XG4gIGNvbG9yOiAjZjAwO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtc2hhZG93OiAwIDAgMTBweCAjZjAwO1xuICBhbmltYXRpb246IHB1bHNlIDFzIGluZmluaXRlO1xufVxuXG4uY2VsbC5taXNzOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwi4oCiXCI7XG4gIGNvbG9yOiAjODg4O1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgdGV4dC1zaGFkb3c6IDAgMCA1cHggIzg4ODtcbn1cblxuLmNlbGwuc2hpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTAwLCAwLCAwLjUpO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTBweCByZ2JhKDAsIDI1NSwgMCwgMC4zKTtcbn1cblxuLmNlbGwuc2hpcC5oaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwMCwgMCwgMCwgMC43KTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDEwcHggcmdiYSgyNTUsIDAsIDAsIDAuNSk7XG59XG5cbkBrZXlmcmFtZXMgcHVsc2Uge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMC43O1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cbn1cblxuLmNvb3JkaW5hdGVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIHBhZGRpbmc6IDAgNXB4O1xufVxuXG4uY29vcmRpbmF0ZSB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLyAxMCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMGZmO1xuICB0ZXh0LXNoYWRvdzogMCAwIDVweCAjMGZmO1xufVxuXG4uY29udHJvbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbmJ1dHRvbiB7XG4gIHBhZGRpbmc6IDEycHggMjVweDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMDAzMzY2LCAjMDAxMTIyKTtcbiAgY29sb3I6ICMwZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwYWY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAxNzAsIDI1NSwgMC41KTtcbiAgdGV4dC1zaGFkb3c6IDAgMCA1cHggIzBhZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB6LWluZGV4OiAxO1xufVxuXG5idXR0b246OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAtMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgIDkwZGVnLFxuICAgIHRyYW5zcGFyZW50LFxuICAgIHJnYmEoMCwgMTcwLCAyNTUsIDAuNCksXG4gICAgdHJhbnNwYXJlbnRcbiAgKTtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgei1pbmRleDogLTE7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMCwgMTcwLCAyNTUsIDAuOCk7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5idXR0b246aG92ZXI6OmJlZm9yZSB7XG4gIGxlZnQ6IDEwMCU7XG59XG5cbmJ1dHRvbjphY3RpdmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcbn1cblxuLmluc3RydWN0aW9ucyB7XG4gIG1heC13aWR0aDogODAwcHg7XG4gIG1hcmdpbjogMzBweCBhdXRvO1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoXG4gICAgY2lyY2xlIGF0IGNlbnRlcixcbiAgICByZ2JhKDAsIDMwLCA2MCwgMC44KSxcbiAgICByZ2JhKDAsIDEwLCAzMCwgMC45KVxuICApO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMS42O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMGFmO1xuICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDAsIDE3MCwgMjU1LCAwLjMpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5pbnN0cnVjdGlvbnMgaDIge1xuICBjb2xvcjogIzBmZjtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggIzBmZjtcbn1cblxuLmluc3RydWN0aW9ucyB1bCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4uaW5zdHJ1Y3Rpb25zIGxpIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICB0ZXh0LXNoYWRvdzogMCAwIDVweCAjMGFmO1xufVxuXG4ucmFkYXItc3dlZXAge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgei1pbmRleDogLTE7XG4gIG9wYWNpdHk6IDAuMTtcbn1cblxuLnJhZGFyLXN3ZWVwOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogY29uaWMtZ3JhZGllbnQoXG4gICAgZnJvbSAwZGVnLFxuICAgIHRyYW5zcGFyZW50IDAlLFxuICAgIHJnYmEoMCwgMjU1LCAyNTUsIDAuMSkgMTAlLFxuICAgIHRyYW5zcGFyZW50IDIwJVxuICApO1xuICBhbmltYXRpb246IHJhZGFyLXN3ZWVwIDRzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyByYWRhci1zd2VlcCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZ2FtZS1ib2FyZHMge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAuYm9hcmQtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIGgxIHtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgfVxufVxuXG4uaW5pdGlhbC11aSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDMwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5pbml0aWFsLWJvYXJkIHtcbiAgaGVpZ2h0OiA0NTBweDtcbiAgd2lkdGg6IDQ1MHB4O1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyAgXG59XG5cbi5kaXNhYmxlZCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBvcGFjaXR5OiAwLjY7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4uY2VsbC5kaXNhYmxlZCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBvcGFjaXR5OiAwLjY7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4uYm9hcmQuZGlzYWJsZWQgeyBwb2ludGVyLWV2ZW50czogbm9uZTsgb3BhY2l0eTogMC42OyB9YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLCtEQUErRDtFQUMvRCxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix5Q0FBeUM7RUFDekMsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixpREFBaUQ7RUFDakQsNkJBQTZCO0VBQzdCLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsc0NBQXNDO0VBQ3RDLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsMkNBQTJDO0VBQzNDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLFNBQVM7QUFDWDs7QUFFQTtFQUNFLE9BQU87RUFDUCxnQkFBZ0I7RUFDaEI7Ozs7R0FJQztFQUNELG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsMkNBQTJDO0VBQzNDLDBCQUEwQjtFQUMxQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VB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QUFNO0VBQ04sT0FBTztFQUNQLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWjs7Ozs7R0FLQztFQUNELHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsU0FBUztFQUNULGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZOztFQUVaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCO0FBQ0Esa0JBQWtCLG9CQUFvQixFQUFFLFlBQVksRUFBRVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcmJpdHJvblxcXCIsIG1vbm9zcGFjZTtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IGNlbnRlciwgIzAwMTEyMiwgIzAwMDgxMSk7XFxuICBjb2xvcjogIzBhZjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMjBweCAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAzLjJyZW07XFxuICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggIzBhZiwgMCAwIDIwcHggIzBhZjtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBsZXR0ZXItc3BhY2luZzogM3B4O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMGFmLCAjMGZmKTtcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uZ2FtZS1zdGF0dXMge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDIwLCA0MCwgMC43KTtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzBhZjtcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMTcwLCAyNTUsIDAuNSk7XFxuICB0ZXh0LXNoYWRvdzogMCAwIDVweCAjMGFmO1xcbn1cXG5cXG4uZ2FtZS1ib2FyZHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogMzBweDtcXG59XFxuXFxuLmJvYXJkLWNvbnRhaW5lciB7XFxuICBmbGV4OiAxO1xcbiAgbWluLXdpZHRoOiAzMDBweDtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChcXG4gICAgY2lyY2xlIGF0IGNlbnRlcixcXG4gICAgcmdiYSgwLCAzMCwgNjAsIDAuOCksXFxuICAgIHJnYmEoMCwgMTAsIDMwLCAwLjkpXFxuICApO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDAsIDE3MCwgMjU1LCAwLjMpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMGFmO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmJvYXJkLWNvbnRhaW5lcjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtNTAlO1xcbiAgbGVmdDogLTUwJTtcXG4gIHdpZHRoOiAyMDAlO1xcbiAgaGVpZ2h0OiAyMDAlO1xcbiAgYmFja2dyb3VuZDogY29uaWMtZ3JhZGllbnQoXFxuICAgIHRyYW5zcGFyZW50LFxcbiAgICByZ2JhKDAsIDE3MCwgMjU1LCAwLjEpLFxcbiAgICB0cmFuc3BhcmVudCAzMCVcXG4gICk7XFxuICBhbmltYXRpb246IHJvdGF0ZSAxMHMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuXFxuLmJvYXJkLXRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGNvbG9yOiAjMGZmO1xcbiAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4ICMwZmY7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uZ2FtZS1ib2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdhcDogMnB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMGFmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMCwgMzAsIDAuNyk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLmdhbWUtYm9hcmQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChcXG4gICAgICBjaXJjbGUgYXQgY2VudGVyLFxcbiAgICAgIHRyYW5zcGFyZW50IDcwJSxcXG4gICAgICByZ2JhKDAsIDE3MCwgMjU1LCAwLjEpIDEwMCVcXG4gICAgKSxcXG4gICAgcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudChcXG4gICAgICAwZGVnLFxcbiAgICAgIHRyYW5zcGFyZW50LFxcbiAgICAgIHRyYW5zcGFyZW50IDkuNSUsXFxuICAgICAgcmdiYSgwLCAxNzAsIDI1NSwgMC4xKSAxMCVcXG4gICAgKSxcXG4gICAgcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudChcXG4gICAgICA5MGRlZyxcXG4gICAgICB0cmFuc3BhcmVudCxcXG4gICAgICB0cmFuc3BhcmVudCA5LjUlLFxcbiAgICAgIHJnYmEoMCwgMTcwLCAyNTUsIDAuMSkgMTAlXFxuICAgICk7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmNlbGwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyMCwgNDAsIDAuNyk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMTcwLCAyNTUsIDAuMik7XFxufVxcblxcbi5pbml0aWFsLWJvYXJkIC5jZWxsOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTAwLCAyMDAsIDAuNSk7XFxuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDE3MCwgMjU1LCAwLjUpO1xcbn1cXG5cXG4ucGxheWVyLWJvYXJkIC5jZWxsOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTAwLCAyMDAsIDAuNSk7XFxuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDE3MCwgMjU1LCAwLjUpO1xcbn1cXG5cXG4uY29tcHV0ZXItYm9hcmQgLmNlbGw6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMDAsIDIwMCwgMC41KTtcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMTcwLCAyNTUsIDAuNSk7XFxufVxcblxcbi5jZWxsLmhpdDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIuKclVxcXCI7XFxuICBjb2xvcjogI2YwMDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggI2YwMDtcXG4gIGFuaW1hdGlvbjogcHVsc2UgMXMgaW5maW5pdGU7XFxufVxcblxcbi5jZWxsLm1pc3M6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCLigKJcXFwiO1xcbiAgY29sb3I6ICM4ODg7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIHRleHQtc2hhZG93OiAwIDAgNXB4ICM4ODg7XFxufVxcblxcbi5jZWxsLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMDAsIDAsIDAuNSk7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTBweCByZ2JhKDAsIDI1NSwgMCwgMC4zKTtcXG59XFxuXFxuLmNlbGwuc2hpcC5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDAsIDAsIDAsIDAuNyk7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTBweCByZ2JhKDI1NSwgMCwgMCwgMC41KTtcXG59XFxuXFxuQGtleWZyYW1lcyBwdWxzZSB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDAuNztcXG4gIH1cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMC43O1xcbiAgfVxcbn1cXG5cXG4uY29vcmRpbmF0ZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIHBhZGRpbmc6IDAgNXB4O1xcbn1cXG5cXG4uY29vcmRpbmF0ZSB7XFxuICB3aWR0aDogY2FsYygxMDAlIC8gMTApO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogIzBmZjtcXG4gIHRleHQtc2hhZG93OiAwIDAgNXB4ICMwZmY7XFxufVxcblxcbi5jb250cm9scyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgcGFkZGluZzogMTJweCAyNXB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzAwMzM2NiwgIzAwMTEyMik7XFxuICBjb2xvcjogIzBmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwYWY7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDE3MCwgMjU1LCAwLjUpO1xcbiAgdGV4dC1zaGFkb3c6IDAgMCA1cHggIzBhZjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG5idXR0b246OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IC0xMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIDkwZGVnLFxcbiAgICB0cmFuc3BhcmVudCxcXG4gICAgcmdiYSgwLCAxNzAsIDI1NSwgMC40KSxcXG4gICAgdHJhbnNwYXJlbnRcXG4gICk7XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgei1pbmRleDogLTE7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDAsIDE3MCwgMjU1LCAwLjgpO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbmJ1dHRvbjpob3Zlcjo6YmVmb3JlIHtcXG4gIGxlZnQ6IDEwMCU7XFxufVxcblxcbmJ1dHRvbjphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XFxufVxcblxcbi5pbnN0cnVjdGlvbnMge1xcbiAgbWF4LXdpZHRoOiA4MDBweDtcXG4gIG1hcmdpbjogMzBweCBhdXRvO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KFxcbiAgICBjaXJjbGUgYXQgY2VudGVyLFxcbiAgICByZ2JhKDAsIDMwLCA2MCwgMC44KSxcXG4gICAgcmdiYSgwLCAxMCwgMzAsIDAuOSlcXG4gICk7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMGFmO1xcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgwLCAxNzAsIDI1NSwgMC4zKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5pbnN0cnVjdGlvbnMgaDIge1xcbiAgY29sb3I6ICMwZmY7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4ICMwZmY7XFxufVxcblxcbi5pbnN0cnVjdGlvbnMgdWwge1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxufVxcblxcbi5pbnN0cnVjdGlvbnMgbGkge1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgdGV4dC1zaGFkb3c6IDAgMCA1cHggIzBhZjtcXG59XFxuXFxuLnJhZGFyLXN3ZWVwIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB6LWluZGV4OiAtMTtcXG4gIG9wYWNpdHk6IDAuMTtcXG59XFxuXFxuLnJhZGFyLXN3ZWVwOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiBjb25pYy1ncmFkaWVudChcXG4gICAgZnJvbSAwZGVnLFxcbiAgICB0cmFuc3BhcmVudCAwJSxcXG4gICAgcmdiYSgwLCAyNTUsIDI1NSwgMC4xKSAxMCUsXFxuICAgIHRyYW5zcGFyZW50IDIwJVxcbiAgKTtcXG4gIGFuaW1hdGlvbjogcmFkYXItc3dlZXAgNHMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJhZGFyLXN3ZWVwIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAuZ2FtZS1ib2FyZHMge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLmJvYXJkLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgaDEge1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gIH1cXG59XFxuXFxuLmluaXRpYWwtdWkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDMwcHg7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4uaW5pdGlhbC1ib2FyZCB7XFxuICBoZWlnaHQ6IDQ1MHB4O1xcbiAgd2lkdGg6IDQ1MHB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgIFxcbn1cXG5cXG4uZGlzYWJsZWQge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBvcGFjaXR5OiAwLjY7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG4uY2VsbC5kaXNhYmxlZCB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIG9wYWNpdHk6IDAuNjtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcbi5ib2FyZC5kaXNhYmxlZCB7IHBvaW50ZXItZXZlbnRzOiBub25lOyBvcGFjaXR5OiAwLjY7IH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgeyBTaGlwLCBHYW1lQm9hcmQsIFBsYXllciB9ID0gcmVxdWlyZSgnLi9zaGlwJyk7XG5cbmZ1bmN0aW9uIHBsYWNlU2hpcHNSYW5kb21seShnYW1lQm9hcmQpIHtcbiAgICBjb25zdCBzaGlwTGVuZ3RocyA9IFs1LCA0LCAzLCAzLCAyXTtcbiAgICBzaGlwTGVuZ3Rocy5mb3JFYWNoKGxlbmd0aCA9PiB7XG4gICAgICAgIGxldCBwbGFjZWQgPSBmYWxzZTtcbiAgICAgICAgd2hpbGUgKCFwbGFjZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGF4aXMgPSBNYXRoLnJhbmRvbSgpID4gMC41ID8gJ2hvcml6b250YWwnIDogJ3ZlcnRpY2FsJztcbiAgICAgICAgICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKFwiUmFuZG9tU2hpcFwiLCBsZW5ndGgpO1xuICAgICAgICAgICAgcGxhY2VkID0gZ2FtZUJvYXJkLmFkZFNoaXAoc2hpcCwgeCwgeSwgYXhpcyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gbG9hZCgpe1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBwbGFjaW5nQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxhY2luZy1ib2FyZCcpO1xuICAgIGNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1ib2FyZCcpO1xuICAgIGNvbnN0IGNvbXB1dGVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcHV0ZXItYm9hcmQnKTtcbiAgICBjb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1idG4nKTtcbiAgICBjb25zdCByZXNldEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNldC1idG4nKTtcbiAgICBjb25zdCByYW5kb21CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFuZG9tLWJ0bicpO1xuICAgIGNvbnN0IGdhbWVTdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1zdGF0dXMnKTtcbiAgICBsZXQgcGxheWVyR2FtZUJvYXJkID0gbnVsbDtcbiAgICBsZXQgY29tcHV0ZXJHYW1lQm9hcmQgPSBudWxsO1xuICAgIGxldCBib2FyZExvY2tlZCA9IGZhbHNlO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlQm9hcmQoYm9hcmRFbGVtZW50LCByb2xlKSB7XG4gICAgICAgIGJvYXJkRWxlbWVudC5pbm5lckhUTUwgPSAnJztcblxuICAgICAgICBjb25zdCBuZXdCb2FyZCA9IG5ldyBHYW1lQm9hcmQoKTtcbiAgICAgICAgcGxhY2VTaGlwc1JhbmRvbWx5KG5ld0JvYXJkKTtcblxuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDEwOyBjb2wrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTmFtZSA9ICdjZWxsJztcbiAgICAgICAgICAgICAgICBjZWxsLmRhdGFzZXQucm93ID0gcm93O1xuICAgICAgICAgICAgICAgIGNlbGwuZGF0YXNldC5jb2wgPSBjb2w7XG5cbiAgICAgICAgICAgICAgICBpZiAocm9sZSA9PT0gJ3BsYXllcicpIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdwbGF5ZXInKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NvbXB1dGVyJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hpcCA9IG5ld0JvYXJkLnNoaXBzW3Jvd11bY29sXTtcbiAgICAgICAgICAgICAgICBpZiAoc2hpcCAhPT0gMCAmJiBzaGlwICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJvYXJkRWxlbWVudC5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXdCb2FyZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0aWFsaXplR2FtZSgpIHtcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBwbGFjaW5nIGJvYXJkIGFuZCBhc3NpZ24gbmV3IEdhbWVCb2FyZCBpbnN0YW5jZXNcbiAgICAgICAgcGxheWVyR2FtZUJvYXJkID0gY3JlYXRlQm9hcmQocGxheWVyQm9hcmQsICdwbGF5ZXInKTtcbiAgICAgICAgY29tcHV0ZXJHYW1lQm9hcmQgPSBjcmVhdGVCb2FyZChjb21wdXRlckJvYXJkLCAnY29tcHV0ZXInKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2xlZXAobXMpIHsgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpOyB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBjb21wdXRlclR1cm5Ub1Nob290KCkge1xuICAgICAgICBjb25zdCBwbGF5ZXJDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5ZXItYm9hcmQgLmNlbGwnKTtcblxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgY29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXRDZWxsID0gQXJyYXkuZnJvbShwbGF5ZXJDZWxscykuZmluZChjZWxsID0+IHBhcnNlSW50KGNlbGwuZGF0YXNldC5yb3cpID09PSB4ICYmIHBhcnNlSW50KGNlbGwuZGF0YXNldC5jb2wpID09PSB5KTtcblxuICAgICAgICAvLyBpZiB0YXJnZXQgYWxyZWFkeSB0cmllZCwgcGljayBhZ2FpbiAobG9vcClcbiAgICAgICAgaWYgKCF0YXJnZXRDZWxsIHx8IHRhcmdldENlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaXQnKSB8fCB0YXJnZXRDZWxsLmNsYXNzTGlzdC5jb250YWlucygnbWlzcycpKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzbWFsbCBkZWxheSB0byBzaW11bGF0ZSB0aGlua2luZyAob3B0aW9uYWwpXG4gICAgICAgIGF3YWl0IHNsZWVwKDYwMCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldENlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwJykgJiYgcGxheWVyR2FtZUJvYXJkLnJlY2l2ZUF0dGFjayh4LCB5KSkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRDZWxsLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgICAgICAgICAgICAgICBnYW1lU3RhdHVzLnRleHRDb250ZW50ID0gXCJFTkVNWSBTVFJJS0UhIFlPVVIgVkVTU0VMIEhBUyBCRUVOIEhJVCFcIjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllckdhbWVCb2FyZC5hbGxTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVTdGF0dXMudGV4dENvbnRlbnQgPSBcIkFMTCBZT1VSIFZFU1NFTFMgSEFWRSBCRUVOIERFU1RST1lFRCAtIERFRkVBVCFcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkTG9ja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllckJvYXJkLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wdXRlckJvYXJkLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YXJnZXRDZWxsLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICAgICAgICBnYW1lU3RhdHVzLnRleHRDb250ZW50ID0gXCJFTkVNWSBNSVNTRUQhIFlPVVIgVkVTU0VMIElTIFNBRkUhXCI7XG4gICAgfVxuICAgIHJldHVybjsgLy8gc2hvdCBwcm9jZXNzZWQsIGV4aXRcbiAgfVxuXG4gICAgfVxuXG5cbiAgICBpbml0aWFsaXplR2FtZSgpO1xuXG4gICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVycyBmb3IgZ2FtZSBjb250cm9sc1xuICAgIHN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBnYW1lU3RhdHVzLnRleHRDb250ZW50ID0gXCJSQURBUiBBQ1RJVkUgLSBFTkdBR0UgRU5FTVkgVEFSR0VUU1wiO1xuICAgICAgICBzdGFydEJ0bi5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICAgICAgLy8gQWRkIGNsaWNrIGhhbmRsZXJzIHRvIGNvbXB1dGVyIGJvYXJkIGZvciBnYW1lcGxheVxuICAgICAgICBjb25zdCBjb21wdXRlckNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbXB1dGVyLWJvYXJkIC5jZWxsJyk7XG5cbiAgICAgICAgY29tcHV0ZXJDZWxscy5mb3JFYWNoKGNlbGwgPT4ge1xuICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoYm9hcmRMb2NrZWQpIHJldHVybjtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaXQnKSAmJiAhdGhpcy5jbGFzc0xpc3QuY29udGFpbnMoJ21pc3MnKSAmJiAhdGhpcy5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwJykgJiYgY29tcHV0ZXJHYW1lQm9hcmQucmVjaXZlQXR0YWNrKHBhcnNlSW50KHRoaXMuZGF0YXNldC5yb3cpLCBwYXJzZUludCh0aGlzLmRhdGFzZXQuY29sKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lU3RhdHVzLnRleHRDb250ZW50ID0gXCJESVJFQ1QgSElUISBFTkVNWSBWRVNTRUwgREFNQUdFRCFcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNvbXB1dGVyR2FtZUJvYXJkLmFsbFN1bmsoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVTdGF0dXMudGV4dENvbnRlbnQgPSBcIkFMTCBFTkVNWSBWRVNTRUxTIERFU1RST1lFRCAtIFZJQ1RPUlkgQUNISUVWRUQhXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbG9jayBnYW1lIGFuZCBtYXJrIGJvYXJkcyBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkTG9ja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wdXRlckJvYXJkLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyQm9hcmQuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVTdGF0dXMudGV4dENvbnRlbnQgPSBcIlRBUkdFVCBNSVNTRUQgLSBSRUNBTElCUkFUSU5HXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYm9hcmRMb2NrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBzbGVlcCgyMDApO1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBjb21wdXRlclR1cm5Ub1Nob290KCk7XG4gICAgICAgICAgICAgICAgICAgIGJvYXJkTG9ja2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoY29tcHV0ZXJUdXJuVG9TaG9vdCwgMTAwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmVzZXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGluaXRpYWxpemVHYW1lKCk7XG4gICAgICAgIC8vIHVubG9jayBib2FyZHMgYW5kIHJlbW92ZSBkaXNhYmxlZCB2aXN1YWwgc3RhdGVcbiAgICAgICAgYm9hcmRMb2NrZWQgPSBmYWxzZTtcbiAgICAgICAgcGxheWVyQm9hcmQuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgY29tcHV0ZXJCb2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpO1xuXG4gICAgICAgIGdhbWVTdGF0dXMudGV4dENvbnRlbnQgPSBcIlNZU1RFTVMgUkVTRVQgLSBERVBMT1kgWU9VUiBGTEVFVFwiO1xuICAgICAgICBzdGFydEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH0pO1xuXG4gICAgLy8gcmFuZG9tQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIC8vICAgICBjcmVhdGVCb2FyZChwbGF5ZXJCb2FyZCwgdHJ1ZSk7XG4gICAgLy8gICAgIGdhbWVTdGF0dXMudGV4dENvbnRlbnQgPSBcIlJBTkRPTSBERVBMT1lNRU5UIENPTVBMRVRFIC0gQUNUSVZBVEUgUkFEQVJcIjtcbiAgICAvLyB9KTtcbn0pO1xufVxubW9kdWxlLmV4cG9ydHMgPSAge2xvYWQsIHBsYWNlU2hpcHNSYW5kb21seX07XG5cblxuXG5cblxuXG5cblxuXG5cbi8vICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4vLyAgICAgICA8aGVhZGVyPlxuLy8gICAgICAgICA8aDE+QkFUVExFU0hJUDwvaDE+XG4vLyAgICAgICAgIDxkaXYgY2xhc3M9XCJnYW1lLXN0YXR1c1wiPlxuLy8gICAgICAgICAgIEFDVElWQVRFIFJBREFSIFNZU1RFTVMgLSBERVBMT1kgWU9VUiBGTEVFVFxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICAgIDwvaGVhZGVyPlxuXG4vLyAgICAgICA8ZGl2IGNsYXNzPVwiZ2FtZS1ib2FyZHNcIj5cbi8vICAgICAgICAgPGRpdiBjbGFzcz1cImJvYXJkLWNvbnRhaW5lclwiPlxuLy8gICAgICAgICAgIDxoMiBjbGFzcz1cImJvYXJkLXRpdGxlXCI+RlJJRU5ETFkgRkxFRVQ8L2gyPlxuLy8gICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb29yZGluYXRlc1wiPlxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvb3JkaW5hdGVcIj5BPC9kaXY+XG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29vcmRpbmF0ZVwiPkI8L2Rpdj5cbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb29yZGluYXRlXCI+QzwvZGl2PlxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvb3JkaW5hdGVcIj5EPC9kaXY+XG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29vcmRpbmF0ZVwiPkU8L2Rpdj5cbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb29yZGluYXRlXCI+RjwvZGl2PlxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvb3JkaW5hdGVcIj5HPC9kaXY+XG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29vcmRpbmF0ZVwiPkg8L2Rpdj5cbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb29yZGluYXRlXCI+STwvZGl2PlxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvb3JkaW5hdGVcIj5KPC9kaXY+XG4vLyAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgPGRpdiBjbGFzcz1cImdhbWUtYm9hcmQgcGxheWVyLWJvYXJkXCI+XG4vLyAgICAgICAgICAgICA8IS0tIFBsYXllciBib2FyZCBjZWxscyB3aWxsIGJlIGdlbmVyYXRlZCBieSBKYXZhU2NyaXB0IC0tPlxuLy8gICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICA8L2Rpdj5cblxuLy8gICAgICAgICA8ZGl2IGNsYXNzPVwiYm9hcmQtY29udGFpbmVyXCI+XG4vLyAgICAgICAgICAgPGgyIGNsYXNzPVwiYm9hcmQtdGl0bGVcIj5FTkVNWSBXQVRFUlM8L2gyPlxuLy8gICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb29yZGluYXRlc1wiPlxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvb3JkaW5hdGVcIj5BPC9kaXY+XG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29vcmRpbmF0ZVwiPkI8L2Rpdj5cbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb29yZGluYXRlXCI+QzwvZGl2PlxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvb3JkaW5hdGVcIj5EPC9kaXY+XG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29vcmRpbmF0ZVwiPkU8L2Rpdj5cbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb29yZGluYXRlXCI+RjwvZGl2PlxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvb3JkaW5hdGVcIj5HPC9kaXY+XG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29vcmRpbmF0ZVwiPkg8L2Rpdj5cbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb29yZGluYXRlXCI+STwvZGl2PlxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvb3JkaW5hdGVcIj5KPC9kaXY+XG4vLyAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgPGRpdiBjbGFzcz1cImdhbWUtYm9hcmQgY29tcHV0ZXItYm9hcmRcIj5cbi8vICAgICAgICAgICAgIDwhLS0gQ29tcHV0ZXIgYm9hcmQgY2VsbHMgd2lsbCBiZSBnZW5lcmF0ZWQgYnkgSmF2YVNjcmlwdCAtLT5cbi8vICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgPC9kaXY+XG4vLyAgICAgICA8L2Rpdj5cblxuLy8gICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xzXCI+XG4vLyAgICAgICAgIDxidXR0b24gaWQ9XCJzdGFydC1idG5cIj5BQ1RJVkFURSBSQURBUjwvYnV0dG9uPlxuLy8gICAgICAgICA8YnV0dG9uIGlkPVwicmVzZXQtYnRuXCI+UkVTRVQgU1lTVEVNUzwvYnV0dG9uPlxuLy8gICAgICAgPC9kaXY+XG5cbi8vICAgICAgIDxkaXYgY2xhc3M9XCJpbnN0cnVjdGlvbnNcIj5cbi8vICAgICAgICAgPGgyPlRBQ1RJQ0FMIEJSSUVGSU5HPC9oMj5cbi8vICAgICAgICAgPHVsPlxuLy8gICAgICAgICAgIDxsaT5EZXBsb3kgeW91ciBmbGVldCBvbiB5b3VyIHRhY3RpY2FsIGdyaWQ8L2xpPlxuLy8gICAgICAgICAgIDxsaT5BY3RpdmF0ZSByYWRhciBzeXN0ZW1zIHRvIGJlZ2luIGVuZ2FnZW1lbnQ8L2xpPlxuLy8gICAgICAgICAgIDxsaT5UYXJnZXQgZW5lbXkgY29vcmRpbmF0ZXMgYnkgc2VsZWN0aW5nIGdyaWQgcG9zaXRpb25zPC9saT5cbi8vICAgICAgICAgICA8bGk+UmVkIG1hcmtlcnMgaW5kaWNhdGUgc3VjY2Vzc2Z1bCBoaXRzIG9uIGVuZW15IHZlc3NlbHM8L2xpPlxuLy8gICAgICAgICAgIDxsaT5HcmF5IG1hcmtlcnMgaW5kaWNhdGUgbWlzc2VkIHRhcmdldHM8L2xpPlxuLy8gICAgICAgICAgIDxsaT5FbGltaW5hdGUgYWxsIGVuZW15IHNoaXBzIHRvIGFjaGlldmUgdmljdG9yeTwvbGk+XG4vLyAgICAgICAgIDwvdWw+XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICA8L2Rpdj5cbi8vIFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcblxuXG4gICAgLy8gPGRpdiBjbGFzcz1cImluaXRpYWwtdWlcIj5cbiAgICAvLyAgIDxoMT5XRUxDT01FIFRPIEJBVFRMRVNISVA8L2gxPlxuICAgIC8vICAgPGgzPlBsYWNlIFlvdSBDYXJyaWVyOjwvaDM+XG5cbiAgICAvLyAgIDxkaXYgY2xhc3M9XCJnYW1lLWJvYXJkcyBpbml0aWFsLWJvYXJkXCI+XG4gICAgLy8gICAgIDxkaXYgY2xhc3M9XCJib2FyZC1jb250YWluZXJcIj5cbiAgICAvLyAgICAgICA8ZGl2IGNsYXNzPVwiY29vcmRpbmF0ZXNcIj5cbiAgICAvLyAgICAgICAgIDxkaXYgY2xhc3M9XCJjb29yZGluYXRlXCI+QTwvZGl2PlxuICAgIC8vICAgICAgICAgPGRpdiBjbGFzcz1cImNvb3JkaW5hdGVcIj5CPC9kaXY+XG4gICAgLy8gICAgICAgICA8ZGl2IGNsYXNzPVwiY29vcmRpbmF0ZVwiPkM8L2Rpdj5cbiAgICAvLyAgICAgICAgIDxkaXYgY2xhc3M9XCJjb29yZGluYXRlXCI+RDwvZGl2PlxuICAgIC8vICAgICAgICAgPGRpdiBjbGFzcz1cImNvb3JkaW5hdGVcIj5FPC9kaXY+XG4gICAgLy8gICAgICAgICA8ZGl2IGNsYXNzPVwiY29vcmRpbmF0ZVwiPkY8L2Rpdj5cbiAgICAvLyAgICAgICAgIDxkaXYgY2xhc3M9XCJjb29yZGluYXRlXCI+RzwvZGl2PlxuICAgIC8vICAgICAgICAgPGRpdiBjbGFzcz1cImNvb3JkaW5hdGVcIj5IPC9kaXY+XG4gICAgLy8gICAgICAgICA8ZGl2IGNsYXNzPVwiY29vcmRpbmF0ZVwiPkk8L2Rpdj5cbiAgICAvLyAgICAgICAgIDxkaXYgY2xhc3M9XCJjb29yZGluYXRlXCI+SjwvZGl2PlxuICAgIC8vICAgICAgIDwvZGl2PlxuICAgIC8vICAgICAgIDxkaXYgY2xhc3M9XCJnYW1lLWJvYXJkIHBsYWNpbmctYm9hcmRcIj5cbiAgICAvLyAgICAgICAgIDwhLS0gUGxheWVyIGJvYXJkIGNlbGxzIHdpbGwgYmUgZ2VuZXJhdGVkIGJ5IEphdmFTY3JpcHQgLS0+XG4gICAgLy8gICAgICAgPC9kaXY+XG4gICAgLy8gICAgIDwvZGl2PlxuICAgIC8vICAgICA8ZGl2PjxidXR0b24gaWQ9XCJyYW5kb20tYnRuXCI+UkFORE9NIERFUExPWU1FTlQ8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICBcbiAgICAvLyAgIDwvZGl2PlxuICAgIC8vIDwvZGl2PiIsImNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBsZW5ndGgsIGhpdFBvaW50cz0wLCBzdW5rID0gZmFsc2UpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMuaGl0UG9pbnRzID0gaGl0UG9pbnRzO1xuICAgIHRoaXMuc3VuayA9IHN1bms7XG4gIH1cblxuICBoaXQoKSB7XG4gICAgdGhpcy5oaXRQb2ludHMrKztcbiAgICBpZiAodGhpcy5oaXRQb2ludHMgPj0gdGhpcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuc3VuayA9IHRydWU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaXNTdW5rKCkge1xuICAgIHJldHVybiB0aGlzLnN1bms7XG4gIH1cbn1cblxuY2xhc3MgR2FtZUJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zaGlwcyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDEwIH0sICgpID0+IEFycmF5KDEwKS5maWxsKDApKTtcbiAgICB0aGlzLm51bWJlck9mU3Vua1NoaXBzID0gMDtcbiAgfVxuICBcbiAgYWRkU2hpcChzaGlwLCBheCwgYXksIGF4aXMpIHtcbiAgICBpZihheGlzID09PSAndmVydGljYWwnKSB7XG4gICAgICBpZihheSArIHNoaXAubGVuZ3RoID4gMTApIHJldHVybiBmYWxzZTtcbiAgICAgIGZvciAobGV0IGkgPSBheTsgaSA8IGF5ICsgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZih0aGlzLnNoaXBzW2F4XVtpXSAhPT0gMCkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IGF5OyBpIDwgYXkgKyBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMuc2hpcHNbYXhdW2ldID0gc2hpcDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gXG4gICAgXG4gICAgZWxzZSBpZihheGlzID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIGlmKGF4ICsgc2hpcC5sZW5ndGggPiAxMCkgcmV0dXJuIGZhbHNlO1xuICAgICAgZm9yIChsZXQgaSA9IGF4OyBpIDwgYXggKyBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKHRoaXMuc2hpcHNbaV1bYXldICE9PSAwKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gYXg7IGkgPCBheCArIHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5zaGlwc1tpXVtheV0gPSBzaGlwO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJlY2l2ZUF0dGFjayh4LCB5KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5zaGlwc1t4XVt5XTtcbiAgICBpZiAodGFyZ2V0ICE9PSAwICYmIHRhcmdldCAhPT0gMSkge1xuICAgICAgaWYodGFyZ2V0LmhpdCgpKSB0aGlzLm51bWJlck9mU3Vua1NoaXBzKys7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZih0YXJnZXQgPT09IDApIHtcbiAgICAgIHRoaXMuc2hpcHNbeF1beV0gPSAxOyAvLyBNYXJrIGFzIG1pc3NcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgYWxsU3VuaygpIHtcbiAgICByZXR1cm4gdGhpcy5udW1iZXJPZlN1bmtTaGlwcyA9PT0gNTsgLy8gQXNzdW1pbmcgdGhlcmUgYXJlIDUgc2hpcHMgaW4gdG90YWxcbiAgfVxufVxuXG5jbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKHR5cGUsIGdhbWVCb2FyZCkge1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLmdhbWVCb2FyZCA9IGdhbWVCb2FyZDtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0geyBTaGlwLCBHYW1lQm9hcmQsIFBsYXllciB9OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuY29uc3Qge2xvYWR9ID0gcmVxdWlyZSgnLi9nYW1lJyk7XG5jb25zb2xlLmxvZyhcIkhlbGxvIFdvcmxkIVwiKTtcbmxvYWQoKTtcblxuLy8gY29uc3Qgc3VtID0gcmVxdWlyZSgnLi9zdW0nKTtcbi8vIG1vZHVsZS5leHBvcnRzID0gc3VtOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==