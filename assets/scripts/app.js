Const PLAYER1_TOKEN = "X"
const PLAYER2_TOKEN = "Y"

$(document).ready(function() {
  const grid = [
    [' ', ' ', ' ']
    [' ', ' ', ' ']
    [' ', ' ', ' ']
  ];

  $('.col').click(function() {
    $(this).html(PLAYER_TOKEN);
  });

});
//need to figure out who won
// need to check if game is finished
/* 8 possible ways to win:
horizontal *3
vertical * 3 */

//
