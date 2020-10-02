console.log('time.js');

class Timer {
    constructor(title) {
        this.startTime = null;
        this.duration = null;
        this.interval = null;

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
        
        var THIS = this;
        // Set Title
        this.title.innerHTML = title;
        // Set Button Listeners
        this.startButton.addEventListener("click", function() {
            THIS.start();
        })
        // TODO: listener for stop button
        this.stopButton.addEventListener("click", function() {
            THIS.stop();
        })
        // TODO: listener for reset button
    }

    set(hours, minutes, seconds, millis) {
        this.duration = millis + seconds*1000 + minutes*60*1000 + hours*60*60*1000;
        this.setDisplayTime(this.convertTimeToString(this.duration));
    }

    start() {
        this.startTime = new Date();
        var THIS = this;
        this.interval = setInterval(function(){
            THIS.setDisplayTime(THIS.getTimeLeft());
        }, 100)
    }

    stop() {
        clearInterval(this.interval);
    }

    convertTimeToString(totalMillis) {
        const hours = Math.floor(totalMillis/(60*60*1000));
        totalMillis = totalMillis - hours*60*60*1000;
        const minutes = Math.floor(totalMillis/(60*1000));
        totalMillis = totalMillis - minutes*60*1000;
        const seconds = Math.floor(totalMillis/1000);
        const remMillis = totalMillis % 1000;
        return `${hours}:${minutes}:${seconds}:${remMillis}`;
    }

    setDisplayTime(text) {
        this.displayTime.innerHTML = text;
    }

    getTimePassed() {
        const now = new Date();
        const millisPassed = now - this.startTime;
        return millisPassed;
    }

    getTimeLeft() {
        return this.convertTimeToString(this.duration - this.getTimePassed());
    }
}


new Timer("A").set(0, 5, 0, 0);
new Timer("B").set(0, 10, 0, 0);
new Timer("C").set(0, 30, 0, 0);
new Timer("D").set(1, 0, 0, 0);

