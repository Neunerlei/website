$DOCKER_EXECUTABLE run --rm --interactive --tty \
  --volume "${PROJECT_ROOT_DIR}":/project \
  --user $(id -u):$(id -g) \
  --env YARN_CACHE_FOLDER=/project/.yarn-cache \
  --workdir "/project" \
  ${RESOURCE_CONTAINER_IMAGE} bash
