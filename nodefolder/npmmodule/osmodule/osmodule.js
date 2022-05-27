const os = require('os');
const { toUSVString } = require('util');
const freeMemory = os.freemem();
const totalmem = os.totalmem();
console.log(freeMemory)
console.log(os.arch());
console.log(totalmem);

// to get the  memory in gb we are converting them so we can get total memory in gb
console.log(`${totalmem/1024/1024/1024}`);

// to check the hostname of the laptop 
const hostname = os.hostname();
console.log(hostname)

// to check the platform of your pc 
console.log(os.platform());

// to check the temprory file path in our pc 
console.log(os.tmpdir());

// to check the type of operating system we are using 
console.log(os.type())