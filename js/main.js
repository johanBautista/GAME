document.onload = (function() {
  let canvas = document.getElementById("myGame");
  this.ctx = canvas.getContext("2d");
  canvas.width = 1000;
  canvas.height = 770;

  let game = "";
  let sound_game = "music/game.mp3";
  this.audio = new Audio();
  this.audio.src = sound_game;

  var button = document.getElementById("start-btn");
  button.addEventListener("click", function() {
    game = new Game(ctx, canvas.width, canvas.height);
    game.start();
    button.style.display = "none";
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("myGame").style.display = "inline";

    // audio.play();

    // let sound= document.getElementById("")
  });
  // var pauseB = document.getElementById("pause-btn"); /------- BOTON PAUSE
  // pauseB.addEventListener("click", function() {
  //   game.pause();
  // button.style.display = "none";
  // });
})();
