import {Component, ChangeDetectionStrategy, ChangeDetectorRef} from 'angular2/core';
import {IDemo} from '../../../contracts/demo.d';

@Component({
  selector: 'no-strategy-chosen',
templateUrl: './app/components/detection-strategies/base.template.html'
})
export class NoStrategyChosen implements IDemo {
  title: string = 'No startegy chosen';
  numberOfTicks = 0;

  constructor() {
    setInterval(() => {
      this.numberOfTicks++;
    }, 1000);
  }
}
