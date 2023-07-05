#!/usr/bin/python3

# Copyright (C) 2018 Infineon Technologies & pmdtechnologies ag
#
# THIS CODE AND INFORMATION ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY
# KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
# IMPLIED WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A
# PARTICULAR PURPOSE.

"""This sample shows how to record data to an .rrf file.

This sample uses Royale's feature of stopping after a given number of
frames are captured, therefore the --frames argument is required.
"""

import argparse
import queue
try:
    from roypypack import roypy  # package installation
except ImportError:
    import roypy  # local installation
import sys
from sample_camera_info import print_camera_info
from roypy_sample_utils import CameraOpener, add_camera_opener_options
from roypy_platform_utils import PlatformHelper
import os
import sys

class MyListener (roypy.IRecordStopListener):
    """A simple listener, in which waitForStop() blocks until onRecordingStopped has been called."""
    def __init__ (self):
        super (MyListener, self).__init__()
        self.queue = queue.Queue()

    def onRecordingStopped (self, frameCount):
        self.queue.put (frameCount)

    def waitForStop (self):
        frameCount = self.queue.get()
        print ("Stopped after capturing {frameCount} frames".format (frameCount=frameCount))

# Function to delete files with a specific extension
def delete_files_with_extension(extension):
    current_directory = "/home/pi/Desktop/ai/pmd/libroyale/python"#os.getcwd()
    for filename in os.listdir(current_directory):
        if filename.endswith(extension):
            file_path = os.path.join(current_directory, filename)
            os.remove(file_path)
            # print(f"Deleted file: {file_path}")

def main ():
    platformhelper = PlatformHelper()
    parser = argparse.ArgumentParser (usage = __doc__)
    add_camera_opener_options (parser)

    parser.add_argument ("--frames", type=int, required=False, help="duration to capture data (number of frames)")
    parser.add_argument ("--output", type=str, required=False, help="filename to record to")
    parser.add_argument ("--skipFrames", type=int, default=0, help="frameSkip argument for the API method")
    parser.add_argument ("--skipMilliseconds", type=int, default=0, help="msSkip argument for the API method")
    options = parser.parse_args()

    from datetime import datetime

    timestamp = datetime.now().strftime("%Y%m%d%H%M%S")
    extension = ".rrf"
    delete_files_with_extension(extension)


    # Check if values were provided, if not, use your own values
    if options.frames is None:
        options.frames = 3000  # Replace with the value you want
    if options.output is None:
        options.output = "_pmd_"+timestamp+".rrf"  # Replace "YOUR_FILENAME" with the filename you want


    opener = CameraOpener (options)
    cam = opener.open_camera ()

    print_camera_info (cam)

    l = MyListener()
    cam.registerRecordListener(l)
    cam.startCapture()
    
    try:
        cam.startRecording (options.output, options.frames, options.skipFrames, options.skipMilliseconds);
    except:
        print("There was an error creating the file. Do you have permission to write at this location?")
        sys.exit(1)

    seconds = options.frames * (options.skipFrames + 1) / cam.getFrameRate()
    if options.skipMilliseconds:
        timeForSkipping = options.frames * options.skipMilliseconds / 1000
        seconds = int (max (seconds, timeForSkipping))

    print ("Capturing with the camera running at {rate} frames per second".format (rate=cam.getFrameRate()))
    print ("This is expected to take around {seconds} seconds".format (seconds=seconds))
    
    l.waitForStop()

    cam.stopCapture()

if (__name__ == "__main__"):
    main()
