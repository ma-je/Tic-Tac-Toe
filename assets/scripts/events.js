// example from class'use strict'

const gameApi = require('./api.js')
const gameUi = require('./ui.js')
const getFormFields = require('../../lib/get-form-fields')

// get in the habit of naming your handlers, it eases debugging.
//
// also, follow a convention for handlers. here, I name my handler
// beginning with 'on' to denote that it is done when the GET /books
// button is clicked
const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  if (data.credentials.password === data.credentials.password_confirmation) {
    gameApi.addUser(data)
      .then(gameUi.onSignUpSuccess)
      .catch(gameUi.onError)
  }// come back and put this code } else {
// blogUi.signUpFailure()
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this)

  gameApi.logInUser(data)
    .then(gameUi.onsignInSuccess)
    .catch(gameUi.onError)
}

const onSignOut = function (event) {
  event.preventDefault()
  const data = getFormFields(this)

  gameApi.logOut(data)
    .then(gameUi.onSignOutSuccess)
    .catch(gameUi.onSignUpError)
}

const onpasswordChange = function (event) {
  event.preventDefault()
  const data = getFormFields(this)

  gameApi.passwordChange(data)
    .then(gameUi.resetSuccess)
    .catch(gameUi.onError)
}

const onCreateGame = function (event) {
  gameApi.createGame()
    .then(gameUi.onCreateGameSuccess)
    .catch(gameUi.createGameError)
}
//
const onUpdateGame = function (apiIndex, value, over) {
// function onUpdateGame (index, value, over) {
  console.log('onUpdateGame index = ' + apiIndex)
  console.log('onUpdateGame value = ' + value)
  console.log('onUpdateGame over = ' + over)
  console.log(apiIndex, value, over)
  gameApi.updateGame(apiIndex, value, over)
    .then(gameUi.onUpdateGameSuccess)
    .catch(gameUi.updateGameError)
}

const onGetGames = function (event) {
  event.preventDefault()
  gameApi.index()
    .then(gameUi.onGetSucess)
    .catch(gameUi.onGetFailure)
}
module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onpasswordChange,
  onCreateGame,
  onUpdateGame,
  onGetGames
}
