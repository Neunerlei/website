ARG DOCKER_BASE_URL
ARG DOCKER_BASE_IMAGE
ARG DOCKER_BASE_TAG

FROM ${DOCKER_BASE_URL}/${DOCKER_BASE_IMAGE}:${DOCKER_BASE_TAG}

ARG APACHE_WEBROOT

MAINTAINER LABOR.digital <info@labor.digital>

ADD src/. /var/www/html

COPY opt/permissions.sh /opt/permissions.sh
RUN chmod +x /opt/permissions.sh

COPY opt/bootstrap-dev.sh /opt/bootstrap-dev.sh
RUN chmod +x /opt/bootstrap-dev.sh

COPY opt/bootstrap-project.sh /opt/bootstrap-project.sh
RUN chmod +x /opt/bootstrap-project.sh

COPY opt/directories.sh /opt/directories.sh
RUN chmod +x /opt/directories.sh

ENV APACHE_WEBROOT=${APACHE_WEBROOT}