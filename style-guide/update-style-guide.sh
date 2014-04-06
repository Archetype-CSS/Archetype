#!/bin/bash
 
echo "Updating style-guide..."
 
cd ../sass                                     && \
cp -rf base         ../style-guide/sass        && \
cp -rf objects      ../style-guide/sass        && \
cp -rf components   ../style-guide/sass        && \
cp -rf layout       ../style-guide/sass        && \
cp -rf temp         ../style-guide/sass        && \
 
echo "...style-guide successfully updated!"    && \
echo "Rebuilding style-guide site..."          && \
 
cd ../style-docs                               && \
dexy -r
  
