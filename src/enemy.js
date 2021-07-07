//적 클래스
class Enemy {
    dir = new Phaser.Math.Vector2(0, 0);
    constructor(scene, x, y) {
        this.gameObject = scene.add.rectangle(
        x, y,
        50, 50,
        0xffffff
        );
    }
    // 적 움직임
    /*move(delta) {
        const pos = new Phaser.Math.Vector2(this.gameObject.x, this.gameObject.y);
        const moveVector = this.dir.normalize().scale(this.speed * delta / 1000);
        const newPos = pos.add(moveVector);
        this.gameObject.setPosition(newPos.x, newPos.y);
    }*/
}
// 적 스폰 시간
let enemyspawn = 0;
let enemyspawntime = 2;

// 적 스폰 함수
function spwn(delta, scene) {
    enemyspawn += delta;
    if (enemyspawn / 1000 >= enemyspawntime){
        let random = getRandomXY();
        new Enemy(scene, random.x, random.y);
        enemyspawn = 0;
        enemyspawntime -= 0.005;
        if(enemyspawntime < 0.001){
            enemyspawntime = 0.001;
        }
    }

}
