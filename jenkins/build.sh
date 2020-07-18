#!/bin/bash
echo "Executing build.sh..."
echo "Start building: "
docker run --rm -v ../:/usr/src/app -w /usr/src/app node:latest sh -c "npm install && npm run install"
echo "Building Completed!"
echo "Exit build.sh"

