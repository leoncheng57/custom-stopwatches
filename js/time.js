console.log('time.js');

class Timer {
    constructor() {
        this.startTime = null;
        numStopwatches += 1;
        const containerOne = document.getElementsByClassName("hidden-stopwatch")[0];
        const wrapper = document.getElementById("wrapper");
        this.theStopwatch = containerOne.cloneNode(true);
        this.theStopwatch.className = "regular-stopwatch";
        wrapper.appendChild(this.theStopwatch);

        const startButton = this.theStopwatch.getElementsByClassName("start")[0];
        var THIS = this;
        startButton.addEventListener("click", function() {
            THIS.start();
            setInterval(function(){
                THIS.setDisplayTime(THIS.getTimeLeft());
            }, 100)
        })
    }

    set(duration) {
        this.duration = duration;
        this.setDisplayTime(this.convertSecondsToString(duration));
    }

    start() {
        this.startTime = new Date();
    }

    convertSecondsToString(seconds) {
        const secsRounded = Math.floor(seconds);
        const millis = Math.floor((seconds % 1) * 100);
        return `${secsRounded}:${millis}`;
    }

    getTimePassed() {
        const now = new Date();
        const millisPassed = now - this.startTime;
        return millisPassed / 1000;
    }

    getTimeLeft() {
        const precise = this.duration - this.getTimePassed();
        const seconds = Math.floor(precise);
        const millis = Math.floor((precise % 1) * 100);
        return `${seconds}:${millis}`;
    }

    setDisplayTime(text) {
        const displayTime = this.theStopwatch.getElementsByClassName("displayTime")[0];
        displayTime.innerHTML = text;
    }
}

var numStopwatches = 1;

var timerOne = new Timer();
timerOne.set(30);
var timerTwo = new Timer();
timerTwo.set(60);

