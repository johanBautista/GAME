class Game {
  constructor(ctx, canvasWidth, canvasHeight) {
    this.ctx = ctx;
    this.lucky = new Lucky(50, 310, ctx, this.gravity);
    this.floor = new Floor(0, 400, ctx);
    this.danger = new Danger(850, 350, ctx);
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
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

  update() {
    //this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.drawBoard();
    this.floor.moveLeft();
    this.danger.moveLeft();
    this.floor.draw();
    this.danger.draw();
    this.lucky.update();
    this.lucky.draw();
    window.requestAnimationFrame(this.update.bind(this));
  }

  start() {
    this.assignControls();
    this.update();
  }
}
