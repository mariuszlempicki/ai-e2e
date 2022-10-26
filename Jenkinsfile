pipeline {
  agent {
    label "jenkins-agent"
  }
  stages {
    stage('tests list') {
      steps {
        sh 'npx playwright test --list'
      }
    }
    stage('run tests') {
      steps {
        sh '''
          pwd
          npx playwright test
        '''
      }
      post {
        always {
          archiveArtifacts(artifacts: 'screen-*.png', followSymlinks: false)
        }
      }
    }
  }
}
