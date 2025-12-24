basic.forever(function () {
    if (true) {
        led.unplot(2, 1)
        basic.showIcon(IconNames.Yes)
        radio.sendValue("name", 6 + 15)
    }
})
