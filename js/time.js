console.log('time.js');

class Timer {
    constructor(title) {
        this.startTime = null;
        this.duration = null;

        // Create a clone out of the hidden-stopwatch Node
        const containerOne = document.getElementsByClassName("hidden-stopwatch")[0];
        const wrapper = document.getElementById("wrapper");
        this.theStopwatch = containerOne.cloneNode(true);
        this.theStopwatch.className = "regular-stopwatch";
        wrapper.appendChild(this.theStopwatch);

        // Make class variables out of the html components
        this.startButton = this.theStopwatch.getElementsByClassName("start")[0];
        this.stopButton = this.theStopwatch.getElementsByClassName("stop")[0];
        this.resetButton = this.theStopwatch.getElementsByClassName("reset")[0];
        this.displayTime = this.theStopwatch.getElementsByClassName("displayTime")[0];
        this.title = this.theStopwatch.getElementsByClassName("title")[0];
        
        
        this.title.innerHTML = title;
        var THIS = this;
        this.startButton.addEventListener("click", function() {
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
        this.displayTime.innerHTML = text;
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


new Timer("A").set(5);
new Timer("B").set(10);
new Timer("C").set(20);
new Timer("D").set(30);

