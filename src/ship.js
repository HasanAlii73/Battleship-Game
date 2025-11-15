const { sharing } = require("webpack");

function sum(a, b) {
  return a + b;
}


class Ship {
  constructor(name, length, hitPoints, sunk = false) {
    this.name = name;
    this.length = length;
    this.hitPoints = hitPoints;
    this.sunk = sunk;
  }

  hit() {
    this.hitPoints++;
    if (this.hitPoints >= this.length) {
      this.sunk = true;
    }
  }

  isSunk() {
    return this.sunk;
  }
}

module.exports = { sum , Ship};