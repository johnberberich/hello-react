pipeline {
    agent { docker 'node:8.0' }
    stages {
        stage('build') {
            steps {
                sh 'npm install'
            }
        }
        stage('test') {
            steps{
                sh 'npm test'
            }
        }
    }
}
