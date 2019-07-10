class Danger {
  constructor(x, y, ctx) {
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 50;
    this.color = "#fc9423";
    this.ctx = ctx;
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  moveLeft() {
    this.x -= 2.5;
  }
}
