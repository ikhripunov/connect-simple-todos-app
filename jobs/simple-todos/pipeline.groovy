pipelineJob('testpipeline-build') {
	description('Build test docker image, test and push it to local registry')
	definition {
    	cpsScm {
        scm {
          git('git@github.com:ikhripunov/connect-simple-todos-app.git'){
            node -> node / extensions()
          }
        }
      	scriptPath('jobs/simple-todos/pipelines/Jenkinsfile')
    	}
    }
}