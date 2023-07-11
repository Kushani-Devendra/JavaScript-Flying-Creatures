/**  @type {HTMLCanvasElement} */

const canvas4 = document.getElementById("canvas4");
const ctx4 = canvas4.getContext("2d");
CANVAS_WIDTH = canvas4.width = 300;
CANVAS_HEIGHT = canvas4.height = 600;
const numberOfEnemies4 = 8;
const enemiesArray4 = [];

let gameFrame4 = 0;

class Enemy4 {
  constructor() {
    this.image = new Image();
    this.image.src = "enemy4.png";
    this.speed = Math.random() * 4 - 1;
    this.spritWidth = 213;
    this.spriteHeight = 213;
    this.width = this.spritWidth / 2.5;
    this.height = this.spriteHeight / 2.5;
    this.x = Math.random() * (canvas4.width - this.width);
    this.y = Math.random() * (canvas4.height - this.height);
    this.newX = Math.random() * (canvas4.width - this.width);
    this.newY = Math.random() * (canvas4.height - this.height);

    this.frame = 0;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);
    this.interval = Math.floor(Math.random() * 40 + 50);
  }
  update() {
    if (gameFrame4 % this.interval === 0) {
      this.newX = Math.random() * (canvas4.width - this.width);
      this.newY = Math.random() * (canvas4.height - this.height);
    }
    let dx = this.x - this.newX;
    let dy = this.y - this.newY;
    this.x -= dx / 50;
    this.y -= dy / 30;

    if (this.x + this.width < 0) this.x = canvas4.width;

    // animate sprites
    if (gameFrame4 % this.flapSpeed === 0) {
      this.frame > 4 ? (this.frame = 0) : this.frame++;
    }
  }

  draw() {
    ctx4.drawImage(
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

for (let i = 0; i < numberOfEnemies4; i++) {
  enemiesArray4.push(new Enemy4());
}

console.log(enemiesArray4);

function animate4() {
  ctx4.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  enemiesArray4.forEach((enemy) => {
    enemy.update();
    enemy.draw();
  });
  gameFrame4++;
  requestAnimationFrame(animate4);
}
animate4();
