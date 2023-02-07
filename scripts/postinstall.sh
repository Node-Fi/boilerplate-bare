#!/bin/bash
set -eo pipefail

# Specify the required global NPM packages.
GLOBAL_NPM_SCRIPTS=( "patch-package" "rn-nodeify" )
GLOBAL_NPM_MISSING=()

# For each package, add it to the GLOBAL_NPM_MISSING array if it is not globally
# available using the canonical cross-platform method.
for script in ${GLOBAL_NPM_SCRIPTS[@]}
do
  if [ ! -x "$(command -v $script)" ]; then
    GLOBAL_NPM_MISSING+=($script)
  fi
done

# If there are missing global NPM packages, install them.
if [ ${#GLOBAL_NPM_MISSING[@]} -gt 0 ]
then
  echo ""
  echo "Some global NPM packages are required. Installing:"
  echo "${GLOBAL_NPM_MISSING[@]}"
  echo ""
  yarn global add ${GLOBAL_NPM_MISSING[@]}
fi


rn-nodeify --install 'crypto,buffer,react-native-randombytes,vm,stream,http,https,os,url,fs,process' --hack --yarn
echo "✅ rn-nodeify packages hacked succesfully"

# Apply patches.
patch-package
echo "✅ All patches applied"