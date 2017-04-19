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
        stage('Finish') {
            echo("Done. KTKSBAI!")
        }
    }
} catch (err) {
    def error = "${e}";
    error "${error}"
}
