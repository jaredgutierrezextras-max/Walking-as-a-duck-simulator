info.onScore(1000000000, function () {
    music.stopAllSounds()
    game.gameOver(true)
    music.play(music.stringPlayable("E B C5 A B G A F ", 200), music.PlaybackMode.UntilDone)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.gameOver(true)
    music.play(music.stringPlayable("E B C5 A B G A F ", 200), music.PlaybackMode.UntilDone)
})
info.onScore(1000, function () {
    music.setVolume(255)
    music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.UntilDone)
})
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
})
info.onCountdownEnd(function () {
    mySprite = sprites.create(assets.image`Duck`, SpriteKind.Player)
    controller.player1.moveSprite(mySprite)
    controller.player2.moveSprite(mySprite)
    controller.player3.moveSprite(mySprite)
    controller.player4.moveSprite(mySprite)
    animation.runImageAnimation(
    mySprite,
    assets.animation`Duck Animaton`,
    100,
    true
    )
    for (let index = 0; index < 4; index++) {
        game.showLongText("Use Arrow Keys to Play! Press B To end Game!", DialogLayout.Bottom)
    }
})
info.onScore(10000, function () {
    music.setVolume(255)
    music.play(music.melodyPlayable(music.siren), music.PlaybackMode.UntilDone)
})
info.onScore(6767, function () {
    mySprite.setImage(assets.image`67 CHIken stars`)
    scene.setBackgroundImage(assets.image`67MANGO`)
    music.setVolume(255)
    music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.UntilDone)
})
info.onScore(2500, function () {
    sprites.create(assets.image`2500 SCORE`, SpriteKind.Projectile).follow(mySprite)
})
let mySprite: Sprite = null
info.startCountdown(10)
scene.setBackgroundImage(assets.image`The Groundead Castle`)
for (let index = 0; index < 13; index++) {
    music.play(music.createSong(assets.song`Lemon Intro 120`), music.PlaybackMode.UntilDone)
}
scene.setBackgroundImage(assets.image`The Unknown`)
sprites.create(assets.image`The Duck`, SpriteKind.Enemy).follow(mySprite)
for (let index = 0; index < 1e+282; index++) {
    music.play(music.stringPlayable("E D G F B A C5 B ", 120), music.PlaybackMode.UntilDone)
}
