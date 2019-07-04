class Game {
  constructor() {
    this.ctx = undefined;
    this.lucky = new Lucky(50, 310);
  }
  drawBoard() {
    this.ctx.fillStyle = "#253F5C";
    this.ctx.fillRect(0, 0, 1000, 500);
    console.log("canvas!");
  }
  //como cargar una imagen de back "#e3c9c1"
  drawBackImage() {
    this.ctx.fillStyle = "#e3c9c1";
    this.ctx.fillRect(15, 20, 965, 460);
    console.log("back!");
  }
  drawFloor() {
    this.ctx.fillStyle = "#384d57";
    this.ctx.fillRect(20, 400, 960, 80);
    console.log("floor!");
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

  update() {
    console.log("pep");

    this.lucky.move();
    this.drawLucky();
    window.requestAnimationFrame(this.update.bind(this));
  }
  start() {
    console.log("pep2");
    this.update();
  }
}

//color verde "#257d8a"
