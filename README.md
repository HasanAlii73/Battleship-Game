# Battleship Game
A classic Battleship game implementation using Test-Driven Development (TDD) principles with JavaScript.

## Features
Ship Class: Tracks ship length, hits, and sunk status

Gameboard Class: Manages ship placement, attacks, and game state

Player Class: Handles both human and computer players

Computer AI: Makes random legal moves

Turn-based gameplay: Alternates between player and computer

Game end detection: Automatically detects when all ships are sunk

## Project Structure
text
battleship/
├── src/
│   ├── ship.js          # Ship class/factory
│   ├── gameboard.js     # Gameboard class/factory
│   ├── player.js        # Player class/factory
│   └── game.js          # Main game logic and DOM interaction
├── tests/
│   ├── ship.test.js     # Ship unit tests
│   ├── gameboard.test.js # Gameboard unit tests
│   └── player.test.js   # Player unit tests
├── index.html           # Main HTML file
├── style.css            # CSS styling
├── jest.config.js       # Jest configuration
├── babel.config.js      # Babel configuration for Jest
└── README.md            # This file
Setup Instructions
Clone the repository

bash
git clone <repository-url>
cd battleship
Install dependencies

bash
npm install
Run tests

bash
npm test
Start the game

Open index.html in your browser

Or use a local server:

bash
npx serve .
How to Play
Setup Phase: Ships are pre-placed on both player and computer boards

## Gameplay:

Players take turns attacking enemy coordinates

Click on the computer's board to make your attack

The computer will automatically make its move after yours

Winning: Sink all enemy ships to win the game

## Game Rules
Each player has 5 ships of varying lengths:

Carrier (5 cells)

Battleship (4 cells)

Cruiser (3 cells)

Submarine (3 cells)

Destroyer (2 cells)

Ships cannot overlap

Ships can be placed horizontally or vertically

Players alternate turns

Attacks can be "hits" (ship hit) or "misses" (water hit)

A ship sinks when all its cells are hit

The game ends when one player's fleet is completely sunk

## Testing
This project uses Jest for testing. All core logic (Ship, Gameboard, Player) is thoroughly tested using TDD approach.

Run all tests:

bash
npm test
Run tests in watch mode:

bash
npm test -- --watch
Implementation Notes
TDD Approach: All features were developed test-first

Separation of Concerns: Game logic is completely separate from DOM manipulation

ES6 Modules: Code is organized using ES6 modules

Computer AI: Makes random legal moves (doesn't attack same cell twice)

### Future Enhancements
Potential improvements for future versions:

Ship placement phase for players

Smarter computer AI (hunt/target mode)

Different difficulty levels

Mobile responsiveness

Animations and sound effects

Save/load game functionality

Multiplayer support

Technologies Used
JavaScript (ES6+)

Jest for testing

HTML5/CSS3

Webpack/Babel (for Jest compatibility)

### Credits
Created as part of The Odin Project curriculum, focusing on Test-Driven Development principles and object-oriented programming patterns.
