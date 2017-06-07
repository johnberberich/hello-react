pipeline {
    agent {
        docker {
            image 'node:8.0.0'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'pwd'
                sh 'ls -al'
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
