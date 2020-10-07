console.log("loading app.js");

import '../sass/styles.scss';

const Timer = require('../js/time.js');


var addbutton = document.getElementById("addbutton");
addbutton.addEventListener("click", () => {
  new Timer("New").setTimer(0, 0, 0, 0);
})



new Timer("Task").setTimer(0, 5, 0, 0);
new Timer("Duty").setTimer(0, 10, 0, 0);
new Timer("Work").setTimer(0, 30, 0, 0);
new Timer("Foo").setTimer(1, 0, 0, 0);
