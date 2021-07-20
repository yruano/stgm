//적 클래스
class Enemy {
    dir = new Phaser.Math.Vector2(0, 0);
    speed = 100
    constructor(scene, x, y) {
        this.gameObject = scene.add.rectangle(
            x, y,
            50, 50,
            0xffffff
        );
    }
    // 적 움직임
    move(delta) {
        const pos = new Phaser.Math.Vector2(this.gameObject.x, this.gameObject.y);
        const moveVector = this.dir.normalize().scale(this.speed * delta / 1000);
        const newPos = pos.add(moveVector);
        this.gameObject.setPosition(newPos.x, newPos.y);

        //화면나가면 적 죽음
        if (Game.mainCam.worldView.contains(this.gameObject.x, this.gameObject.y)) {
        } else {
          this.gameObject.destroy();
        }
    }
}
// 적 스폰 시간
let enemyspawn = 0;
let enemyspawntime = 2;

// 적 스폰 함수
function spwn(delta, scene) {
    enemyspawn += delta;
    if (enemyspawn / 1000 >= enemyspawntime) {
        let random = getRandomXY();
        let enemy = new Enemy(scene, random.x, random.y);
        enemyspawn = 0;
        enemyspawntime -= 0.005;
        enemy.dir = direction(new Phaser.Math.Vector2(enemy.gameObject.x, enemy.gameObject.y), new Phaser.Math.Vector2(960, 1080));
        console.log(enemy.dir);
        MainScene.enemys.push(enemy);
        if (enemyspawntime < 0.001) {
            enemyspawntime = 0.001;
        }
    }

}

function normalize(vec) {
    const result = new Phaser.Math.Vector2(0, 0);
    if (vec.x == 0 && vec.y == 0)
        return result;

    const dist = distance(vec);
    result.x = vec.x / dist;
    result.y = vec.y / dist;
    return result;
}

function distance(vec) {
    return Math.sqrt(vec.x ** 2 + vec.y ** 2);
}

function direction(cur, to) {
    return normalize(new Phaser.Math.Vector2(to.x - cur.x, to.y - cur.y));
}

function enmeydie() {
    for(var e = 0; e < MainScene.enemys; c++){
        for(var b = 0; b < MainScene.bullets; b++){
            
        }
    }
}