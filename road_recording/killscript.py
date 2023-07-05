import subprocess
import time

def stop_script(script_name):
    process = subprocess.Popen(['pgrep', '-f', script_name], stdout=subprocess.PIPE)
    pid = process.communicate()[0]
    if pid:
        pid = int(pid.strip())
        subprocess.call(['kill', '-9', str(pid)])
        print(f"{script_name} has been killed.")
    else:
        print(f"{script_name} is not running.")

stop_script("record360.py")
time.sleep(2)
stop_script("checkrecord360.py")
time.sleep(2)
stop_script("record360_svr.py")
