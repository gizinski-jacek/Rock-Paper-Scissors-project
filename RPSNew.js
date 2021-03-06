let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;

const buttons = document.querySelectorAll('.button');
const updateScore = document.querySelector('#score');
const updateResult = document.querySelector('#result');
const allButtonsContainer = document.querySelector('#buttonsRPS');
const playAgainButtonContainer = document.querySelector('#playAgain');
const playAgainButton = document.querySelector('#again');

// Attach addEventListener to every class=button, apply the ID of the one user
// clicked to playerSelection and play one round of RPS.
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        computerSelection = computerPlay();
        console.log(computerSelection);
        playRound(playerSelection, computerSelection);
    })
})

// Randomize computers choice of Rock, Paper, Scissors.
const array = ['rock', 'paper', 'scissors'];
function computerPlay() {
    return array[Math.floor(Math.random()*array.length)];
}

// Play out single round of RPS.
// Update related HTML elements (score, result of round).
function playRound(playerSelection, computerSelection) {
    // Choices are case insensitive. No longer needed with UI.
    // playerSelection = playerSelection.toLowerCase();
    // computerSelection = computerSelection.toLowerCase();
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
            switchButtons();
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
            switchButtons();
        } else {
        updateScore.textContent = playerScore + ' : ' + computerScore;
        updateResult.style.color = "green";
        updateResult.textContent = playerSelection + ' beats ' + computerSelection + '. \nYou win this round.';
        }
    }
}

// Hides RPS buttons once player or computer reaches score of 5.
// Shows button which upon pressing resets score and shows RPS buttons.
function switchButtons() {
    allButtonsContainer.style.display = 'none';
    playAgainButtonContainer.style.display = 'block';
    playAgainButton.addEventListener('click', () => {
        allButtonsContainer.style.display = 'block';
        playAgainButtonContainer.style.display = 'none';
        playerScore = 0;
        computerScore = 0;
        updateResult.style.color = "black";
        updateResult.textContent = 'Make your choice by clicking buttons below!';
        updateScore.textContent = playerScore + ' : ' + computerScore;
    })
}