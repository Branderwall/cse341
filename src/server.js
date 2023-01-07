// const http = require('http')

// const hostname = '127.0.0.1'
// const port = 3000

// const server = http.createServer((req, res) => {
//   res.statusCode = 200
//   res.setHeader('Content-Type', 'text/plain')
//   res.end('James I Bond\n')
// })

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`)
// })

const express = require('express');
const app = express();

// create port variable
const port = process.env.PORT || 3000;

// Send request to routes for directing
app.use('/', require('./routes'))

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

