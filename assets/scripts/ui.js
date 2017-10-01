// example from class

'use strict'
const app = require('./app.js')
const gameEvents = require('./events.js')
const gamePlay = require('./game.js')

const onSignUpSuccess = function () {
 console.log('Signed up')
  $('#sign-up').hide()
  $('#sign-in').show()
  $('#sign-up input').not('.submit-button').val('')
}
const onSignUpError = function (error) {
  console.error(error)
  $('#suError').removeClass('hidden')
  $('#sign-up input').not('.submit-button').val('')
}
const onsignInSuccess = function (data) {
  console.log('signed in')
  app.user = data.user
  $('#sign-out').show()
  $('#sign-in').hide()
  $('.gameBoard').show()
  // $('.gameBoard').show()
  $('#sign-up').hide()
  $('#sign-in input').not('.submit-button').val('')
  $('#message').innerText = ("Let's play!")
}

  // $('#siError').show()

const onSignOutSuccess = function (data) {
  // console.log(data)
  // console.log('signed out')
  $('#sign-out').hide()
  $('#sign-in').show()
}
// reset the password
const resetSuccess = function () {
  // console.log(' password changed successfully')
}
// gameEvents.onCreateGame(event)
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
  onSignUpSuccess,
  onSignUpError,
  onsignInSuccess,
  onSignOutSuccess,
  resetSuccess,
  onCreateGameSuccess,
  createGameError
}
