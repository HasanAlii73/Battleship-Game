const { Ship, GameBoard } = require('./ship');
const {triggerVictory, hideVictory} = require('./animations');

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

