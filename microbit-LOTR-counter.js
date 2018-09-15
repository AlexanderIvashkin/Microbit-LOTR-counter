let x = 0
let brt = 0
input.onPinPressed(TouchPin.P0, () => {
    brt = (brt + 32) % 256
    led.setBrightness(brt)
})
input.onPinPressed(TouchPin.P2, () => {
    for (let i = 0; i < 25; i++) {
        led.plotBrightness(Math.random(4), Math.random(4), Math.random(255))
    }
})
input.onButtonPressed(Button.A, () => {
    x += 1
    DrawRounds()
})
input.onButtonPressed(Button.B, () => {
    basic.showNumber(x)
    DrawRounds()
})
function DrawRounds() {
    basic.clearScreen()
    for (let j = 0; j <= x; j++) {
        led.plot((j - 1) % 5, (j - 1) / 5)
    }
}
brt = 255
basic.forever(() => {
    if (input.pinIsPressed(TouchPin.P2)) {
        for (let i = 0; i < 25; i++) {
            led.plotBrightness(Math.random(5), Math.random(5), Math.random(2)*Math.random(256))
        }
        basic.pause(100)
    }
})
