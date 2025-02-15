pipeline {
    agent any

    parameters {
        string(name: 'action', defaultValue: 'create', description: 'Specify the action (create/update/delete)')
        booleanParam(name: 'SKIP_SONARQUBE', defaultValue: false, description: 'Skip SonarQube Analysis')
    }

    environment {
        SONARQUBE_URL = "http://http://172.174.89.20/:9000" // Update with your SonarQube URL
        SONARQUBE_PROJECT_KEY = "GPTechnology"
        SONARQUBE_CREDENTIALS_ID = "sonarqube-api" // SonarQube API key stored in Jenkins Credentials
        DOCKER_IMAGE = "prathap259/gptechnology"
        DOCKER_TAG = "latest"
        DOCKER_CREDENTIALS = "docker" // Docker Hub credentials stored in Jenkins
    }

    stages {

        stage('Clone Repository') {
            when { expression { params.action == 'create' } }
            steps {
                git branch: 'main', url: 'https://github.com/prathapk259/GPTechnology.git'
            }
        }

        stage('Static Code Analysis: SonarQube') {
            when { expression { !params.SKIP_SONARQUBE } }  // Skip if true
            steps {
                script {
                    withCredentials([string(credentialsId: 'sonarqube-api', variable: 'SONAR_TOKEN')]) {
                        sh """
                            sonar-scanner \
                            -Dsonar.projectKey=${SONARQUBE_PROJECT_KEY} \
                            -Dsonar.sources=. \
                            -Dsonar.host.url=${SONARQUBE_URL} \
                            -Dsonar.login=${SONAR_TOKEN}
                        """
                    }
                }
            }
        }

        stage('Quality Gate Status Check: SonarQube') {
            when { expression { params.SKIP_SONARQUBE == false } }
            steps {
                script {
                    withCredentials([string(credentialsId: 'sonarqube-api', variable: 'SONAR_TOKEN')]) {
                        timeout(time: 5, unit: 'MINUTES') {
                            waitUntil {
                                def response = sh(script: """
                                    curl -s -u ${SONAR_TOKEN}: ${SONARQUBE_URL}/api/qualitygates/project_status?projectKey=${SONARQUBE_PROJECT_KEY} | jq -r .projectStatus.status
                                """, returnStdout: true).trim()

                                echo "Quality Gate Status: ${response}"
                                return (response == "OK")
                            }
                        }
                    }
                }
            }
        }

        stage('Build Docker Image') {
            when { expression { params.action == 'create' } }
            steps {
                sh "docker build -t $DOCKER_IMAGE:$DOCKER_TAG ."
		sh "docker tag $DOCKER_IMAGE:$DOCKER_TAG prathap259/$DOCKER_IMAGE:$DOCKER_TAG"
            }
        }

        stage('Push Docker Image to Docker Hub') {
            when { expression { params.action == 'create' } }
            steps {
                withDockerRegistry([credentialsId: DOCKER_CREDENTIALS, url: ""]) {
                    sh "docker push prathap259/$DOCKER_IMAGE:$DOCKER_TAG"
                }
            }
        }

        stage('Deploy Container') {
            when { expression { params.action == 'create' } }
            steps {
                sh "docker stop gptechnology-container || true"
                sh "docker rm gptechnology-container || true"
                sh "docker run -d -p 4173:4173 --name gptechnology-container $DOCKER_IMAGE:$DOCKER_TAG"
            }
        }
    }

    post {
        success {
            echo "✅ Build and Deployment Successful!"
        }
        failure {
            echo "❌ Build or Deployment Failed!"
        }
    }
}

