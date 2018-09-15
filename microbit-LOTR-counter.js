let x = 0
let isInProgress = false
let isDisplay = true
let brt = 0
input.onPinPressed(TouchPin.P1, () => {
    brt = (brt + 32) % 256
    led.setBrightness(brt)
})
input.onButtonPressed(Button.A, () => {
    isInProgress = !(isInProgress)
    if (!(isInProgress)) {
        x += 1
    }
    DrawRounds()
    isDisplay = true
})
input.onButtonPressed(Button.B, () => {
    basic.showNumber(x)
    DrawRounds()
    isDisplay = true
})
function DrawRounds()  {
    basic.clearScreen()
    for (let j = 0; j <= x; j++) {
        led.plot((j - 1) % 5, (j - 1) / 5)
    }
}
brt = 255
basic.forever(() => {
    if (input.pinIsPressed(TouchPin.P2)) {
        for (let i = 0; i < 25; i++) {
            led.plotBrightness(Math.random(5), Math.random(5), Math.random(2) * Math.random(256))
        }
    } else {
        if (isInProgress && isDisplay) {
            led.toggle(x % 5, x / 5)
            basic.pause(500)
        }
    }
})

