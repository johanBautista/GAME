class Game {
  constructor(ctx, canvasWidth, canvasHeight) {
    this.ctx = ctx;
    this.lucky = new Lucky(5, -100, ctx);
    this.goal = new Goal(800, 260, ctx);
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.counter = 0;
    this.enemies = [];
    this.floors = [];
    this.bonust = [];
    this.scoret = 0;
    this.intervalGame = undefined;
    this.statusGameOver = false;
    this.statusGameWinn = false;
    this.boardImg = "images/backg/back-game1 corte.png";
    this.imagen = new Image();
    this.imagen.src = this.boardImg;
    this.sound_punto = new Audio();
    this.sound_punto.src = "music/bonus.mp3";
    this.sound_danger = new Audio();
    this.sound_danger.src = "music/danger.mp3";
    this.sound_over = new Audio();
    this.sound_over.src = "music/gameover.mp3";
  }
  //////////////////////////////////////////          PRUEBA!

  assignControls() {
    document.onkeydown = e => {
      switch (e.keyCode) {
        case 37:
          this.lucky.moveLeft();
          break;
        case 38:
          this.lucky.moveJump();
          break;
        case 39:
          this.lucky.moveRight();
          break;
        case 40:
          this.lucky.moveDown();
          break;
        case 70:
          this.lucky.turbo();
          break;
        case 88: // 1. case para pausa.
          this.pause();
          break;
      }
    };
  }

  ////////////////////////////////////////////    generate!

  generateGame() {
    this.floors.push(new Floor(0, 330, this.ctx));
    this.floors.push(new Floor(7000, 730, this.ctx));
    this.floors.push(new FloorRand(20000, 350, this.ctx));
    this.floors.push(new Floor(19950, 330, this.ctx));
    this.floors.push(new Floor(22250, 200, this.ctx));
    this.floors.push(new Floor(22250, 150, this.ctx));
    this.floors.push(new Floor(22250, 0, this.ctx));
  }

  generateEnemy() {
    // if (this.counter < 2000 || this.counter > 3000) pasa enemigos desde 2000 a 3000

    if (this.counter < 2000) {
      if (this.counter % 240 === 0) {
        this.enemies.push(new Danger(550, 310, ctx));
      }
    }
    if (this.counter > 5000 || this.counter < 6000) {
      if (this.counter % 240 === 0) {
        this.enemies.push(new Danger(4550, 710, ctx));
      }
      console.log(this.counter);
    }
    // if (this.counter % 150 === 0) {
    //   this.enemies.push(new Danger(1650, 310, ctx));
    // }
  }

  generateBonus() {
    if (this.counter % 80 === 0) {
      if (this.counter < 2000 || this.counter > 5000) {
        this.bonust.push(new Bonus(650, 270, ctx));
      }
    }
  }

  generateFloors() {
    // if (this.counter % 100 === 0) {
    //   this.floors.push(new FloorRand(1000, 730, ctx));
    // }
    if (this.counter % 150 === 0) {
      this.floors.push(new FloorRand(13800, 730, ctx));
    }
    if (this.counter % 200 === 0) {
      this.floors.push(new FloorRand(14000, 620, ctx));
    }
  }
  //////////////////////////////////////////  draw!

  drawBoard() {
    this.ctx.fillStyle = "#253F5C";
    this.ctx.drawImage(
      this.imagen,
      0,
      -15,
      this.canvasWidth,
      this.canvasHeight
    );
  }

  drawEnemies() {
    // ojo este bueno con checkCollition
    this.enemies.forEach(danger => {
      this.lucky.checkIfTouch(danger);
      danger.draw();
    });
  }

  drawFloors() {
    this.floors.forEach(floorRandom => {
      this.lucky.checkIfFloors(floorRandom);
      floorRandom.draw();
      floorRandom.moveLeft();
    });
  }

  drawBonus() {
    this.bonust.forEach(bonus => {
      bonus.draw();
      bonus.moveLeft();
    });
  }
  ////////////////////////////////////////////

  checkCollition() {
    //mejor opcion detecta bordes-enemigo sin problemas de contacto
    this.enemies.forEach(enemy => {
      if (this.lucky.checkIfTouch(enemy)) {
        this.sound_danger.play();
        this.gameOver();
      }
      if (
        this.lucky.x < 0 ||
        this.lucky.y < -50 ||
        this.lucky.y + this.lucky.width > 750
      ) {
        this.gameOver();
      }
    });

    this.bonust.forEach(point => {
      if (this.lucky.checkIfTouch(point)) {
        this.sound_punto.play();
        this.bonust.splice(0);
        this.scoret++;
        this.score();
      }
    });

    if (this.lucky.checkIfTouch(this.goal)) {
      this.gameWinner();
    }
  }

  //////////////////////////////////////////// carga!

  start() {
    this.assignControls();
    this.generateGame();
    this.intervalGame = window.requestAnimationFrame(this.update.bind(this));
  }

  pause() {
    if (this.intervalGame) {
      this.intervalGame = window.cancelAnimationFrame(this.intervalGame);
    } else {
    }
  }

  gameOver() {
    this.statusGameOver = true;
    // this.sound_over.play(); el start se solpa con over?
    this.pause();
    let canvas = document.getElementById("myGame");
    canvas.style = "display: none";
    let gameOver = document.getElementById("game-over");
    gameOver.style = "display: block";
  }

  gameWinner() {
    this.statusGameWinn = true;
    this.pause();
    let canvas = document.getElementById("myGame");
    canvas.style = "display: none";
    let gameWinner = document.getElementById("game-winner");
    gameWinner.style = "display: block";
  }

  score() {
    // aparece en pantalla 1 cuadro 1 punto
    this.ctx.fillStyle = "greey";
    this.ctx.fillRect(18, 18, 193, 53);
    this.ctx.fillStyle = "#253F5C";
    this.ctx.fillRect(15, 15, 190, 50);
    ctx.font = "30px Avenir";
    ctx.fillStyle = "white";
    ctx.fillText("SCORE", 30, 50);
    ctx.fillText(this.scoret, 150, 50);
  }

  update() {
    audio.play();
    this.counter++;
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.drawBoard();
    this.goal.draw();
    this.generateFloors();
    this.drawFloors();
    this.lucky.update();
    this.lucky.draw();
    this.generateEnemy();
    this.drawEnemies();
    this.generateBonus();
    this.drawBonus();
    this.checkCollition(); //ojo este bueno
    this.score();

    if (this.intervalGame) {
      this.intervalGame = window.requestAnimationFrame(this.update.bind(this));
    }
  }
}
