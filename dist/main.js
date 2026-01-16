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

.cell.ship.player {
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
  cursor: not-allowed;
}
.cell.disabled {
  pointer-events: none;
  cursor: not-allowed;
}
.board.disabled { pointer-events: none; }

/* ===== VICTORY ANIMATION STYLES ===== */
#victory-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.85);
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    pointer-events: none;
}

.victory-container {
    text-align: center;
    position: relative;
    z-index: 1001;
}

.victory-text {
    font-size: 6rem;
    font-weight: 900;
    color: #ffcc00;
    text-shadow: 
        0 0 20px #ffcc00,
        0 0 40px #ff9900,
        0 0 60px #ff6600;
    letter-spacing: 10px;
    margin-bottom: 30px;
    animation: victoryPulse 2s infinite alternate;
    transform: translateY(-50px);
    opacity: 0;
}

.victory-subtext {
    font-size: 2rem;
    color: #0ff;
    text-shadow: 0 0 10px #0ff;
    margin-bottom: 50px;
    opacity: 0;
}

.continue-btn {
    padding: 15px 40px;
    font-size: 1.2rem;
    background: linear-gradient(to bottom, #ff9900, #ff6600);
    color: #000;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    box-shadow: 0 0 20px rgba(255, 153, 0, 0.7);
    opacity: 0;
    pointer-events: auto;
    transition: all 0.3s ease;
}

.continue-btn:hover {
    background: linear-gradient(to bottom, #ffcc00, #ff9900);
    box-shadow: 0 0 30px rgba(255, 204, 0, 0.9);
    transform: scale(1.05);
}

/* Explosion particles */
.explosion {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    pointer-events: none;
    z-index: 1000;
}

/* Confetti */
.confetti {
    position: fixed;
    width: 10px;
    height: 10px;
    opacity: 0;
    z-index: 999;
}

/* Firework bursts */
.firework {
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    pointer-events: none;
    z-index: 1000;
}

/* Animations */
@keyframes victoryPulse {
    0% {
        text-shadow: 
            0 0 20px #ffcc00,
            0 0 40px #ff9900,
            0 0 60px #ff6600;
        transform: scale(1);
    }
    100% {
        text-shadow: 
            0 0 30px #ffcc00,
            0 0 60px #ff9900,
            0 0 90px #ff6600;
        transform: scale(1.05);
    }
}

@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes explode {
    0% {
        transform: scale(0);
        opacity: 1;
    }
    100% {
        transform: scale(10);
        opacity: 0;
    }
}

@keyframes flyUp {
    0% {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
    }
    100% {
        transform: translateY(-100vh) rotate(360deg);
        opacity: 0;
    }
}

@keyframes burst {
    0% {
        transform: translate(0, 0) scale(1);
        opacity: 1;
    }
    100% {
        transform: translate(var(--tx), var(--ty)) scale(0);
        opacity: 0;
    }
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Orbitron\", monospace;\n}\n\nbody {\n  background: radial-gradient(circle at center, #001122, #000811);\n  color: #0af;\n  min-height: 100vh;\n  padding: 20px;\n  overflow-x: hidden;\n}\n\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\nheader {\n  text-align: center;\n  padding: 20px 0;\n  margin-bottom: 30px;\n  position: relative;\n}\n\nh1 {\n  font-size: 3.2rem;\n  text-shadow: 0 0 10px #0af, 0 0 20px #0af;\n  margin-bottom: 10px;\n  letter-spacing: 3px;\n  background: linear-gradient(to right, #0af, #0ff);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n}\n\n.game-status {\n  font-size: 1.2rem;\n  background-color: rgba(0, 20, 40, 0.7);\n  padding: 10px 20px;\n  border-radius: 10px;\n  display: inline-block;\n  margin-bottom: 20px;\n  border: 1px solid #0af;\n  box-shadow: 0 0 10px rgba(0, 170, 255, 0.5);\n  text-shadow: 0 0 5px #0af;\n}\n\n.game-boards {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 30px;\n}\n\n.board-container {\n  flex: 1;\n  min-width: 300px;\n  background: radial-gradient(\n    circle at center,\n    rgba(0, 30, 60, 0.8),\n    rgba(0, 10, 30, 0.9)\n  );\n  border-radius: 10px;\n  padding: 20px;\n  box-shadow: 0 0 20px rgba(0, 170, 255, 0.3);\n  backdrop-filter: blur(5px);\n  border: 1px solid #0af;\n  position: relative;\n  overflow: hidden;\n}\n\n.board-container::before {\n  content: \"\";\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  background: conic-gradient(\n    transparent,\n    rgba(0, 170, 255, 0.1),\n    transparent 30%\n  );\n  animation: rotate 10s linear infinite;\n}\n\n@keyframes rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.board-title {\n  text-align: center;\n  margin-bottom: 15px;\n  font-size: 1.5rem;\n  color: #0ff;\n  text-shadow: 0 0 10px #0ff;\n  position: relative;\n  z-index: 1;\n}\n\n.game-board {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  gap: 2px;\n  width: 100%;\n  aspect-ratio: 1 / 1;\n  margin: 0 auto;\n  border: 2px solid #0af;\n  background-color: rgba(0, 10, 30, 0.7);\n  border-radius: 5px;\n  overflow: hidden;\n  position: relative;\n  z-index: 1;\n}\n\n.game-board::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: radial-gradient(\n      circle at center,\n      transparent 70%,\n      rgba(0, 170, 255, 0.1) 100%\n    ),\n    repeating-linear-gradient(\n      0deg,\n      transparent,\n      transparent 9.5%,\n      rgba(0, 170, 255, 0.1) 10%\n    ),\n    repeating-linear-gradient(\n      90deg,\n      transparent,\n      transparent 9.5%,\n      rgba(0, 170, 255, 0.1) 10%\n    );\n  pointer-events: none;\n}\n\n.cell {\n  background-color: rgba(0, 20, 40, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n  cursor: pointer;\n  position: relative;\n  border: 1px solid rgba(0, 170, 255, 0.2);\n}\n\n.initial-board .cell:hover {\n  background-color: rgba(0, 100, 200, 0.5);\n  box-shadow: 0 0 10px rgba(0, 170, 255, 0.5);\n}\n\n.player-board .cell:hover {\n  background-color: rgba(0, 100, 200, 0.5);\n  box-shadow: 0 0 10px rgba(0, 170, 255, 0.5);\n}\n\n.computer-board .cell:hover {\n  background-color: rgba(0, 100, 200, 0.5);\n  box-shadow: 0 0 10px rgba(0, 170, 255, 0.5);\n}\n\n.cell.hit::after {\n  content: \"✕\";\n  color: #f00;\n  font-size: 1.5rem;\n  font-weight: bold;\n  text-shadow: 0 0 10px #f00;\n  animation: pulse 1s infinite;\n}\n\n.cell.miss::after {\n  content: \"•\";\n  color: #888;\n  font-size: 1.8rem;\n  text-shadow: 0 0 5px #888;\n}\n\n.cell.ship.player {\n  background-color: rgba(0, 100, 0, 0.5);\n  box-shadow: inset 0 0 10px rgba(0, 255, 0, 0.3);\n}\n\n.cell.ship.hit {\n  background-color: rgba(100, 0, 0, 0.7);\n  box-shadow: inset 0 0 10px rgba(255, 0, 0, 0.5);\n}\n\n@keyframes pulse {\n  0% {\n    opacity: 0.7;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0.7;\n  }\n}\n\n.coordinates {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 5px;\n  padding: 0 5px;\n}\n\n.coordinate {\n  width: calc(100% / 10);\n  text-align: center;\n  font-weight: bold;\n  color: #0ff;\n  text-shadow: 0 0 5px #0ff;\n}\n\n.controls {\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n  margin-top: 30px;\n  flex-wrap: wrap;\n}\n\nbutton {\n  padding: 12px 25px;\n  font-size: 1rem;\n  background: linear-gradient(to bottom, #003366, #001122);\n  color: #0ff;\n  border: 1px solid #0af;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-weight: bold;\n  box-shadow: 0 0 10px rgba(0, 170, 255, 0.5);\n  text-shadow: 0 0 5px #0af;\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n}\n\nbutton::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(\n    90deg,\n    transparent,\n    rgba(0, 170, 255, 0.4),\n    transparent\n  );\n  transition: 0.5s;\n  z-index: -1;\n}\n\nbutton:hover {\n  box-shadow: 0 0 20px rgba(0, 170, 255, 0.8);\n  color: #fff;\n}\n\nbutton:hover::before {\n  left: 100%;\n}\n\nbutton:active {\n  transform: translateY(2px);\n}\n\n.instructions {\n  max-width: 800px;\n  margin: 30px auto;\n  background: radial-gradient(\n    circle at center,\n    rgba(0, 30, 60, 0.8),\n    rgba(0, 10, 30, 0.9)\n  );\n  padding: 20px;\n  border-radius: 10px;\n  line-height: 1.6;\n  border: 1px solid #0af;\n  box-shadow: 0 0 20px rgba(0, 170, 255, 0.3);\n  position: relative;\n  z-index: 1;\n}\n\n.instructions h2 {\n  color: #0ff;\n  margin-bottom: 15px;\n  text-align: center;\n  text-shadow: 0 0 10px #0ff;\n}\n\n.instructions ul {\n  margin-left: 20px;\n}\n\n.instructions li {\n  margin-bottom: 8px;\n  text-shadow: 0 0 5px #0af;\n}\n\n.radar-sweep {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  pointer-events: none;\n  z-index: -1;\n  opacity: 0.1;\n}\n\n.radar-sweep::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: conic-gradient(\n    from 0deg,\n    transparent 0%,\n    rgba(0, 255, 255, 0.1) 10%,\n    transparent 20%\n  );\n  animation: radar-sweep 4s linear infinite;\n}\n\n@keyframes radar-sweep {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@media (max-width: 768px) {\n  .game-boards {\n    flex-direction: column;\n  }\n\n  .board-container {\n    width: 100%;\n  }\n\n  h1 {\n    font-size: 2.5rem;\n  }\n}\n\n.initial-ui {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 30px;\n  margin-top: 10px;\n}\n\n.initial-board {\n  height: 450px;\n  width: 450px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;  \n}\n\n.disabled {\n  pointer-events: none;\n  cursor: not-allowed;\n}\n.cell.disabled {\n  pointer-events: none;\n  cursor: not-allowed;\n}\n.board.disabled { pointer-events: none; }\n\n/* ===== VICTORY ANIMATION STYLES ===== */\n#victory-overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.85);\n    display: none;\n    justify-content: center;\n    align-items: center;\n    z-index: 1000;\n    pointer-events: none;\n}\n\n.victory-container {\n    text-align: center;\n    position: relative;\n    z-index: 1001;\n}\n\n.victory-text {\n    font-size: 6rem;\n    font-weight: 900;\n    color: #ffcc00;\n    text-shadow: \n        0 0 20px #ffcc00,\n        0 0 40px #ff9900,\n        0 0 60px #ff6600;\n    letter-spacing: 10px;\n    margin-bottom: 30px;\n    animation: victoryPulse 2s infinite alternate;\n    transform: translateY(-50px);\n    opacity: 0;\n}\n\n.victory-subtext {\n    font-size: 2rem;\n    color: #0ff;\n    text-shadow: 0 0 10px #0ff;\n    margin-bottom: 50px;\n    opacity: 0;\n}\n\n.continue-btn {\n    padding: 15px 40px;\n    font-size: 1.2rem;\n    background: linear-gradient(to bottom, #ff9900, #ff6600);\n    color: #000;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n    font-weight: bold;\n    box-shadow: 0 0 20px rgba(255, 153, 0, 0.7);\n    opacity: 0;\n    pointer-events: auto;\n    transition: all 0.3s ease;\n}\n\n.continue-btn:hover {\n    background: linear-gradient(to bottom, #ffcc00, #ff9900);\n    box-shadow: 0 0 30px rgba(255, 204, 0, 0.9);\n    transform: scale(1.05);\n}\n\n/* Explosion particles */\n.explosion {\n    position: absolute;\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    pointer-events: none;\n    z-index: 1000;\n}\n\n/* Confetti */\n.confetti {\n    position: fixed;\n    width: 10px;\n    height: 10px;\n    opacity: 0;\n    z-index: 999;\n}\n\n/* Firework bursts */\n.firework {\n    position: absolute;\n    width: 5px;\n    height: 5px;\n    border-radius: 50%;\n    pointer-events: none;\n    z-index: 1000;\n}\n\n/* Animations */\n@keyframes victoryPulse {\n    0% {\n        text-shadow: \n            0 0 20px #ffcc00,\n            0 0 40px #ff9900,\n            0 0 60px #ff6600;\n        transform: scale(1);\n    }\n    100% {\n        text-shadow: \n            0 0 30px #ffcc00,\n            0 0 60px #ff9900,\n            0 0 90px #ff6600;\n        transform: scale(1.05);\n    }\n}\n\n@keyframes fadeInUp {\n    to {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n\n@keyframes explode {\n    0% {\n        transform: scale(0);\n        opacity: 1;\n    }\n    100% {\n        transform: scale(10);\n        opacity: 0;\n    }\n}\n\n@keyframes flyUp {\n    0% {\n        transform: translateY(0) rotate(0deg);\n        opacity: 1;\n    }\n    100% {\n        transform: translateY(-100vh) rotate(360deg);\n        opacity: 0;\n    }\n}\n\n@keyframes burst {\n    0% {\n        transform: translate(0, 0) scale(1);\n        opacity: 1;\n    }\n    100% {\n        transform: translate(var(--tx), var(--ty)) scale(0);\n        opacity: 0;\n    }\n}"],"sourceRoot":""}]);
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

