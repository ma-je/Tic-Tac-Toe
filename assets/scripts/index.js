'use strict'

// user require with a reference to bundle the file and use it in this file
// var example = require('./example

// load manifests
// script

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
// const config = require('./config')
console.log('Is this working?')

$(() => { // shorthand for document ready
  setAPIOrigin(location, config)
})
//
const gameEvents = require('./events.js')// user require with a reference to bundle the file and use it in this file
const gamePlay = require('./game.js')

$(() => {
  $('#sign-up').on('submit', gameEvents.onSignUp)
  $('#sign-in').on('submit', gameEvents.onSignIn)
  $('#sign-out').on('submit', gameEvents.onSignOut)
  $('#change-password').on('submit', gameEvents.onPasswordChange)
  // event handlers
  $('#square1, #square2, #square3, #square4, #square5, #square6, #square7, #square8, #square9').on('click', gamePlay.addChar)
})
