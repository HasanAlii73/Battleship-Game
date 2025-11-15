const {sum, Ship} = require('./ship');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

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