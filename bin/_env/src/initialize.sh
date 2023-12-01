## Code here runs inside the initialize() function
## Use it for anything that you need to run before any other function, like
## setting environment variables:
## CONFIG_FILE=settings.ini
##
## Feel free to empty (but not delete) this file.

PROJECT_ROOT_DIR=$(realpath ./${BASH_SOURCE%/*}/..)

loadEnvFile

OS_TYPE=$(determineHostType)

if [[ $OS_TYPE == 'unsupported' ]]; then
  echo 'Sorry, but we currently don''t support your operating system!'
  exit 1
fi

OS_PLATFORM=$(determineOsPlatform)

DOCKER_EXECUTABLE=$(determineDockerExecutable)
