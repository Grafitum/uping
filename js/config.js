const materials = [
  // Papel
  { type: 'papel', image: '../img/p1.jpg' },
  { type: 'papel', image: '../img/p2.jpg' },
  { type: 'papel', image: '../img/p3.jpg' },
  { type: 'papel', image: '../img/p4.jpg' },

  // Plástico
  { type: 'plastico', image: '../img/pl1.jpg' },
  { type: 'plastico', image: '../img/pl2.jpg' },
  { type: 'plastico', image: '../img/pl3.jpg' },
  { type: 'plastico', image: '../img/pl4.jpg' },
  { type: 'plastico', image: '../img/plastico.jpg' },
  { type: 'plastico', image: '../img/plastico2.jpg' },
  { type: 'plastico', image: '../img/plastico3.webp' },

  // Vidro
  { type: 'vidro', image: '../img/vd1.jpg' },
  { type: 'vidro', image: '../img/vd2.jpg' },
  { type: 'vidro', image: '../img/vd3.jpg' },
  { type: 'vidro', image: '../img/vd4.jpg' },
  { type: 'vidro', image: '../img/vd5.jpg' },
  { type: 'vidro', image: '../img/vidro.jpg' },
  { type: 'vidro', image: '../img/vidro2.jpeg' },
  { type: 'vidro', image: '../img/vidro3.jpg' },

  // Metal
  { type: 'metal', image: '../img/al1.jpg' },
  { type: 'metal', image: '../img/al2.jpg' },
  { type: 'metal', image: '../img/al3.jpg' },
  { type: 'metal', image: '../img/al4.jpg' },
  { type: 'metal', image: '../img/al5.jpg' },
  { type: 'metal', image: '../img/metal.avif' },
  { type: 'metal', image: '../img/metal2.webp' },
  { type: 'metal', image: '../img/metal3.jpg' },
];


// Lista de materiais (usar imagens da pasta img)


let currentMaterial = null;
let lastMaterial = null;
let score = 0;
let lives = 3;
let timeLeft = 45;
let timerInterval;

const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const gameOverScreen = document.getElementById("game-over");

const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");
const restartBtnGame = document.getElementById("restart-btn-game");

const materialDiv = document.getElementById("material");
const bins = document.querySelectorAll(".bin");
const scoreSpan = document.getElementById("score");
const livesSpan = document.getElementById("lives");
const timerSpan = document.getElementById("timer");
const feedback = document.getElementById("feedback");
const finalScore = document.getElementById("final-score");

// Eventos dos botões
startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", startGame);
restartBtnGame.addEventListener("click", startGame);

// Inicia o jogo
function startGame() {
  score = 0;
  lives = 3;
  timeLeft = 45;
  scoreSpan.textContent = score;
  livesSpan.textContent = lives;
  timerSpan.textContent = timeLeft;

  startScreen.style.display = "none";
  gameOverScreen.style.display = "none";
  gameScreen.style.display = "block";

  loadMaterial();
  startTimer();
}

// Timer
function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timeLeft--;
    timerSpan.textContent = timeLeft;
    if (timeLeft <= 0) {
      endGame();
    }
  }, 1000);
}

// Carrega material aleatório
function loadMaterial() {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * materials.length);
  } while (materials[randomIndex] === lastMaterial);

  currentMaterial = materials[randomIndex];
  lastMaterial = currentMaterial;
  materialDiv.style.backgroundImage = `url('${currentMaterial.image}')`;
}

// Drag & Drop
materialDiv.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text/plain", currentMaterial.type);
});

bins.forEach(bin => {
  bin.addEventListener("dragover", (e) => e.preventDefault());

  bin.addEventListener("drop", (e) => {
    e.preventDefault();
    const droppedType = e.dataTransfer.getData("text/plain");
    const binType = bin.getAttribute("data-type");

    if (droppedType === binType) {
      score++; // cada acerto vale 1 ponto
      scoreSpan.textContent = score;
      showFeedback(`✅ Acertos: ${score}`, true);
    } else {
      lives--;
      score = Math.max(0, score - 1); // subtrai 1 ponto
      livesSpan.textContent = lives;
      scoreSpan.textContent = score;
      showFeedback("❌ Errou! -1 ponto", false);

      if (lives <= 0) {
        endGame();
        return;
      }
    }

    setTimeout(() => {
      showFeedback("");
      loadMaterial();
    }, 700);
  });
});

// Feedback simples
function showFeedback(message, positive = true) {
  feedback.textContent = message;
  feedback.style.color = positive ? "green" : "red";
  feedback.style.transform = "scale(1.3)";
  setTimeout(() => feedback.style.transform = "scale(1)", 300);
}

// Fim de jogo
function endGame() {
  clearInterval(timerInterval);
  gameScreen.style.display = "none";
  gameOverScreen.style.display = "block";

  let rewardMessage = "";
  if (score <= 5) rewardMessage = "🍬 Você ganhou uma bala!";
  else if (score <= 10) rewardMessage = "🍭 Você ganhou um chiclete!";
  else rewardMessage = "🍡 Você ganhou uma jujuba!";

  finalScore.innerHTML = `Fim de jogo! Você acertou ${score} materiais.<br><span class="reward">${rewardMessage}</span>`;
}
