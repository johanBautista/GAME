class Lucky {
  constructor(x, y, ctx) {
    this.x = x;
    this.y = y;
    this.width = 70;
    this.height = 60;
    this.vx = 0;
    this.vy = 0;
    this.saltar = true;
    this.color = "#AAAAAA";
    this.ctx = ctx;
    this.gravity = 9;
    this.luckyImg = "images/pingu/walk/pingu_walk2.png"; //--------
    this.imagen = new Image(); //        -------------
    this.imagen.src = this.luckyImg;
  }
  checkIfTouch(enemy) {
    return (
      // si es if solo me detecta bordes
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
    this.ctx.drawImage(this.imagen, this.x, this.y, 70, 60);
  }
  turbo() {
    this.x += 50;
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
    this.y -= 200;
    this.x += 100;
    // this.x -= 50;
  }
  moveDown() {
    this.y += 20;
  }
  update() {
    // console.log(this.gravity);
    this.y += this.gravity;
  }
}
