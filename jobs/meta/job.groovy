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
    dsl {
      external('jobs/**/*.groovy')
      removeAction('DELETE')
    }
  }
}