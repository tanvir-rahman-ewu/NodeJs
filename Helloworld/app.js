const express = require('express')
const app = express()
const port = 3000

app.get('/hello', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

console.log("nopdemon started")
console.log("nopdemon started")

/* Nodemon is a module to start server automatically*/