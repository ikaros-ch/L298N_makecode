// Test suite for the l298n extension.
// How to test: wire an L298N module (ENA/ENB jumpers removed) to the micro:bit:
// IN1 P0, IN2 P1, IN3 P2, IN4 P8, ENA P12, ENB P16, GND to GND. Power the motors from
// the module's own 6-12 V supply, connect two DC motors, flash and watch each step.
// PASS = every EXPECT matches. In the simulator: PASS = runs with no errors.

l298n.configurePins(DigitalPin.P0, DigitalPin.P1, DigitalPin.P2, DigitalPin.P8, AnalogPin.P12, AnalogPin.P16)
// EXPECT: both motors stopped

l298n.setMotorSpeed(l298n.Motors.Motor1, 50)
basic.pause(2000)
// EXPECT: motor 1 forward at about half speed, motor 2 still

l298n.setMotorSpeed(l298n.Motors.Motor1, -100)
basic.pause(2000)
// EXPECT: motor 1 backward at full speed

l298n.setMotorSpeed(l298n.Motors.Motor2, 75)
basic.pause(2000)
// EXPECT: motor 2 forward, motor 1 still backward

l298n.setMotorSpeed(l298n.Motors.Both, 0)
basic.pause(1000)
// EXPECT: both motors stop

l298n.setMotorSpeed(l298n.Motors.Both, 150)
basic.pause(2000)
// EXPECT: both forward at full speed (speed is limited to 100)

l298n.stopAll()
// EXPECT: both motors stop
