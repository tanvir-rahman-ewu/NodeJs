//every individual file in nodejs is a module

console.log(module)
/* two ways of importing a module */
//const math = require('./math.js')

//console.log(math.add(10, 10))

const {add} = require('./math')

console.log(add(10, 10))