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
                sh 'npm install'
            }
        }
        stage('Deploy') {
            steps {
                sh 'script/deploy'
            }
        }
        stage('Integration') {
            steps {
                sh 'npm run-script integration-test'
            }
        }
    }
}
