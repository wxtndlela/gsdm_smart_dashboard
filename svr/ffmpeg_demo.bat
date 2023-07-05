@echo OFF
title FFMPEG Task: Demo
['ffmpeg', '-i', 'rtsp://admin:Londeka123@192.168.15.42:554/live', '-c', 'copy', 'public/rec\\TESTLINK\\20230703043826.mp4']