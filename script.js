const gameBrdModule = (function () {
  console.log("Welcome to TicTac, Player1 please make your move:");
  let gameBoard = ["", "", "", "", "", "", "", "", ""];
  const getGameBoard = function () {
    //console.log(gameBoard);
    return gameBoard;
  };
  return { gameBoard, getGameBoard };
})();
///////
let GameController = (function () {
  let currentBoard = gameBrdModule.getGameBoard();
  let winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const checkWin = function (mark) {
    for (let i = 0; i < winCombos.length; i++) {
      let [a, b, c] = winCombos[i];
      if (
        currentBoard[a] === mark &&
        currentBoard[b] === mark &&
        currentBoard[c] === mark
      ) {
        return console.log("WINNER!");
      } else {
        return;
      }
    }
  };
  const makeMove = function (indexSlot, playerMark) {
    //check if slot is empty(check if index is equal to empty string), put marker in spot
    if (currentBoard[indexSlot] === "") {
      currentBoard.splice(indexSlot, 1, playerMark);
      checkWin(playerMark);
      console.log(currentBoard);
    } else {
      console.log("There is something here!");
    }
  };

  return {
    currentBoard,
    winCombos,
    makeMove,
    checkWin,
    trackTurn,
  };
})();

function createPlayer(name, mark) {
  const { makeMove } = GameController; //destruct to extract makeMove from GameController object
  return { name, mark, makeMove };
}
let player1 = createPlayer("Sora", "X");
let player2 = createPlayer("Roxas", "O");

/// CALLING STUFF BELOW

//player1.makeMove(2, "X"); //try to capture makeMove in createrPLayer function
//player1.makeMove(0, "X");
//player1.makeMove(5, "O");
//player1.makeMove(1, "X");

let testArr = [
  [1, 2, 3],
  [4, 5, 6],
];
