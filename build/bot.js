'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bot = void 0;
var clc = require('cli-color');
var Bot = /** @class */ (function () {
    function Bot() {
        this.x = 0;
        this.y = 0;
        this.d = '';
        this.isPlaced = false;
    }
    Bot.prototype.place = function (x, y, d) {
        var direction = this.directionMap(d);
        if (x > this.tableSize().x || y > this.tableSize().y ||
            this.validDirections().indexOf(d.toLowerCase()) === -1) {
            return false;
        }
        this.x = x;
        this.y = y;
        this.d = direction;
        this.isPlaced = true;
        return true;
    };
    Bot.prototype.move = function () {
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
    };
    Bot.prototype.left = function () {
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
    };
    Bot.prototype.right = function () {
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
    };
    Bot.prototype.currentDirection = function () {
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
    };
    Bot.prototype.report = function () {
        if (!this.isPlaced) {
            return;
        }
        console.log(clc.bgGreen(clc.black("OUTPUT: " + this.x + ", " + this.y + ", " + this.currentDirection())));
    };
    Bot.prototype.validDirections = function () {
        return ['north', 'south', 'west', 'east'];
    };
    Bot.prototype.directionMap = function (d) {
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
    };
    Bot.prototype.tableSize = function () {
        return {
            x: 5,
            y: 5
        };
    };
    return Bot;
}());
exports.Bot = Bot;
