function Stopwatching() {
    let startTime, endTime, running, duration = 0;

    Object.defineProperty(this, 'startTime', {
        get: function() {
            return startTime;
        }
    });

    Object.defineProperty(this, 'endTime', {
        get: function() {
            return endTime;
        }
    });

    Object.defineProperty(this, 'running', {
        get: function() {
            return running;
        },
        set: function(value) {
            running = value;
        }
    });

    Object.defineProperty(this, 'duration', {
        get: function() {
            return duration;
        },
        set: function(value) {
            duration = value
        }
    });
}

Stopwatching.prototype.start = function() {
    if (this.running) {
        throw new Error('Stopwatching has already running.');
    }

    this.running = true;
    this.startTime = new Date();
}

Stopwatching.prototype.stop = function() {
    if (!this.running) {
        throw new Error('Stopwatching is not started.');
    }

    this.running = false;
    this.endTime = new Date();
    const second = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
    this.duration += second;
}

Stopwatching.prototype.reset = function() {
    this.endTime = null;
    this.startTime = null;
    this.duration = 0;
    this.running = false;
}