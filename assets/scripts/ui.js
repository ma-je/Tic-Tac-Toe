// example from class

'use strict'
const app = require('./app.js')
const gameEvents = require('./events.js')
const gamePlay = require('./game.js')

const onSuccess = function () {
  console.log('Signed up')
}
const onError = function (error) {
  console.error(error)
}
const signInSuccess = function (data) {
  console.log('signed in')
  app.user = data.user
  //gameEvents.onCreateGame(event)
}

const resetSuccess = function () {
  console.log(' password changed successfully')
}
const onCreateGameSuccess = function (data) {
  app.game = data.game
  app.game.id = data.game.id
  $('.cell').on('click', gamePlay.startGame)
  console.log(data)
  console.log('game created successfully')
}

const createGameError = function (error) {
  console.log(error)
  console.log('something went wrong')
}

module.exports = {
  onSuccess,
  onError,
  signInSuccess,
  resetSuccess,
  onCreateGameSuccess,
  createGameError
}
