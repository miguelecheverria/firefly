radio.onReceivedNumber(function (receivedNumber) {
    clock += 1
})
let clock = 0
radio.setGroup(1)
basic.forever(function () {
    if (clock >= 2) {
        radio.sendNumber(0)
        game.addScore(1)
        basic.pause(200)
        clock = 0
    } else {
        basic.pause(100)
        clock += 1
    }
})
