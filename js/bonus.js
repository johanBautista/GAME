class Bonus {
  constructor(x, y, ctx, bonust) {
    this.x = x;
    this.y = y;
    this.width = 40;
    this.height = 40;
    this.color = "#f11e0f";
    this.ctx = ctx;
    this.bonusImg = "images/bonus/sushi.png"; //-------------  protocolo pa poner imagenes
    this.imagen = new Image(); //        -------------  para crear animacion como se sube el conjunto de img
    this.imagen.src = this.bonusImg;
  }
  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.drawImage(this.imagen, this.x, this.y, 50, 40);
  }
  moveLeft() {
    this.x -= 3;
  }
}
