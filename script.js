/*const computerChoice = ['rock', 'paper', 'scissors']
    //take random string

    const list = [1, 2, 3, 4, 5, 6];

    // shuffle your list with the sort function:
    const shuffledCompChoice = computerChoice.sort(() => Math.random() - 0.) ;
    // generate a size for the new list
    const newCompChoiceSize = Math.floor(Math.random() * computerChoice.length)
    // pick the first "newListSize" elements from "shuffledList"
    const newCompChoice = shuffledCompChoice.slice(0, newCompChoiceSize)
    
    console.log(newCompChoice);
    */
    
   

   function getComputerChoice(){
    let computerPossibleChoices = [1, 2, 3]
    let randomComputerChoices =Math.floor(Math.random() * 3) + 1 ;

    if (randomComputerChoices === computerPossibleChoices[1]){
        return 'rock'
    }
    else if (randomComputerChoices === computerPossibleChoices[2]){
        return 'paper'
    }
    else (randomComputerChoices === computerPossibleChoices[3]);{
        return 'scissors'
    }
   }
   
   console.log(getComputerChoice());

   function playRound(playerSelection, computerSelection){
    
    
    if (playerSelection != computerSelection){
    return "You lose! Paper beats Rock"
    }
    
   }
   console.log(playRound(/'roCK'/i, getComputerChoice()))

  
   
