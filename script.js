function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice;
    switch (randomNumber) {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
            break;
    }
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice (rock/paper/scissors): ");
    return humanChoice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();


        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        } else if (humanChoice === 'rock' && computerChoice === 'paper') {
            console.log("You lose! Paper beats Rock.");
            ++computerScore;
        } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
            console.log("You win! Rock beats Scissors.");
            ++humanScore;
        } else if (humanChoice === 'paper' && computerChoice === 'rock') {
            console.log("You win! Paper beats Rock.");
            ++humanScore;
        } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
            console.log("You lose! Scissors beat Paper.");
            ++computerScore;
        } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
            console.log("You lose! Rock beats Scissors.");
            ++computerScore;
        } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            console.log("You win! Scissors beat Paper.");
            ++humanScore;
        }
        
        console.log(humanScore + "/" + computerScore);
    }

    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());    
}