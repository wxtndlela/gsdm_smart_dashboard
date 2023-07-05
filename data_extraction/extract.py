import geopandas as gpd
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
cred = credentials.Certificate("gsdm-smart-dashboard-firebase-adminsdk-3dc2m-da7a791029.json")
firebase_admin.initialize_app(cred,  {'storageBucket': 'gsdm-smart-dashboard.appspot.com'})
db = firestore.client()

print("[INFO] Connected to DB...")

gdf = gpd.read_file("Msukaligwa_RRAMS/Msukaligwa_RRAMS.shp")


def add_segment_rec(road_id, name, route_seq, start_km, end_km, munic, road_len, st_length_, geometry):

    col_ref = db.collection('gsdm-road-inspection-segments') # 
    results = col_ref.where(u'road_id', u'==', str(road_id)).get() # one way to query

    if len(results) > 0:
        for item in results:
            doc = col_ref.document(item.id) # doc is DocumentReference
            field_updates = {"street_name": name,"route_seq":route_seq,"start_km":start_km,"end_km":end_km,"municipality":munic,"road_len":road_len,"st_length":st_length_,"geometry":geometry, "ASSESSED": False,"surfacetype":"flexible"}
            doc.update(field_updates)
    else:
        col_ref = db.collection('gsdm-road-inspection-segments')
        new_values = {
            "road_id": road_id,
            "street_name": name,
            "route_seq": route_seq,
            "start_km": start_km,
            "end_km": end_km,
            "ASSESSED": False,
            "surfacetype":"flexible",
            "municipality": munic,
            "road_len": road_len,
            "st_length": st_length_,
            "geometry": geometry
        }
        col_ref.document().create(new_values)
    
    return True
_len = 2
cnt = 0
seg_rows = []
print(gdf)
# for index, row in gdf.iterrows():

#     #if cnt < _len:
#     _geom = str(row['geometry'])
    
#     _geom = _geom.replace('LINESTRING (','')

#     _geom = _geom.replace(')','')
    
#     _geom_arr = _geom.split(",")
    
#     _geom_fin = []
#     for _geom_arr_rec in _geom_arr:
#         _geom_arr_rec = _geom_arr_rec.strip()
#         _geom_fin.append(_geom_arr_rec.replace(" ",","))

#     # print(row['road_id'])
#     _name = str(row['name'])
#     _name = _name.replace("nan","")
#     #_rec = [row['road_id'],_name,row['route_seq'],str(row['start_km']),str(row['end_km']),str(row['munic']),str(row['road_len']),str(row['st_length_']),_geom_fin]
#     print("Record done:",index)
#     add_segment_rec(row['road_id'],_name,str(row['route_seq']),str(row['start_km']),str(row['end_km']),str(row['munic']),str(row['road_len']),str(row['st_length_']),_geom_fin)



