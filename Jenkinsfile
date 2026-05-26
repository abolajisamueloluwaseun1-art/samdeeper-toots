pipeline {
    agent any

    triggers {
        githubPush()
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
                CI=true JEST_JUNIT_OUTPUT_DIR=test-results JEST_JUNIT_OUTPUT_NAME=junit.xml npm test -- --watchAll=false --reporters=default --reporters=jest-junit
                '''
            }
        }

        stage('Deploy to Netlify') {

            agent {
                docker {
                    image 'node:18'
                    reuseNode true
                }
            }

            steps {
                withCredentials([string(credentialsId: 'NETLIFY_HOOK', variable: 'NETLIFY_HOOK')]) {
                    sh '''
                    curl --fail --silent --show-error -X POST -d '{}' "$NETLIFY_HOOK"
                    '''
                }
            }
        }
    }

    post {

        always {
            junit 'test-results/junit.xml'
        }

        success {
            echo 'Pipeline completed - app deployed to Netlify!'
        }

        failure {
            echo 'Pipeline failed - deployment skipped.'
        }
    }
}
