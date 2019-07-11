var game;
document.onload = (function() {
  let canvas = document.getElementById("myGame");
  this.ctx = canvas.getContext("2d");
  canvas.width = 1000;
  canvas.height = 500;

  game = new Game(ctx, canvas.width, canvas.height);
  game.start();
})();
