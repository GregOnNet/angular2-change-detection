import {Component, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef} from 'angular2/core';


@Component({
  selector: 'clock',
  templateUrl: 'app/components/clock/clock.html'
})
export class Clock {
  time: Date;
  @Output() timeUpdated: EventEmitter<Date>;

  constructor(private ref: ChangeDetectorRef ) {
    this.time = new Date();
    this.timeUpdated = new EventEmitter<Date>();
  }

  ngOnInit() {
    setInterval(this.updateClock.bind(this), 1000);
  }

  chooseStrategy(strategy: string): void {
    switch(strategy) {
      case ChangeDetectionStrategy[ChangeDetectionStrategy.CheckOnce]:
        this.ref.markForCheck(); break;
      case ChangeDetectionStrategy[ChangeDetectionStrategy.Detached]:
        this.ref.detach(); break;
      case ChangeDetectionStrategy[ChangeDetectionStrategy.CheckAlways]:
        this.ref.reattach(); break;
      default: throw new Error(`Unknown strategy: ${strategy}`);
    }
  }

  private updateClock() {
    this.time = new Date()
    this.timeUpdated.next(this.time);
  }
}
