/**  @type {HTMLCanvasElement} */

const canvas1 = document.getElementById("canvas1");
const ctx1 = canvas1.getContext("2d");
CANVAS_WIDTH = canvas1.width = 300;
CANVAS_HEIGHT = canvas1.height = 600;
const numberOfEnemies1 = 15;
const enemiesArray1 = [];

let gameFrame1 = 0;

class Enemy1 {
  constructor() {
    this.image = new Image();
    this.image.src = "enemy1.png";
    // this.speed = Math.random() * 4 - 2;
    this.spritWidth = 293;
    this.spriteHeight = 155;
    this.width = this.spritWidth / 2.5;
    this.height = this.spriteHeight / 2.5;
    this.x = Math.random() * (canvas1.width - this.width);
    this.y = Math.random() * (canvas1.height - this.height);
    this.frame = 0;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);
  }
  update() {
    this.x += Math.random() * 15 - 7.5;
    this.y += Math.random() * 10 - 5;

    // animate sprites
    if (gameFrame1 % this.flapSpeed === 0) {
      this.frame > 4 ? (this.frame = 0) : this.frame++;
    }
  }

  draw() {
    ctx1.drawImage(
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

for (let i = 0; i < numberOfEnemies1; i++) {
  enemiesArray1.push(new Enemy1());
}

console.log(enemiesArray1);

function animate1() {
  ctx1.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  enemiesArray1.forEach((enemy) => {
    enemy.update();
    enemy.draw();
  });
  gameFrame1++;
  requestAnimationFrame(animate1);
}
animate1();
