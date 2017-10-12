#!/bin/bash

echo 'I should run through repository list, extract jobs and update them in Jenkins as needed'
jenkins-jobs --conf jjb-config.ini update jobs/meta/meta-job.yml
