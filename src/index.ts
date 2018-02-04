/**
 * @public
 */
export abstract class Base {
  protected count = 0
  protected oldTimestamp = 0
  protected targetValue = 0
  protected duration = 0
  private currentRequest = 0
  constructor (protected updated: (currentValue: number) => void) { }
  public start (initialValue: number, targetValue: number, duration = 500) {
    this.targetValue = targetValue
    this.duration = duration
    this.count = 0
    this.oldTimestamp = performance.now()
    this.requestAnimationFrame()
  }
  public stop () {
    if (this.currentRequest) {
      window.cancelAnimationFrame(this.currentRequest)
    }
  }
  protected abstract step (newTimestamp: number): void
  protected requestAnimationFrame () {
    this.stop()
    this.currentRequest = window.requestAnimationFrame(timestamp => {
      this.step(timestamp)
    })
  }
}

/**
 * @public
 */
export class EaseInOut extends Base {
  private radius = 0
  public start (initialValue: number, targetValue: number, duration = 500) {
    super.start(initialValue, targetValue, duration)
    this.radius = (targetValue - initialValue) / 2
  }
  protected step (newTimestamp: number) {
    if (newTimestamp < this.oldTimestamp) {
      this.requestAnimationFrame()
      return
    }
    this.count += Math.PI / this.duration * (newTimestamp - this.oldTimestamp)
    if (this.count > Math.PI) {
      this.updated(this.targetValue)
      return
    }
    this.updated(this.targetValue - Math.round(this.radius + this.radius * Math.cos(this.count)))
    this.oldTimestamp = newTimestamp
    this.requestAnimationFrame()
  }
}

/**
 * @public
 */
export class EaseIn extends Base {
  private radius = 0
  public start (initialValue: number, targetValue: number, duration = 500) {
    super.start(initialValue, targetValue, duration)
    this.radius = targetValue - initialValue
  }
  protected step (newTimestamp: number) {
    if (newTimestamp < this.oldTimestamp) {
      this.requestAnimationFrame()
      return
    }
    this.count += Math.PI / 2 / this.duration * (newTimestamp - this.oldTimestamp)
    if (this.count > Math.PI / 2) {
      this.updated(this.targetValue)
      return
    }
    this.updated(this.targetValue - Math.round(this.radius * Math.cos(this.count)))
    this.oldTimestamp = newTimestamp
    this.requestAnimationFrame()
  }
}

/**
 * @public
 */
export class EaseOut extends Base {
  private radius = 0
  public start (initialValue: number, targetValue: number, duration = 500) {
    super.start(initialValue, targetValue, duration)
    this.radius = targetValue - initialValue
  }
  protected step (newTimestamp: number) {
    if (newTimestamp < this.oldTimestamp) {
      this.requestAnimationFrame()
      return
    }
    this.count += Math.PI / 2 / this.duration * (newTimestamp - this.oldTimestamp)
    if (this.count > Math.PI / 2) {
      this.updated(this.targetValue)
      return
    }
    this.updated(this.targetValue - Math.round(this.radius - this.radius * Math.sin(this.count)))
    this.oldTimestamp = newTimestamp
    this.requestAnimationFrame()
  }
}

/**
 * @public
 */
export class Linear extends Base {
  private offset = 0
  public start (initialValue: number, targetValue: number, duration = 500) {
    super.start(initialValue, targetValue, duration)
    this.offset = targetValue - initialValue
  }
  protected step (newTimestamp: number) {
    if (newTimestamp < this.oldTimestamp) {
      this.requestAnimationFrame()
      return
    }
    this.count += (newTimestamp - this.oldTimestamp) / this.duration
    if (this.count > 1) {
      this.updated(this.targetValue)
      return
    }
    this.updated(this.targetValue - Math.round(this.offset - this.offset * this.count))
    this.oldTimestamp = newTimestamp
    this.requestAnimationFrame()
  }
}
