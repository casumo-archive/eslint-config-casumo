#!groovy
try {
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
} catch (err) {
    def error = "${e}";
    error "${error}"
}
