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
import subprocess

kernel = ctypes.windll.kernel32
current_datetime = datetime.now()
_datetime = current_datetime.strftime("%Y%m%d%H%M%S")
os.remove('public/rec.dat')

with open('public/uploading.dat', 'w') as file:
    file.write(_datetime)

time.sleep(3)
with open('public/pid.dat', 'r') as file:
    pid = file.read()
print(f"Send Ctrl+C to pid: {pid}")

kernel.FreeConsole()
kernel.AttachConsole(int(pid))
kernel.SetConsoleCtrlHandler(None, 1)
kernel.GenerateConsoleCtrlEvent(0, 0)

#sys.exit(0)
subprocess.call("taskkill /f /im cmd.exe", shell=True)

