let faviconElem = document.getElementById("favicon");
faviconElem.setAttribute("href", `IMG/Favicons/favicon${Math.floor(5 * Math.random()) + 1}.ico`);

const choices = document.querySelectorAll(".RPSLS > div");
const score = document.getElementById("score");
const result = document.getElementById("result");
const restart = document.getElementById("restart");
const modal = document.querySelector(".modal");

const scoreboard = {
  player: 0,
  computer: 0
};

let playerChoice = ""; // Initialize player's choice

function play(e) {
  console.log("e ", e);
  restart.style.display = "table";
  playerChoice = e.target.parentElement.parentElement.id; // Set the player's choice
  const computerChoice = getComputerChoice();
  const svg = e.target.parentElement;
  const winner = getWinner(playerChoice, computerChoice);
  showWinner(winner, computerChoice, playerChoice, svg);
  console.log("ptarget ", e.target.parentElement.parentElement.id);
  console.log("pchoice ", playerChoice);
  console.log("cchoice ", computerChoice);
  console.log("winner ", winner);
  console.log("svg ", e.target.parentElement);
}

function getComputerChoice() {
  const rand = Math.floor(Math.random() * 5) + 1;
  console.log("rand number ", rand);
  if (rand == 1) {
    return "Pierre";
  } else if (rand == 2) {
    return "Papier";
  } else if (rand == 3) {
    return "Ciseaux";
  } else if (rand == 4) {
    return "Lézard";
  } else if (rand == 5) {
    return "Spock";
  }
}

function getWinner(playerChoice, computerChoice) {
  console.log("Get winner:  player ", playerChoice, "computer ", computerChoice);

  if (playerChoice == computerChoice) {
    return "Égalité";
  } else if (playerChoice == "Pierre" && computerChoice == "Papier") {
    return "Ordinateur";
  } else if (playerChoice == "Pierre" && computerChoice == "Ciseaux") {
    return "Joueur";
  } else if (playerChoice == "Pierre" && computerChoice == "Lézard") {
    return "Joueur";
  } else if (playerChoice == "Pierre" && computerChoice == "Spock") {
    return "Ordinateur";
  } else if (playerChoice == "Papier" && computerChoice == "Pierre") {
    return "Joueur";
  } else if (playerChoice == "Papier" && computerChoice == "Ciseaux") {
    return "Ordinateur";
  } else if (playerChoice == "Papier" && computerChoice == "Lézard") {
    return "Ordinateur";
  } else if (playerChoice == "Papier" && computerChoice == "Spock") {
    return "Joueur";
  } else if (playerChoice == "Ciseaux" && computerChoice == "Pierre") {
    return "Ordinateur";
  } else if (playerChoice == "Ciseaux" && computerChoice == "Papier") {
    return "Joueur";
  } else if (playerChoice == "Ciseaux" && computerChoice == "Lézard") {
    return "Joueur";
  } else if (playerChoice == "Ciseaux" && computerChoice == "Spock") {
    return "Ordinateur";
  } else if (playerChoice == "Lézard" && computerChoice == "Pierre") {
    return "Ordinateur";
  } else if (playerChoice == "Lézard" && computerChoice == "Papier") {
    return "Joueur";
  } else if (playerChoice == "Lézard" && computerChoice == "Ciseaux") {
    return "Ordinateur";
  } else if (playerChoice == "Lézard" && computerChoice == "Spock") {
    return "Joueur";
  } else if (playerChoice == "Spock" && computerChoice == "Pierre") {
    return "Joueur";
  } else if (playerChoice == "Spock" && computerChoice == "Papier") {
    return "Ordinateur";
  } else if (playerChoice == "Spock" && computerChoice == "Ciseaux") {
    return "Joueur";
  } else if (playerChoice == "Spock" && computerChoice == "Lézard") {
    return "Ordinateur";
  }
}

