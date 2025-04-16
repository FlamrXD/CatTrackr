var breakfastimg = document.getElementById("brkfstimg")
var lunchimg = document.getElementById("lunchimg")
var dinnerimg = document.getElementById("dinnerimg")
const audio = new Audio('audio/clicked.mp3');

function launchConfetti(x = 0.5, y = 0.5) {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: x, y: y },
    });
}

function launchConfettiFromElement(element) {
    const rect = element.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    launchConfetti(x, y);
}

function brkfstclick() {
    if (!isChecked(breakfastimg)) {
        breakfastimg.src = "./img/check.png"
        launchConfettiFromElement(breakfastimg);
        audio.play();
    }
}

function lunchclick() {
    if (!isChecked(lunchimg)) {
        lunchimg.src = "./img/check.png"
        launchConfettiFromElement(lunchimg);
        audio.play();
    }
}

function dinnerclick() {
    if (!isChecked(dinnerimg)) {
        dinnerimg.src = "./img/check.png"
        launchConfettiFromElement(dinnerimg);
        audio.play();
    }
}

function reset() {
    breakfastimg.src = "./img/dry.png"
    lunchimg.src = "./img/dry.png"
    dinnerimg.src = "./img/dry.png"
}

function runNextDay(func) {
    const now = new Date();
    const tomorrow = new Date(now);

    tomorrow.setDate(now.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);

    const timeUntilTomorrow = tomorrow.getTime() - now.getTime();

    setTimeout(func, timeUntilTomorrow);
}

function isChecked(imgElement) {
    return imgElement.src.includes("check.png");
}

runNextDay(reset);
