class Lucky {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 80;
    this.height = 80;
    this.color = "#AAAAAA";
  }

  moveRight() {
    this.x += 20;
  }
  moveLeft() {
    this.x -= 20;
  }
  moveJump() {
    this.y -= 20;
  }
  moveDown() {
    this.y += 20;
  }
}
