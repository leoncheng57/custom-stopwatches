import Timer from './time';

// When you click on the + button, it initializes a new Timer object
const addbutton:HTMLElement = document.getElementById("addbutton");
addbutton.addEventListener("click", () => {
    new Timer(bigTimerText, "Test", 0, 5, 0, 0);
})


// Start out with these timers by default
var timersList:Timer[] = [];
var bigTimerText:HTMLElement = document.getElementById("bigtimer-text");
timersList.push(new Timer(bigTimerText, "Test", 0, 5, 0, 0));
timersList.push(new Timer(bigTimerText, "Duty", 0, 2, 0, 0));
timersList.push(new Timer(bigTimerText, "Work", 0, 30, 0, 0));
timersList.push(new Timer(bigTimerText, "Foo", 1, 0, 0, 0));

// bigTimer by default
var bigTimer:Timer = timersList[0];
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
