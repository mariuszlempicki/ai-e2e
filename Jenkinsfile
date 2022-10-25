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
          whoami
          //npm i -D @playwright/test
          npx playwright install
          npx playwright install-deps
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
          whoami
          npx playwright test
        '''
      }
      post {
        success {
          archiveArtifacts(artifacts: 'screen-*.png', followSymlinks: false)
          sh 'rm -rf screen-*.png'
        }
      }
    }
  }
}
