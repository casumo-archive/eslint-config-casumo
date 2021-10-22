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
        stage("Install node and yarn") {
            bash "set +x; nvm install && nvm alias default \$(node -v)"
            bash "npm install --global yarn"
        }
        stage("Install dependencies") {
            bash "yarn install"
        }
        stage("Tests") {
            bash "yarn test"
        }
    }
} catch (ex) {
    def errorMessage = "[FAILURE]  💩  😭  😱  ${env.JOB_NAME} - Build #${env.BUILD_NUMBER} - ${env.BUILD_URL}console"
    slackSend channel: "#frontend,", color: '#f05e5e', message: errorMessage
    throw ex
}

String bash(String command) {
    return sh(script: """#!/usr/bin/env bash
    source ~/.bash_profile 2> /dev/null
    ${command}
    """, 
    returnStdout: true,
    label: "${command}")
}
