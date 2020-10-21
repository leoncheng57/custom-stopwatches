console.log('loading time.js');

class Timer {
    constructor(bigTimerText, title, hours, minutes, seconds, millis) {
        this.startTime = null;
        this.duration = null;
        this.interval = null;
        this.running = false;
        this.timeElapsedStored = 0;
        this.isBigTimer = false;
        this.bigTimerText = bigTimerText;

        // Create a clone out of the hidden-stopwatch Node
        const containerOne = document.getElementsByClassName("hidden-stopwatch")[0];
        const timerbank = document.getElementById("timerbank");
        this.theStopwatch = containerOne.cloneNode(true);
        this.theStopwatch.className = "regular-stopwatch";
        timerbank.appendChild(this.theStopwatch);

        // Make class variables out of the html components
        this.displayTime = this.theStopwatch.getElementsByClassName("displayTime")[0];
        this.title = this.theStopwatch.getElementsByClassName("title")[0];
        
        // Set Title
        this.title.innerHTML = title;

        // Set Time
        this.duration = millis + seconds*1000 + minutes*60*1000 + hours*60*60*1000;
        this.setDisplayTime(this.convertTimeToString(this.duration));
    }

    // Public Methods
    setAsBigTimer() {
        this.isBigTimer = true;
        this.setDisplayTime(this.convertTimeToString(this.duration));
    }
    unsetBigTimer(){
        this.isBigTimer = false;
    }

    setTime() {
        this.duration = millis + seconds*1000 + minutes*60*1000 + hours*60*60*1000;
        this.setDisplayTime(this.convertTimeToString(this.duration));
    }

    setTitle(title) {
        this.title.innerHTML = title;
    }

    play() {
        this.startTime = new Date();
        if (this.running == false){
            this.running = true;
            this.interval = setInterval(() => {
                this.updateTimer();}, 
                100)
        }
    }

    pause() {
        if (this.running != false) {
            this.timeElapsedStored += this.getTimeElapsedSinceLastStart();
            clearInterval(this.interval);
            this.running = false;
            this.startTime = null;
        }
    }

    reset() {
        this.pause();
        this.timeElapsedStored = 0;
        this.setDisplayTime(this.convertTimeToString(this.duration));
    }

    getDisplayTime() {
        return this.convertTimeToString(this.duration);
    }

    // Private Methods
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
        if (this.isBigTimer) {
            // Set the bigTimer text to be the time
            this.bigTimerText.innerHTML = text;
        }
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

