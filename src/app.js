console.log("loading app.js");

import '../sass/styles.scss';

const Timer = require('../js/time.js');



new Timer("Task").setTimer(0, 5, 0, 0);
new Timer("Duty").setTimer(0, 10, 0, 0);
new Timer("Work").setTimer(0, 30, 0, 0);
new Timer("Foo").setTimer(1, 0, 0, 0);
