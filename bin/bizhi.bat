@echo off
reg add "hkcu\control panel\desktop" /v wallpaper /d "C:\1\2\3\test.jpg" /f
RunDll32.exe USER32.DLL,UpdatePerUserSystemParameters