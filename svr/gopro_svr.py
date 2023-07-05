import requests
import time
from flask import Flask, request, Response
from flask_cors import CORS, cross_origin
import jsonpickle
import json
import os
import subprocess
from goprocam import GoProCamera, constants
import socket
import shlex
from ftplib import FTP
import signal
import time
import psutil
import glob
import logging

logging.basicConfig(filename='/home/pi/Desktop/ai/gopro/logfile.log', level=logging.DEBUG)

logging.info('Script started')

# Function to kill a running script
def kill_script(script_name):
    for process in psutil.process_iter(['name', 'cmdline']):
        if process.info['name'] == 'python' and process.info['cmdline'][1] == script_name:
            process.kill()
            print(f"The script '{script_name}' has been killed.")
            return
    print(f"No running script found with the name '{script_name}'.")

# Function to check if a script is running
# def is_script_running(script_name):
#     for process in psutil.process_iter(['name']):
#         print("[INFO]:",process.info['cmdline'][1])
#         if process.info['name'] == 'python' and process.info['cmdline'][1] == script_name:
#             return True
#     return False

def is_script_running(process_name):
    '''
    Check if there is any running process that contains the given name processName.
    '''
    #Iterate over all the running process
    for proc in psutil.process_iter():
        try:
            # Check if process name contains the given name string.
            pinfo = proc.as_dict(attrs=['pid', 'name', 'create_time'])
            if process_name.lower() in pinfo['name'].lower() :
                return True
        except (psutil.NoSuchProcess, psutil.AccessDenied , psutil.ZombieProcess):
            pass
    return False

# Function to run a script
def run_script_as_subprocess(script_path, parameter):
    try:
        process = subprocess.Popen(['python3', script_path])
        # Get the PID of the subprocess
        pid = process.pid

        print("The PID of the subprocess is:", pid)
        return pid
    except FileNotFoundError:
        print(f"Script '{script_path}' not found.")

# Function to kill a process
def kill_process(pid):
    try:
        os.kill(pid, signal.SIGTERM)
        print(f"Process with PID {pid} killed.")
    except OSError:
        print(f"Process with PID {pid} not found.")

# Function to send HTTP POST requests to the camera


def compress_video(fullpath, filename):

    output_file = 'downloads/_'+filename

    # Set the compression options
    crf = '35'  # Constant rate factor (lower value = higher quality)
    preset = 'medium'  # Encoding speed (slowest = highest quality)

    # Run FFmpeg to compress the video
    subprocess.run(['ffmpeg', '-i', fullpath, '-c:v', 'libx264', '-crf',
                   crf, '-preset', preset, '-c:a', 'copy', output_file], check=True)

    return 0


def download_files(urls):

    # Create the "downloads" folder if it doesn't exist

    if not os.path.exists("downloads"):
        os.makedirs("downloads")

    result = ''

    for url in urls:

        # Extract the file name from the URL

        file_name = url.split('/')[-1]

        # Download the file

        response = requests.get(url)

        if response.status_code == 200:

            # Save the file in the "downloads" folder

            file_path = os.path.join("downloads", file_name)

            with open(file_path, 'wb') as file:
                file.write(response.content)
            _ret = f"Success: {file_name}"
            print("[INFO]: Compressing the video...")
            compress_video(file_path, file_name)
            result = result + ", " + _ret

        else:

            _ret = f"Failed: {file_name}"
            result = result + ", " + _ret
    return result[2:]


app = Flask(__name__)
cors = CORS(app)


def camera_record(state, _rid):
    
    # Create an instance of the GoProCamera class
    #gopro_camera = GoProCamera.GoPro()

    if state == 'start':
        # Start recording
        gopro_camera = GoProCamera.GoPro(constants.gpcontrol)
        gopro_camera.mode(constants.Mode.VideoMode)
        gopro_camera.shutter(constants.start)
        time.sleep(1)
        # Run the script
        script_path = '/home/pi/Desktop/ai/pmd/libroyale/python/pmd_rec.py'
        parameter = _rid
        process_id = run_script_as_subprocess(script_path, parameter)
        print("[PID]:",process_id)
        with open('pid', 'w') as f:  # 'a' opens the file for appending, 'w' opens for writing (and deletes content)
            f.write(str(process_id)) 
       
    else:
        # stop recording
        gopro_camera = GoProCamera.GoPro(constants.gpcontrol)
        gopro_camera.mode(constants.Mode.VideoMode)
        gopro_camera.shutter(constants.stop)
        time.sleep(1)
        with open('pid', 'r') as f:
            _pid = f.read()
        kill_process(int(_pid))


