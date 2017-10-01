'use strict'
// to dos: need function to check for tie games
// game API
// on load start game (html in the body tag onload) to execute this function

document.turn = 'X'
document.winner = null
let turnCount = 0

function startGame () {
  for (let i = 1; i <= 9; i++) {
    clearCell(i)
  }
  // set variable

  setMessage(document.turn + " get's to start.")
}
// function to set messages depending on condition
function setMessage (msg) {
  document.getElementById('message').innerText = msg
}
// clicks on squares trigger nextMove (click events in html (onClick))
function nextMove (square) {
  console.log(square)
  if (document.winner !== null) {
    setMessage(document.turn + ' ' + 'already won')
  } else if (square.target.innerText === '') { // if square is empty
    square.target.innerText = document.turn
    console.log(document.turn)
    turnCount++
    switchTurn()
  } else {
    setMessage('Square already taken, pick another')
  }
}
$('.square').on('click', nextMove)

// function to switch turns between X and O
function switchTurn () {
  if (checkForWinner(document.turn)) {
    setMessage(document.turn + ', You won!')
    document.winner = document.turn // winner is either x or o
    // message letting you know who's turn it is
  } else if (turnCount === 9) {
    setMessage("It's a tie game")
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
function getCell (number) {
  return document.getElementById('cell' + number).innerText
}

function clearCell (number) {
  document.getElementById('cell' + number).innerText = ''
}

// function checkForTie ()
module.export = {
  startGame, nextMove
}
