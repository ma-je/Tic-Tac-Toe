// example from class

'use strict'
const app = require('./app.js')
const gameEvents = require('./events.js')
const gamePlay = require('./index.js')

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
  console.log(app.game)
  // console.log(data.game.id)
  $('.cell').on('click', gamePlay.startGame)
  $('.gameBoard').show()
  console.log(data)
  console.log('game created successfully')
}

const createGameError = function (error) {
  console.log(error)
  console.log('something went wrong')
}
const onGetSucess = function (data) {
  console.log(data)
  $('.gameStats').empty()
  for (let i = 0; i < data.games.length; i++) {
    $('.gameStats').append('<p>' + 'games played:' + data.games.length + '</p>')
  }
}
// const onGetFailure = function (error) {
// console.log (error)
// }
// const onUpdateGameSuccess = function (data) {
//   console.log(data)
// }
const updateGameError = function (error) {
  console.log(error)
}
module.exports = {
  onSignUpSuccess,
  onSignUpError,
  onsignInSuccess,
  onSignOutSuccess,
  resetSuccess,
  onCreateGameSuccess,
  createGameError,
  onGetSucess,
  // onUpdateGameSuccess,
  updateGameError
  // onGetFailure
}
