import os
import time

filename = 'test1.mp4'

while os.path.isfile(filename) == False:
    time.sleep(2)
    print("File not found!")
    continue

previous_size = os.path.getsize(filename)

while True:
    current_size = os.path.getsize(filename)
    if current_size != previous_size:
        print(f"The size of {filename} has changed from {previous_size} bytes to {current_size} bytes.")
        previous_size = current_size
    time.sleep(5)  # wait for 1 second before checking again
