/**
 * @public
 */
export default class EaseInOut {
    private radius: number;
    private count: number;
    private oldTimestamp: number;
    private targetValue: number;
    private duration: number;
    private currentRequest: number;
    constructor(private updated: (currentValue: number) => void) { }
    start(initialValue: number, targetValue: number, duration = 500) {
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
        this.count += Math.PI / (this.duration / (newTimestamp - this.oldTimestamp));
        if (this.count > Math.PI) {
            this.updated(this.targetValue);
            return;
        }
        this.updated(this.targetValue - Math.round(this.radius + this.radius * Math.cos(this.count)));
        this.oldTimestamp = newTimestamp;
        this.requestAnimationFrame();
    }
}