def camera_download(_rid):
    gopro_camera = GoProCamera.GoPro(constants.gpcontrol)
    gopro_camera.mode(constants.Mode.VideoMode)

# Get the list of media files
    media_list = gopro_camera.listMedia()
    _json = json.loads(media_list)
    file_names = [fs_obj['n'] for fs_obj in _json['media'][0]['fs']]


    #video_files = [m for m in media_list if m.get['type']=='VIDEO']

    # download each video
    for vid in file_names:
        gopro_camera.downloadMedia("100GOPRO", vid)


    # Delete all files on the GoPro camera

        gopro_camera.delete("all")


    # Connect to the FTP server

        ftp = FTP("192.168.1.100")
        ftp.login(user="media", passwd="Londeka123")


    # Create the 'footage' folder on the FTP server if it doesn't exist
        if _rid not in ftp.nlst():
            ftp.mkd(_rid)

    # Change to the 'footage' directory on the FTP server
        ftp.cwd(_rid)

        
    # Upload the downloaded video file to the FTP server

        local_file_path = os.path.join(os.getcwd(), vid)
        
        with open(local_file_path, "rb") as file:
            ftp.storbinary(f"STOR {vid}", file)

    # Close the FTP connection
        ftp.quit()
    # Delete the local downloaded file
        os.remove(local_file_path)

    # Transfer RRF files
    # Get a list of all .rrf files in the current directory
    rrf_files = glob.glob("./*.rrf")

    # Get only the filenames from the full paths
    rrf_filenames = [os.path.basename(file) for file in rrf_files]

    # Print out the list of .rrf filenames
    for filename in rrf_filenames:
       # print(filename)
        # Connect to the FTP server

        ftp = FTP("192.168.1.100")
        ftp.login(user="media", passwd="Londeka123")


    # Create the 'footage' folder on the FTP server if it doesn't exist
        if _rid not in ftp.nlst():
            ftp.mkd(_rid)

    # Change to the 'footage' directory on the FTP server
        ftp.cwd(_rid)

        
    # Upload the downloaded video file to the FTP server

        local_file_path = os.path.join(os.getcwd(), filename)
        
        with open(local_file_path, "rb") as file:
            ftp.storbinary(f"STOR {filename}", file)

    # Close the FTP connection
        ftp.quit()
    # Delete the local downloaded file
        os.remove(local_file_path)


@app.route('/api', methods=['POST'])
def release():
    r = request
    _cmd = ''
    data = request.get_json()
    _cmd = data['command']
    _rid = data['roadid']
    # _wait = int(data['wait'])
    # _url = str(data['url'])
    ret = 'Command Not Found'

    time.sleep(1)


    if _cmd == 'recstart':
        ret = camera_record('start',_rid)

    if _cmd == 'recstop':
        ret = camera_record('stop',_rid)

    if _cmd == 'download':
        ret = camera_download(_rid)

    # build a response dict to send back to client
    response = {'message': 'Success', 'Result': str(ret)}

    # encode response using jsonpickle
    response_pickled = jsonpickle.encode(response)

    print("[INFO] Done!")

    return Response(response=response_pickled, status=200, mimetype="application/json")
    sys.exit(status)


# start flask app
app.run(host="192.168.1.102", port=2000)
# context = ('/etc/letsencrypt/live/chappie-demo.novosense.africa/fullchain.pem',
#            '/etc/letsencrypt/live/chappie-demo.novosense.africa/privkey.pem')  # certificate and key files
# app.run(host="chappie-demo.novosense.africa", ssl_context=context, port=8000)
