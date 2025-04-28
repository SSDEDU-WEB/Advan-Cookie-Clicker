let score = 0;
let autoClickerCost = 10;
let autoClickerEnabled = false;

const scoreElement = document.getElementById("score");
const cookieButton = document.getElementById("cookie-button");
const autoClickerButton = document.getElementById("auto-clicker");

cookieButton.addEventListener("click", () => {
    score++;
    updateScore();
});

autoClickerButton.addEventListener("click", () => {
    if (score >= autoClickerCost && !autoClickerEnabled) {
        score -= autoClickerCost;
        autoClickerEnabled = true;
        autoClickerButton.disabled = true;
        autoClickerButton.textContent = "Auto-Clicker (Activated)";
        startAutoClicker();
        updateScore();
    }
});

function updateScore() {
    scoreElement.textContent = `Score: ${score}`;
    document.title = `Cookie Clicker - Score: ${score}`;
}

function startAutoClicker() {
    setInterval(() => {
        score++;
        updateScore();
    }, 1000);
}
