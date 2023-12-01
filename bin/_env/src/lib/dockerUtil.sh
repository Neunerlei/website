determineDockerExecutable(){
  local dockerExecutable=$(which docker)
  if [[ ${dockerExecutable} ]]; then
    echo ${dockerExecutable}
    return
  fi
  local podmanExecutable=$(which podman)
  if [[ ${podmanExecutable} ]]; then
    echo ${podmanExecutable}
    return
  fi
  echo "Sorry, but I did not find docker or podman on your system" >&2
  exit 1
}
