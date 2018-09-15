let x = 0
let brt = 0
input.onPinPressed(TouchPin.P0, () => {
    brt = (brt + 32) % 256
    led.setBrightness(brt)
})
input.onButtonPressed(Button.A, () => {
    isInProgress != isInProgress
if (!(isInProgress)) {
        x += 1
    }
    DrawRounds()
})
input.onButtonPressed(Button.B, () => {
    basic.showNumber(x)
    DrawRounds()
})
function DrawRounds()  {
    basic.clearScreen()
    for (let j = 0; j <= x; j++) {
        led.plot((j - 1) % 5, (j - 1) / 5)
    }
}
let isInProgress = false
brt = 255
basic.forever(() => {
    if (isInProgress) {
        led.toggle(x % 5, x / 5)
        basic.pause(500)
    }
})

