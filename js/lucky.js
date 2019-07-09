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
  }
  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  move() {
    console.log("tito");
  }
  moveRight() {
    this.x += 20;
    console.log("se meuve a derecha");
  }
  moveLeft() {
    this.x -= 20;
  }
  moveJump() {
    this.y -= 100;
    this.x += 80;
  }
  moveDown() {
    this.y += 20;
  }
  update() {
    console.log(this.gravity);
    this.y += this.gravity;
  }
}
