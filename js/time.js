console.log('time.js');

class Timer {
    constructor() {
        this.startTime = null;
    }

    set(duration) {
        this.duration = duration;
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

var timerOne = new Timer();
timerOne.set(30);
timerOne.start();


console.log();
var containerOne = document.getElementsByClassName("container")[0];
var displayTimeOne = containerOne.getElementsByClassName("displayTime")[0];

var startButtonOne = containerOne.getElementsByClassName("start")[0];
startButtonOne.addEventListener("click", function() {
    setInterval(function(){
        displayTimeOne.innerHTML = timerOne.getDisplayTime();
    }, 100)
})