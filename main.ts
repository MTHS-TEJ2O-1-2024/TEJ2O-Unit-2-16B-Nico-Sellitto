/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Nico Sellitto
 * Created on: Nov 2024
 * This program get the distance and if something is too close, brodcast "Too close!"
*/

// setup
radio.setGroup(50)
basic.clearScreen()
basic.showIcon(IconNames.Happy)
let distance = 0
radio.setTransmitPower(7)

// gets distance in cm
while (true) {
    basic.clearScreen()
    distance = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )
    basic.showNumber(distance)
    // if distance is greator or equal to 10 then it sends a brodcast saying "Too close!"
    if (distance <= 10) {
        basic.clearScreen()
        radio.sendString("Too close!")
    }
}

// when a string is brodcasted, show it on the screen
radio.onReceivedString(function(receivedString: string) {
    basic.clearScreen()
    basic.showString(receivedString)
    basic.showIcon(IconNames.Happy)
})