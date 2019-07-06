var game;
document.onload = (function() {
  let canvas = document.getElementById("myGame");
  this.ctx = canvas.getContext("2d");
  canvas.width = 1000;
  canvas.height = 500;

  game = new Game(ctx);
  game.start();
})();

// hacer que el cuadrado salte
// poner limites a la izquierda del screen
// tratar al suelo como ....
