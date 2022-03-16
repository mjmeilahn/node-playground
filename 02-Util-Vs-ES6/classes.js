'use strict';

const Greetr = require('./greetr');

const greetr1 = new Greetr();

greetr1.on('greet', data => {
    console.log(`Someone greeted: ${ data }`);
});

greetr1.greet('Matthew');

console.log(greetr1.__proto__);