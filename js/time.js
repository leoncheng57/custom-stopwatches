console.log('time.js');

class Timer {
    constructor(duration) {
        this.duration = duration;
        this.startTime = null;
    }

    start() {
        this.startTime = new Date();
    }

    getTimePassed() {
        const now = new Date();
        const millisPassed = now - this.startTime;
        return millisPassed / 1000;
    }

    getTimeLeft() {
        return this.duration - this.getTimePassed();
    }

    getDisplayTime() {
        const precise = this.getTimeLeft();
        const seconds = Math.floor(precise);
        const millis = Math.floor((precise % 1) * 100);
        return `${seconds}:${millis}`;
    }
}

var timerOne = new Timer(30);
timerOne.start();


console.log();
var containerOne = document.getElementsByClassName("container")[0];
var displayTimeOne = containerOne.getElementsByClassName("displayTime")[0];

setInterval(function(){
    displayTimeOne.innerHTML = timerOne.getDisplayTime();
}, 100)
