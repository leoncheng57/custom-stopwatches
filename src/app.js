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
timersList.push(new Timer("Task").setTimer(0, 5, 0, 0));
timersList.push(new Timer("Duty").setTimer(0, 10, 0, 0));
timersList.push(new Timer("Work").setTimer(0, 30, 0, 0));
timersList.push(new Timer("Foo").setTimer(1, 0, 0, 0));

// Bigtimer by default
var bigtimer = timersList[0];
