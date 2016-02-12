import {Component, Input, ChangeDetectionStrategy, ChangeDetectorRef} from 'angular2/core';
import {IDemo} from '../../contracts/demo.d';
import {AbstractChangeStrategy} from '../detection-strategies/base-strategy.functions';

@Component({
  selector: 'child-clock',
  // ChangeDetectionStrategy Describes within the change detector which strategy will be used the next time change detection is triggered
  // CheckAlways means that after calling detectChanges the mode of the change detector will remain CheckAlways.
  templateUrl: './app/components/child-clock/child-clock.html'
})
export class ChildClock extends AbstractChangeStrategy implements IDemo {
  title: string = ChangeDetectionStrategy[ChangeDetectionStrategy.CheckAlways];
  numberOfTicks = 0;
  @Input() time:Date;

  constructor(ref: ChangeDetectorRef) {
    super();
    this.ref = ref;

    setInterval(() => this.numberOfTicks++ , 1000);
    // ??? Using detectChanges throws error: Error during instantiation of CheckAlways!
    // this.ref.detectChanges();
  }
}
