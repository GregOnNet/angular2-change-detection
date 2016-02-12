import {Component, Output, EventEmitter} from 'angular2/core';


@Component({
  selector: 'clock',
  templateUrl: 'app/components/clock/clock.html',
})
export class Clock {
  time: Date;
  @Output() timeUpdated: EventEmitter<Date>;

  constructor() {
    this.time = new Date();
    this.timeUpdated = new EventEmitter<Date>();
  }

  ngOnInit() {
    setInterval(this.updateClock.bind(this), 1000);
  }

  private updateClock() {
    this.time = new Date()
    this.timeUpdated.next(this.time);
  }
}
