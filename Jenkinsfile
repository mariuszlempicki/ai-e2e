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
          cat /etc/os-release
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
          cat /etc/os-release
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
