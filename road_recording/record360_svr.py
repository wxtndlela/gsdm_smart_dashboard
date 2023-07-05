from flask import Flask, request, Response
from flask_cors import CORS, cross_origin

import os
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from google.cloud import storage
import subprocess
import jsonpickle
from datetime import datetime

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

recording = False

# def add_video(img_url, id):

#     col_ref = db.collection('gsdm-road-inspection-videos') # 
#     results = col_ref.where(u'segmentid', u'==', id).get() # one way to query

#     if len(results) > 0:
#         for item in results:
#             doc = col_ref.document(item.id) # doc is DocumentReference
#             field_updates = {"url": img_url}
#             doc.update(field_updates)
#     else:
#         col_ref = db.collection('gsdm-road-inspection-videos')
#         new_values = {
#             "segmentid": id,
#             "url": img_url
#         }
#         col_ref.document().create(new_values)
    
#     return True

lines = ['0', '0']

@app.route('/record', methods=['POST'])
def record():
    # filename = request.args.get('filename')
    data = request.get_json()
    filename = data['filename']

    lines[0] = filename+'\n'
    lines[1] = 'record'
    with open("record.dat", "w") as file:
        file.writelines(lines)
    
    # build a response dict to send back to client
    response = {'message': 'Success','command':'Recording'}
                
    # encode response using jsonpickle
    response_pickled = jsonpickle.encode(response)
    
    return Response(response=response_pickled, status=200, mimetype="application/json")
    sys.exit(status)

@app.route('/stop', methods=['POST'])
def stop():

    lines[0] = 'Test\n'
    lines[1] = 'stop'
    with open("record.dat", "w") as file:
        file.writelines(lines)
    
    # build a response dict to send back to client
    response = {'message': 'Success','command':'Stopped'}
                
    # encode response using jsonpickle
    response_pickled = jsonpickle.encode(response)
    
    return Response(response=response_pickled, status=200, mimetype="application/json")
    sys.exit(status)

@app.route('/checkstatus', methods=['GET'])
def checkstatus():

    command = ''
    segmentid = ''

    with open("record.time", "r") as file:
        lines = file.readlines()
        for line in lines:
            # Convert timestamps to datetime objects
            start_time = datetime.strptime(line, "%Y-%m-%d %H:%M:%S")
            end_time = datetime.now()

            # Find the time elapsed between the two timestamps
            time_elapsed = end_time - start_time
            time_elapsed_in_minutes = int(time_elapsed.total_seconds() / 60)
            if time_elapsed_in_minutes > 3:
                command = '0'
    
    with open("record.dat", "r") as file:
        lines = file.readlines()
        segmentid = str(lines[0])

        if command != '0':
            command = str(lines[1])
            command = command.replace('\n','')

        segmentid = segmentid.replace('\n','')
                
    
    # build a response dict to send back to client
    response = {'message': 'Success','command':str(command), 'segmentid':str(segmentid)}
                
    # encode response using jsonpickle
    response_pickled = jsonpickle.encode(response)
    
    return Response(response=response_pickled, status=200, mimetype="application/json")
    sys.exit(status)

if __name__ == '__main__':
    app.run(port=9000)
