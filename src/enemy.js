class Enemy {
    dir = new Phaser.Math.Vector2(0, 0);
    constructor(scene) {
        this.gameObject = scene.add.rectangle(
        Game.spawn.x,
        Game.spawn.y,
        50, 50,
        0xffffff
        );
    }   
}
