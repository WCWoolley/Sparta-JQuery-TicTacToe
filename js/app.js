$(document).ready(function(){
  // Code goes here

  var i = 1;
  var play = true;

  $("table tr td").click(function(){
    if ($(this).text()=="" && play) {
      (i % 2 === 1) ? $(this).append("X").addClass("X") : $(this).append("O").addClass("O");
      (i % 2 === 0) ? $(".playerTurn").text("It is X's turn") : $(".playerTurn").text("It is O's turn");
      i++;
      if (whoWon() !=-1 && whoWon() !="") {
        (whoWon() === "X") ? alert("X Wins!") : alert("O Wins!");
        play = false;
      }
    };
  });

  function whoWon() {
    var space = [
      $(`td[data-num="0"]`).text(),
      $(`td[data-num="1"]`).text(),
      $(`td[data-num="2"]`).text(),
      $(`td[data-num="3"]`).text(),
      $(`td[data-num="4"]`).text(),
      $(`td[data-num="5"]`).text(),
      $(`td[data-num="6"]`).text(),
      $(`td[data-num="7"]`).text(),
      $(`td[data-num="8"]`).text(),
    ];

    if ((space[0]==space[1]) && (space[1]==space[2])) {
      return space[2];
    } else if ((space[3]==space[4]) && (space[4]==space[5])) {
      return space[5];
    } else if ((space[6]==space[7]) && (space[7]==space[8])) {
      return space[8];
    } else if ((space[0]==space[3]) && (space[3]==space[6])) {
      return space[6];
    } else if ((space[1]==space[4]) && (space[4]==space[7])) {
      return space[7];
    } else if ((space[2]==space[5]) && (space[5]==space[8])) {
      return space[8];
    } else if ((space[0]==space[4]) && (space[4]==space[8])) {
      return space[8];
    } else if ((space[2]==space[4]) && (space[4]==space[6])) {
      return space[6];
    }
    return -1;
  };

  $("#reset").click(function(){
    window.location.reload();
  });


});
