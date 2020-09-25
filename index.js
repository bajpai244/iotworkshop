const five = require('johnny-five')
const express = require('express')
const board = new five.Board()
const ws = require('ws')
let servo = null

const app = express()

app.use(express.static('public'))

const server = app.listen(8000, function () {
  console.log('Listening on port ' + 8000)
})

board.on('ready', function () {
  console.log('### Board ready!')
  servo = new five.Servo(10)
})

const wsServer = new ws.Server({ server })

wsServer.on('connection', function (socket) {
  console.log('ws:connection established')
  socket.on('message', function (angle) {
    servo.to(angle)
  })
})
