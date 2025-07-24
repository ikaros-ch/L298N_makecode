// tests go here; this will not be compiled when this package is used as an extension.
//% color=190 weight=100 icon="\uf1b9" block="L298N"
namespace l298n {
    // Motor selection
    export enum Motors {
        //% block="motor 1"
        Motor1,
        //% block="motor 2"
        Motor2,
        //% block="both motors"
        Both
    }

    // Initialize motor pins with default values
    let in1: DigitalPin = DigitalPin.P0
    let in2: DigitalPin = DigitalPin.P1
    let in3: DigitalPin = DigitalPin.P2
    let in4: DigitalPin = DigitalPin.P8
    let enA: AnalogPin = AnalogPin.P12
    let enB: AnalogPin = AnalogPin.P16

    /**
     * Configure the pins for the L298N motor driver
     * @param pinIn1 Direction pin 1 for Motor 1
     * @param pinIn2 Direction pin 2 for Motor 1
     * @param pinIn3 Direction pin 1 for Motor 2
     * @param pinIn4 Direction pin 2 for Motor 2
     * @param pinEnA PWM pin for Motor 1 speed (optional)
     * @param pinEnB PWM pin for Motor 2 speed (optional)
     */
    //% block="configure pins || IN1 %pinIn1 IN2 %pinIn2 IN3 %pinIn3 IN4 %pinIn4 ENA %pinEnA ENB %pinEnB"
    //% expandableArgumentMode="toggle"
    //% pinIn1.defl=DigitalPin.P0
    //% pinIn2.defl=DigitalPin.P1
    //% pinIn3.defl=DigitalPin.P2
    //% pinIn4.defl=DigitalPin.P8
    //% pinEnA.defl=AnalogPin.P12
    //% pinEnB.defl=AnalogPin.P16
    export function configurePins(
        pinIn1: DigitalPin = DigitalPin.P0,
        pinIn2: DigitalPin = DigitalPin.P1,
        pinIn3: DigitalPin = DigitalPin.P2,
        pinIn4: DigitalPin = DigitalPin.P8,
        pinEnA: AnalogPin = AnalogPin.P12,
        pinEnB: AnalogPin = AnalogPin.P16
    ): void {
        in1 = pinIn1
        in2 = pinIn2
        in3 = pinIn3
        in4 = pinIn4
        enA = pinEnA
        enB = pinEnB

        // Initialize all pins
        pins.digitalWritePin(in1, 0)
        pins.digitalWritePin(in2, 0)
        pins.digitalWritePin(in3, 0)
        pins.digitalWritePin(in4, 0)
        pins.analogWritePin(enA, 0)
        pins.analogWritePin(enB, 0)
    }

    /**
     * Control a motor with speed (-100 to 100)
     * @param motor Which motor to control
     * @param speed Motor speed (-100 to 100)
     */
    //% block="set %motor speed to %speed \\%"
    //% speed.min=-100 speed.max=100
    export function setMotorSpeed(motor: Motors, speed: number): void {
        // Constrain speed to -100..100 range
        speed = Math.constrain(speed, -100, 100)
        
        // Convert speed to PWM value (0-1023)
        const pwmValue = Math.map(Math.abs(speed), 0, 100, 0, 1023)

        switch (motor) {
            case Motors.Motor1:
                controlSingleMotor(in1, in2, enA, speed, pwmValue)
                break
            case Motors.Motor2:
                controlSingleMotor(in3, in4, enB, speed, pwmValue)
                break
            case Motors.Both:
                controlSingleMotor(in1, in2, enA, speed, pwmValue)
                controlSingleMotor(in3, in4, enB, speed, pwmValue)
                break
        }
    }

    function controlSingleMotor(pin1: DigitalPin, pin2: DigitalPin, pwmPin: AnalogPin, speed: number, pwmValue: number): void {
        if (speed > 0) {
            // Forward
            pins.digitalWritePin(pin1, 1)
            pins.digitalWritePin(pin2, 0)
            pins.analogWritePin(pwmPin, pwmValue)
        } else if (speed < 0) {
            // Backward
            pins.digitalWritePin(pin1, 0)
            pins.digitalWritePin(pin2, 1)
            pins.analogWritePin(pwmPin, pwmValue)
        } else {
            // Stop
            pins.digitalWritePin(pin1, 0)
            pins.digitalWritePin(pin2, 0)
            pins.analogWritePin(pwmPin, 0)
        }
    }

    /**
     * Stop all motors
     */
    //% block="stop all motors"
    export function stopAll(): void {
        pins.digitalWritePin(in1, 0)
        pins.digitalWritePin(in2, 0)
        pins.digitalWritePin(in3, 0)
        pins.digitalWritePin(in4, 0)
        pins.analogWritePin(enA, 0)
        pins.analogWritePin(enB, 0)
    }
}
