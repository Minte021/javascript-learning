let humanScore = 0;
let computerScore = 0;


function playGame(button) {
    let choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    let humanChoice = button.id;

    let youScore = document.getElementById("you");
    youScore.innerText = `You: => ${humanChoice} & score ${humanScore} `;
    let computerScoreElement = document.getElementById("computerChoice");
    computerScoreElement.innerText = `Computer => ${computerChoice} & scores ${computerScore} `;
    if (humanChoice === computerChoice) {
        humanScore += 0;
        computerScore += 0;
    }

    else if ((humanChoice === "rock" && computerChoice === "scissors") ||
             (humanChoice === "paper" && computerChoice === "rock") ||
             (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
    }
    else {
        computerScore++;
    }
}

let clearButton = document.getElementById("clear-all");
clearButton.addEventListener("click", function() {
    humanScore = 0;
    computerScore = 0;
    let youScore = document.getElementById("you");
    youScore.innerText = `You: 0`;
    let computerScoreElement = document.getElementById("computerChoice");
    computerScoreElement.innerText = `Computer: 0`;
});