/***/ "./src/animations.js":
/*!***************************!*\
  !*** ./src/animations.js ***!
  \***************************/
/***/ ((module) => {

function triggerVictory() {
    const overlay = document.getElementById('victory-overlay');
    const victoryText = document.querySelector('.victory-text');
    const victorySubtext = document.querySelector('.victory-subtext');
    const continueBtn = document.querySelector('.continue-btn');
    
    // Show overlay
    overlay.style.display = 'flex';
    
    // Animate victory text
    setTimeout(() => {
        victoryText.style.animation = 'fadeInUp 1s forwards, victoryPulse 2s infinite alternate 1s';
    }, 500);
    
    // Animate subtext
    setTimeout(() => {
        victorySubtext.style.animation = 'fadeInUp 1s forwards';
    }, 1000);
    
    // Animate button
    setTimeout(() => {
        continueBtn.style.animation = 'fadeInUp 1s forwards';
    }, 1500);
    
    // Create explosions
    createExplosions();
    
    // Create confetti
    createConfetti();
    
    // Create fireworks
    createFireworks();
}

function hideVictory() {
    const overlay = document.getElementById('victory-overlay');
    overlay.style.display = 'none';
    
    // Remove all explosion and confetti elements
    document.querySelectorAll('.explosion, .confetti, .firework').forEach(el => {
        el.remove();
    });
}

function createExplosions() {
    const overlay = document.getElementById('victory-overlay');
    
    // Create large central explosion
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const explosion = document.createElement('div');
            explosion.className = 'explosion';
            
            // Random position around center
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 100 + 50;
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;
            
            explosion.style.left = `calc(50% + ${x}px)`;
            explosion.style.top = `calc(50% + ${y}px)`;
            
            // Random explosion color
            const colors = ['#ff9900', '#ff6600', '#ff3300', '#ffcc00'];
            explosion.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            explosion.style.boxShadow = `0 0 20px ${explosion.style.backgroundColor}`;
            
            // Animation
            explosion.style.animation = `explode ${Math.random() * 0.5 + 0.5}s forwards`;
            
            overlay.appendChild(explosion);
            
            // Remove after animation
            setTimeout(() => {
                explosion.remove();
            }, 1000);
        }, i * 100);
    }
}

function createConfetti() {
    const overlay = document.getElementById('victory-overlay');
    const colors = ['#ff9900', '#ff6600', '#ff3300', '#ffcc00', '#0ff', '#0af'];
    
    for (let i = 0; i < 150; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        
        // Random position at top
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.top = '0px';
        
        // Random color
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Random size
        const size = Math.random() * 10 + 5;
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        
        // Random shape
        if (Math.random() > 0.5) {
            confetti.style.borderRadius = '50%';
        }
        
        overlay.appendChild(confetti);
        
        // Animate
        const delay = Math.random() * 1000;
        const duration = Math.random() * 3 + 2;
        
        setTimeout(() => {
            confetti.style.opacity = '1';
            confetti.style.animation = `flyUp ${duration}s forwards`;
            
            // Remove after animation
            setTimeout(() => {
                confetti.remove();
            }, duration * 1000);
        }, delay);
    }
}

function createFireworks() {
    const overlay = document.getElementById('victory-overlay');
    
    // Create multiple firework bursts
    for (let burst = 0; burst < 8; burst++) {
        setTimeout(() => {
            const x = Math.random() * 80 + 10; // 10% to 90%
            const y = Math.random() * 80 + 10;
            
            for (let i = 0; i < 30; i++) {
                const particle = document.createElement('div');
                particle.className = 'firework';
                
                // Position at burst center
                particle.style.left = `${x}vw`;
                particle.style.top = `${y}vh`;
                
                // Random color
                const colors = ['#ff9900', '#ff6600', '#ff3300', '#ffcc00', '#0ff'];
                particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                particle.style.boxShadow = `0 0 10px ${particle.style.backgroundColor}`;
                
                // Random direction and distance
                const angle = Math.random() * Math.PI * 2;
                const distance = Math.random() * 100 + 50;
                const tx = Math.cos(angle) * distance;
                const ty = Math.sin(angle) * distance;
                
                particle.style.setProperty('--tx', `${tx}px`);
                particle.style.setProperty('--ty', `${ty}px`);
                
                // Random size
                const size = Math.random() * 8 + 2;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                
                overlay.appendChild(particle);
                
                // Animate
                particle.style.animation = `burst ${Math.random() * 0.5 + 0.5}s forwards`;
                
                // Remove after animation
                setTimeout(() => {
                    particle.remove();
                }, 800);
            }
        }, burst * 600);
    }
}

