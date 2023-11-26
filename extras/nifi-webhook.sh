#!/bin/sh

# ./script.sh <action> <url to post to>

if [ $1 == 'runOnRecordSegmentComplete' ]; 
then
    echo "getting segment duration"
    export DURATION=`ffprobe -i $MTX_SEGMENT_PATH -show_entries format=duration -v quiet -of csv="p = 0"`
    echo "Sending to nifi"
    echo \
    `wget -qO - --header "Content-type: applicaion/json" --post-data \
    "{\"streamPath\": \"$MTX_PATH\",\"segmentPath\": \"$MTX_SEGMENT_PATH\",\"segmentDuration\": \"$DURATION\"}" \
    "$2?action=runOnRecordSegmentComplete"`

elif [ $1 == 'runOnReady' ];
then
    echo "Sending stream online to nifi"
    echo \
    `wget -qO - --header "Content-type: applicaion/json" --post-data \
    "{\"streamPath\": \"$MTX_PATH\",\"sourceId\": \"$MTX_SOURCE_ID\",\"sourceType\": \"$MTX_SOURCE_TYPE\",\"rtspPort\": \"$RTSP_PORT\"}" \
    "$2?action=runOnReady"`
elif [ $1 == 'runOnNotReady' ];
then
    echo "Sending stream offline to nifi"
    echo \
    `wget -qO - --header "Content-type: applicaion/json" --post-data \
    "{\"streamPath\": \"$MTX_PATH\",\"sourceId\": \"$MTX_SOURCE_ID\",\"sourceType\": \"$MTX_SOURCE_TYPE\",\"rtspPort\": \"$RTSP_PORT\"}" \
    "$2?action=runOnNotReady"`
fi


# "https://nifi2.booneworld.com/api/mediamtx/webhook"