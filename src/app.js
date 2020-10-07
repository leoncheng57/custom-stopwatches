import '../sass/styles.scss';

const Timer = require('../js/time.js');

console.log("loaded app.js");


new Timer("A").set(0, 5, 0, 0);
new Timer("B").set(0, 10, 0, 0);
new Timer("C").set(0, 30, 0, 0);
new Timer("D").set(1, 0, 0, 0);
