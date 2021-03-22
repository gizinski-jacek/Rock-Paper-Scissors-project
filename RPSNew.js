let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;

const buttons = document.querySelectorAll('.button');
const showScore = document.querySelector('#score');
const showResult = document.querySelector('#result');
const gameOver = document.querySelector('#gameOver');

// Attach addEventListener to every class=button, apply the ID of the one user
// clicked to playerSelection and play one round of RPS.
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id.toLowerCase();
        playRound(playerSelection, computerSelection);
        if (playerScore === 5 || computerScore === 5) {
            gameOver.textContent = 'Game over';
            playerScore = 0;
            computerScore = 0;
        }
    })
})

// Randomize computers choice of Rock, Paper, Scissors.
const array = ['Rock', 'Paper', 'Scissors'];
function computerPlay() {
    return array[Math.floor(Math.random()*array.length)];
}

// Play out single round of RPS. Choices are case insensitive.
// Update related HTML elements (score, result of round).
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay().toLowerCase();
    if (playerSelection == computerSelection) {
        showScore.textContent = 'You ' + playerScore + ' : ' + computerScore + ' Enemy';
        showResult.textContent = 'It\'s a tie!';
        gameOver.textContent = '';
    } else if (
        (playerSelection == 'rock' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'rock')
        ) {
        computerScore++;
        computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
        showScore.textContent = 'You ' + playerScore + ' : ' + computerScore + ' Enemy';
        showResult.textContent = computerSelection + ' beats ' + playerSelection + '. You lost this round.';
        gameOver.textContent = '';
    } else if (
        (computerSelection == 'rock' && playerSelection == 'paper') ||
        (computerSelection == 'paper' && playerSelection == 'scissors') ||
        (computerSelection == 'scissors' && playerSelection == 'rock')
        ) {
        playerScore++;
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
        showScore.textContent = 'You ' + playerScore + ' : ' + computerScore + ' Enemy';
        showResult.textContent = playerSelection + ' beats ' + computerSelection + '. You win this round.';
        gameOver.textContent = '';
    }
}
