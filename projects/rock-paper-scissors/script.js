let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if(((humanChoice == "rock") && (computerChoice == "scissors")) || ((humanChoice == "paper") && (computerChoice == "rock")) || ((humanChoice == "scissors") && (computerChoice == "paper")) ){
        humanScore += 1;
    }
    else if(((humanChoice == "scissors") && (computerChoice == "rock")) || ((humanChoice == "rock") && (computerChoice == "paper")) || ((humanChoice == "paper") && (computerChoice == "scissors"))){
        computerScore += 1;
    }
    else {
        humanScore += 0;
        computerScore += 0;
    }

}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randIndex = Math.floor(Math.random() * 3);
    return choices[randIndex];
}

function getHumanChoice() {
    let choice = prompt("Enter rock, paper, or scissors: ");
    choice = choice.toLowerCase();
    return choice;
}

for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const compputerSelection = getComputerChoice();

    playRound(humanSelection, compputerSelection)
}

console.log("You: ", humanScore, "\nComputer score: ", computerScore);