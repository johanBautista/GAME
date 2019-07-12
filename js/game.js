class Game {
  constructor(ctx, canvasWidth, canvasHeight) {
    this.ctx = ctx;
    this.lucky = new Lucky(50, 320, ctx, this.gravity);
    this.floor = new Floor(0, 400, ctx);
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.counter = 0;
    this.enemies = [];
    //this.floorR = [];
    //this.bonust = [];
  }

  drawBoard() {
    this.ctx.fillStyle = "#253F5C";
    this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
  }

  drawEnemies() {
    this.enemies.forEach(function(danger) {
      // collision2();
      danger.draw();
      danger.moveLeft();
    });
  }
  // drawBonust() {
  //   this.bonust.forEach(function(bonus) {
  //     //collision2(bonus);
  //     bonus.draw();
  //     bonus.moveLeft();
  //   });
  // }

  // drawFloors() {
  //   this.floorR.forEach(function(floor) {
  //     //this.collision2(floor);
  //     floor.draw();
  //     floor.moveLeft();
  //   });
  // }

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
        case 88:
          this.pause();
          break;
        case 83:
          this.start();
          break;
      }
    };
  }

  // colision() {
  //   // hacer colision general y por elemento se ejecute por cada clase.
  //   if (
  //     // lucky vs floor
  //     this.lucky.x < this.floor.x + this.floor.width &&
  //     this.lucky.x + this.lucky.width > this.floor.x &&
  //     this.lucky.y < this.floor.y &&
  //     this.lucky.height + this.lucky.y > this.floor.y
  //   ) {
  //     this.lucky.y = this.floor.y - this.lucky.height;
  //   }}
  //  colision2() {
  //   if (
  //     //lucky vs danger
  //     this.lucky.x < this.danger.x + this.danger.width &&
  //     this.lucky.x + this.lucky.width > this.danger.x &&
  //     this.lucky.y < this.danger.y + this.danger.height &&
  //     this.lucky.height + this.lucky.y > this.danger.y
  //   ) {
  //     this.gameOver(); // cuando toque que salga anuncio gameover y boton reset!
  //   }
  //   if (
  //     // lucky vs bonus
  //     this.lucky.x < this.bonus.x + this.bonus.width &&
  //     this.lucky.x + this.lucky.width > this.bonus.x &&
  //     this.lucky.y < this.bonus.y + this.bonus.height &&
  //     this.lucky.height + this.lucky.y > this.bonus.y
  //   ) {
  //     console.log("Bonus");
  //   }
  //   if (
  //     //lucky vs goal
  //     this.lucky.x < this.goal.x + this.goal.width &&
  //     this.lucky.x + this.lucky.width > this.goal.x &&
  //     this.lucky.y < this.goal.y + this.goal.height &&
  //     this.lucky.height + this.lucky.y > this.goal.y
  //   ) {
  //     console.log("winner");
  //   }
  //   if (
  //     //lucky vs canvas
  //     this.lucky.x < 0 ||
  //     this.lucky.y < 0
  //   ) {
  //     this.gameOver();
  //   }
  // }
  update() {
    this.counter++;
    if (this.counter % 100 === 0) {
      this.enemies.push(new Danger(1050, 350, ctx));
      console.log(this.enemies, "tito");
    }
    // if (this.counter % 250 === 0) {
    //   this.floorR.push(new Floor(1050, 400, ctx));
    //   console.log(this.floorR, "tita");
    // }
    // if (this.counter % 350 === 0) {
    //   this.bonust.push(new Bonus(1050, 350, ctx));
    //   console.log(this.bonust, "tete");
    // }
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.drawBoard();

    this.drawEnemies();
    //this.drawBonust();
    //this.drawFloors();
    this.floor.moveLeft();
    this.floor.draw();
    this.lucky.update();
    this.lucky.draw();
    // this.colision();
    this.intervalGame = window.requestAnimationFrame(this.update.bind(this));
  }

  start() {
    this.assignControls();
    this.update();
  }

  gameOver() {
    console.log("game over!");
  }

  pause() {
    // 1. funcion stop.
    if (this.intervalGame) {
      window.cancelAnimationFrame(this.intervalGame);
      this.intervalGame = undefined;
    }
    console.log("x-pausa el juego!");
  }

  score() {}
}
