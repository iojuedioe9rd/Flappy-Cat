cd ../
call npm run ogBuild
xcopy "build" "electron/src/build"
xcopy "build/static/js" "electron/src/build/static/js"
xcopy "build/static/css" "electron/src/build/static/css"