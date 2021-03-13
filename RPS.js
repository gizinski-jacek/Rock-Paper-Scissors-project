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
        console.log(playerPick + ' versus ' + computerPick);
        console.log('It\'s a tie!');
        console.log('Player ' + playerScore + ' : ' + computerScore + ' Computer');
    } else if (
        (playerPick == 'rock' && computerPick == 'paper') ||
        (playerPick == 'paper' && computerPick == 'scissors') ||
        (playerPick == 'scissors' && computerPick == 'rock')
        ) {
        computerScore++;
        console.log(computerPick + ' beats ' + playerPick);
        console.log('You lost this round!');
        console.log('Player ' + playerScore + ' : ' + computerScore + ' Computer');
    } else if (
        (computerPick == 'rock' && playerPick == 'paper') ||
        (computerPick == 'paper' && playerPick == 'scissors') ||
        (computerPick == 'scissors' && playerPick == 'rock')
        ) {
        playerScore++;
        console.log(playerPick + ' beats ' + computerPick);
        console.log('You win this round!');
        console.log('Player ' + playerScore + ' : ' + computerScore + ' Computer');
    }
}

// Function playing out best-of-nine. Checks if user made choice of a R/P/S.
// Shows winner and final score at the end.
function game() {
    playerRPS = playerSelection.toLowerCase();
    if (
        (playerRPS == 'rock') || 
        (playerRPS == 'paper') ||
        (playerRPS == 'scissors')
        ) {
        while ((playerScore) < 5 && (computerScore < 5)) {
            console.log('Prepare yourself, round 1 is starting!')
            playRound();
        } if (playerScore === 5) {
            console.log('You have won!\nFinal score\nPlayer ' + playerScore + ' : ' + computerScore + ' Computer');
        } else if (computerScore === 5) {
            console.log('You have lost!\nFinal score\nPlayer ' + playerScore + ' : ' + computerScore + ' Computer');
        }
    } else {
        console.log('Error. You didn\'t choose anything!');
    }
}

console.log(game());