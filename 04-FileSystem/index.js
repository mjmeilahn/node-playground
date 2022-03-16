
const fs = require('fs');

// SYNCHRONOUS - RECOMMENDED FOR CONFIG FILES OR SSL CERTS
const content1 = fs.readFileSync(__dirname + '/hello.txt', 'utf8');

console.log('Synchronously: ' + content1);



// ASYNCHRONOUS - DEFAULT NODE
const content2 = fs.readFile(__dirname + '/hello.txt', 'utf8', (err, data) => {
    if (!err && data) {
        console.log('Asynchronously: ' + data);
    }
});


console.log('end of file');
