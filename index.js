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

const getHumanChoice = () => {
  const HumanChoice = prompt("choise");
  console.log(HumanChoice);
  return HumanChoice;
};

const playGame = () => {
  let humanScore = 0;
  let computerScore = 0;

  const playRound = () => {
    const humanSelection = getHumanChoice().toLowerCase();
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
  };

  for (let i = 0; i <= 5; i++) {
    playRound();
    console.log(humanScore, computerScore);
  }
};

playGame();
