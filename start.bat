@echo off
IF NOT EXIST "node_modules" (
	echo installing modules for the thingy
	npm i
	cls
	node app 
	timeout /t -1
) ELSE (
	node app 
	timeout /t -1
)