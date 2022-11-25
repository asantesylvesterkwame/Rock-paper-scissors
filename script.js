
    /*let computerPossibleChoices = [1, 2, 3]
    let randomComputerChoices = Math.floor(Math.random() * 3) + 1 ;
    function getComputerChoice(){
    if (randomComputerChoices === computerPossibleChoices[1]){
        return 'rock' ;
    }else if (randomComputerChoices === computerPossibleChoices[2]){
        return 'paper';
    }else {
        return 'scissors';
    }
   }
   
   
  
    let playerScoreCounter = 0
   let compScoreCounter = 0

   /*function playRound(playerSelection, computerSelection){
   
    if (playerSelection === computerSelection){
    console.log('It\'s a TIE!');
   
   }
   if (playerSelection === 'rock'){
    if (computerSelection === 'paper'){
        console.log(`The Computer Score is ${compScoreCounter += 1}`);
        console.log('You lose! Paper Beats Rock');
    }
   }
   if (playerSelection === 'rock'){
        if (computerSelection === 'scissors'){
            console.log(`Player Score is ${playerScoreCounter += 1}`);
            console.log('You Win! Rock Beats Scissors');
        }
   }
   if (playerSelection === 'paper'){
    if (computerSelection === 'rock'){
        console.log(`'Player Score is ${playerScoreCounter += 1}`);
        console.log('You Win! Paper Beats Rock');
    }
   }
   if (playerSelection === 'paper'){
        if (computerSelection === 'scissors'){
            console.log(`The Computer Score is' ${compScoreCounter += 1}`);
        console.log('You lose! Scissors beat paper');
        }
   }
   if (playerSelection === 'scissors'){
    if (computerSelection === 'rock'){
        console.log(`The Computer Score is  ${compScoreCounter += 1}`);
        console.log('You lose! Rock beats Scissors');
    }
   }
   if (playerSelection === 'scissors'){
        if (computerSelection === 'paper'){
            
            console.log(`Player Score is ${playerScoreCounter += 1}`);
            console.log('You Win! Scissors beat paper') ;     
          }
   }

   }

   console.log(playRound(prompt('please enter your WEAPON, LET\'S FIGHT'), getComputerChoice()))*/

   /*let numberOfRounds = ""
    function game(){
    for (let i = 1; i < 5; i++){
     numberOfRounds +=playRound(prompt('please enter your WEAPON, LET\'S FIGHT'), getComputerChoice());
    }
    if (playerScoreCounter > compScoreCounter){
        console.log('YOU WIN THE OFFICAL CONTEST!');
       }
       if(playerScoreCounter < compScoreCounter){
        console.log('You lost to computer...');
       }
       if(playerScoreCounter === compScoreCounter){
        console.log('It\'s a Tie');
    }
}
        
    console.log(game());*/
    
    let rockBtn = document.getElementById('firstBox');
    let playerScore = document.getElementById('playerScore');
    let computerScore = document.getElementById('computerScore')
    rockBtn.addEventListener("click", function() {
        console.log('rock');
      });
    let paperBtn = document.getElementById('secondBox')
    
