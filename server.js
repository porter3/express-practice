const http = require('http') // not from an external dependency
const express = require('express')
const morgan = require ('morgan')
const cors  = require('cors')

// list of available routes
const userRouter = require('./routes/user')

const app = express()

// .use() will apply to all inbound requests no matter the HTTP method
// allow access from outside domains
app.use(cors())
// use the logger in 'dev' mode
app.use(morgan('dev'))

const server = http.createServer(app)
const port = 3000

server.listen(port)
// 'listening' is an event
server.on('listening', () => {
    console.log('Listening on port ', port)
})

// all '/' requests will be directed to userRouter
app.use('/', userRouter)