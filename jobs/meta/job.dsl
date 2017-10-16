import groovy.io.FileType

def list = []

def dir = new File("./jobs")
dir.eachFileRecurse (FileType.FILES) { file ->
  list << file
}

list.each {
  println it.path
}

// pipelineJob('testpipeline-build') {
// 	description('Build test docker image, test and push it to local registry')
// 	definition {
//     	cpsScm {
//       	scm {
//           git {
//             branch('origin/master')
//             remote {
//               url('git@github.com:ikhripunov/connect-simple-todos-app.git')
//               credentials('jenkins-clearpoint')
//             }
//           }
//       	}
//       	scriptPath('pipelines/Jenkinsfile')
//     	}
//     }
// }