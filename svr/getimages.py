
# # Read the command-line arguments
# script_data = sys.argv[1]  # Assuming the parameter is passed as the first argument

# # Process the data or perform any desired operations
# result = f"Received Here: {script_data}"

# # Return the result as a JSON response
# response = json.dumps({"result": result})
# print(response)
import shutil
import sys
import json
import json
import os
import time
from datetime import timezone, datetime, timedelta 
import requests # to get image from the web

from os.path import basename

import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from firebase_admin import storage
import urllib.request
from datetime import timedelta
from datetime import date
from google.cloud import storage

from operator import add


def downloadImg(url, file_name, road_id): 

    # Open the url image, set stream to True, this will return the stream content.
    r = requests.get(url, stream = True)

    # Check if the image was retrieved successfully
    if r.status_code == 200:
        # Set decode_content value to True, otherwise the downloaded image file's size will be zero.
        r.raw.decode_content = True

        # pos1= url.split("/")[-1].find('%2F') + 3
        # pos2= url.split("/")[-1].find('?')

        # sfile = url.split("/")[-1][pos1:pos2]


        directory_path = "src/assets/media/"+road_id

        if not os.path.exists(directory_path):
            os.makedirs(directory_path)

        filename = "src/assets/media/"+road_id+"/"+file_name

        # Open a local file with wb ( write binary ) permission.
        with open(filename,'wb') as f:
            shutil.copyfileobj(r.raw, f)


#!/usr/bin/env python3
# -*- coding: utf-8 -*-

def main():
    # Entry point of your program
    media_url = sys.argv[1]
    file_name = sys.argv[2]
    road_id = sys.argv[3]

    downloadImg(media_url, file_name, road_id)
    #time.sleep(2)
    response = json.dumps({"result": "success"})
    print(response)

if __name__ == "__main__":
    main()
