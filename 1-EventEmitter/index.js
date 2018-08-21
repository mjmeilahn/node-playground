
// CUSTOM EVENT EMITTER
// const Emitter = require('./emitter');

// NODE EVENT EMITTER
const Emitter = require('events');
const emtr = new Emitter();

emtr.on('greet', () => {
    console.log('someone said hello');
});

emtr.on('greet', () => {
    console.log('a greeting occured!');
});


console.log('Hello!');
emtr.emit('greet');

