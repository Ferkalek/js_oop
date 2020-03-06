function Stopwatching() {
    let startTime, endTime, running, duration = 0;

    this.start = function() {
        if (running) {
            throw new Error('Stopwatching has already running.');
        }

        running = true;
        startTime = new Date();
    }

    this.stop = function() {
        if (!running) {
            throw new Error('Stopwatching is not started.');
        }

        running = false;
        endTime = new Date();
        const second = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += second;
    }

    this.reset = function() {
        endTime = null;
        startTime = null;
        duration = 0;
        running = false;
    }

    // currentDuratio - create new property and use getter and setter
    // show and change value of this property
    Object.defineProperty(this, 'currentDuratio', {
        get: function() {
            return duration;
        },
        set: function(value) {
            duration = value;
        }
    });

}