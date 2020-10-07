console.log("loading app.js");

import '../sass/styles.scss';

const Timer = require('../js/time.js');



new Timer("A").setTimer(0, 5, 0, 0);
new Timer("B").setTimer(0, 10, 0, 0);
new Timer("C").setTimer(0, 30, 0, 0);
new Timer("D").setTimer(1, 0, 0, 0);
