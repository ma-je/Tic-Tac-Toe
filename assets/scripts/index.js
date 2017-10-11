'use strict'

// user require with a reference to bundle the file and use it in this file
// var example = require('./example

// load manifests
// script

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const gameEvents = require('./events.js')// user require with a reference to bundle the file and use it in this file
console.log(gameEvents)
// debugger
// const gamePlay = require('./game.js')

$(() => { // shorthand for document ready
  setAPIOrigin(location, config)
})
//

$(() => {
// event handlers
  $('.gameBoard').hide()
  $('#reset').hide()
  $('#sign-out').hide()
  $('#sign-in').show() // come back and change to hide
  $('#change-password').hide()
  $('#sign-up').on('submit', gameEvents.onSignUp)
  $('#sign-in').on('submit', gameEvents.onSignIn)
  $('#sign-out').on('submit', gameEvents.onSignOut)
  $('#change-password').on('submit', gameEvents.onpasswordChange)
  $('.gameBoard').on('click', nextMove)
  $('#new-game').on('click', gameEvents.onCreateGame)
  $('#get-games').on('click', gameEvents.onGetGames)
})
// ////////////////////////////////////////////////// //

// to dos: need function to check for tie games
// game API

// X gets to start
document.turn = 'X'
document.winner = null
let turnCount = 0
let newGame = $('#new-game')
let index
let value
let over

newGame.on('click', startGame)

function startGame () {
  document.winner = null
  for (let i = 1; i <= 9; i++) {
    clearCell(i)
  }
  over = false
  // set variable
  // function to set message and change as appropriate
  setMessage(document.turn + 'starts the game.')
}
// function to set messages depending on condition
function setMessage (msg) {
  document.getElementById('message').innerText = msg
}
// clicks on squares trigger nextMove
function nextMove (square) {
  event.stopPropagation()
  console.log(square)
  if (document.winner !== null) {
    setMessage(document.turn + ' ' + 'already won')
  } else if (square.target.innerText === '') { // if square is empty
    // switch turn
    square.target.innerText = document.turn
    index = square.target.id[4]
    const apiIndex = index - 1
    if (document.winner) {
      over = true
    } else {
      over = false
    }
    console.log(index - 1)
    value = document.turn
    console.log(document.turn)
    // console.log(gameEvents)
    const gameEvents = require('./events.js')
    gameEvents.onUpdateGame(apiIndex, value, over)
    //
    turnCount++
    switchTurn()
  } else {
    setMessage('This square is already taken, pick another')
  }
}
console.log(nextMove)
$('.square').on('click', nextMove)

// function to switch turns between X and O
function switchTurn () {
  // if there is a winner, say who won
  if (checkForWinner(document.turn)) {
    setMessage(document.turn + ', You won!')
    document.winner = document.turn // winner is either x or o
    over = true
    // check for tie
  } else if (turnCount === 9) {
    setMessage("It's a tie game")
    over = true
  } else if (document.turn === 'X') {
    document.turn = 'O'
    setMessage("It's " + document.turn + " 's turn'")
    // turnCount++
    console.log(turnCount)
  } else {
    document.turn = 'X'
    setMessage("It's " + document.turn + " 's turn'")
    // turnCount++
    console.log(turnCount)
  }
}
// check winning combinations
function checkForWinner (move) {
  let result = false // assume it's false to start
  if (checkRow(1, 2, 3, move) ||
    checkRow(4, 5, 6, move) ||
    checkRow(7, 8, 9, move) ||
    checkRow(1, 4, 7, move) ||
    checkRow(2, 5, 8, move) ||
    checkRow(3, 6, 9, move) ||
    checkRow(1, 5, 9, move) ||
    checkRow(3, 5, 7, move)) {
    result = true
  }
  return result
}
// function to check for win conditions
function checkRow (a, b, c, move) {
  let result = false // assume it is false
  // if a, b, c, = to move (either x or o)
  if (getCell(a) === move && getCell(b) === move && getCell(c) === move) {
    result = true
  }
  return result
}
// get what's in each cell and use as call back in check row function
// each cell has a number value (1-9)
// return the value of the element (either x or o)
function getCell (number) {
  return document.getElementById('cell' + number).innerText
}

function clearCell (number) {
  document.getElementById('cell' + number).innerText = ''
}

// function checkForTie ()
module.export = {
  startGame,
  nextMove
}
