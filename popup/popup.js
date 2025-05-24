const button = document.getElementById('searchButton');
const startMenu = document.querySelector(".start");
const countdownTimer = document.getElementById("countdown-timer");
const countdownMenu = document.querySelector(".countdown");

timer = 20;

function countdown(start) {
    let i = start-1;
    let countdown = setInterval(function() {
        console.log(i);
        countdownTimer.innerText = i;
        i--;
        if (i < 0) {
            clearInterval(countdown);
            console.log("Countdown over!");
            countdownTimer.innerText = "Error: Image not found."
            countdownTimer.style.color = "#f00"
        }
    }, 1000);
}

button.addEventListener('click', function () {
    startMenu.classList.add("hidden");
    countdownMenu.classList.remove("hidden");
    countdown(timer);
    chrome.runtime.sendMessage({ action: "callSearchFunction" }, (response) => {
        console.log("Response from background script:", response);
    });
});

document.addEventListener('DOMContentLoaded', function() {
  countdownTimer.innerText = timer;
});
