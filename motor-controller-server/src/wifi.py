import network, rp2, time

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
        
        
def run():
    while True:
        try:
            # Should receive data from client here
            print("reading data...")
        except:
            print("could not connect (status =" + str(wlan.status()) + ")")
            reconnect()

        time.sleep(5)
        
        
setup_network()
