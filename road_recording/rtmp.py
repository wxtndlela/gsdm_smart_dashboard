import subprocess

def rtmp_to_http(rtmp_url, http_url):
    cmd = ['ffmpeg', '-i', rtmp_url, '-c', 'copy', '-f', 'flv', http_url]
    subprocess.Popen(cmd)

rtmp_url = 'rtmp://192.168.8.152/live/001'
http_url = 'http://localhost:9000'
rtmp_to_http(rtmp_url, http_url)