pipeline {
    agent {
        docker {
            image 'node:8.0.0'
        }
    }
    stages {
        stage('Build') {
            steps {
                echo '$(whoami)'
                echo '$(pwd)'
                echo '$(ls -al)'
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
