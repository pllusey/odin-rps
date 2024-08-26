// variable initialization

let computerScore = 0;
let humanScore = 0;
let round = 0;
let humanChoice;
let computerChoice;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const quip = document.querySelector(".quip");
let roundCount = document.querySelector(".round")
let playerScoreDisplay = document.querySelector(".player-score")
let computerScoreDisplay = document.querySelector(".computer-score")


//functions

function getComputerChoice() {
  const options = ["Rock", "Paper", "Scissors"];

  let index = Math.floor(Math.random() * options.length);
  computerChoice = options[index];
  return computerChoice;
}

function playRound(humanChoice, computerChoice) {
  if (computerChoice === humanChoice) {
    quip.textContent = "It's a tie! Wanna try again?";
  } else if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
    quip.textContent = "You Won!";
    humanScore++;
  } else {
    computerScore++;
    quip.textContent = "HAHA I Win! Go again?";
  }
  round++;
}

rock.addEventListener("click", (e) => {
  humanChoice = e.target.textContent;
  getComputerChoice();
  playRound(humanChoice, computerChoice);
  updateScores();
});
paper.addEventListener("click", (e) => {
  humanChoice = e.target.textContent;
  getComputerChoice();
  playRound(humanChoice, computerChoice);
  updateScores();
});
scissors.addEventListener("click", (e) => {
  humanChoice = e.target.textContent;
  getComputerChoice();
  playRound(humanChoice, computerChoice);
  updateScores();
});

const updateScores = () => {
  roundCount.textContent = round;
  playerScoreDisplay.textContent = `Player Score: ${humanScore}`;
  computerScoreDisplay.textContent = `Computer Score ${computerScore}`;
};
