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
    node("ecs") {
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
    slackSend channel: "#frontend,", color: '#f05e5e', message: errorMessage
    throw ex
}
