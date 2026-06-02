
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
            resultString.textContent= `Tie. You picked ${human} and they picked ${computer}`
            resultContainer.appendChild(resultString);
        }
        if (computer == "paper") {
            resultString.textContent = `You lose. You picked ${human} and they picked ${computer}`
            resultContainer.appendChild(resultString);
            computer_score += 1
        }
        if (computer == "scissors") {
            resultString.textContent = `You win. You picked ${human} and they picked ${computer}`
            resultContainer.appendChild(resultString);
            human_score += 1
        }
    }
    if (human == "paper") {
        if (computer == "rock"){
            resultString.textContent = `You win. You picked ${human} and they picked ${computer}`
            resultContainer.appendChild(resultString);
            human_score += 1
        }
        if (computer == "paper") {
            resultString.textContent = `Tie. You picked ${human} and they picked ${computer}`
            resultContainer.appendChild(resultString);
        }
        if (computer == "scissors") {
            resultString.textContent = `You lose. You picked ${human} and they picked ${computer}`
            resultContainer.appendChild(resultString);
            computer_score += 1
        }
    }
    if (human == "scissors") {
        if (computer == "rock"){
            resultString.textContent = `You lose. You picked ${human} and they picked ${computer}`
            resultContainer.appendChild(resultString);
            computer_score += 1
        }
        if (computer == "paper") {
            resultString.textContent = `You win. You picked ${human} and they picked ${computer}`
            resultContainer.appendChild(resultString);
            human_score += 1
        }
        if (computer == "scissors") {
            resultString.textContent = `Tie. You picked ${human} and they picked ${computer}`
            resultContainer.appendChild(resultString);
        }
    }
}
function updateScore(player, computer) {
    humanScore.textContent = "Human Score: " + player;
    computerScore.textContent = "Computer Score: " + computer;
    scoreContainer.appendChild(humanScore);
    scoreContainer.appendChild(computerScore);
}
function resetScore() {
    const resetButton = document.createElement("button", "reset");
    resetButton.textContent = "reset";
    winnerContainer.appendChild(resetButton);
    resetButton.addEventListener("click", () => {
        updateScore(0,0);
        human_score = 0
        computer_score = 0
        winnerString.textContent = "";
        winnerContainer.appendChild(winnerString);
        resultString.textContent = "Click one of the three buttons to start RPS";
        resultContainer.appendChild(resultString);
        buttonContainer.style.display = "block";
        resetButton.remove();
    });
}
function checkScore(player, computer){
    if(player >= 5) {
        winnerString.textContent = "Human won the first to five!"
        winnerContainer.appendChild(winnerString);
        buttonContainer.style.display = "none";
        resetScore();
    }
    if(computer >= 5) {
        winnerString.textContent = "Computer won the first to five!"
        winnerContainer.appendChild(winnerString);
        buttonContainer.style.display = "none";
        resetScore()
    }
}
var human_score = 0
var computer_score = 0
const buttonContainer = document.querySelector("#btn-container");
const rockButton = document.querySelector("#rock-btn");
rockButton.addEventListener("click", () => {
    let computer_choice = getComputerChoice();
    playRound("rock", computer_choice);
    updateScore(human_score, computer_score)
    checkScore(human_score, computer_score)
});
const paperButton = document.querySelector("#paper-btn");
paperButton.addEventListener("click", () => {
    let computer_choice = getComputerChoice();
    playRound("paper", computer_choice);
    updateScore(human_score, computer_score)
    checkScore(human_score, computer_score)
});
const scissorsButton = document.querySelector("#scissors-btn");
scissorsButton.addEventListener("click", () => {
    let computer_choice = getComputerChoice();
    playRound("scissors", computer_choice);
    updateScore(human_score, computer_score)
    checkScore(human_score, computer_score)
});
const scoreContainer = document.querySelector("#score-container");
const humanScore = document.createElement("div");
const computerScore = document.createElement("div");
const resultContainer = document.querySelector("#result-container");
const resultString = document.createElement("div");
resultString.textContent = "Click one of the three buttons to start RPS"
resultContainer.appendChild(resultString);
const winnerContainer = document.querySelector("#winner-container");
const winnerString = document.createElement("div");