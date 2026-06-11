#!/bin/bash
set -e

KEYSTORE="${KEYSTORE_PATH:-$HOME/.android/release.keystore}"
ALIAS="${KEY_ALIAS:-release}"

if [ ! -f "$KEYSTORE" ]; then
  echo "Génération du keystore de release..."
  keytool -genkeypair -v \
    -keystore "$KEYSTORE" \
    -alias "$ALIAS" \
    -keyalg RSA -keysize 2048 -validity 10000 \
    -dname "CN=Release, OU=Mobile, O=ScubaFind, L=Paris, S=IDF, C=FR"
  echo "Keystore créé : $KEYSTORE"
fi

export MYAPP_UPLOAD_STORE_FILE="$KEYSTORE"
export MYAPP_UPLOAD_KEY_ALIAS="$ALIAS"
read -s -p "Keystore password: " MYAPP_UPLOAD_STORE_PASSWORD; echo
read -s -p "Key password:      " MYAPP_UPLOAD_KEY_PASSWORD;   echo
export MYAPP_UPLOAD_STORE_PASSWORD MYAPP_UPLOAD_KEY_PASSWORD

echo "Building RELEASE APK..."
cd android
./gradlew assembleRelease --no-daemon

echo ""
echo "APK : android/app/build/outputs/apk/release/app-release.apk"
