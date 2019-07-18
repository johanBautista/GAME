class Danger {
  constructor(x, y, ctx, enemies) {
    this.x = x;
    this.y = y;
    this.width = 30;
    this.height = 20;
    this.color = "#fc9423";
    this.ctx = ctx;
    this.enemyImg = "images/enemy1/slug1.png"; //----------
    this.imagen = new Image(); //        -------------
    this.imagen.src = this.enemyImg;
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.drawImage(this.imagen, this.x, this.y, 70, 40);
  }
  moveLeft() {
    this.x -= 2.5;
  }
}
