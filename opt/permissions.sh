#!/bin/bash
# Set directory permissions to your needs!
#
# This script is called every time you execute composer install, but also when the build.sh file is executed
# So only do things which belong into the dockerimage.

# Let the php write itself in dev context
# if [ "$PROJECT_ENV" = "dev" ]; then
# 	chmod -R 777 "$APACHE_WEBROOT";
# fi

# Example:
# chmod g+x bin/cake
# chmod g+w tmp
# chmod g+w var/sessions
# chmod -R g+w /var/www/html/my_folder_in_root
