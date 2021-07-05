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
}