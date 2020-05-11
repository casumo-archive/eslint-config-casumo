#!groovy
try {
    properties([
        pipelineTriggers([
            [
                $class: 'hudson.triggers.TimerTrigger',
                spec: "H 09 */1 * *"
            ]
        ])
    ])
    node("js-builder") {
        stage("Checkout") {
            checkout scm
        }
        stage("Install dependencies") {
            sh("yarn install")
        }
        stage("Tests") {
            sh("yarn test")
        }
    }
} catch (ex) {
    def errorMessage = "[FAILURE]  💩  😭  😱  ${env.JOB_NAME} - Build #${env.BUILD_NUMBER} - ${env.BUILD_URL}console"
    slackSend channel: "#toolingtest-alerts,", color: '#f05e5e', message: errorMessage
    throw ex
}
