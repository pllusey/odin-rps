const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

function getComputerChoice() {
  const options = ["Rock", "Paper", "Scissors"];


  let index = Math.floor(Math.random() * options.length);
  return options[index];
}

function getHumanChoice() {
  let;
}

let computerScore = 0;
let humanScore = 0;
let roundCount = 0;

let humanChoice;
let computerChoice = getComputerChoice();

function playRound(humanChoice, computerChoice) {
  if (computerChoice === humanChoice) {
    console.log("It's a tie! Wanna try again?");
  } else if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
    console.log("You Won!");
    humanScore++;
  } else {
    computerScore++;
    console.log("HAHA I Win! Go again?");
  }
  roundCount++;
}

rock.addEventListener("click", (e) => {
  humanChoice = e.target.textContent;
  playRound();
  checkLogs()
});
paper.addEventListener("click", (e) => {
  humanChoice = e.target.textContent;
  playRound()
  checkLogs()
});
scissors.addEventListener("click", (e) => {
  humanChoice = e.target.textContent;
  playRound()
  checkLogs()
});

const checkLogs = () => {
  console.log(humanChoice);
  console.log(humanScore);
  console.log(computerChoice);
  console.log(computerScore);
  console.log(roundCount);
};
