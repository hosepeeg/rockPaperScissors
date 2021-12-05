/* Project: Create a game of rock,paper, scissors where the user will vs. a computer
1. create a variable to hold the computers decision: rock, paper, or scissor
2. create a variable to hold the users decision: rock, paper, or scissor
3. prompt the user for there choice
4. find the computers choice
5. compare the user and computers choice and decide the winner
6. make the game best 2 out of 3 or 3 out of 5
*/


//computerPlay() creates a array of choices, then uses math.random to create a values between 0-1, multiples it by 3, then rounds it down with math.floor
//this creates a number between 0,1,2 which will be used as the index number for our array to choose the element.
function computerPlay(){
    let choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * 3)];
}



//checkScore() checks the score to see if there is a winner. First player to 3 wins. Then resets score for both players
function checkScore(){
    if(playerScore === 3){
        console.log(`You win! The final score was ${playerScore} : ${computerScore}. Congratulations!`);
        playerScore = 0, computerScore = 0;
        return false;
    }
    else if(computerScore === 3){
        console.log(`You lose! The final score was ${playerScore} : ${computerScore}. Better luck next time.`);
        playerScore = 0, computerScore = 0;
        return false;
    }
    else{
        console.log(`The score is now- ${playerScore} : ${computerScore}`);
        return true;
    }
}



//playRound() plays a single round of Rock Paper Scissors. This function will take two parameters- the playerSelection and computerSelection- and return a
//string that declares the winner of the round like so: "You Lose! Paper beats Rock."
function playRound(playerSelection, computerSelection = computerPlay()){
    if(playerSelection === computerSelection){
        console.log(`You picked:${playerSelection} and the computer picked ${computerSelection}! This rounds a tie!`);
    }
    else if(playerSelection === 'Rock'){
        if(computerSelection === 'Paper'){
            console.log(`You lose this round! ${computerSelection} beats ${playerSelection}.`);
            computerScore++;
        }
        else{
            console.log(`You win this round! ${playerSelection} beats ${computerSelection}.`);
            playerScore++;
        }
    }
    else if(playerSelection === 'Paper'){
        if(computerSelection === 'Scissors'){
            console.log(`You lose this round! ${computerSelection} beats ${playerSelection}.`);
            computerScore++;
        }
        else{
            console.log(`You win this round! ${playerSelection} beats ${computerSelection}.`);
            playerScore++;
        }
    }
    else if(playerSelection === 'Scissor'){
        if(computerSelection === 'Rock'){
            console.log(`You lose this round! ${computerSelection} beats ${playerSelection}.`);
            computerScore++;
        }
        else{
            console.log(`You win this round! ${playerSelection} beats ${computerSelection}.`);
            playerScore++;
        }
    }
    else{
        console.log(`Something went wrong.`)
    }
    return checkScore();
}



//The game will run until the first player wins best of 5
function game(){
    let flag = true;
    while(flag === true){
        let playerSelection = prompt(`Choose either 'Rock", "Paper", "Scissors".`);
        flag = playRound(playerSelection);
    }
}



let playerScore = 0;
let computerScore = 0;

game("Rock");