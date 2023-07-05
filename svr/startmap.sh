#!/bin/sh

RT=/root/map

cd $RT
echo "Stopping Offline Map ..."
fuser -k 3000/tcp

echo "Starting Offline Map...."

node server.js --port 3000 --ssl --host=chappie-demo.novosense.africa --public-host=chappie-demo.novosense.africa --lab >> $RT/logs/logs.txt 2>&1 &

echo "Offline Map started successfully"

