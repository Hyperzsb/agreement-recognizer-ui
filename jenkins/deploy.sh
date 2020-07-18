#!/bin/bash
echo "Executing deploy.sh..."
echo "Start deployment...: "
rm -rf /var/www/ar
mkdir /var/www/ar
cp -R /home/admin/github/agreement-recognizer-ui/dist/* /var/www/ar
echo "Deployment Completed!"
echo "Exit deploy.sh"