module.exports = { triggerVictory, hideVictory };

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { Ship, GameBoard } = __webpack_require__(/*! ./ship */ "./src/ship.js");
const {triggerVictory, hideVictory} = __webpack_require__(/*! ./animations */ "./src/animations.js");

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
    const container = document.querySelector('.container');
    const placingBoard = document.querySelector('.placing-board');
    const initialUi = document.querySelector('.initial-ui');
    const playerBoard = document.querySelector('.player-board');
    const computerBoard = document.querySelector('.computer-board');
    const startBtn = document.getElementById('start-btn');
    const resetBtn = document.getElementById('reset-btn');
    const randomBtn = document.getElementById('random-btn');
    const gameStatus = document.querySelector('.game-status');
    const hideVictoryBtn = document.querySelector('.continue-btn');
    let playerGameBoard = null;
    let computerGameBoard = null;
    let boardLocked = false;

    function createBoard(boardElement, role, playerBoardValue=null) {
        boardElement.innerHTML = '';

        const newBoard = new GameBoard();
        if (playerBoardValue === null) 
            placeShipsRandomly(newBoard);
        else 
            newBoard.ships = playerBoardValue;

        for (let row = 0; row < 10; row++) {
            for (let col = 0; col < 10; col++) {
                const cell = document.createElement('div');
                cell.className = 'cell';
                cell.dataset.row = row;
                cell.dataset.col = col;

                if (role === 'player') {
                    cell.classList.add('player');
                    cell.classList.add('disabled');
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
        initialUi.style.display = 'none';
        container.style.display = 'block';   
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
                            triggerVictory();
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

    hideVictoryBtn.addEventListener('click', function() {
        hideVictory();
    });

    randomBtn.addEventListener('click', function() {
        initializeGame();
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjs7QUFFbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8saUZBQWlGLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksU0FBUyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFFBQVEsS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsb0JBQW9CLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxTQUFTLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxTQUFTLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFNBQVMsS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0seUJBQXlCLGFBQWEsTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLE9BQU8sYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFP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QTtBQUNBOztBQUVBLG1CQUFtQiwwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RW5CLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW9HO0FBQ3BHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7QUFDckMsaUJBQWlCLHVHQUFhO0FBQzlCLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsdUZBQU87Ozs7QUFJOEM7QUFDdEUsT0FBTyxpRUFBZSx1RkFBTyxJQUFJLHVGQUFPLFVBQVUsdUZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7VUN4QjdFO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCxFOzs7OztXQ05BLG1DOzs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQ3RCLE9BQU8sTUFBTSxFQUFFLG1CQUFPLENBQUMsNkJBQVE7QUFDL0I7QUFDQTs7QUFFQTtBQUNBLHdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvYW5pbWF0aW9ucy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtZmFtaWx5OiBcIk9yYml0cm9uXCIsIG1vbm9zcGFjZTtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgY2VudGVyLCAjMDAxMTIyLCAjMDAwODExKTtcbiAgY29sb3I6ICMwYWY7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nOiAyMHB4O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbi5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbmhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweCAwO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAzLjJyZW07XG4gIHRleHQtc2hhZG93OiAwIDAgMTBweCAjMGFmLCAwIDAgMjBweCAjMGFmO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwYWYsICMwZmYpO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5nYW1lLXN0YXR1cyB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDIwLCA0MCwgMC43KTtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwYWY7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMTcwLCAyNTUsIDAuNSk7XG4gIHRleHQtc2hhZG93OiAwIDAgNXB4ICMwYWY7XG59XG5cbi5nYW1lLWJvYXJkcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDMwcHg7XG59XG5cbi5ib2FyZC1jb250YWluZXIge1xuICBmbGV4OiAxO1xuICBtaW4td2lkdGg6IDMwMHB4O1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoXG4gICAgY2lyY2xlIGF0IGNlbnRlcixcbiAgICByZ2JhKDAsIDMwLCA2MCwgMC44KSxcbiAgICByZ2JhKDAsIDEwLCAzMCwgMC45KVxuICApO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDAsIDE3MCwgMjU1LCAwLjMpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzBhZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYm9hcmQtY29udGFpbmVyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTUwJTtcbiAgbGVmdDogLTUwJTtcbiAgd2lkdGg6IDIwMCU7XG4gIGhlaWdodDogMjAwJTtcbiAgYmFja2dyb3VuZDogY29uaWMtZ3JhZGllbnQoXG4gICAgdHJhbnNwYXJlbnQsXG4gICAgcmdiYSgwLCAxNzAsIDI1NSwgMC4xKSxcbiAgICB0cmFuc3BhcmVudCAzMCVcbiAgKTtcbiAgYW5pbWF0aW9uOiByb3RhdGUgMTBzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyByb3RhdGUge1xuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5cbi5ib2FyZC10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGNvbG9yOiAjMGZmO1xuICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggIzBmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xufVxuXG4uZ2FtZS1ib2FyZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcbiAgZ2FwOiAycHg7XG4gIHdpZHRoOiAxMDAlO1xuICBhc3BlY3QtcmF0aW86IDEgLyAxO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyOiAycHggc29saWQgIzBhZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMCwgMzAsIDAuNyk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xufVxuXG4uZ2FtZS1ib2FyZDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChcbiAgICAgIGNpcmNsZSBhdCBjZW50ZXIsXG4gICAgICB0cmFuc3BhcmVudCA3MCUsXG4gICAgICByZ2JhKDAsIDE3MCwgMjU1LCAwLjEpIDEwMCVcbiAgICApLFxuICAgIHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoXG4gICAgICAwZGVnLFxuICAgICAgdHJhbnNwYXJlbnQsXG4gICAgICB0cmFuc3BhcmVudCA5LjUlLFxuICAgICAgcmdiYSgwLCAxNzAsIDI1NSwgMC4xKSAxMCVcbiAgICApLFxuICAgIHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoXG4gICAgICA5MGRlZyxcbiAgICAgIHRyYW5zcGFyZW50LFxuICAgICAgdHJhbnNwYXJlbnQgOS41JSxcbiAgICAgIHJnYmEoMCwgMTcwLCAyNTUsIDAuMSkgMTAlXG4gICAgKTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5jZWxsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyMCwgNDAsIDAuNyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAxNzAsIDI1NSwgMC4yKTtcbn1cblxuLmluaXRpYWwtYm9hcmQgLmNlbGw6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEwMCwgMjAwLCAwLjUpO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDE3MCwgMjU1LCAwLjUpO1xufVxuXG4ucGxheWVyLWJvYXJkIC5jZWxsOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMDAsIDIwMCwgMC41KTtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAxNzAsIDI1NSwgMC41KTtcbn1cblxuLmNvbXB1dGVyLWJvYXJkIC5jZWxsOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMDAsIDIwMCwgMC41KTtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAxNzAsIDI1NSwgMC41KTtcbn1cblxuLmNlbGwuaGl0OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwi4pyVXCI7XG4gIGNvbG9yOiAjZjAwO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtc2hhZG93OiAwIDAgMTBweCAjZjAwO1xuICBhbmltYXRpb246IHB1bHNlIDFzIGluZmluaXRlO1xufVxuXG4uY2VsbC5taXNzOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwi4oCiXCI7XG4gIGNvbG9yOiAjODg4O1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgdGV4dC1zaGFkb3c6IDAgMCA1cHggIzg4ODtcbn1cblxuLmNlbGwuc2hpcC5wbGF5ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEwMCwgMCwgMC41KTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDEwcHggcmdiYSgwLCAyNTUsIDAsIDAuMyk7XG59XG5cbi5jZWxsLnNoaXAuaGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDAsIDAsIDAsIDAuNyk7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4IHJnYmEoMjU1LCAwLCAwLCAwLjUpO1xufVxuXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMC43O1xuICB9XG59XG5cbi5jb29yZGluYXRlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBwYWRkaW5nOiAwIDVweDtcbn1cblxuLmNvb3JkaW5hdGUge1xuICB3aWR0aDogY2FsYygxMDAlIC8gMTApO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzBmZjtcbiAgdGV4dC1zaGFkb3c6IDAgMCA1cHggIzBmZjtcbn1cblxuLmNvbnRyb2xzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMjBweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG5idXR0b24ge1xuICBwYWRkaW5nOiAxMnB4IDI1cHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzAwMzM2NiwgIzAwMTEyMik7XG4gIGNvbG9yOiAjMGZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMGFmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMTcwLCAyNTUsIDAuNSk7XG4gIHRleHQtc2hhZG93OiAwIDAgNXB4ICMwYWY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgei1pbmRleDogMTtcbn1cblxuYnV0dG9uOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogLTEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICA5MGRlZyxcbiAgICB0cmFuc3BhcmVudCxcbiAgICByZ2JhKDAsIDE3MCwgMjU1LCAwLjQpLFxuICAgIHRyYW5zcGFyZW50XG4gICk7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHotaW5kZXg6IC0xO1xufVxuXG5idXR0b246aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDAsIDE3MCwgMjU1LCAwLjgpO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuYnV0dG9uOmhvdmVyOjpiZWZvcmUge1xuICBsZWZ0OiAxMDAlO1xufVxuXG5idXR0b246YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XG59XG5cbi5pbnN0cnVjdGlvbnMge1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBtYXJnaW46IDMwcHggYXV0bztcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KFxuICAgIGNpcmNsZSBhdCBjZW50ZXIsXG4gICAgcmdiYSgwLCAzMCwgNjAsIDAuOCksXG4gICAgcmdiYSgwLCAxMCwgMzAsIDAuOSlcbiAgKTtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzBhZjtcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgwLCAxNzAsIDI1NSwgMC4zKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xufVxuXG4uaW5zdHJ1Y3Rpb25zIGgyIHtcbiAgY29sb3I6ICMwZmY7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4ICMwZmY7XG59XG5cbi5pbnN0cnVjdGlvbnMgdWwge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLmluc3RydWN0aW9ucyBsaSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgdGV4dC1zaGFkb3c6IDAgMCA1cHggIzBhZjtcbn1cblxuLnJhZGFyLXN3ZWVwIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHotaW5kZXg6IC0xO1xuICBvcGFjaXR5OiAwLjE7XG59XG5cbi5yYWRhci1zd2VlcDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGNvbmljLWdyYWRpZW50KFxuICAgIGZyb20gMGRlZyxcbiAgICB0cmFuc3BhcmVudCAwJSxcbiAgICByZ2JhKDAsIDI1NSwgMjU1LCAwLjEpIDEwJSxcbiAgICB0cmFuc3BhcmVudCAyMCVcbiAgKTtcbiAgYW5pbWF0aW9uOiByYWRhci1zd2VlcCA0cyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgcmFkYXItc3dlZXAge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmdhbWUtYm9hcmRzIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLmJvYXJkLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICBoMSB7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gIH1cbn1cblxuLmluaXRpYWwtdWkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAzMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uaW5pdGlhbC1ib2FyZCB7XG4gIGhlaWdodDogNDUwcHg7XG4gIHdpZHRoOiA0NTBweDtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgIFxufVxuXG4uZGlzYWJsZWQge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cbi5jZWxsLmRpc2FibGVkIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4uYm9hcmQuZGlzYWJsZWQgeyBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxuXG4vKiA9PT09PSBWSUNUT1JZIEFOSU1BVElPTiBTVFlMRVMgPT09PT0gKi9cbiN2aWN0b3J5LW92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg1KTtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgei1pbmRleDogMTAwMDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLnZpY3RvcnktY29udGFpbmVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDEwMDE7XG59XG5cbi52aWN0b3J5LXRleHQge1xuICAgIGZvbnQtc2l6ZTogNnJlbTtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGNvbG9yOiAjZmZjYzAwO1xuICAgIHRleHQtc2hhZG93OiBcbiAgICAgICAgMCAwIDIwcHggI2ZmY2MwMCxcbiAgICAgICAgMCAwIDQwcHggI2ZmOTkwMCxcbiAgICAgICAgMCAwIDYwcHggI2ZmNjYwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIGFuaW1hdGlvbjogdmljdG9yeVB1bHNlIDJzIGluZmluaXRlIGFsdGVybmF0ZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbi52aWN0b3J5LXN1YnRleHQge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBjb2xvcjogIzBmZjtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggIzBmZjtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbi5jb250aW51ZS1idG4ge1xuICAgIHBhZGRpbmc6IDE1cHggNDBweDtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmY5OTAwLCAjZmY2NjAwKTtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDI1NSwgMTUzLCAwLCAwLjcpO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuLmNvbnRpbnVlLWJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmY2MwMCwgI2ZmOTkwMCk7XG4gICAgYm94LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDIwNCwgMCwgMC45KTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xufVxuXG4vKiBFeHBsb3Npb24gcGFydGljbGVzICovXG4uZXhwbG9zaW9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB6LWluZGV4OiAxMDAwO1xufVxuXG4vKiBDb25mZXR0aSAqL1xuLmNvbmZldHRpIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIG9wYWNpdHk6IDA7XG4gICAgei1pbmRleDogOTk5O1xufVxuXG4vKiBGaXJld29yayBidXJzdHMgKi9cbi5maXJld29yayB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA1cHg7XG4gICAgaGVpZ2h0OiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHotaW5kZXg6IDEwMDA7XG59XG5cbi8qIEFuaW1hdGlvbnMgKi9cbkBrZXlmcmFtZXMgdmljdG9yeVB1bHNlIHtcbiAgICAwJSB7XG4gICAgICAgIHRleHQtc2hhZG93OiBcbiAgICAgICAgICAgIDAgMCAyMHB4ICNmZmNjMDAsXG4gICAgICAgICAgICAwIDAgNDBweCAjZmY5OTAwLFxuICAgICAgICAgICAgMCAwIDYwcHggI2ZmNjYwMDtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRleHQtc2hhZG93OiBcbiAgICAgICAgICAgIDAgMCAzMHB4ICNmZmNjMDAsXG4gICAgICAgICAgICAwIDAgNjBweCAjZmY5OTAwLFxuICAgICAgICAgICAgMCAwIDkwcHggI2ZmNjYwMDtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluVXAge1xuICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBleHBsb2RlIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEwKTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgZmx5VXAge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwdmgpIHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBidXJzdCB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxKTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR4KSwgdmFyKC0tdHkpKSBzY2FsZSgwKTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLCtEQUErRDtFQUMvRCxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix5Q0FBeUM7RUFDekMsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixpREFBaUQ7RUFDakQsNkJBQTZCO0VBQzdCLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsc0NBQXNDO0VBQ3RDLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsMkNBQTJDO0VBQzNDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLFNBQVM7QUFDWDs7QUFFQTtFQUNFLE9BQU87RUFDUCxnQkFBZ0I7RUFDaEI7Ozs7R0FJQztFQUNELG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsMkNBQTJDO0VBQzNDLDBCQUEwQjtFQUMxQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtF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bWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogXFxcIk9yYml0cm9uXFxcIiwgbW9ub3NwYWNlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgY2VudGVyLCAjMDAxMTIyLCAjMDAwODExKTtcXG4gIGNvbG9yOiAjMGFmO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogMTIwMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbmhlYWRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyMHB4IDA7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDMuMnJlbTtcXG4gIHRleHQtc2hhZG93OiAwIDAgMTBweCAjMGFmLCAwIDAgMjBweCAjMGFmO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwYWYsICMwZmYpO1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5nYW1lLXN0YXR1cyB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjAsIDQwLCAwLjcpO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMGFmO1xcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAxNzAsIDI1NSwgMC41KTtcXG4gIHRleHQtc2hhZG93OiAwIDAgNXB4ICMwYWY7XFxufVxcblxcbi5nYW1lLWJvYXJkcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4uYm9hcmQtY29udGFpbmVyIHtcXG4gIGZsZXg6IDE7XFxuICBtaW4td2lkdGg6IDMwMHB4O1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KFxcbiAgICBjaXJjbGUgYXQgY2VudGVyLFxcbiAgICByZ2JhKDAsIDMwLCA2MCwgMC44KSxcXG4gICAgcmdiYSgwLCAxMCwgMzAsIDAuOSlcXG4gICk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMCwgMTcwLCAyNTUsIDAuMyk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwYWY7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uYm9hcmQtY29udGFpbmVyOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC01MCU7XFxuICBsZWZ0OiAtNTAlO1xcbiAgd2lkdGg6IDIwMCU7XFxuICBoZWlnaHQ6IDIwMCU7XFxuICBiYWNrZ3JvdW5kOiBjb25pYy1ncmFkaWVudChcXG4gICAgdHJhbnNwYXJlbnQsXFxuICAgIHJnYmEoMCwgMTcwLCAyNTUsIDAuMSksXFxuICAgIHRyYW5zcGFyZW50IDMwJVxcbiAgKTtcXG4gIGFuaW1hdGlvbjogcm90YXRlIDEwcyBsaW5lYXIgaW5maW5pdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgcm90YXRlIHtcXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cXG4uYm9hcmQtdGl0bGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6ICMwZmY7XFxuICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggIzBmZjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5nYW1lLWJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ2FwOiAycHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwYWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEwLCAzMCwgMC43KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uZ2FtZS1ib2FyZDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KFxcbiAgICAgIGNpcmNsZSBhdCBjZW50ZXIsXFxuICAgICAgdHJhbnNwYXJlbnQgNzAlLFxcbiAgICAgIHJnYmEoMCwgMTcwLCAyNTUsIDAuMSkgMTAwJVxcbiAgICApLFxcbiAgICByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KFxcbiAgICAgIDBkZWcsXFxuICAgICAgdHJhbnNwYXJlbnQsXFxuICAgICAgdHJhbnNwYXJlbnQgOS41JSxcXG4gICAgICByZ2JhKDAsIDE3MCwgMjU1LCAwLjEpIDEwJVxcbiAgICApLFxcbiAgICByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KFxcbiAgICAgIDkwZGVnLFxcbiAgICAgIHRyYW5zcGFyZW50LFxcbiAgICAgIHRyYW5zcGFyZW50IDkuNSUsXFxuICAgICAgcmdiYSgwLCAxNzAsIDI1NSwgMC4xKSAxMCVcXG4gICAgKTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uY2VsbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDIwLCA0MCwgMC43KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAxNzAsIDI1NSwgMC4yKTtcXG59XFxuXFxuLmluaXRpYWwtYm9hcmQgLmNlbGw6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMDAsIDIwMCwgMC41KTtcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMTcwLCAyNTUsIDAuNSk7XFxufVxcblxcbi5wbGF5ZXItYm9hcmQgLmNlbGw6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMDAsIDIwMCwgMC41KTtcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMTcwLCAyNTUsIDAuNSk7XFxufVxcblxcbi5jb21wdXRlci1ib2FyZCAuY2VsbDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEwMCwgMjAwLCAwLjUpO1xcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAxNzAsIDI1NSwgMC41KTtcXG59XFxuXFxuLmNlbGwuaGl0OjphZnRlciB7XFxuICBjb250ZW50OiBcXFwi4pyVXFxcIjtcXG4gIGNvbG9yOiAjZjAwO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtc2hhZG93OiAwIDAgMTBweCAjZjAwO1xcbiAgYW5pbWF0aW9uOiBwdWxzZSAxcyBpbmZpbml0ZTtcXG59XFxuXFxuLmNlbGwubWlzczo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIuKAolxcXCI7XFxuICBjb2xvcjogIzg4ODtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgdGV4dC1zaGFkb3c6IDAgMCA1cHggIzg4ODtcXG59XFxuXFxuLmNlbGwuc2hpcC5wbGF5ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMDAsIDAsIDAuNSk7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTBweCByZ2JhKDAsIDI1NSwgMCwgMC4zKTtcXG59XFxuXFxuLmNlbGwuc2hpcC5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDAsIDAsIDAsIDAuNyk7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTBweCByZ2JhKDI1NSwgMCwgMCwgMC41KTtcXG59XFxuXFxuQGtleWZyYW1lcyBwdWxzZSB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDAuNztcXG4gIH1cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMC43O1xcbiAgfVxcbn1cXG5cXG4uY29vcmRpbmF0ZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIHBhZGRpbmc6IDAgNXB4O1xcbn1cXG5cXG4uY29vcmRpbmF0ZSB7XFxuICB3aWR0aDogY2FsYygxMDAlIC8gMTApO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogIzBmZjtcXG4gIHRleHQtc2hhZG93OiAwIDAgNXB4ICMwZmY7XFxufVxcblxcbi5jb250cm9scyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgcGFkZGluZzogMTJweCAyNXB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzAwMzM2NiwgIzAwMTEyMik7XFxuICBjb2xvcjogIzBmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwYWY7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDE3MCwgMjU1LCAwLjUpO1xcbiAgdGV4dC1zaGFkb3c6IDAgMCA1cHggIzBhZjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG5idXR0b246OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IC0xMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIDkwZGVnLFxcbiAgICB0cmFuc3BhcmVudCxcXG4gICAgcmdiYSgwLCAxNzAsIDI1NSwgMC40KSxcXG4gICAgdHJhbnNwYXJlbnRcXG4gICk7XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgei1pbmRleDogLTE7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDAsIDE3MCwgMjU1LCAwLjgpO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbmJ1dHRvbjpob3Zlcjo6YmVmb3JlIHtcXG4gIGxlZnQ6IDEwMCU7XFxufVxcblxcbmJ1dHRvbjphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XFxufVxcblxcbi5pbnN0cnVjdGlvbnMge1xcbiAgbWF4LXdpZHRoOiA4MDBweDtcXG4gIG1hcmdpbjogMzBweCBhdXRvO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KFxcbiAgICBjaXJjbGUgYXQgY2VudGVyLFxcbiAgICByZ2JhKDAsIDMwLCA2MCwgMC44KSxcXG4gICAgcmdiYSgwLCAxMCwgMzAsIDAuOSlcXG4gICk7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMGFmO1xcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgwLCAxNzAsIDI1NSwgMC4zKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5pbnN0cnVjdGlvbnMgaDIge1xcbiAgY29sb3I6ICMwZmY7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4ICMwZmY7XFxufVxcblxcbi5pbnN0cnVjdGlvbnMgdWwge1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxufVxcblxcbi5pbnN0cnVjdGlvbnMgbGkge1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgdGV4dC1zaGFkb3c6IDAgMCA1cHggIzBhZjtcXG59XFxuXFxuLnJhZGFyLXN3ZWVwIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB6LWluZGV4OiAtMTtcXG4gIG9wYWNpdHk6IDAuMTtcXG59XFxuXFxuLnJhZGFyLXN3ZWVwOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiBjb25pYy1ncmFkaWVudChcXG4gICAgZnJvbSAwZGVnLFxcbiAgICB0cmFuc3BhcmVudCAwJSxcXG4gICAgcmdiYSgwLCAyNTUsIDI1NSwgMC4xKSAxMCUsXFxuICAgIHRyYW5zcGFyZW50IDIwJVxcbiAgKTtcXG4gIGFuaW1hdGlvbjogcmFkYXItc3dlZXAgNHMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJhZGFyLXN3ZWVwIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAuZ2FtZS1ib2FyZHMge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLmJvYXJkLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgaDEge1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gIH1cXG59XFxuXFxuLmluaXRpYWwtdWkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDMwcHg7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4uaW5pdGlhbC1ib2FyZCB7XFxuICBoZWlnaHQ6IDQ1MHB4O1xcbiAgd2lkdGg6IDQ1MHB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgIFxcbn1cXG5cXG4uZGlzYWJsZWQge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG4uY2VsbC5kaXNhYmxlZCB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcbi5ib2FyZC5kaXNhYmxlZCB7IHBvaW50ZXItZXZlbnRzOiBub25lOyB9XFxuXFxuLyogPT09PT0gVklDVE9SWSBBTklNQVRJT04gU1RZTEVTID09PT09ICovXFxuI3ZpY3Rvcnktb3ZlcmxheSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODUpO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgei1pbmRleDogMTAwMDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi52aWN0b3J5LWNvbnRhaW5lciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAxMDAxO1xcbn1cXG5cXG4udmljdG9yeS10ZXh0IHtcXG4gICAgZm9udC1zaXplOiA2cmVtO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBjb2xvcjogI2ZmY2MwMDtcXG4gICAgdGV4dC1zaGFkb3c6IFxcbiAgICAgICAgMCAwIDIwcHggI2ZmY2MwMCxcXG4gICAgICAgIDAgMCA0MHB4ICNmZjk5MDAsXFxuICAgICAgICAwIDAgNjBweCAjZmY2NjAwO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gICAgYW5pbWF0aW9uOiB2aWN0b3J5UHVsc2UgMnMgaW5maW5pdGUgYWx0ZXJuYXRlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwcHgpO1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4udmljdG9yeS1zdWJ0ZXh0IHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBjb2xvcjogIzBmZjtcXG4gICAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4ICMwZmY7XFxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbi5jb250aW51ZS1idG4ge1xcbiAgICBwYWRkaW5nOiAxNXB4IDQwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmY5OTAwLCAjZmY2NjAwKTtcXG4gICAgY29sb3I6ICMwMDA7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDI1NSwgMTUzLCAwLCAwLjcpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG59XFxuXFxuLmNvbnRpbnVlLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmZmNjMDAsICNmZjk5MDApO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjA0LCAwLCAwLjkpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4vKiBFeHBsb3Npb24gcGFydGljbGVzICovXFxuLmV4cGxvc2lvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgei1pbmRleDogMTAwMDtcXG59XFxuXFxuLyogQ29uZmV0dGkgKi9cXG4uY29uZmV0dGkge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHdpZHRoOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHotaW5kZXg6IDk5OTtcXG59XFxuXFxuLyogRmlyZXdvcmsgYnVyc3RzICovXFxuLmZpcmV3b3JrIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogNXB4O1xcbiAgICBoZWlnaHQ6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgei1pbmRleDogMTAwMDtcXG59XFxuXFxuLyogQW5pbWF0aW9ucyAqL1xcbkBrZXlmcmFtZXMgdmljdG9yeVB1bHNlIHtcXG4gICAgMCUge1xcbiAgICAgICAgdGV4dC1zaGFkb3c6IFxcbiAgICAgICAgICAgIDAgMCAyMHB4ICNmZmNjMDAsXFxuICAgICAgICAgICAgMCAwIDQwcHggI2ZmOTkwMCxcXG4gICAgICAgICAgICAwIDAgNjBweCAjZmY2NjAwO1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRleHQtc2hhZG93OiBcXG4gICAgICAgICAgICAwIDAgMzBweCAjZmZjYzAwLFxcbiAgICAgICAgICAgIDAgMCA2MHB4ICNmZjk5MDAsXFxuICAgICAgICAgICAgMCAwIDkwcHggI2ZmNjYwMDtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlSW5VcCB7XFxuICAgIHRvIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBleHBsb2RlIHtcXG4gICAgMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEwKTtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBmbHlVcCB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGUoMGRlZyk7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDB2aCkgcm90YXRlKDM2MGRlZyk7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgYnVyc3Qge1xcbiAgICAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxKTtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10eCksIHZhcigtLXR5KSkgc2NhbGUoMCk7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiB0cmlnZ2VyVmljdG9yeSgpIHtcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpY3Rvcnktb3ZlcmxheScpO1xuICAgIGNvbnN0IHZpY3RvcnlUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZpY3RvcnktdGV4dCcpO1xuICAgIGNvbnN0IHZpY3RvcnlTdWJ0ZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZpY3Rvcnktc3VidGV4dCcpO1xuICAgIGNvbnN0IGNvbnRpbnVlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRpbnVlLWJ0bicpO1xuICAgIFxuICAgIC8vIFNob3cgb3ZlcmxheVxuICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBcbiAgICAvLyBBbmltYXRlIHZpY3RvcnkgdGV4dFxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB2aWN0b3J5VGV4dC5zdHlsZS5hbmltYXRpb24gPSAnZmFkZUluVXAgMXMgZm9yd2FyZHMsIHZpY3RvcnlQdWxzZSAycyBpbmZpbml0ZSBhbHRlcm5hdGUgMXMnO1xuICAgIH0sIDUwMCk7XG4gICAgXG4gICAgLy8gQW5pbWF0ZSBzdWJ0ZXh0XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHZpY3RvcnlTdWJ0ZXh0LnN0eWxlLmFuaW1hdGlvbiA9ICdmYWRlSW5VcCAxcyBmb3J3YXJkcyc7XG4gICAgfSwgMTAwMCk7XG4gICAgXG4gICAgLy8gQW5pbWF0ZSBidXR0b25cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29udGludWVCdG4uc3R5bGUuYW5pbWF0aW9uID0gJ2ZhZGVJblVwIDFzIGZvcndhcmRzJztcbiAgICB9LCAxNTAwKTtcbiAgICBcbiAgICAvLyBDcmVhdGUgZXhwbG9zaW9uc1xuICAgIGNyZWF0ZUV4cGxvc2lvbnMoKTtcbiAgICBcbiAgICAvLyBDcmVhdGUgY29uZmV0dGlcbiAgICBjcmVhdGVDb25mZXR0aSgpO1xuICAgIFxuICAgIC8vIENyZWF0ZSBmaXJld29ya3NcbiAgICBjcmVhdGVGaXJld29ya3MoKTtcbn1cblxuZnVuY3Rpb24gaGlkZVZpY3RvcnkoKSB7XG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWN0b3J5LW92ZXJsYXknKTtcbiAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgXG4gICAgLy8gUmVtb3ZlIGFsbCBleHBsb3Npb24gYW5kIGNvbmZldHRpIGVsZW1lbnRzXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmV4cGxvc2lvbiwgLmNvbmZldHRpLCAuZmlyZXdvcmsnKS5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgZWwucmVtb3ZlKCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUV4cGxvc2lvbnMoKSB7XG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWN0b3J5LW92ZXJsYXknKTtcbiAgICBcbiAgICAvLyBDcmVhdGUgbGFyZ2UgY2VudHJhbCBleHBsb3Npb25cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE1OyBpKyspIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBleHBsb3Npb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGV4cGxvc2lvbi5jbGFzc05hbWUgPSAnZXhwbG9zaW9uJztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gUmFuZG9tIHBvc2l0aW9uIGFyb3VuZCBjZW50ZXJcbiAgICAgICAgICAgIGNvbnN0IGFuZ2xlID0gTWF0aC5yYW5kb20oKSAqIE1hdGguUEkgKiAyO1xuICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLnJhbmRvbSgpICogMTAwICsgNTA7XG4gICAgICAgICAgICBjb25zdCB4ID0gTWF0aC5jb3MoYW5nbGUpICogZGlzdGFuY2U7XG4gICAgICAgICAgICBjb25zdCB5ID0gTWF0aC5zaW4oYW5nbGUpICogZGlzdGFuY2U7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGV4cGxvc2lvbi5zdHlsZS5sZWZ0ID0gYGNhbGMoNTAlICsgJHt4fXB4KWA7XG4gICAgICAgICAgICBleHBsb3Npb24uc3R5bGUudG9wID0gYGNhbGMoNTAlICsgJHt5fXB4KWA7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFJhbmRvbSBleHBsb3Npb24gY29sb3JcbiAgICAgICAgICAgIGNvbnN0IGNvbG9ycyA9IFsnI2ZmOTkwMCcsICcjZmY2NjAwJywgJyNmZjMzMDAnLCAnI2ZmY2MwMCddO1xuICAgICAgICAgICAgZXhwbG9zaW9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb2xvcnMubGVuZ3RoKV07XG4gICAgICAgICAgICBleHBsb3Npb24uc3R5bGUuYm94U2hhZG93ID0gYDAgMCAyMHB4ICR7ZXhwbG9zaW9uLnN0eWxlLmJhY2tncm91bmRDb2xvcn1gO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBBbmltYXRpb25cbiAgICAgICAgICAgIGV4cGxvc2lvbi5zdHlsZS5hbmltYXRpb24gPSBgZXhwbG9kZSAke01hdGgucmFuZG9tKCkgKiAwLjUgKyAwLjV9cyBmb3J3YXJkc2A7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIG92ZXJsYXkuYXBwZW5kQ2hpbGQoZXhwbG9zaW9uKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gUmVtb3ZlIGFmdGVyIGFuaW1hdGlvblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgZXhwbG9zaW9uLnJlbW92ZSgpO1xuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH0sIGkgKiAxMDApO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29uZmV0dGkoKSB7XG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWN0b3J5LW92ZXJsYXknKTtcbiAgICBjb25zdCBjb2xvcnMgPSBbJyNmZjk5MDAnLCAnI2ZmNjYwMCcsICcjZmYzMzAwJywgJyNmZmNjMDAnLCAnIzBmZicsICcjMGFmJ107XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNTA7IGkrKykge1xuICAgICAgICBjb25zdCBjb25mZXR0aSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25mZXR0aS5jbGFzc05hbWUgPSAnY29uZmV0dGknO1xuICAgICAgICBcbiAgICAgICAgLy8gUmFuZG9tIHBvc2l0aW9uIGF0IHRvcFxuICAgICAgICBjb25mZXR0aS5zdHlsZS5sZWZ0ID0gYCR7TWF0aC5yYW5kb20oKSAqIDEwMH12d2A7XG4gICAgICAgIGNvbmZldHRpLnN0eWxlLnRvcCA9ICcwcHgnO1xuICAgICAgICBcbiAgICAgICAgLy8gUmFuZG9tIGNvbG9yXG4gICAgICAgIGNvbmZldHRpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb2xvcnMubGVuZ3RoKV07XG4gICAgICAgIFxuICAgICAgICAvLyBSYW5kb20gc2l6ZVxuICAgICAgICBjb25zdCBzaXplID0gTWF0aC5yYW5kb20oKSAqIDEwICsgNTtcbiAgICAgICAgY29uZmV0dGkuc3R5bGUud2lkdGggPSBgJHtzaXplfXB4YDtcbiAgICAgICAgY29uZmV0dGkuc3R5bGUuaGVpZ2h0ID0gYCR7c2l6ZX1weGA7XG4gICAgICAgIFxuICAgICAgICAvLyBSYW5kb20gc2hhcGVcbiAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjUpIHtcbiAgICAgICAgICAgIGNvbmZldHRpLnN0eWxlLmJvcmRlclJhZGl1cyA9ICc1MCUnO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBvdmVybGF5LmFwcGVuZENoaWxkKGNvbmZldHRpKTtcbiAgICAgICAgXG4gICAgICAgIC8vIEFuaW1hdGVcbiAgICAgICAgY29uc3QgZGVsYXkgPSBNYXRoLnJhbmRvbSgpICogMTAwMDtcbiAgICAgICAgY29uc3QgZHVyYXRpb24gPSBNYXRoLnJhbmRvbSgpICogMyArIDI7XG4gICAgICAgIFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbmZldHRpLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgICAgICBjb25mZXR0aS5zdHlsZS5hbmltYXRpb24gPSBgZmx5VXAgJHtkdXJhdGlvbn1zIGZvcndhcmRzYDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gUmVtb3ZlIGFmdGVyIGFuaW1hdGlvblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uZmV0dGkucmVtb3ZlKCk7XG4gICAgICAgICAgICB9LCBkdXJhdGlvbiAqIDEwMDApO1xuICAgICAgICB9LCBkZWxheSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVGaXJld29ya3MoKSB7XG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWN0b3J5LW92ZXJsYXknKTtcbiAgICBcbiAgICAvLyBDcmVhdGUgbXVsdGlwbGUgZmlyZXdvcmsgYnVyc3RzXG4gICAgZm9yIChsZXQgYnVyc3QgPSAwOyBidXJzdCA8IDg7IGJ1cnN0KyspIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB4ID0gTWF0aC5yYW5kb20oKSAqIDgwICsgMTA7IC8vIDEwJSB0byA5MCVcbiAgICAgICAgICAgIGNvbnN0IHkgPSBNYXRoLnJhbmRvbSgpICogODAgKyAxMDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzMDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFydGljbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBwYXJ0aWNsZS5jbGFzc05hbWUgPSAnZmlyZXdvcmsnO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIFBvc2l0aW9uIGF0IGJ1cnN0IGNlbnRlclxuICAgICAgICAgICAgICAgIHBhcnRpY2xlLnN0eWxlLmxlZnQgPSBgJHt4fXZ3YDtcbiAgICAgICAgICAgICAgICBwYXJ0aWNsZS5zdHlsZS50b3AgPSBgJHt5fXZoYDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBSYW5kb20gY29sb3JcbiAgICAgICAgICAgICAgICBjb25zdCBjb2xvcnMgPSBbJyNmZjk5MDAnLCAnI2ZmNjYwMCcsICcjZmYzMzAwJywgJyNmZmNjMDAnLCAnIzBmZiddO1xuICAgICAgICAgICAgICAgIHBhcnRpY2xlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb2xvcnMubGVuZ3RoKV07XG4gICAgICAgICAgICAgICAgcGFydGljbGUuc3R5bGUuYm94U2hhZG93ID0gYDAgMCAxMHB4ICR7cGFydGljbGUuc3R5bGUuYmFja2dyb3VuZENvbG9yfWA7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gUmFuZG9tIGRpcmVjdGlvbiBhbmQgZGlzdGFuY2VcbiAgICAgICAgICAgICAgICBjb25zdCBhbmdsZSA9IE1hdGgucmFuZG9tKCkgKiBNYXRoLlBJICogMjtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGgucmFuZG9tKCkgKiAxMDAgKyA1MDtcbiAgICAgICAgICAgICAgICBjb25zdCB0eCA9IE1hdGguY29zKGFuZ2xlKSAqIGRpc3RhbmNlO1xuICAgICAgICAgICAgICAgIGNvbnN0IHR5ID0gTWF0aC5zaW4oYW5nbGUpICogZGlzdGFuY2U7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcGFydGljbGUuc3R5bGUuc2V0UHJvcGVydHkoJy0tdHgnLCBgJHt0eH1weGApO1xuICAgICAgICAgICAgICAgIHBhcnRpY2xlLnN0eWxlLnNldFByb3BlcnR5KCctLXR5JywgYCR7dHl9cHhgKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBSYW5kb20gc2l6ZVxuICAgICAgICAgICAgICAgIGNvbnN0IHNpemUgPSBNYXRoLnJhbmRvbSgpICogOCArIDI7XG4gICAgICAgICAgICAgICAgcGFydGljbGUuc3R5bGUud2lkdGggPSBgJHtzaXplfXB4YDtcbiAgICAgICAgICAgICAgICBwYXJ0aWNsZS5zdHlsZS5oZWlnaHQgPSBgJHtzaXplfXB4YDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBvdmVybGF5LmFwcGVuZENoaWxkKHBhcnRpY2xlKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBBbmltYXRlXG4gICAgICAgICAgICAgICAgcGFydGljbGUuc3R5bGUuYW5pbWF0aW9uID0gYGJ1cnN0ICR7TWF0aC5yYW5kb20oKSAqIDAuNSArIDAuNX1zIGZvcndhcmRzYDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgYWZ0ZXIgYW5pbWF0aW9uXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH0sIDgwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGJ1cnN0ICogNjAwKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0geyB0cmlnZ2VyVmljdG9yeSwgaGlkZVZpY3RvcnkgfTsiLCJjb25zdCB7IFNoaXAsIEdhbWVCb2FyZCB9ID0gcmVxdWlyZSgnLi9zaGlwJyk7XG5jb25zdCB7dHJpZ2dlclZpY3RvcnksIGhpZGVWaWN0b3J5fSA9IHJlcXVpcmUoJy4vYW5pbWF0aW9ucycpO1xuXG5mdW5jdGlvbiBwbGFjZVNoaXBzUmFuZG9tbHkoZ2FtZUJvYXJkKSB7XG4gICAgY29uc3Qgc2hpcExlbmd0aHMgPSBbNSwgNCwgMywgMywgMl07XG4gICAgc2hpcExlbmd0aHMuZm9yRWFjaChsZW5ndGggPT4ge1xuICAgICAgICBsZXQgcGxhY2VkID0gZmFsc2U7XG4gICAgICAgIHdoaWxlICghcGxhY2VkKSB7XG4gICAgICAgICAgICBjb25zdCBheGlzID0gTWF0aC5yYW5kb20oKSA+IDAuNSA/ICdob3Jpem9udGFsJyA6ICd2ZXJ0aWNhbCc7XG4gICAgICAgICAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgICAgY29uc3QgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcChcIlJhbmRvbVNoaXBcIiwgbGVuZ3RoKTtcbiAgICAgICAgICAgIHBsYWNlZCA9IGdhbWVCb2FyZC5hZGRTaGlwKHNoaXAsIHgsIHksIGF4aXMpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cblxuZnVuY3Rpb24gbG9hZCgpe1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG4gICAgY29uc3QgcGxhY2luZ0JvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYWNpbmctYm9hcmQnKTtcbiAgICBjb25zdCBpbml0aWFsVWkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5pdGlhbC11aScpO1xuICAgIGNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1ib2FyZCcpO1xuICAgIGNvbnN0IGNvbXB1dGVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcHV0ZXItYm9hcmQnKTtcbiAgICBjb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1idG4nKTtcbiAgICBjb25zdCByZXNldEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNldC1idG4nKTtcbiAgICBjb25zdCByYW5kb21CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFuZG9tLWJ0bicpO1xuICAgIGNvbnN0IGdhbWVTdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1zdGF0dXMnKTtcbiAgICBjb25zdCBoaWRlVmljdG9yeUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250aW51ZS1idG4nKTtcbiAgICBsZXQgcGxheWVyR2FtZUJvYXJkID0gbnVsbDtcbiAgICBsZXQgY29tcHV0ZXJHYW1lQm9hcmQgPSBudWxsO1xuICAgIGxldCBib2FyZExvY2tlZCA9IGZhbHNlO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlQm9hcmQoYm9hcmRFbGVtZW50LCByb2xlLCBwbGF5ZXJCb2FyZFZhbHVlPW51bGwpIHtcbiAgICAgICAgYm9hcmRFbGVtZW50LmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgIGNvbnN0IG5ld0JvYXJkID0gbmV3IEdhbWVCb2FyZCgpO1xuICAgICAgICBpZiAocGxheWVyQm9hcmRWYWx1ZSA9PT0gbnVsbCkgXG4gICAgICAgICAgICBwbGFjZVNoaXBzUmFuZG9tbHkobmV3Qm9hcmQpO1xuICAgICAgICBlbHNlIFxuICAgICAgICAgICAgbmV3Qm9hcmQuc2hpcHMgPSBwbGF5ZXJCb2FyZFZhbHVlO1xuXG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDEwOyByb3crKykge1xuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgMTA7IGNvbCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NOYW1lID0gJ2NlbGwnO1xuICAgICAgICAgICAgICAgIGNlbGwuZGF0YXNldC5yb3cgPSByb3c7XG4gICAgICAgICAgICAgICAgY2VsbC5kYXRhc2V0LmNvbCA9IGNvbDtcblxuICAgICAgICAgICAgICAgIGlmIChyb2xlID09PSAncGxheWVyJykge1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3BsYXllcicpO1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjb21wdXRlcicpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IHNoaXAgPSBuZXdCb2FyZC5zaGlwc1tyb3ddW2NvbF07XG4gICAgICAgICAgICAgICAgaWYgKHNoaXAgIT09IDAgJiYgc2hpcCAhPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBib2FyZEVsZW1lbnQuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3Qm9hcmQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdGlhbGl6ZUdhbWUoKSB7XG4gICAgICAgIC8vIEluaXRpYWxpemUgcGxhY2luZyBib2FyZCBhbmQgYXNzaWduIG5ldyBHYW1lQm9hcmQgaW5zdGFuY2VzXG4gICAgICAgIHBsYXllckdhbWVCb2FyZCA9IGNyZWF0ZUJvYXJkKHBsYXllckJvYXJkLCAncGxheWVyJyk7XG4gICAgICAgIGNvbXB1dGVyR2FtZUJvYXJkID0gY3JlYXRlQm9hcmQoY29tcHV0ZXJCb2FyZCwgJ2NvbXB1dGVyJyk7XG4gICAgICAgIGluaXRpYWxVaS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7ICAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2xlZXAobXMpIHsgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpOyB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBjb21wdXRlclR1cm5Ub1Nob290KCkge1xuICAgICAgICBjb25zdCBwbGF5ZXJDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5ZXItYm9hcmQgLmNlbGwnKTtcblxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgY29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXRDZWxsID0gQXJyYXkuZnJvbShwbGF5ZXJDZWxscykuZmluZChjZWxsID0+IHBhcnNlSW50KGNlbGwuZGF0YXNldC5yb3cpID09PSB4ICYmIHBhcnNlSW50KGNlbGwuZGF0YXNldC5jb2wpID09PSB5KTtcblxuICAgICAgICAvLyBpZiB0YXJnZXQgYWxyZWFkeSB0cmllZCwgcGljayBhZ2FpbiAobG9vcClcbiAgICAgICAgaWYgKCF0YXJnZXRDZWxsIHx8IHRhcmdldENlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaXQnKSB8fCB0YXJnZXRDZWxsLmNsYXNzTGlzdC5jb250YWlucygnbWlzcycpKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzbWFsbCBkZWxheSB0byBzaW11bGF0ZSB0aGlua2luZyAob3B0aW9uYWwpXG4gICAgICAgIGF3YWl0IHNsZWVwKDYwMCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldENlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwJykgJiYgcGxheWVyR2FtZUJvYXJkLnJlY2l2ZUF0dGFjayh4LCB5KSkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRDZWxsLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgICAgICAgICAgICAgICBnYW1lU3RhdHVzLnRleHRDb250ZW50ID0gXCJFTkVNWSBTVFJJS0UhIFlPVVIgVkVTU0VMIEhBUyBCRUVOIEhJVCFcIjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllckdhbWVCb2FyZC5hbGxTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVTdGF0dXMudGV4dENvbnRlbnQgPSBcIkFMTCBZT1VSIFZFU1NFTFMgSEFWRSBCRUVOIERFU1RST1lFRCAtIERFRkVBVCFcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkTG9ja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllckJvYXJkLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wdXRlckJvYXJkLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YXJnZXRDZWxsLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICAgICAgICBnYW1lU3RhdHVzLnRleHRDb250ZW50ID0gXCJFTkVNWSBNSVNTRUQhIFlPVVIgVkVTU0VMIElTIFNBRkUhXCI7XG4gICAgfVxuICAgIHJldHVybjsgLy8gc2hvdCBwcm9jZXNzZWQsIGV4aXRcbiAgfVxuXG4gICAgfVxuXG5cblxuICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lcnMgZm9yIGdhbWUgY29udHJvbHNcbiAgICBzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZ2FtZVN0YXR1cy50ZXh0Q29udGVudCA9IFwiUkFEQVIgQUNUSVZFIC0gRU5HQUdFIEVORU1ZIFRBUkdFVFNcIjtcbiAgICAgICAgc3RhcnRCdG4uZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgICAgIC8vIEFkZCBjbGljayBoYW5kbGVycyB0byBjb21wdXRlciBib2FyZCBmb3IgZ2FtZXBsYXlcbiAgICAgICAgY29uc3QgY29tcHV0ZXJDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21wdXRlci1ib2FyZCAuY2VsbCcpO1xuXG4gICAgICAgIGNvbXB1dGVyQ2VsbHMuZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJvYXJkTG9ja2VkKSByZXR1cm47XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNsYXNzTGlzdC5jb250YWlucygnaGl0JykgJiYgIXRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdtaXNzJykgJiYgIXRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNsYXNzTGlzdC5jb250YWlucygnc2hpcCcpICYmIGNvbXB1dGVyR2FtZUJvYXJkLnJlY2l2ZUF0dGFjayhwYXJzZUludCh0aGlzLmRhdGFzZXQucm93KSwgcGFyc2VJbnQodGhpcy5kYXRhc2V0LmNvbCkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZVN0YXR1cy50ZXh0Q29udGVudCA9IFwiRElSRUNUIEhJVCEgRU5FTVkgVkVTU0VMIERBTUFHRUQhXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjb21wdXRlckdhbWVCb2FyZC5hbGxTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lU3RhdHVzLnRleHRDb250ZW50ID0gXCJBTEwgRU5FTVkgVkVTU0VMUyBERVNUUk9ZRUQgLSBWSUNUT1JZIEFDSElFVkVEIVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxvY2sgZ2FtZSBhbmQgbWFyayBib2FyZHMgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2FyZExvY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcHV0ZXJCb2FyZC5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllckJvYXJkLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlclZpY3RvcnkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVTdGF0dXMudGV4dENvbnRlbnQgPSBcIlRBUkdFVCBNSVNTRUQgLSBSRUNBTElCUkFUSU5HXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYm9hcmRMb2NrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBzbGVlcCgyMDApO1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBjb21wdXRlclR1cm5Ub1Nob290KCk7XG4gICAgICAgICAgICAgICAgICAgIGJvYXJkTG9ja2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoY29tcHV0ZXJUdXJuVG9TaG9vdCwgMTAwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmVzZXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGluaXRpYWxpemVHYW1lKCk7XG4gICAgICAgIC8vIHVubG9jayBib2FyZHMgYW5kIHJlbW92ZSBkaXNhYmxlZCB2aXN1YWwgc3RhdGVcbiAgICAgICAgYm9hcmRMb2NrZWQgPSBmYWxzZTtcbiAgICAgICAgcGxheWVyQm9hcmQuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgY29tcHV0ZXJCb2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpO1xuXG4gICAgICAgIGdhbWVTdGF0dXMudGV4dENvbnRlbnQgPSBcIlNZU1RFTVMgUkVTRVQgLSBERVBMT1kgWU9VUiBGTEVFVFwiO1xuICAgICAgICBzdGFydEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH0pO1xuXG4gICAgaGlkZVZpY3RvcnlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgaGlkZVZpY3RvcnkoKTtcbiAgICB9KTtcblxuICAgIHJhbmRvbUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBpbml0aWFsaXplR2FtZSgpO1xuICAgIH0pO1xufSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9ICB7bG9hZCwgcGxhY2VTaGlwc1JhbmRvbWx5fTtcblxuXG5cblxuXG5cblxuXG5cblxuLy8gIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbi8vICAgICAgIDxoZWFkZXI+XG4vLyAgICAgICAgIDxoMT5CQVRUTEVTSElQPC9oMT5cbi8vICAgICAgICAgPGRpdiBjbGFzcz1cImdhbWUtc3RhdHVzXCI+XG4vLyAgICAgICAgICAgQUNUSVZBVEUgUkFEQVIgU1lTVEVNUyAtIERFUExPWSBZT1VSIEZMRUVUXG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgPC9oZWFkZXI+XG5cbi8vICAgICAgIDxkaXYgY2xhc3M9XCJnYW1lLWJvYXJkc1wiPlxuLy8gICAgICAgICA8ZGl2IGNsYXNzPVwiYm9hcmQtY29udGFpbmVyXCI+XG4vLyAgICAgICAgICAgPGgyIGNsYXNzPVwiYm9hcmQtdGl0bGVcIj5GUklFTkRMWSBGTEVFVDwvaDI+XG4vLyAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvb3JkaW5hdGVzXCI+XG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29vcmRpbmF0ZVwiPkE8L2Rpdj5cbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb29yZGluYXRlXCI+QjwvZGl2PlxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvb3JkaW5hdGVcIj5DPC9kaXY+XG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29vcmRpbmF0ZVwiPkQ8L2Rpdj5cbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb29yZGluYXRlXCI+RTwvZGl2PlxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvb3JkaW5hdGVcIj5GPC9kaXY+XG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29vcmRpbmF0ZVwiPkc8L2Rpdj5cbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb29yZGluYXRlXCI+SDwvZGl2PlxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvb3JkaW5hdGVcIj5JPC9kaXY+XG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29vcmRpbmF0ZVwiPko8L2Rpdj5cbi8vICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FtZS1ib2FyZCBwbGF5ZXItYm9hcmRcIj5cbi8vICAgICAgICAgICAgIDwhLS0gUGxheWVyIGJvYXJkIGNlbGxzIHdpbGwgYmUgZ2VuZXJhdGVkIGJ5IEphdmFTY3JpcHQgLS0+XG4vLyAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgIDwvZGl2PlxuXG4vLyAgICAgICAgIDxkaXYgY2xhc3M9XCJib2FyZC1jb250YWluZXJcIj5cbi8vICAgICAgICAgICA8aDIgY2xhc3M9XCJib2FyZC10aXRsZVwiPkVORU1ZIFdBVEVSUzwvaDI+XG4vLyAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvb3JkaW5hdGVzXCI+XG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29vcmRpbmF0ZVwiPkE8L2Rpdj5cbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb29yZGluYXRlXCI+QjwvZGl2PlxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvb3JkaW5hdGVcIj5DPC9kaXY+XG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29vcmRpbmF0ZVwiPkQ8L2Rpdj5cbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb29yZGluYXRlXCI+RTwvZGl2PlxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvb3JkaW5hdGVcIj5GPC9kaXY+XG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29vcmRpbmF0ZVwiPkc8L2Rpdj5cbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb29yZGluYXRlXCI+SDwvZGl2PlxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvb3JkaW5hdGVcIj5JPC9kaXY+XG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29vcmRpbmF0ZVwiPko8L2Rpdj5cbi8vICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FtZS1ib2FyZCBjb21wdXRlci1ib2FyZFwiPlxuLy8gICAgICAgICAgICAgPCEtLSBDb21wdXRlciBib2FyZCBjZWxscyB3aWxsIGJlIGdlbmVyYXRlZCBieSBKYXZhU2NyaXB0IC0tPlxuLy8gICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICAgIDwvZGl2PlxuXG4vLyAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbHNcIj5cbi8vICAgICAgICAgPGJ1dHRvbiBpZD1cInN0YXJ0LWJ0blwiPkFDVElWQVRFIFJBREFSPC9idXR0b24+XG4vLyAgICAgICAgIDxidXR0b24gaWQ9XCJyZXNldC1idG5cIj5SRVNFVCBTWVNURU1TPC9idXR0b24+XG4vLyAgICAgICA8L2Rpdj5cblxuLy8gICAgICAgPGRpdiBjbGFzcz1cImluc3RydWN0aW9uc1wiPlxuLy8gICAgICAgICA8aDI+VEFDVElDQUwgQlJJRUZJTkc8L2gyPlxuLy8gICAgICAgICA8dWw+XG4vLyAgICAgICAgICAgPGxpPkRlcGxveSB5b3VyIGZsZWV0IG9uIHlvdXIgdGFjdGljYWwgZ3JpZDwvbGk+XG4vLyAgICAgICAgICAgPGxpPkFjdGl2YXRlIHJhZGFyIHN5c3RlbXMgdG8gYmVnaW4gZW5nYWdlbWVudDwvbGk+XG4vLyAgICAgICAgICAgPGxpPlRhcmdldCBlbmVteSBjb29yZGluYXRlcyBieSBzZWxlY3RpbmcgZ3JpZCBwb3NpdGlvbnM8L2xpPlxuLy8gICAgICAgICAgIDxsaT5SZWQgbWFya2VycyBpbmRpY2F0ZSBzdWNjZXNzZnVsIGhpdHMgb24gZW5lbXkgdmVzc2VsczwvbGk+XG4vLyAgICAgICAgICAgPGxpPkdyYXkgbWFya2VycyBpbmRpY2F0ZSBtaXNzZWQgdGFyZ2V0czwvbGk+XG4vLyAgICAgICAgICAgPGxpPkVsaW1pbmF0ZSBhbGwgZW5lbXkgc2hpcHMgdG8gYWNoaWV2ZSB2aWN0b3J5PC9saT5cbi8vICAgICAgICAgPC91bD5cbi8vICAgICAgIDwvZGl2PlxuLy8gICAgIDwvZGl2PlxuLy8gXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxuXG4iLCJjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IobmFtZSwgbGVuZ3RoLCBoaXRQb2ludHM9MCwgc3VuayA9IGZhbHNlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICB0aGlzLmhpdFBvaW50cyA9IGhpdFBvaW50cztcbiAgICB0aGlzLnN1bmsgPSBzdW5rO1xuICB9XG5cbiAgaGl0KCkge1xuICAgIHRoaXMuaGl0UG9pbnRzKys7XG4gICAgaWYgKHRoaXMuaGl0UG9pbnRzID49IHRoaXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnN1bmsgPSB0cnVlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlzU3VuaygpIHtcbiAgICByZXR1cm4gdGhpcy5zdW5rO1xuICB9XG59XG5cbmNsYXNzIEdhbWVCb2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc2hpcHMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiAxMCB9LCAoKSA9PiBBcnJheSgxMCkuZmlsbCgwKSk7XG4gICAgdGhpcy5udW1iZXJPZlN1bmtTaGlwcyA9IDA7XG4gIH1cbiAgXG4gIGFkZFNoaXAoc2hpcCwgYXgsIGF5LCBheGlzKSB7XG4gICAgaWYoYXhpcyA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgaWYoYXkgKyBzaGlwLmxlbmd0aCA+IDEwKSByZXR1cm4gZmFsc2U7XG4gICAgICBmb3IgKGxldCBpID0gYXk7IGkgPCBheSArIHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYodGhpcy5zaGlwc1theF1baV0gIT09IDApIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSBheTsgaSA8IGF5ICsgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLnNoaXBzW2F4XVtpXSA9IHNoaXA7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IFxuICAgIFxuICAgIGVsc2UgaWYoYXhpcyA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBpZihheCArIHNoaXAubGVuZ3RoID4gMTApIHJldHVybiBmYWxzZTtcbiAgICAgIGZvciAobGV0IGkgPSBheDsgaSA8IGF4ICsgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZih0aGlzLnNoaXBzW2ldW2F5XSAhPT0gMCkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IGF4OyBpIDwgYXggKyBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMuc2hpcHNbaV1bYXldID0gc2hpcDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZWNpdmVBdHRhY2soeCwgeSkge1xuICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuc2hpcHNbeF1beV07XG4gICAgaWYgKHRhcmdldCAhPT0gMCAmJiB0YXJnZXQgIT09IDEpIHtcbiAgICAgIGlmKHRhcmdldC5oaXQoKSkgdGhpcy5udW1iZXJPZlN1bmtTaGlwcysrO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYodGFyZ2V0ID09PSAwKSB7XG4gICAgICB0aGlzLnNoaXBzW3hdW3ldID0gMTsgLy8gTWFyayBhcyBtaXNzXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGFsbFN1bmsoKSB7XG4gICAgcmV0dXJuIHRoaXMubnVtYmVyT2ZTdW5rU2hpcHMgPT09IDU7IC8vIEFzc3VtaW5nIHRoZXJlIGFyZSA1IHNoaXBzIGluIHRvdGFsXG4gIH1cbn1cblxuY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3Rvcih0eXBlLCBnYW1lQm9hcmQpIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5nYW1lQm9hcmQgPSBnYW1lQm9hcmQ7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgU2hpcCwgR2FtZUJvYXJkLCBQbGF5ZXIgfTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcbmNvbnN0IHtsb2FkfSA9IHJlcXVpcmUoJy4vZ2FtZScpO1xuY29uc29sZS5sb2coXCJIZWxsbyBXb3JsZCFcIik7XG5sb2FkKCk7XG5cbi8vIGNvbnN0IHN1bSA9IHJlcXVpcmUoJy4vc3VtJyk7XG4vLyBtb2R1bGUuZXhwb3J0cyA9IHN1bTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=