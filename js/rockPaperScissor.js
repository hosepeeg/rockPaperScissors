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
    const p = document.createElement(`p`);
    if(round >= 5 && playerScore > computerScore){
        p.textContent = `You win! The final score was ${playerScore} : ${computerScore}. Congratulations!`;
        p.classList = '.gameOver';
        results.appendChild(p);
    }
    else if(round >= 5 && computerScore > playerScore){
        p.textContent = `You lose! The final score was ${playerScore} : ${computerScore}. Better luck next time.`;
        p.classList = '.gameOver';
        results.appendChild(p);
    }
    else{
        p.textContent = `The score is now ${playerScore} : ${computerScore}`;
        pScoreText.innerHTML = `${playerScore}`;
        cScoreText.innerHTML = `${computerScore}`;
        p.classList = `.score`;
        h3.innerHTML = `Round: ${round}`;
        results.appendChild(p);
    }
}



//playRound() plays a single round of Rock Paper Scissors. This function will take two parameters- the playerSelection and computerSelection- and return a
//string that declares the winner of the round like so: "You Lose! Paper beats Rock."
function playRound(playerSelection, computerSelection = computerPlay()){
    const p = document.createElement('p');
    checkScore();

    if(playerSelection === computerSelection){
        p.textContent = `You picked ${playerSelection} against ${computerSelection}! This rounds a tie!`;
        p.classList = `.score`;
        results.appendChild(p);
    }
    else if(playerSelection === 'Rock'){
        if(computerSelection === 'Paper'){
            p.textContent = `You lose this round! ${computerSelection} beats ${playerSelection}.`;
            p.classList = `.score`;
            results.appendChild(p);
            computerScore++;
        }
        else{
            p.textContent = `You win this round! ${playerSelection} beats ${computerSelection}.`;
            p.classList = `.score`;
            results.appendChild(p);
            playerScore++;
        }
    }
    else if(playerSelection === 'Paper'){
        if(computerSelection === 'Scissors'){
            p.textContent = `You lose this round! ${computerSelection} beats ${playerSelection}.`;
            p.classList = `.score`;
            results.appendChild(p);
            computerScore++;
        }
        else{
            p.textContent = `You win this round! ${playerSelection} beats ${computerSelection}.`;
            p.classList = `.score`;
            results.appendChild(p);
            playerScore++;
        }
    }
    else if(playerSelection === 'Scissor'){
        if(computerSelection === 'Rock'){
            p.textContent = `You lose this round! ${computerSelection} beats ${playerSelection}.`;
            p.classList = `.score`;
            results.appendChild(p);
            computerScore++;
        }
        else{
            p.textContent = `You win this round! ${playerSelection} beats ${computerSelection}.`;
            p.classList = `.score`;
            results.appendChild(p);
            playerScore++;
        }
    }
    else{
        p.textContent = `Something went wrong.`;
        p.classList = `.score`;
        results.appendChild(p);
    }
}

const results = document.querySelector('.results');
const h3 = document.querySelector('.round');
const pScoreText = document.querySelector(`#pScore`);
const cScoreText = document.querySelector(`#cScore`);
let playerScore = 0;
let computerScore = 0;
let playerSelection = undefined;
let round = 1;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener(`click`, () => {
        playerSelection = button.className;
        if(round <= 5){
            playRound(playerSelection);
            round++;
        }
        else{
            round++;
            console.log(`reset`)
        }
    });
});