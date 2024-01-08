import time, network, rp2
import Pin
import socket


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

pin_LED = Pin("LED", Pin.OUT)



WIFI_AP_NAME = 'NEO-e-KIWI-2'
WIFI_AP_PWD = 'N9PAGQES'
wlan = network.WLAN(network.STA_IF)


def setup_network():
    # set your WiFi Country
    rp2.country('PT')

    wlan.active(True)
    # set power mode to get WiFi power-saving off (if needed)
    wlan.config(pm = 0xa11140)
    wlan.connect(WIFI_AP_NAME, WIFI_AP_PWD)

    max_wait = 10
    while max_wait > 0:
        if wlan.status() < 0 or wlan.status() >= 3:
            break
        max_wait -= 1
        print('waiting for connection...')
        time.sleep(1)

    if wlan.status() != 3:
        raise RuntimeError('network connection failed')
    else:
        print('connected')
        status = wlan.ifconfig()
        print( 'ip = ' + status[0])
 
def runMotors():
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
 
def run():
  while True:
    setup_server()


setup_network()


# Open socket
addr = socket.getaddrinfo('0.0.0.0', 80)[0][-1]
s = socket.socket()
s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1) #avoids errors for address in use on reconnection
s.bind(addr)
s.listen(1)

def path(request):
    decoded_req = request.decode()
    get_req = decoded_req.partition('\n')[0]
    path = get_req.split(" ")[1]
    path=path.rsplit('/', 1) #path[0]->folder, path[1]->filename
    path[1]='/'+path[1]
    return path

def enable_motor():
  print("Enabling Motors")
  enable_A.value(1)
  enable_B.value(1)
  
def disable_motor():
  print("Stopping Motors")
  enable_A.value(0)
  enable_B.value(0)

def move_forward():
  print("Moving Forward")
  motor_A1.value(0)
  motor_A2.value(1)
  motor_B1.value(0)
  motor_B2.value(1)

def move_backward():
  print("Moving Backwards")
  motor_A1.value(1)
  motor_A2.value(0)
  
  motor_B1.value(1)
  motor_B2.value(0)
  
def toggle_led():
  pin_LED.toggle()

def setup_server():
  try:
    cl, addr = s.accept()
    print('client connected from', addr)
    request = cl.recv(1024)
    url=path(request)
    print("path: ", url)

    if url[0]:
      if url[1] == '/enable-motor':
        enable_motor()
      elif url[1] == '/disable-motor':
        disable_motor()
      elif url[1] == '/move-forward':
        move_forward()
      elif url[1] == '/move-backward':
        move_backward()
      elif url[1] == '/toggle-led':
        toggle_led()
        
    header = 'HTTP/1.0 200 OK\r\n'
    header += 'Access-Control-Allow-Origin: *\r\n'  # Allows all domains. For better security, replace '*' with specific domains.
    header += 'Access-Control-Allow-Methods: POST, GET, OPTIONS\r\n'  # Replace with methods you support
    header += 'Access-Control-Allow-Headers: Content-Type\r\n'  # Replace with headers you support
    header += '\r\n'

    cl.send(header)
    cl.close()

  except OSError as e:
    cl.close()
    print('connection closed')


pin_LED.value(1)

run()
