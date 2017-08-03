let count = 0
const addChar = function (event) {
  count++
  if (count % 2 === 0) {
    $(event.target).html('O')
  } else if (count % 2 !== 0) {
    $(event.target).html('X')
    checkforWins()
  }
}
const winningCombo = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [7, 5, 3]
]
const checkforWins = function () {
  let player1 = [] //  [1, 2, 3]
  let player2 = []
  if ($('#square1').html() === 'X') {
    player1.push(1)
  } else if ($('#square1').html() === 'O') {
    player2.push(1)
  }
  if ($('#square2').html() === 'X') {
    player1.push(2)
  } else if ($('#square2').html() === 'O') {
    player2.push(2)
  }
  if ($('#square3').html() === 'X') {
    player1.push(3)
  } else if ($('#square3').html() === 'O') {
    player2.push(3)
  }
  if ($('#square4').html() === 'X') {
    player1.push(4)
  } else if ($('#square4').html() === 'O') {
    player2.push(4)
  }
  if ($('#square5').html() === 'X') {
    player1.push(5)
  } else if ($('#square5').html() === 'O') {
    player2.push(5)
  }
  if ($('#square6').html() === 'X') {
    player1.push(6)
  } else if ($('#square6').html() === 'O') {
    player2.push(6)
  }
  if ($('#square7').html() === 'X') {
    player1.push(7)
  } else if ($('#square7').html() === 'O') {
    player2.push(7)
  }
  if ($('#square8').html() === 'X') {
    player1.push(8)
  } else if ($('#square8').html() === 'O') {
    player2.push(8)
  }
  if ($('#square9').html() === 'X') {
    player1.push(9)
  } else if ($('#square9').html() === 'O') {
    player2.push(9)
  }
  for (let i = 0; i < 8; i++) {
    console.log(player1)
    if (player1.includes(winningCombo[i])) {
      console.log('player1 wins')
    }
  }
}
module.exports = {
  addChar
}
