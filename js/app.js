/**Column One Content*/
let playerScore = document.getElementById('player-score');
let playerTally = 0;
let playerChoice = document.getElementById('player-choice');
let playerInput = document.getElementById('player-input');

/**Column Two*/
let columnTwo = document.getElementById('col-2');
let gameResult = document.createElement('p');
columnTwo.appendChild(gameResult);
gameResult.style.fontSize = '50px';
gameResult.style.color = 'red';
let submitBtn = document.querySelector('.submit');
let resetBtn = document.querySelector('.reset');
let eraseBtn = document.querySelector('.erase');

/**Column Three*/
let computerScore = document.getElementById('computer-score');
let computerTally = 0;

let computerChoice = document.getElementById('computer-choice');

//playerChoice.src = "img-"+randoNum+".jpg";
let computerPlay = () => {
  let randoNum = Math.floor((Math.random() * 3) + 1);
  switch (randoNum) {
    case 1:
      computerChoice.src = "img-"+randoNum+".jpg";
      return "rock";
    case 2:
      computerChoice.src = "img-"+randoNum+".jpg";
      return "paper";
    case 3:
      computerChoice.src = "img-"+randoNum+".jpg";
      return "scissors";
  }
};

let playerPic = () =>{
  switch(playerInput.value){
    case 'rock':
      playerChoice.src = 'img-1.jpg';
      break;
      case 'paper':
      playerChoice.src = 'img-2.jpg';
      break;
      case 'scissors':
      playerChoice.src = 'img-3.jpg';
      break;
  }
};

submitBtn.addEventListener('click', () => {
  let computerSelection = computerPlay();
  playerPic();
  if (playerInput.value === 'rock' && computerSelection === 'scissors') {
    gameResult.innerHTML = "Point, Player 1";
    playerTally += 1;
  } 
  else if (playerInput.value === 'scissors' && computerSelection === 'paper') {
    playerTally += 1;
    gameResult.innerHTML = "Point, Player 1";
  } 
  else if (playerInput.value === 'paper' && computerSelection === 'rock') {
    playerTally += 1;
    gameResult.innerHTML = "Point, Player 1";
  } 
  else if (playerInput.value === computerSelection) {
    gameResult.innerHTML = "Draw!";
  } 
  else {
    computerTally += 1;
    gameResult.innerHTML = "Point, Computer";
  }
  if(playerTally === 5){
    gameResult.innerHTML = "Player 1 Wins!";
  }
  else if(computerTally === 5){
    gameResult.innerHTML = "Computer wins!";
  }

playerScore.innerHTML = playerTally;
computerScore.innerHTML = computerTally;
console.log("Computer " + computerSelection);
console.log("Player " + playerInput.value);
});

resetBtn.addEventListener('click', () => {
  gameResult.innerHTML = '';
  computerScore.innerHTML = 0;
  playerScore.innerHTML = 0;
  computerChoice.src = "";
  playerChoice.src = "";
  playerInput.value = "";
});

eraseBtn.addEventListener('click', () => {
  gameResult.innerHTML = '';
  computerChoice.src = "";
  playerChoice.src = "";
  playerInput.value = "";
});
