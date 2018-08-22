
const fs = require('fs');
const zlib = require('zlib');

/*************************
       WITHOUT PIPES      
*************************/

// BREAK UP READABLE STREAM WITH
// 16 KILOBYTE CHUNKS AT A TIME
// TO AVOID ANY DATA LOSS
const readable = fs.createReadStream(__dirname + '/lorem.txt', { encoding: 'utf8', highWaterMark: 16 * 1024});

const writable = fs.createWriteStream(__dirname + '/lorem-copy.txt');


// STREAMS INHERIT EVENTEMITTER...
readable.on('data', chunk => {
    console.log(chunk);
    writable.write(chunk);
});





/*************************
        WITH PIPES        
*************************/

const gzip = zlib.createGzip();

const read = fs.createReadStream(__dirname + '/ipsum.txt');

const write = fs.createWriteStream(__dirname + '/ipsum-copy.txt');

const compressed = fs.createWriteStream(__dirname + '/ipsum.txt.gz');


// WE DON'T KNOW THE INCOMING SIZE TO BE READ
// PIPES BREAK UP DATA INTO CHUNKS
read.pipe(write);

// FIRST WE ZIP CONTENTS FROM READABLE STREAM...
// THEN WE WRITE ZIPPED CONTENTS TO WRITABLE STREAM
read.pipe(gzip).pipe(compressed);