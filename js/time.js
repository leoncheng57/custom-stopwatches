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
            setInterval(function(){
                THIS.setDisplayTime();
            }, 100)
        })
    }

    set(duration) {
        this.duration = duration;
        this.theStopwatch.getElementsByClassName("displayTime")[0] = "bro";
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

    setDisplayTime() {
        const displayTime = this.theStopwatch.getElementsByClassName("displayTime")[0];
        displayTime.innerHTML = this.getDisplayTime();
    }
}

var numStopwatches = 1;

var timerOne = new Timer();
timerOne.set(30);
timerOne.start();
var timerTwo = new Timer();
timerTwo.set(60);

// var containerOne = document.getElementsByClassName("container")[0];

// var displayTimeOne = containerOne.getElementsByClassName("displayTime")[0];

// var startButtonOne = containerOne.getElementsByClassName("start")[0];
// startButtonOne.addEventListener("click", function() {
//     setInterval(function(){
//         displayTimeOne.innerHTML = timerOne.getDisplayTime();
//     }, 100)
// })

