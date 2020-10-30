import Timer from './time';

// Method to allow changing of bigTimer
var bigTimer : Timer;
var updateBigTimer : Function = (newBigTimer : Timer) : void => {
    bigTimer.unsetBigTimer();
    bigTimer = newBigTimer;
    newBigTimer.setAsBigTimer();
}

// Start out with these timers by default
var timersList:Timer[] = [];
timersList.push(new Timer(updateBigTimer, "Short", 0, 2, 0, 0));
timersList.push(new Timer(updateBigTimer, "Five", 0, 5, 0, 0));
// timersList.push(new Timer(updateBigTimer, "Break", 0, 30, 0, 0));

// bigTimer by default
bigTimer = timersList[0];
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

// When you click on the + button, it initializes a new Timer object
const addbutton:HTMLElement = document.getElementById("addbutton");
addbutton.addEventListener("click", () => {
    document.getElementById("modal").classList.remove("invisible");
})
const closeModal:HTMLElement = document.getElementById("closeModal");
closeModal.addEventListener("click", () => {
    document.getElementById("modal").classList.add("invisible");
})

