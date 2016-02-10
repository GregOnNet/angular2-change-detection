import {Component, ChangeDetectionStrategy, ChangeDetectorRef} from 'angular2/core';


@Component({
  selector: 'default',
  // ChangeDetectionStrategy Describes within the change detector which strategy will be used the next time change detection is triggered
  // Default means that the change detector's mode will be set to CheckAlways during hydration.
  // CheckAlways means that after calling detectChanges the mode of the change detector will remain CheckAlways.
  changeDetection: ChangeDetectionStrategy.Default,
  template: `
    <h1>Default</h1>
    Number of ticks: {{ numberOfTicks }}
    <hr>
  `
})
export class Default {
  numberOfTicks = 0;

  constructor(ref: ChangeDetectorRef) {
    // After this change the detector is set to checked
    this.numberOfTicks++;

    setTimeout(() => {
      this.numberOfTicks++;
    }, 1000);
  }
}
