# Set motor speed

Set a motor's speed. Negative speeds run it backwards, 0 stops it.

```sig
l298n.setMotorSpeed(l298n.Motors.Motor1, 50)
```

## Parameters

* **motor**: which motor to control
* **speed**: motor speed from -100 (full reverse) to 100 (full forward)

## Example

```blocks
l298n.setMotorSpeed(l298n.Motors.Motor1, 50)
```

```package
l298n=github:ikaros-ch/L298N_makecode
```
