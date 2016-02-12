import {Component, Input, ChangeDetectionStrategy, ChangeDetectorRef} from 'angular2/core';
import {IDemo} from '../../../contracts/demo.d';

@Component({
  selector: 'check-once',
  // ChangeDetectionStrategy Describes within the change detector which strategy will be used the next time change detection is triggered
  // CheckedOnce means that after calling detectChanges the mode of the change detector will become Checked.
  changeDetection: ChangeDetectionStrategy.CheckOnce,
templateUrl: './app/components/detection-strategies/base.template.html'
})
export class CheckOnce implements IDemo {
  title: string = ChangeDetectionStrategy[ChangeDetectionStrategy.CheckOnce];
  numberOfTicks = 0;
  @Input() time:Date;

  constructor(ref: ChangeDetectorRef) {
    // After this change the detector is set to checked
    this.numberOfTicks++;

    setTimeout(() => {
      console.log('detectChanges()...')
      ref.detectChanges();

      // Change after setting detection to checked, so this change should no
      // be recognized
      this.numberOfTicks++;
    }, 5000);
  }
}
