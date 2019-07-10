class Game {
  constructor(ctx, canvasWidth, canvasHeight) {
    this.ctx = ctx;
    this.lucky = new Lucky(50, 310, ctx, this.gravity);
    this.floor = new Floor(0, 400, ctx);
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
  }

  drawBoard() {
    this.ctx.fillStyle = "#253F5C";
    this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
  }

  drawDanger() {
    this.ctx.fillStyle = this.floor.color;
    this.ctx.fillRect(
      this.floor.x,
      this.floor.y,
      this.floor.width,
      this.floor.height
    );
    //console.log("ejecuta floor!");
  }

  drawLucky() {
    this.ctx.fillStyle = this.lucky.color;
    this.ctx.fillRect(
      this.lucky.x,
      this.lucky.y,
      this.lucky.width,
      this.lucky.height
    );
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
    this.floor.draw();
    this.lucky.update();
    this.lucky.draw();
    window.requestAnimationFrame(this.update.bind(this));
  }

  start() {
    this.assignControls();
    this.update();
  }
}
