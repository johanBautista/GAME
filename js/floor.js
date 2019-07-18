class Floor {
  constructor(x, y, ctx, width, height) {
    this.x = x;
    this.y = y;
    this.width = 7000; // cambiar floor de inicio
    this.height = 600;
    this.color = "#fff";
    this.ctx = ctx;
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  moveLeft() {
    this.x -= 3;
    console.log("pingucamnia");
  }
}
