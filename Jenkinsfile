pipeline {
    agent {
        docker {
            image 'node:8.0.0'
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
