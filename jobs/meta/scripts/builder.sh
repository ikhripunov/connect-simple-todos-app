#!/bin/bash

while IFS= read -r line; do
	echo 'Updating $line';
    jenkins-jobs --conf jjb-config.ini update "$line";
done < < ( find ./jobs -maxdepth 2 -type f -name "*.yml" )
