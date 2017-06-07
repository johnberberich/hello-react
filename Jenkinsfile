pipeline {
    agent {
        docker {
            image 'node:8.0.0'
            args '--env npm_config_cache=npm-cache;HOME=.'
        }
    }
    stages {
        stage('Build') {
            steps {
                echo "$(whoami)"
                echo "$(pwd)"
                echo "$(ls -al)"
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
