let x = 0
let isInProgress = 0
let isDisplay = false
let InProgress = false
let brt = 0
input.onPinPressed(TouchPin.P1, () => {
    brt = (brt + 32) % 256
    led.setBrightness(brt)
})
input.onButtonPressed(Button.A, () => {
    InProgress = !(InProgress)
    if (InProgress) {
        x += 1
    }
    DrawRounds()
    isDisplay = true
})
input.onButtonPressed(Button.B, () => {
    isDisplay = false
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
isDisplay = true
brt = 255
basic.forever(() => {
    if (input.pinIsPressed(TouchPin.P2)) {
        isDisplay = false
        for (let i = 0; i < 25; i++) {
            led.plotBrightness(Math.random(5), Math.random(5), Math.random(2) * Math.random(256))
        }
    } else {
        if (InProgress && isDisplay) {
            led.toggle((x-1) % 5, (x-1) / 5)
            basic.pause(500)
        }
    }
})

