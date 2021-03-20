// Initialize game score.
let playerScore = 0;
let computerScore = 0;

// Ask player for his choice of Rock, Paper, Scissors.
let playerSelection = prompt('Do you play Rock, Paper or Scissors?');

// Randomize computers choice of Rock, Paper, Scissors.
function computerSelection() {
    const choiceRPS = ['Rock', 'Paper', 'Scissors'];
    return choiceRPS[Math.floor(Math.random()*choiceRPS.length)];
}

// Play out single round of RPS. Choices are case insensitive.
// Show outcome and increase player of computer score by one.
function playRound(playerPlay = playerSelection, computerPlay = computerSelection()) {
    playerPlay = playerPlay.toLowerCase();
    computerPlay = computerPlay.toLowerCase();
    if (playerPlay == computerPlay) {
        console.log(playerPlay + ' versus ' + computerPlay);
        console.log('It\'s a tie!');
        console.log('Player ' + playerScore + ' : ' + computerScore + ' Computer');
    } else if (
        (playerPlay == 'rock' && computerPlay == 'paper') ||
        (playerPlay == 'paper' && computerPlay == 'scissors') ||
        (playerPlay == 'scissors' && computerPlay == 'rock')
        ) {
        computerScore++;
        console.log(computerPlay + ' beats ' + playerPlay);
        console.log('You lost this round!');
        console.log('Player ' + playerScore + ' : ' + computerScore + ' Computer');
    } else if (
        (computerPlay == 'rock' && playerPlay == 'paper') ||
        (computerPlay == 'paper' && playerPlay == 'scissors') ||
        (computerPlay == 'scissors' && playerPlay == 'rock')
        ) {
        playerScore++;
        console.log(playerPlay + ' beats ' + computerPlay);
        console.log('You win this round!');
        console.log('Player ' + playerScore + ' : ' + computerScore + ' Computer');
    }
}

// Function playing out best-of-nine.
// Checks if user made choice of a R/P/S. Throws error if didn't.
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