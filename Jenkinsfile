pipeline {
    agent {
        docker {
            image 'node:8.0.0'
            args '--env npm_config_cache=npm-cache'
        }
    }
    stages {
        stage('Build') {
            steps {
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
