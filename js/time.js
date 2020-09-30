class Timer {
    constructor(duration) {
        this.duration = duration;
        this.startTime = null;
    }

    start() {
        this.startTime = new Date();
        this.counter = setInterval(function(){console.log('tick')}, 1000);
    }

    getTime() {
        const now = new Date();
        const millisPassed = now - this.startTime;
        return millisPassed / 1000;
    }
}

var timerOne = new Timer(30);
timerOne.start();

setInterval(function(){
    const secondsPassed = timerOne.getTime();
    console.log(secondsPassed);
}, 1000)

console.log('time.js');
