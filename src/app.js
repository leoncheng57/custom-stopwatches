console.log("loading app.js");

import '../sass/styles.scss';

const Timer = require('../js/time.js');

// When you click on the + button, it initializes a new Timer object
var addbutton = document.getElementById("addbutton");
addbutton.addEventListener("click", () => {
  new Timer("New").setTimer(0, 0, 0, 0);
})


// Start out with these timers by default
var timersList = [];
timersList.push(new Timer("Task", 0, 5, 0, 0));
timersList.push(new Timer("Duty", 0, 10, 0, 0));
timersList.push(new Timer("Work", 0, 30, 0, 0));
timersList.push(new Timer("Foo", 1, 0, 0, 0));

// Bigtimer by default
var bigTimer = timersList[0];

// Set Listeners for Controls
var playButton = document.getElementById("play");
var pauseButton = document.getElementById("pause");
var resetButton = document.getElementById("reset");
playButton.addEventListener("click", () => {
    bigTimer.play();
})
pauseButton.addEventListener("click", () => {
    bigTimer.pause();
})
resetButton.addEventListener("click", () => {
    bigTimer.reset();
})

console.log(timersList[0]);