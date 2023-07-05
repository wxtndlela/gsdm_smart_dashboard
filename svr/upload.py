import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from google.cloud import storage

#Add image to Firestore DB
storage_client = storage.Client.from_service_account_json('change-detection-5f3ba-firebase-adminsdk-og60g-c29102701b.json', project='change-detection-5f3ba')

bucket = storage_client.bucket('change-detection-5f3ba.appspot.com')
blob = bucket.blob('GSDM/road-inspection/test.mp4')
blob.upload_from_filename("test.mp4")

# Opt : if you want to make public access from the URL
blob.make_public()