describe("Board", function(){
  var board;
  beforeEach(function(){
    board = new Board();
  });

  it("returns a board object", function() {
    expect(board).toBeDefined();
  });

  describe("that has", function(){
    it("a collection of 16 tiles", function(){
      expect(board.tiles.length).toEqual(16);
    });
    // it("with values equal to 0", function(){
    //   expect(board.tiles[Math.floor((Math.random() * 16) + 1)]).toEqual(0);
    // })
  });

  describe("Place Random Tile", function(){
    it("adds 2 to a random empty location", function(){
      var beforeRandomTotal = board.tiles.reduce(function(prev, curr) {
        return prev + curr;
      });
      board.placeRandomTile();
      var afterRandomTotal = board.tiles.reduce(function(prev, curr) {
        return prev + curr;
      });
      expect(afterRandomTotal - beforeRandomTotal).toEqual(2)
    });
  })
});
