/**
 * @public
 */
export class EaseInOut {
    private radius: number;
    private count: number;
    private oldTimestamp: number;
    private targetValue: number;
    private duration: number;
    private currentRequest: number;
    constructor(private updated: (currentValue: number) => void) { }
    public start(initialValue: number, targetValue: number, duration = 500) {
        this.targetValue = targetValue;
        this.duration = duration;
        this.count = 0;
        this.radius = (targetValue - initialValue) / 2;
        this.oldTimestamp = performance.now();
        this.requestAnimationFrame();
    }
    private requestAnimationFrame() {
        if (this.currentRequest) {
            window.cancelAnimationFrame(this.currentRequest);
        }
        this.currentRequest = window.requestAnimationFrame(timestamp => {
            this.step(timestamp);
        });
    }
    private step(newTimestamp: number) {
        if (newTimestamp < this.oldTimestamp) {
            this.requestAnimationFrame();
            return;
        }
        this.count += Math.PI / this.duration * (newTimestamp - this.oldTimestamp);
        if (this.count > Math.PI) {
            this.updated(this.targetValue);
            return;
        }
        this.updated(this.targetValue - Math.round(this.radius + this.radius * Math.cos(this.count)));
        this.oldTimestamp = newTimestamp;
        this.requestAnimationFrame();
    }
}

/**
 * @public
 */
export class EaseIn {
    private radius: number;
    private count: number;
    private oldTimestamp: number;
    private targetValue: number;
    private duration: number;
    private currentRequest: number;
    constructor(private updated: (currentValue: number) => void) { }
    public start(initialValue: number, targetValue: number, duration = 500) {
        this.targetValue = targetValue;
        this.duration = duration;
        this.count = 0;
        this.radius = targetValue - initialValue;
        this.oldTimestamp = performance.now();
        this.requestAnimationFrame();
    }
    private requestAnimationFrame() {
        if (this.currentRequest) {
            window.cancelAnimationFrame(this.currentRequest);
        }
        this.currentRequest = window.requestAnimationFrame(timestamp => {
            this.step(timestamp);
        });
    }
    private step(newTimestamp: number) {
        if (newTimestamp < this.oldTimestamp) {
            this.requestAnimationFrame();
            return;
        }
        this.count += Math.PI / 2 / this.duration * (newTimestamp - this.oldTimestamp);
        if (this.count > Math.PI / 2) {
            this.updated(this.targetValue);
            return;
        }
        this.updated(this.targetValue - Math.round(this.radius * Math.cos(this.count)));
        this.oldTimestamp = newTimestamp;
        this.requestAnimationFrame();
    }
}

/**
 * @public
 */
export class EaseOut {
    private radius: number;
    private count: number;
    private oldTimestamp: number;
    private targetValue: number;
    private duration: number;
    private currentRequest: number;
    constructor(private updated: (currentValue: number) => void) { }
    public start(initialValue: number, targetValue: number, duration = 500) {
        this.targetValue = targetValue;
        this.duration = duration;
        this.count = 0;
        this.radius = targetValue - initialValue;
        this.oldTimestamp = performance.now();
        this.requestAnimationFrame();
    }
    private requestAnimationFrame() {
        if (this.currentRequest) {
            window.cancelAnimationFrame(this.currentRequest);
        }
        this.currentRequest = window.requestAnimationFrame(timestamp => {
            this.step(timestamp);
        });
    }
    private step(newTimestamp: number) {
        if (newTimestamp < this.oldTimestamp) {
            this.requestAnimationFrame();
            return;
        }
        this.count += Math.PI / 2 / this.duration * (newTimestamp - this.oldTimestamp);
        if (this.count > Math.PI / 2) {
            this.updated(this.targetValue);
            return;
        }
        this.updated(this.targetValue - Math.round(this.radius - this.radius * Math.sin(this.count)));
        this.oldTimestamp = newTimestamp;
        this.requestAnimationFrame();
    }
}
