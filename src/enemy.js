class Enemy {
    dir = new Phaser.Math.Vector2(0, 0);
    constructor(scene) {
        this.gameObject = scene.add.rectangle(
        Game.center.x,
        Game.center.y,
        50, 50,
        0xffffff
        );
    }
    move(delta) {
        const pos = new Phaser.Math.Vector2(this.gameObject.x, this.gameObject.y);
        const moveVector = this.dir.normalize().scale(this.speed * delta / 1000);
        const nextPos = pos.add(moveVector);
        this.gameObject.setPosition(nextPos.x, nextPos.y);
    }    
}