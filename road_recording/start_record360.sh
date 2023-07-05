RT=/home/yoda/AI/GSDM.nosync/inspection/360/recorder

cd $RT

echo "Starting record360..."

python record360.py >> $RT/logs/record.txt 2>&1 &


echo "record360 started successfully"

