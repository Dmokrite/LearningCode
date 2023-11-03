const options = ["rock", "paper", "scissors", "lizard", "spock"];

const winMessage = "Vous avez gagné !";
const loseMessage = "Vous avez perdu.";
const drawMessage = "Match nul.";

function computerPlay() {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return drawMessage;
    }
    if (
        (playerSelection === "rock" && (computerSelection === "scissors" || computerSelection === "lizard")) ||
        (playerSelection === "paper" && (computerSelection === "rock" || computerSelection === "spock")) ||
        (playerSelection === "scissors" && (computerSelection === "paper" || computerSelection === "lizard")) ||
        (playerSelection === "lizard" && (computerSelection === "spock" || computerSelection === "paper")) ||
        (playerSelection === "spock" && (computerSelection === "scissors" || computerSelection === "rock"))
    ) {
        return winMessage;
    }
    return loseMessage;
}

const buttons = document.querySelectorAll(".option");
const resultDisplay = document.getElementById("result");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const playerSelection = button.id;
        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection);
        resultDisplay.textContent = `Vous avez choisi ${playerSelection}. L'ordinateur a choisi ${computerSelection}. ${result}`;
    });
});
