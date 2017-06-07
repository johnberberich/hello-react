pipeline {
    agent {
        docker {
            image 'node:8.0.0'
            args '--env HOME=.'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'echo $HOME; pwd; ls -al'
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }
}
