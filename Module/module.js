//every individual file in nodejs is a module

console.log(module)

const math = require('./math.js')

console.log(math.add(10, 10))