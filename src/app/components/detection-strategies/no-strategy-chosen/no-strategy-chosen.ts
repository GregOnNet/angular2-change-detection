import {Component, ChangeDetectionStrategy, ChangeDetectorRef} from 'angular2/core';


@Component({
  selector: 'no-strategy-chosen',
  template: `
    <h1>No strategy chosen</h1>
    Number of ticks: {{ numberOfTicks }}
    <hr>
  `
})
export class NoStrategyChosen {
  numberOfTicks = 0;

  constructor() {
    setInterval(() => {
      this.numberOfTicks++;
    }, 1000);
  }
}
