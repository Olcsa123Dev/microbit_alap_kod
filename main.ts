// A button
input.onButtonPressed(Button.A, function () {
    if (numberA < 9) {
        numberA += 1
    }
    basic.clearScreen()
    basic.showNumber(numberA)
})
// AB button
input.onButtonPressed(Button.AB, function () {
    sum = numberA + numberB
    basic.clearScreen()
    basic.showNumber(sum)
    numberA = 0
    numberB = 0
    basic.pause(2990)
    basic.clearScreen()
    basic.showLeds(`
        . . # . .
        . # # # .
        . . # . .
        . . # . .
        . . . . .
        `)
})
// B button
input.onButtonPressed(Button.B, function () {
    if (numberB < 9) {
        numberB += 1
    }
    basic.clearScreen()
    basic.showNumber(numberB)
    basic.pause(990)
    basic.showLeds(`
        . . . . .
        . # . # .
        # # # # #
        . # . # .
        . . . . .
        `)
})
// Logo touch (reset)
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    numberA = 0
    numberB = 0
    basic.clearScreen()
    basic.showString("RESET")
    basic.pause(500)
    basic.clearScreen()
    basic.pause(2000)
    basic.showLeds(`
        . . . . .
        . # . # .
        . # # # .
        . # . # .
        . . . . .
        `)
})
let numberB = 0
let sum = 0
let numberA = 0
// leds: HOME = "H" betü ledek
basic.showLeds(`
    . . . . .
    . # . # .
    . # # # .
    . # . # .
    . . . . .
    `)
