function spawnBullet(self, xDir, yDir) {
  const bullet = new Bullet(Game.scene);
  bullet.gameObject.setPosition(
    self.gameObject.x,
    self.gameObject.y
  );
  bullet.dir = new Phaser.Math.Vector2(xDir, yDir);
  MainScene.bullets.push(bullet);
}

//플레이어 움직임
class Player {
  speed = 700;
  dir = new Phaser.Math.Vector2(0, 0);
  bullettime = 0;
  atkspeed = 0.2;
  originalspeed = 700
  constructor(keys) {
    this.gameObject = Game.scene.add.rectangle(
      Game.center.x,
      Game.center.y,
      20, 20,
      0xffffff
    );
  }

  input(keys, delta) {
    this.bullettime += delta;
    if (this.bullettime / 1000 >= this.atkspeed) {
      if (keys.s.isDown) {
        spawnBullet(this, 0, 1);
        this.bullettime = 0;
      }
      if (keys.w.isDown) {
        spawnBullet(this, 0, -1);
        this.bullettime = 0;
      }
      if (keys.a.isDown) {
        spawnBullet(this, -1, 0);
        this.bullettime = 0;
      }
      if (keys.d.isDown) {
        spawnBullet(this, 1, 0);
        this.bullettime = 0;
      }

    }

    if (keys.up.isDown) {
      this.dir.y = -1;
    }
    if (keys.down.isDown) {
      this.dir.y = 1;
    }
    if (keys.left.isDown) {
      this.dir.x = -1;
    }
    if (keys.right.isDown) {
      this.dir.x = 1;
    }
    if (keys.shift.isDown) {
      this.speed = 300;
    } else {
      this.speed = this.originalspeed;
    }

    if ((keys.up.isDown && keys.down.isDown)
      || (!keys.up.isDown && !keys.down.isDown)) {
      this.dir.y = 0;
    }
    if ((keys.left.isDown && keys.right.isDown)
      || (!keys.left.isDown && !keys.right.isDown)) {
      this.dir.x = 0;
    }
  }

  move(delta) {
    const pos = new Phaser.Math.Vector2(this.gameObject.x, this.gameObject.y);
    const moveVector = this.dir.normalize().scale(this.speed * delta / 1000);
    const nextPos = pos.add(moveVector);
    this.gameObject.setPosition(nextPos.x, nextPos.y);
  }
}
