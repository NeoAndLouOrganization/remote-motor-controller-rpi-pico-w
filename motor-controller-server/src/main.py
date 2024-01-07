import time
from machine import Pin
 
# Testing the DC Motors with
# L293D
 
# Define Pins
# Motor A
enable_A = Pin(5, Pin.OUT)
motor_A1 = Pin(6, Pin.OUT)
motor_A2 = Pin(7, Pin.OUT)
  
# Motor B
enable_B = Pin(8, Pin.OUT)
motor_B1 = Pin(9, Pin.OUT)
motor_B2 = Pin(10, Pin.OUT)
 
def run():
  while True:
    print("Hello Running in While mode")
    time.sleep_ms(1000)
    print("Enabling Motors")
    enable_A.value(1)
    enable_B.value(1)
    time.sleep_ms(1000)
    print("Moving Forward")
    motor_A1.value(0)
    motor_A2.value(1)
    
    motor_B1.value(0)
    motor_B2.value(1)
    time.sleep_ms(1000)
    print("Moving Backwards")
    motor_A1.value(1)
    motor_A2.value(0)
    
    motor_B1.value(1)
    motor_B2.value(0)
    
    time.sleep_ms(1000)
    print("Stopping Motors")
    enable_A.value(0)
    enable_B.value(0)

run()
