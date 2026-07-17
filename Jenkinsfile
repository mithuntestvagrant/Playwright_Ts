pipeline {

    agent any

    environment {
        PATH = "/opt/homebrew/bin:${env.PATH}"
    }

    parameters {
        string(
            name: 'TEST_FILE',
            defaultValue: 'tests/saucedemo.spec.ts',
            description: 'tests/saucedemo.spec.ts'
        )
    }

    stages {

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                sh 'npx playwright install'
            }
        }

        stage('Run Tests') {
            steps {
                sh "npx playwright test ${params.TEST_FILE} --reporter=html"
            }
        }
    }

    post {
        always {
            publishHTML(target: [
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright HTML Report'
            ])
        }
    }
}