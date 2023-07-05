from flask import Flask, request
import subprocess
import json
import os
from datetime import datetime
import psutil
import signal
import time
import win32com.client
import sys
import ctypes

def start_recording():

    linkid = str(sys.argv[1])

    folder_path = os.path.join('public/rec', linkid)

    # Create directory if it doesn't exist
    os.makedirs(folder_path, exist_ok=True)

    current_datetime = datetime.now()
    _datetime = current_datetime.strftime("%Y%m%d%H%M%S")

    print("[INFO]:",os.path.join(folder_path, f'{_datetime}.mp4'))

    # Start recording to a file named with linkid.mp4 inside the folder
    command = ['ffmpeg', '-i', 'rtsp://admin:Londeka123@192.168.15.198:554/live', '-c', 'copy', os.path.join(folder_path, f'{_datetime}.mp4')]
    # command = [
    #         'ffmpeg',
    #         '-f', 'dshow',  # Specify the input format as video4linux2 (webcam)
    #         '-framerate', '30',  # Set the frame rate
    #         '-video_size', '640x480',  # Set the video size
    #         '-i', 'video=1080P Web Camera',  # Specify the webcam device
    #         '-c', 'copy',  # Copy the video codec
    #         os.path.join(folder_path, f'{_datetime}.mp4')
    #     ]
    ffmpeg_process  = subprocess.Popen(command, stdout=subprocess.PIPE, stderr=subprocess.PIPE)



    print("[INFO]:",ffmpeg_process.pid)

    # Create rec.dat file
    with open('public/rec.dat', 'w') as file:
        file.write(_datetime)
    
    with open('public/pid.dat', 'w') as file:
        file.write(str(ffmpeg_process.pid))


        
    
if __name__ == '__main__':
    start_recording()




