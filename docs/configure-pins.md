# Configure pins

L298N dual H-bridge motor driver: two DC motors, speed -100..100. ST L298 datasheet: https://www.st.com/resource/en/datasheet/l298.pdf / //% color=190 weight=100 icon="\uf1b9" block="L298N" namespace l298n { // Motor selection export enum Motors { //% block="motor 1" Motor1, //% block="motor 2" Motor2, //% block="both motors" Both } // Initialize motor pins with default values let in1: DigitalPin = DigitalPin.P0 let in2: DigitalPin = DigitalPin.P1 let in3: DigitalPin = DigitalPin.P2 let in4: DigitalPin = DigitalPin.P8 let enA: AnalogPin = AnalogPin.P12 let enB: AnalogPin = AnalogPin.P16 /** Choose which micro:bit pins are wired to the L298N. Run once in on start. Remove the ENA/ENB jumpers on the module so the micro:bit controls speed.

```sig
l298n.configurePins(DigitalPin.P0, DigitalPin.P1, DigitalPin.P2, DigitalPin.P8, AnalogPin.P12, AnalogPin.P16)
```

## Parameters

* **pinIn1**: Direction pin 1 for Motor 1
* **pinIn2**: Direction pin 2 for Motor 1
* **pinIn3**: Direction pin 1 for Motor 2
* **pinIn4**: Direction pin 2 for Motor 2
* **pinEnA**: PWM pin for Motor 1 speed (optional)
* **pinEnB**: PWM pin for Motor 2 speed (optional)

## Example

```blocks
l298n.configurePins(DigitalPin.P0, DigitalPin.P1, DigitalPin.P2, DigitalPin.P8, AnalogPin.P12, AnalogPin.P16)
```

```package
l298n=github:ikaros-ch/L298N_makecode
```
