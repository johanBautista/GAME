document.onload = (function() {
  let canvas = document.getElementById("myGame");
  this.ctx = canvas.getContext("2d");
  canvas.width = 3000;
  canvas.height = 1740;

  let game = "";

  var button = document.getElementById("start-btn");
  button.addEventListener("click", function() {
    game = new Game(ctx, canvas.width, canvas.height);
    game.start();
    button.style.display = "none";
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("myGame").style.display = "inline";
  });
  var pauseB = document.getElementById("pause-btn");
  pauseB.addEventListener("click", function() {
    game.pause();
    // button.style.display = "none";
  });
})();
