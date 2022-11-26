

   
  
   /* let playerScoreCounter = 0
   let compScoreCounter = 0

   function playRound(playerSelection, computerSelection){
   
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

 console.log(playRound(userRock, getComputerChoice()))

   let numberOfRounds = ""
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
    
   let userRock = document.getElementById('firstBox');
   let userPaper = document.getElementById('secondBox');
   let userScissors = document.getElementById('thirdBox');
   let userScore = document.getElementById('playerScore');
   let compScore = document.getElementById('computerScore');
   let liveResults = document.getElementById('resultInfo');
   let mainResults = document.getElementById('mainResults');

   let playerScoreCounter = 0
   let compScoreCounter = 0
    
    userRock.addEventListener('click', function () {
        let computerPossibleChoices = [1, 2, 3]
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
        console.log(getComputerChoice()); 
        
        let rockBtnChoice = 'rock';
        console.log(rockBtnChoice);

       let ComputerRandomChoice = getComputerChoice();
    console.log(ComputerRandomChoice)

       
       if (getComputerChoice() === rockBtnChoice) {
        playerScoreCounter += 0;
        userScore.innerHTML = playerScoreCounter;
        compScoreCounter += 0;
        compScore.innerHTML = compScoreCounter;
        liveResults.innerHTML = 'IT IS A TIE!';
       }
       if (getComputerChoice() === 'paper') {
        if (rockBtnChoice === 'rock') {
            compScoreCounter += 1;
            compScore.innerHTML = compScoreCounter;  
            liveResults.innerHTML = 'You Lose! Paper beats Rock';
            if (playerScoreCounter === 5) {
                if (compScoreCounter < 5) {
                    mainResults.innerHTML = 'YOU ARE THE ULTIMATE WINNER!'
                    mainResults.style.cssText = 'color: green; font-size: 48px;';

                }
            }
            if (playerScoreCounter < 5) {
                if (compScoreCounter === 5) {
                    mainResults.innerHTML = 'DAMN IT! YOU LOSE.'
                    mainResults.style.cssText = 'color: red; font-size: 48px;';

                }
            }
            if (playerScoreCounter === 5) {
                if (compScoreCounter === 5) {
                    mainResults.innerHTML = 'IT\'S AN ULTIMATE TIE! Prove your worth.'
                    mainResults.style.cssText = 'color: whitesmoke; font-size: 48px;';

                }
            }
        }
      }
       if (getComputerChoice() === 'scissors') {
        if (rockBtnChoice === 'rock') {
            playerScoreCounter += 1;
            userScore.innerHTML = playerScoreCounter;   
            liveResults.innerHTML = 'You Win! Rock Beats Scissors';
            if (playerScoreCounter === 5) {
                if (compScoreCounter < 5) {
                    mainResults.innerHTML = 'YOU ARE THE ULTIMATE WINNER!'
                    mainResults.style.cssText = 'color: green; font-size: 48px;';

                }
            }
            if (playerScoreCounter < 5) {
                if (compScoreCounter === 5) {
                    mainResults.innerHTML = 'DAMN IT! YOU LOSE.'
                    mainResults.style.cssText = 'color: red; font-size: 48px;';

                }
            }
            if (playerScoreCounter === 5) {
                if (compScoreCounter === 5) {
                    mainResults.innerHTML = 'IT\'S AN ULTIMATE TIE! Prove your worth.'
                    mainResults.style.cssText = 'color: whitesmoke; font-size: 48px;';

                }
            }
        }
       }
    //    console.log(playerScoreCounter);

    });

    userPaper.addEventListener('click', function () {
        let computerPossibleChoices = [1, 2, 3]
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
        console.log(getComputerChoice()); 
        
        let paperBtnChoice = 'paper';
        console.log(paperBtnChoice);

       let ComputerRandomChoice = getComputerChoice();
    console.log(ComputerRandomChoice)

       
       if (getComputerChoice() === paperBtnChoice) {
        playerScoreCounter += 0;
        userScore.innerHTML = playerScoreCounter;
        compScoreCounter += 0;
        compScore.innerHTML = compScoreCounter;
        liveResults.innerHTML = 'IT IS A TIE!';
        if (playerScoreCounter === 5) {
            if (compScoreCounter < 5) {
                mainResults.innerHTML = 'YOU ARE THE ULTIMATE WINNER!';
                mainResults.style.cssText = 'color: green; font-size: 48px;';
            }
        }
        if (playerScoreCounter < 5) {
            if (compScoreCounter === 5) {
                mainResults.innerHTML = 'DAMN IT! YOU LOSE.';
                mainResults.style.cssText = 'color: red; font-size: 48px;';

            }
        }
        if (playerScoreCounter === 5) {
            if (compScoreCounter === 5) {
                mainResults.innerHTML = 'IT\'S AN ULTIMATE TIE! Prove your worth.'
                mainResults.style.cssText = 'color: whitesmoke; font-size: 48px;';

            }
        }

       }
       if (getComputerChoice() === 'rock') {
        if (paperBtnChoice === 'paper') {
            playerScoreCounter += 1;
            userScore.innerHTML = playerScoreCounter;  
            liveResults.innerHTML = 'You Win! Paper Beats Rock';
            if (playerScoreCounter === 5) {
                if (compScoreCounter < 5) {
                    mainResults.innerHTML = 'YOU ARE THE ULTIMATE WINNER!'
                    mainResults.style.cssText = 'color: green; font-size: 48px;';

                }
            }
            if (playerScoreCounter < 5) {
                if (compScoreCounter === 5) {
                    mainResults.innerHTML = 'DAMN IT! YOU LOSE.'
                    mainResults.style.cssText = 'color: red; font-size: 48px;';

                }
            }
            if (playerScoreCounter === 5) {
                if (compScoreCounter === 5) {
                    mainResults.innerHTML = 'IT\'S AN ULTIMATE TIE! Prove your worth.'
                    mainResults.style.cssText = 'color: whitesmoke; font-size: 48px;';

                }
            }
        }
      }
       if (getComputerChoice() === 'scissors') {
        if (paperBtnChoice === 'paper') {
            compScoreCounter += 1;
            compScore.innerHTML = compScoreCounter;    
            liveResults.innerHTML = 'You Lose! Scissors beat Paper';
            if (playerScoreCounter === 5) {
                if (compScoreCounter < 5) {
                    mainResults.innerHTML = 'YOU ARE THE ULTIMATE WINNER!'
                    mainResults.style.cssText = 'color: green; font-size: 48px;' ;

                }
            }
            if (playerScoreCounter < 5) {
                if (compScoreCounter === 5) {
                    mainResults.innerHTML = 'DAMN IT! YOU LOSE.'
                    mainResults.style.cssText = 'color: red; font-size: 48px;';

                }
            }
            if (playerScoreCounter === 5) {
                if (compScoreCounter === 5) {
                    mainResults.innerHTML = 'IT\'S AN ULTIMATE TIE! Prove your worth.'
                    mainResults.style.cssText = 'color: whitesmoke; font-size: 48px;';

                }
            }
        
        }
       }

    });
    
    userScissors.addEventListener('click', function () {
        let computerPossibleChoices = [1, 2, 3]
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
        console.log(getComputerChoice()); 
        
        let scissorsBtnChoice = 'scissors';
        console.log(scissorsBtnChoice);

       let ComputerRandomChoice = getComputerChoice();
    console.log(ComputerRandomChoice)

       
       if (getComputerChoice() === scissorsBtnChoice) {
        playerScoreCounter += 0;
        userScore.innerHTML = playerScoreCounter;
        compScoreCounter += 0;
        compScore.innerHTML = compScoreCounter;
        liveResults.innerHTML = 'IT IS A TIE!';
        if (playerScoreCounter === 5) {
            if (compScoreCounter < 5) {
                mainResults.innerHTML = 'YOU ARE THE ULTIMATE WINNER!'
                mainResults.style.cssText = 'color: green; font-size: 48px;';

            }
        }
        if (playerScoreCounter < 5) {
            if (compScoreCounter === 5) {
                mainResults.innerHTML = 'DAMN IT! YOU LOSE.'
                mainResults.style.cssText = 'color: red; font-size: 48px;';

            }
        }
        if (playerScoreCounter === 5) {
            if (compScoreCounter === 5) {
                mainResults.innerHTML = 'IT\'S AN ULTIMATE TIE! Prove your worth.'
                mainResults.style.cssText = 'color: whitesmoke; font-size: 48px;';

            }
        }

       }
       if (getComputerChoice() === 'paper') {
        if (scissorsBtnChoice === 'scissors') {
            playerScoreCounter += 1;
            userScore.innerHTML = playerScoreCounter; 
            liveResults.innerHTML = 'You Win! Scissors Beat Paper';
            if (playerScoreCounter === 5) {
                if (compScoreCounter < 5) {
                    mainResults.innerHTML = 'YOU ARE THE ULTIMATE WINNER!'
                    mainResults.style.cssText = 'color: green; font-size: 48px;';

                }
            }
            if (playerScoreCounter < 5) {
                if (compScoreCounter === 5) {
                    mainResults.innerHTML = 'DAMN IT! YOU LOSE.'
                    mainResults.style.cssText = 'color: red; font-size: 48px;';

                }
            }
            if (playerScoreCounter === 5) {
                if (compScoreCounter === 5) {
                    mainResults.innerHTML = 'IT\'S AN ULTIMATE TIE! Prove your worth.'
                    mainResults.style.cssText = 'color: whitesmoke; font-size: 48px;';

                }
            }
        }
      }
       if (getComputerChoice() === 'rock') {
        if (scissorsBtnChoice === 'scissors') {
            compScoreCounter += 1;
            compScore.innerHTML = compScoreCounter;            
            liveResults.innerHTML = 'You Lose! Rock Beats Scissors';
            if (playerScoreCounter === 5) {
                if (compScoreCounter < 5) {
                    mainResults.innerHTML = 'YOU ARE THE ULTIMATE WINNER!'
                    mainResults.style.cssText = 'color: green; font-size: 48px;';

                }
            }
            if (playerScoreCounter < 5) {
                if (compScoreCounter === 5) {
                    mainResults.innerHTML = 'DAMN IT! YOU LOSE.'
                    mainResults.style.cssText = 'color: red; font-size: 48px;';

                }
            }
            if (playerScoreCounter === 5) {
                if (compScoreCounter === 5) {
                    mainResults.innerHTML = 'IT\'S AN ULTIMATE TIE! Prove your worth.'
                    mainResults.style.cssText = 'color: whitesmoke; font-size: 48px;';

                }
            }

        }
       }
       
    });
     
    
