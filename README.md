# Remote Controlled Motor Wheel Car

Composed by two components: Motor Controller Raspberry Pi and Web Client App for Remote Control.

## Motor Controller Raspberry Pi

The Raspberry pi pico W will act as both web server and motor controller. The general idea is to launch the raspberry pi device and connect it to wifi with the server running. This server will be used to receive HTTP requests from the client to perform motor controller operations such as:

- Enable/Disable Motor
- Move Forward
- Move Backwards

More information about the Motor Controller Raspberry Pi Pico W can be found [here](./motor-controller-server/README.md).

## Web Client App - Remote Control

The next item is the web app which can be accessed either via mobile phone or a computer and it will display a UI for remote command of the remote raspberry pi. The UI should contain elements to allow users to control remote car. As such there should be the following features:

- Move Forward
- Move Backwards
- Stop
- Turn Right
- Turn Left

The Web Client App will be implemented in Javascript/React SSR and it will implement the basic HTTP client and the UI for sending the HTTP requests via HTTP client to the raspberry pi pico w. More information on the implementation details of Web Client App can be found [here](./remote-controll-web-app/README.md)
