import Timer from './time';

// Method to allow changing of bigTimer
var bigTimer : Timer;
var updateBigTimer : Function = (newBigTimer : Timer) : void => {
    bigTimer.unsetBigTimer();
    bigTimer = newBigTimer;
    newBigTimer.setAsBigTimer();
}

// Start out with these timers by default
const t1 = new Timer(updateBigTimer, "Short", 0, 2, 0, 0);
new Timer(updateBigTimer, "Five", 0, 5, 0, 0);
// timersList.push(new Timer(updateBigTimer, "Break", 0, 30, 0, 0));

// bigTimer by default
bigTimer = t1;
bigTimer.setAsBigTimer();

// Set Listeners for Controls
const playButton:HTMLElement = document.getElementById("play");
const pauseButton:HTMLElement = document.getElementById("pause");
const resetButton:HTMLElement = document.getElementById("reset");
playButton.addEventListener("click", () => {
    bigTimer.play();
})
pauseButton.addEventListener("click", () => {
    bigTimer.pause();
})
resetButton.addEventListener("click", () => {
    bigTimer.reset();
})

