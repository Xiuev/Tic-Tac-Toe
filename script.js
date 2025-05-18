let gameboard = (function () {
  let score = 0;
  const gameBoard = ["", "", "", "", "", "", "", "", ""];
  //console.log(gameBoard);
  const getGameBoard = () => {
    return gameBoard;
  };

  const makeMove = (index, playerMark) => {
    //modify to check if spot is empty first!

    gameBoard.splice(index, 1, playerMark);
    console.log(gameBoard);
    return gameBoard;
  };

  return {
    getGameBoard,
    makeMove,
  };
})();

function createPlayer(name, mark) {
  return {
    name,
    mark,
  };
}

//TESTING STUFF//
let player1 = createPlayer("John", "O");
gameboard.makeMove(4, player1.mark);
//function makeMove(index, playerMark) {
//review callback functions
//limit index 0-8?
//mabe each player can have a makeMove method/proto?
//check if spot is empty --> insert into spot. use splice()
//board.splice(index, index, playerMark);
//console.log(board);
//}

///////////////
