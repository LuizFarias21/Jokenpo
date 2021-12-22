function computerPlay() {
    const choices = ['rock', 'paper', 'scissor'];
    const randomIndex = Math.trunc((Math.random() * 3));
    return choices[randomIndex];
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    console.log(`${playerSelection} Vs ${computerSelection}`);

    if (playerSelection == 'rock' && computerSelection == 'paper'
        || playerSelection == 'paper' && computerSelection == 'scissor'
        || playerSelection == 'scissor' && computerSelection == 'rock') {

        console.log(`Player: ${playerScore}, Computer: ${++computerScore}`);
        return console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    } else if (playerSelection == computerSelection) {
        return console.log('It is a tie!');
    } else {
        console.log(`Player: ${++playerScore}, Computer: ${computerScore}`);
        return console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    }
}

function game() {

    for (let i = 1; i <= 5; i++) {

        const playerSelection = prompt('Choose rock, paper or scissor:');
        const computerSelection = computerPlay();

        playRound(playerSelection, computerSelection);
    }
    
    console.log('=======================================================');

    if (playerScore > computerScore) {
        playerScore, computerScore = 0;
        return 'PLAYER WINS 🏆️';
    } else {
        playerScore, computerScore = 0;
        return 'COMPUTER WINS 🏆️';
    }

    
}