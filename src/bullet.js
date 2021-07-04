class Bullet {
  speed = 5;
  dir = new Phaser.Math.Vector2(0, 0);

  constructor(scene) {
    this.gameObject = scene.add.rectangle(
      Game.center.x,
      Game.center.y,
      10, 10,
      0x000000
    );
  }


  move(delta) {
    const pos = new Phaser.Math.Vector2(this.gameObject.x, this.gameObject.y);
    const moveVector = this.dir.normalize().scale(this.speed);
    const newPos = pos.add(moveVector);
    this.gameObject.setPosition(newPos.x, newPos.y);

    // 화면나가면 총알 죽음
    if (Game.mainCam.worldView.contains(this.gameObject.x, this.gameObject.y)) {
    } else {
      this.gameObject.destroy();
    }
  }
}