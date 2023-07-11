/**  @type {HTMLCanvasElement} */

const canvas2 = document.getElementById("canvas2");
const ctx2 = canvas2.getContext("2d");
CANVAS_WIDTH = canvas2.width = 300;
CANVAS_HEIGHT = canvas2.height = 600;
const numberOfEnemies2 = 15;
const enemiesArray2 = [];

let gameFrame2 = 0;

class Enemy2 {
  constructor() {
    this.image = new Image();
    this.image.src = "enemy2.png";
    this.speed = Math.random() * 4 - 1;
    this.spritWidth = 266;
    this.spriteHeight = 188;
    this.width = this.spritWidth / 2.5;
    this.height = this.spriteHeight / 2.5;
    this.x = Math.random() * (canvas2.width - this.width);
    this.y = Math.random() * (canvas2.height - this.height);
    this.frame = 0;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);
    this.angle = 0;
    this.angleSpeed = Math.random() * 0.2;
    this.curve = Math.random() * 7;
  }
  update() {
    this.x -= this.speed;
    this.y += this.curve * Math.sin(this.angle);
    this.angle += this.angleSpeed;

    if (this.x + this.width < 0) this.x = canvas2.width;

    // animate sprites
    if (gameFrame2 % this.flapSpeed === 0) {
      this.frame > 4 ? (this.frame = 0) : this.frame++;
    }
  }

  draw() {
    ctx2.drawImage(
      this.image,
      this.frame * this.spritWidth,
      0,
      this.spritWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}

for (let i = 0; i < numberOfEnemies2; i++) {
  enemiesArray2.push(new Enemy2());
}

console.log(enemiesArray2);

function animate2() {
  ctx2.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  enemiesArray2.forEach((enemy) => {
    enemy.update();
    enemy.draw();
  });
  gameFrame2++;
  requestAnimationFrame(animate2);
}
animate2();
