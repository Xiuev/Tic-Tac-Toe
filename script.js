let gameboard = (function () {
  let score = 0;
  const gameBoard = ["", "", "", "", "", "", "", "", ""];
  //console.log(gameBoard);
  const getGameBoard = () => {
    return gameBoard;
  };

  const makeMove = (index, playerMark) => {
    //modify to check if spot is empty first!
    //use a loop?
    if (gameBoard[index] === "") {
      console.log("There is nothing in this index!");
      gameBoard.splice(index, 1, playerMark);
      console.log(gameBoard);
    } else {
      console.log("Theree is something here already!");
      console.log(gameBoard);
    }
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

let player1 = createPlayer("Sora", "O");
console.log(player1);
gameboard.makeMove(4, player1.mark);

//TESTING BENCH//
let testArray = ["", "", "X", "", ""];

//gameboard.makeMove(3, player1.mark);
//function makeMove(index, playerMark) {
//review callback functions
//limit index 0-8?
//mabe each player can have a makeMove method/proto?
//check if spot is empty --> insert into spot. use splice()
//TESTING BENCH//
