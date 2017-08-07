const addChar = function(event) {}
/*const winningCombos = [
  // horizontal wins
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  // vertical wins
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  // diagonal wins
  [1, 5, 9],
  [7, 5, 3]
]
const board = [0, 0, 0, 0, 0, 0, 0, 0, 0]
const totalTurns = 0
const player1
const player2
const playerMarker
const currentPlayer
const tieCheck

enterNametoStart()

function enterNametoStart() {
  $('#startGame').click(function() {
      player1 = $('#player1').val()
      player2 = $('#player2').val()
      currentPlayer = whoStarts()
      playerMarker = {
        x: player1
        o: player2
      }
    }
  }

  function whoStarts() {
    let randomize = Math.floor((Math.random() * 2) + 1)
    if (randomize === 1) {
      alert(player1 + "starts")
      return "X"
    } else {
      alert(player2 + "starts")
      return "O"
    }
  }
  $('#restartGame').click(function() {
    location.reload()
  })
  $('.cell').('click', '.square:not('.square - X, .square - O ')', function() {
        let cell = $(this).addClass('square- ' + currentPlayer)
        let indexOfSquare = $('.cell .square').index(square) //check if should not begameBoard instead of cell
        totalTurns++
        writeToBoard()
        if (isGameOver() {
            $('#restartGame').show(
              if isWinner() {
                alert(playerMarker[currentPlayer] + 'wins the game!')
              } else {
                alert('Sorry! Try again')
              } else switchTurn()
            }

            function writeToBoard() {
              cell[indexOfSquare] = currentPlayer
              console.log(cell)
            }

            function isWinner() {
              for (let i = 0; i < winningCombo.length; i++) {
                let win = winningCombo[i]
                if (cell)[win[0]] === cell[win[1]] &&
                  cell[win[1]] === cell[win[2]]) {
                return cell[win][0]
              }
              return false
            }

            function switchTurn() {
              if (currentPlayer === "X") {
                currentPlayer = "O"
              } else {
                currentPlayer = "X"
              }
            }

            function isGameOver() {
              if (totalTurns === 9) {
                return true
              }
              if (isWinner() {
                  return true
                }
                return false
              }
            })
        })
      /* const checkforWins = function () {
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
      } */
      module.exports = {
        addChar
      }
