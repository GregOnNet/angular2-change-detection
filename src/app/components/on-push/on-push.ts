import {Component, ChangeDetectionStrategy, ChangeDetectorRef} from 'angular2/core';


@Component({
  selector: 'on-push',
  // ChangeDetectionStrategy Describes within the change detector which strategy will be used the next time change detection is triggered
  // OnPush means that the change detector's mode will be set to CheckOnce during hydration.
  // CheckedOnce means that after calling detectChanges the mode of the change detector will become Checked.
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h1>OnPush</h1>
    Number of ticks: {{ numberOfTicks }}
    <hr>
  `
})
export class OnPush {
  numberOfTicks = 0;

  constructor(ref: ChangeDetectorRef) {
    setInterval(() => {
        this.numberOfTicks++;

        console.log('Tick');
        // the following is required, otherwise the view will not be updated
        ref.markForCheck();
    }, 1000);
  }
}
