function getHumanChoice() {

  // PROBABLY HERE THERE IS THE STUPID BUG THAT ALWAYS ACTIVATES THE PROMPT...
  const humanChoice = prompt("Choose: ROCK, PAPER or SCISSORS?").toLowerCase();

  return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  switch (humanChoice === "scissors") {
    case (computerChoice === "rock"):
      alert("computer...");
      alert("chose rock! YOU LOSE...");
      computerScore++;
      break;
    case (computerChoice === "scissors"):
      alert("TIE");
      break;
    case (computerChoice === "paper"):
      alert("computer...");
      alert("chose paper! YOU WIN!");
      alert("You\'re a worthy adversary. Beware...")
      humanScore++
      break;
  }
}

// const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playOrNot();

playRound();













console.log("ROCK___PAPER___SCISSORS___FOR ___NOOBS");

// FUNCTION FOR ASKING WHETHER YOU WANT TO PLAY OR NOT!!!//

function playOrNot() {
  let yesOrNo = prompt("Wanna Play? Press y or n").toLowerCase();

  if (yesOrNo === "y") {
    alert("Enter with caution...");
  } else {
    alert("Bye loser...");
  }
}

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
