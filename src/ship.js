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