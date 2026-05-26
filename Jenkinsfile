pipeline {
    agent any

    environment {
        IMAGE_NAME = "samdeeper-toots"
        CONTAINER_NAME = "samdeeper-toots-container"
    }

    tools {
        nodejs 'NodeJS'
    }

    triggers {
        githubPush()
    }

    stages {

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'CI=true npm test -- --watchAll=false --coverage'
            }
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
                        -Dsonar.projectName=samdeeper-toots \
                        -Dsonar.sources=. \
                        -Dsonar.sourceEncoding=UTF-8 \
                        -Dsonar.javascript.lcov.reportPaths=coverage/lcov.info \
                        -Dsonar.exclusions=node_modules/**,coverage/**,build/**
                    '''
                }
            }
        }

        stage('Quality Gate') {
            steps {
                timeout(time: 2, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build --no-cache -t $IMAGE_NAME .'
            }
        }

        stage('Stop Existing Container') {
            steps {
                sh '''
                    docker stop $CONTAINER_NAME || true
                    docker rm $CONTAINER_NAME || true
                '''
            }
        }

        stage('Run Docker Container') {
            steps {
                sh '''
                    docker run -d \
                    --name $CONTAINER_NAME \
                    -p 3051:80 \
                    $IMAGE_NAME
                '''
            }
        }

        stage('Deploy to Render & Netlify') {
            steps {
                withCredentials([
                    string(credentialsId: 'RENDER_API_KEY', variable: 'RENDER_API_KEY'),
                    string(credentialsId: 'SERVICE_ID', variable: 'SERVICE_ID'),
                    string(credentialsId: 'NETLIFY_HOOK', variable: 'NETLIFY_HOOK')
                ]) {
                    sh '''
                        # Trigger Render deploy
                        curl -X POST \
                        -H "Authorization: Bearer $RENDER_API_KEY" \
                        -H "Content-Type: application/json" \
                        "https://api.render.com/v1/services/$SERVICE_ID/deploys"

                        # Trigger Netlify deploy hook
                        curl -X POST \
                        -H "Content-Type: application/json" \
                        -d '{}' \
                        "$NETLIFY_HOOK"
                    '''
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline execution finished.'
        }
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}