// Defines the Jenkins Pipeline
pipeline {

      // Tells Jenkins to run this pipeline on any available agent/node
    agent any

    triggers {

         // Automatically trigger the pipeline when a GitHub push happens
        // GitHub Webhook → Jenkins → Pipeline starts
        githubPush()
    }

    // Contains all the stages of our CI process
    stages {

        stage('Checkout') {
            steps {

                 // Gets the latest code from the Git repository
                // "scm" means Jenkins uses the Git repository
                // configured in the Pipeline job
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {


                // Installs all Node.js dependencies from package-lock.json
                // npm ci is recommended for CI/Jenkins environments
                bat 'npm ci'
            }
        }

        stage('Install Playwright') {
            steps {

                 // Installs the Chromium browser required by Playwright
                // "bat" is used because Jenkins is running on Windows
                bat 'npx playwright install chromium'
            }
        }

        stage('Run Playwright Tests') {
            steps {

                // Runs all Playwright test cases
                // Jenkins will mark the build as SUCCESS if tests pass
                // and FAILURE if the command returns an error
                bat 'npx playwright test'
            }
        }
    }

    post {

        // "always" means this runs whether tests PASS or FAIL
        always {

            // Saves the Playwright HTML report as a Jenkins artifact
            //
            // playwright-report/** means:
            // Take everything inside the playwright-report folder
            //
            // allowEmptyArchive: true means:
            // Don't fail the Jenkins build if the report folder is empty
            archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
        }

        success {
            echo 'Playwright tests passed!'
        }

        failure {
            echo 'Playwright tests failed!'
        }
    }
}

// test jenkins webhook and jenkinsfile
// test automatic Jenkins build