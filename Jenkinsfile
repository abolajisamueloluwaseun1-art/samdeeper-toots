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
                CI=true npm test -- --watchAll=false --reporters=default --reporters=jest-junit
                '''
            }
        }

        stage('SonarQube Analysis') {
            agent {
                docker {
                    image 'sonarsource/sonar-scanner-cli:latest'
                    reuseNode true
                }
            }

            steps {
                withSonarQubeEnv('SonarQube') {
                    sh '''
                    export SONAR_USER_HOME="$WORKSPACE/.sonar"
                    mkdir -p "$SONAR_USER_HOME"
                    sonar-scanner \
                    -Dproject.settings=src/sonar-project.properties
                    '''
                }
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

        success {
            echo 'Pipeline completed - app deployed to Netlify!'
        }

        failure {
            echo 'Pipeline failed - deployment skipped.'
        }
    }
}
