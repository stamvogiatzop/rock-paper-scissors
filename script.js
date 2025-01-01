console.log("ROCK___PAPER___SCISSORS___FOR ___NOOBS");

function getComputerChoice() {
  let numberChoice = Math.floor(Math.random() * 3);
  let computerChoice = "";
  switch (numberChoice) {
    case 0:
      computerChoice = "rock";
      break;
    case 1:
      computerChoice = "paper";
      break;
    case 2:
      computerChoice = "scissors";
      break;
  }
  return computerChoice;
}

function getHumanChoice() {
  let humanChoice = prompt("Choose: *rock* *paper* or *scissors* ?").toLowerCase();
  return humanChoice;
}


function playRound(computerChoice, humanChoice) {
  if ((computerChoice === "rock" && humanChoice === "paper") ||
    (computerChoice === "scissors" && humanChoice === "rock") ||
    (computerChoice === "paper" && humanChoice === "scissors" )) {
      console.log("Am I right? Did you dare choose " + humanChoice + "?");
      console.log("You  win! Choosing " + humanChoice + " beats " + computerChoice + "!");
      humanScore++;
      console.log("CPU: " + computerScore + " VS Player: " + humanScore);
  } else if ((humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "scissors" && computerChoice === "rock") ||
    (humanChoice === "paper" && computerChoice === "scissors" )) {
      console.log("Am I right? Did you dare choose " + humanChoice + "?");
      console.log("You  lose, " + computerChoice + " beats " + humanChoice + "...");
      computerScore++;
      console.log("CPU: " + computerScore + " VS Player: " + humanScore);

  } else if (computerChoice === humanChoice) {
    console.log("Am I right? Did you dare choose " + humanChoice + "?");
      console.log("It\'s a TIE!");
  }
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
  while (humanScore < 5 && computerScore < 5) {
    playRound(getComputerChoice(), getHumanChoice())
  }
  if (humanScore > computerScore) {
    alert("You won only this time! Worse luck next time...");
  } else if (computerScore > humanScore) {
    alert("As expected... You lost the game.");
  }
}

function playOrNot() {
  let yesOrNo = prompt("Wanna Play? Press y or n").toLowerCase();

  if (yesOrNo === "y") {
    alert("Enter with caution...");
    playGame()
  } else {
    alert("Bye loser...");
  }
}

playOrNot();
console.clear();
