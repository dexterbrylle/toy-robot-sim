'use strict';

const chai = require('chai').expect;
const Bot = require('../build/bot').Bot;
const { expect } = require('chai');

describe('BOT TEST', () => {
  it('Test commands', done => {
    const bot = new Bot();

    bot.place(0, 0, 'NORTH');
    bot.move();
    bot.move();
    bot.right();
    // console.log(bot.x, bot.y, bot.d);

    expect(bot.x).to.be.equal(0);
    expect(bot.y).to.be.equal(2);
    expect(bot.d).to.be.equal('e');

    done();
    bot.report();
  });
});
