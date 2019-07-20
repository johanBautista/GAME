class Floor {
  constructor(x, y, ctx, width, height) {
    this.x = x;
    this.y = y;
    this.width = 7000; // cambiar floor de inicio
    this.height = 700;
    this.color = "#fff";
    this.ctx = ctx;
    this.floorImg = "images/backg/bloques-fijo2.png";
    this.imagen = new Image();
    this.imagen.src = this.floorImg;
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.drawImage(this.imagen, this.x, this.y, this.width, this.height);
  }

  moveLeft() {
    this.x -= 3;
    // console.log("pingucamnia");
  }
}
