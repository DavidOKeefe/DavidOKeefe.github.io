var bingoLetters = [ "B", "I", "N", "G", "O" ]
var winningMessage = "You Win!"
var board = generateBoard()
var boardHeading = document.getElementsByClassName('boardHeading');
var boardDisplay = document.getElementsByClassName('boardDisplay');
var nextBallText = document.getElementsByClassName('nextBall');
var winner = document.getElementsByClassName('winner')

function startGame(){
  board = generateBoard();
  for (var i=0; i < boardHeading.length; i++){
      boardHeading[i].innerHTML = bingoLetters[i];
  }
  for (var i=0; i < boardDisplay.length; i++){
      boardDisplay[i].innerHTML = board[i];
  }
}

function nextBall(){
  var selectedBall = randomBall();
  nextBallText[0].innerHTML =  "The selected ball is " + selectedBall[0] + ", " + selectedBall[1] + ".";
  board = checkBoardForMatch(board, selectedBall);
  for (var i=0; i < boardDisplay.length; i++){
    boardDisplay[i].innerHTML = board[i];
  }
  if(winningBoard(board) == true){
    winner[0].innerHTML = winningMessage
  }
}

function checkBoardForMatch(board, selectedBall){
  for(var i=0; i<25; i++){
    if (board[i] == selectedBall[1]){
      board[i] = 'X';
    }
  }
  return board
}

function randomBall(){
  var randomBall = []
  randomBall.push(bingoLetters[randomNumber(0,4)])
    if (randomBall == 'B'){
      randomBall.push(randomNumber(1,15))
    }
    else if(randomBall == 'I'){
      randomBall.push(randomNumber(16,30))
    }
    else if(randomBall == 'N'){
      randomBall.push(randomNumber(31,45))
    }
    else if(randomBall == 'G'){
      randomBall.push(randomNumber(46,60))
    }
    else if(randomBall == 'O'){
      randomBall.push(randomNumber(61,75))
    }
  return randomBall
}

function randomNumber(min, max){
  return Math.floor(Math.random()* (max-min+1)+min);
}

// Generate Bingo Board
function generateBoard(){
  this.board = []
  var min = 1;
  var max = 15;
  var selectedNumber = randomNumber(min,max);
  for (var i=1; i<=25; i++){
    // while((selectedNumber in this.board) === true){ selectedNumber = randomNumber(min,max); }
    this.board.push(randomNumber(min,max));
    min += 15;
    max += 15;;
    if(i % 5 == 0){
      min = 1;
      max = 15;
    }

  }
  setFreeSpace();
  return this.board
}

function setFreeSpace(){
  this.board[12] = 'X'
}

// Winning Board
function winningBoard(playersBoard){
  if ((playersBoard[0] == "X" && playersBoard[1] == "X" && playersBoard[2] == "X" && playersBoard[3] == "X" && playersBoard[4] == "X") ||
      (playersBoard[5] == "X" && playersBoard[6] == "X" && playersBoard[7] == "X" && playersBoard[8] == "X" && playersBoard[9] == "X") ||
      (playersBoard[10] == "X" && playersBoard[11] == "X" && playersBoard[12] == "X" && playersBoard[13] == "X" && playersBoard[14] == "X") ||
      (playersBoard[15] == "X" && playersBoard[16] == "X" && playersBoard[17] == "X" && playersBoard[18] == "X" && playersBoard[19] == "X") ||
      (playersBoard[20] == "X" && playersBoard[21] == "X" && playersBoard[22] == "X" && playersBoard[23] == "X" && playersBoard[24] == "X") ||
      (playersBoard[0] == "X" && playersBoard[5] == "X" && playersBoard[10] == "X" && playersBoard[15] == "X" && playersBoard[20] == "X") ||
      (playersBoard[1] == "X" && playersBoard[6] == "X" && playersBoard[11] == "X" && playersBoard[16] == "X" && playersBoard[21] == "X") ||
      (playersBoard[2] == "X" && playersBoard[7] == "X" && playersBoard[12] == "X" && playersBoard[17] == "X" && playersBoard[22] == "X") ||
      (playersBoard[3] == "X" && playersBoard[8] == "X" && playersBoard[13] == "X" && playersBoard[18] == "X" && playersBoard[23] == "X") ||
      (playersBoard[4] == "X" && playersBoard[9] == "X" && playersBoard[14] == "X" && playersBoard[19] == "X" && playersBoard[24] == "X") ||
      (playersBoard[0] == "X" && playersBoard[6] == "X" && playersBoard[12] == "X" && playersBoard[18] == "X" && playersBoard[24] == "X") ||
      (playersBoard[4] == "X" && playersBoard[8] == "X" && playersBoard[12] == "X" && playersBoard[16] == "X" && playersBoard[20] == "X")){
    return true;
  } else { return false; }
}





