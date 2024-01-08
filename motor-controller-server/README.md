# remote-motor-controller-rpi-pico-w

A MicroPython for Raspberry Pi Pico W to control motor wheels

# Install Micro Python on the Hardware

Follow instructions on how to install micro python in [here](./micro-python-firmware/README.md)

# Create Project

Using Micropython extension we can create a project. On the bottom nav bar in the left corner you can see Micropython. Click on it and dropdown from the top-bar will appear. Select new project. When created, you should see a new folder with `boot.py` and `main.py`

# Using Ampy to run and upload files to micro controller

Source - https://mikeesto.medium.com/uploading-to-the-raspberry-pi-pico-without-thonny-53de1a10da30

## Find the right USB in devices

Go to `/dev` folder. Look for tty...

## Check file contents

`$ ampy --port /dev/tty.usbmodem112301 ls`

## Run code

Note the command bellow does not upload code on board
`$ ampy --port /dev/tty.usbmodem112301 run main.py`

## Upload file

`$ ampy --port /dev/tty.usbmodem112301 put main.py`

## Deploy Code so that it runs on microcontroller.

For that, we need to upload file `main.py`, if it has its name, then microcontroller will run this code everytime it is on by default.
Simply upload file, and then restart your microcontroller.

## Installing Packages

https://docs.micropython.org/en/latest/reference/packages.html

## Remove file

`$ ampy --port /dev/tty.usbmodem112301 rm main.py`

## Remove Dir

`$ ampy --port /serial/port rmdir /foo/bar`

## Debug micro controller

`$ screen /dev/tty.usbmodem112201 115200`
