var bingoLetters = [ "B", "I", "N", "G", "O" ]
var winningMessage = "You Win!"
var board = generateBoard()
var boardHeading = document.getElementsByClassName('boardHeading');
var boardDisplay = document.getElementsByClassName('boardDisplay');
var nextBallText = document.getElementsByClassName('nextBall');
var winner = document.getElementsByClassName('winner')
document.getElementById("newGameVisibility").style.display = ""
document.getElementById("nextBallButtonVisibility").style.display = "none"
document.getElementById("playAgainVisibility").style.display = "none"


function startGame(){
  board = generateBoard();
  for (var i=0; i < boardHeading.length; i++){
      boardHeading[i].innerHTML = bingoLetters[i];
  }
  for (var i=0; i < boardDisplay.length; i++){
      boardDisplay[i].innerHTML = board[i];
  }
  document.getElementById("newGameVisibility").style.display = "none"
  document.getElementById("nextBallButtonVisibility").style.display = ""
}

function playAgain(){
  window.location.reload();
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
    document.getElementById("nextBallButtonVisibility").style.display = "none"
    document.getElementById("playAgainVisibility").style.display = ""
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
    if (randomBall == 'B'){randomBall.push(randomNumber(1,15))}
    else if(randomBall == 'I'){ randomBall.push(randomNumber(16,30)) }
    else if(randomBall == 'N'){ randomBall.push(randomNumber(31,45)) }
    else if(randomBall == 'G'){ randomBall.push(randomNumber(46,60)) }
    else if(randomBall == 'O'){ randomBall.push(randomNumber(61,75)) }
  return randomBall
}

function randomNumber(min, max){
  return Math.floor(Math.random()* (max-min+1)+min);
}

function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

  function generateBoard(){
    this.board = [];
    var columnB = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    var columnI = [16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
    var columnN = [31,32,33,34,35,36,37,38,39,40,41,42,43,44,45]
    var columnG = [46,47,48,49,50,51,52,53,54,55,56,57,58,59,60]
    var columnO = [61,62,63,64,65,66,67,68,69,70,71,72,73,74,75]
    while(this.board.length < 25) {
      board.push(shuffle(columnB).pop());
      board.push(shuffle(columnI).pop());
      board.push(shuffle(columnN).pop());
      board.push(shuffle(columnG).pop());
      board.push(shuffle(columnO).pop());
    }
    setFreeSpace();
    return this.board
  }

function setFreeSpace(){
  this.board[12] = 'X'
}

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





