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
  const data = getFormFields(this)

  gameApi.addUser(data)
    .then(gameUi.onSuccess)
    .catch(gameUi.onError)
}
const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this)

  gameApi.logInUser(data)
    .then(gameUi.signInSuccess)
    .catch(gameUi.onError)
}

const onSignOut = function (event) {
  event.preventDefault()
  const data = getFormFields(this)

  gameApi.logOut(data)
    .then(gameUi.onSuccess)
    .catch(gameUi.onError)
}
const onpasswordChange = function (event) {
  event.preventDefault()
  const data = getFormFields(this)

  gameApi.passwordChange(data)
    .then(gameUi.resetSuccess)
    .catch(gameUi.onError)
}
module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onpasswordChange
}
