class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.lucky = new Lucky(50, 310);
    this.floor = new Floor(0, 400);
  }
  drawBoard() {
    this.ctx.fillStyle = "#253F5C";
    this.ctx.fillRect(0, 0, 1000, 500);
    //console.log("ejecuta board!");
  }
  drawFloor() {
    this.ctx.fillStyle = this.floor.color;
    this.ctx.fillRect(
      this.floor.x,
      this.floor.y,
      this.floor.width,
      this.floor.height
    );
    //console.log("ejecuta floor!");
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
        // aqui se puede poner otro case para pausa o reset.
      }
      //console.log("ejecuta arrow");
    };
  }

  update() {
    // console.log("pep");
    this.drawBoard();
    // this.lucky.move();
    this.drawFloor();
    this.drawLucky();
    window.requestAnimationFrame(this.update.bind(this));
  }
  start() {
    console.log("ejecuta start");
    this.assignControls();
    this.update();
  }
}

//color verde "#257d8a"
// color #384d57
