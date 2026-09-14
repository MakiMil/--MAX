@echo off
cd /d "%~dp0"
echo.
echo  CMM Download Site
echo  Open: http://localhost:8787
echo.
npx --yes serve -l 8787
pause
