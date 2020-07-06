'use strict';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
var readline = __importStar(require("readline"));
var bot_1 = require("./bot");
var clc = require('cli-color');
var reader = readline.createInterface(fs.createReadStream('instructions.txt'));
console.log(clc.bgYellow(clc.black('Running sim...')));
var bot = new bot_1.Bot();
reader.on('line', function (l) {
    if (l.length === 0) {
        return;
    }
    var commands = l.split(' ');
    var cmd = commands[0];
    if (cmd === 'PLACE') {
        if (commands.length === 2) {
            var params = commands[1].split(',');
            if (params.length === 3) {
                var x = Number(params[0]);
                var y = Number(params[1]);
                var d = params[2].toString().toLowerCase();
                bot.place(x, y, d);
            }
        }
        else {
            console.log('Invalid place command.', commands);
        }
    }
    else {
        if (bot) {
            switch (cmd) {
                case 'MOVE': {
                    bot.move();
                    break;
                }
                case 'REPORT': {
                    bot.report();
                    break;
                }
                case 'LEFT': {
                    bot.left();
                }
                case 'RIGHT': {
                    bot.right();
                }
                default: break;
            }
        }
    }
});
reader.on('close', function () {
    console.log(clc.bgYellow(clc.black('Finished running sim...')));
});
