import os
from datetime import datetime
import time
import subprocess

from flask import Flask, request
from flask_cors import CORS, cross_origin
import os
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from google.cloud import storage
import subprocess

from threading import Thread
import psutil
import signal
import time

#Access Firebase DB
# cred = credentials.Certificate("change-detection-5f3ba-firebase-adminsdk-og60g-c29102701b.json")
# firebase_admin.initialize_app(cred,  {'storageBucket': 'change-detection-5f3ba.appspot.com/changes'})
# db = firestore.client()

# print("[INFO] Connected to DB...")


app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

segmentid = ''
command = ''
record = False

def updatetime():
    with open("record.time", "w") as file:
        end_time = datetime.now()
        file.write(end_time.strftime("%Y-%m-%d %H:%M:%S"))


def record_stream(filename):
    global recording
    command = f'ffmpeg -i rtmp://192.168.8.152/live/001 -c copy {filename}.mp4'
    recording = True
    process = subprocess.Popen(command.split(), stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    while recording:
        output = process.stderr.readline()

        if output == b'' and process.poll() is not None:
            break
        if output:
            # Update state variable with output from FFmpeg
            state = output.decode().strip()
            # You can do something with the state, such as print it or store it in a global variable

    process.kill()
    recording = False

while True:
    
    if os.path.isfile('record.dat'):
        with open("record.dat", "r") as file:
            lines = file.readlines()
            segmentid = str(lines[0])
            command = str(lines[1])
            command = command.replace('\n','')
            segmentid = segmentid.replace('\n','')
            #print(command)



        if command == 'record' or command == 'recording':

            if command == 'record':
                if os.path.isfile(f'{segmentid}.mp4'):
                 os.remove(f'{segmentid}.mp4')
                thread = Thread(target=record_stream, args=(segmentid,))
                thread.start()
                time.sleep(5)

            if os.path.isfile(f'{segmentid}.mp4'):
                print('Recording running')
                lines[0] = segmentid+'\n'
                lines[1] = 'recording'
                with open("record.dat", "w") as file:
                    file.writelines(lines)
            else:
                print('Recording is not running!')
                
        if command == 'stop':
            
            global recording
            recording = False
            # Stop the recording by sending a SIGINT signal to the FFmpeg process
            os.system('pkill -2 ffmpeg')
            print('Recording stopped!')
            lines[0] = segmentid+'\n'
            lines[1] = '0'
            with open("record.dat", "w") as file:
                file.writelines(lines)

        if command == '0':
            print('Waiting for command...')
            
        time.sleep(3)
        updatetime()

recording = False

