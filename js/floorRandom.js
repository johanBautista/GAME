class FloorRand {
  constructor(x, y, ctx) {
    this.x = x;
    this.y = y;
    this.width = 450; // cambiar floor de inicio
    this.height = 95;
    this.color = "#257d8a";
    this.ctx = ctx;
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  moveLeft() {
    this.x -= 1;
  }
}
