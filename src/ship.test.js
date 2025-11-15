const { Ship, GameBoard } = require('./ship');

test('Ship hit method increments hitPoints and updates sunk status', () => {
  const ship = new Ship('Destroyer', 3, 0);
  expect(ship.sunk).toBe(false);
  
  ship.hit();
  expect(ship.hitPoints).toBe(1);
  expect(ship.isSunk()).toBe(false);
  
  ship.hit();
  expect(ship.hitPoints).toBe(2);
  expect(ship.isSunk()).toBe(false);
  
  ship.hit();
  expect(ship.hitPoints).toBe(3);
  expect(ship.isSunk()).toBe(true);
});

test('GameBoard addShip method places ship correctly', () => {
  const ship = new Ship('Submarine', 3, 0);
  const gameBoard = new GameBoard();
  
  gameBoard.addShip(ship, 0, 0, 'horizontal');
  expect(gameBoard.ships[0][0]).toBe(ship);
  expect(gameBoard.ships[0][1]).toBe(ship);
  expect(gameBoard.ships[0][2]).toBe(ship);
  
  const ship2 = new Ship('Cruiser', 4, 0);
  gameBoard.addShip(ship2, 5, 5, 'vertical');
  expect(gameBoard.ships[5][5]).toBe(ship2);
  expect(gameBoard.ships[6][5]).toBe(ship2);
  expect(gameBoard.ships[7][5]).toBe(ship2);
  expect(gameBoard.ships[8][5]).toBe(ship2);

  const ship3 = new Ship('Battleship', 5, 0);
  const result = gameBoard.addShip(ship3, 8, 8, 'horizontal');
  expect(result).toBe(false); // Should not place ship out of bounds

  const ship4 = new Ship('Patrol Boat', 2, 0);
  gameBoard.addShip(ship4, 0, 0, 'vertical');
  const result2 = gameBoard.addShip(ship4, 0, 0, 'horizontal');
  expect(result2).toBe(false); // Should not place ship on occupied space
});

test('GameBoard reciveAttack method registers hits and misses correctly', () => {
  const ship = new Ship('Destroyer', 2, 0);
  const gameBoard = new GameBoard();
  
  gameBoard.addShip(ship, 0, 0, 'horizontal');
  
  const hitResult = gameBoard.reciveAttack(0, 0);
  expect(hitResult).toBe(true);
  expect(ship.hitPoints).toBe(1);
  
  const missResult = gameBoard.reciveAttack(5, 5);
  expect(missResult).toBe(false);
  expect(gameBoard.ships[5][5]).toBe(1); // Marked as miss
  
  const secondHitResult = gameBoard.reciveAttack(0, 1);
  expect(secondHitResult).toBe(true);
  expect(ship.hitPoints).toBe(2);
  expect(ship.isSunk()).toBe(true);
});

test('GameBoard allSunk method returns true when all ships are sunk', () => {
  const gameBoard = new GameBoard();
  
  const ship1 = new Ship('Destroyer', 2, 0);
  const ship2 = new Ship('Submarine', 3, 0);
  const ship3 = new Ship('Cruiser', 4, 0);
  const ship4 = new Ship('Battleship', 5, 0);
  const ship5 = new Ship('Patrol Boat', 2, 0);
  
  gameBoard.addShip(ship1, 0, 0, 'horizontal');
  gameBoard.addShip(ship2, 1, 0, 'horizontal');
  gameBoard.addShip(ship3, 2, 0, 'horizontal');
  gameBoard.addShip(ship4, 3, 0, 'horizontal');
  gameBoard.addShip(ship5, 4, 0, 'horizontal');
  
  // Sink all ships
  for (let i = 0; i < 2; i++) gameBoard.reciveAttack(0, i); // Sink Destroyer
  for (let i = 0; i < 3; i++) gameBoard.reciveAttack(1, i); // Sink Submarine
  for (let i = 0; i < 4; i++) gameBoard.reciveAttack(2, i); // Sink Cruiser
  for (let i = 0; i < 5; i++) gameBoard.reciveAttack(3, i); // Sink Battleship
  for (let i = 0; i < 2; i++) gameBoard.reciveAttack(4, i); // Sink Patrol Boat
  
  expect(gameBoard.allSunk()).toBe(true);
});