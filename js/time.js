console.log('time.js');

class Timer {
    constructor() {
        this.startTime = null;
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

    setDisplayTime(text) {
        const displayTime = this.theStopwatch.getElementsByClassName("displayTime")[0];
        displayTime.innerHTML = text;
    }

    getTimePassed() {
        const now = new Date();
        const millisPassed = now - this.startTime;
        return millisPassed / 1000;
    }

    getTimeLeft() {
        return this.convertSecondsToString(this.duration - this.getTimePassed());
    }
}


new Timer().set(5);
new Timer().set(10);
new Timer().set(20);
new Timer().set(30);

