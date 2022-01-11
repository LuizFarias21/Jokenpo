const body = document.querySelector('body');
let playerScore = document.querySelector('.player.score');
let computerScore = document.querySelector('.computer.score');
let result = document.querySelector('.result');
let boxPlayer = document.querySelector('.player-choice')
let boxComputer = document.querySelector('.computer-choice');

let playerScoreValue = 0;
let computerScoreValue = 0;

function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.trunc((Math.random() * 3));
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {

    console.log(`${playerSelection} Vs ${computerSelection}`);

    boxPlayer.innerHTML = `<i class="fas fa-hand-${playerSelection} medium-i">`;
    boxComputer.innerHTML = `<i class="fas fa-hand-${computerSelection} medium-i">`;
    // CÓDIGO DAS ESCOLHAS VEM AQUI
    if (playerSelection == 'rock' && computerSelection == 'paper'
        || playerSelection == 'paper' && computerSelection == 'scissors'
        || playerSelection == 'scissors' && computerSelection == 'rock') {

        playerScore.textContent = playerScoreValue;
        computerScore.textContent = ++computerScoreValue;
        result.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;

    } else if (playerSelection == computerSelection) {
        result.textContent = `It is a tie!`;

    } else {
        playerScore.textContent = ++playerScoreValue;
        computerScore.textContent = computerScoreValue;
        result.textContent = `You win! ${playerSelection} beats ${computerSelection}`;

    }

}

/* function game() {

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
} */

const btnRock = document.querySelector('.circle-btn.rock');
const btnPaper = document.querySelector('.circle-btn.paper');
const btnScissor = document.querySelector('.circle-btn.scissor');
const score = document.querySelector('.score');

btnRock.addEventListener('click', () => {
    const playerSelection = 'rock';
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
});

btnPaper.addEventListener('click', () => {
    const playerSelection = 'paper';
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
});

btnScissor.addEventListener('click', () => {
    const playerSelection = 'scissors';
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
});
