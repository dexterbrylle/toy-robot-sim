'use strict';

import * as fs from 'fs';
import * as readline from 'readline';
import { Bot } from './bot';

const clc = require('cli-color')

const reader = readline.createInterface(fs.createReadStream(process.argv[2]))
console.log(clc.bgYellow(clc.black('Running sim...')))
const bot = new Bot();

reader.on('line', (l: string) => {
  if (l.length === 0) {
    return;
  }

  const commands = l.split(' ');
  const cmd = commands[0];
  if (cmd === 'PLACE') {

    if (commands.length ===  2) {12
      const params = commands[1].split(',');
      if (params.length === 3) {
        const x = Number(params[0]);
        const y = Number(params[1]);
        const d = params[2].toString().toLowerCase();

        bot.place(x, y, d);
      }
    } else {
      console.log('Invalid place command.', commands);
    }
  } else {
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
          break;
        }
        case 'RIGHT': {
          bot.right();
          break;
        }
        default: break;
      }
    }
  }
});

reader.on('close', () => {
  console.log(clc.bgYellow(clc.black('Finished running sim...')));
});
