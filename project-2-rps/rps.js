
function getComputerChoice() {
    let a = Math.random()
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

function getHumanChoice() {
    let b = prompt("select rock, paper or scissors")
    return b
}

let computer_choice = getComputerChoice()
let human_choice = getHumanChoice()
console.log(computer_choice)
console.log(human_choice)