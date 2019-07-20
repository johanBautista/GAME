class FloorRand {
  constructor(x, y, ctx, width, height) {
    this.x = x;
    this.y = y;
    this.width = 200; // cambiar floor de inicio
    this.height = 25;
    this.color = "white";
    this.ctx = ctx;
    this.floorRandomImg = "images/backg/bloque-random.png";
    this.imagen = new Image();
    this.imagen.src = this.floorRandomImg;
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.drawImage(this.imagen, this.x, this.y, this.width, this.height); //drawImage (this.imagen,this.x ...660, 450 px del sprite)
  }

  moveLeft() {
    this.x -= 3;
  }
}
