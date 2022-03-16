'use strict';

const EventEmitter = require('events');
const util = require('util');

function Greetr () {
    this.greeting = 'Hello! How are you ';
}

// Greetr() now inherits EventEmitter Prototype
util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function (data) {
    console.log(this.greeting + data);
    this.emit('greet', data);
};

const greetr1 = new Greetr();

greetr1.on('greet', data => {
    console.log(`Someone greeted: ${ data }`);
});

greetr1.greet('Matthew');
