var game;
document.onload = (function(){
  let canvas = document.getElementById("myGame");
    this.ctx = canvas.getContext("2d");
    canvas.width = 1000;
    canvas.height = 500;

    game = new Game();
}
  

// esto va dentro del game
game.drawBoard();
game.drawBackImage();
game.drawFloor();
game.drawLucky();

// game.assingControlsToKeys();
// segun el orden de llamada en main, son ejecutadas (no en game)
