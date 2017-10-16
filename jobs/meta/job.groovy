import groovy.io.FileType

job('meta-jjb') {
  scm {
    git('git@github.com:ikhripunov/connect-simple-todos-app.git')
  }
  triggers {
    scm('H/15 * * * *')
  }
  steps {
    def dir = new File(".")
    dir.eachFile (FileType.FILES) { file ->
      println file.path
    }
    dsl {
      external('job.groovy')
      removeAction('DELETE')
    }
  }
}