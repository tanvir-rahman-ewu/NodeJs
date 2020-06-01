//to get os related information use os module
console.log(__filename)

const os = require('os')

console.log(os.arch())

console.log(os.cpus())

console.log(os.freemem())

console.log(os.networkInterfaces())

console.log(os.userInfo())