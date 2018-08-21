'use strict';

const EventEmitter = require('events');

module.exports = class Greeter extends EventEmitter {
    constructor() {
        super();
        this.greeting = 'Hello! How are you ';
    }

    greet(data) {
        console.log(this.greeting + data);
        this.emit('greet', data);
    }
}