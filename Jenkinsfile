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
    node("nvm-builder") {
        stage("Checkout") {
            checkout scm
        }
        stage("Install nvm") {
            shell("set +x; nvm install")
        }
        stage("Install yarn") {
            shell("npm install --global yarn")
        }
        stage("Install dependencies") {
            shell("yarn install")
        }
        stage("Tests") {
            shell("yarn test")
        }
    }
} catch (ex) {
    def errorMessage = "[FAILURE]  💩  😭  😱  ${env.JOB_NAME} - Build #${env.BUILD_NUMBER} - ${env.BUILD_URL}console"
    slackSend channel: "#frontend,", color: '#f05e5e', message: errorMessage
    throw ex
}

def shell(cmd) {
    sh """
    set +x
    cd ..
    export NVM_DIR="$HOME/.nvm"
    . ~/.nvm/nvm.sh
    cd -
    set -x
    ${cmd}"""
}
