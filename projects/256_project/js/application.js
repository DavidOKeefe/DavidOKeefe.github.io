$(document).ready(function() {
  $(".container").on("click", "#new_game_button", function() {
    var game = new Game();
    game.start();
    var tiles = game.board.tiles;
    var element = $(".grid-cell")
    for(var i=0; i < tiles.length; i++){
      $(element[i]).html(tiles[i]);
    };
    $(".container").on('keyup', function(e){
      console.log("you pressed a key!")
      if (e.keyCode == 37) {
        game.move('left');
      } else if (e.keyCode == 38) {
        game.move('up');
      } else if (e.keyCode == 39) {
        game.move('right');
      } else if (e.keyCode == 40) {
        game.move('down');
      };
      var tiles = game.board.tiles;
      var element = $(".grid-cell")
      for(var i=0; i < tiles.length; i++){
        $(element[i]).html(tiles[i]);
      };
    });
  });



});