function showWinner(winner, computerChoice, playerChoice, svg) {
  console.log("Show Winner:  winner ", winner, "computer ", computerChoice, "pchoice ", playerChoice);
  if (winner == "Joueur") {
    scoreboard.player++;
    result.innerHTML = `
    <h1 class="text-win">Vous avez gagné</h1>
    <div class="result-win">
    ${svg.outerHTML}
    </div>
    <p>Ordinateur a choisi ${computerChoice}</p>`;
  } else if (winner == "Ordinateur") {
    scoreboard.computer++;
    result.innerHTML = `
    <h1 class="text-lose">Vous avez perdu</h1>
    <div class="result-lose">
    ${svg.outerHTML}
    </div>
    <p>Ordinateur a choisi ${computerChoice}</p>`;
  } else {
    result.innerHTML = `
    <h1 class="text-draw">C'est un match nul</h1>
    <div class="result-draw">
    ${svg.outerHTML}
    </div>
    <p>Vous avez tous les deux choisi ${playerChoice}</p>`;
  }

  score.innerHTML = `
  <p>Joueur : ${scoreboard.player}</p>
  <p>Ordinateur : ${scoreboard.computer}</p>
  `;

  modal.style.display = "block";
}

function restartGame() {
  scoreboard.player = 0;
  scoreboard.computer = 0;
  score.innerHTML = `
  <p>Joueur : 0</p>
  <p>Ordinateur : 0</p>
  `;
  restart.style.display = "none";
  playerChoice = ""; // Reset player's choice
}

function clearModal(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}

choices.forEach(choice => choice.addEventListener("click", play));
window.addEventListener("click", clearModal);
restart.addEventListener("click", restartGame);

function overRock() {
  const rock = document.querySelectorAll(".RockToScissors, .RockToLizard");
  rock.forEach(function(el) {
    el.style.stroke = "#008000";
    el.style.fill = "#008000";
  });
}

function outRock() {
  const rock = document.querySelectorAll(".RockToScissors, .RockToLizard");
  rock.forEach(function(el) {
    el.style.stroke = "#000";
    el.style.fill = "#000";
  });
}

function overPaper() {
  const myPara = document.querySelectorAll(".PaperToRock, .PaperToSpock");
  myPara.forEach(function(el) {
    el.style.stroke = "#008000";
    el.style.fill = "#008000";
  });
}

function outPaper() {
  const myPara = document.querySelectorAll(".PaperToRock, .PaperToSpock");
  myPara.forEach(function(el) {
    el.style.stroke = "#000";
    el.style.fill = "#000";
  });
}

function overScissors() {
  const myPara = document.querySelectorAll(".ScissorsToPaper, .ScissorsToLizard");
  myPara.forEach(function(el) {
    el.style.stroke = "#008000";
    el.style.fill = "#008000";
  });
}

function outScissors() {
  const myPara = document.querySelectorAll(".ScissorsToPaper, .ScissorsToLizard");
  myPara.forEach(function(el) {
    el.style.stroke = "#000";
    el.style.fill = "#000";
  });
}

function overSpock() {
  const myPara = document.querySelectorAll(".SpockToScissors, .SpockToRock");
  myPara.forEach(function(el) {
    el.style.stroke = "#008000";
    el.style.fill = "#008000";
  });
}

function outSpock() {
  const myPara = document.querySelectorAll(".SpockToScissors, .SpockToRock");
  myPara.forEach(function(el) {
    el.style.stroke = "#000";
    el.style.fill = "#000";
  });
}

function overLizard() {
  const myPara = document.querySelectorAll(".LizardToSpock, .LizardToPaper");
  myPara.forEach(function(el) {
    el.style.stroke = "#008000";
    el.style.fill = "#008000";
  });
}

function outLizard() {
  const myPara = document.querySelectorAll(".LizardToSpock, .LizardToPaper");
  myPara.forEach(function(el) {
    el.style.stroke = "#000";
    el.style.fill = "#000";
  });
}
