#!/bin/bash
set -e
echo "Building DEBUG APK..."
cd android
./gradlew assembleDebug --no-daemon
echo ""
echo "APK : android/app/build/outputs/apk/debug/app-debug.apk"
