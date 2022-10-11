input.onPinPressed(TouchPin.P0, function () {
    game.pause()
})
input.onButtonPressed(Button.A, function () {
    sprite.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    sprite.change(LedSpriteProperty.X, 1)
})
input.onPinPressed(TouchPin.P1, function () {
    game.resume()
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 100; index++) {
        let counter = 0
        enemy_sprite = game.createSprite(randint(0, 4), 0)
        for (let index = 0; index < 4; index++) {
            basic.pause(100)
            enemy_sprite.change(LedSpriteProperty.Y, 1)
            basic.pause(100)
        }
        if (sprite.isTouching(enemy_sprite)) {
            enemy_sprite.delete()
        } else if (enemy_sprite.isTouchingEdge()) {
            sprite.delete()
        }
        while (counter == 10) {
            basic.showLeds(`
                # . . . #
                # . # . #
                # . # . #
                # . # . #
                # # # # #
                `)
        }
    }
})
let enemy_sprite: game.LedSprite = null
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 4)
let score = 0
basic.forever(function () {
	
})
basic.forever(function () {
	
})
