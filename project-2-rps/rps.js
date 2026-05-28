
function getComputerChoice() {
    let a = Math.random
    if (a <= .33) {
        return "rock"
    }
    if (a <= .66) {
        return "paper"
    }
    if (a > .66) {
        return "scissors"
    }
}

console.log(getComputerChoice)