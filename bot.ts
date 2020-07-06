'use strict';
const clc = require('cli-color');

export class Bot {
  x: number;
  y: number;
  d: string;
  isPlaced: boolean;

  constructor () {
    this.x = 0;
    this.y = 0;
    this.d = '';
    this.isPlaced = false;
  }

  place (x: number, y: number, d: string) {
    const direction = this.directionMap(d.toLowerCase());

    if (x > this.tableSize().x || y > this.tableSize().y ||
      this.validDirections().indexOf(d.toLowerCase()) === -1) {
      return false;
    }

    this.x = x;
    this.y = y;
    this.d = direction;
    this.isPlaced = true;

    return true;
  }

  move () {
    if (!this.isPlaced) {
      return;
    }

    switch (this.d) {
      case 'n': {
        if (this.y >= this.tableSize().y) {
          return;
        }
        this.y += 1;
        break;
      }
      case 's': {
        if (this.y <= 0) {
          return;
        }
        this.y -= 1;
        break;
      }
      case 'e': {
        if (this.x >= this.tableSize().x) {
          return;
        }
        this.x += 1;
        break;
      }
      case 'w': {
        if (this.x <= 0) {
          return;
        }
        this.x -= 1;
        break;
      }
      default: break;
    }
  }

  left () {
    if (!this.isPlaced) {
      return;
    }

    switch (this.d) {
      case 'n': {
        this.d = 'w';
        break;
      }
      case 's': {
        this.d = 'e';
        break;
      }
      case 'e': {
        this.d = 'n';
        break;
      }
      case 'w': {
        this.d = 's';
        break;
      }
      default: break;
    }
  }

  right () {
    if (!this.isPlaced) {
      return;
    }

    switch (this.d) {
      case 'n': {
        this.d = 'e';
        break;
      }
      case 's': {
        this.d = 'w';
        break;
      }
      case 'e': {
        this.d = 's';
        break;
      }
      case 'w': {
        this.d = 'n';
        break;
      }
      default: break;
    }
  }

  currentDirection () {
    if (!this.isPlaced) {
      return "";
    }

    switch (this.d) {
      case 'n': {
        return 'NORTH';
      }
      case 's': {
        return 'SOUTH';
      }
      case 'e': {
        return 'EAST';
      }
      case 'w': {
        return 'WEST';
      }
      default: return '';
    }
  }

  report () {
    if (!this.isPlaced) {
      return;
    }

    console.log(clc.bgGreen(clc.black(`OUTPUT: ${this.x}, ${this.y}, ${this.currentDirection()}`)));
  }

  validDirections () {
    return ['north', 'south', 'west', 'east'];
  }

  directionMap (d: string) {
    switch (d) {
      case 'north': {
        return 'n';
      }
      case 'south': {
        return 's';
      }
      case 'east': {
        return 'e';
      }
      case 'west': {
        return 'w';
      }

      default: return "Invalid direction";
    }
  }


  tableSize () {
    return {
      x: 5,
      y: 5
    };
  }
}
