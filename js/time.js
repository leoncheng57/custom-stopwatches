console.log('time.js');

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
        // TODO: listener for reset button
        this.resetButton.addEventListener("click", () => {
            this.reset();
        })
    }

    set(hours, minutes, seconds, millis) {
        this.duration = millis + seconds*1000 + minutes*60*1000 + hours*60*60*1000;
        this.setDisplayTime(this.convertTimeToString(this.duration));
    }

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
        return `${hours}:${minutes}:${seconds}:${remMillis}`;
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


new Timer("A").set(0, 5, 0, 0);
new Timer("B").set(0, 10, 0, 0);
new Timer("C").set(0, 30, 0, 0);
new Timer("D").set(1, 0, 0, 0);

