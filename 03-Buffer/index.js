
// GET STRING LENGTH
const strLen = 'Hello'.length;

// CONVERT STRING TO BINARY
const buf = new Buffer.alloc(strLen, 'Hello', 'utf8');
console.log(buf);

// CONVERT BINARY TO STRING
console.log(buf.toString());

// CONVERT BINARY TO UNICODE
console.log(buf.toJSON());

// FETCH UNICODE FROM BINARY
console.log(buf[2]);

// OVERRITE BUFFER IN MEMORY
buf.write('wo');
console.log(buf.toString());