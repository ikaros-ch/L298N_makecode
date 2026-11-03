# L298N motor driver

MakeCode extension for **L298N dual H-bridge motor driver modules** (the common red board with a heat sink, built on the [ST L298](https://www.st.com/en/motor-drivers/l298.html) chip). Drive two DC motors forwards and backwards at any speed from -100 to 100.

## Use as extension

In [MakeCode for micro:bit](https://makecode.microbit.org/): **Extensions** → paste `https://github.com/ikaros-ch/L298N_makecode`.

```package
l298n=github:ikaros-ch/L298N_makecode
```

## Wiring

**Remove the ENA and ENB jumpers** on the module, so the micro:bit controls the speed. Power the motors from the module's own supply (6-12 V on `+12V`), never from the micro:bit, and join the grounds.

| L298N | micro:bit (default) |
|---|---|
| IN1, IN2 | P0, P1 (motor 1 direction) |
| IN3, IN4 | P2, P8 (motor 2 direction) |
| ENA | P12 (motor 1 speed) |
| ENB | P16 (motor 2 speed) |
| GND | GND |

Use any other pins with `configure pins`. On a micro:bit V1 only 3 pins can do speed control (PWM) at once, so keep other analog outputs to one.

## Examples

### Drive forward, then back

```blocks
// Use the default pins (IN1 P0, IN2 P1, IN3 P2, IN4 P8, ENA P12, ENB P16)
l298n.configurePins()
// Both motors forward at half speed for 1 second
l298n.setMotorSpeed(l298n.Motors.Both, 50)
basic.pause(1000)
// Both motors backward at 75% for 1 second
l298n.setMotorSpeed(l298n.Motors.Both, -75)
basic.pause(1000)
l298n.stopAll()
```

### Steer with the buttons

```blocks
l298n.configurePins()
// A: turn left (right motor forward, left motor back)
input.onButtonPressed(Button.A, function () {
    l298n.setMotorSpeed(l298n.Motors.Motor1, -60)
    l298n.setMotorSpeed(l298n.Motors.Motor2, 60)
})
// B: turn right
input.onButtonPressed(Button.B, function () {
    l298n.setMotorSpeed(l298n.Motors.Motor1, 60)
    l298n.setMotorSpeed(l298n.Motors.Motor2, -60)
})
// A+B: stop
input.onButtonPressed(Button.AB, function () {
    l298n.stopAll()
})
```

### Custom pins

```blocks
// Motor 1 on P13/P14 with speed on P1, motor 2 on P15/P16 with speed on P2
l298n.configurePins(DigitalPin.P13, DigitalPin.P14, DigitalPin.P15, DigitalPin.P16, AnalogPin.P1, AnalogPin.P2)
l298n.setMotorSpeed(l298n.Motors.Motor1, 100)
```

## Blocks

* [configure pins](docs/configure-pins.md)
* [set motor speed](docs/set-motor-speed.md)
* [stop all motors](docs/stop-all.md)

## Learn more

* [ST L298 datasheet](https://www.st.com/resource/en/datasheet/l298.pdf)
* [micro:bit analog write (PWM) reference](https://makecode.microbit.org/reference/pins/analog-write-pin)
* [micro:bit edge connector pins](https://tech.microbit.org/hardware/edgeconnector/)

## License

MIT

## Supported targets

* for PXT/microbit
