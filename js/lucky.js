class Lucky {
  constructor(x, y, ctx) {
    this.x = x;
    this.y = y;
    this.width = 80;
    this.height = 80;
    this.vx = 0;
    this.vy = 0;
    this.saltar = true;
    this.color = "#AAAAAA";
    this.ctx = ctx;
    this.gravity = 3;
    // this.player = "penguin_die01@2x.png";  -------------  protocolo pa poner imagenes
    // this.imagen = new Image();           -------------  para crear animacion como se sube el conjunto de img
    // this.imagen.src = this.player;
  }
  checkIfTouch(enemy) {
    return (
      this.x < enemy.x + enemy.width &&
      this.x + this.width > enemy.x &&
      this.y < enemy.y + enemy.height &&
      this.y + this.height > enemy.y
    );
  }
  checkIfFloors(floor) {
    if (
      //lucky vs floorRandom
      this.x < floor.x + floor.width &&
      this.x + this.width > floor.x &&
      this.y < floor.y &&
      this.height + this.y > floor.y
    ) {
      this.y = floor.y - this.height;
    }
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  move() {
    // console.log("tito");
  }
  moveRight() {
    this.x += 20;
    // console.log("se meuve a derecha");
  }
  moveLeft() {
    this.x -= 20;
  }
  moveJump() {
    this.y -= 100;
    this.x += 90;
  }
  moveDown() {
    this.y += 20;
  }
  update() {
    // console.log(this.gravity);
    this.y += this.gravity;
  }
}
