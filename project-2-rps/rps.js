
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
    let c = b.toLowerCase()
    return c
}

function playRound(human, computer) {
    let answer = ""
    if (human == "rock") {
        if (computer == "rock"){
            console.log(`Tie. You picked ${human} and they picked ${computer}`)
        }
        if (computer == "paper") {
            console.log(`You lose. You picked ${human} and they picked ${computer}`)
            computer_score += 1
        }
        if (computer == "scissors") {
            console.log(`You win. You picked ${human} and they picked ${computer}`)
            human_score += 1
        }
    }
    if (human == "paper") {
        if (computer == "rock"){
            console.log(`You win. You picked ${human} and they picked ${computer}`)
            human_score += 1
        }
        if (computer == "paper") {
            console.log(`Tie. You picked ${human} and they picked ${computer}`)
        }
        if (computer == "scissors") {
            console.log(`You lose. You picked ${human} and they picked ${computer}`)
            computer_score += 1
        }
    }
    if (human == "scissors") {
        if (computer == "rock"){
            console.log(`You lose. You picked ${human} and they picked ${computer}`)
            computer_score += 1
        }
        if (computer == "paper") {
            console.log(`You win. You picked ${human} and they picked ${computer}`)
            human_score += 1
        }
        if (computer == "scissors") {
            console.log(`Tie. You picked ${human} and they picked ${computer}`)
        }
    }
}
function updateScore(player, computer) {
    humanScore.textContent = "Human Score: " + player;
    computerScore.textContent = "Computer Score: " + computer;
    scoreContainer.appendChild(humanScore);
    scoreContainer.appendChild(computerScore);
}
var human_score = 0
var computer_score = 0
const rockButton = document.querySelector("#rock-btn");
rockButton.addEventListener("click", () => {
    let computer_choice = getComputerChoice();
    playRound("rock", computer_choice);
    updateScore(human_score, computer_score)
});
const paperButton = document.querySelector("#paper-btn");
paperButton.addEventListener("click", () => {
    let computer_choice = getComputerChoice();
    playRound("paper", computer_choice);
    updateScore(human_score, computer_score)
});
const scissorsButton = document.querySelector("#scissors-btn");
scissorsButton.addEventListener("click", () => {
    let computer_choice = getComputerChoice();
    playRound("scissors", computer_choice);
    updateScore(human_score, computer_score)
});
const scoreContainer = document.querySelector("#score-container");
const humanScore = document.createElement("div");
const computerScore = document.createElement("div");
// function playGame() {
// while(human_score < 2 && computer_score < 2) { // bo3
//     let computer_choice = getComputerChoice()
//     let human_choice = getHumanChoice()
//     playRound (human_choice, computer_choice)
// }

// if(human_score > computer_score) {
//     console.log("you win. awesome dude.")
// }
// else {
//     console.log("you lose. lol.")
// }
// }


// playGame()