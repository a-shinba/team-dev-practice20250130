let startTime;
let updatedTime;
let difference;
let timerInterval;
let running = false;
let startTimestamp;

const timeDisplay = document.getElementById('time');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');

function startStopwatch() {
    startTimestamp = new Date().getTime();
    timerInterval = setInterval(updateTime, 10);
    startStopBtn.textContent = 'ストップ';
}

function stopStopwatch() {
    clearInterval(timerInterval);
    startStopBtn.textContent = 'スタート';
}

function resetStopwatch() {
    clearInterval(timerInterval);
    timeDisplay.textContent = '00:00:00.00';
    startStopBtn.textContent = 'スタート';
    running = false;
}

function updateTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTimestamp;

    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    let hundredths = Math.floor((difference % 1000) / 10);

    timeDisplay.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${padHundredths(hundredths)}`;
}

function pad(number) {
    return number < 10 ? '0' + number : number;
}

function padHundredths(num) {
    return num < 10 ? '0' + num : num;
}

startStopBtn.addEventListener('click', () => {
    if (running) {
        stopStopwatch();
    } else {
        startStopwatch();
    }
    running = !running;
});

resetBtn.addEventListener('click', resetStopwatch);