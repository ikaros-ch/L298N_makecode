# L298N Motor Driver Extension for micro:bit (Speed Control Version)

Control L298N motor driver with your BBC micro:bit using MakeCode with intuitive speed control (-100 to 100).

## Features

- Simple speed control from -100 (full reverse) to 100 (full forward)
- Support for two motors or both simultaneously
- Automatic direction handling based on speed sign
- Configurable pin assignments

## Basic Usage

1. First configure your pins using the `configure pins` block
2. Control motors using `set motor speed to %` blocks
3. Use negative values for reverse direction
4. Use `stop all motors` to halt all motors

## Example

```blocks
l298n.configurePins(DigitalPin.P0, DigitalPin.P1, DigitalPin.P2, DigitalPin.P8, AnalogPin.P12, AnalogPin.P16)

// Forward then backward
l298n.setMotorSpeed(l298n.Motors.Motor1, 50)
basic.pause(1000)
l298n.setMotorSpeed(l298n.Motors.Motor1, -75)
basic.pause(1000)
l298n.stopAll()
```

