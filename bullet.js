class Bullet {
  speed = 10;
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

    // 화면 안에 있는지 확인하는 코드
    if (Game.mainCam.worldView.contains(this.gameObject.x, this.gameObject.y)) {
      console.log("i can see");
    } else {
      console.log("i can not see");
    }
  }
}