from flask import Flask, render_template, Response
import RPi.GPIO as GPIO

pin_status = list()


GPIO.setmode(GPIO.BCM)
GPIO.setup(15,GPIO.OUT)
GPIO.setup(16,GPIO.OUT)
GPIO.setup(20,GPIO.OUT)
GPIO.setup(21,GPIO.OUT)
GPIO.setup(25,GPIO.OUT)
 
app = Flask(__name__)


@app.route('/')
def index():
    return render_template('control.html',pin_status=pin_status)

@app.route('/PinOn/<pin_num>', methods=['POST'])
def turn_on(pin_num):
    """Get all profiles (JSON)"""
    pin = int(pin_num)
    GPIO.output(pin, GPIO.HIGH)
    pin_status.append(pin)
    return ''

@app.route('/PinOff/<pin_num>', methods=['POST'])
def turn_off(pin_num):
    """Get all profiles (JSON)"""
    pin = int(pin_num)
    GPIO.output(pin, GPIO.LOW)
    if pin in pin_status:
        pin_status.remove(pin)# 存在值即为真
    else:
        pass
    return ''


if __name__ == '__main__':
    app.run(host='0.0.0.0', port='5600',debug=True)
