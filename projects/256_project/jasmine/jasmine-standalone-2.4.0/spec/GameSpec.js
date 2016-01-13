describe("Game", function(){
  var game;
  beforeEach(function(){
    game = new Game();
  });

  it("returns a game object", function() {
    expect(game).toBeDefined();
  });

  describe("that has", function() {
    it("a score when created", function(){
      expect(game.score).toEqual(0);
    });
    it("a board when created", function(){
      expect(game.board).toBeNull();
    });
  });
  describe("Game start", function(){
    it("creates a new board", function(){
      game.start();
      expect(game.board).toEqual(jasmine.any(Board))
    });

    it("places two random tiles", function(){
      game.start();
      var boardTotal = game.board.tiles.reduce(function(prev, curr) {
        return prev + curr;
      });
      expect(boardTotal).toEqual(4);
    });
  });
});
