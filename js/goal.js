class Goal {
  constructor(x, y, ctx) {
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 25;
    this.color = "#7d1660";
    this.ctx = ctx;
    this.goalImg = "images/backg/iglu.png";
    this.imagen = new Image();
    this.imagen.src = this.goalImg;
  }

  draw() {
    this.ctx.fillStyle = this.color; //"#7d1660"
    this.ctx.drawImage(this.imagen, this.x, this.y, 150, 90);
  }
}
