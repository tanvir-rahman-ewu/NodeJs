global.console.log("hello world"); ///console log is a method of global object of nodejs

console.log('this is file path : ' + __filename)
console.log('this is folder path : ' + __dirname)

let a = 10

console.log(global.a) // it represents undefined. because in node js declared variable is not attached to global object