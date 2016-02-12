import {Component, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef} from 'angular2/core';
import {AbstractChangeStrategy} from '../detection-strategies/base-strategy.functions';

@Component({
  selector: 'clock',
  templateUrl: 'app/components/clock/clock.html'
})
export class Clock extends AbstractChangeStrategy{
  time: Date;
  @Output() timeUpdated: EventEmitter<Date>;

  constructor(ref: ChangeDetectorRef ) {
    this.ref = ref;
    this.time = new Date();
    this.timeUpdated = new EventEmitter<Date>();
    super();
  }

  ngOnInit() {
    setInterval(this.updateClock.bind(this), 1000);
  }

  private updateClock() {
    this.time = new Date()
    this.timeUpdated.next(this.time);
  }
}
