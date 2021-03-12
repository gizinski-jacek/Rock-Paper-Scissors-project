// Initialize game score.
let playerScore = 0;
let computerScore = 0;

// Ask player for his choice and randomize computers choice.
let playerSelection = prompt('Do you play Rock, Paper or Scissors?');

function computerPlay() {
    const array = ['Rock', 'Paper', 'Scissors'];
    return array[Math.floor(Math.random()*array.length)];
}

// Play out single round of Rock, Paper, Scissors. Choices are case insensitive.
// Show outcome and update game score for player and computer.
function playRound(playerPick = playerSelection, computerPick = computerPlay()) {
    playerPick = playerPick.toLowerCase();
    computerPick = computerPick.toLowerCase();
    if (playerPick == computerPick) {
        console.log(playerPick + ' versus ' + computerPick + '. It\'s a tie!');
        console.log('Computer: ' + computerScore);
        console.log('Player: ' + playerScore);
    } else if (
        (playerPick == 'rock' && computerPick == 'paper') ||
        (playerPick == 'paper' && computerPick == 'scissors') ||
        (playerPick == 'scissors' && computerPick == 'rock')
        ) {
        computerScore++;
        console.log(computerPick + ' beats ' + playerPick + '. You lost this round!');
        console.log('Computer: ' + computerScore);
        console.log('Player: ' + playerScore);
    } else if (
        (computerPick == 'rock' && playerPick == 'paper') ||
        (computerPick == 'paper' && playerPick == 'scissors') ||
        (computerPick == 'scissors' && playerPick == 'rock')
        ) {
        playerScore++;
        console.log(playerPick + ' beats ' + computerPick + '. You win this round!');
        console.log('Computer: ' + computerScore);
        console.log('Player: ' + playerScore);
    }
}

// Function playing out 5 rounds. Checks if user made choice of a R/P/S.
function game() {
    playerRPS = playerSelection.toLowerCase();
    if (
        (playerRPS == 'rock') || 
        (playerRPS == 'paper') ||
        (playerRPS == 'scissors')
        ) {
        for (let i = 1; i <= 5; i++) {
            console.log('Prepare yourself, round ' + i + ' is starting!')
            playRound();
        }
    } else {
        console.log('Error. You didn\'t choose anything!');
    }
}

// Need to show final winner of the game and final score.
// Maybe ask player how many rounds he wants to play.

console.log(game());