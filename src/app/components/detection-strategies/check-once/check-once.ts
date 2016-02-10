import {Component, ChangeDetectionStrategy, ChangeDetectorRef} from 'angular2/core';


@Component({
  selector: 'check-once',
  // ChangeDetectionStrategy Describes within the change detector which strategy will be used the next time change detection is triggered
  // CheckedOnce means that after calling detectChanges the mode of the change detector will become Checked.
  changeDetection: ChangeDetectionStrategy.CheckOnce,
  template: `
    <h1>CheckOnce</h1>
    Number of ticks: {{ numberOfTicks }}
    <hr>
  `
})
export class CheckOnce {
  numberOfTicks = 0;

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
