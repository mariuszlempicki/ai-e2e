pipeline {
  agent {
    docker {
      image 'mcr.microsoft.com/playwright:v1.17.2-focal'
    }
  }
  stages {
    stage('install playwright') {
      steps {
        sh '''
          pwd
          npm i -D @playwright/test
          npx playwright install
        '''
      }
    }
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