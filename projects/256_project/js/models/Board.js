function Board(){
  this.tiles = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
};

Board.prototype.moveLeft = function () {
  var rows = this.nestBoard(this.tiles);
  rows = this.move(rows);
  this.tiles = _.flatten(rows);
};

Board.prototype.moveRight = function () {
  var rows = this.nestBoard(this.tiles);
  for (var i=0; i<rows.length; i++){ rows[i].reverse() };
  rows = this.move(rows);
  for (var i=0; i<rows.length; i++){ rows[i].reverse() };
  this.tiles = _.flatten(rows);
};

Board.prototype.moveUp = function () {
  var rows = this.nestBoard(this.tiles);
  rows = _.zip(rows[0], rows[1], rows[2], rows[3]);
  rows = this.move(rows);
  rows = _.zip(rows[0], rows[1], rows[2], rows[3]);
  this.tiles = _.flatten(rows);
};

Board.prototype.moveDown = function () {
  var rows = this.nestBoard(this.tiles);
  rows = _.zip(rows[0], rows[1], rows[2], rows[3]);
  for (var i=0; i<rows.length; i++){ rows[i].reverse() };
  rows = this.move(rows);
  for (var i=0; i<rows.length; i++){ rows[i].reverse() };
  rows = _.zip(rows[0], rows[1], rows[2], rows[3]);
  this.tiles = _.flatten(rows);
};

Board.prototype.nestBoard = function (board) {
  return [[board[0], board[1], board[2], board[3]],
          [board[4], board[5], board[6], board[7]],
          [board[8], board[9], board[10], board[11]],
          [board[12], board[13], board[14], board[15]]];
};

Board.prototype.move = function(rows) {
  for (var i=0; i<rows.length; i++){
    rows[i] = this.shiftRow(rows[i])
    rows[i] = this.combineRow(rows[i])
    rows[i] = this.shiftRow(rows[i])
  };
  return rows;
};

Board.prototype.combineRow = function (row) {
  if(row[0] == row[1]){
    row[0] += row[1];
    row[1] = 0;
  }
  if (row[1] == row[2]) {
    row[1] += row[2];
    row[2] = 0;
  }
  if (row[2] == row[3]) {
    row[2] += row[3];
    row[3] = 0;
  };
  return row;
};

Board.prototype.shiftRow = function (row) {
  var shifted_row = _.reject(row, function(num){ return num == 0});
  while (shifted_row.length < 4) {
    shifted_row.push(0)
  };
  return shifted_row;
};

Board.prototype.placeRandomTile = function () {
  var availableTileLocations = this.findAvailableLocations();

  var selectedLocation = _.sample(availableTileLocations);
  this.tiles[selectedLocation] = 2
};

Board.prototype.findAvailableLocations = function () {
  var availableTileLocations = [];

  for(var i = 0; i < this.tiles.length; i++){
    if(this.tiles[i] === 0) {
      availableTileLocations.push(i);
    };
  };
  return availableTileLocations
};

Board.prototype.printBoard = function() {
  var printableBoard = this.nestBoard(this.tiles)
  for (var i=0; i<printableBoard.length; i++){ console.log(printableBoard[i]) };
}
