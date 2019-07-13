class Game {
  constructor(ctx, canvasWidth, canvasHeight) {
    this.ctx = ctx;
    this.lucky = new Lucky(50, 320, ctx);
    this.goal = new Goal(700, 300, ctx);
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.counter = 0;
    this.enemies = [];
    this.floors = [];
    this.bonust = [];
  }
  //////////////////////////////////////////          PRUEBA2!

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
        case 88: // 1. case para pausa.
          this.pause();
          break;
        case 83: // 1. case para pausa.
          this.start();
          break;
      }
    };
  }

  ////////////////////////////////////////////    generate!

  generateEnemy() {
    if (this.counter % 960 === 0) {
      this.enemies.push(new Danger(1050, 350, ctx));
      console.log(this.enemies, "tito");
    }
  }

  generateBonus() {
    if (this.counter % 180 === 0) {
      this.bonust.push(new Bonus(1050, 300, ctx));
      console.log(this.bonust, "tita");
    }
  }

  generateFloors() {
    if (this.counter % 80 === 0) {
      this.floors.push(new FloorRand(1050, 380, ctx));
      console.log("titi");
    }
  }
  //////////////////////////////////////////  draw!

  drawBoard() {
    this.ctx.fillStyle = "#253F5C";
    this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
  }

  drawEnemies() {
    this.enemies.forEach(danger => {
      if (this.lucky.checkIfTouch(danger)) {
        console.log("game");
      } else {
        danger.draw();
        danger.moveLeft();
      }
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
  ////////////////////////////////////////////    colisions!

  checkCollition() {
    this.enemies.forEach(enemy => {
      if (this.lucky.checkIfTouch(enemy)) {
        this.gameOver();
      }
      if (
        this.lucky.x < 0 ||
        this.lucky.y < 0 ||
        this.lucky.y + this.lucky.width > 480
      ) {
        this.gameOver();
      }
    });

    // this.bonust.forEach(point => {
    //   if (this.lucky.checkIfTouch(point)) {
    //     console.log("total puntos" + this.bonust.length);
    //   }
    // });
  }
  //////////////////////////////////////////// carga!

  update() {
    this.counter++;
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.drawBoard();
    this.generateFloors(); //  -------------- tengo problemas al generar el floor random me elimina el array danger ?
    this.drawFloors();
    //this.floor.moveLeft();
    //this.floor.draw();
    this.lucky.update();
    this.lucky.draw();
    this.generateEnemy();
    this.drawEnemies();
    this.generateBonus();
    this.drawBonus();
    //this.collision();
    //this.collision2();
    // this.checkCollition();
    this.intervalGame = window.requestAnimationFrame(this.update.bind(this));
  }

  start() {
    startBtn.style.display = "none";
    this.assignControls();
    this.floors.push(new FloorRand(139, 400, this.ctx));
    this.update();
  }

  gameOver() {
    window.cancelAnimationFrame(this.intervalGame);
    this.intervalGame = undefined;
  }

  pause() {
    // 1. funcion stop.
    if (this.intervalGame) {
      window.cancelAnimationFrame(this.intervalGame);
      this.intervalGame = undefined;
    }
  }
  // score() {
  //   ctx.font = "100px Avenir";
  //   ctx.fillStyle = "white";
  //   ctx.fillText("GAME OVER", 100, 100);
  //   ctx.fillText(this.enemies.length, 226, 150);
  // }
}
/* 
      1. colision con floorRandom
      2.problema con bonus


*/
