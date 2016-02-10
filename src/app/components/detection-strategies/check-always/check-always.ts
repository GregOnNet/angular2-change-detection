import {Component, ChangeDetectionStrategy, ChangeDetectorRef} from 'angular2/core';


@Component({
  selector: 'check-always',
  // ChangeDetectionStrategy Describes within the change detector which strategy will be used the next time change detection is triggered
  // CheckAlways means that after calling detectChanges the mode of the change detector will remain CheckAlways.
  changeDetection: ChangeDetectionStrategy.CheckAlways,
  template: `
    <h1>CheckAlways</h1>
    Number of ticks: {{ numberOfTicks }}
    <hr>
  `
})
export class CheckAlways {
  numberOfTicks = 0;

  constructor(ref: ChangeDetectorRef) {
    // After this change the detector is set to checked
    this.numberOfTicks++;

    setTimeout(() => {
      this.numberOfTicks++;

      console.log('CheckAlways: Calling detectChanges()...');
      ref.detectChanges();

    }, 6000);
  }
}
