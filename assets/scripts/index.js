'use strict'

// user require with a reference to bundle the file and use it in this file
// var example = require('./example

// load manifests
// script

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const gameEvents = require('./events.js')// user require with a reference to bundle the file and use it in this file
const gamePlay = require('./game.js')

$(() => { // shorthand for document ready
  setAPIOrigin(location, config)
})
//

$(() => {
// event handlers
  // $('.gameBoard').hide()
  $('#sign-out').hide()
  $('#sign-in').show() // come back and change to hide
  $('#change-password').hide()
  $('#sign-up').on('submit', gameEvents.onSignUp)
  $('#sign-in').on('submit', gameEvents.onSignIn)
  $('#sign-out').on('submit', gameEvents.onSignOut)
  $('#change-password').on('submit', gameEvents.onpasswordChange)
  $('#reset').on('click', gameEvents.onCreateGame)
  // reset handler
})
