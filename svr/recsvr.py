from flask import Flask, request
import subprocess
import json
import os
from datetime import datetime
import psutil
import signal
import time
import win32com.client
import ctypes
import sys

kernel = ctypes.windll.kernel32

app = Flask(__name__)

ffmpeg_process = None

@app.route('/startrec', methods=['POST'])
def start_recording():
    global ffmpeg_process
    try:
        data = request.get_json()
        if 'linkid' not in data:
            return 'Missing linkid parameter', 400

        linkid = data['linkid']
        folder_path = os.path.join('public/rec', linkid)

        # Create directory if it doesn't exist
        os.makedirs(folder_path, exist_ok=True)

        current_datetime = datetime.now()
        _datetime = current_datetime.strftime("%Y%m%d%H%M%S")

        video_path = os.path.join(folder_path, f'{_datetime}.mp4')

        # Start recording using FFmpeg
        command = [
            'ffmpeg',
            '-f', 'dshow',  # Specify the input format as video4linux2 (webcam)
            '-framerate', '30',  # Set the frame rate
            '-video_size', '640x480',  # Set the video size
            '-i', 'video=1080P Web Camera',  # Specify the webcam device
            '-c', 'copy',  # Copy the video codec
            video_path
        ]

        ffmpeg_process = subprocess.Popen(command)

        print("[INFO]:",ffmpeg_process.pid)

        # Create rec.dat file
        with open('public/rec.dat', 'w') as file:
            file.write(_datetime)
        
        return 'Recording started'
    except Exception as e:
        return str(e), 500

@app.route('/stoprec', methods=['POST'])
def stop_recording():
    global ffmpeg_process
    try:
        if ffmpeg_process is None:
            return 'No active recording', 400

        ffmpeg_process.terminate()
        ffmpeg_process.wait()
        ffmpeg_process = None

        return 'Recording stopped'
    except Exception as e:
        return str(e), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0',port=4000)
