const ip = require('ip');
const os = require( 'os' );

const networkInterfaces = os.networkInterfaces( );

console.log(ip.address());
// console.log(networkInterfaces);