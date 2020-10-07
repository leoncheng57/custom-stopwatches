console.log('loading time.js');

class Timer {
    constructor(title) {
        this.startTime = null;
        this.duration = null;
        this.interval = null;
        this.running = false;
        this.timeElapsedStored = 0;

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
        
        // Set Title
        this.title.innerHTML = title;
        // Set Button Listeners
        this.startButton.addEventListener("click", () => {
            this.start();
        })
        this.stopButton.addEventListener("click", () => {
            this.stop();
        })
        this.resetButton.addEventListener("click", () => {
            this.reset();
        })
    }

    // Public Set Methods
    setTimer(hours, minutes, seconds, millis) {
        this.duration = millis + seconds*1000 + minutes*60*1000 + hours*60*60*1000;
        this.setDisplayTime(this.convertTimeToString(this.duration));
    }

    setTitle(title) {
        this.title.innerHTML = title;
    }

    // Private Methods
    start() {
        this.startTime = new Date();
        if (this.running == false){
            this.running = true;
            this.interval = setInterval(() => {
                this.updateTimer();}, 
                100)
        }
    }

    stop() {
        if (this.running != false) {
            this.timeElapsedStored += this.getTimeElapsedSinceLastStart();
            clearInterval(this.interval);
            this.running = false;
            this.startTime = null;
        }
    }

    reset() {
        this.stop();
        this.timeElapsedStored = 0;
        this.setDisplayTime(this.convertTimeToString(this.duration));
    }

    convertTimeToString(totalMillis) {
        const hours = Math.floor(totalMillis/(60*60*1000));
        totalMillis = totalMillis - hours*60*60*1000;
        const minutes = Math.floor(totalMillis/(60*1000));
        totalMillis = totalMillis - minutes*60*1000;
        const seconds = Math.floor(totalMillis/1000);
        const remMillis = totalMillis % 1000;
        // return `${hours}:${minutes}:${seconds}:${remMillis}`;
        return `${hours}:${minutes}:${seconds}`;
    }

    setDisplayTime(text) {
        this.displayTime.innerHTML = text;
    }

    getTimeElapsedSinceLastStart() {
        const now = new Date();
        const millisPassed = now - this.startTime;
        return millisPassed;
    }

    updateTimer() {
        const timeElapsed = this.getTimeElapsedSinceLastStart() + this.timeElapsedStored;
        const timeRemaining = this.duration - timeElapsed;
        this.setDisplayTime(this.convertTimeToString(timeRemaining));
    }
}

module.exports = Timer;

