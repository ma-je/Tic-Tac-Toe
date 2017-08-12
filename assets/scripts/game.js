'use strict'

$(document).ready(function () {
  console.log('is this the problem?')
})
      // setting the variables
      // keeping track of turns
      let turns = 0
      const messages = $('#messages')
      const square1 = $('#square1')
      const square2 = $('#square2')
      const square3 = $('#square3')
      const square4 = $('#square4')
      const square5 = $('#square5')
      const square6 = $('#square6')
      const square7 = $('#square7')
      const square8 = $('#square8')
      const square9 = $('#square9')

// const setMessage = function (msg) {
//     document.getElementById('message').innerText = msg
//}
      // click function for game board
      $('.cell').click(function() {

        // check with alert to see if works - did!
        // conditions for horizontal wins
        if (square1.hasClass('O') && square2.hasClass('O') && square3.hasClass('O') ||
          square4.hasClass('O') && square5.hasClass('O') && square6.hasClass('O') ||
          square7.hasClass('O') && square8.hasClass('O') && square9.hasClass('O') ||
          // conditions for vertical wins
          square1.hasClass('O') && square4.hasClass('O') && square7.hasClass('O') ||
          square2.hasClass('O') && square5.hasClass('O') && square8.hasClass('O') ||
          square3.hasClass('O') && square6.hasClass('O') && square9.hasClass('O') ||
          // diagonal win possiblilities
          square1.hasClass('O') && square5.hasClass('O') && square9.hasClass('O') ||
          square3.hasClass('O') && square5.hasClass('O') && square7.hasClass('O'))

        { // if "O wins"
              messages.html('O wins') // change to another method for sending this message
              $('.cell').text('+')
              $('.cell').removeClass('disable')
              $('.cell').removeClass('O')
              $('.cell').removeClass('X')
        }
        else if (square1.hasClass('X') && square2.hasClass('X') && square3.hasClass('X') ||
          square4.hasClass('X') && square5.hasClass('X') && square6.hasClass('X') ||
          square7.hasClass('X') && square8.hasClass('X') && square9.hasClass('X') ||

          // vertical wi possiblilities
          square1.hasClass('X') && square4.hasClass('X') && square7.hasClass('X') ||
          square2.hasClass('X') && square5.hasClass('X') && square8.hasClass('X') ||
          square3.hasClass('X') && square6.hasClass('X') && square9.hasClass('X') ||

          // diagonal wi possiblilities
          square1.hasClass('X') && square5.hasClass('X') && square9.hasClass('X') ||
          square3.hasClass('X') && square5.hasClass('X') && square7.hasClass('X'))
         { // if "X wins"
              messages.html('X wins') // change notification method
              $('.cell').text('+')
              $('.cell').removeClass('disable')
              $('.cell').removeClass('O')
              $('.cell').removeClass('X')

        } else if (turns === 8)
        {
              messages.html('Tie Game') // change notificationmethond
              $('.cell').removeClass('disable')
              $('.cell').removeClass('O')
              $('.cell').removeClass('X')
              turns = 0

        } else if ($(this).hasClass('disable'))
        {
          messages.html('this square is already taken')

        } else if (turns % 2 === 0)
        {
          turns++
          $(this).text('O')
          $(this).addClass('disable O') //turn has been taken

          if (square1.hasClass('O') && square2.hasClass('O') && square3.hasClass('O') ||
            square4.hasClass('O') && square5.hasClass('O') && square6.hasClass('O') ||
            square7.hasClass('O') && square8.hasClass('O') && square9.hasClass('O') ||
            square1.hasClass('O') && square4.hasClass('O') && square7.hasClass('O') ||
            square2.hasClass('O') && square5.hasClass('O') && square8.hasClass('O') ||
            square3.hasClass('O') && square6.hasClass('O') && square9.hasClass('O') ||
            square1.hasClass('O') && square5.hasClass('O') && square9.hasClass('O') ||
            square3.hasClass('O') && square5.hasClass('O') && square7.hasClass('O'))
           {
             messages.html('Winner is O!') // change notification method
             turns = 0

          }
        } else
        {
          turns++
          $(this).text('X')
          $(this).addClass('disable X')
          if (
            square1.hasClass('X') && square2.hasClass('X') && square3.hasClass('X') ||
            square4.hasClass('X') && square5.hasClass('X') && square6.hasClass('X') ||
            square7.hasClass('X') && square8.hasClass('X') && square9.hasClass('X') ||
            square1.hasClass('X') && square4.hasClass('X') && square7.hasClass('X') ||
            square2.hasClass('X') && square5.hasClass('X') && square8.hasClass('X') ||
            square3.hasClass('X') && square6.hasClass('X') && square9.hasClass('X') ||
            square1.hasClass('X') && square5.hasClass('X') && square9.hasClass('X') ||
            square3.hasClass('X') && square5.hasClass('X') && square7.hasClass('X'))
          {
            messages.html('winner: X') // change notification method
            turns = 0
            // reset handler
          }

        }

      })
      // reset handler
      $('#reset').click(function () {
        $('.cell').removeClass('disable')
        $('.cell').html('')
        $('.cell').removeClass('O')
        $('.cell').html('')
        $('.cell').removeClass('X')
        $('.cell').html('')
        turns = 0
      })
// This code can be refactored into smaller chuncks to reduce reptition of steps
