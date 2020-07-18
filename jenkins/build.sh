#!/bin/bash
echo " - Executing build.sh..."
work_directory="/home/admin/github/agreement-recognizer-ui"
echo "- Work directory is: $work_directory"
echo "- Start building..."
if docker run --rm -v $work_directory:/usr/src/app -w /usr/src/app node:latest sh -c "npm install && npm run build"; then
  echo " - Building completed!"
else
  echo " - Building failed!"
fi
echo " - Exit build.sh"
