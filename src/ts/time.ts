console.log('loading time.ts');

class Timer {
    startTime: Date;
    duration: number;
    intervalHolder: any;
    running: boolean;
    timeElapsedStored: number;
    isBigTimer: boolean;
    bigTimerText: HTMLElement;
    hero: HTMLElement;
    theHTMLObject: any;
    displayTime: HTMLElement;
    title: HTMLElement;
    delete: HTMLElement;

    constructor(
        updateBigTimer: Function,
        timerTitle: string,
        hours: number,
        minutes: number,
        seconds: number,
        millis: number) {
            
        this.running = false;
        this.timeElapsedStored = 0;
        this.isBigTimer = false;
        this.bigTimerText = document.getElementById("bigtimer-text");
        this.hero = document.getElementById("hero");

        // Create a clone out of the hidden-stopwatch Node
        const containerOne = document.getElementsByClassName("hidden-stopwatch")[0];
        const timerbank = document.getElementById("timerbank");
        this.theHTMLObject = containerOne.cloneNode(true);
        this.theHTMLObject.className = "regular-stopwatch";
        timerbank.appendChild(this.theHTMLObject);

        // Make class variables out of the html components
        this.displayTime = this.theHTMLObject.getElementsByClassName("displayTime")[0];
        this.title = this.theHTMLObject.getElementsByClassName("title")[0];
        
        // Set Title
        this.title.innerHTML = timerTitle;

        // Set Time
        this.duration = millis + seconds*1000 + minutes*60*1000 + hours*60*60*1000;
        this.setDisplayTime(this.convertTimeToString(this.duration));

        // Change bigTimer if this is clicked
        this.theHTMLObject.addEventListener("click", () => {
            updateBigTimer(this);
        })

        // Self-destroy if delete is clicked
        this.delete = this.theHTMLObject.getElementsByClassName("deleteIcon")[0];
        this.delete.addEventListener("click", (e) => {e.stopPropagation(); this.destroy()});
    }

    // Public Methods
    public setAsBigTimer() : void {
        this.isBigTimer = true;
        this.theHTMLObject.classList.add("titleOnly");
        this.setDisplayTime(this.convertTimeToString(this.duration));
    }

    public unsetBigTimer() : void {
        this.isBigTimer = false;
        this.theHTMLObject.classList.remove("titleOnly");
    }

    public play() : void{
        this.stopFlashing();
        this.startTime = new Date();
        if (this.running == false){
            this.running = true;
            this.intervalHolder = setInterval(() => {
                this.updateTimer();}, 
                100)
        }
    }

    public pause() : void{
        this.stopFlashing();
        if (this.running != false) {
            this.timeElapsedStored += this.getTimeElapsedSinceLastStart();
            clearInterval(this.intervalHolder);
            this.running = false;
            this.startTime = null;
        }
    }

    public reset() : void {
        this.stopFlashing();
        this.pause();
        this.timeElapsedStored = 0;
        this.setDisplayTime(this.convertTimeToString(this.duration));
    }

    public destroy() : void {
        this.theHTMLObject.remove();
        this.unsetBigTimer();
    }

    // Private Methods
    private convertTimeToString(totalMillis: number) : string {
        const hours = Math.floor(totalMillis/(60*60*1000));
        totalMillis = totalMillis - hours*60*60*1000;
        const minutes = Math.floor(totalMillis/(60*1000));
        totalMillis = totalMillis - minutes*60*1000;
        const seconds = Math.floor(totalMillis/1000);
        // const remMillis = totalMillis % 1000;
        // return `${hours}:${minutes}:${seconds}:${remMillis}`;
        return `${hours}:${minutes}:${seconds}`;
    }

    private setDisplayTime(text: string) : void {
        if (this.isBigTimer) {
            // Set the bigTimer text to be the time
            this.bigTimerText.innerHTML = text;
        }
        this.displayTime.innerHTML = text;
    }

    private getTimeElapsedSinceLastStart() : number {
        const now = new Date();
        const millisPassed = now.getTime() - this.startTime.getTime();
        return millisPassed;
    }

    private updateTimer() : void {
        const timeElapsed = this.getTimeElapsedSinceLastStart() + this.timeElapsedStored;
        const timeRemaining = this.duration - timeElapsed;
        if (timeRemaining < 0) {
            this.startFlashing();
            this.setDisplayTime("DONE");
        }
        else {
            this.setDisplayTime(this.convertTimeToString(timeRemaining));
        }
    }

    private startFlashing() : void {
        this.theHTMLObject.classList.add("flashing");
        if (this.isBigTimer) {
            this.hero.classList.add("flashing");
        }
        else {
            this.hero.classList.remove("flashing");
        }
    }

    private stopFlashing() : void {
        this.theHTMLObject.classList.remove("flashing");
        if (this.isBigTimer) {
            this.hero.classList.remove("flashing");
        }
    }
}


export {Timer};