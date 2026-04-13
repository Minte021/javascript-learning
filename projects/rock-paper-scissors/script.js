function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randIndex = Math.floor(Math.random() * 3);
    return choices[randIndex];
}