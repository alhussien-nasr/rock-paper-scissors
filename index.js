const paper = document.querySelector("#paper");
const rock = document.querySelector("#rock");
const scissors = document.querySelector("#scissors");
const div = document.querySelector("div");
const play = document.querySelector("#play");
let HumanChoice = "";
let humanScore = 0;
let computerScore = 0;

console.log(paper);

const getComputerChoice = () => {
  let rand = Math.floor(Math.random() * 3) + 1;

  switch (rand) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
};

const getHumanChoice = (e) => {
  const HumanChoice = prompt("choise");
  console.log(HumanChoice);
  return HumanChoice;
};

paper.addEventListener("click", (e) => {
  HumanChoice = "paper";
  div.innerHTML = "paper";
});
rock.addEventListener("click", (e) => {
  HumanChoice = "rock";
  div.innerHTML = "rock";
});
scissors.addEventListener("click", (e) => {
  HumanChoice = "scissors";
  div.innerHTML = "scissors";
});

const playGame = () => {
  const humanSelection = HumanChoice;
  const computerSelection = getComputerChoice();

  if (
    (humanSelection === "paper" && computerSelection === "rock") ||
    (humanSelection === "scissors" && computerSelection === "paper") ||
    (humanSelection === "rock" && computerSelection === "scissors")
  ) {
    humanScore++;
  } else if (
    (computerSelection === "paper" && humanSelection === "rock") ||
    (computerSelection === "scissors" && humanSelection === "paper") ||
    (computerSelection === "rock" && humanSelection === "scissors")
  ) {
    computerScore++;
  }
  div.innerHTML = humanScore + "  " + computerScore;
  if (humanScore == 5) {
    div.innerText = "you winner";
    play.disabled = true;
  } else if (computerScore == 5) {
    div.innerText = "c winner";
    play.disabled = true;
  }
};

play.addEventListener("click", playGame);
