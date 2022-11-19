const rockOnClick = document.getElementById('firstBox');
const playerScore = document.getElementById('PlayerScore');
let playerScoreValue = 0


function scoreadd(){
   playerScoreValue = playerScoreValue + 1

   playerScore.innerText = playerScoreValue;
    

}