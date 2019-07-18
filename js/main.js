document.onload = (function() {
  let canvas = document.getElementById("myGame");
  this.ctx = canvas.getContext("2d");
  canvas.width = 3000;
  canvas.height = 1750;

  let game = "";

  var button = document.getElementById("start-btn");
  button.addEventListener("click", function() {
    game = new Game(ctx, canvas.width, canvas.height);
    game.start();
    button.style.display = "none";
  });
  var pauseB = document.getElementById("pause-btn");
  pauseB.addEventListener("click", function() {
    game.pause();
    // button.style.display = "none";
  });
})();
/* 
-alinear el floor
-floor diferentes niveles
-ajustar la pantalla

= pantalla start
=patalla game over
= screens
= sprites

; game over tira a pantalla y pausa animacion, luego presenta reset

  // 1.colision estrella
  //2.posicion enemigos
  //3.salto pingu
  //4.enemigos2
  //5.animacionsprites
*/
