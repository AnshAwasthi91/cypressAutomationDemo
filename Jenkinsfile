pipeline {
    agent { dockerfile true }
    stages {
        stage('Build Image') {
            steps {
                sh 'docker build -t cy-amazon-test .'
            }
        }
        stage('List Images'){
            steps{
                sh 'docker image ls'
            }
        }
        stage('Tag Image'){
            steps{
                sh 'docker tag cy-amazon-test ansh27/cy-amazon-test:v1.0.0'
            }
        }
        stage('Run Tests'){
            steps{
                sh 'docker-compose run reg-allure-chrome'
            }
        }
    }
}