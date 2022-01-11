const section = document.querySelector('section');

let playerScore = document.querySelector('.player.score');
playerScore.style.transition = '0.3s';

let computerScore = document.querySelector('.computer.score');
computerScore.style.transition = '0.3s';

let result = document.querySelector('.result');

let boxPlayer = document.querySelector('.player-choice')
let boxComputer = document.querySelector('.computer-choice');

const audio = document.querySelector('audio');

let playerScoreValue = 0;
let computerScoreValue = 0;

function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.trunc((Math.random() * 3));
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {

    boxPlayer.innerHTML = `<i class="fas fa-hand-${playerSelection} medium-i">`;
    boxComputer.innerHTML = `<i class="fas fa-hand-${computerSelection} medium-i">`;

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

const btnRock = document.querySelector('.circle-btn.rock');
const btnPaper = document.querySelector('.circle-btn.paper');
const btnScissor = document.querySelector('.circle-btn.scissor');

btnRock.addEventListener('click', () => {
    audio.play();
    const playerSelection = 'rock';
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    gameResult()

});

btnPaper.addEventListener('click', () => {
    audio.play();
    const playerSelection = 'paper';
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    gameResult()
});

btnScissor.addEventListener('click', () => {
    audio.play();
    const playerSelection = 'scissors';
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    gameResult()
});

function restart() {

    toggleBtnStatus(true);

    const restartBtn = document.createElement('button');
    restartBtn.className = 'restart-btn';
    restartBtn.textContent = 'RESTART';
    restartBtn.style.cursor = 'pointer';
    section.append(restartBtn);

    restartBtn.addEventListener('click', () => {
        audio.play();
        playerScore.style.color = 'white';
        computerScore.style.color = 'white';
        restartBtn.remove()
        toggleBtnStatus(false);

        playerScore.textContent = playerScoreValue;
        computerScore.textContent = computerScoreValue;
        result.textContent = 'Choose yours!'
    });
}

function gameResult() {
    if (playerScoreValue === 5 || computerScoreValue === 5) {

        if (playerScoreValue > computerScoreValue) {
            playerScoreValue = 0;
            computerScoreValue = 0;
            playerScore.style.color = '#29bb24';
            computerScore.style.color = '#F62C2C';
            result.textContent = 'PLAYER WINS 🏆️';
            result.style.fontWeight = 'bold';


        } else {
            playerScoreValue = 0;
            computerScoreValue = 0;
            computerScore.style.color = '#29bb24';
            playerScore.style.color = '#F62C2C';
            result.textContent = 'COMPUTER WINS 🏆️';
            result.style.fontWeight = 'bold';
        }
        restart();
    }
}

function toggleBtnStatus(value) {
    btnRock.disabled = value;
    btnPaper.disabled = value;
    btnScissor.disabled = value;
}