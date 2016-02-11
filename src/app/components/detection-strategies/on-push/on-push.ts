import {Component, ChangeDetectionStrategy, ChangeDetectorRef} from 'angular2/core';
import {IDemo} from '../../../contracts/demo.d';

@Component({
  selector: 'on-push',
  // ChangeDetectionStrategy Describes within the change detector which strategy will be used the next time change detection is triggered
  // OnPush means that the change detector's mode will be set to CheckOnce during hydration.
  // CheckedOnce means that after calling detectChanges the mode of the change detector will become Checked.
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app/components/detection-strategies/base.template.html'
})
export class OnPush implements IDemo{
  title = 'OnPush'
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
