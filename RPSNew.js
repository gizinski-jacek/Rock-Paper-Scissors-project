let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;

const buttons = document.querySelectorAll('.button');
const updateScore = document.querySelector('#score');
const updateResult = document.querySelector('#result');

// Attach addEventListener to every class=button, apply the ID of the one user
// clicked to playerSelection and play one round of RPS.
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (playerScore == 5 || computerScore == 5) {
            playerScore = 0;
            computerScore = 0;
            playerSelection = button.id;
            playRound(playerSelection, computerSelection);
        } else {
            playerSelection = button.id;
            playRound(playerSelection, computerSelection);
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
        updateScore.textContent = playerScore + ' : ' + computerScore;
        updateResult.style.color = "blue";
        updateResult.textContent = 'It\'s a tie!';
    } else if (
        (playerSelection == 'rock' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'rock')
        ) {
        computerScore++;
        computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
        if (computerScore == 5) {
            updateScore.textContent = playerScore + ' : ' + computerScore;
            updateResult.style.color = "red";
            updateResult.textContent = computerSelection + ' beats ' + playerSelection + '. \nGame over. \nYou lost the game.';
        } else {
        updateScore.textContent = playerScore + ' : ' + computerScore;
        updateResult.style.color = "red";
        updateResult.textContent = computerSelection + ' beats ' + playerSelection + '. \nYou lost this round.';
        }
    } else if (
        (computerSelection == 'rock' && playerSelection == 'paper') ||
        (computerSelection == 'paper' && playerSelection == 'scissors') ||
        (computerSelection == 'scissors' && playerSelection == 'rock')
        ) {
        playerScore++;
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
        if (playerScore == 5) {
            updateScore.textContent = playerScore + ' : ' + computerScore;
            updateResult.style.color = "green";
            updateResult.textContent = playerSelection + ' beats ' + computerSelection + '. \nGame over. \nYou won the game.';
        } else {
        updateScore.textContent = playerScore + ' : ' + computerScore;
        updateResult.style.color = "green";
        updateResult.textContent = playerSelection + ' beats ' + computerSelection + '. \nYou win this round.';
        }
    }
}
