class Game {
  static scene;
  static center;
  static spawn;
  static mainCam;
  static topCam;
  static leftCam;
  static rightCam;
}

//키 설정
class MainScene extends Phaser.Scene {
  static bullets = [];

  init(data) {
    Game.scene = this;
    Game.center = {
      x: this.cameras.main.centerX,
      y: this.cameras.main.centerY,
    }
    Game.mainCam = this.cameras.main;
    Game.spawn = {
      topx : this.cameras.top.spawnX,
      topy : this.cameras.top.spawnY,
      leftx : this.cameras.left.spawnX,
      lefty : this.cameras.left.spawnY,
      rightx : this.cameras.right.rightX,
      righty : this.cameras.right.rightY,
    }
    Game.topCam = this.cameras.top;
    Game.leftCam = this.cameras.left;
    Game.rightCam = this.cameras.right;

    this.keys = this.input.keyboard.addKeys({
      up: 'up',
      down: 'down',
      left: 'left',
      right: 'right',
      shift: 'shift', 
      s: 's',
      w: 'w',
      a: 'a',
      d: 'd'
    });

    this.player = new Player(this.keys);

    new Enemy(this);
  }

  preload() {

  }

  create(data) {

  }

  update(time, delta) {
    this.player.input(this.keys, delta);
    this.player.move(delta);

    for (const bullet of MainScene.bullets) {
      bullet.move(delta);
    }
  }
}

//게임 화면
const game = new Phaser.Game({
  type: Phaser.WebGL,
  width: 1920,
  height: 1080,
  backgroundColor: '#000000',
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: new MainScene()
});

function a() {
  console.log(wow);
}

let wow;

a();

wow = 'wow';

a();

