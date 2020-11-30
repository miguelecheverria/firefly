radio.onReceivedNumber(function (receivedNumber) {
    if (clock < NOON) {
        clock += 1
    }
})
let NOON = 0
let clock = 0
radio.setGroup(1)
clock = 1
NOON = 8
basic.forever(function () {
    if (clock >= NOON) {
        radio.sendNumber(0)
        game.addScore(1)
        basic.pause(2000)
        clock = 0
    } else {
        basic.pause(100)
        clock += 1
    }
})
