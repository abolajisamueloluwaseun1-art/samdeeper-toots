pipeline {
    agent any

    triggers {
        githubPush()
    }

stage('SonarQube Analysis') {
            environment {
                SCANNER_HOME = tool 'SonarScanner'
            }

            steps {
                withSonarQubeEnv('SonarQube') {
                    sh '''
                        $SCANNER_HOME/bin/sonar-scanner \
                        -Dsonar.projectKey=samdeeper-toots \
                        -Dsonar.sources=. \
                        -Dsonar.sourceEncoding=UTF-8
                    '''
                }
            }
        }

    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:18-alpine'
                    reuseNode true
                }
            }

            steps {
                sh '''
                ls -la
                node --version
                npm --version
                npm ci --cache /tmp/.npm-cache
                npm run build
                ls -la
                '''
            }
        }

        stage('Test') {
            agent {
                docker {
                    image 'node:18-alpine'
                    reuseNode true
                }
            }

            steps {
                sh '''
                test -f build/index.html
                CI=true npm test -- --watchAll=false --reporters=default --reporters=jest-junit
                '''
            }
        }

        

        stage('Deploy to render') {

            agent {
                docker {
                    image 'node:18'
                    reuseNode true
                }
            }

            steps {
                withCredentials([string(credentialsId: 'NETLIFY_HOOK', variable: 'NETLIFY_HOOK')]) {
                    sh '''
                    curl -X POST -d {} https://api.netlify.com/build_hooks/6a1070ba8c5b42d257bb1922
                    '''
                }
            }
        }
    }

    post {

        success {
            echo 'Pipeline completed - app deployed to Render!'
        }

        failure {
            echo 'Pipeline failed - deployment skipped.'
        }
    }
}