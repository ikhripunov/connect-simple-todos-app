job('meta-jjb') {
  scm {
    git('git@github.com:ikhripunov/connect-simple-todos-app.git'){
      node -> node / extensions()
    }
  }
  triggers {
    scm('H/15 * * * *')
  }
  steps {
    def dir = new File(".")
    dir.eachFile (groovy.io.FileType.FILES) { file ->
      println file.path
    }
    dsl {
      external('job.groovy')
      removeAction('DELETE')
    }
  }
}