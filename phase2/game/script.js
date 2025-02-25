const tbody = document.querySelector("tbody");
let cells = 10;
let score = 0;
let userName = localStorage.getItem("userName") || "";
let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
let audioWin = new Audio("./assets/win.mp3");
let audioLose = new Audio("./assets/lose.mp3");
let audioClick = new Audio("./assets/click.mp3");

document.getElementById("startBtn").addEventListener("click", startGame);
document.getElementById("difficulty").addEventListener("change", function () {
  cells = parseInt(this.value);
  localStorage.setItem("cells", cells);
});

displayLeaderboard();

function startGame() {
  userName = document.getElementById("userName").value;
  if (!userName) {
    alert("Please enter your name!");
    return;
  }
  localStorage.setItem("userName", userName);
  resetGame();
  generateGrid();
}

function resetGame() {
  tbody.innerHTML = "";
  score = 0;
  document.getElementById("score").textContent = score;
  localStorage.setItem("score", score);
}

function generateGrid() {
  let arr = [];
  for (let i = 1; i <= cells * cells; i++) arr.push(i);
  arr.sort(() => Math.random() - 0.5);

  let count = 0;
  for (let i = 1; i <= cells; i++) {
    let tr = document.createElement("tr");
    for (let j = 1; j <= cells; j++) {
      let td = document.createElement("td");
      td.addEventListener("click", userHandleClick);
      let randomNumber = arr[count++];
      td.setAttribute("data-value", randomNumber);
      td.textContent = "";
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
}

function userHandleClick(e) {
  const numClicked = Number(e.target.dataset.value);
  console.log(numClicked);

  e.target.textContent = numClicked;

  if (isPrime(numClicked)) {
    alert("You have lost the game, " + userName + "!");
    audioLose.play();
    updateLeaderboard(userName, score);
    resetGame();
  } else if (numClicked === 1) {
    alert("Congratulations " + userName + "! You won the game!");
    audioWin.play();
    updateLeaderboard(userName, score);
    resetGame();
  } else {
    e.target.style.backgroundColor = "red";
    e.target.removeEventListener("click", userHandleClick);
    removeMultiples(numClicked);
    score++;
    document.getElementById("score").textContent = score;
    localStorage.setItem("score", score);
    audioClick.play();
  }
}

function removeMultiples(numClicked) {
  for (let i = 1; i <= cells * cells; i++) {
    if (i % numClicked == 0) {
      let cell = document.querySelector(`[data-value='${i}']`);
      if (cell) {
        cell.style.backgroundColor = "red";
        cell.textContent = i;
        cell.removeEventListener("click", userHandleClick);
      }
    }
  }
}

function isPrime(N) {
  if (N <= 1) return false;
  for (let i = 2; i < N; i++) {
    if (N % i === 0) return false;
  }
  return true;
}

function updateLeaderboard(name, score) {
  leaderboard.push({ name, score });
  leaderboard.sort((a, b) => a.score - b.score);
  localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
  displayLeaderboard();
}

function displayLeaderboard() {
  let leaderboardElement = document.getElementById("leaderboard");
  leaderboardElement.innerHTML = "<h3>Leaderboard</h3>";
  leaderboard.forEach((entry, index) => {
    leaderboardElement.innerHTML += `<p>${index + 1}. ${entry.name} - ${
      entry.score
    }</p>`;
  });
}
