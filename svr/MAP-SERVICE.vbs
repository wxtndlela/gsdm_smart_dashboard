Set WshShell = CreateObject("WScript.Shell")
WshShell.Run "cmd.exe /c ""cd /d C:\Users\user\Desktop\GSDM\gsdm_smart_dashboard\svr && start /min cmd.exe /k node server.js --host 192.168.15.187""", 0
Set WshShell = Nothing
