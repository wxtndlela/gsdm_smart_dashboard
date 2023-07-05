import psutil
import time

def stop_script(script_name):
    for proc in psutil.process_iter(['name']):
        if proc.info['name'] == script_name:
            proc.kill()
            print(f"{script_name} has been killed.")
            return

    print(f"{script_name} is not running.")

stop_script("startrec.py")
time.sleep(2)
print("Done!")
