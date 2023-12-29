# Install Micro Python

To run python on micro boards, we need to install an interpreter for python so that python scripts can be read on the board. You can find an UF2 file here - https://micropython.org/download/rp2-pico-w/. Alternatively, you can use the `.uf2` from this folder.

Download the latest and install it on micro controller (ex. raspberry pi). Click on bootsel so that micro-controller so that it can appear in your folders and then drag and drop the micropython firmware onto board.

More info - https://www.raspberrypi.com/documentation/microcontrollers/micropython.html

Once installed. double-check that python works on the board. You can access the REPL via USB Serial. Example for mac

`$ screen /dev/tty.usbmodem112201 115200`

Click enter and you should be on board! Test that python works

```python
print("Hello World")
```

# Install Micro Python extensions for vsCode

Install Micropython IDE and Microphyon-REPLink, autopep8, Pylance, Python. Follow on with installing all the required dependencies suggested by the extensions.

# Pylance - nice to have

It is nice to have warnings in code highlighted correctly. Pylance does that, but we need to configure it properly. Essentially, Pylance needs to know the path where the projects are installed. Lets make sure this one is correct:

1. Make sure you know the location of your import; you can find it with:

```python
python
>>> import modulename
>>> print(modulename.__file__)
```
