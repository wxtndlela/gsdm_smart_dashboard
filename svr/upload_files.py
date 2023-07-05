import os
import json
from http.server import SimpleHTTPRequestHandler
from http.server import HTTPServer
from urllib.parse import urlparse
import os
from io import BytesIO
import socket
from datetime import timezone, datetime, timedelta 

import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from firebase_admin import storage as fb_storage
import urllib.request
from datetime import timedelta
from datetime import date
from google.cloud import storage as gc_storage
import requests
import os
import time
from urllib.parse import urlparse, unquote

from google.oauth2 import service_account
import google.auth
from google.auth.transport.requests import Request
import requests

#Access Firebase DB
cred = credentials.Certificate("gsdm-smart-dashboard-firebase-adminsdk-3dc2m-da7a791029.json")
firebase_admin.initialize_app(cred,  {'storageBucket': 'gsdm-smart-dashboard.appspot.com'})
db = firestore.client()

print("[INFO] Connected to DB...")

bucket = fb_storage.bucket()

col_ref = db.collection('segment-media') 

# List of formats to look for
formats = ['.mp4', '.jpg', '.jpeg']

# Iterate over all subfolders and files in the current directory
for dirpath, dirnames, filenames in os.walk('./public/rec/'):
    
    for filename in filenames:
        # Get the file extension
        _, ext = os.path.splitext(filename)

        # Check if the file is one of the formats we're interested in
        if ext.lower() in formats:
            # Full path to the file on the local system
            local_file_path = os.path.join(dirpath, filename)

            # Full path to the file on the storage bucket
            # (This will include the local directory structure)
            blob_name = os.path.join(dirpath[13:], filename)  # dirpath[2:] to remove './' from the start

            #print(blob_name)

            #remove ext
            filename_without_extension, extension = os.path.splitext(filename)

            #work out if the file is vid or image:
            _type = ''
            if '.mp4' in filename:

                #check if 3d or normal video
                if "3D_" in filename_without_extension:
                    _type = 'vid3d'
                else:
                    _type = 'vid'
                    
                #print("[INFO]:",filename_without_extension)
            else:
                if '.rrf' in filename:
                    filename = "RRF"+filename
                    filename_without_extension = "RRF"+filename_without_extension
                    _type = 'vid'
                else:
                    _type = 'img'

            #check if files exists in DB
            results = col_ref.where(u'media_name', u'==', filename_without_extension).get() # one way to query
            print("[INFO]:",results)
            if not results:
                fin_blob_name = "road-inspection/"+dirpath[13:]+"/"+filename
                blob = bucket.blob(fin_blob_name)
                print("[INFO]:",fin_blob_name)
                
                if not blob.exists():

                    print("[INFO]:",local_file_path)

                    # # Upload the file
                    blob.upload_from_filename(local_file_path)
                    print(f'[INFO]: Uploaded {local_file_path} to {blob_name}')
                    # Make the blob publicly accessible
                    blob.make_public()
                    # Get the public URL
                    _url = blob.public_url

                    #Add this media to DB table named segment_media
                    # Get the current date and time
                    now = datetime.now()

                    # Format the date and time
                    _addedondatetime = now.strftime("%Y%m%d%H%M%S")
                    _user_id = "PsVt6wvEHHlKquTXdEGi"
                    _road_id = dirpath[13:]
                    _approved = True
                    _enabled = True
                    _media_type = _type
                    _media_url = _url

                    # Reference the 'segment_media' collection

                    doc_data = {
                        'addedondatetime': _addedondatetime,
                        'user_id': _user_id,
                        'road_id': _road_id,
                        'approved': _approved,
                        'enabled': _enabled,
                        'media_type': _media_type,
                        'media_url': _media_url,
                        'media_name': filename_without_extension
                    }

                    # Add a new doc in collection 'segment_media' with ID 
                    doc_ref = col_ref.add(doc_data)

                    print(f'[INFO]: Added {filename_without_extension}')
            else:
                print(f'[INFO]: Skipped {filename_without_extension}')

if os.path.exists('public/uploading.dat'):
    os.remove('public/uploading.dat')

      