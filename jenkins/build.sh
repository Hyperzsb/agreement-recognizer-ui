#!/bin/bash
echo "Executing build.sh..."
echo "Start building: "
docker run --rm -v /home/admin/github/agreement-recognizer-ui:/usr/src/app -w /usr/src/app node:latest sh -c "npm install && npm run build"
echo "Building Completed!"
echo "Exit build.sh"

