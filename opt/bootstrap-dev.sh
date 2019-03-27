#!/bin/bash
# ORDER: Called BEFORE bootstrap-project.sh
# This file is used in >>DEV<< context to simulate build steps we execute for production

# Install composer dependencies
if [ -f "/var/www/html/composer.json" ]; then
	export COMPOSER_PROCESS_TIMEOUT=1200
	cd /var/www/html
	composer install
fi
