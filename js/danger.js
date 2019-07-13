class Danger {
  constructor(x, y, ctx, enemies) {
    this.x = x;
    this.y = y;
    this.width = 70;
    this.height = 40;
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
