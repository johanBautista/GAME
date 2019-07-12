class Game {
  constructor(ctx, canvasWidth, canvasHeight) {
    this.ctx = ctx;
    this.lucky = new Lucky(50, 320, ctx, this.gravity);
    this.floor = new Floor(0, 400, ctx);
    this.danger = new Danger(850, 350, ctx);
    this.bonus = new Bonus(500, 320, ctx);
    this.goal = new Goal(700, 300, ctx);
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.counter = 0;
  }

  drawBoard() {
    this.ctx.fillStyle = "#253F5C";
    this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
  }

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
      }
    };
  }

  colision() {
    // hacer colision general y por elemento se ejecute por cada clase.
    if (
      // lucky vs floor
      this.lucky.x < this.floor.x + this.floor.width &&
      this.lucky.x + this.lucky.width > this.floor.x &&
      this.lucky.y < this.floor.y &&
      this.lucky.height + this.lucky.y > this.floor.y
    ) {
      this.lucky.y = this.floor.y - this.lucky.height;
    }

    if (
      //lucky vs danger
      this.lucky.x < this.danger.x + this.danger.width &&
      this.lucky.x + this.lucky.width > this.danger.x &&
      this.lucky.y < this.danger.y + this.danger.height &&
      this.lucky.height + this.lucky.y > this.danger.y
    ) {
      this.gameOver(); // cuando toque que salga anuncio gameover y boton reset!
    }
    if (
      // lucky vs bonus
      this.lucky.x < this.bonus.x + this.bonus.width &&
      this.lucky.x + this.lucky.width > this.bonus.x &&
      this.lucky.y < this.bonus.y + this.bonus.height &&
      this.lucky.height + this.lucky.y > this.bonus.y
    ) {
      console.log("Bonus");
    }
    if (
      //lucky vs goal
      this.lucky.x < this.goal.x + this.goal.width &&
      this.lucky.x + this.lucky.width > this.goal.x &&
      this.lucky.y < this.goal.y + this.goal.height &&
      this.lucky.height + this.lucky.y > this.goal.y
    ) {
      console.log("winner");
    }
    if (
      //lucky vs canvas
      this.lucky.x < 0 ||
      this.lucky.y < 0
    ) {
      this.gameOver();
    }
  }
  update() {
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.drawBoard();
    this.floor.moveLeft();
    this.danger.moveLeft();
    this.bonus.moveLeft();
    this.floor.draw();
    this.bonus.draw();
    this.goal.draw();
    this.danger.draw();
    this.lucky.update();
    this.lucky.draw();
    this.colision();
    window.requestAnimationFrame(this.update.bind(this));
  }

  start() {
    this.assignControls();
    this.update();
  }

  gameOver() {
    console.log("game over!");
  }

  stop() {
    // 1. funcion stop.
    console.log("space-pausa el juego!");
  }

  score() {}
}
