function Game(){
  this.board = null;
  this.score = 0;
};

Game.prototype.start = function () {
  this.board = new Board();
  this.board.placeRandomTile();
  this.board.placeRandomTile();
};

Game.prototype.move = function(direction) {
  if (direction == 'left') {
    this.board.moveLeft();
  } else if (direction == 'right') {
    this.board.moveRight();
  } else if (direction == 'up') {
    this.board.moveUp();
  } else if (direction == 'down') {
    this.board.moveDown();
  }
  this.board.placeRandomTile();
  this.printBoard();
}

Game.prototype.printBoard = function() {
  var printableBoard = this.board.nestBoard(this.board.tiles)
  for (var i=0; i<printableBoard.length; i++){ console.log(printableBoard[i]) };
}
