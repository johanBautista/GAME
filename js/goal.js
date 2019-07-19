class Goal {
  constructor(x, y, ctx) {
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 95;
    this.color = "#7d1660";
    this.ctx = ctx;
  }

  draw() {
    this.ctx.fillStyle = this.color; //"#7d1660"
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
