console.log(__filename)

const path = require('path')

const file_loc = __filename

//console.log(path)

console.log("this file name: "+ path.basename(__filename)) // basename method take parameter as __filename and return the file name only

console.log("this directory name: "+ path.basename(__dirname))

console.log("this file's extension name: "+ path.extname(__filename))

let pathObj = {
    dir: 'index/user',
    name: 'profile',
    ext : '.js'
}

console.log(path.format(pathObj))

console.log(path.isAbsolute(__filename))

console.log(path.isAbsolute('./math.js'))

console.log(path.join('home','nodejs','index.js'))

console.log(path.parse(__filename))