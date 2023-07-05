import os
from datetime import datetime
import time
import subprocess

while True:
    with open("record.time", "r") as file:
        lines = file.readlines()
        for line in lines:
            # Convert timestamps to datetime objects
            start_time = datetime.strptime(line, "%Y-%m-%d %H:%M:%S")
            end_time = datetime.now()

            # Find the time elapsed between the two timestamps
            time_elapsed = end_time - start_time
            time_elapsed_in_minutes = int(time_elapsed.total_seconds() / 60)
            if time_elapsed_in_minutes > 2:
                #Update time inside check file
                with open("record.time", "w") as file:
                    file.write(end_time.strftime("%Y-%m-%d %H:%M:%S"))
                    subprocess.run(["bash", "start_record360.sh"])
            time.sleep(5)
            print("[INFO] Time lapsed:",time_elapsed_in_minutes)