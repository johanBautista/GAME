class Bonus {
  constructor(x, y, ctx) {
    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = 20;
    this.color = "#f11e0f";
    this.ctx = ctx;
    console.log("1");
  }
  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  moveLeft() {
    this.x -= 1;
  }
  tete() {
    console.log("2");
  }
}
